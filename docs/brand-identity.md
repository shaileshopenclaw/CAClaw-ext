---
summary: "Initial CAClaw brand direction, asset rules, and safe-shipping constraints for Phase 2"
read_when:
  - You are creating or updating CAClaw brand assets
  - You need the approved Phase 2 brand direction
title: "CAClaw Brand Identity"
---

# CAClaw brand identity

> Historical note: This page was migrated from the former CAClaw fork. Read "CAClaw" here as the OpenClaw CA add-on unless the page is explicitly describing that old fork history.


Phase 2 does not need the final forever brand system. It needs a coherent, original, safe-to-ship identity that makes the product visibly feel like CAClaw.

## Brand direction

CAClaw should feel:

- professional
- reliable
- calm under pressure
- modern, but not trendy
- suitable for Chartered Accountancy, tax, audit, and compliance workflows

It should not feel:

- mascot-first
- meme-driven
- playful in a way that undermines trust
- visually similar to official ICAI branding

## Naming

- **Primary product name:** `CAClaw`
- **Short visible product name:** `CAClaw`
- **Reference phrase when needed:** `CAClaw, built on OpenClaw`

The reference phrase is for maintainer or migration contexts only. It should not replace visible product branding on primary user-facing surfaces.

## Visual system for Phase 2

### Wordmark

- Use `CAClaw` as the dominant wordmark on primary surfaces.
- Prefer clean, legible typography over decorative motifs.
- The wordmark should read clearly at README, app-header, and icon-adjacent sizes.

### Icon or lettermark

- Use a simple CA-oriented symbol or monogram treatment rather than a mascot illustration.
- Keep the symbol usable at favicon, app-icon, and navigation sizes.
- Favor geometry and clarity over detail-heavy marks.

### Color direction

- Base the Phase 2 palette around professional neutrals with one disciplined accent.
- Avoid playful rainbow palettes or loud gaming-style saturation.
- The palette must work on both light and dark surfaces without needing separate brand concepts.

## Safe-shipping rules

- Do not use official ICAI-style logos, crests, seals, or insignia.
- Do not imitate government, statutory, or professional-body branding closely enough to imply affiliation.
- Do not rely on humor-driven slogans as the primary identity.
- Do not rename internal compatibility contracts just to make the codebase look cleaner.

## Asset set required for rollout

Create or maintain these as the minimum viable brand assets:

- wordmark for light backgrounds
- wordmark for dark backgrounds
- compact icon or lettermark
- visible alt text and labels that say `CAClaw`

## Rollout guidance

- Update visible assets and product labels first.
- Keep compatibility-oriented ids and filenames stable when safe to do so.
- If a file path still contains `openclaw` but the asset itself is visibly CAClaw-branded, that is acceptable in Phase 2.

## Tone guardrail

The product can still have personality, but the dominant impression should be trustworthy assistance for serious professional work.
