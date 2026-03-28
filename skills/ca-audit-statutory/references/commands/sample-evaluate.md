# Sample Evaluate

Evaluate audit sample results and project findings to the population per SA 530 (Audit Sampling).

## Description

This command evaluates sample testing results from substantive procedures or tests of controls, projects identified misstatements to the population, and determines whether the population is acceptable or requires additional procedures. SA 530 requires the auditor to evaluate both the quantitative results (projected misstatement vs. tolerable misstatement) and qualitative factors (nature, cause, pattern of errors).

**Key principle:** Sample evaluation presents conclusion FIRST (accept/reject recommendation with projected amount vs. tolerable misstatement), followed by detailed calculation walkthrough for documentation and review. This conclusion-first structure ensures auditors know immediately whether the population appears materially misstated and what action to take.

When sample evaluation identifies errors, this command provides formatted output ready for input to /audit:misstatement-schedule, ensuring seamless cross-command handoff from fieldwork testing to misstatement compilation.

## Required Context

Before running this command, ensure you have:

- **Sampling method used:** Statistical (MUS/PPS or classical variables) or non-statistical
- **Sample parameters:** Population size/value, sample size, confidence level (if statistical), tolerable misstatement, expected misstatement
- **Sampling documentation:** Sample selection working paper showing how items were selected
- **Testing results:** All selected items tested with results documented, exceptions identified with amounts and nature
- **Non-responses handled:** Items unable to test (missing documentation, confirmation non-responses) with alternative procedures documented
- **Prior year results:** For comparison, what were prior year sample results in this area?

**Ask user:** "Provide the following information for sample evaluation:

1. **Sample design parameters:**
   - Sampling method: [Statistical MUS / Statistical classical / Non-statistical]
   - Population: Total value Rs. [amount], Total count [number] items
   - Sample size: [number] items selected, Total sample value Rs. [amount]
   - Confidence level (if statistical): [e.g., 95%]
   - Tolerable misstatement: Rs. [amount] (Performance materiality for this area)
   - Sample interval (if MUS): Rs. [amount]

2. **Testing results:**
   - Items tested with no exceptions: [number] items, Rs. [value]
   - Items with misstatements: [number] items with following details:
     * Item reference/ID
     * Recorded amount
     * Audited amount
     * Misstatement amount and direction (overstatement/understatement)
     * Nature of error (calculation error, cut-off error, valuation difference, etc.)
     * Cause (control failure, judgment difference, clerical error, etc.)
   - Items unable to test: [number] items, Rs. [value], with reason (non-response, missing documentation)
   - Alternative procedures performed: [describe outcomes]

3. **Qualitative context:**
   - Is there a pattern to the errors? (All overstatements, all in one period, all one type)
   - Are errors systemic (could affect entire population) or isolated?
   - Any fraud indicators?
   - Does error pattern suggest issues in related audit areas?"

## Workflow

### Step 1: Compile Sample Testing Results

Create comprehensive summary of sample execution:

**A. Overall Sample Coverage**
- Planned sample size vs. actually tested (if difference, explain why)
- Population coverage percentage (sample value / population value)
- Items tested vs. items with exceptions (exception rate)
- Non-responses and alternative procedures results

**B. Classification of Tested Items**
- Items tested with NO exceptions (provide count and value)
- Items tested WITH misstatements (list individually in detailed table)
- Items unable to test with successful alternative procedures (treat as tested)
- Items unable to test with unsuccessful alternative procedures (treat as misstatements per SA 530.10 - conservative approach)

**Document:** "Of [X] items selected, [Y] tested with no exceptions, [Z] had misstatements, [N] unable to test. Alternative procedures performed for [N] items resulted in [outcome]."

### Step 2: Classify Misstatements (Anomalous vs. Representative)

**CRITICAL:** Anomalous errors can be excluded from projection, but classification requires strong justification.

**Anomalous (Isolated) Errors:**
- Definition: One-time, non-recurring errors with specific identifiable cause that is clearly NOT representative of the population
- Examples:
  * Data entry error caused by temporary system glitch now resolved (e.g., invoice entered twice due to system freeze, issue fixed)
  * Error in manual journal entry prepared by temp staff no longer employed
  * Specific transaction affected by unique circumstance that cannot recur (e.g., one-time asset sale recorded incorrectly)
- Requirements: Must document specific cause, evidence it cannot recur, evidence it's not representative
- Auditor skepticism: Be cautious - management may argue all errors are "one-time" to avoid projection

**Representative Errors:**
- Definition: Errors arising from normal operation of controls, processes, or judgments - could occur elsewhere in population
- Examples:
  * Calculation error following entity's standard process (e.g., depreciation rate wrong across asset category)
  * Consistent misapplication of accounting policy (e.g., capitalizing repairs as assets)
  * Control failure that could affect other transactions (e.g., credit notes not recorded timely)
  * Estimation differences (e.g., ECL provision too low, NRV writedown inadequate)
- Treatment: MUST be projected to population

**Ask user:** "For each misstatement found, classify as Anomalous or Representative. If classifying as Anomalous, provide specific evidence that error is isolated and cannot be representative of population. Default classification should be Representative unless strong evidence exists."

**Document:** Create classification table with justification for each error's classification. If any error is classified as anomalous, include evidence supporting non-representativeness.

### Step 3: Handle Non-Responses and Alternative Procedures

**Hierarchy of alternative procedures (SA 505 for confirmations, SA 330 for other samples):**

1. **For receivables confirmation non-responses:**
   - Test subsequent cash receipt (strongest evidence of existence and valuation)
   - Examine supporting documentation: Sales order, delivery note, invoice, customer correspondence
   - Test related transactions: Subsequent transactions with same customer
   - Analytical procedures: Customer aging, payment patterns

2. **For other non-responses/missing documentation:**
   - Examine alternative source documents
   - Test alternative population (e.g., if can't test invoice, test payment voucher)
   - Inquire of management and obtain evidence supporting inquiry response

**Treatment per SA 530:**
- Alternative procedures SUCCESSFUL (sufficient evidence obtained) → Treat as tested item with result
- Alternative procedures UNSUCCESSFUL (insufficient evidence) → Treat as misstatement (conservative approach per SA 530.10)
- Rationale: If auditor cannot verify an item, cannot conclude it's correctly stated; must assume potential error

**Document:** "For [X] items unable to test, alternative procedures performed: [describe]. Results: [Y] items resolved as correct, [Z] items remain unresolved and treated as [amount] misstatement (full recorded amount)."

### Step 4: Project Misstatements to Population

Select projection method based on sampling approach:

---

#### **A. STATISTICAL SAMPLING - MONETARY UNIT SAMPLING (MUS/PPS)**

**If NO representative errors found:**
- Projected misstatement = Rs. 0
- BUT: Statistical sampling has precision gap (sampling error)
- Upper misstatement limit = Basic precision only (no incremental allowance)
- Conclusion: Population likely not materially misstated, but some risk remains up to UML

**If representative errors found:**

**Step 4A.1: Calculate Tainting Percentage for Each Error**

Tainting = (Error amount / Recorded amount) × 100%

Example:
- Item recorded Rs. 2,00,000, audited Rs. 1,50,000 → Error Rs. 50,000 overstatement → Tainting = 50,000 / 2,00,000 = 25%
- Item recorded Rs. 3,50,000, audited Rs. 3,20,000 → Error Rs. 30,000 overstatement → Tainting = 30,000 / 3,50,000 = 8.6%

Note: For understatements, calculate tainting based on audited amount: Error / Audited amount (more conservative)

**Step 4A.2: Sort Errors by Tainting Percentage (Highest to Lowest)**

MUS evaluation requires sorting errors from most tainted to least tainted for incremental allowance calculation.

**Step 4A.3: Calculate Basic Precision**

Basic Precision = Sample interval × Reliability factor at planned confidence level

| Confidence Level | Reliability Factor (0 errors) | Reliability Factor (1 error) | Reliability Factor (2 errors) |
|------------------|------------------------------|------------------------------|------------------------------|
| 90% | 2.31 | 3.89 | 5.33 |
| 95% | 3.00 | 4.75 | 6.30 |

Sample interval = Population value / Sample size

Example: Population Rs. 5,00,00,000 / Sample 60 items = Rs. 8,33,333 sample interval

Basic precision = Rs. 8,33,333 × 3.00 (at 95%, 0 errors baseline) = Rs. 25,00,000

**Step 4A.4: Calculate Incremental Allowance**

For each error (sorted by tainting %), calculate incremental allowance:

Incremental allowance = (Tainting % - Tainting % of next lower error) × Incremental reliability factor × Sample interval

Incremental reliability factors:
- 1st error: Reliability factor for 1 error - Reliability factor for 0 errors (4.75 - 3.00 = 1.75 at 95%)
- 2nd error: Reliability factor for 2 errors - Reliability factor for 1 error (6.30 - 4.75 = 1.55 at 95%)
- 3rd error: Similar pattern continues...

**Worked Example:**

Assume 3 errors found with tainting 25%, 13%, 8.6%:

| Error Rank | Tainting % | Tainting Difference | Incremental RF | Sample Interval | Incremental Allowance |
|------------|------------|---------------------|----------------|-----------------|----------------------|
| 1st (highest) | 25% | (25% - 13%) = 12% | 1.75 | Rs. 8,33,333 | 12% × 1.75 × 8,33,333 = Rs. 1,75,000 |
| 2nd | 13% | (13% - 8.6%) = 4.4% | 1.55 | Rs. 8,33,333 | 4.4% × 1.55 × 8,33,333 = Rs. 56,848 |
| 3rd (lowest) | 8.6% | 8.6% (no lower error) | 1.41 | Rs. 8,33,333 | 8.6% × 1.41 × 8,33,333 = Rs. 1,01,117 |
| **Total Incremental Allowance** | | | | | **Rs. 3,32,965** |

**Step 4A.5: Calculate Projected Misstatement and UML**

| Component | Calculation | Amount |
|-----------|-------------|--------|
| Known representative errors (actual errors in sample) | Sum of error amounts | Rs. 1,30,000 |
| Basic precision | Sample interval × Reliability factor | Rs. 25,00,000 |
| Incremental allowance | Sum from table above | Rs. 3,32,965 |
| **Projected misstatement** | Known errors only | **Rs. 1,30,000** |
| **Upper misstatement limit (UML)** | Known errors + Basic precision + Incremental allowance | **Rs. 29,62,965** |

**Interpretation:**
- Projected misstatement = Best estimate of population error
- UML = Maximum likely error at [X]% confidence level
- If UML < Tolerable misstatement → Population acceptable
- If UML > Tolerable misstatement → Population may be materially misstated

---

#### **B. STATISTICAL SAMPLING - CLASSICAL VARIABLES SAMPLING**

**Step 4B.1: Calculate Point Estimate (Projected Misstatement)**

Point estimate = (Sample error rate) × (Population value)

Sample error rate = (Sum of misstatements in sample) / (Total sample value)

Example:
- Sample value: Rs. 3,50,00,000
- Misstatements found: Rs. 1,30,000
- Sample error rate = 1,30,000 / 3,50,00,000 = 0.371%
- Population value: Rs. 5,00,00,000
- Point estimate = 0.371% × Rs. 5,00,00,000 = Rs. 1,85,714

**Step 4B.2: Calculate Standard Deviation and Precision**

Standard deviation = √[Σ(individual errors - mean error)² / (sample size - 1)]

Precision = (Z-score at confidence level) × (Standard deviation) × √[(Population - Sample) / Population] / √Sample size

Where Z-score: 1.645 for 90% confidence, 1.96 for 95% confidence, 2.58 for 99% confidence

**Step 4B.3: Calculate Projected Misstatement Range**

Projected misstatement range = Point estimate ± Precision

Example:
- Point estimate: Rs. 1,85,714
- Precision: Rs. 15,00,000
- Range: Rs. 1,85,714 ± Rs. 15,00,000 = (Rs. -13,14,286 to Rs. 16,85,714)

**Interpretation:**
- If upper limit of range < Tolerable misstatement → Population acceptable
- If upper limit > Tolerable misstatement → Population may be materially misstated
- Note: Classical variables sampling allows for both overstatement and understatement projection

---

#### **C. NON-STATISTICAL SAMPLING**

**No mathematical projection formula exists for non-statistical sampling.** Professional judgment required.

**Step 4C.1: Calculate Indicative Projection**

While not statistically valid, calculate indicative projection for context:

Sample error rate = (Total errors found) / (Sample value)
Indicative projection = Sample error rate × (Remaining population value not tested)

Example:
- Sample tested: Rs. 3,50,00,000 (70% of population Rs. 5,00,00,000)
- Errors found: Rs. 1,30,000
- Sample error rate: 1,30,000 / 3,50,00,000 = 0.37%
- Remaining population: Rs. 1,50,00,000 (30% untested)
- Indicative projection: 0.37% × Rs. 1,50,00,000 = Rs. 55,500

Total estimated misstatement = Known errors in sample (Rs. 1,30,000) + Indicative projection (Rs. 55,500) = Rs. 1,85,500

**Step 4C.2: Apply Professional Judgment Factors**

Consider the following factors to assess whether indicative projection is reasonable:

| Factor | Assessment | Impact on Projection |
|--------|------------|---------------------|
| **Error concentration** | Are errors spread across sample or concentrated in specific segment? | If concentrated in one area and that area fully tested, projection may be overstated |
| **Population homogeneity** | Is untested population similar to tested sample? | If tested sample is high-risk segment, error rate may not apply to lower-risk untested items |
| **Nature of errors** | Are errors systemic (likely to recur) or isolated? | Systemic errors (e.g., consistent policy misapplication) → projection reasonable. Isolated errors → projection may overstate |
| **Cause of errors** | Control failure affecting all items vs. one-off mistakes | Control failure → higher confidence in projection |
| **Prior year results** | Were similar errors found last year? | Historical pattern supports projection |

**Step 4C.3: Determine Projected Misstatement with Qualitative Adjustment**

Based on factors above, state projected misstatement as:
- Point estimate if factors support projection: Rs. 1,85,500
- Range if uncertainty exists: Rs. 1,30,000 to Rs. 3,00,000 (known errors to conservative estimate)
- Known errors only if projection seems unreasonable given qualitative factors: Rs. 1,30,000

**Document:** "Non-statistical sampling projection: Indicative calculation Rs. [amount]. Considering qualitative factors [list factors], auditor's best estimate of population misstatement is Rs. [amount] because [judgment rationale]."

**Interpretation for Non-Statistical:**
- If projected amount < Tolerable misstatement → Likely acceptable
- If projected amount approaches or exceeds tolerable misstatement → May be materially misstated
- Note: Non-statistical sampling provides less precise estimate; qualitative factors heavily influence conclusion

---

### Step 5: Compare Projected Misstatement to Tolerable Misstatement

**Decision Framework:**

| Scenario | Projected Amount vs. Tolerable Misstatement | Conclusion | Action Required |
|----------|---------------------------------------------|------------|-----------------|
| **Scenario A** | UML (or point estimate + precision) < 50% of Tolerable Misstatement | Population appears acceptable | Accumulate in misstatement schedule; no additional procedures required |
| **Scenario B** | UML 50-100% of Tolerable Misstatement | Population likely acceptable but approaching threshold | Consider requesting management investigation; accumulate in misstatement schedule; monitor aggregate misstatements |
| **Scenario C** | UML > 100% of Tolerable Misstatement | Population may be materially misstated | Request management investigation OR extend sample OR perform alternative procedures (see Step 8) |
| **Scenario D** | Known errors alone > Tolerable Misstatement | Population is materially misstated | Request management correction; if refused, qualified opinion likely |

**Ask user:** "What is the tolerable misstatement for this population (typically performance materiality for this financial statement line)?"

**Document:** "Tolerable misstatement: Rs. [amount]. Projected misstatement (or UML): Rs. [amount]. Ratio: [X]% of tolerable misstatement. Conclusion: Population appears [acceptable / approaching threshold / materially misstated]."

### Step 6: Evaluate Qualitative Factors

**Quantitative projection alone is insufficient.** SA 530.15 requires considering nature and cause of misstatements.

**A. Nature of Errors**
- **Fraud vs. Error:** Any indication of intentional misstatement? Fraud indicators?
  * Management override of controls
  * Unusual journal entries
  * Side agreements, undisclosed terms
  * Pattern suggesting intentional manipulation (e.g., all errors reduce expenses just below materiality)
- **Intentional vs. Unintentional:** Does error pattern suggest deliberate action or genuine mistake?
- **Impact:** If errors are fraud-related, even amounts below tolerable misstatement may be material per SA 240

**B. Cause of Errors**
- **Systemic (Control Failure):** Errors arise from consistent process/control weakness
  * Example: Credit notes consistently not recorded around year-end → control deficiency in cut-off procedures
  * Impact: High confidence errors exist elsewhere in population; projection is reliable
  * Action: Document control deficiency for management letter; consider impact on control risk assessment
- **Isolated (One-Off Mistakes):** Errors are random, no common cause
  * Example: Data entry errors by different personnel on different dates with no pattern
  * Impact: Lower confidence in projection; errors may not be representative
  * Action: Consider whether projection overstates likely population error

**C. Pattern of Errors**
- **Directional Bias:** Are all errors in same direction (all overstatements OR all understatements)?
  * Overstatements of assets/revenue → suggests aggressive accounting or control weakness
  * Understatements of liabilities/expenses → suggests aggressive accounting
  * Mixed errors (some over, some under) → suggests random errors rather than bias
- **Concentration:** Are errors concentrated in specific period, location, transaction type, or personnel?
  * Period concentration (e.g., all errors in Dec-Jan) → suggests year-end cut-off issues
  * Type concentration (e.g., all errors in sales returns) → suggests specific process weakness
  * Personnel concentration (e.g., all errors from one branch) → suggests training or supervision issue

**D. Impact on Other Audit Areas**
- **Spillover effects:** Do errors in this area suggest issues elsewhere?
  * Receivables overstatement due to inadequate ECL → suggests provisions may be understated across the board
  * Inventory overstatement due to poor NRV analysis → suggests impairment assessments may be inadequate
  * Revenue recognition errors → suggests contract liability/deferred revenue may be misstated

**E. Link to Risk Assessment**
- **Were high-risk areas confirmed or contradicted by sample results?**
  * If area was assessed as High risk and sample found many errors → risk assessment confirmed, extended procedures justified
  * If area was assessed as Low risk but sample found numerous errors → risk assessment may have been wrong, reassess
- **Does error pattern align with identified fraud risks?**
  * Revenue recognition fraud risk + sample finding premature revenue recognition → fraud risk indicators present
  * Action: Elevate to engagement partner, consider additional fraud procedures per SA 240

**Document:** Create qualitative assessment table:

| Factor | Observation | Audit Implication |
|--------|-------------|-------------------|
| Nature | [Fraud indicators / Error / Intentional / Unintentional] | [Impact on audit conclusion] |
| Cause | [Systemic control failure / Isolated mistakes] | [Projection reliability, control deficiency reporting] |
| Pattern | [Directional bias / Concentration / Random] | [Indicates potential broader issue] |
| Impact on other areas | [List related areas potentially affected] | [Consider additional procedures in related areas] |
| Risk assessment link | [Confirms / Contradicts assessed risk] | [Reassess risk if contradicts] |

### Step 7: Evaluate Effect on Audit Conclusion

**A. Accumulation Requirement**
- All misstatements (known + projected) must be accumulated per SA 450
- Include in summary of uncorrected misstatements
- Aggregate across ALL audit areas
- Compare total uncorrected misstatements to overall materiality

**B. Individual Assessment**
- Is projected misstatement individually material (exceeds performance materiality for this area)?
- Even if below performance materiality, are qualitative factors present that make it material?

**C. Aggregate Assessment**
- When combined with misstatements from other areas, could aggregate exceed overall materiality?
- Consider both known factual errors and projected errors

**Document:** "Projected misstatement of Rs. [amount] will be accumulated in summary of uncorrected misstatements. Individual assessment: [Material / Not material]. Qualitative factors: [List]. Overall effect on audit conclusion will be determined when all areas are aggregated."

### Step 8: Determine Recommended Actions

Based on evaluation results, provide clear action recommendations:

---

#### **ACTION PATH 1: Population Appears Acceptable (UML < 50% of Tolerable Misstatement)**

**Recommended actions:**
1. **Accumulate in misstatement schedule:** Add identified misstatements to /audit:misstatement-schedule (see Section 9 below for formatted handoff)
2. **Document conclusion:** Population appears not materially misstated based on sample results
3. **Complete audit area:** Proceed to next area
4. **Monitor aggregate:** Track whether aggregate uncorrected misstatements across all areas remain below overall materiality

**No additional procedures required.**

---

#### **ACTION PATH 2: Population Likely Acceptable But Approaching Threshold (UML 50-100% of Tolerable Misstatement)**

**Recommended actions:**
1. **Request management investigation:** Communicate findings to management; request they review population for similar errors and propose corrections
2. **Accumulate in misstatement schedule:** Add to /audit:misstatement-schedule
3. **Consider extending sample (optional):** If aggregate misstatements across all areas are approaching overall materiality, consider testing additional items to refine projection
4. **Enhanced documentation:** Document why population is considered acceptable despite approaching threshold (e.g., qualitative factors suggest errors are isolated)

**Management communication template:**
"Our sample testing of [area] found [X] errors totaling Rs. [amount]. Projected to the population, estimated misstatement is Rs. [amount], which approaches performance materiality of Rs. [tolerable amount]. We request management to:
1. Review [population/specific segment] for similar errors
2. Identify root cause of errors found
3. Propose adjustments if additional errors are identified
4. Implement corrective action to prevent recurrence"

---

#### **ACTION PATH 3: Population May Be Materially Misstated (UML > Tolerable Misstatement)**

**Population appears materially misstated.** Auditor CANNOT accept population without additional action.

**Choose one or more of the following (in order of preference):**

**Option A: Request Management Investigation and Correction (PREFERRED)**
- Communicate sample findings to management immediately
- Request management perform 100% review of population (or high-risk segment) to identify and correct ALL errors
- If management corrects errors, re-evaluate: Do remaining uncorrected errors + revised projection fall below tolerable misstatement?
- Document management's investigation process and corrections made

**Option B: Extend Sample**
- Design extended sample focused on high-risk items or segments where errors were concentrated
- Typical extension: Add 50% to original sample size (e.g., if original sample was 60, test additional 30)
- Recalculate projection with combined results (original + extended sample)
- If extended sample results in UML < Tolerable misstatement → Population acceptable
- If extended sample still produces UML > Tolerable misstatement → Proceed to Option A or C

**Option C: Perform Alternative Substantive Procedures**
- If sampling was tests of details, perform substantive analytical procedures covering same assertions
- Example: If receivables confirmation sample appears misstated, perform 100% subsequent cash receipt testing
- If alternative procedure provides sufficient appropriate evidence contradicting sample results, reassess conclusion
- Document why alternative procedures provide more reliable evidence than sample

**Option D: Accumulate and Modify Opinion (LAST RESORT)**
- If management refuses to investigate/correct AND extending sample not feasible AND no alternative procedures available:
- Accumulate projected misstatement in summary of uncorrected misstatements
- Evaluate impact on audit opinion when all areas aggregated
- If aggregate exceeds overall materiality → Qualified opinion likely required per SA 705
- If unable to obtain sufficient appropriate evidence → Qualified opinion or disclaimer may be required per SA 705

**Document:** "Population appears materially misstated (UML Rs. [amount] exceeds tolerable misstatement Rs. [amount]). Recommended action: [describe chosen option]. Rationale: [explain why this option is most appropriate]."

---

### Step 9: ACCUMULATE IN MISSTATEMENT SCHEDULE (Cross-Command Handoff)

**After evaluation, format identified misstatements for input to /audit:misstatement-schedule:**

This section provides ready-to-use data for the misstatement compilation command, ensuring seamless workflow from sample evaluation to misstatement aggregation.

---

**MISSTATEMENTS IDENTIFIED - READY FOR /audit:misstatement-schedule**

**Add the following to misstatement schedule using /audit:misstatement-schedule:**

#### **A. Factual Misstatements (Verified Errors from Sample)**

| Item Reference | Amount (Dr/Cr) | FS Line Item | Nature | Source | Corrected? |
|----------------|----------------|--------------|--------|--------|------------|
| [e.g., Cust-145] | Rs. (30,000) | Trade Receivables↓ / Revenue↓ | Credit note not recorded (cut-off error) | Sample testing - receivables | No |
| [e.g., Cust-412] | Rs. (50,000) | Trade Receivables↓ / Revenue↓ | Sales return not recorded | Sample testing - receivables | No |

**Classification:** Factual misstatements (indisputable errors verified in sample)

**Total factual errors in sample:** Rs. [sum]

---

#### **B. Projected Misstatement**

| Population Tested | Projection Method | Projected Amount (Dr/Cr) | FS Line Item | Nature | Source |
|-------------------|-------------------|--------------------------|--------------|--------|--------|
| [e.g., Trade Receivables Rs. 5 crore population] | Statistical MUS - UML method | Rs. (13,30,000) | Trade Receivables↓ / Revenue↓ | Projected overstatement based on [X]% error rate in sample | Sample evaluation - receivables |

OR (if non-statistical):

| Population Tested | Projection Method | Projected Amount (Dr/Cr) | FS Line Item | Nature | Source |
|-------------------|-------------------|--------------------------|--------------|--------|--------|
| [e.g., Inventory Rs. 4 crore] | Non-statistical judgment | Rs. (6,00,000) | Inventory↓ / COGS↑ | NRV write-down projected based on 10% error rate in 60% tested | Sample evaluation - inventory |

**Classification:** Projected misstatement (auditor's best estimate of population error based on sample extrapolation)

**Projection basis:** [Describe: sample size, error rate, projection method]

---

**Qualitative Context for Misstatement Schedule:**
- **Nature:** All errors are [overstatements/understatements/mixed]; nature is [describe common theme]
- **Cause:** Errors result from [systemic control failure / isolated mistakes / estimation differences]
- **Pattern:** [Directional bias / Concentrated in period/type / Random]
- **Audit area:** [Receivables / Inventory / Payables / Revenue / etc.]

---

**Next steps:**
1. Copy the above misstatement data to /audit:misstatement-schedule command
2. Include misstatements from all other audit areas in the schedule
3. The misstatement schedule will perform three-way classification (factual, judgmental, projected), aggregate all misstatements, compare to overall materiality, and assess impact on audit opinion

---

## Output Format

**SAMPLE EVALUATION WORKPAPER**

---

### CONCLUSION

**Population: [Description, e.g., Trade Receivables Rs. 5 crore]**

**Sample results:** [X] items tested, [Y] errors found totaling Rs. [amount]

**Projected misstatement:** Rs. [amount] (or UML: Rs. [amount] for statistical sampling)

**Tolerable misstatement:** Rs. [amount] (Performance materiality for this area)

**Comparison:** Projected amount is [X]% of tolerable misstatement

**AUDIT CONCLUSION:** Population appears [**ACCEPTABLE** / **APPROACHING THRESHOLD** / **MATERIALLY MISSTATED**].

[For statistical MUS:] Upper misstatement limit (Rs. [amount]) [is within / exceeds] tolerable misstatement (Rs. [amount]).

[For non-statistical:] Projected misstatement (Rs. [amount]) based on [X]% error rate [is within / exceeds] tolerable misstatement (Rs. [amount]).

**RECOMMENDED ACTION:**
- [If acceptable:] Accumulate in misstatement schedule; no additional procedures required
- [If approaching:] Request management investigation of [specific area]; accumulate in misstatement schedule; monitor aggregate misstatements
- [If materially misstated:] Request management to perform 100% review of [population/segment] and correct all identified errors; alternatively, extend sample by [X] items OR perform alternative procedure [describe]

**Qualitative factors:**
- **Nature:** [Fraud indicators / Errors / Intentional / Unintentional]
- **Cause:** [Systemic control failure: describe / Isolated mistakes]
- **Pattern:** [All overstatements → directional bias / Mixed / Concentrated in period/type]
- **Impact:** [Affects related areas: list / Isolated to this area]

---

### DETAILED CALCULATION AND DOCUMENTATION

#### 1. Sample Testing Results Summary

| Description | Count | Value (Rs.) | % of Population |
|-------------|-------|-------------|-----------------|
| Population | [X] items | [amount] | 100% |
| Planned sample size | [X] items | [amount] | [X]% |
| Items actually tested | [X] items | [amount] | [X]% |
| Items with no exceptions | [X] items | [amount] | - |
| Items with misstatements | [X] items | [amount] | - |
| Non-responses/unable to test | [X] items | [amount] | - |
| Alternative procedures performed | [X] items | [amount] | - |
| Alternative procedures successful | [X] items | [amount] | (treated as tested) |
| Alternative procedures unsuccessful | [X] items | [amount] | (treated as misstatement) |

**Exception rate:** [X] errors in [Y] items tested = [Z]% exception rate

#### 2. Misstatements Identified

| Item Reference | Recorded Amount (Rs.) | Audited Amount (Rs.) | Misstatement (Rs.) | Tainting % | Nature | Cause | Classification |
|----------------|----------------------|---------------------|--------------------|-----------|--------|-------|----------------|
| [ID] | [amount] | [amount] | [(amount)] | [X]% | [describe] | [describe] | Representative / Anomalous |
| [ID] | [amount] | [amount] | [(amount)] | [X]% | [describe] | [describe] | Representative / Anomalous |
| **Total Representative Errors** | | | **[sum]** | | | | |
| **Anomalous Errors (excluded from projection)** | | | **[sum]** | | | | |

**Justification for anomalous classification (if any):**
- Item [ID]: [Specific evidence that error is isolated and not representative]

#### 3. Projection to Population

[Use one of the following based on sampling method]

---

**METHOD: STATISTICAL MUS**

**A. Known Misstatements**
- Representative errors in sample: Rs. [amount]
- Anomalous errors (excluded): Rs. [amount]
- Total to project: Rs. [amount]

**B. MUS Projection Calculation**

| Component | Calculation | Amount (Rs.) |
|-----------|-------------|--------------|
| Sample interval | Population / Sample size = [amount] / [X] | [result] |
| Reliability factor | [95% confidence, 0 errors baseline] | [3.00] |
| **Basic precision** | Sample interval × Reliability factor | **[amount]** |

**C. Incremental Allowance (Tainting Method)**

| Error Rank | Tainting % | Tainting Difference | Incremental RF | Sample Interval | Incremental Allowance (Rs.) |
|------------|------------|---------------------|----------------|-----------------|----------------------------|
| 1st (highest) | [X]% | [(X - Y)]% | [1.75 at 95%] | [amount] | [calculation] |
| 2nd | [Y]% | [(Y - Z)]% | [1.55 at 95%] | [amount] | [calculation] |
| 3rd | [Z]% | [Z]% | [1.41 at 95%] | [amount] | [calculation] |
| **Total Incremental Allowance** | | | | | **[sum]** |

**D. Projected Misstatement and Upper Misstatement Limit**

| Component | Amount (Rs.) |
|-----------|--------------|
| Known representative errors (in sample) | [amount] |
| Basic precision | [amount] |
| Incremental allowance | [amount] |
| **Projected misstatement** | **[known errors]** |
| **Upper misstatement limit (UML)** | **[known + precision + allowance]** |
| **Tolerable misstatement** | **[performance materiality]** |
| **UML as % of tolerable misstatement** | **[X]%** |

**Interpretation:** UML of Rs. [amount] [is within / exceeds] tolerable misstatement of Rs. [amount]. Population appears [acceptable / materially misstated].

---

**METHOD: NON-STATISTICAL**

**A. Known Errors**
- Errors found in sample: Rs. [amount]
- Sample coverage: [X]% of population value tested

**B. Indicative Projection**

| Component | Calculation | Amount (Rs.) |
|-----------|-------------|--------------|
| Sample value tested | | [amount] |
| Errors found | | [amount] |
| Sample error rate | Errors / Sample value | [X]% |
| Remaining population (untested) | Population - Sample | [amount] |
| Indicative projection | Error rate × Untested population | [amount] |
| **Total estimated misstatement** | Known errors + Projection | **[amount]** |

**C. Qualitative Adjustment**

Considering qualitative factors:
- Error concentration: [Assessment]
- Population homogeneity: [Assessment]
- Nature and cause: [Assessment]
- Prior year pattern: [Assessment]

**Auditor's best estimate:** Rs. [amount] because [judgment rationale supporting or adjusting indicative projection]

**D. Comparison to Tolerable Misstatement**

| Component | Amount (Rs.) |
|-----------|--------------|
| Projected misstatement (auditor's estimate) | [amount] |
| Tolerable misstatement | [performance materiality] |
| Projected amount as % of tolerable | [X]% |

**Interpretation:** Projected misstatement of Rs. [amount] [is within / approaches / exceeds] tolerable misstatement of Rs. [amount]. Population appears [acceptable / approaching threshold / materially misstated].

---

#### 4. Qualitative Evaluation

| Factor | Assessment | Implication |
|--------|------------|-------------|
| **Nature of errors** | [Fraud indicators / Unintentional errors / Control override / Calculation errors] | [Impact on audit conclusion] |
| **Cause of errors** | [Systemic: describe control failure / Isolated: describe one-off nature] | [Systemic errors → higher confidence in projection; Isolated → lower confidence] |
| **Pattern of errors** | [Directional bias: all overstatements/understatements / Mixed / Concentrated in specific period/type/location] | [Directional bias suggests accounting aggressiveness; Concentration suggests specific issue] |
| **Impact on other areas** | [List related audit areas potentially affected by similar issues] | [Consider additional procedures in: list areas] |
| **Link to risk assessment** | [Confirms assessed risk: High risk area + errors found / Contradicts: Low risk but errors found] | [If contradicts, reassess risk and consider impact on other areas] |
| **Fraud indicators** | [Yes: describe indicators / No] | [If fraud indicators, elevate to partner even if below tolerable misstatement] |

#### 5. Conclusion and Recommended Actions

**Audit conclusion:** Based on sample results, [describe conclusion: population appears acceptable / approaching materiality threshold / materially misstated].

[If statistical:] Upper misstatement limit of Rs. [amount] [is within / exceeds] tolerable misstatement of Rs. [amount].

[If non-statistical:] Projected misstatement of Rs. [amount] based on professional judgment [is within / exceeds] tolerable misstatement of Rs. [amount].

**Qualitative factors:** [Summarize key qualitative considerations affecting conclusion]

**Recommended actions:**

[Select appropriate action path based on evaluation - copy from Step 8]

1. [Action 1]
2. [Action 2]
3. [Action 3]

**Communication to management:** [If applicable, describe findings to be communicated and management's expected response/investigation]

**Impact on audit report:** [If population appears materially misstated and management refuses correction] Projected misstatement of Rs. [amount] will be accumulated in summary of uncorrected misstatements per SA 450. If aggregate uncorrected misstatements exceed overall materiality, qualified opinion may be required per SA 705.

**Control deficiency identified:** [If errors result from control failure] The [describe control weakness] represents a [significant deficiency / material weakness] in internal control over financial reporting. This will be communicated to management and those charged with governance per SA 265.

---

### 6. ACCUMULATE IN MISSTATEMENT SCHEDULE

[Include formatted cross-command handoff section per Step 9]

---

**Working Paper Reference:** CAF-03-SEV-[area code]-001 (Current Audit File, Fieldwork Execution, Sample Evaluation)

**Prepared by:** [Name] [Date]
**Reviewed by:** [Name] [Date]

---

## Reference to Standards

**SA 530 - Audit Sampling:**
- Para 14: Auditor shall investigate nature and cause of deviations/misstatements and evaluate their possible effect on the audit and on other areas
- Para 15: When evaluating results, auditor shall project misstatements found in sample to population (except for anomalies)
- Para A22-A27: Guidance on evaluation of sample results, qualitative aspects, and actions when population appears misstated

**SA 450 - Evaluation of Misstatements Identified During the Audit:**
- Para 5: Auditor shall accumulate misstatements identified during audit (except clearly trivial)
- Para 11: Auditor shall evaluate whether aggregate of uncorrected misstatements is material

**SA 240 - Auditor's Responsibilities Relating to Fraud:**
- Para 35: Misstatement may be indicative of fraud; if so, auditor shall evaluate implications even if amount is not material

**For full SA text and detailed requirements, reference:**
@skills/sa-standards-reference/SKILL.md (search for "SA 530", "SA 450", "SA 240")

**Related commands:**
- Before sample evaluation → /audit:sampling (determines sample size and selection method)
- After sample evaluation → /audit:misstatement-schedule (aggregates all misstatements for materiality assessment)
- Related to error causes → /audit:risk-matrix (reassess control risk if systematic failures found)

---

**Disclaimer:** This tool assists with audit workflow documentation per SA 530 but does not substitute professional audit judgment. Sample evaluation requires consideration of both quantitative projections and qualitative factors, including nature, cause, and pattern of errors. The decision to accept a population, extend sample size, or modify the audit opinion requires professional skepticism and must be reviewed by the engagement partner. All outputs must be reviewed by qualified Chartered Accountants.
