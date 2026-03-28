---
summary: "Template for defining future CA integrations before implementation begins"
read_when:
  - You are proposing a new CA integration
  - You want the minimum definition-of-done for integration design
title: "CA Integration Contract Template"
---

# CA integration contract template

> Historical note: This page was migrated from the former CAClaw fork. Read "CAClaw" here as the OpenClaw CA add-on unless the page is explicitly describing that old fork history.


Use this template before implementing any future CA integration.

## Integration name

- Name:
- Workstream(s):
- Client/compliance context:

## Purpose

- What problem does this integration solve?
- Why is it needed now?

## Chosen seam

- Skill / Plugin / MCP / Combination:
- Why this seam is correct:
- Why other seams were not chosen:

## User-facing surface

- Where does the user discover it?
- Where does the user invoke it?
- What will the user see before, during, and after use?

## Data boundary

- What data enters the integration?
- What data leaves the integration?
- What records or evidence should be kept?

## Auth and secrets

- What credentials are needed?
- Where are they configured?
- What is the blast radius if access is misconfigured?

## Verification

- What checks prove the integration works?
- What checks prove it is safe?
- What manual review is still required?

## Governance

- What human approval is required?
- What exceptions or failure cases need explicit handling?
- What tasks remain out of scope for automation?
