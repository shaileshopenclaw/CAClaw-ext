---
summary: "Top-level guidance for where future CA integrations belong in CAClaw"
read_when:
  - You are evaluating where a future CA integration should land
  - You need the canonical integration-rails overview
title: "CA Integration Rails"
---

# CA integration rails

> Historical note: This page was migrated from the former CAClaw fork. Read "CAClaw" here as the OpenClaw CA add-on unless the page is explicitly describing that old fork history.


Future CA integrations should land in explicit seams. This keeps CAClaw additive, reviewable, and easier to sync with upstream.

## Default landing zones

- **Skills** for workflow guidance and reusable domain content
- **Plugins/extensions** for runtime-backed capabilities or provider-style integrations
- **MCP** for tool-like external service access with explicit configuration and boundaries
- **Docs/config/UI surfacing** for describing and discovering the integration

## Do not do this

- Do not scatter CA integration logic across unrelated core modules.
- Do not bypass the documented seams just because a direct patch looks faster.
- Do not treat real client/compliance integrations as pure copy or UI work.

## Decision rule

Ask:

1. Is this content and guidance only? Use a skill.
2. Is this a reusable runtime capability? Use a plugin/extension.
3. Is this an external tool or service boundary? Use MCP if the access pattern fits.
4. Does the user need a visible entry point or config surface? Document and surface it explicitly.
