# Statutory Audit Plugin for Claude

> **Disclaimer:** This plugin assists with statutory audit workflows under Indian
> auditing standards but does not provide professional audit opinions or advice.
> All outputs must be reviewed and approved by qualified Chartered Accountants
> before use in audit documentation, regulatory filings, or client deliverables.
> AI-generated content should never be relied upon for professional audit judgments
> without human verification and professional skepticism.

## Overview

A comprehensive Claude plugin for Indian statutory audits under the Companies Act 2013, Standards on Auditing (SAs) issued by ICAI, and CARO 2020. Designed for practicing Chartered Accountants conducting statutory audits of Indian companies.

This plugin covers the complete audit lifecycle from engagement acceptance to report issuance. It provides Claude with professional knowledge of Indian SAs, CARO 2020, Companies Act 2013, audit methodology, Ind AS, and tax provisions - enabling you to generate audit programs, assess risks, calculate materiality, perform sampling analysis, draft CARO reports, complete Form 3CD, and prepare audit reports that comply with professional standards.

Whether you're planning a new engagement, executing fieldwork, or completing final reporting, this plugin provides the reference material, command workflows, and methodology guidance to support judgment-intensive statutory audit work.

## What This Plugin Provides

- **31 Commands** covering audit workflows from engagement acceptance to final reporting
- **6 Background Knowledge Skills** covering SAs, CARO, Companies Act, methodology, Ind AS, and tax provisions
- **Complete Audit Lifecycle** support from planning through execution to reporting and quality control

## Quick Start (5 Minutes)

**Prerequisites:** Claude Code or Cowork installed, statutory audit engagement, client draft financials

**Step 1: Initialize Engagement**
```
/audit:new-engagement
```
Provide client name, CIN, and financial year. Claude drafts engagement letter, sets up working paper structure (PAF/CAF system), and creates engagement timeline.

**Step 2: Calculate Materiality**
```
/audit:materiality
```
Provide profit before tax, revenue, and total assets. Claude recommends benchmark, calculates overall materiality, performance materiality, and trivial threshold per SA 320.

**Step 3: Generate Audit Program**
```
/audit:program receivables
```
Provide assessed risk level (High/Medium/Low). Claude generates risk-responsive audit program with assertion mapping, procedures, sample sizes, and red flags.

**Step 4: Draft Audit Report**
```
/audit:draft-report
```
Provide financial statement figures and misstatements (if any). Claude drafts complete audit report with SA 700 compliance, CARO annexure, and Companies Act reporting.

## Installation

### Claude Code

```bash
claude plugin add /path/to/statutory-audit
```

### Cowork

1. Open Cowork settings
2. Navigate to Plugins
3. Add plugin directory path
4. Enable "statutory-audit" plugin

### Open Code

Use the plugin management interface to add the directory (similar to Claude Code).

**Post-Installation Verification:** Run `/audit:new-engagement` to verify the plugin is working. Claude should ask for client details.

## Documentation

Navigate to detailed references for comprehensive guidance:

- **[Command Reference](docs/COMMANDS.md)** - All 31 commands with arguments, examples, and expected outputs
- **[Skill Reference](docs/SKILLS.md)** - 6 background knowledge skills and when Claude auto-loads them
- **[Complete Walkthrough](docs/WALKTHROUGH.md)** - Step-by-step audit from acceptance to reporting
- **[How and Why](docs/METHODOLOGY.md)** - SA methodology behind each command

## Commands at a Glance

### Engagement Setup

| Command | Description |
|---------|-------------|
| `/audit:new-engagement` | Initialize new audit engagement with engagement letter, working paper structure (PAF/CAF), team allocation, and timeline |
| `/audit:independence-check` | Assess independence per Section 139/141/144 and ICAI Code of Ethics with threat analysis |
| `/audit:client-acceptance` | Evaluate client acceptance/continuance per SA 220 with integrity, competence, and risk assessment |

### Planning & Materiality

| Command | Description |
|---------|-------------|
| `/audit:materiality` | Calculate overall materiality, performance materiality, and trivial threshold per SA 320 |
| `/audit:audit-strategy` | Develop overall audit strategy per SA 300 covering scope, timing, direction, and resources |
| `/audit:analytical-review` | Perform preliminary analytical procedures per SA 520 with ratio analysis and trend comparison |

### Risk Assessment

| Command | Description |
|---------|-------------|
| `/audit:risk-matrix` | Identify and assess risks of material misstatement at assertion level per SA 315 |
| `/audit:fraud-risk` | Assess fraud risks per SA 240 including revenue recognition and management override |
| `/audit:significant-risks` | Identify significant risks requiring special audit consideration per SA 315 |
| `/audit:audit-plan` | Develop detailed audit plan with risk-responsive procedures per SA 330 |

### Execution

| Command | Description |
|---------|-------------|
| `/audit:program` | Generate area-specific audit programs with risk-responsive procedures and assertion mapping |
| `/audit:sampling` | Design statistical or non-statistical sampling plan per SA 530 with sample size calculation |
| `/audit:sample-evaluate` | Evaluate sample results and project misstatements per SA 530 |

### Completion

| Command | Description |
|---------|-------------|
| `/audit:going-concern` | Assess going concern per SA 570 with indicator analysis and management plan evaluation |
| `/audit:estimates-review` | Audit accounting estimates per SA 540 covering ECL, impairment, fair values, provisions |
| `/audit:subsequent-events` | Review events after reporting period per SA 560 for adjusting vs non-adjusting classification |
| `/audit:misstatement-schedule` | Accumulate and evaluate uncorrected misstatements per SA 450 for materiality assessment |

### Specialized Reporting

| Command | Description |
|---------|-------------|
| `/audit:caro-report` | Draft CARO 2020 reporting paragraphs for specific clauses with favorable/adverse/NA templates |
| `/audit:caro-checklist` | Generate CARO 2020 verification checklist for all 21 clauses with procedures |
| `/audit:tax-3cd` | Generate Form 3CD clause-wise guidance under Section 44AB with all 44 clauses |
| `/audit:tax-computation` | Compute taxable income with book-tax differences and disallowances |
| `/audit:tax-checklist` | Tax audit completion checklist covering Form 3CD, UDIN, TDS compliance |
| `/audit:gst-reconciliation` | Reconcile GSTR-2B with books for ITC eligibility per Section 16(2)(aa) |
| `/audit:statutory-dues` | Verify statutory dues compliance per CARO 3(vii) with aging and disputed dues |

### Final Reporting

| Command | Description |
|---------|-------------|
| `/audit:draft-report` | Draft audit report per SA 700/705/706 covering all opinion types (unmodified/qualified/adverse/disclaimer) |
| `/audit:kam-draft` | Identify and draft Key Audit Matters for listed entities per SA 701 |
| `/audit:management-letter` | Draft management letter communicating control deficiencies per SA 265 |
| `/audit:representation-letter` | Draft management representation letter per SA 580 with all mandatory categories |

### Quality Control

| Command | Description |
|---------|-------------|
| `/audit:completion-memo` | Generate completion memo synthesizing audit findings and opinion rationale per SA 230 |
| `/audit:quality-review` | Generate EQCR (Engagement Quality Control Review) checklist per SA 220 |
| `/audit:file-index` | Create comprehensive file index with SA cross-references and dual-use tracking |

## Background Knowledge Skills

These skills are auto-loaded contextually by Claude. Users don't invoke them directly - they provide Claude with professional knowledge to support audit commands.

| Skill | Description | Covers |
|-------|-------------|--------|
| `sa-standards-reference` | Indian Standards on Auditing (SAs) issued by ICAI | All 38 SAs from SA 200 through SA 810 covering general principles, risk assessment, evidence, reporting, and specialized areas |
| `caro-reference` | Companies (Auditor's Report) Order 2020 | All 21 CARO clauses with reporting requirements, verification procedures, and illustrative wordings |
| `companies-act-audit` | Companies Act 2013 audit provisions | Sections 139-148 covering auditor appointment, qualifications, rotation, removal, duties, powers, and penalties |
| `audit-methodology` | Core audit concepts and processes | Engagement lifecycle, assertion framework, risk-based approach, evidence hierarchy, documentation standards |
| `ind-as-reference` | Indian Accounting Standards relevant to audit | Ind AS 36 (Impairment), Ind AS 37 (Provisions), Ind AS 109 (Financial Instruments), Ind AS 115 (Revenue), and others requiring auditor judgment |
| `tax-provisions-reference` | Tax audit and compliance provisions | Section 44AB tax audit, Form 3CD (44 clauses), disallowances (40A, 43B), TDS compliance, GST provisions |

For details on when each skill auto-loads and what content it provides, see [Skill Reference](docs/SKILLS.md).

## Standards Coverage

This plugin provides reference material and workflows for:

- **Standards on Auditing (SAs):** All 38 SAs issued by ICAI
  - SA 200-299: General Principles and Responsibilities
  - SA 300-499: Risk Assessment and Response
  - SA 500-599: Audit Evidence
  - SA 600-699: Using Work of Others
  - SA 700-799: Audit Conclusions and Reporting
  - SA 800-810: Specialized Areas
- **CARO 2020:** All 21 clauses with verification procedures
- **Companies Act 2013:** Sections 139-148 (auditor appointment, duties, reporting)
- **Tax Audit:** Section 44AB, Form 3CD (44 clauses)
- **ICAI Code of Ethics:** Independence, confidentiality, professional competence

## License

Apache-2.0
