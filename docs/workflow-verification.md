---
summary: "Phase 4 checklist for proving the CA starter workflow pack exists and is discoverable"
read_when:
  - You want to verify the Phase 4 workflow pack is complete
  - You need a checklist for future edits to the starter workflow pack
title: "CA Workflow Verification"
---

# CA workflow verification

> Historical note: This page was migrated from the former CAClaw fork. Read "CAClaw" here as the OpenClaw CA add-on unless the page is explicitly describing that old fork history.


Use this checklist to confirm the Phase 4 starter workflow pack is complete and discoverable.

## Skill pack presence

Verify that each domain skill exists:

- `extensions/caclaw/skills/ca-gst/SKILL.md`
- `extensions/caclaw/skills/ca-tds/SKILL.md`
- `extensions/caclaw/skills/ca-income-tax/SKILL.md`
- `extensions/caclaw/skills/ca-audit/SKILL.md`
- `extensions/caclaw/skills/ca-financial-reporting/SKILL.md`
- `extensions/caclaw/skills/ca-roc-compliance/SKILL.md`

## Reusable content presence

Verify that each domain has:

- a reference guide in `references/`
- a checklist/template asset in `assets/`

## Discovery checks

Verify that:

- the overview entry cues still list the six CA domains
- the overview copy treats them as starter packs
- the overview routes users into the workflow pack rather than into placeholder labels

## Safety checks

Verify that:

- no skill claims autonomous filing
- no template claims guaranteed legal or tax correctness
- the content remains guidance-first and human-reviewed

## Suggested evidence commands

```bash
find extensions/caclaw/skills/ca-* -maxdepth 2 -type f | sort
grep -n 'GST work\|TDS work\|Income tax' ui/src/ui/views/overview-hints.ts ui/src/ui/views/overview-cards.ts
```

## Completion standard

Phase 4 is complete when the workflow pack exists, contains reusable starter content across all six domains, and is visibly discoverable from primary CAClaw surfaces.
