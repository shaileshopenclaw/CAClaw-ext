---
summary: "Guardrails for where CAClaw customization should land versus where OpenClaw behavior should stay aligned"
read_when:
  - You are deciding where to implement CAClaw-specific work
  - You want guardrails before changing core, UI, app, skill, or extension surfaces
title: "CAClaw Customization Seams"
---

# CAClaw customization seams

> Historical note: This page was migrated from the former CAClaw fork. Read "CAClaw" here as the OpenClaw CA add-on unless the page is explicitly describing that old fork history.


Use this guide with the [upstream sync workflow](./upstream-sync.md) and the [surface inventory](./surface-inventory.md). The goal is simple: keep CAClaw additive where possible and preserve upstream behavior where that is the safer long-term choice.

## Seam categories

### Additive-safe

These are the preferred landing zones for CAClaw differentiation.

| Area                             | Path roots                                                           | Typical CAClaw work                                              | Required verification                                   |
| -------------------------------- | -------------------------------------------------------------------- | ---------------------------------------------------------------- | ------------------------------------------------------- |
| Product copy and guidance        | `docs/`, `README.md`, `skills/`, visible CLI copy in `src/commands/` | CA-specific language, checklists, workflows, onboarding guidance | Review wording, links, and affected command/help output |
| Web UI presentation              | `ui/`                                                                | Brand identity, plain-language labels, CA-first entry points     | Targeted UI checks for changed screens                  |
| Brand assets                     | `assets/`, `docs/assets/`, app asset folders                         | Logos, icons, illustrations, safe visual identity                | Visual verification and packaging sanity checks         |
| Additive integrations and skills | `skills/`, new or isolated `extensions/<id>/`                        | CA workflows, templates, prompts, later MCP/integration rails    | Localized tests for the touched extension or skill      |

### Guarded-with-verification

These areas are legitimate seams, but only when the Phase goal clearly requires them.

| Area                               | Path roots                                                              | Allowed changes                                                           | Why guarded                                                   |
| ---------------------------------- | ----------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------- |
| CLI startup and command ergonomics | `openclaw.mjs`, `src/entry.ts`, `src/cli/`, `src/commands/`             | Naming, help text, onboarding flow adjustments, CA entry points           | Startup and routing behavior can regress easily               |
| Native app surfaces                | `apps/macos/`, `apps/ios/`, `apps/android/`, `apps/shared/OpenClawKit/` | App names, visual identity, user-facing copy                              | Packaging, bundle metadata, and platform conventions add risk |
| Existing extensions                | `extensions/`                                                           | CA-aware UX or additive integration behavior inside well-bounded packages | Package boundaries and runtime loading rules must stay intact |
| Install and packaging metadata     | install docs, manifests, release scripts, workflows                     | Product naming and operator-facing instructions                           | Breakage here blocks onboarding and upgrades                  |

### Preserve-first

These surfaces should stay aligned with upstream unless there is a clearly justified requirement and a verification plan.

| Area                                 | Path roots                                                        | Default rule                     | Why preserve-first                                                           |
| ------------------------------------ | ----------------------------------------------------------------- | -------------------------------- | ---------------------------------------------------------------------------- |
| Core runtime behavior                | `src/gateway/`, `src/agents/`, `src/sessions/`, `src/routing/`    | Do not reshape behavior casually | These paths define platform parity and orchestration behavior                |
| Channel and provider logic           | `src/channels/`, provider/channel `extensions/*`                  | Avoid branding-driven edits here | Messaging and provider reliability matter more than local naming convenience |
| Plugin SDK contracts                 | `src/plugin-sdk/`, `src/plugins/`                                 | Preserve public contracts        | Breakage here cascades into extensions and external integrations             |
| Auth, pairing, and security controls | auth profiles, `src/pairing/`, allowlists, gateway security flows | Change only with explicit review | Sensitive trust boundary for operator and client data                        |

## How later phases should use this

### Phase 2: Brand rollout

- Start with additive-safe surfaces first: `ui/`, app visuals, docs, assets, visible CLI copy.
- Use the surface inventory to make the branding pass exhaustive rather than relying on broad text replacement.
- Touch guarded surfaces only when a visible product surface actually lives there.

### Phase 3: Plain-language CA UX

- Prefer copy, labels, onboarding flows, and visible task framing over runtime rewrites.
- If plain-language UX seems to require a core change, verify that the need is real rather than a presentation issue in `ui/`, `apps/`, `skills/`, or CLI text.

### Phase 4 and Phase 5: CA workflows and integration rails

- Default to additive skills, templates, extensions, MCP tools, and explicit configuration seams.
- Do not scatter CA-specific logic across unrelated core modules just because the code is already there.
- If a future integration seems to require preserve-first edits, document why an additive seam was insufficient before changing core.

## Do this, not that

- **Do:** add CA guidance in `skills/`
- **Do not:** bake CA-specific workflow logic directly into core routing unless the roadmap explicitly requires it

- **Do:** implement brand visuals in UI, app, asset, and docs surfaces
- **Do not:** rename internal package boundaries just to make the repo look more branded

- **Do:** add new CA integrations as isolated extensions or explicit rails
- **Do not:** spread portal-specific logic across gateway, channels, and provider code without a strong architectural reason

## Practical decision rule

When choosing where CAClaw work should land:

1. Check the [surface inventory](./surface-inventory.md).
2. Prefer an additive-safe seam.
3. If only a guarded seam fits, define the verification before editing.
4. If the change touches a preserve-first surface, justify it explicitly in planning and verify parity after implementation.

## Why this exists

Without a seam guide, later branding and CA workflow work will tend to drift into the easiest file at hand. That is how a manageable upstream adaptation turns into a deep fork. This guide keeps future changes reviewable and easier to sync back against OpenClaw.
