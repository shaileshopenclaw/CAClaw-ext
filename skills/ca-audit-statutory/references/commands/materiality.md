# Materiality

Calculate overall materiality, performance materiality, and trivial threshold per SA 320 (Materiality in Planning and Performing an Audit).

## Description

Materiality is the foundation of every audit - it drives sample sizes, risk assessment thresholds, and misstatement evaluation. SA 320 requires auditors to determine materiality at the planning stage based on professional judgment considering both quantitative and qualitative factors. This command provides a structured framework for benchmark selection, calculation, performance materiality determination, trivial threshold setting, and documentation of professional judgment rationale.

**Key principle:** Materiality is not a fixed formula - it requires entity-specific professional judgment. Different entities require different benchmarks and percentages based on their characteristics, users' needs, and the auditor's understanding of the business.

## Required Context

Before running this command, ensure you have:

- **Prior year audited financial statements:** Last 2-3 years for trend analysis
- **Current year draft/provisional financial statements:** Latest management accounts with key financial highlights
- **Entity classification:** Whether profit-making or loss-making (affects benchmark selection)
- **Industry sector:** Industry norms affect acceptable percentage ranges
- **Users of financial statements:** Lenders with covenants, regulators, minority shareholders, institutional investors, retail shareholders
- **Prior year materiality:** For continuing engagements, prior year calculations and any revisions made during the audit
- **Understanding of entity's business:** Business model, revenue streams, key performance indicators

**Ask user:** "Provide the following financial data for materiality calculation:
- Current year draft: PBT, Revenue, Total Assets, Net Assets/Equity
- Prior year audited: PBT, Revenue, Total Assets, Net Assets/Equity
- Prior year-1 audited: PBT, Revenue (for volatility assessment)
- Entity type: Profit-making/Loss-making, Industry sector, Key users of financial statements"

## Workflow

### Step 1: Benchmark Selection Decision Tree

**DO NOT use a fixed formula.** Select the most appropriate benchmark based on entity characteristics.

**Ask user:** "What is the entity's primary characteristic? Select the option that best describes this entity:

a. **Profit-oriented with stable profitability** → PBT benchmark (5-10%)
   - Suitable for: Manufacturing, services, trading entities with consistent profit margins
   - Look for: PBT volatility <20% year-on-year over last 2-3 years

b. **Revenue-focused / volatile profits / loss-making** → Revenue benchmark (0.5-2%)
   - Suitable for: Startups, high-growth entities, entities with low margins, loss-making entities, revenue-based lending covenants
   - Look for: PBT volatility >20%, current year losses, thin profit margins (<5%)

c. **Asset-intensive entity** → Total Assets benchmark (1-2%)
   - Suitable for: Real estate, infrastructure, investment companies, holding companies, entities where asset values are key focus
   - Look for: Total Assets significantly exceeds Revenue (asset turnover ratio <0.5)

d. **Not-for-profit / Section 8 company** → Net Assets/Equity benchmark (2-5%)
   - Suitable for: NGOs, trusts, Section 8 companies, charitable organizations
   - Look for: No profit motive, focus on net worth preservation

e. **Trading entity where gross margin is key metric** → Gross Profit benchmark (3-5%)
   - Suitable for: Pure trading entities, retail chains where gross margin is critical KPI
   - Look for: Revenue-focused but gross margin is more stable than net profit"

**Decision point:** If entity has unusual characteristics, consider:
- **First year of operations:** Use Revenue benchmark (no historical profitability pattern)
- **Significant non-recurring items:** Normalize PBT by removing one-time gains/losses before applying percentage
- **Industry in distress:** Consider using average of last 2-3 years or Revenue benchmark
- **Restructuring/turnaround:** Use normalized profitability or Revenue benchmark

**Document:** "Why is this benchmark most appropriate for THIS entity?"

*Require entity-specific rationale, not generic statements like "We selected PBT because it is commonly used." Instead: "We selected PBT because the entity has stable profitability (PBT variance of 8% over last 3 years), operates in a mature manufacturing industry, and lenders focus on profit-based debt service coverage ratios."*

### Step 2: Percentage Selection Within Range

Present the acceptable range for the selected benchmark:

| Benchmark | Typical Range | Common Selection |
|-----------|---------------|------------------|
| PBT | 5-10% | 5% for stable entities, 7-10% for volatile |
| Revenue | 0.5-2% | 0.5-1% depending on margins |
| Total Assets | 1-2% | 1-1.5% |
| Net Assets/Equity | 2-5% | 3-5% for not-for-profit |
| Gross Profit | 3-5% | 3-4% |

**Ask user:** "Considering the entity's risk profile, industry norms, and users' sensitivity to misstatements, where within the range is appropriate for this entity?"

**Factors affecting percentage choice:**

**Select LOWER end of range when:**
- Regulated entity (banks, NBFCs, insurance - regulators focus on capital adequacy/solvency)
- Public interest entity or listed company (large number of external users)
- Lender covenants with tight thresholds (e.g., debt-to-equity ratio covenant at 2:1 where small change matters)
- First-year audit (no historical understanding to justify higher percentage)
- High-risk industry or entity (construction, real estate development, financial services)
- Users are known to be particularly sensitive to misstatements (institutional investors, activist shareholders)

**Select HIGHER end of range when:**
- Owner-managed private limited company (few external users, owners directly involved in operations)
- Stable industry with low inherent risk (mature manufacturing, established services)
- Low risk assessment of entity (strong controls, competent management, no prior issues)
- Recurring engagement with good track record (no material misstatements in prior years)
- Users focus on trends rather than absolute numbers (revenue growth matters more than precise profit figure)

**Decision point:** Selected percentage must be documented with entity-specific justification.

**Document:** "We selected [X%] within the [benchmark] range because [entity-specific factors]. This percentage is appropriate given [users' needs/risk profile/industry norms]."

### Step 3: Calculate Overall Materiality

Present calculation in table format:

| Component | Benchmark | Amount (Rs.) | Percentage Applied | Calculated Materiality (Rs.) | Rounded Materiality (Rs.) |
|-----------|-----------|--------------|-------------------|-----------------------------|-----------------------------|
| Overall Materiality | [e.g., PBT] | [amount from financials] | [X%] | [amount × percentage] | [practical round figure] |

**Rounding guidance:** Materiality should be rounded to a practical working figure for ease of use during the audit:
- Materiality Rs. 47,234 → Round to Rs. 45,000 or Rs. 50,000
- Materiality Rs. 1,23,456 → Round to Rs. 1,20,000 or Rs. 1,25,000
- Materiality Rs. 8,92,000 → Round to Rs. 9,00,000

**Cross-check reasonableness:** Is the calculated amount reasonable in context?
- Materiality of Rs. 50,000 for a Rs. 100 crore revenue company seems too low (0.005% of revenue)
- Materiality of Rs. 10 lakhs for a Rs. 5 crore revenue company seems too high (2% of revenue)
- If calculation produces unreasonable result, reconsider benchmark or percentage

**For entities with multiple years of data:** Consider whether to use:
- Current year draft figures (most relevant for year-end balances)
- Prior year audited figures (more reliable, less subject to manipulation)
- Average of 2-3 years (smooths volatility, appropriate for entities with fluctuating results)

**Document:** "Materiality calculated on [current year draft/prior year audited/3-year average] [benchmark] because [rationale]."

### Step 4: Calculate Performance Materiality

**CRITICAL:** Performance materiality must be 50-75% of overall materiality. NEVER set performance materiality above 75%.

**Purpose:** Performance materiality is the amount(s) set below overall materiality to reduce to an appropriately low level the probability that the aggregate of uncorrected and undetected misstatements exceeds overall materiality (SA 320.11).

**Decision framework:**

| Risk Profile | Performance Materiality % | When to Use |
|--------------|---------------------------|-------------|
| 75% of overall | First-year engagement with NO history of issues, low-risk entity, strong control environment, few prior year adjustments, expectations of very few misstatements | Use cautiously - high percentage leaves little margin for error |
| 60-70% of overall | Medium-risk entity, adequate control environment, some prior year adjustments (2-5 items), established relationship, normal expectations of misstatements | Most common selection for routine engagements |
| 50% of overall | High-risk entity, weak control environment, history of numerous adjustments (>5 items), significant accounting estimates requiring judgment, many locations/components, expectations of multiple misstatements | Conservative approach providing larger margin |

**Ask user:** "Based on the preliminary risk assessment and control environment understanding, what percentage of overall materiality is appropriate for performance materiality?

Consider:
- How many misstatements were found in prior year audit?
- What is the strength of the control environment? (Strong/Adequate/Weak)
- How many significant accounting estimates are there? (Few/Some/Many)
- Are there multiple locations or components? (Single location/2-3 locations/Many locations)
- First-year engagement or continuing? (First year suggests 75%, continuing with issues suggests 50%)"

Calculate performance materiality:

| Component | Overall Materiality (Rs.) | Percentage | Performance Materiality (Rs.) |
|-----------|---------------------------|------------|-------------------------------|
| Performance Materiality | [from Step 3] | [50-75%] | [result] |

**Document:** "Performance materiality set at [X%] of overall materiality because [entity risk profile/control environment/prior year experience]. This percentage provides [adequate/conservative/cautious] margin for aggregation of uncorrected and undetected misstatements."

### Step 5: Calculate Trivial Threshold (Clearly Trivial Amount)

**Range:** 3-5% of overall materiality

**Purpose:** Amounts below the clearly trivial threshold are clearly inconsequential, whether taken individually or in aggregate, and need not be accumulated in the misstatement summary schedule (SA 450.5).

**Guidance:**
- **3% of overall materiality:** For higher risk engagements, first-year audits, entities where accumulation of small items is important
- **5% of overall materiality:** For lower risk engagements, strong control environments, continuing engagements with no issues

| Component | Overall Materiality (Rs.) | Percentage | Trivial Threshold (Rs.) |
|-----------|---------------------------|------------|-------------------------|
| Trivial Threshold | [from Step 3] | [3-5%] | [result] |

**Important:** "Clearly trivial" is not the same as "not material." Clearly trivial matters are amounts that would not need to be accumulated because the auditor expects that accumulation would not have a material effect on the financial statements.

**Example:** If overall materiality is Rs. 10 lakhs:
- Trivial threshold at 5% = Rs. 50,000
- This means individual items below Rs. 50,000 need not be added to the misstatement summary
- However, if 20 items of Rs. 40,000 each are found (total Rs. 8 lakhs), this is NOT trivial and would require evaluation

**Document:** "Trivial threshold set at [X%] of overall materiality. Individual misstatements below Rs. [amount] will not be accumulated unless they are indicative of systemic control deficiencies or when accumulation may exceed materiality."

### Step 6: Qualitative Factors Assessment

**Materiality is not purely quantitative.** Even if a misstatement is below quantitative materiality, it may be material due to qualitative factors (SA 320.A3).

**Ask user:** "Evaluate the following qualitative factors for this entity. Are there any factors that should LOWER materiality below the quantitatively calculated amount or make smaller amounts material?"

**Qualitative factors checklist:**

1. **Regulatory requirements:**
   - Minimum net worth requirements for NBFCs (RBI regulations)
   - Capital adequacy ratios for banks
   - Solvency margin for insurance companies
   - Listing agreement minimum public shareholding requirements
   - *Document:* If entity is close to regulatory threshold, materiality should be set below the gap to threshold

2. **Debt covenants:**
   - Debt-to-equity ratio covenants (e.g., must maintain <2:1)
   - Interest coverage ratio requirements
   - Minimum tangible net worth covenants
   - Dividend restriction clauses
   - *Document:* If covenant threshold is tight (e.g., current ratio is 2.1:1 vs. covenant of 2:1), materiality should be set well below Rs. [gap amount]

3. **Related party transaction disclosure thresholds:**
   - Section 188 materiality thresholds (10% of turnover, 10% of net worth)
   - Listing regulation thresholds for RPT disclosures
   - *Document:* Misstatements affecting RPT disclosure materiality may be qualitatively material

4. **Statutory thresholds:**
   - Section 135 CSR applicability (Rs. 5 crore net profit threshold)
   - Section 185/186 loan limits (generally 60% of paid-up capital + free reserves + securities premium)
   - Internal financial controls reporting threshold (listed entities, prescribed class)
   - *Document:* Misstatements affecting statutory applicability are material regardless of quantitative materiality

5. **Tax implications:**
   - Items that may trigger tax reassessment (disallowable expenses, transfer pricing adjustments)
   - Loss of tax benefits (80IA, 80IB deductions)
   - MAT credit implications
   - *Document:* Tax-consequential items may be qualitatively material

6. **User expectations:**
   - Institutional shareholders focus on EPS trends
   - Minority shareholders concerned with dividend distribution
   - Lenders focus on cash generation and debt service ability
   - *Document:* Items affecting key metrics users rely on may be qualitatively material even if below quantitative threshold

7. **Fraud indicators:**
   - Any amount involving fraud is material (SA 240)
   - Intentional misstatements to manipulate EPS, meet covenants, or hide losses
   - *Document:* Qualitative materiality applies regardless of amount

**Decision point:** After considering qualitative factors, is the quantitatively calculated materiality appropriate, or should it be lowered?

**Document:** "Qualitative factors assessment: [List applicable factors from above]. Conclusion: Overall materiality [remains at Rs. X as calculated / is reduced to Rs. Y to account for [specific qualitative factor]]."

### Step 7: Materiality Revision Guidance

**SA 320.12-13 requires materiality revision when:**
- During the audit, auditor becomes aware of information that would have caused a different determination of materiality at planning stage
- Actual results differ significantly from planning assumptions
- Circumstances change (new lender, regulatory action, major litigation)

**Monitoring framework:**

Create a materiality revision monitoring table (populate during the audit):

| Date | Event/Information | Planning Assumption | Actual Result | Variance % | Revision Decision | Revised Materiality |
|------|-------------------|---------------------|---------------|------------|-------------------|---------------------|
| [date] | [what changed] | PBT Rs. X | PBT Rs. Y | [(Y-X)/X×100%] | Revised/No revision | Rs. [new amount] |

**Common revision triggers:**

1. **Actual results significantly different from draft:**
   - Planned: PBT Rs. 20 lakhs (draft), Actual: PBT Rs. 3 lakhs (loss after adjustments)
   - Variance: -85% → **Revision required**
   - Action: Recalculate materiality on actual PBT or switch to Revenue benchmark

2. **Change in entity circumstances:**
   - New lender with restrictive covenants obtained during year
   - Regulatory investigation commenced
   - Major litigation filed against entity
   - Action: Reassess qualitative factors, may require lower materiality

3. **Planned IPO/significant transaction:**
   - Entity announces IPO plan during audit
   - Merger/acquisition in process
   - Action: Consider public interest entity status, lower materiality

**Decision framework:**

| Variance from Planning | Action Required |
|------------------------|-----------------|
| <10% variance | Generally no revision needed unless qualitative factors changed |
| 10-25% variance | Reassess materiality, consider revision if variance is systematic (not one-off item) |
| >25% variance | Revision strongly recommended, recalculate on actual figures |

**If revision LOWERS materiality:**
- **CRITICAL:** Evaluate whether additional audit procedures are needed for areas already tested
- If testing was performed at higher performance materiality, additional samples may be required
- Document: "Materiality revised from Rs. X to Rs. Y. Areas already tested: [list]. Additional procedures required: [describe or note 'none if performance materiality provided adequate margin']."

**If revision RAISES materiality:**
- No additional procedures typically needed (testing already performed at lower threshold provides more assurance)
- Document: "Materiality revised upward from Rs. X to Rs. Y based on actual results. No additional procedures required as testing performed at lower threshold."

**Document all revisions:** Maintain revision log with date, reason, old vs. new amounts, and impact on audit approach.

## Output Format

**1. Materiality Calculation Schedule**

| Component | Benchmark | Base Amount (Rs.) | Percentage | Calculated Amount (Rs.) | Rounded Amount (Rs.) |
|-----------|-----------|-------------------|------------|-------------------------|----------------------|
| **Overall Materiality** | [PBT/Revenue/Total Assets/etc.] | [amount] | [X%] | [calculation] | **[Final OM]** |
| **Performance Materiality** | Overall Materiality | [OM from above] | [50-75%] | [calculation] | **[Final PM]** |
| **Trivial Threshold** | Overall Materiality | [OM from above] | [3-5%] | [calculation] | **[Final Trivial]** |

**2. Professional Judgment Rationale Narrative**

**Benchmark Selection:**
[Entity-specific rationale for selecting this benchmark - not generic statements. Include entity characteristics, users' focus, industry norms.]

**Percentage Selection:**
[Entity-specific rationale for selecting this percentage within the acceptable range. Include risk profile, user sensitivity, industry factors, first-year vs. continuing engagement.]

**Performance Materiality Determination:**
[Rationale for selecting percentage of overall materiality. Include assessment of risk environment, control strength, prior year experience, expected number of misstatements.]

**Qualitative Factors:**
[Document qualitative factors considered: regulatory thresholds, debt covenants, statutory thresholds, tax implications, user expectations. Note whether any factor required lowering of quantitative materiality.]

**3. Comparison to Prior Year (for continuing engagements)**

| Item | Prior Year | Current Year | Change | Explanation |
|------|------------|--------------|--------|-------------|
| Benchmark used | [PBT/Revenue/etc.] | [PBT/Revenue/etc.] | [Same/Changed] | [Why changed if applicable] |
| Base amount (Rs.) | [amount] | [amount] | [%] | - |
| Overall Materiality (Rs.) | [amount] | [amount] | [%] | [Explain significant change] |
| Performance Materiality (Rs.) | [amount] | [amount] | [%] | - |

**4. Materiality Revision Monitoring Table (blank initially)**

To be populated during the audit if revision triggers occur:

| Date | Event/Information | Planning Assumption | Actual Result | Variance % | Revision Decision | Revised Materiality |
|------|-------------------|---------------------|---------------|------------|-------------------|---------------------|
| - | - | - | - | - | - | - |

**Working Paper Reference:** CAF-01-MAT-001 (Current Audit File, Planning phase, Materiality)

**Prepared by:** [Name] [Date]
**Reviewed by:** [Name] [Date]

## Reference to Standards

**SA 320 - Materiality in Planning and Performing an Audit:**
- Para 10: Determine materiality for financial statements as a whole at planning stage
- Para 11: Determine performance materiality for purposes of assessing risks and designing further procedures
- Para 12-13: Revise materiality if become aware of information during audit that would have caused different determination

**For full SA 320 text and detailed requirements, reference:**
@skills/sa-standards-reference/SKILL.md (search for "SA 320")

**Related commands:**
- After materiality determination → /audit:audit-strategy (materiality feeds into overall strategy)
- During audit execution → /audit:audit-plan (performance materiality drives sample sizes)
- During completion → /audit:misstatements (trivial threshold determines accumulation)

---

**Disclaimer:** This tool assists with audit workflow documentation per SA 320 but does not substitute professional audit judgment. Materiality determination requires consideration of entity-specific circumstances and professional skepticism. All materiality calculations and rationale must be reviewed and approved by the engagement partner. The auditor remains responsible for compliance with Standards on Auditing and professional standards.
