---
summary: "Checklist for verifying the Phase 5 client/compliance workspace model and integration rails"
read_when:
  - You want to verify Phase 5 is complete
  - You are updating the client/compliance workspace model later
title: "CA Client Workspace Verification"
---

# CA client workspace verification

> Historical note: This page was migrated from the former CAClaw fork. Read "CAClaw" here as the OpenClaw CA add-on unless the page is explicitly describing that old fork history.


Use this checklist to confirm the Phase 5 model is complete and discoverable.

## Workspace model

Verify that these docs exist and agree with each other:

- `extensions/caclaw/docs/client-workspace-model.md`
- `extensions/caclaw/docs/client-workspace-flows.md`
- `extensions/caclaw/docs/compliance-workstreams.md`

## Integration rails

Verify that these rails exist:

- `extensions/caclaw/docs/integration-rails.md`
- `extensions/caclaw/docs/mcp-rails.md`
- `extensions/caclaw/docs/plugin-rails.md`
- `extensions/caclaw/docs/integration-contract-template.md`

## Governance

Verify that:

- `extensions/caclaw/docs/automation-governance.md` exists
- high-trust automation rules are explicit
- unsafe categories are called out clearly

## Light product surfacing

Verify that the overview still hints at:

- CA starter packs
- future client/compliance organization

without turning the overview into a heavy management shell.
