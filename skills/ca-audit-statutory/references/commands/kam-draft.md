# Key Audit Matters (KAM) Drafting

Draft Key Audit Matters section per SA 701 (effective April 2018) for inclusion in audit reports of listed companies, identifying matters requiring significant auditor attention and describing how the audit addressed each matter.

SA 701 is MANDATORY for listed entities only. KAMs communicate "matters of most significance" in the audit (not all significant matters). Typical range: 2-5 KAMs per ICAI implementation guide. Quality over quantity.

## Required Context

Before running this command, ensure:
- **The entity is a listed company** (KAM reporting is mandatory only for listed entities per SA 701)
- All audit procedures are complete
- Matters communicated to Those Charged With Governance (TCWG) have been documented
- Significant risks, significant accounting judgments, and areas of complexity are identified
- Draft financial statements with related disclosures are available

The auditor will be asked to provide the following information interactively:

1. **Confirm entity is listed:** SA 701 applies only if entity is listed at audit report date
2. **Mid-year listing clarification:** For entities that listed during the year (e.g., IPO mid-year), confirm whether SA 701 applies. Note: SA 701 applies if entity is listed at audit report date. KAMs should address significant matters during the entire financial year, not just post-listing period.
3. **Matters communicated to TCWG:** List significant matters discussed with audit committee/board during the audit
4. **Draft financial statements:** Financial statements with note references available for KAM drafting
5. **Significant risks identified:** From risk assessment (see /audit:risk-matrix and /audit:significant-risks)
6. **Significant accounting estimates:** From estimates review (see /audit:estimates-review)

## KAM Selection Criteria Hierarchy

Follow this three-stage process per SA 701.9-10 to determine which matters qualify as Key Audit Matters:

### Stage 1: Identify Universe of Significant Matters

From audit work performed, identify all matters that were significant, including:

- **Matters communicated to TCWG** as significant during the audit
- **Areas requiring significant auditor attention** in performing the audit
- **Areas involving significant management judgment** in preparing financial statements
- **Significant events or transactions during the period** affecting the financial statements
- **Areas with high assessed risk of material misstatement** (particularly significant risks per SA 315)
- **Areas where obtaining sufficient appropriate evidence was difficult or complex**

**This is the broad universe - typically 8-15 matters in a complex audit.**

### Stage 2: Filter to "Most Significant" Matters (SA 701.10)

From the universe of significant matters, determine which rise to "most significant" by applying ALL three criteria (not any one):

**Criterion A:** The matter was communicated to TCWG as significant, **AND**

**Criterion B:** The matter required significant auditor attention (not routine procedures), **AND**

**Criterion C:** The matter was of "most significance" relative to other significant matters in the audit

**All three criteria must be met for KAM determination.**

**Factors affecting "most significance" assessment (SA 701.9):**
- Higher assessed risk of material misstatement, particularly significant risks
- Significant auditor judgment regarding areas in financial statements involving significant management judgment (accounting estimates with high estimation uncertainty)
- Effect on the audit of significant events or transactions during the period
- Degree of complexity, subjectivity, or estimation uncertainty in management's accounting treatment

### Stage 3: Calibrate Quantity (2-5 KAMs Typical)

After identifying matters meeting all three criteria above, calibrate the final KAM list:

**Quality over quantity principle:** More KAMs does NOT mean better audit. KAM section should enhance communication, not become unwieldy.

**ICAI Implementation Guide recommendation:** 2-5 KAMs for most listed entity audits

**Calibration factors:**
- **Entity size and complexity:** Larger, more complex entities may justify 4-5 KAMs; smaller listed entities may have 2-3 KAMs
- **Number of significant risks:** Generally, each significant risk is a KAM candidate
- **Nature of business:** Specialized industries (banking, insurance, manufacturing) may have industry-specific KAMs

**Warning signs requiring recalibration:**
- **>5 KAMs:** Report becoming lengthy, recalibrate significance threshold upward (are all truly "most significant"?)
- **<2 KAMs for complex entity:** Likely under-disclosure, recalibrate threshold downward
- **Only 1 KAM:** Rarely appropriate unless entity has very simple operations with single dominant area of significance

**Counter-examples (NOT KAMs even if material):**
- **Cash and bank balances:** If no significant risks identified, routine confirmation procedures do not qualify as "most significant" even if amounts are material
- **Standard revenue recognition:** If no complexity, multiple performance obligations, or significant judgments, routine revenue testing is not KAM
- **Straightforward property, plant & equipment:** If no impairment indicators, depreciation is routine judgment, not "most significant"

**The distinction:** "Significant" matters are many. "Most significant" matters requiring KAM disclosure are the subset.

## KAM vs. Emphasis of Matter Distinction

**CRITICAL per SA 701.14:** KAMs are NOT a substitute for required Emphasis of Matter (EOM) paragraphs. Understand when to use each:

### Decision Table: Where Does the Matter Go?

| Matter Type | Goes Where | Reference | Example |
|-------------|------------|-----------|---------|
| **Material uncertainty related to going concern** (adequately disclosed) | Separate section: "Material Uncertainty Related to Going Concern" | SA 570.22 | Significant doubt about entity's ability to continue as going concern with adequate disclosure in financial statements |
| **Material uncertainty related to going concern** (inadequately disclosed or inappropriate going concern basis) | Basis for Qualified/Adverse Opinion | SA 570.23 | Inadequate disclosure or use of going concern basis when inappropriate |
| **Matter giving rise to modified opinion** | Basis for Qualified/Adverse Opinion paragraph | SA 705 | Material misstatement or scope limitation |
| **Matter appropriately disclosed, fundamental to users' understanding** (other than going concern or modified opinion) | Emphasis of Matter paragraph | SA 706 | Significant litigation uncertainty, early adoption of new standard, major catastrophic event |
| **Matter NOT in financial statements but relevant to understanding audit** | Other Matter paragraph | SA 706 | Prior year audited by predecessor, unaudited supplementary information |
| **Matter of most significance in the audit** (not falling into above categories) | Key Audit Matters section | SA 701 | Revenue recognition complexity, ECL provisioning, impairment assessments |

### Critical Rules from SA 701.14:

1. **Going concern material uncertainty:** NEVER include as a KAM. Must use prescribed "Material Uncertainty Related to Going Concern" section per SA 570.22.

2. **Modified opinion matters:** NEVER include as KAMs. These go in Basis for Qualified/Adverse Opinion paragraph.

3. **KAMs NOT substitute for EOM:** If a matter requires EOM paragraph per SA 706, include the EOM paragraph. The same matter MAY also be a KAM only if it is NOT related to modified opinion or going concern.

4. **Disclaimer of opinion:** KAM section is NOT included in Disclaimer of Opinion reports per SA 701.14.

**Example of overlap:** Significant litigation may be BOTH an EOM (draws attention to existing disclosure of uncertainty) AND a KAM (describes significant audit procedures performed to address the matter). Both paragraphs are included.

## KAM Drafting Template

For each selected KAM, draft using the three-component structure required by SA 701:

### Component A: Why This Is a Key Audit Matter

**Description of the matter and why it required significant auditor attention:**

Template structure:
```
[Matter Name - Bold Heading]

The Company's [account/transaction/area] as at/for the year ended 31 March [Year] amounted to Rs. [X] crores ([Y]% of [total assets/revenue/etc.]). [Brief description of the accounting treatment/policy/judgment].

[Explain why it was of most significance and required significant auditor attention, addressing]:
- The complexity, subjectivity, or estimation uncertainty involved
- The degree of management judgment required
- Why it was of most significance relative to other matters in the audit

Refer to Note [X] - [Note Title] to the standalone financial statements.
```

**Requirements:**
- Describe the matter clearly in terms users can understand (avoid jargon)
- Explain WHY it was of most significance (not just WHAT it is)
- Include quantitative context (amounts, percentages of financial statement totals)
- Cross-reference specific note numbers in financial statements
- Focus on the CURRENT period matter (not generic/evergreen descriptions)

### Component B: How Our Audit Addressed This Matter

**Principal audit procedures performed specific to this KAM:**

Template structure:
```
Our audit procedures to address [matter name] included:

- [Procedure 1 - Understanding/Risk Assessment]
- [Procedure 2 - Testing of Controls - if applicable]
- [Procedure 3 - Substantive Procedures - specific, not generic]
- [Procedure 4 - Use of Experts - if applicable]
- [Procedure 5 - Evaluation/Conclusion]
```

**Requirements:**
- Be SPECIFIC to this matter and this audit (avoid generic boilerplate like "we tested controls")
- Include both understanding/assessment procedures AND substantive testing procedures
- Reference use of auditor's expert if applicable (e.g., "engaged independent valuation specialist")
- Describe what was done, not just that it was done (e.g., "compared management's discount rate of X% to market observable rates for similar entities" not "tested discount rate")
- Must be meaningful enough that users understand depth of audit work
- Do NOT describe every single procedure - focus on principal procedures

**Anti-pattern:** "We tested the controls, performed substantive testing, and reviewed disclosures." (Too generic)

**Good pattern:** "We assessed management's ECL model methodology for compliance with Ind AS 109, tested historical default data completeness covering [X] years of customer payment history, evaluated reasonableness of forward-looking macroeconomic assumptions by comparing to RBI and industry forecasts, and performed retrospective review comparing prior year estimates to actual credit losses."

### Component C: Reference to Related Disclosures

**Cross-reference to specific notes:**

Template:
```
Refer to Note [X] - [Significant Accounting Policy title] and Note [Y] - [Specific account balance title] to the standalone financial statements.
```

**Requirements:**
- Reference BOTH the accounting policy note AND the account balance/disclosure note
- Use exact note numbers and titles as they appear in financial statements
- Ensure consistency between KAM description and financial statement disclosures (no new information in KAM)

## Common KAM Examples with Full Drafting

The following are fully drafted example KAMs covering the most common matters in Indian listed entity audits:

### Example 1: Revenue Recognition (Most Common KAM - Manufacturing/Services)

**Revenue Recognition from Contracts with Customers**

The Company's revenue from sale of goods and services for the year ended 31 March 2026 amounted to Rs. 1,250 crores. Revenue is recognized in accordance with Ind AS 115 - Revenue from Contracts with Customers. Certain contracts involve multiple performance obligations (product sales, installation services, and post-sale support), requiring management to identify distinct performance obligations and allocate the transaction price to each performance obligation based on relative standalone selling prices. Additionally, determination of the point in time when control transfers to customers requires significant judgment, particularly for complex arrangements.

Given the materiality of revenue (representing the primary source of the Company's income), the complexity of certain contracts involving multiple performance obligations, the significant judgment required in determining standalone selling prices and timing of revenue recognition, and the risk of revenue being recognized in inappropriate periods, we determined revenue recognition to be a key audit matter requiring significant auditor attention.

Refer to Note 2.3 - Significant Accounting Policies (Revenue Recognition) and Note 23 - Revenue from Operations to the standalone financial statements.

**How our audit addressed this Key Audit Matter:**

Our audit procedures to address revenue recognition included:

- Obtained understanding of the Company's revenue recognition policies and assessed compliance with Ind AS 115 requirements, particularly regarding identification of performance obligations and determination of transaction price allocation
- Selected a sample of 25 complex contracts representing 40% of contract value and evaluated management's identification of distinct performance obligations, verifying that goods/services are separately identifiable and customer can benefit from them independently
- For contracts with multiple performance obligations, tested management's allocation of transaction price by verifying standalone selling prices used in the allocation, comparing to observable market prices where available or evaluating the appropriateness of estimation methods used
- Performed revenue cut-off testing by examining a sample of transactions recorded around year-end (15 days before and after balance sheet date) to verify that revenue was recognized in the correct period based on transfer of control criteria
- Performed analytical review of revenue by product line, customer segment, and month to identify unusual trends or fluctuations requiring investigation
- Tested manual journal entries posted to revenue accounts for the year to identify unusual or irregular transactions
- Assessed the adequacy and completeness of revenue-related disclosures in Note 23 and Note 2.3

Based on the procedures performed, we concluded that management's revenue recognition policies are in accordance with Ind AS 115 and that revenue has been recognized appropriately in the current period.

### Example 2: Expected Credit Loss (ECL) Provisioning (Most Common for Banks/NBFCs, Common for All)

**Valuation of Expected Credit Loss Provision for Trade Receivables**

The Company's trade receivables as at 31 March 2026 amounted to Rs. 185 crores (15% of total assets), against which an expected credit loss (ECL) provision of Rs. 12 crores has been recognized in accordance with Ind AS 109 - Financial Instruments. Determining the ECL provision requires significant management judgment in assessing:

- Probability of default (PD) rates based on historical default data and forward-looking factors
- Loss given default (LGD) estimates considering collateral and recovery experience
- Staging of receivables (Stage 1 - 12-month ECL, Stage 2 - lifetime ECL for significant increase in credit risk, Stage 3 - credit-impaired)
- Forward-looking macroeconomic assumptions incorporated into the model (GDP growth rates, industry-specific factors, customer credit ratings)

Given the quantum of receivables (representing 15% of total assets), the complexity of the ECL model involving multiple assumptions and judgments, the subjectivity inherent in incorporating forward-looking information, and the estimation uncertainty involved, we determined the valuation of ECL provision to be a key audit matter requiring significant auditor attention.

Refer to Note 2.4 - Significant Accounting Policies (Expected Credit Losses on Financial Assets) and Note 11 - Trade Receivables to the standalone financial statements.

**How our audit addressed this Key Audit Matter:**

Our audit procedures to address the valuation of ECL provision for trade receivables included:

- Obtained understanding of management's ECL model and assessed its compliance with Ind AS 109 requirements, including the three-stage impairment approach
- Tested the completeness and accuracy of historical default data used to determine PD rates by reconciling to underlying accounting records and verifying data integrity for the [X]-year historical period used
- Evaluated the reasonableness of management's staging criteria (30-day and 90-day past due triggers for Stage 2 and Stage 3) and tested a sample of 50 receivables to verify appropriate staging classification based on payment status
- Assessed the reasonableness of forward-looking macroeconomic assumptions incorporated in the model by:
  - Comparing management's GDP growth assumption of [X]% to Reserve Bank of India forecasts and independent economic research reports
  - Evaluating industry-specific adjustment factors against publicly available industry association data
  - Assessing customer credit rating inputs against external credit rating agency ratings where available
- For a sample of 30 Stage 2 and Stage 3 receivables totaling Rs. [Y] crores, performed independent assessment of recoverability based on:
  - Customer payment history and aging analysis
  - External credit reports obtained from credit rating agencies
  - Post-balance sheet date collections verified through bank statements
  - Correspondence with customers regarding disputed amounts or payment plans
- Performed retrospective review comparing prior year ECL estimates to actual credit losses in the current year to assess reliability and potential bias in management's estimation process
- Evaluated management bias by assessing whether adjustments to model assumptions were directionally consistent (all optimistic or all pessimistic) or balanced, and whether changes were appropriately supported
- Assessed the adequacy of ECL provision disclosures in Note 11, including the reconciliation of opening to closing provision, staging breakdown, and key assumptions used

Based on the procedures performed and evidence obtained, we concluded that management's ECL provision methodology is in accordance with Ind AS 109 and that the assumptions used are reasonable and within an acceptable range. The ECL provision of Rs. 12 crores is appropriately determined.

### Example 3: Impairment of Goodwill and Intangible Assets

**Impairment Assessment of Goodwill and Intangible Assets**

The Company's goodwill and intangible assets with indefinite useful lives as at 31 March 2026 amounted to Rs. 95 crores (representing 12% of total assets). Under Ind AS 36 - Impairment of Assets, these assets are tested for impairment annually, regardless of whether there is any indication of impairment. The impairment test requires management to determine the recoverable amount of cash-generating units (CGUs), which is the higher of value in use and fair value less costs of disposal.

Management determined the recoverable amount based on value in use calculations, which require significant judgment in the following areas:
- Future cash flow projections for the next 5 years based on management's business plans
- Revenue growth rates (averaging [X]% over the forecast period)
- Long-term growth rate of [Y]% applied to terminal value calculation
- Pre-tax discount rate of [Z]% derived from the Company's weighted average cost of capital (WACC)

Given the materiality of goodwill and intangible assets, the high degree of estimation uncertainty in forecasting future cash flows, the significant management judgment required in determining key assumptions (growth rates, discount rate), and the sensitivity of the impairment conclusion to changes in these assumptions, we determined the impairment assessment to be a key audit matter requiring significant auditor attention.

Refer to Note 2.5 - Significant Accounting Policies (Impairment of Non-Financial Assets) and Note 4 - Goodwill and Intangible Assets to the standalone financial statements.

**How our audit addressed this Key Audit Matter:**

Our audit procedures to address the impairment assessment of goodwill and intangible assets included:

- Evaluated management's identification of CGUs and allocation of goodwill to CGUs in accordance with Ind AS 36 requirements
- Assessed the appropriateness of the value in use methodology used by management
- Tested the mathematical accuracy of the discounted cash flow (DCF) model used for value in use calculations
- Evaluated the reasonableness of future cash flow projections by:
  - Comparing current year budget vs. actual to assess management's forecasting accuracy
  - Analyzing management's business plan assumptions against historical performance and industry trends
  - Comparing revenue growth assumptions to industry analyst reports and publicly available competitor information
- Assessed the appropriateness of the discount rate of [Z]% by:
  - Engaging our internal valuation specialists to independently derive a discount rate range
  - Comparing key WACC inputs (risk-free rate, equity risk premium, beta) to market observable data
  - Verifying that the discount rate was pre-tax as required by Ind AS 36
- Evaluated the long-term growth rate of [Y]% by comparing to long-term GDP growth forecasts and industry-specific growth expectations
- Performed sensitivity analysis to assess the impact of reasonably possible changes in key assumptions (revenue growth rate, discount rate, terminal growth rate) on the impairment conclusion
- Assessed the adequacy of disclosures in Note 4, including the key assumptions used, sensitivity analysis, and headroom between recoverable amount and carrying amount

Based on the procedures performed, we concluded that management's impairment assessment methodology is in accordance with Ind AS 36 and that the key assumptions used are reasonable. No impairment charge was required for the year ended 31 March 2026.

### Example 4: Litigation and Claims Provisioning

**Provisions and Contingent Liabilities for Litigation and Claims**

The Company is involved in various legal and regulatory proceedings, including tax disputes, commercial litigation, and regulatory inquiries. As at 31 March 2026, the Company has recognized provisions amounting to Rs. 18 crores for matters where management has concluded that an outflow of economic resources is probable and the amount can be reliably estimated. Additionally, the Company has disclosed contingent liabilities of Rs. 45 crores for matters where the outflow is possible but not probable.

Determination of whether to recognize a provision or disclose as contingent liability requires significant management judgment in assessing:
- The likelihood of an outflow of economic resources (probable vs. possible vs. remote)
- Whether the amount of the obligation can be reliably estimated
- The potential range of outcomes based on legal advice and precedents

Given the complexity and subjectivity involved in assessing the likelihood and quantum of potential obligations, the reliance on external legal counsel opinions, and the potential materiality of unrecognized contingent liabilities, we determined litigation and claims provisioning to be a key audit matter requiring significant auditor attention.

Refer to Note 2.10 - Significant Accounting Policies (Provisions and Contingent Liabilities) and Note 19 - Provisions and Note 35 - Contingent Liabilities to the standalone financial statements.

**How our audit addressed this Key Audit Matter:**

Our audit procedures to address provisions and contingent liabilities for litigation and claims included:

- Obtained management's schedule of all ongoing litigation and claims, including tax disputes, commercial litigation, and regulatory matters
- Sent direct confirmation requests to the Company's external legal counsel to obtain independent confirmation of:
  - Completeness of litigation matters identified by management
  - Assessment of likelihood of outflow (probable/possible/remote)
  - Estimated range of potential exposure
  - Current status and expected timeline of resolution
- For significant matters, read legal counsel correspondence and court documents to understand the nature of claims and management's defense
- Assessed management's classification of matters as provisions (probable outflow) vs. contingent liabilities (possible outflow) based on:
  - Legal counsel's assessment of likelihood
  - Historical outcomes in similar matters
  - Stage of proceedings and recent developments
- For recognized provisions of Rs. 18 crores, evaluated the reasonableness of amounts recorded by:
  - Comparing to legal counsel's estimated exposure range
  - Assessing whether the recorded amount represents management's best estimate within the range
  - Reviewing historical settlement patterns for similar matters
- Performed search for unrecorded litigation by:
  - Inquiry of legal department, company secretary, and key management personnel
  - Review of board minutes and audit committee minutes
  - Review of correspondence with regulatory authorities
  - Analysis of legal and professional fees to identify significant matters not previously identified
- Assessed the adequacy of disclosures in Note 19 and Note 35, including the nature of contingencies, estimated financial effect, and uncertainties affecting the outcome

Based on the procedures performed, including confirmations from external legal counsel, we concluded that management's assessment of litigation and claims is reasonable and that provisions and contingent liabilities are appropriately recognized and disclosed in accordance with Ind AS 37.

### Example 5: Fair Value Measurements of Financial Instruments

**Fair Value Measurement of Level 3 Financial Instruments**

The Company holds investments in unquoted equity securities and derivative financial instruments measured at fair value through profit or loss (FVTPL) in accordance with Ind AS 109. As at 31 March 2026, Level 3 financial instruments (where fair value is determined using unobservable inputs) amounted to Rs. 65 crores, representing 8% of total assets.

Fair valuation of Level 3 instruments requires significant management judgment and estimation due to:
- Use of complex valuation models (discounted cash flow, option pricing models)
- Unobservable inputs including projected cash flows, discount rates, volatility assumptions, and probability weightings
- Lack of quoted market prices in active markets
- Sensitivity of fair value to changes in unobservable inputs

Given the materiality of Level 3 financial instruments, the high degree of estimation uncertainty due to use of unobservable inputs, the complexity of valuation models employed, and the potential for management bias in selecting favorable assumptions, we determined fair value measurement of Level 3 financial instruments to be a key audit matter requiring significant auditor attention.

Refer to Note 2.7 - Significant Accounting Policies (Fair Value Measurement) and Note 38 - Fair Value Hierarchy Disclosures to the standalone financial statements.

**How our audit addressed this Key Audit Matter:**

Our audit procedures to address fair value measurement of Level 3 financial instruments included:

- Obtained understanding of management's valuation process, including the use of third-party valuation specialists
- For investments valued using third-party specialists, assessed the competence, capability, and objectivity of the specialists by reviewing their qualifications, independence, and valuation methodology
- Engaged our own internal valuation specialists to:
  - Assess the appropriateness of valuation methodologies used (discounted cash flow, market comparables, option pricing)
  - Independently validate key unobservable inputs used in the models
  - Develop independent fair value estimates or ranges for comparison to management's valuations
- For a sample of significant Level 3 investments representing 70% of total Level 3 balance:
  - Tested the mathematical accuracy of valuation models
  - Evaluated reasonableness of projected cash flows by comparing to investee company financial performance, business plans, and industry trends
  - Assessed discount rates by comparing to market-based rates for similar risk profiles
  - For option-based valuations, evaluated volatility assumptions by comparing to historical volatility and comparable publicly traded entities
- Performed retrospective review comparing prior period fair value estimates to actual realized values or observable market developments to assess management's historical estimation accuracy
- Assessed potential management bias by evaluating whether changes in valuation inputs were directionally favorable to the Company
- Performed sensitivity analysis to assess the impact of reasonably possible changes in key unobservable inputs on fair value measurements
- Assessed the adequacy of fair value disclosures in Note 38, including the fair value hierarchy classification, valuation techniques used, key unobservable inputs, and sensitivity analysis

Based on the procedures performed, including the work of our internal valuation specialists, we concluded that the fair value measurements of Level 3 financial instruments are reasonable and in accordance with Ind AS 113 requirements. The valuation methodologies and key assumptions used are appropriate.

## Introductory Paragraph Template

Before presenting individual KAMs, include this standard introductory paragraph per SA 701:

```
**Key Audit Matters**

Key audit matters are those matters that, in our professional judgment, were of most significance in our audit of the [standalone/consolidated] financial statements of the current period. These matters were addressed in the context of our audit of the financial statements as a whole, and in forming our opinion thereon, and we do not provide a separate opinion on these matters.
```

**Critical statement:** "we do not provide a separate opinion on these matters" - KAMs describe audit procedures performed but do NOT constitute separate assurance on individual matters.

## Ordering Guidance

Order KAMs by significance, with the most significant matter first.

**Factors to consider in ordering:**
1. **Quantitative materiality:** Absolute amount and percentage of financial statement totals
2. **Qualitative significance:** Complexity, subjectivity, estimation uncertainty
3. **Public interest:** Matters of particular interest to users and stakeholders
4. **Risk assessment:** Higher risk matters generally more significant

**Example ordering:**
- Most significant: Revenue recognition (Rs. 1,250 crores, 100% of revenue, multiple performance obligations, complex judgments)
- Second: ECL provisioning (Rs. 185 crores, 15% of assets, significant estimation uncertainty)
- Third: Goodwill impairment (Rs. 95 crores, 12% of assets, judgment in assumptions)
- Fourth: Litigation provisions (Rs. 18 crores provision + Rs. 45 crores contingent, regulatory/legal complexity)

**Presentation format:** Typically tabular format with KAM heading, "Why KAM" column, and "How Addressed" column. Some auditors use narrative format with separate subheadings. Both are acceptable per SA 701.

## Cross-References

### Inputs to This Command (From Prior Phases)

**Phase 3 - Planning & Risk Assessment:**
- **/audit:risk-matrix** - Identified significant risks are primary KAM candidates
- **/audit:significant-risks** - Significant risks requiring special audit consideration per SA 315 are "most significant" matters

**Phase 4 - Execution & Completion:**
- **/audit:estimates-review** - Significant accounting estimates with high estimation uncertainty are common KAM candidates (ECL, impairment, fair values, provisions)
- **/audit:going-concern** - Going concern material uncertainty is NOT a KAM (separate section per SA 570), but going concern assessment procedures may inform other KAM determination

**Phase 6 - Current Phase:**
- **/audit:draft-report** - KAM section is inserted into audit report between Other Matter and Responsibilities sections
- **/audit:quality-review** - KAM selection and drafting is reviewed during EQCR, particularly for listed entities
- **/audit:completion-memo** - KAMs identified are documented in completion memo as matters of most significance

### Outputs Consumed By (Current Phase Commands)

- **/audit:draft-report** - Complete KAM section drafted here is inserted into audit report for listed entities
- **/audit:quality-review** - Draft KAMs reviewed by EQCR reviewer before report issuance
- **/audit:completion-memo** - KAM matters documented as part of audit conclusion narrative

## Output Format

A complete Key Audit Matters section for inclusion in the audit report containing:

1. **Introductory paragraph** explaining what KAMs are and that no separate opinion is provided
2. **2-5 individual KAMs** ordered by significance (most significant first)
3. **For each KAM:**
   - Bold heading summarizing the matter (e.g., "Revenue Recognition from Contracts with Customers")
   - **Component A:** Description of the matter and why it is a KAM (including amounts, %, note references)
   - **Component B:** How our audit addressed the matter (principal procedures performed)
   - **Component C:** Reference to related disclosure notes (accounting policy + account balance notes)
4. **Professional language** suitable for listed company audit reports (clear but not overly technical)
5. **Entity-specific content** (not generic boilerplate - describe actual procedures performed, actual amounts, actual judgments)

**Typical KAM section length:** 2-4 pages depending on number of KAMs and complexity

**Format:** Can be presented in table format (two columns: "Why KAM" and "How Addressed") or narrative format with subheadings. Both are acceptable.

## Anti-Patterns to Avoid

**DO NOT:**
- ❌ Include going concern material uncertainty as a KAM (it gets separate "Material Uncertainty Related to Going Concern" section per SA 570.22)
- ❌ Include matters resulting in modified opinion as KAMs (they go in Basis for Qualified/Adverse Opinion paragraph)
- ❌ Use generic boilerplate procedures in "How audit addressed" section (must be specific and meaningful: "we tested controls" is insufficient; "we tested authorization controls by selecting 30 sales contracts and verifying credit approval by CFO" is specific)
- ❌ List more than 5 KAMs unless entity is exceptionally complex (quality over quantity - recalibrate significance threshold)
- ❌ Confuse "significant" with "most significant" (many matters are significant; only subset are "most significant")
- ❌ Include routine areas as KAMs just because amounts are material (e.g., cash if no significant risks, standard depreciation if no impairment)
- ❌ Copy KAMs from prior year without updating for current year circumstances (KAMs must relate to current period audit)
- ❌ Include new financial statement information in KAM section (KAM describes audit work, not financial statement matters - those belong in the financial statements)
- ❌ Provide separate opinion on individual KAMs (introductory paragraph must clarify no separate opinion is provided)
- ❌ Include KAM section in Disclaimer of Opinion reports (prohibited per SA 701.14)

---

**Disclaimer:** This tool assists with audit workflow documentation but does not substitute professional audit judgment. All outputs must be reviewed by qualified Chartered Accountants. KAM determination is inherently judgmental and requires consideration of entity-specific circumstances, industry context, and matters communicated to Those Charged With Governance. This command structures the selection and drafting process but does not automate the judgment. KAM selection and drafting require partner-level review before inclusion in the audit report.
