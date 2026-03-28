---
summary: "How future CA runtime-backed capabilities should use plugin and extension seams in CAClaw"
read_when:
  - You are evaluating a plugin-based CA integration
  - You need the Phase 5 plugin guidance
title: "CA Plugin Rails"
---

# CA plugin rails

> Historical note: This page was migrated from the former CAClaw fork. Read "CAClaw" here as the OpenClaw CA add-on unless the page is explicitly describing that old fork history.


Use plugins/extensions for future CA capabilities when the integration needs a runtime-backed, reusable capability inside the CAClaw product.

## Good plugin candidates

- future CA-specific providers or data adapters
- runtime-backed workflow helpers that do not fit a pure skill
- capabilities that need deeper runtime coordination but still belong outside core

## Plugin expectations

A CA plugin should define:

- what runtime capability it adds
- why a skill alone is not enough
- what config or secrets it needs
- what user surface or workflow triggers it
- how it preserves parity and avoids unrelated core rewrites

## Keep plugins bounded

- plugins should stay within their package roots
- plugins should use public plugin SDK surfaces
- plugins should not rewrite unrelated routing, channel, or session behavior casually

## Relationship to skills and MCP

- Use **skills** to explain and teach workflows.
- Use **plugins** when you need a reusable runtime capability.
- Use **MCP** when the integration is better modeled as an external tool/service boundary.
