---
summary: "Inventory of user-facing and update-sensitive surfaces that Phase 2 and later CAClaw work will touch"
read_when:
  - You are planning branding or UX work in CAClaw
  - You need to know which repo areas are rename-safe versus preserve-first
title: "CAClaw Surface Inventory"
---

# CAClaw surface inventory

> Historical note: This page was migrated from the former CAClaw fork. Read "CAClaw" here as the OpenClaw CA add-on unless the page is explicitly describing that old fork history.


This inventory maps the main product surfaces in the repository so later phases can change the right places without breaking feature parity or upstream compatibility.

## Change-posture labels

- **Rename-safe:** expected place for later product naming, copy, or asset work
- **Guarded:** editable, but only with explicit verification because the area affects packaging, platform behavior, or operator experience
- **Preserve-first:** avoid casual changes; preserve upstream behavior unless Phase scope explicitly requires modification

## Inventory by surface

| Surface                             | Path roots                                                                                       | User sees it directly | Change posture | Why it matters                                                                                                |
| ----------------------------------- | ------------------------------------------------------------------------------------------------ | --------------------- | -------------- | ------------------------------------------------------------------------------------------------------------- |
| CLI bootstrap and command UX        | `openclaw.mjs`, `src/entry.ts`, `src/cli/`, `src/commands/`                                      | Yes                   | Guarded        | Product naming and plain-language UX will show here, but these files also control startup and command routing |
| Gateway and runtime control plane   | `src/gateway/`, `src/agents/`, `src/sessions/`, `src/routing/`, `src/channels/`                  | Sometimes             | Preserve-first | Core parity surface for sessions, routing, channels, and assistant behavior                                   |
| Web control UI                      | `ui/`                                                                                            | Yes                   | Rename-safe    | Main visual surface for CAClaw branding and plain-language UX work                                            |
| Native apps                         | `apps/macos/`, `apps/ios/`, `apps/android/`, `apps/shared/OpenClawKit/`                          | Yes                   | Guarded        | Bundle metadata, app names, and visuals live here, but platform packaging risk is higher                      |
| Bundled skills                      | `skills/`                                                                                        | Yes                   | Rename-safe    | Safe place for CA-first workflows, prompts, and guidance layers                                               |
| Extensions and bundled integrations | `extensions/`                                                                                    | Sometimes             | Guarded        | Good seam for additive CA features, but each package has import and runtime constraints                       |
| Plugin SDK and plugin loading       | `src/plugin-sdk/`, `src/plugins/`                                                                | No                    | Preserve-first | Contract surface for extensions and published integration behavior                                            |
| Documentation                       | `README.md`, `docs/`, `docs/assets/`                                                             | Yes                   | Rename-safe    | Primary operator and user-facing explanation surface                                                          |
| Install and release metadata        | `package.json`, `pnpm-workspace.yaml`, `.github/workflows/`, install scripts, platform manifests | Yes                   | Guarded        | Naming and packaging changes can break installs or releases                                                   |
| Shared assets and icons             | `assets/`, `docs/assets/`, platform asset folders under `apps/`                                  | Yes                   | Rename-safe    | Brand rollout will land here, but official ICAI-style marks remain blocked                                    |
| Packages                            | `packages/`                                                                                      | Sometimes             | Guarded        | Published or support packages may expose naming or behavior to downstream consumers                           |

## User-facing priority surfaces for later phases

These are the highest-value targets for visible CAClaw branding and plain-language UX work:

1. `ui/`
2. `apps/macos/`, `apps/ios/`, `apps/android/`
3. `src/cli/` and `src/commands/`
4. `README.md` and `docs/`
5. `skills/`

## Parity-critical and update-sensitive boundaries

### Plugin SDK

- **Paths:** `src/plugin-sdk/`, `src/plugins/`
- **Why sensitive:** changes here affect how bundled and external plugins compile, load, and interact with the runtime
- **Verification expectation:** treat any change as contract-sensitive and verify affected extensions explicitly

### Channels and providers

- **Paths:** `src/channels/`, `src/routing/`, relevant `extensions/*`
- **Why sensitive:** CAClaw must preserve existing messaging, provider, and routing capabilities
- **Verification expectation:** verify touched channels/providers directly; do not assume changes are isolated

### Auth, pairing, and security

- **Paths:** `src/pairing/`, auth-profile surfaces, allowlists, gateway security paths
- **Why sensitive:** inbound data is untrusted and these flows protect operator/device access
- **Verification expectation:** security review posture, not casual copy-only edits

### Runtime and bootstrap entrypoints

- **Paths:** `openclaw.mjs`, `src/entry.ts`, `src/index.ts`
- **Why sensitive:** changes here can break startup, packaging, environment handling, or backward compatibility
- **Verification expectation:** targeted build and startup validation when touched

### Install and release plumbing

- **Paths:** install docs, installer scripts, packaging scripts, `.github/workflows/`
- **Why sensitive:** naming or asset changes can break onboarding, update flows, or published distribution paths
- **Verification expectation:** verify commands and release assumptions, not just file contents

## Safe default for future modifiers

- Start with **rename-safe** surfaces if the work is primarily branding, copy, or guided UX.
- Use **guarded** surfaces only when the Phase goal truly requires them and verification is planned.
- Avoid **preserve-first** surfaces unless the roadmap explicitly calls for deeper platform work.

## Gaps this inventory is meant to prevent

- missing product names on secondary but visible surfaces
- accidental edits to plugin SDK or channel boundaries during branding work
- platform-specific app metadata drifting out of sync
- install and release flows breaking because a rename looked superficial but was not
