# Working Paper File Index

Generate a comprehensive file index for audit working papers per SA 230 (Audit Documentation) covering both permanent audit file and current year audit file with reference numbers, descriptions, SA cross-references, CARO clause mappings, completion status, and file assembly instructions.

## Enhanced Description

This command generates a comprehensive working paper file index per SA 230 (Audit Documentation). The file index is the **ROADMAP to all audit documentation**, serving two distinct purposes:

**Dual-Use Concept**:

1. **Planning/Tracking Index** (generated at engagement start): Pre-populated with expected working papers, continuously updated throughout fieldwork, tracks completion status, used at team meetings and EQCR navigation.

2. **Final Assembly Index** (generated post-report): Reflects actual working papers prepared, all sections complete or N/A, includes final cross-reference numbers, signed off by engagement partner, forms permanent part of audit file.

**SA 230 File Assembly Requirements**:

Per SA 230.14, audit file assembly must be completed **within 60 days of the auditor's report date**. This is a strict requirement. The file index documents the assembly process and deadline compliance.

**Purpose**: The file index ensures:
- Complete documentation of all audit procedures
- Easy navigation and retrieval of working papers
- Compliance with SA 230 documentation requirements
- Clear organization for firm inspections, EQCR, and peer review
- Systematic tracking of completion status
- Cross-referencing to Standards on Auditing and CARO 2020 clauses

## Required Context

Before running this command, ensure:
- Audit is substantially complete or nearing completion (for final index)
- OR audit is starting (for planning/tracking index)
- Understanding of entity's business, structure, and operations
- Knowledge of audit file organization system used by the firm (physical binders / electronic folders / audit software)
- Awareness of all significant audit areas and working papers prepared or planned

**Interactive Prompts** (ask user at command invocation):
1. Entity name, financial year, audit type (standalone / consolidated)
2. Index type: Planning/Tracking Index OR Final Assembly Index
3. Auditor's report date (for assembly deadline calculation if final index)
4. File organization system: Physical binders / Electronic folders / Audit software (e.g., CaseWare, TeamMate)
5. Number of locations/branches covered

## Dual-Use Index Concept

### Use Case 1: Planning/Tracking Index (Generated at Engagement Start)

**Timing**: Created during audit planning phase, before fieldwork begins.

**Purpose**:
- Pre-populate expected working papers based on entity type and audit scope
- Assign responsibilities for each working paper section
- Track progress throughout fieldwork
- Identify missing or incomplete working papers during audit
- Use at team meetings to review status
- Assist EQCR reviewer in navigating file during EQCR

**Status Tracking**:
- Not Started: Working paper not yet commenced
- In Progress: Preparer working on this section
- Complete: Prepared, reviewed, and signed off
- N/A: Not applicable for this entity (justify in notes)

**Updates**: Continuously updated throughout fieldwork as working papers are completed.

**Responsibility**: Audit manager updates weekly (or more frequently), reviews status at team meetings.

---

### Use Case 2: Final Assembly Index (Generated Post-Report)

**Timing**: Created after audit report issuance, during file assembly period (within 60 days of report date).

**Purpose**:
- Document actual working papers prepared (not just planned)
- Reflect final file organization and cross-reference numbers
- Confirm all significant matters documented
- Support file assembly certification by engagement partner
- Form permanent record of file contents for retention period

**Status**: All working papers should be marked Complete or N/A (with justification). No "In Progress" items.

**Sign-Off**: Engagement partner signs file assembly certification confirming:
- File assembly complete within 60 days per SA 230.14
- All working papers adequately document audit procedures and conclusions
- File locked/sealed and ready for archival retention (7 years minimum)

## File Assembly Requirements per SA 230

### SA 230.14: 60-Day Assembly Rule

**Critical Requirement**:

Auditor's report date: **[REPORT DATE]**
File assembly deadline: **[REPORT DATE + 60 days]**

**Assembly is ADMINISTRATIVE process ONLY** — No new audit procedures, no new conclusions.

**Permissible during 60-day assembly period:**
- Sorting and collating working papers
- Completing audit file index
- Cross-referencing working papers
- Signing off review checklists (that were completed before report date)
- Deleting superseded drafts and duplicate documents
- Assembling audit evidence obtained and documented before report date

**NOT PERMISSIBLE during assembly:**
- Performing new audit procedures
- Drawing new conclusions
- Obtaining new audit evidence (unless evidence was agreed before report date but received during assembly period — document this)
- Substantive changes to working paper conclusions

### SA 230.15-16: Post-Assembly Restrictions

**After file assembly is complete (60 days after report date):**

**STRICTLY PROHIBITED**:
- Deleting or discarding any audit documentation before retention period ends (7 years minimum)
- Performing new audit procedures after report date
- Drawing new conclusions after report date
- Making substantive changes to audit documentation

**Exceptional Additions After Assembly** (should be RARE, not routine):

If an addition to audit documentation is necessary after file assembly (e.g., clarification requested by regulatory inspector, peer reviewer, or firm quality control):

Document:
1. **Specific reasons** for the addition
2. **When** the addition was made (date)
3. **By whom** (name, position)
4. **Reviewed by whom** (name, position, date)

Such additions should be clearly marked as "Post-assembly addition" with date stamp. The original working papers remain unchanged; additions are appended or annotated.

### Retention Period

**Minimum retention**: 7 years from the date of the auditor's report (SA 230.17)

**Consider longer retention if:**
- Firm policy requires longer period (e.g., 10 years)
- Regulatory requirements (SEBI for listed entities may require longer retention)
- Legal proceedings ongoing or anticipated (retain until resolved)
- Significant matters that may be relevant to future engagements

**Retention date**: [Report Date + 7 years minimum] = [DATE]

**Destruction**: Only after retention period expires, with documented authorization (managing partner approval, destruction date, method, persons responsible).

### Electronic Audit Files

**File assembly for electronic files**:
- Assembly = **locking the electronic file** to prevent substantive changes (read-only mode)
- Most audit software (CaseWare, TeamMate, CCH Engagement) has "lock" or "finalize" function
- Version control system logs satisfy SA 230.16 documentation requirements (who accessed, when, what changes)
- PDF export optional but not required if electronic file is properly locked and retained

**Backup and disaster recovery**:
- Electronic audit files must be backed up (on-site and off-site)
- Disaster recovery procedures documented and tested
- Accessibility ensured throughout retention period (software version compatibility)

## Permanent Audit File Index

**Purpose**: Documents that are relevant across multiple years and updated periodically, not annually.

---

### Section P1: Entity Information

| Ref | Working Paper Description | Status | Last Updated | Review Date | Notes |
|-----|--------------------------|--------|--------------|-------------|-------|
| P1.1 | Memorandum and Articles of Association (MoA/AoA) | Current | [DATE] | [DATE] | Update only if amended |
| P1.2 | Certificate of Incorporation, CIN details | Current | [DATE] | [DATE] | Static document |
| P1.3 | PAN, TAN, GST registration certificates | Current | [DATE] | [DATE] | Update if new registrations obtained |
| P1.4 | Details of directors and key management personnel | Current | [DATE] | [DATE] | **Update annually at AGM or upon change** |
| P1.5 | Details of shareholders/members | Current | [DATE] | [DATE] | Update annually or upon change |
| P1.6 | Group structure and related party charts | Current | [DATE] | [DATE] | Update when structure changes |
| P1.7 | Entity background, history, business model | Current | [DATE] | [DATE] | Update when business changes |
| P1.8 | Significant shareholders (>10% holding) | Current | [DATE] | [DATE] | Track changes in significant holdings |

**Status**: Current / Needs Update / Missing

**Update Triggers**: Document when each permanent file item should be reviewed and updated (e.g., P1.4 directors — "Update annually at AGM or upon change in directorship").

---

### Section P2: Engagement Administration

| Ref | Working Paper Description | Status | Last Updated | Review Date | Notes |
|-----|--------------------------|--------|--------------|-------------|-------|
| P2.1 | Engagement letters (current and prior years) | Current | [DATE] | [DATE] | New engagement letter each year or at change |
| P2.2 | Independence assessments (annual confirmations) | Current | [DATE] | [DATE] | **Update annually before report date** |
| P2.3 | Client acceptance/continuance documentation | Current | [DATE] | [DATE] | Update annually at engagement acceptance |
| P2.4 | Audit committee/TCWG communications (multi-year) | Current | [DATE] | [DATE] | Archive significant communications |
| P2.5 | Predecessor auditor communications (if applicable) | Current | [DATE] | [DATE] | Obtained at initial engagement, archived |
| P2.6 | Prior year audit observations status tracking | Current | [DATE] | [DATE] | Track management's action on prior year findings |

---

### Section P3: Accounting Policies and Internal Controls

| Ref | Working Paper Description | Status | Last Updated | Review Date | Notes |
|-----|--------------------------|--------|--------------|-------------|-------|
| P3.1 | Summary of significant accounting policies | Current | [DATE] | [DATE] | Update when accounting policies change |
| P3.2 | Internal control documentation (flowcharts, matrices) | Current | [DATE] | [DATE] | Update when controls change significantly |
| P3.3 | IT systems documentation (ERP, accounting software) | Current | [DATE] | [DATE] | Update when IT environment changes |
| P3.4 | Chart of accounts | Current | [DATE] | [DATE] | Update when account structure changes |
| P3.5 | Key financial ratios and benchmarks (multi-year) | Current | [DATE] | [DATE] | Add current year ratios annually |

---

### Section P4: Legal and Regulatory

| Ref | Working Paper Description | Status | Last Updated | Review Date | Notes |
|-----|--------------------------|--------|--------------|-------------|-------|
| P4.1 | Significant contracts and agreements | Current | [DATE] | [DATE] | Add new contracts, remove expired |
| P4.2 | Loan agreements and facility letters | Current | [DATE] | [DATE] | Update when new loans obtained or repaid |
| P4.3 | Lease agreements | Current | [DATE] | [DATE] | Update when new leases entered or expired |
| P4.4 | Legal opinions and counsel letters (multi-year) | Current | [DATE] | [DATE] | Archive significant legal matters |
| P4.5 | Regulatory licenses and approvals | Current | [DATE] | [DATE] | Update when licenses renewed or new obtained |
| P4.6 | Tax assessments and correspondence | Current | [DATE] | [DATE] | Archive tax orders and appeals |

---

### Section P5: Prior Year Audit Documentation

| Ref | Working Paper Description | Status | Last Updated | Review Date | Notes |
|-----|--------------------------|--------|--------------|-------------|-------|
| P5.1 | Prior year audit reports (standalone, consolidated) | Current | [DATE] | [DATE] | Archive each year's final signed reports |
| P5.2 | Prior year CARO reports | Current | [DATE] | [DATE] | Archive each year's final signed CARO |
| P5.3 | Prior year management letters | Current | [DATE] | [DATE] | Track management's action on recommendations |
| P5.4 | Prior year representation letters | Current | [DATE] | [DATE] | Archive for comparison with current year |
| P5.5 | Prior year tax audit reports (Form 3CA/3CB/3CD) | Current | [DATE] | [DATE] | Archive for continuity |

---

## Current Year Audit File Index

**Purpose**: Documents specific to current audit engagement. These working papers are prepared fresh each year.

**SA and CARO Cross-References**: For each file section, applicable Standards on Auditing and CARO 2020 clauses are documented below.

---

### Section A: Planning

**Applicable SAs**: SA 300 (Planning), SA 315 (Risk Assessment), SA 320 (Materiality), SA 520 (Analytical Procedures)

| Ref | Working Paper Description | SA Cross-Ref | /audit: Command | Prepared By | Reviewed By | Date | Status |
|-----|--------------------------|--------------|-----------------|-------------|-------------|------|--------|
| A1 | Overall audit strategy | SA 300 | /audit:audit-strategy | [Initials] | [Initials] | [DATE] | [Status] |
| A2 | Materiality calculations and revision | SA 320 | /audit:materiality | [Initials] | [Initials] | [DATE] | [Status] |
| A3 | Preliminary analytical procedures | SA 520 | /audit:analytical-review | [Initials] | [Initials] | [DATE] | [Status] |
| A4 | Detailed audit plan by area | SA 300, 330 | /audit:audit-plan | [Initials] | [Initials] | [DATE] | [Status] |
| A5 | Engagement team and time budget | SA 220, 300 | /audit:new-engagement | [Initials] | [Initials] | [DATE] | [Status] |
| A6 | Planning meeting notes | SA 300 | — | [Initials] | [Initials] | [DATE] | [Status] |

---

### Section B: Risk Assessment

**Applicable SAs**: SA 240 (Fraud), SA 315 (Risk Assessment), SA 330 (Audit Responses), SA 550 (Related Parties)

| Ref | Working Paper Description | SA Cross-Ref | /audit: Command | Prepared By | Reviewed By | Date | Status |
|-----|--------------------------|--------------|-----------------|-------------|-------------|------|--------|
| B1 | Risk assessment matrix (by area and assertion) | SA 315 | /audit:risk-matrix | [Initials] | [Initials] | [DATE] | [Status] |
| B2 | Fraud risk assessment | SA 240 | /audit:fraud-risk | [Initials] | [Initials] | [DATE] | [Status] |
| B3 | Significant risks identification and response | SA 315, 330 | /audit:significant-risks | [Initials] | [Initials] | [DATE] | [Status] |
| B4 | Understanding of entity and its environment | SA 315 | — | [Initials] | [Initials] | [DATE] | [Status] |
| B5 | Evaluation of internal controls | SA 315 | /audit:controls-reliance | [Initials] | [Initials] | [DATE] | [Status] |

---

### Section C: Area-Wise Audit Procedures

**Applicable SAs**: SA 500 (Audit Evidence), SA 501 (Specific Items), SA 505 (Confirmations), SA 530 (Sampling), SA 540 (Estimates), SA 550 (Related Parties)

**CARO Cross-References**: Clause mappings documented in sub-references below.

#### C1: Cash and Bank Balances

| Ref | Working Paper Description | SA Cross-Ref | CARO Clause | /audit: Command | Prepared By | Reviewed By | Date | Status |
|-----|--------------------------|--------------|-------------|-----------------|-------------|-------------|------|--------|
| C1.1 | Cash and bank audit program | SA 500, 501 | — | /audit:program cash | [Initials] | [Initials] | [DATE] | [Status] |
| C1.2 | Bank confirmations | SA 505 | CARO 3(ix) | — | [Initials] | [Initials] | [DATE] | [Status] |
| C1.3 | Bank reconciliations | SA 500 | — | — | [Initials] | [Initials] | [DATE] | [Status] |
| C1.4 | Loan default verification | SA 500 | CARO 3(ix) | /audit:caro-checklist | [Initials] | [Initials] | [DATE] | [Status] |

**CARO 3(ix)** — Default in repayment of loans or borrowings

#### C2: Trade Receivables

| Ref | Working Paper Description | SA Cross-Ref | CARO Clause | /audit: Command | Prepared By | Reviewed By | Date | Status |
|-----|--------------------------|--------------|-------------|-----------------|-------------|-------------|------|--------|
| C2.1 | Receivables audit program | SA 500, 540 | — | /audit:program receivables | [Initials] | [Initials] | [DATE] | [Status] |
| C2.2 | Receivables aging analysis | SA 540 | — | — | [Initials] | [Initials] | [DATE] | [Status] |
| C2.3 | Expected Credit Loss (ECL) computation | SA 540 | — | /audit:estimates-review | [Initials] | [Initials] | [DATE] | [Status] |
| C2.4 | Receivables confirmations | SA 505 | — | — | [Initials] | [Initials] | [DATE] | [Status] |
| C2.5 | Cut-off testing | SA 500 | — | — | [Initials] | [Initials] | [DATE] | [Status] |
| C2.6 | Loans to specified parties (if applicable) | SA 550 | CARO 3(iii) | /audit:related-parties | [Initials] | [Initials] | [DATE] | [Status] |

**CARO 3(iii)** — Loans, guarantees, security to specified parties (directors, related parties per Section 189)

#### C3: Inventory

| Ref | Working Paper Description | SA Cross-Ref | CARO Clause | /audit: Command | Prepared By | Reviewed By | Date | Status |
|-----|--------------------------|--------------|-------------|-----------------|-------------|-------------|------|--------|
| C3.1 | Inventory audit program | SA 500, 501 | — | /audit:program inventory | [Initials] | [Initials] | [DATE] | [Status] |
| C3.2 | Physical verification observation | SA 501 | CARO 3(ii) | — | [Initials] | [Initials] | [DATE] | [Status] |
| C3.3 | Inventory valuation testing (NRV) | SA 540 | — | /audit:estimates-review | [Initials] | [Initials] | [DATE] | [Status] |
| C3.4 | Inventory cut-off testing | SA 500 | — | — | [Initials] | [Initials] | [DATE] | [Status] |
| C3.5 | Physical verification frequency and coverage | SA 501 | CARO 3(ii) | /audit:caro-checklist | [Initials] | [Initials] | [DATE] | [Status] |

**CARO 3(ii)** — Physical verification of inventory by management at reasonable intervals, material discrepancies

#### C4: Property, Plant and Equipment (PPE)

| Ref | Working Paper Description | SA Cross-Ref | CARO Clause | /audit: Command | Prepared By | Reviewed By | Date | Status |
|-----|--------------------------|--------------|-------------|-----------------|-------------|-------------|------|--------|
| C4.1 | PPE audit program | SA 500, 540 | — | /audit:program ppe | [Initials] | [Initials] | [DATE] | [Status] |
| C4.2 | Additions and deletions verification | SA 500 | CARO 3(i)(a-b) | — | [Initials] | [Initials] | [DATE] | [Status] |
| C4.3 | Depreciation computation | SA 540 | — | /audit:estimates-review | [Initials] | [Initials] | [DATE] | [Status] |
| C4.4 | PPE register verification | SA 500 | CARO 3(i)(a) | /audit:caro-checklist | [Initials] | [Initials] | [DATE] | [Status] |
| C4.5 | Title deeds examination | SA 500 | CARO 3(i)(c) | /audit:caro-checklist | [Initials] | [Initials] | [DATE] | [Status] |
| C4.6 | Revaluation review (if applicable) | SA 540 | CARO 3(i)(d) | /audit:caro-checklist | [Initials] | [Initials] | [DATE] | [Status] |

**CARO 3(i)** — PPE records maintenance, physical verification program, title deeds, revaluation

#### C5: Investments

| Ref | Working Paper Description | SA Cross-Ref | CARO Clause | /audit: Command | Prepared By | Reviewed By | Date | Status |
|-----|--------------------------|--------------|-------------|-----------------|-------------|-------------|------|--------|
| C5.1 | Investments audit program | SA 500, 540 | — | /audit:program investments | [Initials] | [Initials] | [DATE] | [Status] |
| C5.2 | Investment valuation (fair value/impairment) | SA 540 | — | /audit:estimates-review | [Initials] | [Initials] | [DATE] | [Status] |
| C5.3 | Investment register verification | SA 500 | CARO 3(iii)(a) | /audit:caro-checklist | [Initials] | [Initials] | [DATE] | [Status] |
| C5.4 | Sections 185/186 compliance (if applicable) | SA 250 | CARO 3(iv) | /audit:caro-checklist | [Initials] | [Initials] | [DATE] | [Status] |

**CARO 3(iii)(a)** — Investments in entities, details thereof
**CARO 3(iv)** — Compliance with Sections 185 and 186 (loans to directors, investments, guarantees)

#### C6: Revenue from Operations

| Ref | Working Paper Description | SA Cross-Ref | CARO Clause | /audit: Command | Prepared By | Reviewed By | Date | Status |
|-----|--------------------------|--------------|-------------|-----------------|-------------|-------------|------|--------|
| C6.1 | Revenue audit program | SA 240, 500 | — | /audit:program revenue | [Initials] | [Initials] | [DATE] | [Status] |
| C6.2 | Revenue cut-off testing | SA 500 | — | — | [Initials] | [Initials] | [DATE] | [Status] |
| C6.3 | Revenue recognition assessment (Ind AS 115) | SA 540 | — | — | [Initials] | [Initials] | [DATE] | [Status] |
| C6.4 | Contract review (performance obligations) | SA 500 | — | — | [Initials] | [Initials] | [DATE] | [Status] |
| C6.5 | Fraud risk procedures (presumed risk) | SA 240 | — | /audit:fraud-risk | [Initials] | [Initials] | [DATE] | [Status] |

#### C7: Expenses

| Ref | Working Paper Description | SA Cross-Ref | CARO Clause | /audit: Command | Prepared By | Reviewed By | Date | Status |
|-----|--------------------------|--------------|-------------|-----------------|-------------|-------------|------|--------|
| C7.1 | Expenses audit program | SA 500, 520 | — | /audit:program expenses | [Initials] | [Initials] | [DATE] | [Status] |
| C7.2 | Analytical procedures on expenses | SA 520 | — | /audit:analytical-review | [Initials] | [Initials] | [DATE] | [Status] |
| C7.3 | Tests of details (samples) | SA 500, 530 | — | /audit:sampling | [Initials] | [Initials] | [DATE] | [Status] |
| C7.4 | Employee benefit provisions | SA 540 | — | /audit:estimates-review | [Initials] | [Initials] | [DATE] | [Status] |

#### C8: Trade Payables

| Ref | Working Paper Description | SA Cross-Ref | CARO Clause | /audit: Command | Prepared By | Reviewed By | Date | Status |
|-----|--------------------------|--------------|-------------|-----------------|-------------|-------------|------|--------|
| C8.1 | Payables audit program | SA 500 | — | /audit:program payables | [Initials] | [Initials] | [DATE] | [Status] |
| C8.2 | Payables confirmations | SA 505 | — | — | [Initials] | [Initials] | [DATE] | [Status] |
| C8.3 | Payables reconciliations | SA 500 | — | — | [Initials] | [Initials] | [DATE] | [Status] |
| C8.4 | Cut-off testing | SA 500 | — | — | [Initials] | [Initials] | [DATE] | [Status] |
| C8.5 | Search for unrecorded liabilities | SA 500 | — | — | [Initials] | [Initials] | [DATE] | [Status] |

#### C9: Borrowings

| Ref | Working Paper Description | SA Cross-Ref | CARO Clause | /audit: Command | Prepared By | Reviewed By | Date | Status |
|-----|--------------------------|--------------|-------------|-----------------|-------------|-------------|------|--------|
| C9.1 | Borrowings audit program | SA 500 | — | /audit:program borrowings | [Initials] | [Initials] | [DATE] | [Status] |
| C9.2 | Loan confirmations | SA 505 | — | — | [Initials] | [Initials] | [DATE] | [Status] |
| C9.3 | Sanction letter and terms verification | SA 500 | CARO 3(ix) | — | [Initials] | [Initials] | [DATE] | [Status] |
| C9.4 | Interest accrual and capitalization | SA 500 | — | — | [Initials] | [Initials] | [DATE] | [Status] |
| C9.5 | Public deposits (if applicable) | SA 500 | CARO 3(v) | /audit:caro-checklist | [Initials] | [Initials] | [DATE] | [Status] |
| C9.6 | Loan defaults and utilization | SA 500 | CARO 3(ix) | /audit:caro-checklist | [Initials] | [Initials] | [DATE] | [Status] |

**CARO 3(v)** — Public deposits accepted, compliance with Sections 73-76
**CARO 3(ix)** — Loan defaults, money raised vs. applied, diversion of funds

#### C10: Provisions and Contingent Liabilities

| Ref | Working Paper Description | SA Cross-Ref | CARO Clause | /audit: Command | Prepared By | Reviewed By | Date | Status |
|-----|--------------------------|--------------|-------------|-----------------|-------------|-------------|------|--------|
| C10.1 | Provisions audit program | SA 540 | — | /audit:program provisions | [Initials] | [Initials] | [DATE] | [Status] |
| C10.2 | Legal counsel letters | SA 500, 501 | — | — | [Initials] | [Initials] | [DATE] | [Status] |
| C10.3 | Litigation review | SA 501 | — | — | [Initials] | [Initials] | [DATE] | [Status] |
| C10.4 | Provision measurement (estimates) | SA 540 | — | /audit:estimates-review | [Initials] | [Initials] | [DATE] | [Status] |
| C10.5 | Fraud reported (if applicable) | SA 240 | CARO 3(x) | /audit:caro-checklist | [Initials] | [Initials] | [DATE] | [Status] |

**CARO 3(x)** — Fraud by or on the entity noticed or reported during the year

#### C11: Related Party Transactions

| Ref | Working Paper Description | SA Cross-Ref | CARO Clause | /audit: Command | Prepared By | Reviewed By | Date | Status |
|-----|--------------------------|--------------|-------------|-----------------|-------------|-------------|------|--------|
| C11.1 | Related party identification | SA 550 | — | /audit:related-parties | [Initials] | [Initials] | [DATE] | [Status] |
| C11.2 | Related party transactions testing | SA 550 | CARO 3(xiii) | /audit:related-parties | [Initials] | [Initials] | [DATE] | [Status] |
| C11.3 | Sections 177/188 compliance | SA 250 | CARO 3(xiii) | /audit:caro-checklist | [Initials] | [Initials] | [DATE] | [Status] |
| C11.4 | Arm's length assessment | SA 550 | — | — | [Initials] | [Initials] | [DATE] | [Status] |
| C11.5 | Disclosure verification | SA 550 | — | — | [Initials] | [Initials] | [DATE] | [Status] |

**CARO 3(xiii)** — Related party transactions, compliance with Sections 177 and 188

---

### Section D: Other Audit Procedures

**Applicable SAs**: SA 505 (Confirmations), SA 530 (Sampling), SA 520 (Analytical), SA 580 (Management Representations)

| Ref | Working Paper Description | SA Cross-Ref | /audit: Command | Prepared By | Reviewed By | Date | Status |
|-----|--------------------------|--------------|-----------------|-------------|-------------|------|--------|
| D1 | Sampling workpapers (methodology, selection) | SA 530 | /audit:sampling | [Initials] | [Initials] | [DATE] | [Status] |
| D2 | Substantive analytical procedures | SA 520 | /audit:analytical-review | [Initials] | [Initials] | [DATE] | [Status] |
| D3 | External confirmations (bank, receivables, payables, legal) | SA 505 | — | [Initials] | [Initials] | [DATE] | [Status] |
| D4 | Management representations working paper | SA 580 | /audit:representation-letter | [Initials] | [Initials] | [DATE] | [Status] |
| D5 | Sample evaluation and projection | SA 530 | /audit:sample-evaluate | [Initials] | [Initials] | [DATE] | [Status] |

---

### Section E: Specialized Areas and Judgments

**Applicable SAs**: SA 540 (Estimates), SA 550 (Related Parties), SA 570 (Going Concern), SA 620 (Experts), SA 402 (Service Organizations)

| Ref | Working Paper Description | SA Cross-Ref | /audit: Command | Prepared By | Reviewed By | Date | Status |
|-----|--------------------------|--------------|-----------------|-------------|-------------|------|--------|
| E1 | Going concern assessment | SA 570 | /audit:going-concern | [Initials] | [Initials] | [DATE] | [Status] |
| E2 | Accounting estimates review (ECL, NRV, impairment, fair values) | SA 540 | /audit:estimates-review | [Initials] | [Initials] | [DATE] | [Status] |
| E3 | Related party transactions | SA 550 | /audit:related-parties | [Initials] | [Initials] | [DATE] | [Status] |
| E4 | Fair value measurements | SA 540 | /audit:estimates-review | [Initials] | [Initials] | [DATE] | [Status] |
| E5 | Use of experts (valuers, actuaries) - if applicable | SA 620 | — | [Initials] | [Initials] | [DATE] | [Status] |
| E6 | Service organization controls (if applicable) | SA 402 | — | [Initials] | [Initials] | [DATE] | [Status] |

---

### Section F: Completion

**Applicable SAs**: SA 230 (Documentation), SA 450 (Misstatements), SA 560 (Subsequent Events), SA 220 (Quality Control)

| Ref | Working Paper Description | SA Cross-Ref | /audit: Command | Prepared By | Reviewed By | Date | Status |
|-----|--------------------------|--------------|-----------------|-------------|-------------|------|--------|
| F1 | Subsequent events review | SA 560 | /audit:subsequent-events | [Initials] | [Initials] | [DATE] | [Status] |
| F2 | Misstatement schedule (corrected and uncorrected) | SA 450 | /audit:misstatement-schedule | [Initials] | [Initials] | [DATE] | [Status] |
| F3 | Financial statement disclosures review | SA 700 | — | [Initials] | [Initials] | [DATE] | [Status] |
| F4 | Summary of uncorrected misstatements | SA 450 | /audit:misstatement-schedule | [Initials] | [Initials] | [DATE] | [Status] |
| F5 | Audit completion checklist | SA 230 | — | [Initials] | [Initials] | [DATE] | [Status] |
| F6 | Audit completion memorandum | SA 230 | /audit:completion-memo | [Initials] | [Initials] | [DATE] | [Status] |
| F7 | Engagement quality control review (EQCR) | SA 220 | /audit:quality-review | [Initials] | [Initials] | [DATE] | [Status] |

---

### Section G: Reporting

**Applicable SAs**: SA 700 (Audit Report), SA 701 (KAM), SA 705 (Modified Opinions), SA 706 (Emphasis/Other Matter)

| Ref | Working Paper Description | SA Cross-Ref | /audit: Command | Prepared By | Reviewed By | Date | Status |
|-----|--------------------------|--------------|-----------------|-------------|-------------|------|--------|
| G1 | Draft audit report | SA 700/705/706 | /audit:draft-report | [Initials] | [Initials] | [DATE] | [Status] |
| G2 | Key Audit Matters workpaper (listed entities) | SA 701 | /audit:kam-draft | [Initials] | [Initials] | [DATE] | [Status] |
| G3 | CARO 2020 working paper and report | CARO 2020 | /audit:caro-checklist, /audit:caro-report | [Initials] | [Initials] | [DATE] | [Status] |
| G4 | Section 143(3) reporting workpaper | Companies Act | — | [Initials] | [Initials] | [DATE] | [Status] |
| G5 | Management letter | SA 265 | /audit:management-letter | [Initials] | [Initials] | [DATE] | [Status] |
| G6 | Final signed audit report | SA 700 | — | [Initials] | [Initials] | [DATE] | [Status] |
| G7 | Final signed CARO report | CARO 2020 | — | [Initials] | [Initials] | [DATE] | [Status] |
| G8 | Final signed management representation letter | SA 580 | /audit:representation-letter | [Initials] | [Initials] | [DATE] | [Status] |

---

### Section H: Tax Audit

**Applicable**: Section 44AB of Income Tax Act, Form 3CD

| Ref | Working Paper Description | Statutory Ref | /audit: Command | Prepared By | Reviewed By | Date | Status |
|-----|--------------------------|---------------|-----------------|-------------|-------------|------|--------|
| H1 | Tax audit checklist (Section 44AB) | Form 3CD | /audit:tax-checklist | [Initials] | [Initials] | [DATE] | [Status] |
| H2 | Form 3CD working paper (44 clauses) | Form 3CD | /audit:tax-3cd | [Initials] | [Initials] | [DATE] | [Status] |
| H3 | Tax computation review and reconciliation | Section 44AB | /audit:tax-computation | [Initials] | [Initials] | [DATE] | [Status] |
| H4 | TDS compliance verification | Section 194, etc. | — | [Initials] | [Initials] | [DATE] | [Status] |
| H5 | Statutory dues compliance | Section 43B, 36(1)(va) | /audit:statutory-dues | [Initials] | [Initials] | [DATE] | [Status] |
| H6 | Final Form 3CA/3CB and Form 3CD | Section 44AB | — | [Initials] | [Initials] | [DATE] | [Status] |

---

### Section I: Administration

**Applicable**: SA 230 (Audit Documentation)

| Ref | Working Paper Description | SA Cross-Ref | /audit: Command | Prepared By | Reviewed By | Date | Status |
|-----|--------------------------|--------------|-----------------|-------------|-------------|------|--------|
| I1 | Correspondence with client | SA 230 | — | [Initials] | [Initials] | [DATE] | [Status] |
| I2 | Meeting notes and discussions | SA 230 | — | [Initials] | [Initials] | [DATE] | [Status] |
| I3 | Time and expense records | Firm policy | — | [Initials] | [Initials] | [DATE] | [Status] |
| I4 | Review notes and clearance | SA 220 | — | [Initials] | [Initials] | [DATE] | [Status] |
| I5 | File assembly and archival checklist | SA 230 | — | [Initials] | [Initials] | [DATE] | [Status] |

---

### Section J: GST and Tax Compliance (Additional)

**Applicable**: GST Act, CARO 3(vii) (Statutory Dues)

| Ref | Working Paper Description | Statutory Ref | CARO Clause | /audit: Command | Prepared By | Reviewed By | Date | Status |
|-----|--------------------------|---------------|-------------|-----------------|-------------|-------------|------|--------|
| J1 | GST reconciliation working papers (GSTR-1/2B/9) | GST Act | CARO 3(vii) | /audit:gst-reconciliation | [Initials] | [Initials] | [DATE] | [Status] |
| J2 | Statutory dues verification (GST, PF, ESI, income tax) | Various | CARO 3(vii) | /audit:statutory-dues | [Initials] | [Initials] | [DATE] | [Status] |
| J3 | GST ITC eligibility review (Section 17(5) blocked credits) | GST Section 17 | — | /audit:gst-reconciliation | [Initials] | [Initials] | [DATE] | [Status] |

**CARO 3(vii)** — Statutory dues regularity (deposits within prescribed time) and disputes (amounts involved, forum)

---

## SA Cross-References per Section

**Summary mapping of audit file sections to applicable Standards on Auditing:**

| File Section | Applicable SAs | Key Requirements |
|--------------|----------------|------------------|
| Section A (Planning) | SA 300, SA 315, SA 320, SA 520 | Audit strategy, materiality, preliminary analytics |
| Section B (Risk Assessment) | SA 240, SA 315, SA 330 | Fraud risk, risk assessment, audit responses |
| Section C (Area-wise) | SA 500, SA 501, SA 505, SA 530, SA 540, SA 550 | Audit evidence, specific items, confirmations, sampling, estimates, related parties |
| Section D (Other Procedures) | SA 505, SA 530, SA 520, SA 580 | Confirmations, sampling evaluation, analytics, representations |
| Section E (Specialized) | SA 540, SA 550, SA 570, SA 620, SA 402 | Estimates, related parties, going concern, experts, service orgs |
| Section F (Completion) | SA 230, SA 450, SA 560, SA 220 | Documentation, misstatements, subsequent events, EQCR |
| Section G (Reporting) | SA 700, SA 701, SA 705, SA 706 | Audit report, KAM, modified opinions, EOM/OM |
| Section H (Tax Audit) | Section 44AB, Form 3CD | Tax audit under Income Tax Act |
| Section I (Administration) | SA 230 | Documentation retention and organization |
| Section J (GST/Tax) | GST Act, CARO 3(vii) | GST compliance, statutory dues |

---

## CARO 2020 Clause Mapping to Audit File Sections

**Complete mapping of CARO 2020 clauses to audit file sections where evidence resides:**

| CARO Clause | Subject | Evidence Location (File Section) | Related /audit: Command |
|-------------|---------|-----------------------------------|------------------------|
| 3(i)(a) | PPE records maintenance | C4.4 | /audit:caro-checklist |
| 3(i)(b) | PPE physical verification program | C4.2 | /audit:caro-checklist |
| 3(i)(c) | Title deeds of immovable properties | C4.5 | /audit:caro-checklist |
| 3(i)(d) | Revaluation of PPE | C4.6 | /audit:caro-checklist |
| 3(ii)(a) | Inventory physical verification | C3.2, C3.5 | /audit:caro-checklist |
| 3(ii)(b) | Material discrepancies in inventory | C3.2, C3.5 | /audit:caro-checklist |
| 3(iii)(a) | Investments in entities | C5.3 | /audit:caro-checklist |
| 3(iii)(b) | Loans, guarantees, security to specified parties | C2.6, C11.2 | /audit:caro-checklist |
| 3(iv) | Sections 185 and 186 compliance (loans, investments, guarantees) | C5.4, C11.3 | /audit:caro-checklist |
| 3(v) | Public deposits acceptance and repayment | C9.5 | /audit:caro-checklist |
| 3(vi) | Cost records maintenance (if applicable) | — | /audit:caro-checklist |
| 3(vii)(a) | Statutory dues regularity | J2 | /audit:statutory-dues |
| 3(vii)(b) | Statutory dues disputes | J2 | /audit:statutory-dues |
| 3(viii) | Unrecorded income surrendered in tax assessments | H3, H6 | /audit:tax-computation |
| 3(ix)(a) | Default in repayment of loans/borrowings | C1.4, C9.6 | /audit:caro-checklist |
| 3(ix)(b) | Wilful defaulter | C9.6 | /audit:caro-checklist |
| 3(ix)(c) | Money raised vs. applied | C9.6 | /audit:caro-checklist |
| 3(ix)(d) | Funds raised short-term used for long-term | C9.6 | /audit:caro-checklist |
| 3(ix)(e) | Long-term funds used for short-term | C9.6 | /audit:caro-checklist |
| 3(ix)(f) | Diversion of funds | C9.6 | /audit:caro-checklist |
| 3(x) | Fraud by or on the entity | C10.5 | /audit:caro-checklist |
| 3(xi) | Managerial remuneration | C7.3 | /audit:caro-checklist |
| 3(xii) | Nidhi Company provisions (if applicable) | — | /audit:caro-checklist |
| 3(xiii) | Related party transactions (Sections 177, 188) | C11.3 | /audit:caro-checklist |
| 3(xiv) | Internal audit system | — | /audit:caro-checklist |
| 3(xv) | Non-cash transactions with directors | C11.2 | /audit:caro-checklist |
| 3(xvi) | NBFC registration (if applicable) | — | /audit:caro-checklist |
| 3(xvii) | Cash losses in current and prior year | — | /audit:caro-checklist |
| 3(xviii) | Auditor resignation of predecessor | — | /audit:caro-checklist |
| 3(xix) | Going concern material uncertainty | E1 | /audit:going-concern |
| 3(xx) | CSR expenditure (if applicable) | — | /audit:caro-checklist |
| 3(xxi) | Consolidated financial statements | — | /audit:caro-checklist |

---

## Cross-Reference Map: All /audit: Commands to File Index

**Complete mapping of all 30 /audit: commands to their corresponding file index references:**

| /audit: Command | File Index Reference | Working Paper Section |
|-----------------|----------------------|----------------------|
| /audit:new-engagement | P2.1, A5 | Engagement Administration |
| /audit:independence-check | P2.2 | Engagement Administration |
| /audit:client-acceptance | P2.3 | Engagement Administration |
| /audit:materiality | A2 | Planning |
| /audit:audit-strategy | A1 | Planning |
| /audit:analytical-review | A3, D2 | Planning and Other Procedures |
| /audit:risk-matrix | B1 | Risk Assessment |
| /audit:fraud-risk | B2, C6.5 | Risk Assessment and Revenue |
| /audit:significant-risks | B3 | Risk Assessment |
| /audit:controls-reliance | B5 | Risk Assessment |
| /audit:audit-plan | A4 | Planning |
| /audit:program | C1.1-C11.1 (all areas) | Area-wise Audit Procedures |
| /audit:sampling | D1 | Other Audit Procedures |
| /audit:sample-evaluate | D5 | Other Audit Procedures |
| /audit:going-concern | E1 | Specialized Areas |
| /audit:estimates-review | E2, C2.3, C3.3, C4.3 | Specialized and Area-wise |
| /audit:subsequent-events | F1 | Completion |
| /audit:related-parties | E3, C2.6, C11.1-C11.5 | Specialized and Related Parties |
| /audit:misstatement-schedule | F2, F4 | Completion |
| /audit:completion-memo | F6 | Completion |
| /audit:quality-review | F7 | Completion (EQCR) |
| /audit:draft-report | G1, G6 | Reporting |
| /audit:kam-draft | G2 | Reporting (Listed Entities) |
| /audit:caro-checklist | G3, C1.4-C11.3 (various) | Reporting and Area-wise |
| /audit:caro-report | G3, G7 | Reporting |
| /audit:management-letter | G5 | Reporting |
| /audit:representation-letter | D4, G8 | Other Procedures and Reporting |
| /audit:tax-checklist | H1 | Tax Audit |
| /audit:tax-3cd | H2, H6 | Tax Audit |
| /audit:tax-computation | H3 | Tax Audit |
| /audit:gst-reconciliation | J1, J3 | GST Compliance |
| /audit:statutory-dues | J2, H5 | GST/Tax Compliance |

**This mapping allows auditors to:**
1. Navigate from any command output to the correct file location
2. Ensure all 30 commands have designated file references
3. Verify completeness of audit documentation
4. Facilitate EQCR reviewer's file navigation

---

## File Assembly Certification

**To be completed after audit report issuance, within 60 days:**

---

### File Assembly Confirmation

**Entity Name**: [Full legal name]
**Financial Year**: [FY ended DATE]
**Audit Report Date**: [DATE]
**File Assembly Deadline** (per SA 230.14): [Report Date + 60 days] = **[DATE]**
**File Assembly Completion Date**: **[DATE]**

**Compliance**: File assembly completed **[ON TIME / LATE by [X] days]** per SA 230.14

---

### Engagement Partner Certification

I, [Engagement Partner Name], engagement partner for the audit of [Entity Name] for the year ended [DATE], hereby certify that:

1. **Assembly Complete**: The audit file for this engagement has been assembled in accordance with SA 230 (Audit Documentation).

2. **60-Day Compliance**: File assembly was completed within 60 days of the auditor's report date [REPORT DATE], on or before the deadline of [DEADLINE DATE].

3. **Documentation Complete**: All significant matters, significant judgments, and significant findings identified during the audit are adequately documented in the audit file.

4. **Working Papers Support Conclusions**: The audit working papers support the conclusions reached in the auditor's report dated [REPORT DATE].

5. **Administrative Changes Only**: All work performed during the assembly period was administrative in nature (sorting, collating, cross-referencing). No new audit procedures were performed, and no new conclusions were drawn after the report date.

6. **File Locked/Sealed**: The audit file is now locked/sealed and ready for archival retention.

7. **Retention Period**: This audit file will be retained for a minimum of **7 years** from the report date, until at least [Report Date + 7 years] = **[DATE]**, or longer if required by firm policy or regulatory requirements.

8. **Location**: The audit file is stored at [Physical location / Electronic location / Audit software].

**Engagement Partner Signature**: ___________________

**Name**: [Full Name]
**ICAI Membership Number**: [Number]
**Date**: [File Assembly Completion Date]

---

### File Assembly Checklist

Confirm all assembly tasks completed:

- [ ] All working papers sorted and organized per file index structure (Sections A-J)
- [ ] Cross-referencing completed (all references verified)
- [ ] Review notes cleared (all review points addressed and documented)
- [ ] Sign-offs complete (preparer, reviewer, partner signatures obtained where required)
- [ ] Superseded drafts deleted (only final versions retained)
- [ ] Duplicate documents deleted
- [ ] File index updated with final cross-references and completion dates
- [ ] Completion memorandum (F6) and EQCR (F7) finalized and signed
- [ ] Final signed audit report (G6), CARO report (G7), and management representation letter (G8) included
- [ ] Electronic file locked (if electronic) or physical file sealed (if physical)
- [ ] Backup copies created and stored securely (for electronic files)
- [ ] File assembly certification signed by engagement partner

---

## Output Format

A comprehensive working paper file index (minimum 12-15 pages) containing:

1. **Cover Page**: Entity name, FY, audit type, index type (planning/tracking or final assembly), report date (if final), assembly deadline
2. **Dual-Use Index Concept**: Explanation of planning/tracking vs. final assembly usage
3. **SA 230 File Assembly Requirements**: 60-day rule, post-assembly restrictions, retention period, electronic file guidance
4. **Permanent File Index**: Sections P1-P5 with status, last updated dates, update triggers
5. **Current Year File Index**: Sections A-J with detailed sub-references, SA cross-references, CARO clause mappings, /audit: command mappings, completion tracking columns
6. **SA Cross-References per Section**: Summary table of applicable SAs by file section
7. **CARO Clause Mapping**: Complete mapping of all 21 CARO clauses to file sections
8. **Cross-Reference Map**: All 30 /audit: commands mapped to file index references (master table)
9. **File Assembly Certification**: Partner certification, assembly checklist, compliance confirmation
10. **Professional Disclaimer**

## Professional Disclaimer

> **Professional Judgment Required**: This command generates a comprehensive working paper file index template per SA 230. The file index must be customized to the specific facts and circumstances of each engagement. The auditor is responsible for determining which working papers are necessary and ensuring all significant matters are adequately documented.
>
> **SA 230.14 Compliance**: File assembly must be completed within 60 days of the auditor's report date. This is a strict requirement. Late assembly must be documented with reasons and should be exceptional, not routine.
>
> **Planning vs. Final Index**: The file index serves two purposes: (1) Planning/tracking tool continuously updated during fieldwork, and (2) Final assembly record completed post-report. Both uses are valuable for different stages of the audit.
>
> **Completeness**: The file index ensures completeness of audit documentation. Any working papers not listed in the file index may be considered not part of the audit file. Conversely, any working papers listed as "Complete" must exist and be adequately documented.
>
> **Cross-Referencing**: The mapping of all 30 /audit: commands to file index references creates a complete cross-referencing system. Auditors should verify that all command outputs are properly filed at the designated file references.
>
> **No Substitute for Professional Judgment**: This tool assists with file organization and documentation structure but does not substitute the professional judgment of qualified Chartered Accountants. All file index content, completion status, and assembly certification must be based on the auditor's assessment.
