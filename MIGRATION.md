# OpenClaw CA Add-on Migration Map

This file translates the current fork into an add-on strategy.

## Keep in the add-on

These are good additive seams and should live in `extensions/caclaw/`:

- CA workflow skills and checklists
- CA task-routing prompts
- CA MCP connection recipes
- CA integration contracts
- CA workspace conventions expressed as prompts, skills, docs, or services
- future secure connectors for GST, tax, audit, reporting, reconciliation, and compliance support

## Drop from the fork later

These old root-level changes were fork-oriented rather than add-on-oriented:

- `README.md` former CAClaw fork branding
- `ui/index.html` former CAClaw product title
- `ui/src/i18n/locales/en.ts` former CAClaw brand language
- `src/shared/product-brand.ts`
- `src/commands/configure.wizard.ts` former CAClaw wording
- `src/commands/onboard.ts` former CAClaw wording
- `src/commands/status.command.ts` former CAClaw wording
- `apps/ios/project.yml` former CAClaw display names
- `apps/android/app/build.gradle.kts` `caclaw-*` package naming
- former root CA brand assets like `docs/assets/openclaw-logo-text.svg`
- former root CA brand assets like `docs/assets/openclaw-logo-text-dark.svg`
- the old fork-maintainer narrative that used to live in `docs/caclaw/`

## Rework, do not just delete

Some CA work is valuable and now belongs in the plugin, but should keep being simplified to fit the add-on model:

- `extensions/caclaw/docs/mcp-rails.md` → convert into plugin-local MCP setup docs
- `extensions/caclaw/docs/plugin-rails.md` → convert into plugin-local extension design docs
- `extensions/caclaw/docs/integration-contract-template.md` → move into this folder as future partner/integration templates
- client/compliance organization docs → turn into prompt packs, workflow conventions, or plugin docs rather than core-product UX changes

## Honest limitation

A plugin can carry a lot of CA value, but it cannot cleanly own every kind of full-product rebrand.

That means the safest add-on path is:

- keep OpenClaw upstream-facing
- put CA intelligence in this plugin
- avoid deep identity changes unless OpenClaw later exposes official branding hooks
