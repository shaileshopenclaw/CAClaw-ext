# Skill Reference

## Introduction

Background knowledge skills are a key feature of this plugin. These are not commands that you invoke - they are reference material that Claude auto-loads contextually when needed to support audit commands.

**How it works:**

1. **User doesn't invoke:** Background skills have `user-invocable: false` in their SKILL.md frontmatter
2. **Claude auto-loads:** When you run an audit command or ask an audit question, Claude automatically loads the relevant skill(s)
3. **Progressive disclosure:** Claude loads skill metadata first, then full content when needed
4. **Contextual knowledge:** Skills provide Claude with professional knowledge to generate accurate, standards-compliant outputs

**Why this matters:**

Background skills give Claude the professional knowledge of Standards on Auditing, CARO 2020, Companies Act, audit methodology, Ind AS, and tax provisions. This enables Claude to generate audit programs that cite specific SA requirements, draft CARO reports with illustrative wordings, assess independence per Companies Act sections, and calculate materiality following SA 320 principles - without you having to provide this reference material in every conversation.

## How Background Skills Work

Background skills auto-load based on the command you run or the question you ask. Here are examples:

**Example 1: Materiality Command**
```
You run: /audit:materiality
Claude loads: sa-standards-reference (SA 320), audit-methodology (Materiality Framework)
Result: Materiality calculation with SA 320 benchmark decision tree and professional judgment guidance
```

**Example 2: CARO Report Command**
```
You run: /audit:caro-report clause 3(vii)
Claude loads: caro-reference (Clause 3(vii): Statutory Dues), companies-act-audit (relevant sections), tax-provisions-reference (Section 43B)
Result: CARO paragraph draft with prescribed wording, verification procedures, and statutory cross-references
```

**Example 3: Estimates Review Command**
```
You run: /audit:estimates-review
Claude loads: sa-standards-reference (SA 540), ind-as-reference (Ind AS 36/37/109), audit-methodology (Professional Judgments)
Result: Estimates audit approach with SA 540 (Revised) three inherent risk factors and Ind AS measurement requirements
```

## Skills Overview Table

| Skill | Full Name | Coverage Scope | Auto-loads When | Size |
|-------|-----------|----------------|-----------------|------|
| `sa-standards-reference` | Indian Standards on Auditing (SAs) Reference | All 38 SAs from SA 200 through SA 810 | Any command or question involving audit procedures, evidence, documentation, or compliance | 860 lines |
| `audit-methodology` | Audit Methodology Reference | End-to-end audit lifecycle, assertion framework, risk-based approach, evidence hierarchy | Planning, execution, or methodology questions | 402 lines |
| `caro-reference` | Companies (Auditor's Report) Order 2020 (CARO 2020) Reference | All 21 CARO clauses with 38 sub-clauses | CARO reporting or clause-specific verification questions | 767 lines |
| `companies-act-audit` | Companies Act 2013: Auditor Provisions Reference | Sections 139-148 covering appointment, qualifications, powers, duties, rotation | Auditor appointment, independence, or statutory obligation questions | 584 lines |
| `ind-as-reference` | Indian Accounting Standards (Ind AS) - Audit Reference | 8 Ind AS standards requiring significant auditor judgment (36, 37, 109, 115, 116, 12, 8, 10) | Accounting estimates, fair value, or financial statement measurement questions | 358 lines |
| `tax-provisions-reference` | Income Tax Act 1961 - Tax Audit Reference | Section 44AB, Form 3CD, disallowances (40A, 43B), TDS, concessional rates, MAT/AMT | Tax audit, Form 3CD, or tax computation questions | 359 lines |

---

## Detailed Skill Sections

### 1. sa-standards-reference

**Full Name:** Indian Standards on Auditing (SAs) Reference

**Description:** Indian Standards on Auditing (SAs) issued by ICAI - key requirements, mandatory procedures, documentation obligations, and practical guidance for statutory auditors. Auto-loaded when audit procedures, evidence, documentation, or compliance questions arise.

**Coverage:**

This skill covers all 38 SAs issued by the Auditing and Assurance Standards Board (AASB) of ICAI, organized into six categories:

- **SA 200-299 (General Principles):** SA 200 (Overall Objectives), SA 210 (Agreeing Terms), SA 220 (Quality Control), SA 230 (Documentation), SA 240 (Fraud), SA 250 (Laws and Regulations), SA 260/265 (Communication with TCWG)
- **SA 300-499 (Risk Assessment):** SA 300 (Planning), SA 315 (Risk Identification), SA 320 (Materiality), SA 330 (Risk Response), SA 402 (Service Organizations), SA 450 (Misstatements)
- **SA 500-599 (Audit Evidence):** SA 500 (Evidence), SA 501 (Specific Items), SA 505 (Confirmations), SA 510 (Initial Engagements), SA 520 (Analytical Procedures), SA 530 (Sampling), SA 540 (Estimates), SA 550 (Related Parties), SA 560 (Subsequent Events), SA 570 (Going Concern), SA 580 (Representations)
- **SA 600-699 (Using Work of Others):** SA 600 (Group Audits), SA 610 (Internal Audit), SA 620 (Expert's Work)
- **SA 700-799 (Reporting):** SA 700 (Forming Opinion), SA 701 (KAM), SA 705 (Modified Opinions), SA 706 (EOM/OM), SA 710 (Comparatives), SA 720 (Other Information)
- **SA 800-810 (Specialized):** SA 800 (Special Purpose Frameworks), SA 805 (Single Statement), SA 810 (Summary Statements)

**When Claude Auto-loads:**

- Running any `/audit:` command (every command references SAs)
- Questions about audit procedures, evidence requirements, or documentation standards
- Risk assessment, materiality, sampling, or analytical procedure questions
- Reporting questions (opinion types, modifications, KAM, EOM)
- Quality control, professional skepticism, or ethics questions

**What It Provides:**

- **Objectives:** What the auditor aims to achieve per each SA
- **Requirements:** Mandatory procedures (uses "shall" language) that auditor must perform
- **Application Material:** Explanatory guidance and examples showing how to apply requirements
- **Definitions:** Key terms defined in each SA
- **Cross-references:** Links between related SAs (e.g., SA 315 risk assessment feeds SA 330 response)

**Example Auto-load Scenarios:**

1. **You run `/audit:materiality`** → Claude loads SA 320 (Materiality in Planning and Performing an Audit) section covering benchmark selection, performance materiality, trivial threshold, and revision requirements
2. **You ask "What procedures for revenue recognition fraud risk?"** → Claude loads SA 240 (Fraud) section on presumed fraud risk in revenue recognition with required procedures
3. **You run `/audit:draft-report`** → Claude loads SA 700 (Forming Opinion), SA 705 (Modified Opinions), SA 706 (EOM/OM), and SA 701 (KAM for listed entities)

**File Location:** `skills/sa-standards-reference/SKILL.md`

---

### 2. audit-methodology

**Full Name:** Audit Methodology Reference

**Description:** End-to-end statutory audit methodology covering engagement lifecycle, assertion framework, evidence hierarchy, risk-based approach, and working paper documentation standards. Auto-loaded when audit planning, execution, or methodology questions arise.

**Coverage:**

This skill provides comprehensive methodology guidance structured around:

- **1. Statutory Audit Engagement Lifecycle:** 5 phases (Pre-Engagement, Planning, Execution, Completion, Reporting) with key activities and outputs per phase
- **2. Assertion Framework:** Financial statement assertions at class of transaction, account balance, and disclosure levels (Existence, Completeness, Accuracy, Valuation, Rights/Obligations, Cut-off, Classification, Presentation) with examples
- **3. Risk-Based Audit Approach:** Inherent risk, control risk, detection risk, and audit risk model; risk assessment at assertion level; responsive procedures
- **4. Audit Evidence Hierarchy:** Quality and reliability of different evidence types (external confirmation > auditor observation > third-party documents > internal documents)
- **5. Working Paper Standards (SA 230):** Documentation requirements, file organization (PAF/CAF system), review notes, completion requirements
- **6. Materiality Framework (SA 320):** Benchmark selection, overall materiality, performance materiality, specific materiality for classes/disclosures, trivial threshold
- **7. Audit Sampling (SA 530):** Statistical vs non-statistical, sample size determination, selection methods, evaluation
- **8. Key Professional Judgments:** Materiality, risk assessment, going concern, estimates, fraud risk, opinion formation
- **9. Quality Control (SA 220):** Engagement quality control review (EQCR), review responsibilities, consultation requirements
- **10. Common Audit Approach by Area:** Revenue, receivables, inventory, PPE, payables, provisions, related parties

**When Claude Auto-loads:**

- Planning commands (`/audit:audit-strategy`, `/audit:materiality`, `/audit:risk-matrix`)
- Execution commands (`/audit:program`, `/audit:sampling`)
- Methodology questions ("What assertions for revenue?", "How to assess inherent risk?")
- Working paper structure or documentation questions

**What It Provides:**

- **Conceptual frameworks:** How to structure audit approach, think about risk, assess evidence quality
- **Practical examples:** Sample risk assessments, assertion mapping, evidence evaluation
- **Decision trees:** When to use controls-reliance vs substantive approach, sampling method selection
- **Quality standards:** Documentation completeness, review requirements, file assembly

**Example Auto-load Scenarios:**

1. **You run `/audit:audit-plan`** → Claude loads engagement lifecycle section (Phase 2: Planning) and risk-based approach to design risk-responsive procedures
2. **You ask "What assertions should I test for inventory?"** → Claude loads assertion framework section with account balance assertions (Existence, Completeness, Valuation, Rights/Obligations)
3. **You run `/audit:program receivables`** → Claude loads common audit approach for receivables (confirmation, aging analysis, subsequent collection, valuation) and assertion mapping

**File Location:** `skills/audit-methodology/SKILL.md`

---

### 3. caro-reference

**Full Name:** Companies (Auditor's Report) Order 2020 (CARO 2020) Reference

**Description:** Companies (Auditor's Report) Order 2020 (CARO 2020) - all 21 clauses and 38 sub-clauses with reporting requirements, illustrative wordings, and verification guidance. Auto-loaded when CARO reporting or clause-specific questions arise.

**Coverage:**

This skill covers all 21 CARO 2020 clauses with complete sub-clauses:

- **Clause 3(i):** Fixed Assets (PPE records, physical verification, title deeds, revaluation)
- **Clause 3(ii):** Inventory (physical verification, discrepancies, write-down)
- **Clause 3(iii):** Investments, Guarantees, Security, and Loans (procedures, reporting)
- **Clause 3(iv):** Compliance with Sections 185 and 186 (loans, investments, guarantees)
- **Clause 3(v):** Deposits (compliance, directives, amounts not refunded)
- **Clause 3(vi):** Cost Records (applicability, maintenance)
- **Clause 3(vii):** Statutory Dues (regularity, disputed dues, 6-month aging)
- **Clause 3(viii):** Unrecorded Income (surrendered/disclosed)
- **Clause 3(ix):** Borrowings and Default (term loans, working capital, overdue amounts)
- **Clause 3(x):** Application of Money Raised (IPO, term loans)
- **Clause 3(xi):** Fraud Reporting (fraud identified by/on the company)
- **Clause 3(xii):** Nidhi Company (compliance with Nidhi Rules)
- **Clause 3(xiii):** Related Party Transactions (Section 177, Section 188 compliance)
- **Clause 3(xiv):** Internal Audit System (applicability, adequacy)
- **Clause 3(xv):** Non-Cash Transactions with Directors (Section 192 compliance)
- **Clause 3(xvi):** RBI Registration (Section 45-IA applicability)
- **Clause 3(xvii):** Cash Losses (current year, previous year)
- **Clause 3(xviii):** Resignation of Statutory Auditors (issues reported)
- **Clause 3(xix):** Financial Ratios, Ageing, Working Capital (ratios, variance analysis)
- **Clause 3(xx):** CSR Expenditure (compliance with Section 135)
- **Clause 3(xxi):** Consolidated Qualifications (qualifications in subsidiaries/associates/JVs)

**When Claude Auto-loads:**

- CARO-specific commands (`/audit:caro-report`, `/audit:caro-checklist`)
- Statutory dues command (`/audit:statutory-dues` for Clause 3(vii))
- Questions about CARO applicability, verification procedures, or reporting requirements
- Draft report command (`/audit:draft-report` which includes CARO annexure)

**What It Provides:**

- **Reporting requirements:** What auditor must report for each clause
- **Illustrative wordings:** Three templates per clause (favorable, adverse, not applicable)
- **Verification procedures:** How to verify compliance for each requirement
- **Common qualifications:** Typical issues found and how to word them
- **Cross-references:** Links to relevant Companies Act sections and other clauses

**Example Auto-load Scenarios:**

1. **You run `/audit:caro-report clause 3(vii)`** → Claude loads Clause 3(vii) section with statutory dues regularity assessment, 6-month aging computation (from balance sheet date), and disputed dues reporting with illustrative paragraphs
2. **You ask "What are CARO requirements for fixed assets?"** → Claude loads Clause 3(i) section covering PPE records (sub-clause a), physical verification program (b), title deeds (c), and revaluation (d)
3. **You run `/audit:statutory-dues`** → Claude loads Clause 3(vii) for verification procedures and cross-references Section 43B and Section 36(1)(va) from tax-provisions-reference

**File Location:** `skills/caro-reference/SKILL.md`

---

### 4. companies-act-audit

**Full Name:** Companies Act 2013: Auditor Provisions Reference

**Description:** Companies Act 2013 provisions relevant to statutory auditors - Sections 139 through 148 covering appointment, qualifications, powers, duties, rotation, removal, and penalties. Auto-loaded when auditor appointment, independence, or statutory obligation questions arise.

**Coverage:**

This skill covers Sections 139-148 of the Companies Act 2013:

- **Section 139:** Appointment of Auditors (first auditor, subsequent auditors, rotation requirements, individual vs firm)
- **Section 140:** Removal and Resignation of Auditor (grounds, procedures, ADT-3 filing)
- **Section 141:** Eligibility and Qualifications of Auditors (who can be appointed, disqualifications under subsection (3), partner limits)
- **Section 142:** Remuneration of Auditors (how fixed, who approves, out-of-pocket expenses)
- **Section 143:** Powers and Duties of Auditors (access rights, duties, CARO reporting, fraud reporting, qualification wording)
- **Section 144:** Auditor Not to Render Certain Services (prohibited non-audit services)
- **Section 145:** Auditor to Sign Audit Report (who can sign, membership number, firm registration)
- **Section 146:** Auditor to Attend General Meeting (right and duty to attend AGM)
- **Section 147:** Punishment for Contravention (penalties for non-compliance)
- **Section 148:** Cost Audit (applicability, appointment, reporting)

Also includes quick reference tables for key thresholds, important forms (ADT-1, ADT-2, ADT-3), and common compliance scenarios.

**When Claude Auto-loads:**

- Independence command (`/audit:independence-check` for Section 141/144)
- Client acceptance command (`/audit:client-acceptance`)
- New engagement command (`/audit:new-engagement` for engagement letter terms)
- Questions about rotation, appointment, removal, powers, duties, or penalties
- Draft report command (`/audit:draft-report` for Section 143 reporting requirements)

**What It Provides:**

- **Statutory provisions:** Exact requirements per each section
- **Eligibility criteria:** Who can/cannot be appointed as auditor
- **Rotation rules:** When rotation applies, cooling-off period, exemptions
- **Reporting obligations:** What auditor must report under Section 143(3)
- **Penalties:** Consequences of non-compliance per Section 147

**Example Auto-load Scenarios:**

1. **You run `/audit:independence-check`** → Claude loads Section 141(3) (disqualifications), Section 144 (prohibited services), and assessment framework for independence
2. **You ask "What are auditor rotation requirements?"** → Claude loads Section 139(2) rotation provisions (listed companies, partners, firms, cooling-off period)
3. **You run `/audit:new-engagement`** → Claude loads Section 139 (appointment), Section 141 (eligibility check), Section 210 from SA reference (engagement letter terms), and Section 143(3) for scope of work

**File Location:** `skills/companies-act-audit/SKILL.md`

---

### 5. ind-as-reference

**Full Name:** Indian Accounting Standards (Ind AS) - Audit Reference

**Description:** Key Indian Accounting Standards (Ind AS) relevant to statutory audit judgments - covering impairment, provisions, financial instruments, revenue recognition, and leases. Auto-loaded when accounting estimates, fair value, or financial statement measurement questions arise.

**Coverage:**

This skill covers 8 Ind AS standards requiring significant auditor judgment and professional skepticism:

- **Ind AS 36 (Impairment of Assets):** Impairment indicators, recoverable amount (FVLCD vs VIU), CGU identification, cash flow projections, discount rates, goodwill allocation, reversal of impairment
- **Ind AS 37 (Provisions):** Recognition criteria (present obligation, probable outflow, reliable estimate), measurement, contingent liabilities vs provisions, disclosure requirements
- **Ind AS 109 (Financial Instruments):** Classification (amortized cost, FVOCI, FVTPL), measurement, ECL model (12-month vs lifetime), significant increase in credit risk, impairment stages
- **Ind AS 115 (Revenue from Contracts with Customers):** 5-step model, performance obligations, transaction price allocation, variable consideration, contract modifications, principal vs agent
- **Ind AS 116 (Leases):** Lease identification, lessee accounting (ROU asset, lease liability), discount rate (IBR), reassessment, modifications, lessor accounting
- **Ind AS 12 (Income Taxes):** Deferred tax recognition, temporary differences, tax rate selection, unrecognized deferred tax assets, uncertain tax positions
- **Ind AS 8 (Accounting Policies and Estimates):** Change in policy vs estimate vs error, retrospective vs prospective application, disclosure requirements
- **Ind AS 10 (Events After Reporting Period):** Adjusting vs non-adjusting events, disclosure requirements, going concern assessment

**When Claude Auto-loads:**

- Estimates review command (`/audit:estimates-review` for Ind AS 36/37/109/12)
- Revenue-related questions or programs (`/audit:program revenue` for Ind AS 115)
- Subsequent events command (`/audit:subsequent-events` for Ind AS 10)
- Accounting policy, fair value, or measurement questions

**What It Provides:**

- **Recognition criteria:** When to recognize assets, liabilities, revenue, expenses
- **Measurement guidance:** How to measure fair value, present value, recoverable amount
- **Auditor focus areas:** Key judgments requiring professional skepticism
- **Common audit issues:** Frequent errors or aggressive accounting practices
- **Disclosure requirements:** What must be disclosed per each standard

**Example Auto-load Scenarios:**

1. **You run `/audit:estimates-review`** → Claude loads Ind AS 36 (impairment testing), Ind AS 37 (provisions), Ind AS 109 (ECL), and Ind AS 12 (deferred tax) for comprehensive estimates audit
2. **You ask "How to audit revenue recognition?"** → Claude loads Ind AS 115 5-step model with performance obligation identification, transaction price allocation, and variable consideration assessment
3. **You run `/audit:subsequent-events`** → Claude loads Ind AS 10 for adjusting vs non-adjusting event classification framework and disclosure requirements

**File Location:** `skills/ind-as-reference/SKILL.md`

---

### 6. tax-provisions-reference

**Full Name:** Income Tax Act 1961 - Tax Audit Reference

**Description:** Key Income Tax Act 1961 provisions relevant to tax audit under Section 44AB - covering tax audit applicability, disallowances (40A, 43B), cash transaction limits (269 series), TDS compliance, and Form 3CD clause requirements. Auto-loaded when tax audit, Form 3CD, or tax computation questions arise.

**Coverage:**

This skill covers key Income Tax Act provisions structured for tax audit work:

- **Section 44AB (Tax Audit Applicability):** Thresholds for business/profession, presumptive taxation (44AD/44ADA), cash transaction trigger, due dates
- **Section 40A(2) (Excessive Payments):** Related party definition, fair market value assessment, disallowance computation
- **Section 40A(3) (Cash Payments):** Rs. 10,000 limit (aggregate per party per day), exceptions, splitting detection, disallowance (100%)
- **Section 43B (Payment-Based Deductions):** Employer contribution due date (return filing), employee contribution (strict due date per 36(1)(va)), Section 43B(h) MSE payment (15/45 days), Supreme Court ruling (Checkmate Services 2022)
- **Sections 269SS/269ST/269T (Cash Limits):** Loan/deposit limits (Rs. 20,000), cash receipt limit (Rs. 2 lakh), repayment limit, penalties
- **TDS Compliance (Sections 194-199):** 9 key sections (192, 194A, 194C, 194H, 194I, 194J, 194Q, 206C), deposit deadlines (7th of following month), return filing (quarterly), late fee (234E), interest (201(1A))
- **Section 115BAA/115BAB (Concessional Rates):** Domestic company (22%, effective 25.168%), new manufacturing (15%, effective 17.16%), eligibility conditions, comparison with normal regime (30%)
- **Section 115JB (MAT):** Book profit computation (15%), adjustments, MAT credit carry-forward (15 years), not applicable under 115BAA/115BAB
- **Section 115JC (AMT):** Adjusted total income for non-corporate, AMT rate, credit carry-forward
- **Form 3CD (Key Clauses):** Quick reference for critical clauses (14 depreciation, 17 disallowances, 22 MSE, 38-43 specific provisions)
- **Common Tax Audit Issues:** Disallowances, TDS defaults, payment splitting, book-tax differences

**When Claude Auto-loads:**

- Tax audit commands (`/audit:tax-3cd`, `/audit:tax-computation`, `/audit:tax-checklist`)
- Statutory dues command (`/audit:statutory-dues` for Section 43B/36(1)(va))
- GST reconciliation command (`/audit:gst-reconciliation`)
- Questions about disallowances, TDS, cash limits, Form 3CD clauses

**What It Provides:**

- **Applicability thresholds:** When tax audit is required
- **Disallowance rules:** What gets disallowed and computation method
- **Compliance requirements:** Due dates, forms, documentation
- **Common errors:** Frequent tax audit issues and how to identify them
- **Form 3CD mapping:** Which clauses require reporting for specific provisions

**Example Auto-load Scenarios:**

1. **You run `/audit:tax-3cd`** → Claude loads Section 44AB (applicability), Form 3CD key clauses reference, and common tax audit issues for systematic clause completion
2. **You run `/audit:statutory-dues`** → Claude loads Section 43B (employer contribution), Section 36(1)(va) (employee contribution), TDS compliance sections, and Section 43B(h) (MSE payment disallowance)
3. **You ask "What are Section 40A(3) disallowance rules?"** → Claude loads Section 40A(3) with Rs. 10,000 limit, aggregate computation rule (splitting detection), exceptions, and 100% disallowance calculation

**File Location:** `skills/tax-provisions-reference/SKILL.md`

---

## Skill Integration with Commands Table

This table shows which skills are most relevant to each of the 31 commands, organized by audit phase.

### Engagement Setup

| Command | Primary Skills Auto-Loaded |
|---------|----------------------------|
| `/audit:new-engagement` | sa-standards-reference (SA 210, SA 230), companies-act-audit (Section 139, 141, 143), audit-methodology (Engagement Lifecycle, Working Paper Standards) |
| `/audit:independence-check` | companies-act-audit (Section 141, 144), sa-standards-reference (SA 220), audit-methodology (Quality Control) |
| `/audit:client-acceptance` | sa-standards-reference (SA 220), audit-methodology (Pre-Engagement Phase), companies-act-audit (Section 139, 141) |

### Planning & Materiality

| Command | Primary Skills Auto-Loaded |
|---------|----------------------------|
| `/audit:materiality` | sa-standards-reference (SA 320), audit-methodology (Materiality Framework) |
| `/audit:audit-strategy` | sa-standards-reference (SA 300), audit-methodology (Engagement Lifecycle - Planning Phase), companies-act-audit (Section 143), caro-reference (applicability assessment) |
| `/audit:analytical-review` | sa-standards-reference (SA 520, SA 570), audit-methodology (Risk-Based Approach), ind-as-reference (financial ratios and trends) |

### Risk Assessment

| Command | Primary Skills Auto-Loaded |
|---------|----------------------------|
| `/audit:risk-matrix` | sa-standards-reference (SA 315), audit-methodology (Risk-Based Approach, Assertion Framework) |
| `/audit:fraud-risk` | sa-standards-reference (SA 240), audit-methodology (Professional Judgments), ind-as-reference (Ind AS 115 revenue recognition) |
| `/audit:significant-risks` | sa-standards-reference (SA 315), audit-methodology (Risk-Based Approach) |
| `/audit:audit-plan` | sa-standards-reference (SA 330), audit-methodology (Engagement Lifecycle - Planning Phase, Risk-Based Approach) |

### Execution

| Command | Primary Skills Auto-Loaded |
|---------|----------------------------|
| `/audit:program` | sa-standards-reference (SA 330, SA 500, area-specific SAs), audit-methodology (Assertion Framework, Common Audit Approach, Evidence Hierarchy) |
| `/audit:sampling` | sa-standards-reference (SA 530), audit-methodology (Audit Sampling) |
| `/audit:sample-evaluate` | sa-standards-reference (SA 530, SA 450), audit-methodology (Audit Sampling) |

### Completion

| Command | Primary Skills Auto-Loaded |
|---------|----------------------------|
| `/audit:going-concern` | sa-standards-reference (SA 570), audit-methodology (Professional Judgments), ind-as-reference (Ind AS 10, Ind AS 37) |
| `/audit:estimates-review` | sa-standards-reference (SA 540), ind-as-reference (Ind AS 36, 37, 109, 12, 115), audit-methodology (Professional Judgments) |
| `/audit:subsequent-events` | sa-standards-reference (SA 560), ind-as-reference (Ind AS 10), audit-methodology (Engagement Lifecycle - Completion Phase) |
| `/audit:misstatement-schedule` | sa-standards-reference (SA 450, SA 320), audit-methodology (Materiality Framework) |

### Specialized Reporting

| Command | Primary Skills Auto-Loaded |
|---------|----------------------------|
| `/audit:caro-report` | caro-reference (specific clause), companies-act-audit (Section 143(11)), sa-standards-reference (SA 700), tax-provisions-reference (for Clause 3(vii)) |
| `/audit:caro-checklist` | caro-reference (all 21 clauses), companies-act-audit (Section 143(11)) |
| `/audit:tax-3cd` | tax-provisions-reference (Section 44AB, Form 3CD, all relevant sections), companies-act-audit (AGM/filing dates), sa-standards-reference (SA 250 for compliance) |
| `/audit:tax-computation` | tax-provisions-reference (Section 40A, 43B, 115BAA/115BAB, 115JB), ind-as-reference (Ind AS 12 for deferred tax) |
| `/audit:tax-checklist` | tax-provisions-reference (Form 3CD, TDS, UDIN), sa-standards-reference (SA 230 for documentation) |
| `/audit:gst-reconciliation` | tax-provisions-reference (GST provisions, TDS), companies-act-audit (compliance requirements), caro-reference (Clause 3(vii) for statutory dues) |
| `/audit:statutory-dues` | caro-reference (Clause 3(vii)), tax-provisions-reference (Section 43B, 36(1)(va), TDS), companies-act-audit (Section 143) |

### Final Reporting

| Command | Primary Skills Auto-Loaded |
|---------|----------------------------|
| `/audit:draft-report` | sa-standards-reference (SA 700, 701, 705, 706), caro-reference (all clauses for annexure), companies-act-audit (Section 143(3)), audit-methodology (Opinion Formation) |
| `/audit:kam-draft` | sa-standards-reference (SA 701), audit-methodology (Professional Judgments), ind-as-reference (for estimate-related KAMs) |
| `/audit:management-letter` | sa-standards-reference (SA 265, SA 260), audit-methodology (Quality Control), companies-act-audit (Section 143(3)(i)) |
| `/audit:representation-letter` | sa-standards-reference (SA 580), audit-methodology (Engagement Lifecycle - Completion Phase) |

### Quality Control

| Command | Primary Skills Auto-Loaded |
|---------|----------------------------|
| `/audit:completion-memo` | sa-standards-reference (SA 230), audit-methodology (Working Paper Standards, Professional Judgments, Quality Control) |
| `/audit:quality-review` | sa-standards-reference (SA 220), audit-methodology (Quality Control), companies-act-audit (Section 143) |
| `/audit:file-index` | sa-standards-reference (SA 230, all SAs for cross-reference), caro-reference (clause mapping), audit-methodology (Working Paper Standards) |

---

## Verifying Skill Loading

After running a command, you can ask Claude to confirm which skills were referenced:

**Example:**
```
You: /audit:materiality
Claude: [generates materiality calculation with SA 320 benchmarks]

You: Which skills did you reference for this output?

Claude: I referenced:
- sa-standards-reference (SA 320: Materiality in Planning and Performing an Audit)
- audit-methodology (Materiality Framework section)

SA 320 provided the benchmark decision tree, performance materiality range (50-75%),
trivial threshold (5-10%), and qualitative factors. Audit methodology provided the
5-benchmark decision framework and professional judgment documentation guidance.
```

This transparency helps you understand what reference material Claude used and verify that outputs align with professional standards.

---

## Cross-references

For comprehensive plugin documentation:

- **[Command Reference](COMMANDS.md)** - All 31 commands with detailed arguments, examples, and expected outputs
- **[Complete Walkthrough](WALKTHROUGH.md)** - Step-by-step audit from acceptance to reporting showing when each skill auto-loads
- **[How and Why](METHODOLOGY.md)** - SA methodology explaining why each skill's content matters to the audit

For the actual skill content, see each skill's SKILL.md file in the `skills/` directory.
