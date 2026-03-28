# OpenClaw CA Add-on

A practical Chartered Accountant add-on for OpenClaw.

This project adds a CA-focused workflow pack to **OpenClaw** so a Chartered Accountant or CA firm can use OpenClaw for recurring professional work like:

- GST working and review
- TDS working and follow-up
- income-tax preparation support
- audit planning and evidence tracking
- financial reporting checklists
- ROC and company-law compliance support

This is **not** a separate app and it is **not** a replacement for professional judgment.
It is an add-on you install into OpenClaw so OpenClaw can assist you with CA work in a more structured way.

---

## Who this is for

This add-on is for:

- individual Chartered Accountants
- CA firms
- article assistants and teams working under CA supervision
- firms that want repeatable checklists, prompts, and workflow guidance inside OpenClaw

If you already use OpenClaw and want it to feel more useful for real CA work, this add-on is for you.

---

## What this add-on helps with

After installing it, OpenClaw can help you structure work like:

### GST
- return-preparation checklists
- reconciliation support
- working-paper structure
- client information request lists
- review questions before filing

### TDS
- deduction review support
- due-date follow-up lists
- checklist-based preparation
- missing-data request lists

### Income Tax
- preparation checklists
- document collection lists
- return review prompts
- case-wise work organization

### Audit
- planning support
- evidence request lists
- workpaper preparation structure
- review and follow-up prompts

### Financial Reporting
- close checklists
- statement preparation support
- schedule and note preparation scaffolds
- review structure for reporting work

### ROC and Compliance
- filing-readiness checklists
- compliance document request lists
- recurring ROC support structure
- corporate-compliance task guidance

---

## What is included

This repository currently includes:

- `ca-workbench` — main CA router skill
- `ca-gst`
- `ca-tds`
- `ca-income-tax`
- `ca-audit`
- `ca-financial-reporting`
- `ca-roc-compliance`
- supporting CA docs
- CA-specific assets and reference material

---

## Important boundary

This add-on is designed to **assist** CA work, not to replace review or sign-off.

It does **not** claim to:

- file returns automatically
- guarantee statutory correctness
- replace professional judgment
- replace audit judgment
- replace legal review

Think of it as a well-organized CA assistant layer inside OpenClaw.

---

## What you need before installing

Before using this add-on, you need:

1. **OpenClaw installed and working**
2. access to your terminal on the system where OpenClaw runs
3. Git installed if you want to clone this repository directly from GitHub

If OpenClaw is not installed yet, install OpenClaw first and make sure the command below works:

```bash
openclaw --help
```

---

## Install from GitHub directly

This is the simplest GitHub-based setup.

### Step 1: clone this repository

```bash
git clone https://github.com/shaileshopenclaw/CAClaw-ext.git
cd CAClaw-ext
```

### Step 2: install the add-on into OpenClaw

From inside the cloned folder, run:

```bash
openclaw plugins install .
```

This tells OpenClaw to install the plugin from the current local folder.

### Step 3: enable the add-on

```bash
openclaw plugins enable caclaw
```

### Step 4: inspect the install

```bash
openclaw plugins inspect caclaw
```

You should see the plugin metadata and the CA skill pack.

### Step 5: restart the OpenClaw gateway

```bash
openclaw gateway restart
```

After restart, the CA add-on is available to OpenClaw.

---

## Development-style install from GitHub clone

If you want OpenClaw to use this folder directly without copying it, use link mode:

```bash
git clone https://github.com/shaileshopenclaw/CAClaw-ext.git
cd CAClaw-ext
openclaw plugins install -l .
openclaw plugins enable caclaw
openclaw plugins inspect caclaw
openclaw gateway restart
```

This is useful when you want to keep updating the local checkout.

---

## How to confirm it is installed correctly

Run:

```bash
openclaw plugins list
openclaw plugins inspect caclaw
```

You should see:

- plugin id: `caclaw`
- the plugin listed in OpenClaw
- CA skills available through the plugin

---

## How to use it in OpenClaw

Start with the main CA router skill:

- `ca-workbench`

Then use the specific workflow skills when needed:

- `ca-gst`
- `ca-tds`
- `ca-income-tax`
- `ca-audit`
- `ca-financial-reporting`
- `ca-roc-compliance`

A simple practical approach is:

1. open OpenClaw
2. tell it the work area
3. ask for a checklist, preparation plan, document request list, or review structure
4. use the output as your working draft
5. review professionally before final use

---

## Example prompts a CA can use

### GST
- "Prepare a GST filing checklist for a monthly client with missing purchase data."
- "Give me a GST reconciliation workplan for this month."

### TDS
- "Create a TDS deduction review checklist for salary and contractor payments."
- "Draft a missing-information follow-up list for TDS working."

### Income Tax
- "Give me an income-tax preparation checklist for a proprietor client."
- "Make a document request list for return preparation."

### Audit
- "Prepare an audit evidence request list for a trading company."
- "Give me a workpaper preparation checklist for statutory audit planning."

### Financial Reporting
- "Create a year-end financial reporting checklist for a small company."
- "Give me a schedule preparation structure for finalization work."

### ROC / Compliance
- "Prepare an ROC compliance checklist for a private limited company."
- "Make a filing-readiness checklist for corporate compliance review."

---

## If something does not work

Try these checks:

```bash
openclaw plugins inspect caclaw
openclaw plugins list
openclaw plugins doctor
```

Then restart the gateway again:

```bash
openclaw gateway restart
```

If OpenClaw still does not load the add-on, uninstall and reinstall from the cloned folder.

---

## Project direction

The goal is simple:

- keep **OpenClaw** as the main product
- keep this repository as the **CA specialization layer**
- make OpenClaw more useful for Chartered Accountants without requiring a deep product fork

---

## Repository

GitHub repository:

- https://github.com/shaileshopenclaw/CAClaw-ext

OpenClaw plugin install docs:

- https://docs.openclaw.ai/cli/plugins
- https://docs.openclaw.ai/tools/plugin
