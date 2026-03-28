---
summary: "How the Phase 4 CA workflow pack is organized across skills, references, and reusable assets"
read_when:
  - You are adding a new CA workflow skill or asset
  - You need the canonical pack structure for Phase 4
title: "CA Workflow Pack Structure"
---

# CA workflow pack structure

> Historical note: This page was migrated from the former CAClaw fork. Read "CAClaw" here as the OpenClaw CA add-on unless the page is explicitly describing that old fork history.


Phase 4 uses the repo’s existing AgentSkills-compatible `skills/` seam. The pack is intentionally content-heavy and runtime-light.

## Layout

Each workflow domain lives in its own skill folder:

```text
skills/
├── ca-gst/
│   ├── SKILL.md
│   ├── references/
│   └── assets/
├── ca-tds/
├── ca-income-tax/
├── ca-audit/
├── ca-financial-reporting/
└── ca-roc-compliance/
```

## What each layer does

### `SKILL.md`

Keep the top-level skill concise. It should answer:

- when to use the workflow
- what work area it covers
- which references or assets to load next

### `references/`

Use reference files for:

- domain scope
- starter workflow sequence
- safe-use boundaries
- recurring work patterns

### `assets/`

Use Markdown assets for:

- checklists
- information request lists
- reusable prompts
- workpaper-preparation scaffolds
- review templates

## Packaging rules

- One lightweight skill per domain.
- Prefer Markdown-first assets over scripts.
- Only add scripts if a deterministic repeat action clearly needs them later.
- Keep terminology aligned with `extensions/caclaw/docs/ux-language-map.md`.
- Keep all workflow content guidance-first and human-reviewed.

## Surfacing model

The workflow pack should be discoverable through:

- CA-first overview entry cues
- skills surfaces
- chat-start prompts or starter suggestions where appropriate

Do not build a new workflow engine for Phase 4. Reuse existing product surfaces.

## What this pack is not

- It is not a filing engine.
- It is not a statutory-authority replacement.
- It is not a guarantee of legal or tax correctness.
- It is not a reason to modify preserve-first runtime paths.
