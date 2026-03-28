---
summary: "Recorded OpenClaw baseline and CAClaw divergence starting point for future sync work"
read_when:
  - You need to confirm which OpenClaw commit CAClaw was imported from
  - You are preparing to sync upstream changes into CAClaw
title: "CAClaw Upstream Baseline"
---

# CAClaw upstream baseline

> Historical note: This page was migrated from the former CAClaw fork. Read "CAClaw" here as the OpenClaw CA add-on unless the page is explicitly describing that old fork history.


This page records the exact repository facts that define where CAClaw started diverging from OpenClaw. Use it together with the [upstream sync workflow](./upstream-sync.md).

## Current repository facts

- **Current CAClaw branch:** `main`
- **Current CAClaw HEAD:** `3a2097a692e2aaa4ad0bc82d8a42efa41fa937a1`
- **Current CAClaw-only commit at resume time:** `3a2097a` (`docs: initialize CAClaw planning`)
- **Preserved upstream remote:** `https://github.com/openclaw/openclaw.git`
- **Imported OpenClaw baseline:** `cfddce41960d396573703b039270bdf740740855`
- **Observed upstream ref at resume time:** `upstream/main` and `upstream/HEAD`

## What this baseline means

- CAClaw starts from a direct OpenClaw import at `cfddce41960d396573703b039270bdf740740855`.
- The first CAClaw-specific commit recorded in this workspace is `3a2097a692e2aaa4ad0bc82d8a42efa41fa937a1`, which initializes project-planning artifacts.
- Later CAClaw changes should remain layered, reviewable, and easy to compare against both the imported baseline and the latest `upstream/main`.

## Working assumptions for future syncs

- `upstream/main` remains the source of truth for OpenClaw platform updates.
- CAClaw-specific work should prefer additive docs, copy, UI, skills, extensions, and configuration seams over deep core rewrites.
- Any future sync should compare three points explicitly:
  - the imported baseline commit
  - the current CAClaw branch tip
  - the current `upstream/main`

## Maintainer quick checks

Run these before or during sync work:

```bash
git remote -v
git branch --show-current
git rev-parse HEAD
git log --oneline --decorate --max-count=10
git diff --stat cfddce41960d396573703b039270bdf740740855..HEAD
git diff --stat HEAD..upstream/main
```

## Interpretation guide

- If `HEAD` differs only in CAClaw docs, planning, or additive seams, sync risk is relatively low.
- If `HEAD` starts to diverge in `src/`, `src/plugin-sdk/`, auth flows, routing, or channel/provider packages, sync risk rises and should be called out explicitly in the sync notes.
- If upstream changed files that CAClaw also changed, resolve those conflicts by preserving feature parity first and CAClaw customization second.

## Do not treat this as optional bookkeeping

This baseline exists to prevent vague statements like "we forked OpenClaw a while ago" from becoming the operating model. Keep this page current whenever CAClaw changes how it tracks upstream.
