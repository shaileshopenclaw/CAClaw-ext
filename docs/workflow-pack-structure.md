# CA Workflow Pack Structure

This page explains how the CA add-on is organized.

The design is simple on purpose:

- each CA work area gets its own skill
- each skill includes practical reference notes
- each skill includes reusable assets like checklists

## Folder layout

Each domain has its own folder under `skills/`.

Examples:

- `skills/ca-gst/`
- `skills/ca-tds/`
- `skills/ca-income-tax/`
- `skills/ca-audit/`
- `skills/ca-financial-reporting/`
- `skills/ca-roc-compliance/`

## What each skill folder contains

### `SKILL.md`
This is the top-level instruction file.

It tells OpenClaw:

- when to use the skill
- what the skill covers
- what boundaries it should respect
- which references or assets are useful next

### `references/`
These files provide domain guidance.

They are used for:

- scope definition
- workflow sequence
- safe-use boundaries
- recurring work patterns

### `assets/`
These files provide reusable working material.

They are used for:

- checklists
- document request lists
- workpaper scaffolds
- review prompts
- preparation templates

## Why this structure is useful for a CA

This structure keeps the add-on:

- easy to understand
- easy to update
- practical for recurring office work
- focused on guidance instead of unnecessary technical complexity

## What this add-on is not trying to be

It is not trying to be:

- a filing engine
- a statutory replacement
- an autonomous legal or tax decision maker
- a heavy custom system that rewrites OpenClaw itself

