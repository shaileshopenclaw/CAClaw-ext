# OpenClaw CA Add-on

Yes — this is the better long-term direction.

Instead of keeping the former CAClaw fork, we can keep **OpenClaw as the product core** and ship the Chartered Accountant layer as an **add-on plugin**.

This folder is the new isolated home for that approach.

## What belongs in this folder

Keep CA-specific work here when possible:

- CA workflow skills
- CA prompts, checklists, and templates
- MCP server recipes and integration contracts
- future CA runtime services that can be added through the plugin system
- lightweight docs and assets that explain how the CA layer should behave inside OpenClaw

## What should not stay forked long-term

These are the parts of the current repo that are **not ideal** for the add-on approach and should be removed or rethought later:

- product-wide renaming from `OpenClaw` to `CAClaw`
- CLI/app/UI copy changes that replace the upstream product identity
- mobile and desktop display-name changes
- repo-wide branding assets that only exist for the forked product
- fork-maintenance docs that assume the former CAClaw fork is the whole product

## Practical direction

The clean target state is:

1. Keep upstream OpenClaw mostly unchanged.
2. Install this plugin.
3. Let this plugin provide the CA workflow pack.
4. Add future CA MCP tools and integrations here.
5. Present it externally as "OpenClaw for CAs" without needing a deep product fork.

## Install in a real OpenClaw deployment

Use the standard OpenClaw plugin installer.

### Option A: install from a local checkout

Clone this repo wherever you keep local plugins, then install it by path:

```bash
openclaw plugins install ./CAClaw-ext
openclaw plugins enable caclaw
openclaw plugins inspect caclaw
openclaw gateway restart
```

### Option B: link a local checkout for development

Use `--link` when you want OpenClaw to load the plugin from your working tree without copying files:

```bash
openclaw plugins install -l ./CAClaw-ext
openclaw plugins enable caclaw
openclaw plugins inspect caclaw
openclaw gateway restart
```

### What to expect after install

- the plugin id is `caclaw`
- OpenClaw should show it in `openclaw plugins list`
- `openclaw plugins inspect caclaw` should show the plugin metadata and shipped skills
- the CA skill pack becomes available through the normal OpenClaw skill surfaces

## Use inside OpenClaw

Start with the router skill:

- `ca-workbench`

Then use the domain skills as needed:

- `ca-gst`
- `ca-tds`
- `ca-income-tax`
- `ca-audit`
- `ca-financial-reporting`
- `ca-roc-compliance`

## What is already included here

This extraction moves the CA starter workflow pack, CA reference docs, and CA brand assets into one isolated plugin folder:

- `skills/ca-workbench`
- `skills/ca-gst`
- `skills/ca-tds`
- `skills/ca-income-tax`
- `skills/ca-audit`
- `skills/ca-financial-reporting`
- `skills/ca-roc-compliance`
- `docs/`
- `assets/`

## What to do next

When you are ready, the next cleanup step is to move any remaining CA-only assets into this folder or delete them from the fork if they are no longer needed.

See `MIGRATION.md` for the keep-vs-delete map.
