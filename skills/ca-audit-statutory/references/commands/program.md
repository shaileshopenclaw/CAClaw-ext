# Audit Program

Generate area-specific audit programs with risk-responsive procedures per SA 330, hybrid assertion mapping (per-procedure tags + coverage matrix), inline sample size defaults, and comprehensive red flags for fieldwork execution.

## Description

The audit program is the primary fieldwork command that translates your risk assessment into specific testing procedures. This is the document that tells auditors WHAT to test, HOW to test it, and HOW MANY items to examine for each area of the financial statements. SA 330 requires that the nature, timing, and extent of audit procedures be RESPONSIVE to assessed risks—not template-based. Higher assessed risks demand more extensive procedures, larger samples, more experienced staff, and enhanced supervision.

**Key principle:** A well-designed audit program is risk-responsive. The program for a High-risk area must look substantively different from a Low-risk area in terms of procedure depth, sample sizes, staff assignment, and review requirements. This command generates area-specific programs that vary by assessed risk level, integrate assertion-level testing with coverage matrices for completeness checking, provide practical sample size defaults for efficient execution, and highlight area-specific red flags requiring investigation.

**Purpose:** This command supports fieldwork execution by providing auditors with comprehensive, ready-to-execute testing programs that eliminate the need to repeatedly reference risk assessment outputs, materiality schedules, or sampling guidance—all essential information is integrated into the program itself.

## Required Context

Before running this command, ensure you have completed the following:

- **Risk assessment for the selected area:** Risk matrix output showing inherent risk, control risk, and combined risk by assertion (reference /audit:risk-matrix output)
- **Materiality levels:** Overall materiality and performance materiality amounts (reference /audit:materiality output)
- **Audit strategy decision:** Whether the audit approach for this area is controls-reliance, substantive-only, or combined/hybrid (reference /audit:audit-strategy output)
- **Understanding of entity's processes:** How the entity records, processes, and reports transactions for the selected area (from walkthrough documentation, systems notes, or prior year files)
- **Prior year findings:** Any issues, exceptions, or misstatements identified in prior year audit for this area (for recurring engagements)
- **Fraud risk assessment:** Identification of fraud risks per SA 240 that may affect this area (reference /audit:fraud-risk output)
- **Significant risks:** Areas identified as significant risks per SA 330 requiring specific responses (reference /audit:significant-risks output)

**Ask the user:** "Provide the following context for program generation:

1. **Area to test:** Which of the 11 areas are you generating a program for? (cash-bank, receivables, inventory, ppe, investments, revenue, expenses, payables, borrowings, provisions, related-parties)

2. **Risk matrix output for this area:** What is the assessed inherent risk, control risk, and combined risk for each assertion in this area? Provide the specific ratings (H/M/L) per your risk matrix.

3. **Materiality levels:** What is overall materiality and performance materiality for this engagement?

4. **Audit approach decision:** For this area, have you decided to rely on controls (controls-reliance approach), perform only substantive procedures (substantive-only approach), or use a hybrid approach?

5. **Prior year findings:** Were there any significant findings, exceptions, or misstatements in this area during the prior year audit? (For continuing engagements only)

6. **Fraud and significant risks:** Has this area been identified as having fraud risks or significant risks requiring specific audit responses?"

## Workflow

### Step 1: Identify Area from Command Arguments

Extract the area name from command arguments (one of 11 supported areas):

- **cash-bank** - Cash and bank balances
- **receivables** - Trade receivables and other receivables
- **inventory** - Inventories (raw materials, WIP, finished goods, stock-in-trade)
- **ppe** - Property, plant and equipment
- **investments** - Investments (current and non-current)
- **revenue** - Revenue from operations
- **expenses** - Operating and other expenses
- **payables** - Trade payables and other payables
- **borrowings** - Borrowings (short-term and long-term)
- **provisions** - Provisions and contingent liabilities
- **related-parties** - Related party transactions and balances

Validate that the provided area is one of the 11 supported areas. If not recognized, prompt user for clarification.

### Step 2: Load Area-Specific Guidance and Risk Context

Reference the built-in area→assertions→risks mapping table:

| Area | Primary Assertions | Common Risks | Key SAs | CARO Clauses | Fraud Considerations |
|------|-------------------|--------------|---------|--------------|---------------------|
| cash-bank | Existence, Completeness | Misappropriation, unrecorded transactions, lapping | SA 505 (confirmations) | CARO 3(x) (cash losses) | High cash manipulation risk, check deposits |
| receivables | Existence, Valuation | Collectibility, ECL adequacy, fictitious customers | SA 505 (confirmations), SA 540 (estimates) | CARO 3(iii) (receivables) | Channel stuffing, side agreements, bill-and-hold |
| inventory | Existence, Valuation | Physical existence, NRV impairment, obsolescence | SA 501 (inventory observation), SA 540 (estimates) | CARO 3(ii) (inventory) | Overstatement to inflate assets, fictitious inventory |
| ppe | Existence, Valuation, Rights | Ownership, impairment, useful life, title disputes | SA 501, SA 540, SA 620 (experts) | CARO 3(i) (PPE) | Capitalization of revenue expenses, fictitious assets |
| investments | Existence, Valuation | Fair value measurement, impairment, undisclosed RPTs | SA 540, SA 620, SA 550 (RPT) | - | Investments in unrelated entities that are undisclosed RPTs |
| revenue | Occurrence, Cut-off, Accuracy | Fictitious sales, premature recognition, bill-and-hold, side agreements | SA 240 (fraud), SA 606 guidance | - | **Presumed fraud risk per SA 240**, channel stuffing, round-tripping |
| expenses | Completeness, Accuracy, Classification | Unrecorded liabilities, capitalization errors, personal expenses | SA 330, SA 240 | - | Management override to suppress expenses, personal expenses recorded as business |
| payables | Completeness, Valuation | Unrecorded liabilities, understatement, cut-off manipulation | SA 505, SA 330 | - | Suppression of liabilities to improve ratios, unrecorded invoices |
| borrowings | Existence, Completeness, Disclosure | Unrecorded borrowings, covenant compliance, disclosure adequacy | SA 505, SA 570 (going concern) | CARO 3(v) (loans), 3(vi) (default) | Off-balance-sheet financing, undisclosed pledges |
| provisions | Completeness, Valuation | Inadequate provisioning, estimation errors, undisclosed contingencies | SA 540, SA 501 | CARO 3(xii) (benami) | Understatement of liabilities, inadequate legal/warranty provisions |
| related-parties | Occurrence, Disclosure | Non-arm's length transactions, inadequate disclosure, undisclosed RPTs | SA 550 (RPT) | - | Transactions disguised as arm's length, transfer pricing manipulation |

**Decision point:** Does the user's risk assessment align with common risks for this area? If the user has assessed an area as Low risk when common risks suggest Medium or High, prompt for reconsideration or specific justification.

### Step 3: Generate Risk-Responsive Program Structure

Use a **HYBRID TEMPLATE APPROACH** with core structure uniform across all 11 areas but area-specific procedure content that varies by complexity and assessed risk level:

**CORE STRUCTURE (uniform across all areas):**

1. **Audit Objectives:** What assertions are being tested and why
2. **Risk Assessment Summary:** Link to risk matrix findings for this area (inherent/control/combined risk by assertion)
3. **Audit Approach:** Controls-reliance vs. substantive-only vs. hybrid approach for this area
4. **Control Testing Procedures:** (if controls-reliance approach) Identify key controls, design/operating effectiveness tests
5. **Substantive Procedures by Assertion:** Area-specific procedures organized by the 7 assertions (Existence, Completeness, Valuation, Rights, Cut-off, Classification, Presentation)
6. **Sample Size Guidance:** Inline sample size defaults varying by risk level (Low/Medium/High) with reference to /audit:sampling for precise calculation
7. **Expected Audit Evidence:** Specific documents, confirmations, and evidence types to obtain
8. **Red Flags and Special Considerations:** Area-specific warning signs requiring investigation
9. **SA and Ind AS Cross-References:** Primary SAs and accounting standards applicable to this area
10. **Assertion Coverage Matrix:** Table showing which procedures cover which assertions (completeness check)
11. **Completion Checklist:** Procedures completed, exceptions resolved, working papers cross-referenced

**AREA-SPECIFIC CONTENT (varies by area complexity and assessed risk):**

**High-complexity areas** (receivables, inventory, revenue, ppe, investments):
- More granular procedures (8-12 substantive procedures per area)
- Detailed estimation procedures for ECL, NRV, impairment, fair value
- Fraud-specific procedures per SA 240 (especially for revenue)
- CARO 2020 clause-specific procedures where applicable
- Larger sample size defaults reflecting higher inherent risk

**Medium-complexity areas** (expenses, payables, borrowings, provisions):
- Balanced procedure depth (5-8 substantive procedures per area)
- Focus on completeness and valuation assertions
- Estimation procedures for provisions
- Covenant compliance testing for borrowings
- Standard sample size defaults

**Lower-complexity areas** (cash-bank, related-parties):
- Focused procedures on primary risks (3-5 substantive procedures per area)
- Heavy reliance on external confirmations (cash-bank)
- Disclosure-focused procedures (related-parties)
- Smaller sample size defaults (but 100% testing of high-value or unusual items)

**Risk-Responsive Calibration:** Each area's procedures must explicitly reference the risk matrix output. For example:

> "Per risk matrix, Trade Receivables - Valuation assertion is assessed as **High inherent risk** (significant ECL estimation uncertainty in current economic environment) and **High control risk** (ECL methodology not updated for forward-looking factors), resulting in **High combined risk**. Procedures below are calibrated to this assessment with extensive substantive testing, specialist involvement, and enhanced review."

### Step 4: Hybrid Assertion Mapping

Provide BOTH per-procedure tags AND coverage matrix for completeness:

**A. Per-Procedure Assertion Tags:**

For each procedure in the Substantive Procedures section, tag with assertions tested immediately after the procedure description:

```
**Procedure 3.2:** Obtain external confirmations for all bank accounts at year-end, including balance, interest rates, and any liens or encumbrances.

**Assertions:** Existence, Completeness, Rights and Obligations, Valuation (interest accrual)

**Nature:** External confirmation (third-party evidence)
**Timing:** At year-end (as of balance sheet date)
...
```

This provides **immediate context** during execution—auditors know exactly what assertions they're testing when performing each procedure.

**B. Assertion Coverage Matrix (at end of program):**

After all procedures are listed, include a matrix showing which procedures cover which assertions:

| Procedure | Existence | Completeness | Valuation | Rights | Cut-off | Classification | Presentation |
|-----------|-----------|--------------|-----------|--------|---------|----------------|--------------|
| 3.1 Bank confirmations | X | X | X | X | - | - | - |
| 3.2 Bank reconciliations | X | X | X | - | X | - | - |
| 3.3 Test bank transfers | - | X | - | - | X | - | - |
| 3.4 Review cash book | - | X | - | - | - | - | - |
| 3.5 Physical cash count | X | - | - | - | - | - | - |
| 3.6 Test imprest reconciliations | X | X | X | - | - | - | - |
| 3.7 Review FS presentation | - | - | - | - | - | X | X |

This provides **quality control** at planning and review stages—verify that all relevant assertions for this area have at least one substantive procedure covering them. If any assertion column is blank, additional procedures are required.

### Step 5: Inline Sample Size Defaults with Calculation Reference

Every substantive procedure that involves sampling includes practical sample size guidance inline, structured as:

**Quick reference for standard situations (no additional calculation needed):**
- **Low risk:** [X-Y items] or [%] value coverage — suitable when inherent and control risk both Low
- **Medium risk:** [X-Y items] or [%] value coverage — suitable when combined risk Medium
- **High risk:** [X-Y items] or [%] value coverage — suitable when inherent or combined risk High

**For precise calculation based on your specific risk assessment:** Use /audit:sampling command with:
- Population: [describe population for this procedure]
- Risk assessment: From risk matrix (inherent risk: [H/M/L], control risk: [H/M/L])
- Tolerable misstatement: Performance materiality for [area]
- Expected misstatement: Based on prior year findings or estimate

**Selection method:** [Random / Systematic / Stratified by value / 100% for items > Rs. [threshold]]

**Example for Trade Receivables - Existence testing:**

```
**Sample/Extent:**

**Quick reference for standard situations:**
- **Low risk:** 15-25 customers covering 50-60% of total receivables value
- **Medium risk:** 25-40 customers covering 60-70% of total receivables value
- **High risk:** 40-60 customers covering 70-80% of total receivables value (or 100% of customers with balances > Rs. [threshold])

**For precise calculation:** Use /audit:sampling command with:
- Population: Total trade receivables balance and number of customers
- Risk assessment: Per risk matrix (inherent risk: High, control risk: Medium, combined: High)
- Tolerable misstatement: Performance materiality Rs. [X]
- Expected misstatement: Rs. [Y] based on prior year ECL adjustments

**Selection method:** Stratify by value—test 100% of customers with balances > Rs. 10 lakhs + random sample from remainder using MUS method
```

This approach allows auditors to:
- Work directly from the program for standard situations (efficient execution)
- Invoke formal calculation (/audit:sampling) for high-risk areas, unusual populations, or when greater precision is needed (quality assurance)
- Understand the selection method and stratification strategy without separately researching SA 530

### Step 6: Area-Specific Red Flags Section

For each area, provide 5-7 **area-specific** red flags (warning signs unique to this area) that require additional investigation:

**Example for Receivables:**
- Aging profile deteriorating (>90 days aging increasing as % of total)
- Significant increase in credit notes issued after year-end (possible revenue reversal)
- Large number of disputed balances or confirmation exceptions
- Key customer payment delays (>30 days overdue) without documented follow-up
- Round-dollar balances or patterns suggesting fictitious customers
- Confirmations returned to client address instead of auditor address (control weakness)
- Significant differences between confirmations and accounting records without explanation

**Example for Revenue:**
- Unusual sales spike in last week of reporting period (possible channel stuffing)
- High volume of sales returns/credit notes in first month of subsequent period
- Sales to new customers without credit checks or to customers with poor payment history
- Bill-and-hold arrangements or consignment sales recorded as revenue
- Side agreements or variable consideration not reflected in transaction price
- Revenue recognized before all performance obligations satisfied (Ind AS 115 violation)
- Manual journal entries to revenue accounts (override risk per SA 240)

Red flags should be **actionable** (auditor knows what additional investigation is required) and **specific to the area** (not generic warnings applicable to all areas).

### Step 7: Cross-Reference to Related Commands and SA Standards

Each program includes explicit cross-references:

**To Phase 3 Risk Assessment outputs:**
- "Per risk matrix findings, [area] [assertion] assessed as [High/Medium/Low] combined risk. Adjust procedure extent accordingly."
- "For significant risks identified in /audit:significant-risks, SA 330 constraints apply: tests of details mandatory, cannot rely solely on analytical procedures, and procedures must be performed at or near year-end (not interim only)."
- "For fraud risks per /audit:fraud-risk, include element of unpredictability per SA 240.18: vary timing of procedures, use different sampling methods, perform procedures unannounced."

**To Phase 4 Execution commands:**
- "For precise sample size calculation, reference /audit:sampling with risk parameters and performance materiality."
- "For sample evaluation after testing, reference /audit:sample-evaluate to determine whether population appears materially misstated and what actions to take."
- "For estimation procedures (ECL, NRV, impairment, provisions), reference /audit:estimates-review for detailed testing approach."
- "Any identified misstatements should be added to /audit:misstatement-schedule for aggregation and materiality evaluation."

**To SA Standards:**
- List 2-3 primary SAs applicable to this area (e.g., SA 501 for inventory, SA 505 for confirmations, SA 540 for estimates)
- Include paragraph references where specific SA requirements apply (e.g., "SA 501.4 requires auditor attendance at physical inventory count when inventory is material")

**To CARO 2020 (where applicable):**
- Specify which CARO clause(s) are relevant to this area and what additional information must be gathered
- Example: "For inventory testing, CARO 3(ii) requires reporting on whether physical verification was conducted by management at reasonable intervals, and if discrepancies >10% in aggregate were found."

### Step 8: Generate Procedures Table with All Required Columns

Present procedures in structured table format with the following columns:

| Step | Procedure Description | Assertion(s) | Nature | Timing | Sample/Extent | Documentation | Performed By | Review |
|------|----------------------|-------------|--------|--------|---------------|---------------|--------------|--------|
| 1 | [Specific procedure] | [Which assertions tested] | [Inspection/Observation/Confirmation/Recalculation/Reperformance/Analytical/Inquiry] | [Interim/Year-end/Post-YE] | [Inline sample defaults + /audit:sampling reference] | [Specific WP or evidence] | [Staff/Senior/Manager level] | [Senior/Manager/Partner level] |

**Nature of procedure** (per SA 500): Inspection, Observation, External confirmation, Recalculation, Reperformance, Analytical procedures, Inquiry

**Timing**: Interim (3-6 months before year-end), Year-end (at or within 1 month of balance sheet date), Post-year-end (subsequent events period)

**Performed By / Review**: Risk-responsive assignment—High risk procedures performed by Senior/Manager, reviewed by Manager/Partner; Medium risk by Senior, reviewed by Manager; Low risk by Staff, reviewed by Senior

## Output Format

**Comprehensive audit program for selected area** following this structure:

---

## AUDIT PROGRAM: [AREA NAME]

**Financial Statement Line Items Covered:** [List specific FS line items]
**Applicable Ind AS:** [Primary accounting standards, e.g., Ind AS 109 for financial instruments, Ind AS 2 for inventory]
**Working Paper Reference:** CAF-03-PRG-[area code]-001

---

### 1. AUDIT OBJECTIVES

**Primary Assertions Being Tested:**
- [Existence/Occurrence]: [Objective]
- [Completeness]: [Objective]
- [Valuation/Accuracy]: [Objective]
- [Rights and Obligations]: [Objective]
- [Cut-off]: [Objective]
- [Classification]: [Objective]
- [Presentation and Disclosure]: [Objective]

**Audit Scope:** [Define what is included/excluded from testing]

---

### 2. RISK ASSESSMENT SUMMARY (from Risk Matrix)

**Reference risk matrix output:** CAF-02-RSK-001

| Assertion | Inherent Risk | Control Risk | Combined Risk | Key Risk Factors |
|-----------|---------------|--------------|---------------|------------------|
| [Assertion 1] | [H/M/L] | [H/M/L] | [H/M/L] | [Specific factors from risk matrix] |
| [Assertion 2] | [H/M/L] | [H/M/L] | [H/M/L] | [Specific factors] |
| ... | ... | ... | ... | ... |

**Overall risk profile for this area:** [High / Medium / Low]

**Specific risk-responsive considerations:**
- [Describe how procedures below are calibrated to assessed risk levels]
- [Note any significant risks requiring specific responses per SA 330]
- [Note any fraud risks requiring unpredictable procedures per SA 240]

---

### 3. AUDIT APPROACH

**Selected Approach:** [Controls-reliance / Substantive-only / Hybrid]

**Rationale:** [Why this approach is appropriate for this area based on risk assessment and control environment]

**If Controls-Reliance or Hybrid:**
- Controls to be tested: [List key controls]
- Expected impact on substantive testing: [Describe extent reduction if controls operate effectively]

**If Substantive-Only:**
- Rationale: [Why not testing controls—first year engagement, weak controls, cost-benefit, etc.]
- Implication: Extensive substantive procedures required

---

### 4. CONTROL TESTING PROCEDURES

*(Include this section only if controls-reliance or hybrid approach selected)*

| Control Ref | Control Description | Control Type | Test of Design | Test of Operating Effectiveness | Sample Size | Documentation |
|-------------|---------------------|--------------|----------------|----------------------------------|-------------|---------------|
| C-1 | [Specific control activity] | [Authorization/Segregation/Reconciliation/Review] | [How verifying control is well-designed] | [How testing control operated throughout period] | [Based on frequency: Annual=1, Quarterly=2, Monthly=2-3, Daily=25-30] | [WP ref] |
| ... | ... | ... | ... | ... | ... | ... |

**Note:** If controls are found to be ineffective during testing, control risk for related assertions must be reassessed as High, and compensating substantive procedures must be designed.

---

### 5. SUBSTANTIVE PROCEDURES BY ASSERTION

#### 5.1 Existence/Occurrence

| Step | Procedure Description | Assertion(s) | Nature | Timing | Sample/Extent | Documentation | Performed By | Review |
|------|----------------------|--------------|--------|--------|---------------|---------------|--------------|--------|
| 5.1.1 | [Specific procedure for existence] | Existence | [Nature] | [Timing] | **Quick reference:** Low: [X], Medium: [Y], High: [Z]. **For precise calculation:** /audit:sampling. **Selection:** [Method] | [WP/Evidence] | [Level] | [Level] |
| ... | ... | ... | ... | ... | ... | ... | ... | ... |

#### 5.2 Completeness

| Step | Procedure Description | Assertion(s) | Nature | Timing | Sample/Extent | Documentation | Performed By | Review |
|------|----------------------|--------------|--------|--------|---------------|---------------|--------------|--------|
| 5.2.1 | [Specific procedure for completeness] | Completeness | [Nature] | [Timing] | [Sample guidance] | [WP/Evidence] | [Level] | [Level] |
| ... | ... | ... | ... | ... | ... | ... | ... | ... |

#### 5.3 Valuation/Accuracy

| Step | Procedure Description | Assertion(s) | Nature | Timing | Sample/Extent | Documentation | Performed By | Review |
|------|----------------------|--------------|--------|--------|---------------|---------------|--------------|--------|
| 5.3.1 | [Specific procedure for valuation—especially estimates] | Valuation | [Nature] | [Timing] | [Sample guidance] | [WP/Evidence] | [Level] | [Level] |
| ... | ... | ... | ... | ... | ... | ... | ... | ... |

#### 5.4 Rights and Obligations

*(Include only if relevant to this area—e.g., PPE ownership, investment custody, borrowing obligations)*

| Step | Procedure Description | Assertion(s) | Nature | Timing | Sample/Extent | Documentation | Performed By | Review |
|------|----------------------|--------------|--------|--------|---------------|---------------|--------------|--------|
| 5.4.1 | [Specific procedure for rights] | Rights | [Nature] | [Timing] | [Sample guidance] | [WP/Evidence] | [Level] | [Level] |
| ... | ... | ... | ... | ... | ... | ... | ... | ... |

#### 5.5 Cut-off

*(Include for all areas—critical for revenue, purchases, expenses)*

| Step | Procedure Description | Assertion(s) | Nature | Timing | Sample/Extent | Documentation | Performed By | Review |
|------|----------------------|--------------|--------|--------|---------------|---------------|--------------|--------|
| 5.5.1 | [Specific procedure for cut-off] | Cut-off | [Nature] | [Timing] | [Sample guidance] | [WP/Evidence] | [Level] | [Level] |
| ... | ... | ... | ... | ... | ... | ... | ... | ... |

#### 5.6 Classification

| Step | Procedure Description | Assertion(s) | Nature | Timing | Sample/Extent | Documentation | Performed By | Review |
|------|----------------------|--------------|--------|--------|---------------|---------------|--------------|--------|
| 5.6.1 | [Specific procedure for classification—current vs. non-current, by nature] | Classification | [Nature] | [Timing] | [Sample guidance] | [WP/Evidence] | [Level] | [Level] |
| ... | ... | ... | ... | ... | ... | ... | ... | ... |

#### 5.7 Presentation and Disclosure

| Step | Procedure Description | Assertion(s) | Nature | Timing | Sample/Extent | Documentation | Performed By | Review |
|------|----------------------|--------------|--------|--------|---------------|---------------|--------------|--------|
| 5.7.1 | [Check Ind AS disclosure requirements] | Presentation | [Nature] | Year-end | 100% of required disclosures | Disclosure checklist | Senior | Manager |
| ... | ... | ... | ... | ... | ... | ... | ... | ... |

---

### 6. EXPECTED AUDIT EVIDENCE

**External evidence (third-party):**
- [List specific external evidence: bank statements, confirmations, valuations, legal opinions, actuary reports]

**Internal evidence (entity-generated):**
- [List specific internal evidence: invoices, purchase orders, contracts, board minutes, reconciliations, aging reports]

**Analytical evidence:**
- [List analytical procedures: ratio analysis, trend analysis, reasonableness tests, comparative analysis]

---

### 7. RED FLAGS AND SPECIAL CONSIDERATIONS

**Area-specific red flags requiring investigation:**

1. **[Red flag category 1]:** [Specific warning sign] → **Action required:** [What to do if this flag is identified]
2. **[Red flag category 2]:** [Specific warning sign] → **Action required:** [What to do]
3. **[Red flag category 3]:** [Specific warning sign] → **Action required:** [What to do]
4. ... (5-7 red flags total)

**Fraud considerations for this area:**
- [Specific fraud schemes common to this area per SA 240]
- [How procedures above incorporate unpredictability element]

**CARO 2020 specific requirements** *(if applicable)*:
- [CARO clause X(Y) requires reporting on: [specific matter]]
- [Additional information to gather: [describe]]

---

### 8. SA AND IND AS CROSS-REFERENCES

**Primary Standards on Auditing:**
- **SA [XXX]:** [Standard name] - [Specific requirements relevant to this area]
  - Para [X]: [Key requirement]
- **SA [YYY]:** [Standard name] - [Specific requirements]

**Accounting Standards:**
- **Ind AS [X]:** [Standard name] - [Recognition, measurement, presentation, disclosure requirements]

**Cross-references to other audit commands:**
- /audit:risk-matrix → [How risk matrix findings inform this program]
- /audit:significant-risks → [Significant risk procedures if applicable]
- /audit:fraud-risk → [Fraud risk procedures if applicable]
- /audit:sampling → [For precise sample size calculations]
- /audit:estimates-review → [For estimation procedures if applicable]
- /audit:sample-evaluate → [For evaluating sample results after testing]
- /audit:misstatement-schedule → [For accumulating identified misstatements]

---

### 9. ASSERTION COVERAGE MATRIX

*(Quality control check: Ensure all relevant assertions have at least one substantive procedure)*

| Procedure Step | Existence | Completeness | Valuation | Rights | Cut-off | Classification | Presentation |
|----------------|-----------|--------------|-----------|--------|---------|----------------|--------------|
| 5.1.1 | X | - | - | - | - | - | - |
| 5.1.2 | X | X | - | - | - | - | - |
| 5.2.1 | - | X | - | - | - | - | - |
| 5.3.1 | - | - | X | - | - | - | - |
| 5.4.1 | - | - | - | X | - | - | - |
| 5.5.1 | - | - | - | - | X | - | - |
| 5.6.1 | - | - | - | - | - | X | - |
| 5.7.1 | - | - | - | - | - | X | X |
| ... | ... | ... | ... | ... | ... | ... | ... |
| **Coverage** | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |

**Assertions not covered:** [List any assertions without procedures, or state "All relevant assertions covered"]

---

### 10. COMPLETION CHECKLIST

- [ ] All planned procedures completed (or documented reason for omission)
- [ ] Exceptions/issues documented in exception summary with resolution
- [ ] Sample selections documented with random seeds/stratification details
- [ ] Working papers properly referenced and cross-referenced
- [ ] Review notes from Senior/Manager cleared with responses
- [ ] Significant findings communicated to manager/partner
- [ ] Conclusion documented on achievement of audit objectives for each assertion
- [ ] Misstatements (if any) added to misstatement schedule (CAF-06-MIS-001)
- [ ] Evidence obtained is sufficient and appropriate per SA 500

**Overall conclusion:** [State whether sufficient appropriate audit evidence obtained to support opinion on this area]

**Prepared by:** _________________ Date: _______
**Reviewed by:** _________________ Date: _______

---

## Reference to Standards

**SA 330 - The Auditor's Responses to Assessed Risks:**
- Para 7: Nature, timing, and extent of procedures shall be responsive to assessed risks of material misstatement at the assertion level
- Para 21: For significant risks, auditor shall perform substantive procedures specifically responsive to that risk
- Para 22: For significant risks, substantive procedures shall include tests of details

**SA 500 - Audit Evidence:**
- Para 6: Design and perform audit procedures appropriate in circumstances for purpose of obtaining sufficient appropriate audit evidence

**SA 240 - Fraud:**
- Para 18: For revenue recognition fraud risk, design and perform procedures to address the risk (element of unpredictability)

**For full SA text and detailed requirements, reference:**
@skills/sa-standards-reference/SKILL.md

---

**Disclaimer:** This tool assists with audit fieldwork execution per SA 330 but does not substitute professional audit judgment. All audit programs must be tailored to entity-specific circumstances, reviewed by qualified personnel, and approved by the engagement partner. Sample sizes are indicative defaults; auditors must exercise professional judgment and may need to calculate precise samples using /audit:sampling. The auditor remains responsible for determining appropriate procedures, sample sizes, and level of evidence sufficient to support the audit opinion.
