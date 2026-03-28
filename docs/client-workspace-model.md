---
summary: "Phase 5 model for organizing CAClaw work around clients and compliance workstreams"
read_when:
  - You are designing client-wise or compliance-wise CAClaw organization
  - You need the canonical Phase 5 workspace model
title: "CA Client Workspace Model"
---

# CA client workspace model

> Historical note: This page was migrated from the former CAClaw fork. Read "CAClaw" here as the OpenClaw CA add-on unless the page is explicitly describing that old fork history.


Phase 5 adds an organizational layer on top of the existing CAClaw workspace and session model. It does not replace OpenClaw workspaces or sessions. It tells CAClaw how to group real work in a way that matches practice.

## Two first-class lenses

### Client-wise

Use this lens when the CA is working for a specific client and needs a single place to see:

- active work areas for that client
- recent conversations and follow-up
- relevant starter workflow packs
- future integrations, documents, and reminders tied to that client

### Compliance-wise

Use this lens when the CA is working from a compliance obligation first, such as GST, TDS, audit, financial reporting, or ROC/commercial-law support, and then needs to connect that work back to one or more clients.

## How this fits the current architecture

- **Workspace stays the root container**: existing OpenClaw/CAClaw workspace mechanics remain intact.
- **Sessions remain the runtime conversation unit**: Phase 5 does not replace session keys or session storage.
- **Skills remain the workflow pack seam**: the Phase 4 starter workflows remain the domain layer.
- **Client/compliance meaning becomes an overlay**: this phase defines how the product should organize and surface work, not a new runtime core.

## Model components

### Client profile

A client context should be able to point to:

- the relevant compliance/workstream categories
- current workflow pack entrypoints
- recent work history
- future integrations or secure tools that belong to that client

### Compliance workstream

A compliance/workstream context should be able to point to:

- the relevant starter skill pack
- recurring work patterns
- related clients
- future tool or integration rails for that work type

### Cross-linking rule

The model works only if clients and compliance workstreams can reference each other. A CA should be able to move in both directions:

- client → relevant compliance work
- compliance work → relevant clients

## Design constraints

- Keep the model lightweight and additive.
- Do not turn Phase 5 into a practice-management product.
- Do not imply structured statutory filing automation.
- Keep everything compatible with the current workspace/session/plugin model.

## Future use

This model is the bridge between:

- Phase 4 starter workflow content
- future client-wise organization
- future MCP/plugin integrations
- future high-trust automation governance
