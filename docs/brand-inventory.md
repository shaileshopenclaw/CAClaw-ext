---
summary: "Phase 2 inventory of branding targets, exclusions, and guarded compatibility surfaces"
read_when:
  - You are implementing the CAClaw brand rollout
  - You need to know which visible surfaces should change in Phase 2
title: "CAClaw Brand Inventory"
---

# CAClaw brand inventory

> Historical note: This page was migrated from the former CAClaw fork. Read "CAClaw" here as the OpenClaw CA add-on unless the page is explicitly describing that old fork history.


This document is the execution checklist for Phase 2. It narrows the broader surface inventory down to the specific targets, exclusions, and guarded areas that matter for visible CAClaw branding.

## Phase 2 rollout targets

These are the primary surfaces that should visibly present the product as `CAClaw` during this phase.

| Surface                     | Paths                                                             | Why it is in scope                                         |
| --------------------------- | ----------------------------------------------------------------- | ---------------------------------------------------------- |
| Shared docs and repo entry  | `README.md`, `docs/`, `docs/assets/`                              | First-touch experience for users and maintainers           |
| Web control UI shell        | `ui/index.html`, visible UI labels in `ui/src/`                   | Primary browser-based product surface                      |
| CLI visible branding        | `src/cli/`, `src/commands/`, visible headings, help, and taglines | Direct operator-facing product surface                     |
| Native app visible metadata | `apps/android/`, `apps/ios/`, `apps/macos/`                       | App names, display labels, and visible assets              |
| Shared brand assets         | `docs/assets/`, app asset folders, selected `assets/` paths       | Required to make the rollout coherent instead of text-only |

## Targeted rollout order

1. Shared brand inventory and identity rules
2. Shared visible assets
3. Web UI branding
4. Native app display branding
5. CLI/help/status branding
6. README/docs cleanup

## Guarded surfaces

These areas may be touched only when a current visible user-facing label depends on them.

| Surface                           | Paths                                                                            | Guardrail                                                                     |
| --------------------------------- | -------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| Package and release metadata      | `package.json`, `ui/package.json`, release/install scripts                       | Change visible naming only if required; avoid changing published ids casually |
| Native app build/project metadata | `apps/android/app/build.gradle.kts`, `apps/ios/project.yml`, macOS project files | Prefer display-name updates over bundle id or namespace migration             |
| UI bootstrap and shell wiring     | `ui/index.html`, custom element shell, page titles                               | Update visible branding without breaking base-path or storage compatibility   |

## Explicit exclusions for Phase 2

These are intentionally not success criteria for this phase:

- package name migration from `openclaw`
- npm command rename away from `openclaw`
- bundle/application id migration such as `ai.openclaw.*`
- storage key migration using `openclaw.*`
- plugin SDK or extension id renames
- broad internal source-wide eradication of `openclaw`

## Visible leftover policy

- A visible top-level `OpenClaw` label on a primary surface counts as a Phase 2 defect.
- An internal `openclaw` identifier is acceptable if it exists for compatibility and is not presented as the product name.
- If a compatibility identifier is visible and cannot be changed safely in this phase, record it explicitly in the verification doc instead of silently leaving it behind.

## Brand asset minimum set

Phase 2 should succeed with this minimal original asset set:

- CAClaw wordmark
- CAClaw icon or lettermark
- light-background logo variant
- dark-background logo variant
- basic app/icon treatment for the highest-priority touched surfaces

## Legal and trust constraints

- Do not use official ICAI-style seals, logos, or branding cues that imply endorsement.
- Keep the identity professional, restrained, and fit for high-trust accounting/compliance work.
- Favor continuity and clarity over novelty.
