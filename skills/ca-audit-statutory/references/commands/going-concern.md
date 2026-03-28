# Going Concern

Assess entity's ability to continue as a going concern per SA 570 (Revised 2024) - Going Concern, evaluating indicators, management plans, and impact on audit report.

## Description

SA 570 (Revised 2024), effective for periods beginning on or after December 15, 2026, establishes enhanced procedures and reporting requirements for going concern assessment. The revised standard requires auditors to perform more robust procedures including explicit evaluation of management's assessment, enhanced documentation, and extended consideration of broader economic and market conditions. Going concern is a pervasive issue affecting the entire financial statements — material uncertainty requires prominent disclosure and separate audit report section.

**Key principle:** Going concern assessment is not a snapshot at balance sheet date. It requires forward-looking judgment covering at least 12 months from balance sheet date (but longer if indicators suggest), evaluation of management's mitigation plans with professional skepticism, and consideration of post-balance-sheet events.

## Required Context

Before running this command, ensure you have:

- **Financial statements:** Current year and prior 2-3 years for trend analysis (recurring losses, negative cash flows, declining ratios)
- **Cash flow forecasts:** Management's projections for at least 12 months from balance sheet date with underlying assumptions documented
- **Management's going concern assessment:** Required per Ind AS 1 — management must disclose basis for preparation on going concern assumption
- **Loan agreements and covenants:** Detailed terms including DSCR requirements, leverage ratios, net worth covenants, security, acceleration clauses
- **Management's mitigation plans:** If indicators present — equity infusion plans, debt restructuring negotiations, asset disposal plans, cost reduction initiatives with supporting evidence (board resolutions, term sheets, letters of intent)
- **Prior year going concern assessment:** For recurring engagements — compare current vs. prior year indicators, assess whether prior year plans were executed
- **Post-year-end information:** Board minutes, interim financials, bank facility status, significant events after balance sheet date

**Ask user:** "Provide the following information for going concern assessment:
1. Financial statements (current year + prior 2-3 years) with key ratios (current ratio, debt-to-equity, interest coverage, DSCR)
2. Management's cash flow forecast for next 12 months with key assumptions (revenue growth, margins, working capital)
3. Loan agreements — list all facilities with covenant details (DSCR thresholds, leverage limits, net worth requirements)
4. Any indicators present (losses, defaults, customer losses, covenant breaches, litigation)?
5. Management's mitigation plans if indicators exist (equity infusion, debt restructuring, asset sales, cost cuts)
6. Prior year going concern assessment (if recurring engagement) — were plans executed?"

## Workflow

### Step 1: Overall Going Concern Risk Assessment (Conclusion First)

**Ask user to provide financial highlights for initial risk triage:**

Based on preliminary review of entity's financial position:

- Recent profitability trend: [Profit/Loss over last 3 years]
- Operating cash flow trend: [Positive/Negative]
- Current ratio: [X:1]
- Debt-to-equity ratio: [X:1]
- Loan covenant compliance: [Compliant/Breached — which covenants?]
- Major events: [Loss of key customer, regulatory action, debt default, litigation?]

**Overall Going Concern Risk Assessment:** [HIGH / MEDIUM / LOW]

**Summary narrative (2-3 sentences):** [State whether material uncertainty exists, key indicators driving assessment, whether management plans are feasible]

**Example:**
> Overall Going Concern Risk: **HIGH**
> The Company has incurred recurring operating losses (Rs. 30L in FY24, Rs. 20L in FY23, Rs. 15L in FY22) and negative operating cash flows. The Company has also breached its DSCR covenant (actual: 0.85 vs. required: 1.25) resulting in bank notice of default. A major customer representing 30% of revenue terminated their contract in February 2026. Management's mitigation plans (promoter equity infusion, debt restructuring) are not yet binding, and prior year forecasts have historically been optimistic (overstated by 20-25%). These factors, individually and in aggregate, indicate the existence of a material uncertainty that may cast significant doubt on the entity's ability to continue as a going concern.

### Step 2: Indicator Checklist Review (Structured Tables)

Review all three indicator categories per SA 570 (Revised 2024). For each indicator, assess: Is it present? What evidence supports this? How severe is the indicator?

**A. Financial Indicators Checklist**

| # | Indicator | Present? (Yes/No/NA) | Evidence/Details | Severity (High/Medium/Low/N/A) |
|---|-----------|----------------------|------------------|--------------------------------|
| 1 | Negative net worth (total liabilities exceed total assets) | [Yes/No/NA] | [If Yes: Net worth Rs. X (negative). If No: Net worth Rs. Y (positive)] | [H/M/L/N/A] |
| 2 | Negative working capital (current liabilities exceed current assets) | [Yes/No/NA] | [Current ratio: X:1; Working capital Rs. Y] | [H/M/L/N/A] |
| 3 | Operating losses — recurring or substantial | [Yes/No/NA] | [FY24: (Rs. XL), FY23: (Rs. YL), FY22: (Rs. ZL)] | [H/M/L/N/A] |
| 4 | Negative cash flows from operations | [Yes/No/NA] | [Operating cash flow FY24: (Rs. XL)] | [H/M/L/N/A] |
| 5 | Inability to pay debts when due (defaults on loans, overdue payables) | [Yes/No/NA] | [Loan installments overdue by X days; Trade payables average age Y days vs. credit terms Z days] | [H/M/L/N/A] |
| 6 | Dividend arrears on preference shares | [Yes/No/NA] | [Preference dividend of Rs. X unpaid for Y years] | [H/M/L/N/A] |
| 7 | Adverse key financial ratios (current <1.0, DSCR <1.25, interest coverage <1.0, excessive leverage) | [Yes/No/NA] | [Current ratio: X; DSCR: Y (covenant: Z); Interest coverage: A; Debt-to-equity: B] | [H/M/L/N/A] |
| 8 | Inability to obtain financing or refinancing; suppliers demanding COD; loss of credit facilities | [Yes/No/NA] | [Bank declined facility enhancement; Top 3 suppliers moved to advance payment terms] | [H/M/L/N/A] |

**B. Operating Indicators Checklist**

| # | Indicator | Present? (Yes/No/NA) | Evidence/Details | Severity (High/Medium/Low/N/A) |
|---|-----------|----------------------|------------------|--------------------------------|
| 1 | Loss of key management without replacement | [Yes/No/NA] | [CFO resigned in Month; No replacement identified] | [H/M/L/N/A] |
| 2 | Loss of major customers or suppliers (revenue/supply concentration risk materialized) | [Yes/No/NA] | [Customer ABC (X% of revenue) terminated contract; Supplier XYZ (only source of Key Component) ceased supply] | [H/M/L/N/A] |
| 3 | Labor difficulties (strikes, inability to attract/retain skilled workforce, union disputes) | [Yes/No/NA] | [Strike for X days affecting production; High attrition in critical roles] | [H/M/L/N/A] |
| 4 | Shortage of critical inputs (raw materials, components, utilities) affecting operations | [Yes/No/NA] | [Raw material ABC shortage causing production delays; Power supply restrictions] | [H/M/L/N/A] |
| 5 | Loss of key franchise, license, or regulatory approval | [Yes/No/NA] | [Manufacturing license suspended; Patent expired; Regulatory approval withdrawn] | [H/M/L/N/A] |
| 6 | Emergence of successful competitor or technological obsolescence | [Yes/No/NA] | [Market share declined from X% to Y%; New competitor with disruptive technology] | [H/M/L/N/A] |
| 7 | Obsolescence of inventory or products (unmarketable goods, excess slow-moving stock) | [Yes/No/NA] | [Inventory aging >180 days: Rs. X (Y% of total); Product line discontinued] | [H/M/L/N/A] |

**C. Other Indicators Checklist**

| # | Indicator | Present? (Yes/No/NA) | Evidence/Details | Severity (High/Medium/Low/N/A) |
|---|-----------|----------------------|------------------|--------------------------------|
| 1 | Non-compliance with capital or regulatory requirements (capital adequacy, solvency, net worth thresholds) | [Yes/No/NA] | [Net worth Rs. X vs. required Rs. Y for NBFC registration; Capital adequacy ratio Z% vs. required A%] | [H/M/L/N/A] |
| 2 | Pending litigation with potentially material adverse outcome (tax disputes, contract claims, product liability) | [Yes/No/NA] | [Tax demand Rs. X (Y% of net worth); Lawsuit claim Rs. A with adverse legal opinion] | [H/M/L/N/A] |
| 3 | Changes in legislation or government policy adversely affecting business model | [Yes/No/NA] | [New environmental regulations require Rs. X capex; GST rate change reduces margins by Y%] | [H/M/L/N/A] |
| 4 | Breach of loan covenants (DSCR, leverage, net worth, current ratio, tangible net worth) | [Yes/No/NA] | [DSCR: X (covenant: Y); Debt-to-equity: A (covenant: B); Bank issued notice of default] | [H/M/L/N/A] |
| 5 | Withdrawal of financial support by creditors/promoters (loan recall, reduced credit limits, promoter refused infusion) | [Yes/No/NA] | [Bank recalled working capital facility; Promoters declined board request for equity infusion] | [H/M/L/N/A] |
| 6 | Force majeure events (natural disasters, pandemics, geopolitical events, fire, flood) impacting operations | [Yes/No/NA] | [Factory destroyed by fire (uninsured loss Rs. X); COVID-19 lockdown affecting operations] | [H/M/L/N/A] |

**Indicators Summary:**

- Financial indicators: [X out of 8 present] — [List which indicators present and severity]
- Operating indicators: [Y out of 7 present] — [List which indicators present and severity]
- Other indicators: [Z out of 6 present] — [List which indicators present and severity]

**Cross-reference to /audit:analytical-review:** [Note: Trends identified in analytical review (declining ratios, losses, negative cash flows) should be mapped to financial indicators above. For example, if analytical review showed current ratio declining from 1.8 to 1.1 to 0.9, this confirms Indicator A2 (negative working capital).]

**Cross-reference to /audit:risk-matrix:** [Note: Per risk matrix, if going concern indicators are present in specific areas (e.g., receivables collectibility concerns, inventory obsolescence), those risk assessments should inform severity rating here.]

### Step 3: Assessment Period Determination

**SA 570 (Revised 2024) requires assessment for at least 12 months from balance sheet date, but consider longer period if indicators suggest.**

**Assessment period for this entity:**

- **Balance sheet date:** [Date]
- **Minimum assessment period per SA 570:** 12 months from balance sheet date → [Date + 12 months]
- **Extended period considered (if applicable):** [Longer period if significant indicators exist or debt maturity beyond 12 months]
- **Rationale for assessment period:** [Why 12 months is sufficient OR why extended period is necessary]

**SA 570 (Revised 2024) enhancement:** Auditor must consider broader economic and market conditions affecting the entity's industry and operating environment. Document macro factors: economic growth forecasts, industry trends, interest rate environment, regulatory changes.

**Broader economic/market conditions assessment:**
- Economic environment: [GDP growth forecast, inflation, interest rates]
- Industry conditions: [Industry growth, competitive landscape, regulatory changes]
- Impact on entity: [How macro conditions affect going concern indicators and management's plans]

### Step 4: Management Plan Evaluation (Professional Skepticism Required)

**SA 570 (Revised 2024) requires thorough evaluation of management's mitigation plans with enhanced professional skepticism.**

For EACH management plan, assess:

**Management Plan 1: [e.g., Equity Infusion from Promoters]**

| Evaluation Criteria | Assessment | Evidence/Details |
|---------------------|------------|------------------|
| **Feasibility** — Is the plan realistic and achievable? | [Feasible / Questionable / Not Feasible] | [Promoters have net worth of Rs. X; Prior infusions made in [years]; No personal guarantees limiting their capacity] |
| **Timeline** — Can the plan be implemented within assessment period? | [Yes / Uncertain / No] | [Board resolution passed [date]; Funds expected by [date]; Within 12-month period? Y/N] |
| **Binding commitment** — Is there a binding commitment, or just intent? | [Binding / Conditional / Intent Only] | [Signed commitment letter? Shareholder resolution? Board approval? OR Just discussion in board minutes?] |
| **Track record** — Has management successfully executed similar plans before? | [Positive / Mixed / Negative] | [Prior year: Promised Rs. Y infusion, delivered Rs. Z; Delayed by X months] |
| **Supporting evidence** — What documentation supports the plan? | [Strong / Adequate / Weak] | [Documents obtained: Board resolution / Commitment letter / Term sheet / Legal opinion / Valuation report / Bank approval letter] |

**Management Plan 2: [e.g., Debt Restructuring with Lenders]**

| Evaluation Criteria | Assessment | Evidence/Details |
|---------------------|------------|------------------|
| **Feasibility** | [Feasible / Questionable / Not Feasible] | [Bank has indicated willingness in principle? Formal negotiations commenced? Previous restructurings successful?] |
| **Timeline** | [Yes / Uncertain / No] | [Discussion stage / Term sheet stage / Agreement stage; Expected completion [date]] |
| **Binding commitment** | [Binding / Conditional / Intent Only] | [Signed term sheet / In-principle approval letter / Just verbal discussion?] |
| **Track record** | [Positive / Mixed / Negative] | [Entity successfully restructured debt in [year]? Or prior attempts failed?] |
| **Supporting evidence** | [Strong / Adequate / Weak] | [Bank correspondence obtained? Restructuring proposal reviewed? Independent advisor engaged?] |

**[Repeat for each additional management plan]**

**Cash Flow Forecast Testing (Critical per SA 570 Revised 2024):**

**Retrospective review required:** Compare prior year forecasts to actual outcomes to assess management's track record.

| Period | Management's Prior Forecast | Actual Outcome | Variance (%) | Direction of Bias |
|--------|----------------------------|----------------|--------------|-------------------|
| Revenue FY24 | Rs. [Prior forecast] | Rs. [Actual] | [(Actual-Forecast)/Forecast×100%] | [Optimistic/Pessimistic/Accurate] |
| EBITDA FY24 | Rs. [Prior forecast] | Rs. [Actual] | [Variance %] | [Optimistic/Pessimistic/Accurate] |
| Operating cash flow FY24 | Rs. [Prior forecast] | Rs. [Actual] | [Variance %] | [Optimistic/Pessimistic/Accurate] |

**Assessment of management's forecasting track record:** [If variances >20% and consistently optimistic, increases skepticism on current forecasts]

**Current year forecast (FY25) reasonableness assessment:**

| Assumption | Management's Forecast | Auditor's Assessment | Supporting Evidence | Conclusion |
|------------|-----------------------|----------------------|---------------------|------------|
| Revenue growth | [X% growth] | [Reasonable / Optimistic / Pessimistic] | [Historical growth: Y%; Industry forecast: Z%; New contracts signed: A; Customer losses: B] | [Acceptable / Questionable / Not Supportable] |
| EBITDA margin | [X%] | [Reasonable / Optimistic / Pessimistic] | [Historical margin: Y%; Cost structure: Fixed/Variable; Cost reduction plans: Details] | [Acceptable / Questionable / Not Supportable] |
| Working capital assumption | [X days] | [Reasonable / Optimistic / Pessimistic] | [Historical: Y days; Industry: Z days; Credit terms changes: Details] | [Acceptable / Questionable / Not Supportable] |
| Capex/investments | [Rs. X] | [Reasonable / Optimistic / Pessimistic] | [Required for operations: Y; Discretionary: Z; Can be deferred if liquidity tight?] | [Acceptable / Questionable / Not Supportable] |

**Professional skepticism considerations per SA 570 (Revised 2024):**

- **Management's bias in forecasts:** Are forecasts consistently at the optimistic end of the reasonable range? Does management have incentive to avoid going concern disclosure (loan covenants, IPO plans, reputation)?
- **Incentives to manipulate:** Is there pressure to show solvency (debt covenant breach consequences, regulatory thresholds, investor expectations)?
- **Completeness of cash flow forecast:** Are all obligations included (debt repayments, capex commitments, lease payments, tax payments, working capital funding)? Are off-balance-sheet obligations considered?
- **Sensitivity analysis:** What happens if revenue is 10-20% lower than forecast? What is the margin of safety?

**Supporting evidence to obtain and verify:**

- [ ] **Promoter support letters:** Obtain signed letter from promoters committing financial support (equity infusion or loan) — specify amount and timeline
- [ ] **Bank facility letters:** Obtain confirmation from bank regarding restructuring discussions, in-principle approval, or term sheet
- [ ] **Signed term sheets for funding:** If new financing is part of plan, obtain signed term sheet (not just intent letter) with key terms
- [ ] **Board resolutions:** Minutes documenting board approval of mitigation plans (equity issuance, asset sales, cost reduction)
- [ ] **Independent valuations:** If asset sale is planned, obtain independent valuation to support realizable value assumptions
- [ ] **Legal opinions:** For restructuring or litigation-related plans, obtain legal counsel's opinion on feasibility and timeline

**Decision point: Are management's plans sufficient to overcome identified indicators?**

- [ ] **Yes** — Plans are feasible, binding, and have high probability of success within assessment period. Mitigating factors adequately address indicators.
- [ ] **Uncertain** — Plans are plausible but not yet binding, or depend on external factors beyond management's control. Material uncertainty exists.
- [ ] **No** — Plans are not feasible, lack binding commitments, or management's track record suggests low probability of execution. Material uncertainty exists.

**Conclusion on management's plans:** [State whether plans are sufficient to mitigate going concern risks, or material uncertainty remains]

**Cross-reference to /audit:estimates-review:** [Note: Cash flow projections and management forecasts should be cross-checked with estimates review findings. If /audit:estimates-review identified management bias toward optimism in accounting estimates (overly optimistic revenue recognition, understated provisions, aggressive assumptions), this increases skepticism on going concern forecasts as well.]

### Step 5: Audit Procedures Performed on Going Concern

**Document all SA 570 required procedures:**

- [x] **Inquired of management** regarding their assessment of entity's ability to continue as a going concern — [Date of inquiry, persons met, discussion summary]
- [x] **Evaluated management's assessment** — Reviewed management's cash flow forecasts, tested key assumptions, performed retrospective review of prior forecasts
- [x] **Reviewed events after balance sheet date** — Reviewed board minutes through [date], interim financial statements for [months], significant events identified: [list]
- [x] **Requested written representation** — Management representation letter will include statement on going concern assessment and disclosure adequacy
- [x] **Assessed adequacy of financial statement disclosures** — Evaluated whether Ind AS 1 going concern disclosure requirements met (see Step 6 below)

**Additional procedures performed when indicators identified:**

- [x] **Tested cash flow forecasts** — Compared prior year forecast to actual (variance: X%), assessed reasonableness of FY25 assumptions, performed sensitivity analysis (10-20% revenue decline scenario)
- [x] **Verified commitments** — Obtained [list: bank facility letter / promoter support letter / term sheet / board resolution / valuation report / legal opinion]
- [x] **Reviewed post-year-end cash flows** — Examined bank statements for [months post-year-end], actual cash position: [Rs. X vs. forecast Rs. Y]
- [x] **Confirmed continuing support** — Obtained letter from [promoters/holding company] dated [date] committing to [equity infusion of Rs. X / not withdrawing existing facilities / providing subordinated loan]
- [x] **Reviewed debt agreements** — Checked for acceleration clauses (present? Y/N), cross-default provisions (present? Y/N), consequences of covenant breach: [details]
- [x] **Obtained legal confirmations** — Lawyer's letter dated [date] regarding litigation status: [assessment of outcome and financial impact]

**Cross-reference to /audit:subsequent-events:** [Note: Events occurring after balance sheet date may provide additional evidence about going concern assessment. For example: Loss of major customer post-year-end strengthens going concern indicators; OR New financing obtained post-year-end mitigates indicators. Cross-reference findings with /audit:subsequent-events review.]

### Step 6: Financial Statement Disclosure Adequacy Assessment

**Ind AS 1 and SA 570 (Revised 2024) disclosure requirements:**

**Scenario A: Material uncertainty exists**

Ind AS 1 requires disclosure of:
1. Events/conditions casting significant doubt on going concern
2. Management's plans to mitigate the risks
3. Explicit statement: "Material uncertainty exists that may cast significant doubt on the entity's ability to continue as a going concern"
4. Prominent placement (separate note, not buried in accounting policies)

**Disclosure adequacy assessment:**

- [ ] **Adequate disclosure** — All required elements present, disclosure is prominent, specific indicators described, management plans detailed
- [ ] **Inadequate disclosure** — Disclosure missing, incomplete, not prominent, or lacks required elements

**Deficiencies identified (if any):**

- [List specific deficiencies: e.g., "Material uncertainty not explicitly stated", "Indicators mentioned vaguely without specific details", "Disclosure buried in accounting policy note rather than separate note", "Management's plans not described", "No statement about uncertainty regarding ability to realize assets/discharge liabilities"]

**Recommended disclosure (draft note for management to adapt):**

> **Note [X]: Material Uncertainty Related to Going Concern**
>
> The Company has incurred recurring operating losses [specific amounts for last 2-3 years] and negative operating cash flows [amount in current year]. The Company has also [list other key indicators: breached debt covenants (DSCR of X vs. required Y), lost a major customer representing Z% of revenue, etc.]. These events and conditions indicate the existence of a material uncertainty that may cast significant doubt on the Company's ability to continue as a going concern and, therefore, the Company may be unable to realize its assets and discharge its liabilities in the normal course of business.
>
> Management's plans to address these matters include [describe specific mitigation plans: obtaining equity infusion of Rs. X from promoters by [date], restructuring debt with lenders to extend repayment terms, implementing cost reduction measures targeting Rs. Y annual savings, disposing of non-core assets valued at Rs. Z]. However, these plans are subject to uncertainties regarding [execution risks, external approvals required, market conditions].
>
> The financial statements do not include any adjustments that might result from the outcome of this uncertainty. The financial statements have been prepared on a going concern basis as management believes the mitigation plans will be successfully implemented within the foreseeable future.

**Scenario B: No material uncertainty, but close call**

Even if material uncertainty threshold is not crossed, adequate disclosure of significant conditions and management's plans is still required for transparency. Assess whether disclosure is adequate given proximity to material uncertainty threshold.

### Step 7: Audit Report Impact Determination

**Decision tree for audit report impact:**

**1. Is going concern basis of preparation appropriate?**

- [ ] **Yes** — Entity will continue as going concern (proceed to Question 2)
- [ ] **No** — Going concern basis inappropriate, financial statements should be prepared on break-up/liquidation basis
  - **Audit report impact:** **Adverse opinion** per SA 570.24 — "In our opinion, because of the significance of the matter described in the Basis for Adverse Opinion section, the financial statements do not give a true and fair view..."

**2. Does material uncertainty exist regarding going concern?**

- [ ] **No material uncertainty** → Unmodified opinion, no additional paragraph (END — standard audit report)
- [ ] **Material uncertainty exists** → Proceed to Question 3

**3. Is the material uncertainty adequately disclosed per Ind AS 1?**

- [ ] **Yes — adequately disclosed** → **Unmodified opinion WITH separate "Material Uncertainty Related to Going Concern" section** per SA 570.22
- [ ] **No — inadequately disclosed** → Proceed to Question 4

**4. Is the disclosure deficiency material and pervasive?**

- [ ] **Material but NOT pervasive** → **Qualified opinion** per SA 705 — "Except for the effects of the matter described in the Basis for Qualified Opinion section..."
- [ ] **Material AND pervasive** → **Adverse opinion** per SA 705 — "In our opinion, because of the significance of the matter described in the Basis for Adverse Opinion section..."

**5. Alternative scenario: Unable to obtain sufficient appropriate evidence on going concern**

- [ ] **Scope limitation** → **Qualified opinion or Disclaimer of opinion** depending on materiality and pervasiveness per SA 705

**Audit report determination for this entity:** [Select appropriate scenario from decision tree above]

**Draft audit report section (if material uncertainty with adequate disclosure):**

> **Material Uncertainty Related to Going Concern**
>
> We draw attention to Note [X] in the financial statements, which describes events and conditions that indicate the existence of a material uncertainty that may cast significant doubt on the Company's ability to continue as a going concern. Our opinion is not modified in respect of this matter.

**If disclosure is inadequate — draft Basis for Qualified/Adverse Opinion section:**

> **Basis for Qualified Opinion** [or Adverse Opinion]
>
> As discussed in Note [X] to the financial statements, the Company has incurred recurring losses and has breached certain debt covenants, which indicate the existence of a material uncertainty that may cast significant doubt on the Company's ability to continue as a going concern. The financial statements do not adequately disclose this material uncertainty as required by Ind AS 1. [For Qualified: "In our opinion, except for the inadequate disclosure of the material uncertainty described above, the financial statements give a true and fair view..." OR For Adverse: "In our opinion, because of the significance of the inadequate disclosure described above, the financial statements do not give a true and fair view..."]

**Cross-reference to /audit:analytical-review:** [Note: Trends in financial ratios and analytical procedures inform going concern assessment and should be referenced in working papers to support indicators identified.]

## Output Format

**Going Concern Assessment Workpaper (CAF-04-GC-001)** containing:

**1. Executive Summary:**
- Overall going concern risk: [HIGH / MEDIUM / LOW]
- Material uncertainty exists? [YES / NO]
- Disclosure adequate? [YES / NO / N/A]
- Audit report impact: [Unmodified / Unmodified with GC section / Qualified / Adverse]

**2. Indicator Checklists:**
- Financial Indicators table (8 indicators)
- Operating Indicators table (7 indicators)
- Other Indicators table (6 indicators)
- Summary: [X of 21 indicators present; Y rated High severity]

**3. Assessment Period:**
- Balance sheet date: [Date]
- Assessment period: [12 months / Extended to X months]
- Broader economic/market conditions: [Summary]

**4. Management Plan Evaluation:**
- For each plan: Feasibility assessment table with supporting evidence
- Cash flow forecast testing: Retrospective review table + Current year reasonableness assessment table
- Professional skepticism considerations documented
- Supporting evidence obtained: [Checklist]
- Conclusion: Plans sufficient? [Yes / Uncertain / No]

**5. Audit Procedures Performed:**
- SA 570 required procedures checklist (all marked complete with details)
- Additional procedures for identified indicators (all marked complete with details)

**6. Financial Statement Disclosure Review:**
- Disclosure adequacy: [Adequate / Inadequate]
- Deficiencies identified: [List if inadequate]
- Recommended disclosure: [Draft note for management]

**7. Audit Report Impact:**
- Decision tree completed showing routing to conclusion
- Audit report determination: [Type of opinion + required sections]
- Draft audit report language: [Paragraph text]

**8. Cross-References:**
- /audit:estimates-review — Cash flow projections consistent with estimates bias assessment
- /audit:risk-matrix — Going concern indicators reflected in risk assessment for affected areas
- /audit:subsequent-events — Post-balance-sheet events affecting going concern documented
- /audit:analytical-review — Financial trends and ratio analysis mapped to indicators

**Prepared by:** [Name] [Date]
**Reviewed by:** [Name] [Date]

## Reference to Standards

**SA 570 (Revised 2024) - Going Concern:**
- Para 6-9: Auditor's procedures to identify and assess going concern risks (risk assessment procedures, inquiries, review of management's assessment)
- Para 10-16: Evaluating management's assessment and performing additional procedures when events or conditions identified
- Para 18-19: Written representations from management
- Para 20-23: Reporting requirements (separate section in audit report when material uncertainty exists, modification if disclosure inadequate)
- Para 24: Adverse opinion if going concern basis inappropriate

**Ind AS 1 - Presentation of Financial Statements:**
- Para 25-26: Management's responsibility to assess going concern
- Para 122: Disclosure of material uncertainties related to going concern

**For full SA 570 text and Ind AS 1 requirements, reference:**
@skills/sa-standards-reference/SKILL.md (search for "SA 570")
@skills/ind-as-reference/SKILL.md (search for "Ind AS 1")

**Related commands:**
- /audit:estimates-review — Cross-check cash flow forecast reasonableness with management bias assessment
- /audit:subsequent-events — Post-balance-sheet events may affect going concern assessment
- /audit:risk-matrix — Going concern indicators increase inherent risk in affected areas
- /audit:analytical-review — Financial trends inform indicator identification

---

**Disclaimer:** This tool assists with audit workflow documentation per SA 570 (Revised 2024) but does not substitute professional audit judgment. Going concern assessment requires significant professional judgment considering entity-specific circumstances, forward-looking information, and professional skepticism regarding management's plans and forecasts. All going concern assessments, disclosure adequacy evaluations, and audit report determinations must be reviewed and approved by the engagement partner. The auditor remains responsible for compliance with Standards on Auditing and professional standards.
