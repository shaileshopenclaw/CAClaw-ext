---
summary: "How users discover and start the Phase 4 CA starter workflow pack"
read_when:
  - You want to know where the CA workflow pack is surfaced in the product
  - You are extending the workflow discovery experience
title: "CA Workflow Entrypoints"
---

# CA workflow entrypoints

> Historical note: This page was migrated from the former CAClaw fork. Read "CAClaw" here as the OpenClaw CA add-on unless the page is explicitly describing that old fork history.


Phase 4 keeps workflow discovery lightweight. Users should find the starter pack in the places they already use, without a new workflow engine.

## Primary entrypoints

### Overview starter-pack section

The overview now includes a CA starter-pack section that points users to the six workflow domains:

- GST work
- TDS work
- Income tax
- Audit and review
- Financial reporting
- ROC and compliance

This is the first and most visible entrypoint for the workflow pack.

### Skills surface

The domain skills themselves live in `skills/` and are the canonical pack structure:

- `extensions/caclaw/skills/ca-gst/`
- `extensions/caclaw/skills/ca-tds/`
- `extensions/caclaw/skills/ca-income-tax/`
- `extensions/caclaw/skills/ca-audit/`
- `extensions/caclaw/skills/ca-financial-reporting/`
- `extensions/caclaw/skills/ca-roc-compliance/`

The overview entrypoint should lead users into these skill-backed starter packs rather than into a separate custom workflow subsystem.

## What users get from a starter pack

Each starter pack gives the user:

- domain-specific guidance
- a reusable checklist
- a starting prompt or preparation structure
- clear boundaries on what CAClaw is and is not doing

## Design rule

These are **starter packs**, not finished workflow automation. They help the user start work faster, gather the right inputs, and stay organized before later phases add deeper workflow or integration layers.
