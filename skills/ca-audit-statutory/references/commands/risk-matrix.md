# Risk Matrix

Create comprehensive risk assessment matrix per SA 315 (Revised 2019) - Identifying and Assessing the Risks of Material Misstatement. Evaluate inherent risk on a spectrum BEFORE considering controls, then assess control risk separately, then determine combined risk by assertion for each significant financial statement area.

## Required Context

Before running this command, ensure:
- Understanding of entity and its environment documented
- Industry and regulatory requirements understood
- Internal control system documented (entity-level and process-level controls)
- Preliminary analytical procedures completed (reference /audit:analytical-review output -- unusual items inform risk assessment)
- Fraud risk assessment completed (reference /audit:fraud-risk output -- fraud risks increase inherent risk)
- Overall materiality and performance materiality amounts determined (for assessing whether an area is significant)
- Prior year risk assessment available (if recurring engagement) and any changes in entity/environment since prior year

**Ask the user to provide:**
1. List of significant financial statement areas (those above performance materiality threshold)
2. Any changes in business operations, IT systems, or personnel since prior year
3. Results of analytical review highlighting unusual items
4. Fraud risk assessment findings (areas identified as fraud risks should be rated higher on inherent risk)

## Workflow

### Step 1 - List All Significant Financial Statement Areas

Identify all material financial statement areas requiring risk assessment. Group by financial statement category:

**ASSETS:**
- Cash & bank balances (including bank overdrafts)
- Trade receivables (gross and allowance for expected credit loss)
- Other receivables (advances, claims, deposits)
- Inventory (raw materials, work-in-progress, finished goods, stock-in-trade)
- Investments - current (mutual funds, equity, debt securities)
- Investments - non-current (subsidiaries, associates, joint ventures, others)
- Property, plant and equipment (PPE) (gross, accumulated depreciation, net)
- Intangible assets (software, goodwill, other intangibles)
- Right-of-use assets (leases per Ind AS 116)
- Other non-current assets (capital advances, deferred tax assets)

**LIABILITIES:**
- Trade payables
- Other payables (employee benefits, statutory dues, advances from customers)
- Borrowings - current (working capital loans, current maturities of long-term debt)
- Borrowings - non-current (term loans, debentures, bonds)
- Provisions (gratuity, leave encashment, warranties, litigation, restructuring)
- Deferred tax liabilities
- Lease liabilities (per Ind AS 116)

**INCOME:**
- Revenue from operations (by stream if multiple: sales of goods, rendering of services, construction contracts)
- Other income (interest, dividend, gains on investments, exchange gains, miscellaneous)
- Exceptional items (if any)

**EXPENSES:**
- Cost of materials consumed / Purchases of stock-in-trade
- Changes in inventories
- Employee benefits expense (salaries, bonuses, PF, gratuity)
- Depreciation and amortization expense
- Finance costs (interest on borrowings, lease interest)
- Other expenses (rent, utilities, repairs, professional fees, etc.)

**EQUITY & DISCLOSURES:**
- Share capital and reserves (if changes during the year)
- Related party transactions and balances
- Contingent liabilities and commitments
- Segment reporting (if applicable per Ind AS 108)

**Ask the user:** "Confirm which areas are material for this entity (above performance materiality threshold) and should be included in the risk matrix. If any immaterial areas are excluded, document the rationale."

### Step 2 - Assess Inherent Risk by Assertion (SPECTRUM OF INHERENT RISK)

**CRITICAL SA 315 (REVISED 2019) CONCEPT: Inherent risk must be assessed on a SPECTRUM from low to high BEFORE considering any controls.**

Inherent risk is the susceptibility of an assertion to misstatement BEFORE consideration of any related controls. This means:
- Do NOT consider whether the entity has good controls when assessing inherent risk
- Do NOT reference the control environment in inherent risk rationale
- Assess ONLY the nature, magnitude, and complexity of the financial statement item
- Higher inherent risk = closer to the upper end of the spectrum

For each significant financial statement area, assess inherent risk across all **7 assertions per SA 315:**

1. **Existence/Occurrence:** Does the asset or liability actually exist at the balance sheet date? Did the transaction occur during the period?
2. **Completeness:** Are all items that should be recorded actually recorded? Are all transactions included?
3. **Valuation/Accuracy:** Are amounts appropriately measured and calculated? Are transactions recorded at correct amounts?
4. **Rights and Obligations:** Does the entity own/control the assets? Does the entity owe the liabilities?
5. **Cut-off:** Are transactions recorded in the correct accounting period?
6. **Classification:** Are items properly classified in the financial statements (current vs. non-current, by nature)?
7. **Presentation and Disclosure:** Are items properly presented in the financial statements with adequate disclosure per Ind AS?

**Inherent risk factors to assess (before considering controls):**

- **Complexity:** Simple, routine transactions with straightforward accounting (Low) vs. complex transactions requiring significant technical accounting analysis (High)
- **Subjectivity:** Observable market prices or objective data available (Low) vs. unobservable inputs requiring significant management judgment (High)
- **Change:** Stable, unchanged processes and accounting standards (Low) vs. new transactions, new systems, new accounting standards, or significant changes in business operations (High)
- **Susceptibility to fraud:** Low inherent fraud susceptibility based on nature of item (Low) vs. high incentive/opportunity for manipulation identified in fraud risk assessment (High)
- **Uncertainty:** Low estimation uncertainty with narrow range of possible outcomes (Low) vs. high estimation uncertainty with wide range of outcomes (High)
- **Susceptibility to management bias:** Objective, independently verifiable amounts (Low) vs. amounts subject to significant management judgment and potential bias (High)

**Inherent Risk Rating:** H (High - upper end of spectrum) / M (Medium - mid-spectrum) / L (Low - lower end of spectrum)

**Ask the user** for each significant financial statement area: "Assess inherent risk for [AREA] considering ONLY the nature, complexity, and susceptibility to misstatement of the item itself -- do NOT consider the control environment at this stage. Rate as H/M/L for each of the 7 assertions with specific rationale referencing the inherent risk factors above."

**Decision point:** Before proceeding to Step 3 (control risk assessment), review all inherent risk assessments to confirm that NO inherent risk rationale references the control environment, control effectiveness, or management's monitoring activities. If any inherent risk justification mentions "strong controls" or "effective controls" or "good segregation of duties," it must be corrected -- these are control risk factors, not inherent risk factors.

### Step 3 - Document Control Environment (Entity-Level Then Process-Level)

Now that inherent risk is assessed, evaluate the control environment. Document controls in two tiers:

**A. Entity-Level Controls Assessment:**

Create a structured assessment of the overall control environment:

| Control Element | Assessment (Strong / Adequate / Weak) | Evidence |
|-----------------|---------------------------------------|----------|
| Tone at the top and management integrity | [Rating] | [Observations: Board oversight, ethical culture, management's emphasis on controls] |
| Organizational structure and authority delegation | [Rating] | [Observations: Clear reporting lines, appropriate segregation of authority, defined approval limits] |
| Board of Directors and Audit Committee effectiveness | [Rating] | [Observations: Independent directors present?, Audit committee meets regularly?, Financial expertise on audit committee?] |
| Internal audit function | [Rating] | [Observations: Exists? Reports to audit committee? Scope adequate? Findings tracked?] |
| Human resources policies and competence of finance team | [Rating] | [Observations: Qualified finance personnel, turnover, training, succession planning] |
| Entity's risk assessment process | [Rating] | [Observations: Management identifies business risks? Risk management framework?] |
| IT general controls (ITGC) | [Rating] | [Observations: Access controls (user provisioning, password policies), Change management (testing, approval), Operations (backups, monitoring), Physical security] |
| Monitoring controls | [Rating] | [Observations: Management review of key reports, Variance analysis processes, Exception reporting] |

**Ask the user:** "Assess the entity-level control environment using the table above. Rate each element as Strong / Adequate / Weak and provide specific evidence from your understanding of the entity. An overall strong entity-level control environment supports lower control risk ratings at the process level (but does NOT affect inherent risk)."

**B. Process-Level Controls for Each Significant Area:**

For each significant financial statement area, identify key process-level controls:

| Financial Statement Area | Key Control Description | Control Type | Design Effective? (Y/N) | Implementation Evidence | Operating Effectiveness Assessment |
|--------------------------|-------------------------|--------------|-------------------------|-------------------------|------------------------------------|
| [Area] | [Specific control activity] | [Authorization / Segregation / Reconciliation / Physical / IT Application / Review] | [Y/N] | [How verified] | [Will test? Expect to rely?] |

**Control types to consider for each significant area:**

- **Authorization controls:** Who approves transactions? Are there monetary limits? Are approvals documented?
- **Segregation of duties:** Are incompatible functions separated (e.g., recording vs. custody, authorization vs. recording)?
- **Reconciliation controls:** What is reconciled (e.g., bank reconciliations, subledger to general ledger)? How frequently? Who reviews?
- **Physical controls:** For tangible assets, are there locks, restricted access, physical counts?
- **IT application controls:** Input validation (edit checks, mandatory fields), Processing controls (automated calculations, sequence checks), Output controls (error reports reviewed)
- **Review controls:** Does management review key reports (aging, variance analysis, exception reports)?

**Ask the user:** "For each significant financial statement area, identify the key process-level controls. For each control, indicate: (1) Description of the control, (2) Whether it is well-designed to prevent or detect misstatements, (3) Evidence that the control has been implemented, (4) Whether you intend to test and rely on this control."

### Step 4 - Assess Control Risk by Assertion

Now assess control risk for each significant area and assertion. Control risk is the risk that a material misstatement will NOT be prevented, or detected and corrected on a timely basis, by the entity's controls.

For each significant area and assertion, assess control risk SEPARATELY from inherent risk:

**Control Risk Rating:**
- **H (High):** Controls are weak, absent, or the auditor does not intend to test them -- auditor CANNOT rely on controls (substantive-only approach)
- **M (Medium):** Controls exist and are adequately designed, but have some gaps or limitations -- partial reliance possible if tested and found effective
- **L (Low):** Controls are well-designed, implemented, and the auditor intends to test operating effectiveness -- reliance on controls is appropriate if testing confirms effectiveness

**Ask the user** for each significant area and assertion: "Based on the entity-level and process-level control documentation from Step 3, what is the control risk for [AREA] - [ASSERTION]? Rate as H/M/L with specific reference to which controls address this assertion."

**Important notes:**
- If the auditor intends to rely on controls (rate control risk as M or L), the auditor MUST plan to test the operating effectiveness of those controls
- If the auditor is NOT testing controls (e.g., first-year engagement, or substantive-only approach chosen), control risk MUST be rated as High (default to maximum)
- For first-year engagements, consider rating control risk as High unless controls can be sufficiently assessed and tested during the current year
- Even with strong entity-level controls, if specific process-level controls for an assertion are weak, control risk for that assertion should be rated higher

### Step 5 - Determine Combined Risk

Combine inherent risk and control risk using professional judgment to determine the overall risk of material misstatement:

**Combined Risk Determination Guidance (not a mechanical formula):**

| Inherent Risk | Control Risk | Typical Combined Risk | Typical Audit Response |
|---------------|--------------|----------------------|------------------------|
| H | H | **H** | Extensive substantive testing, larger samples (30+ items or >70% value coverage), partner/manager involvement, consider engaging specialist, tests performed at or near year-end (not interim only) |
| H | M | **H-M** (judgment) | Significant substantive testing, moderate samples (20-25 items or 50-60% value), enhanced manager review, tests at year-end with some interim work possible if controls tested |
| H | L | **M** (judgment) | Moderate substantive testing (controls provide some assurance), standard samples (15-20 items or 40-50% value), combination of tests of controls and substantive procedures |
| M | H | **M-H** (judgment) | Moderate-to-significant substantive testing, standard-to-larger samples, senior auditor level with manager review |
| M | M | **M** | Standard substantive testing, standard samples (15-20 items), senior auditor level |
| M | L | **L-M** (judgment) | Reduced substantive testing (controls provide assurance), smaller samples (10-15 items), combination of controls testing and reduced substantive work |
| L | H | **M** (judgment) | Moderate testing despite low inherent risk (controls unreliable so cannot reduce substantive work significantly) |
| L | M | **L-M** (judgment) | Reduced testing, smaller samples, some controls reliance |
| L | L | **L** | Minimal substantive testing, substantive analytical procedures may suffice for some assertions, very small samples (5-10 items), heavy reliance on controls |

**Decision point:** Review the overall pattern of combined risk across all areas and assertions. Does the risk distribution make sense? Do high-risk items have appropriate audit responses planned? Are there any inconsistencies (e.g., high inherent risk with low control risk but no controls testing planned)?

### Step 6 - Link to Planned Audit Response

For each area-assertion combination, indicate the nature and extent of planned audit procedures responsive to the assessed combined risk level:

**High Combined Risk Response Guidelines:**
- Extensive tests of details (substantive procedures focused on the specific assertion)
- Larger sample sizes (guideline: 30+ items or coverage of >70% by value)
- Partner or manager involvement in planning and performing procedures
- Consider engaging specialist (valuation expert, actuary, IT auditor, legal counsel)
- Tests performed at year-end or very close to year-end (not interim only)
- Enhanced review and supervision

**Medium Combined Risk Response Guidelines:**
- Moderate tests of details
- Standard sample sizes (guideline: 15-25 items or coverage of 40-50% by value)
- Senior auditor level with manager review
- Mix of interim testing (if controls tested) and year-end substantive procedures
- Standard supervision and review

**Low Combined Risk Response Guidelines:**
- Substantive analytical procedures may suffice for some assertions (if corroborated)
- Reduced sample sizes for tests of details (guideline: 10-15 items or coverage of 30-40% by value)
- Staff level auditor with senior review
- Combination of controls testing and reduced substantive work
- Standard supervision

**IMPORTANT NOTE:** These are GUIDELINES, not fixed rules. Professional judgment is required. Sample sizes and coverage must consider:
- Materiality (performance materiality for the area)
- Risk assessment (higher risk = more testing)
- Population characteristics (size, homogeneity, value distribution)
- Nature of misstatement expected (overstatement vs. understatement)
- Reliance on controls (if testing controls, can reduce substantive testing)

## Output Format

**1. Risk Assessment Matrix Table:**

| Financial Statement Area | Assertion | Inherent Risk (H/M/L) | Inherent Risk Rationale | Control Risk (H/M/L) | Control Assessment | Combined Risk (H/M/L) | Planned Audit Response |
|---------------------------|-----------|----------------------|-------------------------|---------------------|--------------------|-----------------------|------------------------|
| **ASSETS** | | | | | | | |
| Cash & Bank | Existence | L | Liquid asset, easily verifiable through bank confirmations; low complexity; objective third-party evidence available | L | Bank reconciliations performed monthly, reviewed by manager; segregation between recording and custody maintained | L | Bank confirmations for all accounts, review reconciliations, test bank transfers around year-end (sample 5-10 items) |
| Cash & Bank | Completeness | M | Risk of unrecorded cash receipts exists in cash sales business; potential for cash handling gaps | M | Daily cash register reconciliations but manual process; small amounts involved | M | Test cash receipts around year-end (sample 15 items), review cash book completeness, confirm no unrecorded bank accounts |
| Trade Receivables | Existence | H | High value (Rs. [amount] = [X%] of total assets); collectibility uncertain in current economic environment; customer base includes some financially stressed entities | M | Aging report reviewed monthly by management; credit limits set and monitored; approval process for new customers | H | External confirmations for 70% by value (positive confirmations), test subsequent cash collections for 30 days post year-end, review aging analysis |
| Trade Receivables | Valuation | H | Requires Expected Credit Loss (ECL) estimate per Ind AS 109; significant judgment in forward-looking assumptions; economic uncertainty increases estimation complexity | H | ECL methodology documented but limited evidence of historical loss data accuracy; assumptions not updated for current economic conditions | H | Test ECL model and key assumptions (probability of default, loss given default, forward-looking factors), engage credit risk specialist for review, retrospective review of prior year estimates vs. actuals, recalculate ECL for top 20 customers |
| Inventory | Existence | M | Physical inventory spread across 3 locations; some items stored at third-party warehouses; volume of SKUs makes physical verification challenging | M | Periodic physical counts conducted (2x per year) but no perpetual inventory system; some locations have restricted access | M | Physical observation at year-end count at 2 main locations (80% of value), attend counts, perform test counts (sample 25 items), confirm inventory at third-party locations |
| Inventory | Valuation | M | Net realizable value (NRV) estimate required for slow-moving items; some obsolescence risk in technology products; judgment required | M | Management reviews aging report and identifies slow-moving items, but limited documentation of NRV calculations | M | Test NRV calculations for slow-moving items (sample 15 items), review aging report, compare carrying value to recent selling prices, assess adequacy of obsolescence provision |
| Revenue | Occurrence | H | Fraud risk identified per SA 240 (presumed revenue recognition fraud risk); pressure to meet targets due to loan covenants; year-end sales spike observed in analytical review | M | Sales approval process in place, invoices system-generated, dispatch documents required; but manual overrides possible | H | Test 100% of invoices >Rs. [amount] in last 10 days of year, confirm terms with top 15 customers (70% of revenue), analyze revenue by month for unusual patterns, review manual journal entries to revenue accounts |
| Revenue | Cut-off | M | Year-end sales around reporting date; dispatch typically same day as invoice but some timing gaps possible | L | Strong cut-off controls, system-generated invoices linked to dispatch module, automatic dating; review process for year-end transactions | L | Test sales cut-off (5 days before/after year-end, sample 20 items), trace to dispatch documents, confirm no bill-and-hold arrangements |
| ... | ... | ... | ... | ... | ... | ... | ... |

**2. Entity-Level Control Environment Summary:**

Overall assessment: [Strong / Adequate / Weak]

- Tone at the top: [Assessment and evidence]
- Organizational structure: [Assessment and evidence]
- Board and audit committee: [Assessment and evidence]
- Internal audit: [Assessment and evidence]
- Finance team competence: [Assessment and evidence]
- IT general controls: [Assessment and evidence]
- Monitoring controls: [Assessment and evidence]

Impact on audit approach: [How entity-level controls affect overall control risk assessments and audit strategy]

**3. Process-Level Controls Summary Table:**

| Area | Key Controls Identified | Design Effective? | Will Test and Rely? |
|------|------------------------|-------------------|---------------------|
| Revenue | Sales approval workflow, system-generated invoices, dispatch document matching | Yes | Yes - test 25 transactions |
| Receivables | Credit approval process, aging review, collections monitoring | Yes | Partially - test aging review only |
| Inventory | Physical count procedures, NRV review process | Partially - NRV review lacks documentation | No - substantive approach for valuation |
| ... | ... | ... | ... |

**4. Significant Risks Summary:**

Areas where combined risk is assessed as **High** requiring special audit consideration per SA 330:

| Area-Assertion | Why Significant Risk | Responsive Procedures Planned |
|----------------|---------------------|-------------------------------|
| Trade Receivables - Valuation | High inherent risk (complex ECL estimate) + High control risk (weak ECL methodology) = High combined risk | Engage specialist, test model, recalculate top customers, retrospective review |
| Revenue - Occurrence | High inherent risk (fraud risk identified) + Medium control risk (controls present but overridable) = High combined risk | 100% testing of large year-end sales, customer confirmations, analytical review, journal entry testing |
| ... | ... | ... |

**5. Risk Assessment Summary Dashboard:**

| Combined Risk Level | Number of Area-Assertion Combinations | Percentage of Total |
|---------------------|---------------------------------------|---------------------|
| High | [count] | [%] |
| Medium | [count] | [%] |
| Low | [count] | [%] |
| **TOTAL** | [count] | 100% |

**Working paper reference:** CAF-02-RSK-001

**Reference to SA 315 (Revised 2019):** Risk assessment is performed at the assertion level for each significant financial statement area. Inherent risk must be assessed on a spectrum from low to high BEFORE considering the effect of controls. Control risk is assessed separately. The combined assessment of inherent risk and control risk determines the risk of material misstatement and drives the nature, timing, and extent of substantive procedures per SA 330.

**Linkage to other audit phases:**
- Risk matrix results feed into /audit:significant-risks (areas with High combined risk)
- Risk matrix drives /audit:audit-plan procedures (nature, timing, extent responsive to assessed risks)
- Fraud risks from /audit:fraud-risk should be reflected as higher inherent risk in this matrix
- Analytical review unusual items from /audit:analytical-review should inform inherent risk assessment

---

**Disclaimer:** This tool provides a structured framework for risk assessment documentation per SA 315 (Revised 2019), but does not substitute professional audit judgment. All risk assessments, control evaluations, and planned audit responses must be reviewed and approved by the engagement partner or manager. The auditor retains full responsibility for determining appropriate risk levels and designing responsive audit procedures. Risk assessment is an iterative process and may require revision as audit evidence is obtained.
