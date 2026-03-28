---
summary: "Repeatable maintainer workflow for pulling new OpenClaw changes into CAClaw safely"
read_when:
  - You are preparing to update CAClaw from OpenClaw
  - You need a conflict-resolution checklist for upstream sync work
title: "CAClaw Upstream Sync Workflow"
---

# CAClaw upstream sync workflow

> Historical note: This page was migrated from the former CAClaw fork. Read "CAClaw" here as the OpenClaw CA add-on unless the page is explicitly describing that old fork history.


Use this workflow whenever CAClaw needs to absorb new OpenClaw changes. Read the [upstream baseline](./upstream-baseline.md) first so you know the recorded import anchor and current divergence point.

## Goal

Pull OpenClaw changes into CAClaw without losing feature parity, deepening the fork unnecessarily, or smearing CAClaw-specific changes across preserve-first surfaces.

## Before you sync

Confirm these facts first:

- `upstream` still points to `https://github.com/openclaw/openclaw.git`
- the recorded baseline is still `cfddce41960d396573703b039270bdf740740855`
- you know which CAClaw-only commits landed after the baseline
- you understand whether the incoming upstream changes touch core runtime, plugin SDK, channel/provider logic, security flows, UI surfaces, or docs only

## Recommended workflow

### 1. Fetch the latest upstream state

```bash
git fetch upstream --tags
```

If the fetch fails, stop and fix remote/auth issues before doing anything else.

### 2. Inspect divergence before merging anything

```bash
git log --oneline --decorate --graph --max-count=30 main upstream/main
git diff --stat cfddce41960d396573703b039270bdf740740855..HEAD
git diff --stat HEAD..upstream/main
```

Review these outputs with three questions:

1. What changed in CAClaw since the import baseline?
2. What changed upstream that CAClaw does not have yet?
3. Which files or directories overlap?

### 3. Create a dedicated sync branch

Work on a temporary branch rather than merging directly on `main`.

```bash
git checkout main
git pull --ff-only upstream main
git checkout -b sync/openclaw-YYYY-MM-DD
```

If your local `main` contains CAClaw-only commits not yet pushed elsewhere, create the sync branch from the current CAClaw `main` tip instead of resetting history.

### 4. Merge upstream into the CAClaw branch

Prefer a visible merge when CAClaw already has project-specific commits:

```bash
git merge --no-ff upstream/main
```

Use replay or cherry-pick only when the branch history makes a normal merge clearly worse. The default posture is to preserve the real ancestry so future maintainers can see when upstream changes landed.

### 5. Resolve conflicts with parity-first rules

When conflicts appear:

- preserve OpenClaw platform behavior first
- re-apply CAClaw-specific docs, copy, branding, or seam guidance second
- be especially careful in:
  - `src/`
  - `src/plugin-sdk/`
  - `src/channels/`
  - `src/routing/`
  - `src/pairing/`
  - `src/gateway/`
  - `extensions/`
  - install and release scripts

Use the Phase 1 docs as guardrails:

- [Upstream baseline](./upstream-baseline.md)
- [Surface inventory](./surface-inventory.md)
- [Customization seams](./customization-seams.md)

### 6. Run targeted verification

Match verification to the touched surfaces:

- **Docs-only sync:** verify links, wording, and doc scope
- **UI or native surface sync:** run the nearest relevant UI/app checks
- **Core runtime or script sync:** run targeted `pnpm test -- <path>`, `pnpm check`, or `pnpm build` as warranted by the changed areas
- **Channel, provider, auth, or plugin SDK sync:** treat targeted verification as mandatory, not optional

Minimum checks after every sync:

```bash
git status --short
git diff --stat upstream/main...HEAD
```

### 7. Record what happened

Before closing the sync branch, record:

- what upstream tag or commit was pulled in
- which CAClaw areas conflicted
- what decisions were made during conflict resolution
- what verification was run
- any carry-forward risks for the next maintainer

## Do not do this

- Do not run a mass rename of `OpenClaw` to `CAClaw` during sync conflict resolution.
- Do not move directories or rewrite package boundaries just to make the diff "look cleaner."
- Do not change plugin SDK, security, routing, or channel boundaries casually to fit CA-specific work.
- Do not claim a sync is complete without checking overlap between CAClaw-only changes and incoming upstream changes.

## When sync risk is low

Low-risk syncs usually look like:

- docs-only upstream changes
- isolated extension updates with no overlap with CAClaw changes
- maintenance changes in untouched platform areas

## When sync risk is high

High-risk syncs usually look like:

- changes to auth, pairing, gateway protocol, or provider/channel logic
- wide UI or native-app refactors that overlap planned CAClaw branding work
- package boundary, build, or install-path changes
- situations where CAClaw has already touched the same files or directories heavily

## Practical default

If you are unsure whether to preserve a CAClaw customization or accept the upstream version, preserve parity first and re-apply CAClaw-specific behavior in a smaller follow-up commit with explicit verification.
