---
summary: "Governance rules for future high-trust CA automations in CAClaw"
read_when:
  - You are designing future automation for portal, document, reconciliation, or high-trust CA work
  - You need the Phase 5 automation governance baseline
title: "CA Automation Governance"
---

# CA automation governance

> Historical note: This page was migrated from the former CAClaw fork. Read "CAClaw" here as the OpenClaw CA add-on unless the page is explicitly describing that old fork history.


CAClaw should assist first. Higher-trust automation should arrive later, with controls.

## Minimum governance expectations

### Human approval

Future high-trust automations should require human approval before high-impact actions, especially when client data, portal activity, filings, or irreversible changes are involved.

### Exception handling

Every future automation should define:

- what counts as an exception
- how exceptions are surfaced
- what the user must review before continuing

### Evidence retention

Future automation flows should make it possible to retain:

- what inputs were used
- what outputs were produced
- what approval happened
- what exceptions occurred

### Access boundaries

Every future automation should state:

- what credentials it uses
- what systems it can touch
- how the blast radius is limited

## Unsafe-to-automate-by-default categories

Until stronger validation exists, treat these as unsafe for autonomous execution:

- statutory filing submission
- legal assertions without review
- final tax positions without professional validation
- sensitive client document changes without explicit approval

## Operating principle

Assist and prepare first. Automate later only when the workflow is reviewable, scoped, and auditable.
