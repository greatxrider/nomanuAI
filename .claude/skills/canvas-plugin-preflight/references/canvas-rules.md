# Canvas Plugin Rules Reference

Condensed from Canvas SDK documentation (`docs/canvasMD/`) and battle-tested debugging experience.

## Table of Contents
1. [Sandbox Allowed Imports](#sandbox-allowed-imports)
2. [Sandbox Blocked Operations](#sandbox-blocked-operations)
3. [Safe Top-Level Imports](#safe-top-level-imports)
4. [Manifest Schema](#manifest-schema)
5. [SimpleAPI Patterns](#simpleapi-patterns)
6. [Deploy Commands](#deploy-commands)
7. [Secret Management](#secret-management)
8. [File Mapping](#file-mapping)
9. [Common Failure Modes](#common-failure-modes)

---

## Sandbox Allowed Imports

### Standard Library (allowed subset only)
| Module | Allowed Imports |
|--------|-----------------|
| `__future__` | annotations |
| `abc` | ABC, abstractmethod |
| `base64` | b64decode, b64encode |
| `collections` | Counter, defaultdict |
| `dataclasses` | asdict, astuple, dataclass, field, Field, fields, InitVar, replace |
| `datetime` | date, datetime, timedelta, timezone, UTC |
| `dateutil` | relativedelta |
| `decimal` | Decimal |
| `enum` | Enum, StrEnum |
| `functools` | reduce |
| `hashlib` | sha256 |
| `hmac` | compare_digest, new |
| `http` | HTTPStatus |
| `json` | dumps, loads |
| `re` | compile, DOTALL, IGNORECASE, match, search, split, sub |
| `string` | ascii_lowercase, digits |
| `time` | time, sleep |
| `typing` | Any, cast, Dict, Final, Iterable, List, Literal, NamedTuple, NotRequired, Protocol, Optional, Sequence, Tuple, Type, TypeGuard, TypedDict, Union |
| `urllib` | parse |
| `urllib.parse` | urlencode, quote |
| `uuid` | uuid4, UUID |
| `zoneinfo` | ZoneInfo |

### Third-Party (allowed in sandbox)
| Module | Allowed Imports |
|--------|-----------------|
| `arrow` | get, now, utcnow |
| `django.db.models` | Avg, BigIntegerField, Case, CharField, Count, Exists, IntegerField, Max, Min, Model, OuterRef, Prefetch, Q, Subquery, Sum, Value, When |
| `django.utils.functional` | cached_property |
| `jwt` | decode, encode, ExpiredSignatureError, InvalidTokenError, PyJWKClient |
| `pydantic` | BaseModel, conint, ConfigDict, constr, Field, RootModel, ValidationError |
| `rapidfuzz` | fuzz, process, utils |
| `requests` | delete, get, patch, post, put, request, RequestException, Response |

### Canvas SDK (all available)
canvas_sdk.caching, canvas_sdk.commands, canvas_sdk.effects, canvas_sdk.events, canvas_sdk.handlers, canvas_sdk.protocols, canvas_sdk.questionnaires, canvas_sdk.templates, canvas_sdk.utils, canvas_sdk.v1.data, canvas_sdk.value_set, canvas_sdk.views, logger

---

## Sandbox Blocked Operations

| Blocked | Alternative |
|---------|-------------|
| `str.format()` | f-strings: `f"Hello {name}"` |
| `str.format_map()` | f-strings |
| `textwrap` module | Custom word-wrap function |
| `import os` | Not available |
| `import sys` | Not available |
| Direct filesystem/OS access | Use Canvas SDK Data module |
| Direct database access | Use Canvas SDK Data module |
| Relative imports (`from .utils import x`) | Absolute: `from plugin_name.utils import x` |

---

## Safe Top-Level Imports

These are safe at the top of `routes.py` or any handler module:

```python
# Standard library (allowed subset)
import json
from http import HTTPStatus

# Canvas SDK core
from canvas_sdk.effects import Effect
from canvas_sdk.effects.simple_api import JSONResponse, Response, HTMLResponse
from canvas_sdk.handlers.simple_api import Credentials, SimpleAPI, api
from canvas_sdk.handlers.simple_api import APIKeyCredentials, SimpleAPIRoute

# Logger
from logger import log
```

Everything else — utility modules, `canvas_sdk.templates`, `canvas_sdk.v1.data.*`, `requests`, `pydantic`, `arrow` — goes inside methods wrapped in `try/except`.

**Why**: Canvas imports your module at startup. If ANY top-level import fails, the entire plugin returns 404 for ALL routes. The deploy still says "success" because Canvas doesn't validate Python imports at deploy time.

---

## Manifest Schema

```json
{
    "sdk_version": "0.1.4",
    "plugin_version": "0.0.X",   // INCREMENT EVERY DEPLOY
    "name": "plugin_name",
    "description": "...",
    "components": {
        "protocols": [{"class": "plugin_name.module:ClassName", "description": "..."}],
        "applications": [{"class": "...", "name": "...", "description": "...", "scope": "patient_specific|global", "icon": "assets/icon.png"}],
        "handlers": [{"class": "...", "description": "..."}],
        "commands": [],
        "content": [],
        "effects": [],
        "views": []
    },
    "secrets": ["SECRET_NAME_1", "SECRET_NAME_2"]
}
```

**Critical rules:**
- `plugin_version` must be incremented before every deploy or Canvas may serve cached code
- Every class path must exactly match the actual Python module path
- `commands` require `name` + `schema_key` — don't put ActionButton handlers here
- `handlers` array items only need `class` + `description`
- If a `.py` file contains a handler/protocol subclass but isn't in the manifest, Canvas may auto-discover and try to import it — causing a crash

---

## SimpleAPI Patterns

**Decorator style (preferred for multi-endpoint APIs):**
```python
class MyAPI(SimpleAPI):
    def authenticate(self, credentials: Credentials) -> bool:
        return True  # Keep minimal — runs before EVERY route

    @api.get("/path/<param>")
    def my_endpoint(self) -> list[Response | Effect]:
        param = self.request.path_params["param"]
        try:
            from plugin_name.utils.module import helper
            # ... business logic
        except Exception as exc:
            log.error(f"[MyAPI] error: {exc}")
            return [JSONResponse({"error": str(exc)}, status_code=500)]
        return [JSONResponse({"result": data})]
```

**URL pattern:** `https://<instance>.canvasmedical.com/plugin-io/api/<plugin-name>/<PATH>`

**Request object:** `self.request.method`, `.path`, `.query_params`, `.headers`, `.body`, `.json()`, `.text()`, `.form_data()`, `.path_params`

**Response types:** `HTMLResponse`, `JSONResponse`, `PlainTextResponse`, `Response`

---

## Deploy Commands

```bash
# Deploy (from the outer project directory containing pyproject.toml)
cd biomarker-analysis
uv run --no-sync canvas install biomarker_analysis --host nextgenmed

# Validate manifest
uv run canvas validate-manifest biomarker_analysis

# View logs
uv run canvas logs --host nextgenmed --since 1h

# List plugins
uv run canvas list --host nextgenmed
```

---

## Secret Management

```bash
# Set a secret (plugin name is positional, NOT --plugin)
cd biomarker-analysis
uv run canvas config set --host nextgenmed biomarker_analysis KEY=value

# Set multiple at once
uv run canvas config set --host nextgenmed biomarker_analysis KEY1=val1 KEY2=val2

# List secrets
uv run canvas config list --host nextgenmed biomarker_analysis
```

**Order matters**: Deploy manifest first (registers key names), then set values.

**Access in code**: `self.secrets.get("KEY_NAME")` or `self.secrets["KEY_NAME"]`

---

## File Mapping

| Change Type | Files to Modify |
|-------------|-----------------|
| New API endpoint | `api/routes.py` |
| UI / frontend change | `templates/dashboard.html` |
| New plugin secret | `CANVAS_MANIFEST.json` + `api/routes.py` |
| New event handler | New handler `.py` + `CANVAS_MANIFEST.json` |
| New app entry point | `applications/*.py` + `CANVAS_MANIFEST.json` |
| Business logic / utilities | `utils/*.py` |
| Pipeline integration | `utils/vectorshift_client.py` |
| FHIR / document push | `utils/fhir_client.py` |

---

## Common Failure Modes

| Symptom | Root Cause | Fix |
|---------|-----------|-----|
| 404 on ALL routes | Top-level import crashed | Move non-core imports inside methods with try/except |
| 404 on ALL routes | Orphan handler file auto-discovered | Delete or empty .py files with handler subclasses not in manifest |
| Deploy succeeds, nothing changes | Forgot to bump `plugin_version` | Increment version in manifest |
| Deploy succeeds, old UI shows | Browser cache | Hard-refresh (Ctrl+Shift+R) |
| Specific endpoint fails | `authenticate()` returns False | Simplify to `return True` |
| Specific endpoint fails | Lazy import fails inside method | Check import error in response JSON |
| FHIR push fails | Wrong content type | Canvas FHIR only accepts `application/pdf` |
| FHIR push fails | OAuth secrets not set | Set all FHIR secrets via CLI |
| Runtime crash, no error | `str.format()` used | Replace with f-strings |
| Runtime crash, no error | `textwrap` imported | Use custom word-wrap function |
