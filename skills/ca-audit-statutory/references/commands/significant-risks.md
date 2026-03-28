# Significant Risks

Identify and document significant risks per SA 315 and SA 330, designing specific audit responses with SA 330 constraint enforcement. Significant risks are identified risks of material misstatement for which the assessment of inherent risk is close to the upper end of the spectrum, requiring special audit consideration.

## Required Context

Before running this command, ensure:
- Risk assessment matrix completed (reference /audit:risk-matrix output -- significant risks come from High inherent risk areas)
- Fraud risk assessment completed (reference /audit:fraud-risk output -- all fraud risks are significant risk candidates)
- Understanding of significant estimates and judgments in financial statements
- Knowledge of significant unusual transactions during the year
- Materiality amounts determined (for quantifying potential impact)

**Ask the user to provide:**
1. Risk matrix results showing areas with High inherent risk ratings
2. Fraud risk assessment findings (all identified fraud risks are automatically significant risk candidates per SA 315)
3. Significant estimates or judgments in the financial statements (Expected credit loss, fair values, impairments, provisions, actuarial assumptions, useful lives, revenue with variable consideration)
4. Any significant unusual transactions during the year (outside normal course of business, complex structures, related party transactions at non-arm's length, near year-end transactions)

## Workflow

### Step 1 - Identify Significant Risk Candidates from Four Sources

**SA 315 definition:** A significant risk is an identified risk of material misstatement for which the assessment of inherent risk is close to the UPPER END OF THE SPECTRUM of inherent risk. Significant risks often relate to significant non-routine transactions or judgmental matters.

**Source 1 - From Risk Assessment Matrix (High Inherent Risk Areas):**

Review the risk matrix output from /audit:risk-matrix. Identify all area-assertion combinations rated as HIGH inherent risk (upper end of spectrum).

| Area | Assertion | Inherent Risk | Why Upper End of Spectrum |
|------|-----------|---------------|---------------------------|
| [Area] | [Assertion] | H | [Rationale from risk matrix] |

**Ask the user:** "From your risk assessment matrix, provide all areas with High inherent risk ratings. These are automatically significant risk candidates because they are at the upper end of the spectrum."

**Source 2 - From Fraud Risk Assessment (All Fraud Risks are Significant):**

**SA 315 principle:** ALL identified fraud risks are significant risks. This is because fraud involves incentive/pressure and deliberate concealment, placing it at the upper end of the inherent risk spectrum.

Automatically include:
- **Revenue recognition fraud risk** (unless rebutted per SA 240 with documented justification)
- **Management override of controls** (ALWAYS present, cannot be rebutted)
- **Any other fraud risks identified** in /audit:fraud-risk assessment

**Ask the user:** "From your fraud risk assessment, confirm which fraud risks were identified: (1) Revenue recognition fraud (included unless rebutted?), (2) Management override (always included), (3) Any other fraud risks (inventory manipulation, misappropriation, specific related party fraud concerns)."

**Source 3 - Significant Judgment/Estimation Areas:**

Areas requiring significant management judgment or estimation are often significant risks due to complexity, subjectivity, and susceptibility to bias.

**Common significant estimates requiring evaluation:**

**Expected Credit Loss (ECL) per Ind AS 109:**
- Forward-looking estimate, judgment-intensive
- Requires: Probability of default (PD), Loss given default (LGD), Exposure at default (EAD), Forward-looking macro factors
- High estimation uncertainty, susceptible to management bias (optimism)

**Fair Value Measurements (Ind AS 113):**
- Level 1 (quoted prices): Generally NOT significant risk (observable, objective)
- Level 2 (observable inputs): May be significant risk depending on judgment required
- Level 3 (unobservable inputs): Usually significant risk (high subjectivity, management judgment)

**Impairment Assessments (Ind AS 36):**
- Property, plant and equipment (PPE), intangibles, goodwill, investments
- Requires: Cash flow projections, discount rates, terminal growth rates, identification of cash-generating units (CGUs)
- High complexity, forward-looking, susceptible to optimism

**Provisions and Contingent Liabilities (Ind AS 37):**
- Litigation provisions, warranty provisions, restructuring provisions, environmental obligations
- Requires: Probability assessment, measurement of obligation
- High uncertainty, judgment-intensive

**Revenue with Variable Consideration (Ind AS 115):**
- Multiple performance obligations, allocation of transaction price, estimates of discounts/rebates/returns
- Complexity, judgment in identifying performance obligations, susceptible to aggressive recognition

**Useful Life and Residual Value (Ind AS 16):**
- Depreciation basis requiring judgment
- Usually NOT significant risk unless significant changes or unusual assets

**Actuarial Assumptions (Ind AS 19):**
- Employee benefits (gratuity, leave encashment)
- Discount rate, salary escalation rate, mortality rate, attrition rate
- Complexity, requires actuary, susceptible to manipulation of assumptions

**Ask the user:** "Which significant estimates or judgments exist in these financial statements? For each estimate, assess: (1) Magnitude (materiality), (2) Complexity, (3) Subjectivity (degree of judgment), (4) Estimation uncertainty (range of possible outcomes). Estimates with high magnitude AND high complexity/subjectivity/uncertainty are likely significant risks."

**Source 4 - Significant Unusual Transactions:**

Transactions outside the normal course of business or with unusual complexity are often significant risks.

**Indicators of significant unusual transactions:**
- **Outside normal course of business:** Restructuring, business combinations, disposals of major business segments, significant asset disposals
- **Complex structured transactions:** Derivatives, securitization, special purpose entities, complex financing arrangements
- **Material related party transactions:** Transactions at non-arm's length terms, transactions with unusual substance, guarantees to/from related parties
- **Transactions near year-end:** Material transactions in last month with unusual terms, suspicious timing
- **Transactions with unusual terms:** Non-standard payment terms, side agreements, contingent arrangements

**Ask the user:** "Were there any significant unusual transactions during the year? For each transaction: (1) Describe the transaction, (2) Why is it outside normal course of business or unusually complex?, (3) What is the magnitude?, (4) What accounting issues does it raise?"

### Step 2 - Evaluate and Confirm Significant Risks Using SA 315 Criteria

For each candidate identified in Step 1, apply the SA 315 significant risk criteria to confirm whether it meets the definition:

**SA 315 Significant Risk Criteria:**

| Criterion | Description | Applicable to This Risk? |
|-----------|-------------|-------------------------|
| **Significant management judgment or estimation** | Involves complex accounting estimates, subjective measurement inputs, or wide range of possible measurement outcomes | [Y/N - explain] |
| **Significant related party transactions** | Related party transactions outside ordinary course of business, at non-market terms, or with unusual complexity | [Y/N - explain] |
| **Significant unusual transactions** | Transactions outside normal business activities, with unusual terms, or involving complex accounting treatment | [Y/N - explain] |
| **Fraud risk** | Identified as fraud risk under SA 240 (all fraud risks are automatically significant risks) | [Y/N - if from Source 2, mark Y] |

**Decision point:** Confirm the final list of significant risks. If a candidate does NOT meet any of the four criteria, it should be removed from the significant risk register with documented rationale explaining why it does not require special audit consideration.

**Example evaluation:**
- Candidate: "Trade receivables - Valuation (ECL estimate)"
- Criteria assessment: Significant judgment ✓ (complex estimate with forward-looking assumptions), Related party ✗, Unusual transaction ✗, Fraud risk ✗
- Conclusion: CONFIRMED as significant risk (meets judgment/estimation criterion)

**Ask the user:** "For each significant risk candidate, confirm that it meets at least one of the four SA 315 criteria. Document which criteria apply and why. If any candidate does NOT meet criteria, remove it with documented rationale."

### Step 3 - Document Each Significant Risk in Detail

For each confirmed significant risk, create a detailed register entry with entity-specific information:

**Significant Risk Documentation Template (per risk):**

**Risk Reference Number:** SR-01, SR-02, SR-03... (sequential numbering)

**Risk Description:**
- Clear, specific statement of what could go wrong
- NOT generic (e.g., "Revenue may be misstated")
- Specific to THIS entity (e.g., "Revenue from long-term construction contracts may be overstated through aggressive percentage of completion estimates due to pressure to meet profitability targets and loan covenant requirements")

**Financial Statement Area(s) Affected:**
- Which specific line items (e.g., "Trade receivables", "ECL allowance", "Revenue from operations")
- Balance sheet and/or income statement impact

**Assertion(s) Affected:**
- Which specific assertions (Existence, Completeness, Valuation, Rights/Obligations, Cut-off, Classification, Presentation)
- NOT "all assertions" (be specific - usually 1-3 assertions primarily affected)

**Why This is a Significant Risk:**
- Which SA 315 criterion/criteria apply
- Why it places inherent risk at the upper end of the spectrum for THIS entity
- Entity-specific factors making this significant

**Magnitude (Estimated):**
- Quantify the potential impact range
- Example: "Rs. 30-50 lakhs potential overstatement" or "5-8% of profit before tax" or "Material to financial statements (>performance materiality)"
- If precise quantification not possible, provide order of magnitude

**Direction of Risk:**
- Overstatement or Understatement
- This is important for designing responsive procedures (overstatement risk → verify existence/valuation downward; understatement risk → verify completeness/valuation upward)

**Linked to Fraud Risk?**
- Yes (SR-XX from fraud risk assessment) or No
- If yes, reference the fraud risk assessment working paper

**Ask the user** for each confirmed significant risk: "Provide entity-specific details for the risk: (1) Clear description of what could go wrong, (2) Which financial statement areas and assertions are affected, (3) Estimated magnitude and direction, (4) Is this linked to an identified fraud risk?"

### Step 4 - Design SA 330 Responsive Procedures WITH CONSTRAINT ENFORCEMENT

**CRITICAL SA 330 REQUIREMENTS:** For significant risks, SA 330 imposes specific constraints on the auditor's response. These are MANDATORY, not optional.

For each significant risk, design responsive procedures and verify compliance with the **SA 330 Constraint Checklist:**

**SA 330 Mandatory Constraint Checklist (MUST be satisfied for EVERY significant risk):**

| SA 330 Requirement | Compliant? | Evidence/Explanation |
|--------------------|------------|---------------------|
| **1. Substantive procedures are specifically responsive to the assessed risk (SA 330.18)** | [Y/N] | [Procedures are tailored to THIS specific risk and its characteristics, not generic/boilerplate] |
| **2. Cannot rely solely on substantive analytical procedures (SA 330.21)** | [Y/N] | [Tests of details are included in the response; analytical procedures alone are insufficient] |
| **3. Tests of details are included (SA 330.21)** | [Y/N] | [Specific tests of details identified and documented] |
| **4. If relying on controls, operating effectiveness tested in CURRENT period (SA 330.15)** | [Y/N or N/A] | [If controls approach: controls tested THIS year; if substantive-only: mark N/A] |
| **5. Substantive procedures performed at or near period end (SA 330.23)** | [Y/N] | [Procedures include work at/near year-end, not limited to interim testing only] |

**If ANY constraint is NOT satisfied, the audit response is NON-COMPLIANT with SA 330.** Redesign the procedures to achieve full compliance.

**Responsive Procedure Documentation Template (per significant risk):**

| Procedure # | Procedure Description | Nature of Procedure | Timing | Extent | Responsible Team Member |
|-------------|----------------------|---------------------|--------|--------|------------------------|
| 1 | [Specific audit procedure] | [ToD / ToC / Confirm / Obs / Recalc / Inquiry / SAP] | [When performed] | [How much - sample size/coverage] | [Who performs] |
| 2 | [Specific audit procedure] | [Type] | [When] | [Extent] | [Who] |
| 3 | [Specific audit procedure] | [Type] | [When] | [Extent] | [Who] |

**Nature of Procedure Types:**
- **ToD:** Test of Details (substantive procedure examining specific transactions/balances)
- **ToC:** Test of Controls (if relying on controls addressing the significant risk)
- **Confirm:** External confirmation (from third parties)
- **Obs:** Observation (physical observation of inventory, processes)
- **Recalc:** Recalculation/Reperformance (independent calculation)
- **Inquiry:** Inquiry (questions to management/personnel - ALONE is insufficient, must corroborate)
- **SAP:** Substantive Analytical Procedure (alone is insufficient per SA 330.21 for significant risks)

**Decision point:** For each significant risk, after documenting responsive procedures, complete the SA 330 Constraint Checklist and verify that ALL five constraints are satisfied. If any constraint shows "N" (not satisfied), STOP and redesign the procedures. You cannot proceed with a non-compliant audit response for a significant risk.

**Example - Compliant Response:**

**Risk:** SR-01 - Trade Receivables ECL may be understated

**Responsive Procedures:**
1. Test ECL model methodology against Ind AS 109 requirements (ToD - Year-end - Full model review - Manager)
2. Test key assumptions: PD, LGD, forward-looking factors (ToD - Year-end - All significant assumptions - Manager + Specialist)
3. Recalculate ECL for top 20 customers (70% of receivables) (Recalc - Year-end - 20 customers - Senior)
4. Retrospective review: Compare prior year ECL to actual write-offs (ToD - Year-end - Full population - Senior)
5. Engage credit risk specialist to review model (ToD - Year-end - Full model - Specialist)

**SA 330 Checklist:**
1. Specifically responsive? YES - procedures tailored to ECL estimate complexities
2. Not solely analytical? YES - tests of details included (model testing, recalculation)
3. Tests of details included? YES - procedures 1-5 are all tests of details or specialist work
4. Current period controls testing? N/A - substantive-only approach (controls over ECL are weak)
5. At/near period end? YES - all procedures at year-end

**Result:** COMPLIANT with SA 330

**Example - Non-Compliant Response (needs correction):**

**Risk:** SR-02 - Revenue may be overstated (fraud risk)

**Initial Procedures (NON-COMPLIANT):**
1. Perform analytical review of revenue trends by month (SAP - Interim - Full year - Senior)
2. Inquire of management about unusual revenue transactions (Inquiry - Interim - N/A - Senior)

**SA 330 Checklist:**
1. Specifically responsive? NO - procedures too generic
2. Not solely analytical? NO - only analytical procedure and inquiry (no tests of details)
3. Tests of details included? NO - missing
4. Current period controls testing? N/A
5. At/near period end? NO - only interim work

**Result:** NON-COMPLIANT - MUST redesign

**Corrected Procedures (COMPLIANT):**
1. Test 100% of revenue transactions >Rs. 5 lakhs in last 10 days of year (ToD - Year-end - 100% large items - Manager)
2. Confirm revenue terms with top 15 customers (70% of revenue) (Confirm - Year-end - 15 customers - Senior)
3. Analytical review of monthly revenue for unusual patterns (SAP - Year-end - Full year - Senior) [NOTE: Now combined with tests of details, acceptable]
4. Test manual journal entries to revenue accounts (ToD - Year-end - All >Rs. 2 lakhs + sample - Manager)
5. Review contracts for unusual terms (bill-and-hold, side agreements) (ToD - Year-end - All new/amended contracts - Manager)

**SA 330 Checklist:** All constraints satisfied → COMPLIANT

### Step 5 - Controls Consideration for Significant Risks

**If the entity has controls specifically designed to address a significant risk:**

1. **Evaluate design effectiveness:**
   - Is the control well-designed to prevent or detect the significant risk?
   - Does it address the specific assertion at risk?

2. **If intending to rely on controls:**
   - **SA 330.15 REQUIREMENT:** For significant risks, if relying on controls, auditor MUST test operating effectiveness in the CURRENT period
   - **Cannot carry forward prior year controls testing** for significant risks (unlike non-significant risks where carry-forward is sometimes permissible)
   - Plan tests of controls for current period

3. **Document:**
   - Which controls specifically address this significant risk?
   - Will these controls be tested?
   - If YES: What is the testing plan (nature, timing, extent)?
   - If NO: Why not? (controls weak? substantive-only approach more efficient?)

4. **Important SA 330 principle:**
   - Even with controls testing and reliance, substantive procedures are STILL required for significant risks
   - Controls alone are NEVER sufficient for significant risks
   - Tests of details must be included regardless of controls reliance

**Ask the user** for each significant risk: "Are there entity controls specifically addressing this significant risk? If yes, do you intend to test and rely on them? If testing controls for a significant risk, remember: (1) Must test in current period (no carry-forward), (2) Substantive procedures still required (controls alone insufficient)."

### Step 6 - Link to Audit Plan and Resource Allocation

**Audit Plan Linkage:**
- Reference the detailed audit plan working paper (CAF-01-PLN-001) where procedures will be documented in full
- Ensure each significant risk has corresponding procedures in the audit plan matrix
- Cross-reference: "See audit plan procedures for [Area] - [Assertion] for detailed testing plan"

**Team Member Assignment:**
- Significant risks typically require manager or partner involvement (not just staff/senior level)
- Assign team members with appropriate competence and experience
- Document: Engagement partner involvement (review? direct involvement? consultation?)

**Specialist Needs:**
- Identify whether specialists are required for any significant risks:
  * Valuation specialist for fair value measurements (Level 3 inputs, business valuations, PPE impairment)
  * Actuary for employee benefits (gratuity, leave encashment, pension plans)
  * IT auditor/specialist for IT-dependent controls or IT system-based risks
  * Tax specialist for complex tax provisions or uncertain tax positions
  * Legal counsel for litigation provisions or complex legal matters
  * Industry specialist for industry-specific estimates (e.g., oil & gas reserves, insurance claims)

**Timing and Milestones:**
- When will procedures for each significant risk be performed?
- Are there dependencies (e.g., specialist work must be completed before finalizing audit opinion)?
- Critical path items requiring early attention?

**Ask the user:** "For each significant risk, identify: (1) Which team member is responsible (ensure appropriate competence level), (2) Does this risk require specialist involvement?, (3) When will procedures be performed (interim/year-end)?"

## Output Format

**Significant Risk Register:**

**Summary Table:**

| Risk # | Risk Description | FS Area | Assertion | Why Significant? | Magnitude | Direction | Fraud Link | Responsive Procedures Summary | SA 330 Compliant? |
|--------|------------------|---------|-----------|------------------|-----------|-----------|------------|-------------------------------|-------------------|
| SR-01 | ECL provision for trade receivables may be understated due to optimistic assumptions about customer creditworthiness | Receivables | Valuation | Significant judgment (Ind AS 109 complex estimate); high subjectivity; estimation uncertainty | Rs. 30-50 lakhs potential understatement (3-5% PBT) | Understatement | No | Test model, review assumptions, recalculate top customers, specialist review, retrospective comparison | ✓ Yes |
| SR-02 | Revenue from long-term construction contracts may be overstated through aggressive % completion estimates | Revenue | Occurrence, Valuation | Significant judgment; fraud risk (revenue presumption); pressure to meet targets | Rs. 1-2 crore potential overstatement (10-15% revenue) | Overstatement | Yes (fraud) | Test % completion methodology, inspect physical progress, confirm with engineers, review contract terms, analytical by project | ✓ Yes |
| SR-03 | Impairment of PPE (manufacturing plant) may be required but not recognized | PPE | Valuation | Significant judgment (Ind AS 36); plant operating at low capacity; high estimation uncertainty | Rs. 5-10 crore potential overstatement (30-40% net assets) | Overstatement | No | Test impairment indicators, review value-in-use model, test cash flow projections, test discount rate, engage valuation specialist for FVLCS | ✓ Yes |
| SR-04 | Related party transactions with sister concern may not be at arm's length | RPT Disclosure | Valuation, Disclosure | Significant RPT; non-arm's length terms suspected | Rs. 50 lakhs - Rs. 1 crore transactions | Overstatement of expenses / understatement of profit | No | Independent valuation/benchmarking, review board approvals, confirm with related party, test pricing vs. market, assess disclosure adequacy per Ind AS 24 | ✓ Yes |
| SR-05 | Management override of controls through period-end manual journal entries | Multiple | Multiple | Presumed fraud risk per SA 240 (ALL audits) | Pervasive - cannot be quantified | Could be either | Yes (fraud) | Test all manual JVs >Rs. 10 lakhs, test JVs to unusual accounts, test period-end JVs, review JVs by senior management, investigate round numbers | ✓ Yes |

**Detailed Documentation for Each Significant Risk:**

---

**SIGNIFICANT RISK SR-01: ECL Provision Understatement**

**Risk Description:** Expected credit loss provision for trade receivables may be understated due to management using optimistic assumptions about customer creditworthiness and forward-looking economic factors, particularly given current economic uncertainty and increasing customer delinquencies observed in analytical review.

**Financial Statement Areas Affected:**
- Trade receivables (Balance Sheet)
- ECL allowance (Balance Sheet - contra asset)
- Impairment loss on financial assets (Profit & Loss)

**Assertions Affected:**
- Valuation (primary - is the ECL provision measured appropriately per Ind AS 109?)
- Presentation (disclosure of ECL methodology, assumptions, sensitivity analysis)

**Why Significant Risk:**
- **Significant judgment/estimation:** ✓ ECL under Ind AS 109 requires complex forward-looking estimate using PD, LGD, EAD, and macro factors; high degree of subjectivity
- Management bias susceptibility: Incentive to understate provision to improve profitability (loan covenant pressure)
- Estimation uncertainty: Wide range of possible outcomes depending on assumptions
- Magnitude: Rs. 30-50 lakhs potential understatement (3-5% of PBT) = material

**Magnitude:** Rs. 30-50 lakhs (estimated range based on sensitivity analysis of key assumptions)

**Direction:** Understatement (risk that provision is too low)

**Linked to Fraud Risk:** No (but management bias risk is present)

**SA 330 Responsive Procedures:**

| Proc # | Description | Nature | Timing | Extent | Responsible |
|--------|-------------|--------|--------|--------|-------------|
| 1 | Test ECL model methodology against Ind AS 109 requirements | ToD | Year-end | Full model documentation | Manager |
| 2 | Review key assumptions (PD, LGD) for reasonableness and support | ToD | Year-end | All significant assumptions | Manager + Specialist |
| 3 | Test forward-looking macro factor adjustments | ToD | Year-end | All adjustments | Manager |
| 4 | Recalculate ECL for top 20 customers (70% of receivables by value) | Recalc | Year-end | 20 customers | Senior |
| 5 | Retrospective review: Compare FY 2024-25 ECL provision to actual write-offs in FY 2025-26 | ToD | Year-end | Full prior year provision | Senior |
| 6 | Engage credit risk specialist to review ECL model and assumptions | ToD | Year-end | Full model | External Specialist |
| 7 | Review disclosure adequacy per Ind AS 109 requirements | ToD | Year-end | Full disclosures | Manager |

**SA 330 Compliance Check:**

| Constraint | Compliant? | Evidence |
|------------|------------|----------|
| Specifically responsive? | ✓ Yes | Procedures target ECL model, assumptions, calculations specific to this risk |
| Not solely analytical? | ✓ Yes | No analytical procedures; all tests of details/specialist work |
| Tests of details included? | ✓ Yes | Procedures 1-7 all tests of details or specialist review |
| Current period controls test? | N/A | Substantive-only approach (ECL controls are weak - limited documentation) |
| At/near period end? | ✓ Yes | All procedures performed at year-end |

**RESULT: COMPLIANT with SA 330 requirements**

**Controls Consideration:**
- Entity has documented ECL policy but limited evidence of controls operating effectively
- Controls over data inputs (aging accuracy, customer credit information) are adequate but controls over assumption-setting are weak (management judgment without independent review)
- Decision: Substantive-only approach (not relying on controls; full substantive testing)

**Specialist Involvement:** Credit risk specialist engaged to review ECL model methodology, test assumptions, and assess reasonableness of provision

**Team Assignment:** Manager (primary responsibility), Senior (recalculation work), External credit risk specialist (model review)

---

**[Repeat detailed documentation for SR-02, SR-03, SR-04, SR-05...]**

---

**SA 330 Compliance Summary:**

| SA 330 Constraint | Risks Compliant | Risks Non-Compliant | Compliance Rate |
|-------------------|-----------------|---------------------|-----------------|
| Specifically responsive procedures | 5 | 0 | 100% |
| Not solely analytical procedures | 5 | 0 | 100% |
| Tests of details included | 5 | 0 | 100% |
| Current period controls testing (if relying) | 3 (tested) + 2 (N/A - not relying) | 0 | 100% |
| Procedures at/near period end | 5 | 0 | 100% |

**Overall SA 330 Compliance:** ✓ ALL significant risks have compliant audit responses

**Summary Statistics:**

- **Total significant risks identified:** 5
- **Linked to fraud risks:** 2 (SR-02 revenue recognition, SR-05 management override)
- **Requiring specialist involvement:** 3 (SR-01 credit risk specialist, SR-03 valuation specialist, SR-04 independent pricing benchmarking)
- **Controls testing planned:** 3 risks (partial reliance approach)
- **Substantive-only approach:** 2 risks (controls weak or absent)
- **SA 330 constraints satisfied:** 5 of 5 (100%)

**Risk Distribution by Financial Statement Area:**

| Area | Number of Significant Risks | Key Assertions at Risk |
|------|----------------------------|------------------------|
| Revenue | 1 | Occurrence, Valuation |
| Receivables | 1 | Valuation |
| PPE | 1 | Valuation |
| Related party transactions | 1 | Valuation, Disclosure |
| Journal entries (pervasive) | 1 | Multiple |

**Working Paper Reference:** CAF-02-SIG-001

**Cross-References:**
- Risk assessment matrix: CAF-02-RSK-001 (source of High inherent risk areas)
- Fraud risk assessment: CAF-02-FRD-001 (source of fraud-related significant risks)
- Detailed audit plan: CAF-01-PLN-001 (procedures documented in full detail)

**Reference to SA 315/330:** Significant risks are identified risks of material misstatement for which inherent risk is at the upper end of the spectrum. Per SA 330, auditor must perform substantive procedures specifically responsive to each significant risk, including tests of details (analytical procedures alone are insufficient). If relying on controls for significant risks, operating effectiveness must be tested in the current period.

---

**Disclaimer:** This tool provides a structured framework for identifying and responding to significant risks per SA 315 and SA 330, but does not substitute professional audit judgment. The engagement partner retains responsibility for determining which risks are significant and designing appropriate responsive procedures. SA 330 requirements for significant risks are mandatory - substantive procedures must include tests of details, and analytical procedures alone are insufficient. All significant risk assessments and responsive procedures must be reviewed and approved by the engagement partner.
