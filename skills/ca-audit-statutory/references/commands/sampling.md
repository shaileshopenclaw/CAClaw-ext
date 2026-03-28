# Sampling

Calculate audit sample size per SA 530 (Audit Sampling) for both tests of controls and tests of details, supporting statistical (MUS/PPS, classical variables) and non-statistical sampling methods with structured risk factor approach.

## Description

Sample size calculation is one of the most critical audit judgments—too small a sample and you risk missing material misstatements, too large and you waste audit resources. SA 530 provides guidance for both statistical and non-statistical sampling methods, and explicitly states that both approaches are acceptable when properly designed. The key is that sample size must be sufficient to provide reasonable basis for conclusions about the population.

**Key principle:** Sample size is NOT arbitrary. Whether using statistical formulas or professional judgment-based approaches, sample sizes must be DEFENSIBLE and COMPARABLE. A well-designed non-statistical sample should produce sample sizes similar to what statistical methods would generate for the same risk parameters. This command provides both statistical calculation methods (MUS/PPS for overstatement testing, classical variables for understatement testing) and a structured risk factor table for non-statistical sampling that produces defensible, risk-based sample sizes.

**Purpose:** This command eliminates the guesswork from sampling by providing auditors with precise sample size calculations (statistical methods) or structured risk-based guidance (non-statistical method) that can be documented and defended during quality reviews, peer reviews, or regulatory inspections.

## Required Context

Before running this command, ensure you have:

- **Population definition and completeness:** Identify the population to be tested, verify it is complete and appropriate for the audit objective (no items excluded that should be included)
- **Audit objective and assertion:** What are you testing? (e.g., existence of receivables, completeness of payables, valuation of inventory)
- **Risk assessment:** Risk matrix output showing inherent risk, control risk, and combined risk for this area/assertion (reference /audit:risk-matrix output)
- **Performance materiality:** From materiality calculation (reference /audit:materiality output)—used as tolerable misstatement for tests of details
- **Expected misstatement estimate:** Based on prior year results, interim testing, analytical review findings, or estimate if no history
- **Sampling approach preference:** Statistical or non-statistical (both are acceptable per SA 530 when properly designed)
- **Population characteristics:** Size (number of items), total value, value distribution (homogeneous or wide variation), stratification opportunities

**Ask the user:** "Provide the following information for sample size calculation:

1. **Population description:** What is the population? (e.g., All trade receivables at year-end, All sales invoices for FY 2024-25, All inventory items at 3 locations)

2. **Population size and value:**
   - Number of items in population: [X]
   - Total population value: Rs. [Y]

3. **Audit objective and assertion:** What are you testing? (e.g., Test existence and valuation of trade receivables per SA 505)

4. **Risk assessment from risk matrix:**
   - Inherent risk: [High/Medium/Low]
   - Control risk: [High/Medium/Low]
   - Combined risk: [High/Medium/Low]

5. **Performance materiality:** Rs. [X] (from materiality calculation)

6. **Expected misstatement estimate:**
   - Based on: [Prior year findings / Interim testing / Analytical review / No history]
   - Estimated amount or rate: Rs. [X] or [%]

7. **Sampling method preference:** Statistical (MUS/PPS or classical variables) or Non-statistical (structured risk factor approach)?"

## Workflow

### Step 1: Define Population and Sampling Unit

**Population:** All items subject to sampling—must be complete, appropriate, and relevant to audit objective.

**Sampling unit:** Individual item to be selected (e.g., customer balance, invoice, inventory SKU, transaction).

**Stratification considerations:** Should the population be divided into strata before sampling?

**Common stratification scenarios:**
- **High-value items:** Test 100% of items above a threshold (e.g., all receivables >Rs. 5L or >performance materiality), sample from remainder
- **Different risk levels:** Separate high-risk items (e.g., related party transactions) from low-risk items, different sample sizes
- **Different locations/categories:** Sample from each location or product category separately to ensure coverage

**Decision point - Ask the user:** "Does stratification make sense for this population? Consider:
- Are there high-value items that should be tested 100%? (Threshold: >Rs. [performance materiality or other amount])
- Are there distinct risk categories within the population?
- Are there multiple locations or product categories requiring separate sampling?

If yes, define strata and sample from each stratum separately. If no, treat as single homogeneous population."

**Verify population completeness:** Before sampling, confirm:
- Reconcile population total to general ledger or control account
- Check for sequence gaps in numbered documents (e.g., invoice numbers, PO numbers)
- Verify cutoff—population includes all items that should be included and excludes items that should not

### Step 2: Select Sampling Approach and Method

**SA 530 permits BOTH statistical and non-statistical sampling when properly designed.** Selection depends on:
- Nature of population and audit objective
- Availability of firm sampling tools/software
- Auditor's expertise with statistical methods
- Need for quantifiable precision and confidence levels

**Context-based method recommendation:**

| Audit Context | Recommended Method | Rationale |
|---------------|-------------------|-----------|
| **Testing overstatement** of assets (receivables, inventory) or revenues | Statistical: **MUS/PPS** (Monetary Unit Sampling / Probability Proportional to Size) | MUS is efficient for overstatement detection; automatically stratifies by value; assumes misstatements are more likely in larger balances |
| **Testing understatement** of liabilities (payables, provisions) or expenses | Statistical: **Classical Variables Sampling** (mean-per-unit or difference estimation) OR Non-statistical with emphasis on completeness procedures | MUS is inefficient for understatement (zero/small balances less likely selected); classical variables or non-statistical with targeted completeness testing is more appropriate |
| **Testing controls** (operating effectiveness) | Statistical: **Attribute Sampling** using expected/tolerable deviation rate tables | Control testing focuses on deviation rates, not monetary amounts; attribute sampling provides sample sizes based on expected and tolerable deviation rates |
| **Small populations** (<100 items) | Non-statistical OR 100% testing | Statistical methods less efficient for small populations; professional judgment or comprehensive testing more practical |
| **Entity with no prior issues, strong controls, low assessed risk** | Non-statistical with **Structured Risk Factor Table** | Non-statistical is acceptable and efficient when risks are low; structured risk factor approach ensures defensible sample sizes comparable to statistical methods |
| **High-risk areas, complex estimates, significant risks per SA 330** | Statistical: **MUS** (for overstatement) with larger sample OR Non-statistical with enhanced sample (toward high end of risk factor table) | Higher risk requires larger samples and more rigorous approach; statistical provides quantifiable confidence; non-statistical must be at upper range |
| **First-year engagement with limited understanding** | Statistical methods preferred (provides quantifiable confidence) OR Non-statistical at conservative end (larger samples) | Less historical knowledge increases uncertainty; statistical methods or conservative non-statistical approach provide greater assurance |

**Ask the user:** "Based on the audit context above, which method do you prefer?
- **Statistical - MUS/PPS** (recommended for testing overstatement of assets/revenues)
- **Statistical - Classical Variables** (recommended for testing understatement of liabilities/expenses)
- **Statistical - Attribute Sampling** (for tests of controls)
- **Non-statistical - Structured Risk Factor Table** (acceptable for all contexts when properly designed)

If you select statistical, proceed to Step 3. If you select non-statistical, proceed to Step 4."

### Step 3: Statistical Sampling - Calculate Sample Size

#### Option A: MUS/PPS (Monetary Unit Sampling / Probability Proportional to Size)

**When to use:** Testing overstatement of assets (receivables, inventory, investments, PPE) or revenues.

**How it works:** Each rupee in the population has equal probability of selection; larger balances automatically have higher probability of selection; efficient for detecting overstatement.

**Parameters required:**

1. **Confidence level (Risk of Incorrect Acceptance):**
   - Driven by assessed combined risk from risk matrix
   - Low combined risk → 90% confidence (10% risk of incorrect acceptance)
   - Medium combined risk → 95% confidence (5% risk)
   - High combined risk → 97.5-99% confidence (1-2.5% risk)

2. **Tolerable misstatement:**
   - For tests of details: Use **Performance Materiality**
   - If multiple procedures test same assertion, may allocate portion of PM to each procedure

3. **Expected misstatement:**
   - Based on prior year results, interim testing, or analytical review
   - If no history or expectation of no errors: Expected misstatement = Rs. 0

4. **Calculate sample size:**

**Formula (if expected misstatement = 0):**

Sample size (n) = (Population value × Reliability factor) / Tolerable misstatement

**Reliability factors for zero expected errors:**

| Confidence Level | Risk of Incorrect Acceptance | Reliability Factor |
|------------------|------------------------------|-------------------|
| 90% | 10% | 2.31 |
| 95% | 5% | 3.00 |
| 97.5% | 2.5% | 3.69 |
| 99% | 1% | 4.61 |

**Worked Example:**

Population: Trade receivables = Rs. 5,00,00,000 (500 customers)
Confidence level: 95% (Medium risk)
Reliability factor: 3.00
Tolerable misstatement: Rs. 15,00,000 (Performance materiality)
Expected misstatement: Rs. 0 (No prior year issues)

Sample size = (5,00,00,000 × 3.00) / 15,00,000 = **100 sampling intervals**

**Sampling interval** = Population value / Sample size = 5,00,00,000 / 100 = Rs. 50,000

**Selection:** Start with random number between 1 and 50,000 (e.g., 23,456), then select every 50,000th rupee thereafter (23,456, 73,456, 1,23,456, etc.). Identify which customer balance contains each selected rupee.

**If expected misstatement > 0:** Sample size increases. Use expanded MUS tables or sampling software (e.g., IDEA, ACL, Excel templates with MUS formulas). As expected misstatement approaches tolerable misstatement, sample size approaches 100% testing.

**Note on sample size:** MUS produces **number of sampling intervals**, not number of items. The actual number of items selected depends on value distribution (if many small balances, same item may be selected multiple times; count as one item but test that item).

#### Option B: Classical Variables Sampling (Mean-Per-Unit or Difference Estimation)

**When to use:** Testing understatement of liabilities (payables, provisions, accrued expenses) or when testing two-sided misstatements (both over and under).

**How it works:** Estimate population value based on sample mean or difference; requires estimate of population variability (standard deviation).

**Parameters required:**

1. **Confidence level:** Same as MUS (90%, 95%, 97.5%, 99% based on risk assessment)

2. **Tolerable misstatement:** Performance materiality

3. **Expected population standard deviation:** Requires pilot sample or estimate from prior year

4. **Calculate sample size:**

**Formula (simplified):**

n = [(Z × Population SD × Population size) / Tolerable misstatement]²

Where:
- Z = Standard normal variable for confidence level (90%=1.64, 95%=1.96, 99%=2.58)
- Population SD = Standard deviation of account balances (requires pilot sample or prior year data)

**Worked Example:**

Population: Trade payables = Rs. 2,00,00,000 (300 vendors)
Confidence level: 95% (Z = 1.96)
Tolerable misstatement: Rs. 15,00,000
Expected SD: Rs. 50,000 (from prior year data)

n = [(1.96 × 50,000 × 300) / 15,00,000]²
n = [(29,400,000) / 15,00,000]²
n = [19.6]²
n = **384 items** (impractically large for this population)

**Note:** Classical variables often produces large sample sizes; stratification or difference estimation (if auditor has independent estimate of recorded amount) can reduce sample size.

**Practical consideration:** For understatement testing (liabilities/expenses), non-statistical sampling with targeted completeness procedures (search for unrecorded liabilities, analytical procedures, cutoff testing) is often more practical than classical variables sampling.

#### Option C: Attribute Sampling (For Tests of Controls)

**When to use:** Testing operating effectiveness of controls (e.g., approval controls, segregation of duties, reconciliation controls).

**How it works:** Determine sample size based on expected and tolerable deviation rates.

**Parameters required:**

1. **Expected deviation rate:** Based on prior year or estimate (e.g., 0-1% for strong controls, 2-3% for adequate controls)

2. **Tolerable deviation rate:** Maximum acceptable rate (typically 5-10% depending on control criticality)

3. **Confidence level:** 90-95% (based on reliance to be placed on control)

**Sample size table (for 95% confidence):**

| Expected Deviation Rate | Tolerable Deviation Rate: 5% | Tolerable Deviation Rate: 7% | Tolerable Deviation Rate: 10% |
|------------------------|------------------------------|------------------------------|-------------------------------|
| 0% | 60 | 42 | 30 |
| 1% | 95 | 66 | 46 |
| 2% | 125 | 88 | 61 |
| 3% | 156 | 109 | 77 |
| 4% | 198 | 146 | 98 |

**Worked Example:**

Control: Invoice approval by manager before payment (daily control)
Expected deviation rate: 1% (based on prior year - 1 out of 100 invoices not approved)
Tolerable deviation rate: 5% (anything higher would be control deficiency)
Confidence level: 95%

Sample size from table: **95 invoices** to be selected and tested for approval signature

**Control frequency adjustment:**
- **Daily controls** (365 occurrences per year): Use table above
- **Monthly controls** (12 occurrences per year): Select 2-3 months (not full year)
- **Quarterly controls** (4 occurrences per year): Select 2 quarters
- **Annual controls** (1 occurrence per year): Test the single occurrence

### Step 4: Non-Statistical Sampling - Structured Risk Factor Table

**When to use:** All contexts where non-statistical approach is acceptable (entity with low-medium risk, strong controls, prior year clean audits, or when statistical methods are impractical).

**Key principle:** Non-statistical sample sizes should be COMPARABLE to statistical methods. This structured approach ensures defensibility.

#### A. Base Sample Size Determination (Risk Factor Table)

Determine base sample size by mapping **Risk of Material Misstatement** (from risk matrix) against **Detection Risk** required (inverse of assurance needed):

**STRUCTURED RISK FACTOR TABLE:**

| Risk of Material Misstatement (Inherent + Control) | Detection Risk: Higher (Lower Assurance Needed) | Detection Risk: Moderate | Detection Risk: Lower (Higher Assurance Needed) |
|-----------------------------------------------------|------------------------------------------------|--------------------------|-----------------------------------------------|
| **LOW** (Inherent: L, Control: L) | **15-25 items** OR 40-50% value coverage | **20-30 items** OR 50-60% value coverage | **25-35 items** OR 60-70% value coverage |
| **MEDIUM** (Inherent: M + Control: L, OR Inherent: L + Control: M, OR Inherent: M + Control: M) | **25-35 items** OR 50-60% value coverage | **30-45 items** OR 60-70% value coverage | **40-60 items** OR 70-80% value coverage |
| **HIGH** (Inherent: H + Control: M or H, OR Inherent: M + Control: H) | **40-60 items** OR 70-80% value coverage | **50-75 items** OR 75-85% value coverage | **60-100 items** OR 80-90% value coverage |

**Detection risk determination:**

- **Higher detection risk acceptable (lower assurance needed):** When other audit procedures provide substantial assurance (e.g., strong analytical procedures, external confirmations for same assertion, substantive procedures at interim with rollforward)
- **Moderate detection risk:** Standard situation—substantive procedures are primary source of assurance
- **Lower detection risk (higher assurance needed):** When this is the only substantive procedure for the assertion, or when significant risk per SA 330 requires extensive testing

**Ask the user:** "Based on risk matrix assessment, what is the Risk of Material Misstatement and required Detection Risk for this procedure?

Risk of Material Misstatement: [Low / Medium / High]
Detection Risk: [Higher / Moderate / Lower]

This determines the base sample size from the table above."

#### B. Adjust Base Sample Size for Specific Factors

After determining base sample size from risk factor table, adjust UP or DOWN based on these factors:

| Factor | Adjustment | Rationale |
|--------|------------|-----------|
| **Population size** | | |
| Very large (>5,000 items) | +10-20% | Larger populations require larger samples to be representative |
| Very small (<100 items) | -20-30% OR consider 100% testing | Small populations may not need large samples; 100% testing may be practical |
| **Stratification** | | |
| High-value items tested 100% | -20-30% (for remainder sample) | Testing all high-value items reduces risk in remaining population |
| No stratification possible | No adjustment or +10% | Cannot isolate high-risk items, entire population at risk |
| **Prior year results** | | |
| No errors/issues in prior year | -10-20% | Clean history suggests lower error expectation |
| Significant errors in prior year | +20-30% | Prior errors indicate higher risk of recurrence |
| First-year engagement (no history) | +10-20% OR use upper end of range | No history increases uncertainty |
| **Control environment** | | |
| Strong entity-level controls | -10% | Strong tone at top, effective monitoring reduces risk |
| Weak entity-level controls | +10-20% | Weak control culture increases risk across all areas |
| **Expected misstatement rate** | | |
| Expect zero or very few errors | No adjustment | Base table already assumes low expected errors |
| Expect 2-5% error rate | +20-30% | Higher expected errors require larger sample for precision |
| Expect >5% error rate | +50% OR consider 100% testing | High error expectation may require comprehensive testing |

**Document adjustment rationale:** For each adjustment applied, document WHY it is appropriate for this specific population and audit context.

**Worked Example:**

Base determination:
- Risk of Material Misstatement: Medium (Inherent: M, Control: M)
- Detection Risk: Moderate (standard substantive procedure)
- Base sample from table: **30-45 items OR 60-70% value coverage**
- Select midpoint: **37 items**

Adjustments:
1. Population size: 850 customers (moderate size) → No adjustment
2. Stratification: Testing 100% of customers >Rs. 10L (20 customers, 45% of value) → -25% adjustment = -9 items
3. Prior year: 2 small errors found (Rs. 30K total) → +10% adjustment = +4 items
4. Control environment: Adequate controls, no concerns → No adjustment
5. Expected misstatement: Low (based on prior year) → No adjustment

**Adjusted sample size: 37 - 9 + 4 = 32 items from population excluding the 20 high-value customers already tested 100%**

**Total testing: 20 customers (100%) + 32 customers (sample) = 52 customers tested, covering ~75% of total receivables value**

#### C. Documentation Requirements for Non-Statistical Sampling

SA 530 requires documentation of:

1. **Risk assessment justification:** Why assessed Risk of Material Misstatement is Low/Medium/High
2. **Base sample size determination:** Which cell in risk factor table was used and why
3. **Adjustments applied:** Which factors were considered and what adjustments made with rationale
4. **Final sample size:** Number of items and/or value coverage percentage
5. **Comparability statement:** Document that "Sample size is comparable to what statistical methods would produce for similar risk parameters" (verify by quick MUS calculation if questioned)

**Critical note:** Non-statistical sampling is NOT "pick any number that feels right." It must be STRUCTURED, RISK-BASED, and DEFENSIBLE. The risk factor table approach provides this structure.

### Step 5: Determine Selection Method

Once sample size is determined (statistical or non-statistical), select specific items to test:

**Selection methods per SA 530:**

| Method | Description | When to Use | Advantages | Disadvantages |
|--------|-------------|-------------|-----------|---------------|
| **Random selection** | Each item has equal probability of selection; use random number generator | All contexts; preferred for statistical methods | Unbiased, defensible, representative | Requires numbered population |
| **Systematic selection** | Every nth item after random start | Large populations; both statistical and non-statistical | Simple to execute, provides good coverage | Can introduce bias if population has patterns |
| **Monetary Unit Sampling** | Each rupee has equal probability; automatically stratifies by value | Statistical MUS/PPS method | Efficient for overstatement testing, automatic stratification | Less effective for understatement; requires cumulative value calculation |
| **Haphazard selection** | Select items without conscious bias | Non-statistical only; not acceptable for statistical methods | Quick and easy | Risk of unconscious bias; difficult to defend |
| **Stratified sampling** | Divide population into strata, sample from each | When population has distinct risk levels or value ranges | Ensures coverage of all strata; efficient | Requires additional effort to define and sample strata |
| **100% examination** | Test entire population | Small populations (<50 items) or high-risk items above threshold | Complete assurance | Time-consuming for large populations |

**Recommended approach for most audits:**

1. **Stratify:** Separate high-value items (>Rs. X threshold) for 100% testing
2. **Random or Systematic:** Select sample from remaining population using random or systematic method
3. **Document:** Record random seed or systematic start point for reproducibility

**Ask the user:** "How will you select the sample?

For **high-value stratum** (if applicable): Test 100% of items >Rs. [threshold]

For **remaining population**:
- Random selection using random number generator (seed: [record seed])
- Systematic selection: Every [nth] item starting from randomly selected item [X]
- MUS selection: Random start between 1 and [sampling interval], then every [sampling interval]th rupee"

### Step 6: Calculate Sample Coverage and Document

After determining sample size and selection method, calculate coverage statistics:

**Coverage metrics:**

| Metric | Calculation | Purpose |
|--------|-------------|---------|
| **Count coverage** | (Sample items / Total population items) × 100% | Shows what % of population COUNT is tested |
| **Value coverage** | (Sample value / Total population value) × 100% | Shows what % of population VALUE is tested |
| **High-value coverage** | (Items >threshold tested / Total items >threshold) × 100% | Shows coverage of high-risk stratum |

**Example:**

Population: 450 customers, Rs. 5,00,00,000 total receivables
Stratification: 25 customers >Rs. 10L (Rs. 2,50,00,000) → Test 100%
Sample from remainder: 35 customers (Rs. 1,50,00,000)

Coverage:
- Count coverage: (25 + 35) / 450 = **13.3%** of customers tested
- Value coverage: (2,50,00,000 + 1,50,00,000) / 5,00,00,000 = **80%** of value tested
- High-value coverage: 25 / 25 = **100%** of high-value customers tested

**Document in workpaper:** Sample size determination, selection method, coverage statistics, and rationale for approach.

## Output Format

**Sample Size Calculation Workpaper** containing:

---

### SAMPLE SIZE CALCULATION - [AREA/ASSERTION]

**Working Paper Reference:** CAF-03-SMP-[area code]-001

**Date:** [Date]
**Prepared by:** [Name]
**Reviewed by:** [Name]

---

### 1. SAMPLING OBJECTIVE AND POPULATION

**Audit Objective:** [Describe what you are testing, e.g., "Test existence and valuation of trade receivables per SA 505 and SA 540"]

**Assertion(s) Tested:** [Existence / Completeness / Valuation / Rights / Cut-off / Classification]

**Population Definition:** [Describe population, e.g., "All trade receivables outstanding at March 31, 2025 per aging report"]

**Population Size:**
- Number of items: [X] customers/invoices/transactions
- Total value: Rs. [Y]

**Sampling Unit:** [Customer balance / Invoice / Transaction / SKU]

**Population Completeness Verification:**
- [How population completeness was verified, e.g., "Aging report total Rs. 5,00,00,000 agrees to GL account 10200 balance Rs. 5,00,00,000"]
- [Any exclusions and rationale, e.g., "Excludes related party receivables Rs. 25,00,000 (tested separately)"]

---

### 2. RISK ASSESSMENT AND MATERIALITY INPUTS

**Reference risk matrix:** CAF-02-RSK-001

| Parameter | Value | Source/Justification |
|-----------|-------|---------------------|
| Inherent Risk | [H/M/L] | From risk matrix: [Brief rationale] |
| Control Risk | [H/M/L] | From risk matrix: [Brief rationale] |
| Combined Risk of Material Misstatement | [H/M/L] | [Combined assessment] |
| Performance Materiality (Tolerable Misstatement) | Rs. [X] | From materiality calculation CAF-01-MAT-001 |
| Expected Misstatement | Rs. [Y] OR [%] | Based on: [Prior year / Interim testing / Analytical review / No history] |

---

### 3. SAMPLING APPROACH AND METHOD SELECTION

**Selected Approach:** [Statistical / Non-Statistical]

**Selected Method:** [MUS/PPS / Classical Variables / Attribute Sampling / Structured Risk Factor Table]

**Rationale for Method Selection:**
[Why this method is most appropriate for this population and audit objective. Reference context-based recommendation from workflow. Example: "MUS selected because testing overstatement of asset (receivables), population is large (450 customers), and method automatically stratifies by value which is efficient for detecting material overstatements in larger balances per SA 530."]

---

### 4A. SAMPLE SIZE DETERMINATION - STATISTICAL METHOD

*(Include this section if statistical method selected)*

#### [MUS/PPS / Classical Variables / Attribute Sampling]

**Parameters:**

| Parameter | Value | Source/Calculation |
|-----------|-------|-------------------|
| Population value | Rs. [X] | From population definition |
| Confidence level | [90% / 95% / 97.5% / 99%] | Based on combined risk: [L=90%, M=95%, H=97.5-99%] |
| Reliability factor (for MUS) OR Z-score (for classical) | [2.31 / 3.00 / 3.69 / 4.61] OR [1.64 / 1.96 / 2.58] | From table per confidence level |
| Tolerable misstatement | Rs. [X] | Performance materiality |
| Expected misstatement | Rs. [X] or [%] | [Source and estimate] |
| **Calculated Sample Size** | **[N] items OR [N] sampling intervals** | **Formula: [Show calculation]** |

**Calculation Walkthrough:**

[Show step-by-step calculation with formula and substitution. Example for MUS:]

Sample size = (Population value × Reliability factor) / Tolerable misstatement

Sample size = (Rs. 5,00,00,000 × 3.00) / Rs. 15,00,000

Sample size = Rs. 15,00,00,000 / Rs. 15,00,000

Sample size = **100 sampling intervals**

Sampling interval = Population value / Sample size = Rs. 5,00,00,000 / 100 = **Rs. 50,000**

---

### 4B. SAMPLE SIZE DETERMINATION - NON-STATISTICAL METHOD

*(Include this section if non-statistical method selected)*

#### Structured Risk Factor Table Approach

**Step 1: Base Sample Size from Risk Factor Table**

| Risk of Material Misstatement | Detection Risk | Base Sample Size Range | Selected Base |
|-------------------------------|----------------|------------------------|---------------|
| [Low / Medium / High] | [Higher / Moderate / Lower] | [X-Y items OR Z% value coverage] | [Selected number] |

**Rationale:** [Why this cell of the table is appropriate. Example: "Medium risk of material misstatement (Inherent: M, Control: M) with Moderate detection risk (standard substantive procedure, no other procedures for this assertion) → Base sample 30-45 items. Selected midpoint: 37 items."]

**Step 2: Adjustments to Base Sample Size**

| Factor | Assessment | Adjustment | Rationale |
|--------|------------|------------|-----------|
| Population size | [Very large / Moderate / Small] | [+X% / No change / -X%] | [Justification] |
| Stratification | [100% of high-value / No stratification] | [+X% / -X%] | [Justification] |
| Prior year results | [Clean / Some errors / Significant errors / First year] | [+X% / No change / -X%] | [Justification] |
| Control environment | [Strong / Adequate / Weak] | [+X% / No change / -X%] | [Justification] |
| Expected misstatement rate | [Zero/Low / Medium / High] | [+X% / No change / +X%] | [Justification] |
| **Total Adjustment** | | **[Net +/-X items]** | |

**Step 3: Final Sample Size**

Base sample: [X] items
Adjustments: [+/- Y] items
**Final sample size: [Z] items**

**Comparability statement:** "This sample size is comparable to what statistical methods would produce for similar risk parameters. Quick check using MUS formula: (Rs. [population] × [RF 3.00 for 95%]) / Rs. [PM] = [~Z items], confirming non-statistical sample is defensible."

---

### 5. STRATIFICATION (if applicable)

**Stratification Approach:**

| Stratum | Definition | Number of Items | Total Value | Testing Approach |
|---------|------------|-----------------|-------------|------------------|
| **High-value stratum** | Items > Rs. [threshold] | [X] items | Rs. [Y] ([Z]% of total) | **100% testing** |
| **Remaining population** | Items ≤ Rs. [threshold] | [X] items | Rs. [Y] ([Z]% of total) | **Sample of [N] items** |
| **TOTAL** | All items | [X] items | Rs. [Y] (100%) | [X high-value + N sample] |

**Stratification rationale:** [Why this threshold is appropriate. Example: "Threshold of Rs. 10 lakhs selected because it captures top 5% of customers representing 50% of total value, and amount exceeds clearly trivial threshold (Rs. 75,000). Testing these 100% provides substantial coverage of population value."]

---

### 6. SAMPLE SELECTION METHOD

**Selection Technique:** [Random / Systematic / MUS / Stratified]

**Implementation:**

[For Random Selection:]
- Random number generator seed: [Record seed for reproducibility, e.g., 12345]
- Generated [N] random numbers between 1 and [population size]
- Selected corresponding items from population listing

[For Systematic Selection:]
- Sampling interval: Every [n]th item (Population size / Sample size = [X] / [Y] = [n])
- Random start point: Item #[X] (randomly selected between 1 and [n])
- Selected items: [X], [X+n], [X+2n], [X+3n]...

[For MUS Selection:]
- Sampling interval: Rs. [X] (Population value / Sample size)
- Random start: Rs. [Y] (randomly selected between 1 and sampling interval)
- Selected rupees: [Y], [Y + sampling interval], [Y + 2×sampling interval]...
- Identified customer balances containing each selected rupee

**Stratum-specific selection:**

**High-value stratum:** All [X] items selected (100% testing)

**Remaining population:** [N] items selected using [random/systematic/MUS] method from [population size] items

---

### 7. SAMPLE COVERAGE STATISTICS

| Coverage Metric | Calculation | Result |
|-----------------|-------------|--------|
| **Count coverage** | (Sample items / Total items) × 100% | [X]% of population count tested |
| **Value coverage** | (Sample value / Total value) × 100% | [Y]% of population value tested |
| **High-value coverage** | (High-value items tested / Total high-value items) × 100% | [Z]% of high-value stratum tested |

**Value composition of sample:**

| Component | Number of Items | Value | % of Total Value |
|-----------|-----------------|-------|------------------|
| High-value stratum (100%) | [X] | Rs. [Y] | [Z]% |
| Sample from remaining population | [X] | Rs. [Y] | [Z]% |
| **TOTAL SAMPLE** | **[X]** | **Rs. [Y]** | **[Z]%** |

---

### 8. SAMPLE EVALUATION APPROACH

**After testing the sample, refer to /audit:sample-evaluate command to:**

1. Evaluate whether sample results indicate population is materially misstated
2. Calculate projected misstatement (statistical methods) or evaluate sample misstatements qualitatively (non-statistical)
3. Compare projected/sample misstatements to tolerable misstatement
4. Determine whether to accept population, extend sample, or request management investigation

**For any misstatements identified in sample:**
- Add to /audit:misstatement-schedule for aggregation with other misstatements
- Consider nature and cause (systemic vs. isolated, fraud indicators)
- Assess whether control risk assessment needs revision

---

### 9. CROSS-REFERENCES

**Related audit procedures:**
- Risk assessment: /audit:risk-matrix (CAF-02-RSK-001) → Provided inherent/control risk inputs
- Materiality: /audit:materiality (CAF-01-MAT-001) → Provided performance materiality as tolerable misstatement
- Audit program: /audit:program [area] → Sample size determination for [area] procedures
- Sample evaluation: /audit:sample-evaluate → Next step after testing sample
- Misstatement schedule: /audit:misstatement-schedule → Accumulate identified misstatements

**Reference to SA 530:**
- Para 5: Sample design, size, and selection must enable auditor to obtain sufficient appropriate audit evidence
- Para 6: Sample size affected by level of sampling risk auditor is willing to accept
- Para 7: Lower the risk auditor is willing to accept, larger the sample size needed
- Para 10: Sample must be representative of population

**Alternative for statistical methods:** If firm uses sampling software (IDEA, ACL, Excel tools), reference software output and attach as appendix to this workpaper.

---

## Reference to Standards

**SA 530 - Audit Sampling:**
- Para 5: Sample design, size, and selection of items for testing must be designed to provide reasonable basis for auditor to draw conclusions about the population
- Para 6: When designing an audit sample, auditor shall consider purpose of procedure and characteristics of population
- Para 7: Sample size is affected by level of sampling risk auditor is willing to accept (lower risk = larger sample)
- Para 10: Auditor shall select items for sample in such a way that all sampling units in population have a chance of selection

**Key SA 530 principles:**
- Both statistical and non-statistical sampling are acceptable when properly designed
- Sample size must be sufficient for audit objective
- Selection must be unbiased and representative
- Results must be evaluated considering both sampling and non-sampling risk

**For full SA 530 text and detailed requirements, reference:**
@skills/sa-standards-reference/SKILL.md

**Related commands:**
- /audit:materiality → Provides performance materiality used as tolerable misstatement
- /audit:risk-matrix → Provides risk assessment inputs (inherent/control/combined risk)
- /audit:program [area] → Uses inline sample defaults; reference this command for precise calculation
- /audit:sample-evaluate → Next step after testing sample to evaluate results
- /audit:misstatement-schedule → Accumulate misstatements identified during sampling

---

**Disclaimer:** This tool assists with audit sampling per SA 530 but does not substitute professional audit judgment. Sample size calculations are based on parameters provided and assumptions about population characteristics. Auditors must verify population completeness before sampling, select items using unbiased methods, and evaluate sample results considering both quantitative and qualitative factors. Both statistical and non-statistical methods are acceptable per SA 530 when properly designed, but auditors must document the basis for sample size determination and ensure it provides sufficient appropriate audit evidence for the audit objective. The auditor remains responsible for determining appropriate sample sizes and selection methods in the specific engagement context.
