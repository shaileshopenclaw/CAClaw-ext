---
summary: "How future CA tools should use MCP as an integration rail in CAClaw"
read_when:
  - You are evaluating an MCP-based CA integration
  - You need the Phase 5 MCP guidance
title: "CA MCP Rails"
---

# CA MCP rails

> Historical note: This page was migrated from the former CAClaw fork. Read "CAClaw" here as the OpenClaw CA add-on unless the page is explicitly describing that old fork history.


Use MCP for future CA integrations when the capability is best expressed as an external tool or service boundary.

## Good MCP candidates

- document retrieval or parsing services
- review helpers that operate through explicit tool calls
- controlled portal-side read or preparation helpers
- structured compliance utilities that need clear invocation boundaries

## MCP expectations

An MCP-based CA integration should define:

- what service it talks to
- what data boundary it crosses
- how auth/secrets are handled
- what user-facing surface invokes it
- how outputs are reviewed before trust is increased

## What MCP is not for

- hiding risky automation behind a vague tool name
- bypassing governance for high-trust tasks
- replacing the workflow pack or client/compliance model

## Repo fit

CAClaw already has MCP configuration surfaces. Phase 5’s job is to make future CA MCP work explicit and reviewable before any real integrations land.
