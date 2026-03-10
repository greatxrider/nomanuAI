# Task: Fix VectorShift Knowledge Base Query API for NGM Commons Directory Generation

## Context: What This Is For

This is part of the **NGM Commons** platform — a vendor directory for longevity medicine that generates clinical evaluations of diagnostic tests, supplements, and interventions. The directory generation uses a **Three-Lens Framework** (skill: `directory-generate-3lens`):

- **Lens 1** (Mechanistic): Claude analyzes HOW a product works from first principles
- **Lens 2** (Literature): Perplexity Deep Research reviews peer-reviewed evidence
- **Lens 3** (KB Cross-Reference): Queries the **NGM Signaling Knowledge Base** to cross-reference with curated intervention data, extract PMIDs, and build intervention-to-finding actionability maps

**Lens 3 is currently broken** because the VectorShift KB query API returns HTTP 500 for every request format we've tried via REST API. The same queries work fine from the VectorShift platform UI.

---

## How Lens 3 Works in the Skill

Lens 3 is **mandatory** — it must always execute, even if the product isn't directly in the KB. The skill files that define it are:

- `.claude/skills/directory-generate-3lens/SKILL.md` — main skill definition
- `.claude/skills/directory-generate-3lens/prompts/lens3_kb_query.md` — full Lens 3 prompt with query strategy
- `.claude/skills/directory-generate-3lens/context/kb-query-strategies.md` — query type reference

### What Lens 3 Does

1. **Queries the VectorShift KB** with the product name and its mechanism of action
2. **Queries for each key biomarker or pathway** the product targets
3. **Queries for related interventions** and clinical applications
4. **Extracts PMIDs, DOIs, and peer-reviewed citations** from KB results
5. **Builds "Finding → KB Intervention" actionability maps** (e.g., "low Complex I activity → CoQ10, NAD+ precursor, PQQ protocols")
6. **Extracts clinical perspective** — what practitioners monitor, dosing patterns, contraindications

### How the Skill Currently Documents KB Queries

All three skill files document the same simple curl format:

```bash
curl -s -X POST "https://api.vectorshift.ai/v1/knowledge-base/69a0c703baf620cc72d6e1d0/query" \
  -H "Authorization: Bearer $VECTORSHIFT_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"queries": ["your natural language query here"]}'
```

The queries are natural language — the KB is a semantic search over curated longevity medicine research documents. Example queries from the skill:

```json
{"queries": ["mitochondrial electron transport chain enzyme activity testing"]}
{"queries": ["Complex I NADH dehydrogenase mitochondrial dysfunction biomarkers"]}
{"queries": ["CoQ10 ubiquinol mitochondrial function dosing clinical evidence"]}
{"queries": ["interventions targeting AMPK mTOR signaling"]}
{"queries": ["metformin mechanism of action molecular targets AMPK mTOR signaling"]}
```

### What Lens 3 Outputs

A JSON object with:
- `kb_lookup` — whether direct match found, queries executed, total results
- `kb_factual_summary` — mechanism claims, dosing protocols, contraindications, monitoring items
- `clinical_perspective_extraction` — practitioner mental model, intervention landscape, practical wisdom
- `notable_for_framing` — vendor-friendly "notable for" positioning (never "better than")
- `actionability_mapping` — finding → KB intervention connections
- `citations_extracted_from_kb` — PMIDs/DOIs with integration guidance

**Critical policy:** The KB is a *source aggregator*, not a citable source. The skill extracts PMIDs from KB results and cites the original papers directly — never "according to our knowledge base."

---

## The Knowledge Base

- **KB ID:** `69a0c703baf620cc72d6e1d0`
- **Name:** "Signaling KB-Markdown"
- **280 documents** — all indexed successfully
- **Content types:** interventions, biomarkers, pathways, conflicts
- **Embedding model:** `voyage-4-large`
- **Vector DB:** Qdrant
- **Splitter:** markdown, chunk size 400, overlap 0
- **Hybrid search:** disabled (`isHybrid: false`)
- **API Key:** stored in `ngm-website-official/.env` as `VECTORSHIFT_API_KEY` (starts with `sk_`)

### Local KB Mirror

The same data exists locally at `.ai-workspaces/.signaling-kb/` with subdirectories:
- `interventions/` — 1,196 JSON files (e.g., `coenzyme-q10.json`, `metformin.json`)
- `biomarkers/` — biomarker reference files
- `pathways/` — signaling pathway files
- `conflicts/` — evidence conflict files

Each intervention JSON has this structure:
```json
{
  "intervention_id": "coenzyme-q10",
  "intervention_name": "Coenzyme Q10",
  "aliases": ["ubiquinone", "ubiquinol", "CoQ10"],
  "category": "small_molecule",
  "primary_pathways": [],
  "dosing_protocols": [
    {
      "dose": "...",
      "frequency": "...",
      "indication": "mitochondrial/antioxidant support",
      "route": "oral",
      "context": "...",
      "peer_reviewed_citations": [{"pmid": "...", "doi": "...", "title": "..."}]
    }
  ],
  "mechanism_claims": [
    {
      "target": "Electron transport chain",
      "effect": "Essential cofactor for oxidative phosphorylation; levels reduced by statins",
      "confidence": "moderate",
      "peer_reviewed_citations": []
    }
  ],
  "regulatory_status": {"classification": "Supplement"},
  "contraindications": [],
  "monitoring": []
}
```

### Existing Local Query Helper

There's already a Python script at `.claude/skills/directory-generate-3lens/scripts/query_kb.py` that queries the local JSON files. It supports:

```bash
python query_kb.py --lookup metformin          # Direct intervention lookup
python query_kb.py --target AMPK               # Search by molecular target
python query_kb.py --pathway "mTOR signaling"  # Search by pathway
python query_kb.py --indication "glycemic"     # Search by clinical indication
python query_kb.py --biomarker butyrate        # For testing products
python query_kb.py --testing-report microbiome # Full report for diagnostic category
python query_kb.py --full-report metformin     # Comprehensive multi-query report
python query_kb.py --extract-citations CoQ10   # Extract PMIDs/DOIs
python query_kb.py --list                      # List all 1,196 interventions
```

This script searches intervention JSON files by slug, target, pathway, indication, and biomarker. It extracts citations, classifies relationships (synergistic/complementary/overlapping), and generates actionability maps.

---

## The Problem

The KB query endpoint returns HTTP 500 "Knowledge base query failed" for every REST API call. GET endpoints work fine with the same API key.

### What Works
- `GET /knowledge-base?id=69a0c703baf620cc72d6e1d0` → returns full metadata ✅
- `GET /knowledge-bases` → lists all KBs ✅
- `GET /pipelines` → lists pipelines ✅
- **Querying from the VectorShift platform UI** → works ✅ (browser session auth)

### What Fails
- `POST /knowledge-base/{id}/query` → HTTP 500 for ALL KBs ❌

### Every Format We've Tried

1. **Minimal:** `{"queries": ["CoQ10"]}` → `"No search metadata provided"`

2. **With search_metadata:** `{"queries": ["CoQ10"], "search_metadata": {}}` → `"No query config provided"`

3. **All config booleans false:**
```json
{
  "queries": ["CoQ10"],
  "search_metadata": {},
  "config": {
    "rerank_documents": false,
    "generate_metadata_filters": false,
    "transform_query": false,
    "answer_multi_query": false,
    "expand_query": false,
    "do_advanced_qa": false,
    "format_context_for_llm": false,
    "generate_ai_doc_summaries": false
  }
}
```
→ `"Knowledge base query failed"` (HTTP 500)

4. **`do_advanced_qa: true` without config:** → `"Question answering config not provided"`

5. **`do_advanced_qa: true` with config:**
```json
"question_answering_config": {"qa_model": "", "advanced_qa_mode": ""}
```
→ `"invalid advanced QA mode: "` (empty string rejected)

6. **`retrieval_unit: "chunk"` or `"document"` or `""`:** → `"invalid retrieval unit: ..."` (every value rejected)

7. **Tested against 3 different KBs** (including one with `text-embedding-3-small` embeddings) — all fail identically with HTTP 500.

### Key Observation

The platform UI uses browser session authentication (JWT cookie), NOT the `sk_` API key. The API key has full read access (metadata, listing) but every POST to `/query` fails. This could be:
- A plan tier limitation (KB query not available via REST API on this plan)
- An API key scope/permission issue
- A required config field we haven't figured out

---

## VectorShift API Reference

**Endpoint:** `POST /knowledge-base/{id}/query`
**Auth:** `Authorization: Bearer {API_KEY}`

**Full request body schema (from OpenAPI spec):**
```json
{
  "queries": ["string"],           // REQUIRED
  "context": "string",             // optional
  "search_metadata": {             // needed at runtime
    "filter": "string",
    "opensearch_filter": "string",
    "top_k": 5,                    // integer
    "group_by_key": "string"
  },
  "config": {                      // needed at runtime
    "rerank_documents": false,
    "generate_metadata_filters": false,
    "transform_query": false,
    "answer_multi_query": false,
    "expand_query": false,
    "do_advanced_qa": false,
    "format_context_for_llm": false,
    "generate_ai_doc_summaries": false,
    "retrieval_unit": "string",     // CAUTION: every value we tried is rejected
    "retrieval_config": {
      "max_documents": 5,
      "data_fusion_method": "string"
    },
    "reranking_config": {
      "reranking_model": "string",
      "api_key": "string",
      "num_chunks_to_rerank": 0
    },
    "question_answering_config": {
      "qa_model": "string",         // CAUTION: empty string rejected
      "advanced_qa_mode": "string"   // CAUTION: empty string rejected
    },
    "hybrid_search_config": {
      "alpha": 0.5,
      "fusion_method": "string"
    },
    "score_cutoff": 0.0
  }
}
```

**Response:** `{"status": "success", "result": {...}}` or `{"status": "failed", "error": "..."}`

---

## Goal

### Primary: Get the API Working

1. **Get a working curl command** that successfully queries KB `69a0c703baf620cc72d6e1d0` and returns results via the REST API
2. **Once working, update these skill files** with the correct request format:
   - `.claude/skills/directory-generate-3lens/SKILL.md` — Lens 3 section (lines ~124-152)
   - `.claude/skills/directory-generate-3lens/prompts/lens3_kb_query.md` — all curl examples
   - `.claude/skills/directory-generate-3lens/context/kb-query-strategies.md` — all curl examples

### Fallback: If the API Genuinely Can't Be Fixed

If the REST API genuinely doesn't support KB queries on this plan (plan tier limitation, API key scope issue, etc.), then:

1. **Update the skill to use the local KB mirror** at `.ai-workspaces/.signaling-kb/` as the primary data source for Lens 3
2. **The existing `query_kb.py` script** already does structured queries against the local JSON files — it just needs to be integrated into the skill's Lens 3 workflow
3. **Update all three skill files** to replace the VectorShift curl commands with local `query_kb.py` commands
4. **The KB data is the same** — the local mirror was populated from VectorShift. The only difference is that VectorShift provides semantic/vector search while the local script does keyword/target matching

---

## Debugging Approaches to Try

1. **Check VectorShift API docs** at `https://docs.vectorshift.ai/api-reference/knowledge-bases/query` — try the "Try it ▶" button and inspect what auth token/format it uses in the Network tab
2. **Try a different API key format** — maybe KB queries need a different auth header or key type
3. **Check VectorShift plan tier** — does this plan include REST API KB query access?
4. **Try generating a new API key** with different scopes if the VectorShift dashboard allows scope selection
5. **Contact VectorShift support** with the specific error: "HTTP 500 on POST `/knowledge-base/{id}/query` with valid API key that works for GET endpoints"
6. **Try the VectorShift Python SDK** instead of raw REST — it might handle config fields differently
7. **Check if there's a v2 API** or different endpoint format

---

## Files You'll Need to Read

| File | Why |
|------|-----|
| `ngm-website-official/.env` | API key (`VECTORSHIFT_API_KEY`) |
| `.claude/skills/directory-generate-3lens/SKILL.md` | Main skill — update Lens 3 section |
| `.claude/skills/directory-generate-3lens/prompts/lens3_kb_query.md` | Lens 3 prompt — update all curls |
| `.claude/skills/directory-generate-3lens/context/kb-query-strategies.md` | Query strategies — update all curls |
| `.claude/skills/directory-generate-3lens/scripts/query_kb.py` | Local fallback script (already exists) |
| `.ai-workspaces/.signaling-kb/interventions/coenzyme-q10.json` | Sample KB data structure |

## Success Criteria

- [ ] A working KB query returns relevant results (test with query "CoQ10 mitochondrial function")
- [ ] All curl examples in the 3 skill files use the correct, tested format
- [ ] OR if API can't be fixed: skill files updated to use `query_kb.py` local fallback with clear documentation of why
