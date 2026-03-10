---
name: canvas-plugin-preflight
description: >
  Validates and improves prompts for Canvas Medical plugin updates, feature additions, bug fixes,
  and deployments before any code is written. Ensures requests follow the battle-tested 6-phase
  workflow (Plan, Code, Pre-Deploy, Deploy, Verify, Secrets) and enforces sandbox rules, lazy import
  patterns, version bumping, and orphan file checks. Use this skill whenever the user mentions
  Canvas plugin changes, deploying to Canvas, updating routes.py, modifying the biomarker plugin,
  adding endpoints, fixing plugin bugs, setting secrets, or anything involving the Canvas sandbox
  or CANVAS_MANIFEST.json. Even partial or casual requests like "fix the dashboard" or "add a
  button to the plugin" should trigger this skill. This is the pre-flight checklist — it runs
  BEFORE you touch any code.
---

# Canvas Plugin Preflight

This skill is a pre-flight validator for Canvas Medical plugin work. It sits between the user's
request and your first code edit, ensuring that every plugin change follows the correct workflow
and avoids the failure modes we've already debugged and documented.

The goal: **deploy once, deploy correctly**. No 404 debugging spirals, no forgotten version bumps,
no orphan files crashing the sandbox.

## When This Skill Activates

Run this preflight whenever the user's request involves:
- Modifying any file inside `biomarker-analysis/biomarker_analysis/`
- Adding, changing, or fixing API endpoints in `routes.py`
- Updating the dashboard UI (`templates/dashboard.html`)
- Adding new handlers, applications, or protocols
- Deploying to Canvas (`canvas install`, deploy, ship, push)
- Setting or changing plugin secrets
- Fixing a Canvas plugin bug (404s, blank responses, crashes)
- Any mention of `CANVAS_MANIFEST.json`, sandbox, or Canvas Medical plugin

## The Preflight Sequence

Follow these steps in order. Present your findings to the user as a structured preflight report
before writing any code.

### Step 1: Refine the Request

Before any technical analysis, take the user's raw message and produce a polished version.
This ensures the LLM works from a clear, unambiguous prompt — not a typo-laden stream of
consciousness.

**Process:**
1. **Fix grammar, spelling, and punctuation** — correct typos, fix sentence fragments,
   standardize capitalization (e.g. "canvass" → "Canvas", "conver" → "convert")
2. **Resolve ambiguity** — replace vague references ("it", "that thing", "the issue") with
   specific technical terms (endpoint name, file path, component name)
3. **Extract the core intent** — distill rambling or repeated instructions into one clear
   sentence stating what needs to change and why
4. **Add missing technical context** — if the user says "fix the button" but you know from
   codebase context it's the `pullChartBtn` in `dashboard.html`, specify that
5. **Structure as actionable spec** — rewrite into: What (action), Where (files/components),
   Why (the bug or desired behavior), and Success criteria

**Output format — present to user as:**
```
### Refined Request
> [One clear, grammatically correct sentence summarizing the change]

**Scope:** [specific files/endpoints/components]
**Problem:** [what's broken or missing — precise symptom]
**Goal:** [desired end state]
```

**Example:**
- Raw: "On the Canvass The HTML format design etc of the Visual Report from the Biomarker
  Analysis is not the same with what is saved on the Medical Records when saving it on the
  Medical Records. It must be using the Visual Report's UI/Design, Format etc."
- Refined: "The PDF saved to Canvas Medical Records does not preserve the Visual Report's
  HTML styling. The Medical Records PDF should render with the same design, colors, and
  layout as the Visual Report displayed in the Biomarker Analysis dashboard iframe."

After presenting the refined request, proceed to Step 2.

### Step 2: Parse the Request

Extract these four elements from the refined message. If any are missing, infer what you can
from context and flag what's ambiguous.

| Element | What to Extract | If Missing |
|---------|----------------|------------|
| **What** | The change in one sentence | Ask: "What specifically should change?" |
| **Where** | Which file(s) are affected | Infer from file mapping (see reference) |
| **Details** | Specific behavior, paths, field names | Infer if obvious, flag if ambiguous |
| **Success** | How to verify it works | Default to: hit the endpoint / open the dashboard |

**Read `references/canvas-rules.md` → File Mapping section** to map the change type to affected files.

### Step 3: Read Before You Touch

Before proposing any code changes, read the actual current state of every file you'll modify.
This is non-negotiable — blind edits are the #1 source of broken deploys.

For each file in scope:
1. Read the full file
2. Note its current imports (top-level vs. lazy)
3. Note how it connects to other files (what imports it, what it imports)
4. For `CANVAS_MANIFEST.json`: note the current `plugin_version`

### Step 4: Validate Against Canvas Rules

Run these checks against the planned change. **Read `references/canvas-rules.md`** for the
full rules reference.

#### Import Safety Check
For any new code being added to a handler or protocol module:
- [ ] Are all non-core imports lazy (inside methods, wrapped in `try/except`)?
- [ ] Are only these at the top level: `json`, `http.HTTPStatus`, `canvas_sdk.effects`,
      `canvas_sdk.handlers.simple_api`, `logger`?
- [ ] Does the code avoid `from canvas_sdk.templates import render_to_string` at module level?
- [ ] Does the code avoid importing utility modules (`report_storage`, `fhir_client`,
      `vectorshift_client`, `patient_data_collector`) at module level?

#### Sandbox Compliance Check
- [ ] No `str.format()` or `str.format_map()` anywhere in new code
- [ ] No `import textwrap`
- [ ] No relative imports (`from .utils import x`) — must use absolute (`from biomarker_analysis.utils import x`)
- [ ] No `import os`, `import sys`, or filesystem access
- [ ] All imports are from the allowed sandbox list (see reference)

#### Manifest Check
- [ ] `plugin_version` will be incremented before deploy
- [ ] All class paths in `protocols`, `applications`, `handlers` match actual module paths
- [ ] Any new secrets are added to the `secrets` array
- [ ] No handler classes exist in `.py` files that aren't declared in the manifest

#### Orphan File Check
- [ ] No `.py` files in the package contain handler/protocol subclasses that aren't in the manifest
- [ ] If removing a handler from the manifest, the corresponding `.py` file is also deleted or emptied

#### Route Ordering Check (for new endpoints)
- [ ] New routes with static segments (`/reports/recent/<id>`) are declared BEFORE routes
      with catch-all path params (`/reports/<report_id>`) — otherwise the path param captures
      the static segment (e.g., `recent` gets matched as a `report_id`)
- [ ] No duplicate route paths

#### Authentication Check
- [ ] `authenticate()` method returns `True` (or has no utility imports)
- [ ] No database initialization or heavy logic in `authenticate()`

### Step 5: Generate the Execution Plan

Present a phase-by-phase plan following the 6-phase workflow. Only include phases that apply
to this specific change.

```
## Preflight Report: [one-sentence description]

### Scope
- Files: [list of files to modify]
- Change type: [endpoint / UI / handler / secret / bug fix]
- Risk level: [low = 1 file, no imports | medium = 2+ files | high = new handler or manifest change]

### Phase 1 — Plan
- [What files to read first]
- [Dependencies to check]

### Phase 2 — Code
- [Specific changes to make]
- [Import pattern to follow]
- [Sandbox restrictions to watch for]

### Phase 3 — Pre-Deploy
- Version bump: 0.0.X → 0.0.Y
- Manifest changes: [if any]
- Orphan check: [if applicable]

### Phase 4 — Deploy
cd biomarker-analysis && uv run --no-sync canvas install biomarker_analysis --host nextgenmed

### Phase 5 — Verify
- [Specific endpoint to test]
- [Expected response]
- [Fallback if 404]

### Phase 6 — Secrets (if applicable)
- [New secrets to set]
- [Command to run AFTER deploy]

### Flags
- [Any warnings, ambiguities, or risks identified]
```

### Step 6: Flag Issues Before Proceeding

If the preflight catches any issues, present them clearly before writing code:

**Red flags (block until resolved):**
- Request would add a top-level import of a non-core module
- Request involves a handler file not in the manifest
- Request uses `str.format()` or blocked operations
- Manifest class path doesn't match actual module path

**Yellow flags (proceed with caution):**
- Request is vague — could be interpreted multiple ways
- Change touches 3+ files — consider breaking into smaller deploys
- New secret needed but user hasn't provided the value
- Change modifies `authenticate()` — ensure it stays minimal

**Green flags (clear to proceed):**
- Single file change with lazy imports
- UI-only change (dashboard.html)
- Secret value update (no code change needed)

## After Preflight

Once the preflight report is presented and the user confirms (or you've resolved all flags),
proceed with the actual implementation following the plan. The key discipline is:

1. **Read first** — every file in scope
2. **Code with lazy imports** — no exceptions
3. **Bump version** — before running deploy
4. **Check for orphans** — especially after deleting handlers
5. **Deploy** — from the correct directory
6. **Verify** — hit the endpoint, don't assume success

## Quick Reference: The Three Golden Rules

These prevent 90% of Canvas plugin failures:

1. **Lazy Imports** — Only `canvas_sdk` core, `logger`, and stdlib at top level. Everything
   else inside methods with `try/except`.
2. **Bump Version** — Increment `plugin_version` in manifest before every deploy. Cached code
   is invisible and maddening to debug.
3. **No Orphan Files** — If a handler class isn't in the manifest, delete the `.py` file.
   Canvas auto-discovers handler subclasses and will crash the plugin importing them.

## Reference Files

- **`references/canvas-rules.md`** — Full Canvas sandbox rules, allowed imports, manifest
  schema, deploy commands, secret management, file mapping, and failure modes. Read this
  whenever you need to validate a specific import, check sandbox compliance, or look up the
  correct CLI syntax.
- **`content/docs/canvas-plugin-update-workflow.html`** — The comprehensive visual workflow
  guide with examples. Refer users here if they want the full documented process.
- **`docs/canvasMD/sdk/sandboxing.md`** — Official Canvas SDK sandbox documentation
- **`docs/canvasMD/sdk/handlers_simple_api_http.md`** — SimpleAPI handler reference
- **`docs/canvasMD/sdk/canvas_cli.md`** — Canvas CLI command reference
- **`docs/canvasMD/sdk/secrets.md`** — Secrets management reference
