# Audit Plan

Develop detailed audit plan per SA 300 (Planning an Audit of Financial Statements) and SA 330 (The Auditor's Responses to Assessed Risks), linking assessed risks to specific audit procedures with nature, timing, and extent determinations.

## Required Context

Before running this command, ensure the following prerequisites are complete:
- **Overall audit strategy documented** (reference /audit:audit-strategy output - CAF-01-STR-001)
- **Risk assessment completed with risk matrix** (reference /audit:risk-matrix output - CAF-02-RSK-001)
- **Significant risks identified** (reference /audit:significant-risks output - CAF-02-SIG-001)
- **Fraud risk assessment completed** (reference /audit:fraud-risk output - CAF-02-FRA-001)
- **Materiality calculated** (overall materiality and performance materiality amounts)
- **Understanding of internal controls documented** (from entity understanding and walkthrough procedures)

**Ask user:** "Confirm the following are complete before generating audit plan: (1) Audit strategy (CAF-01-STR-001), (2) Risk matrix (CAF-02-RSK-001), (3) Significant risks register (CAF-02-SIG-001), (4) Fraud risk assessment (CAF-02-FRA-001), (5) Materiality calculation. Provide document references or confirm completion."

## Workflow

### Step 1: Confirm Prerequisites and Import Risk Assessment

Import risk assessment data to ensure audit plan is responsive to assessed risks.

**Import from prior assessments:**
- **Significant financial statement areas** from audit strategy (all material account balances, transaction classes, and disclosures)
- **Risk ratings by area and assertion** from risk matrix (inherent risk, control risk, combined risk)
- **Significant risks** from significant risks register (all risks rated as "significant" requiring specific procedures)
- **Fraud risks** from fraud risk assessment (minimum: revenue recognition + management override of controls per SA 240)
- **Performance materiality** for sample size and extent determination

**Decision point:** If any prerequisite is missing or incomplete:
- STOP: "Cannot generate audit plan without complete risk assessment. Complete [missing document] first, then return to audit plan development."
- Rationale: SA 330 requires audit procedures to be responsive to assessed risks. Without risk assessment, cannot design appropriate procedures.

### Step 2: Controls-Reliance Decision Tree

For each significant financial statement area, determine whether to adopt a **controls-reliance approach** (test controls + reduced substantive procedures) or **substantive-only approach** (no controls testing, full substantive procedures).

#### Controls-Reliance vs. Substantive-Only Decision Factors

| Decision Factor | Controls-Reliance Approach | Substantive-Only Approach |
|-----------------|---------------------------|---------------------------|
| **Control environment** | Strong tone at top, effective governance, integrity of management | Weak governance, management override concerns, poor ethical culture |
| **Process controls** | Well-designed controls, documented policies, operating effectively | Weak controls, undocumented processes, controls not operating as designed |
| **IT environment** | Robust IT general controls (ITGC), reliable system-generated reports, automated controls | Weak ITGC, manual processes, unreliable system reports |
| **Transaction volume** | High volume (testing every transaction impractical or inefficient) | Low volume (can test all or most transactions substantively) |
| **Entity size** | Larger entity with formal control structure, segregation of duties | Small entity with owner-manager oversight, limited segregation |
| **Cost-effectiveness** | Controls testing is cost-effective (reduces substantive work significantly) | Substantive testing is more efficient (controls testing effort not justified) |
| **Prior year results** | Controls tested and found effective in prior year, no significant deficiencies | Controls not tested OR found deficient OR first-year engagement |
| **Audit strategy** | Strategy contemplates controls reliance to achieve efficiency | Strategy contemplates substantive-only approach |

**Ask user** for each significant financial statement area: "For [Revenue / Receivables / Inventory / Payables / Payroll / Fixed Assets / etc.], will you rely on controls (test controls + reduced substantive) or use substantive-only approach? Consider the decision factors above."

**SA 330 requirements for controls-reliance:**
- **Must test operating effectiveness in CURRENT PERIOD** (SA 330.10) - cannot rely solely on prior year controls testing
- **For significant risks:** Even with controls reliance, must perform substantive procedures (SA 330.21)
- **For IT controls:** If relying on automated controls or system reports, must test relevant ITGC (SA 330.10)

**For substantive-only areas:**
- No controls testing performed
- Full substantive procedures (analytical + tests of details as appropriate)
- Still document understanding of controls (required by SA 315, even if not testing)

#### Document Approach Decision

| Financial Statement Area | Approach | Rationale |
|--------------------------|----------|-----------|
| Revenue | [Controls-reliance / Substantive-only] | [Explain: e.g., "High volume of transactions, well-designed automated revenue system with robust ITGC, controls testing cost-effective"] |
| Receivables | [Controls-reliance / Substantive-only] | [Explain] |
| Inventory | [Controls-reliance / Substantive-only] | [Explain] |
| Purchases & Payables | [Controls-reliance / Substantive-only] | [Explain] |
| Payroll | [Controls-reliance / Substantive-only] | [Explain] |
| Fixed Assets | [Controls-reliance / Substantive-only] | [Explain] |
| Cash & Bank | [Substantive-only] | [Standard: Cash typically substantive-only due to high inherent risk] |
| [Other significant areas] | [approach] | [Explain] |

**Decision point:** Validate approach consistency with audit strategy:
- "Approaches documented above are consistent with overall audit strategy (CAF-01-STR-001). Controls-reliance areas align with strategy's planned efficiency gains. Substantive-only areas align with risk assessment or cost-benefit analysis."

### Step 3: Generate Detailed Audit Plan Matrix

This is the **core output** of the audit plan. For each significant financial statement area and relevant assertion, document specific audit procedures with nature, timing, extent, team assignment, and SA reference.

**SA 330 risk-responsive procedures:** Audit procedures must be directly responsive to assessed risks. Higher risk → more extensive procedures, different nature/timing.

#### Audit Plan Matrix Template

| FS Area | Assertion | Identified Risk | Risk Level | Nature of Procedure | Timing | Extent/Sample | Responsible | SA Reference |
|---------|-----------|-----------------|------------|---------------------|--------|---------------|-------------|--------------|
| Revenue | Existence | Fictitious sales, revenue recognized prematurely | High | (1) Test controls on sales approval workflow (if controls-reliance) (2) External confirmations of year-end receivables (3) Test of details: Select sample of revenue transactions, vouch to supporting documentation (customer PO, delivery proof, invoice) | (1) Interim (2) Year-end (3) Year-end | (1) 25 transactions across year (2) 70% value coverage (3) 35 transactions > PM | Senior A | SA 330, SA 505 |
| Revenue | Cut-off | Sales recorded in wrong period | Medium | Cut-off testing: Test all sales transactions 5 days before and after year-end to confirm recorded in correct period | Year-end | All sales > Rs. 5 lakhs in cut-off period | Assistant B | SA 330 |
| Revenue | Accuracy | Revenue misstated (pricing, quantity errors) | Low | (1) Test controls on pricing approval (if controls-reliance) (2) Substantive analytical procedures: Analytical review of revenue by product/month vs. prior year and budget (3) Reperformance: Recalculate sample invoices (price × quantity) | (1) Interim (2) Final (3) Year-end | (1) 20 transactions (2) All products (3) 15 invoices | (1) Assistant B (2) Senior A (3) Assistant B | SA 330, SA 520 |
| Receivables | Existence | Receivables do not exist or not collectible | High | (1) External confirmations: Send confirmations to sample of customers (2) Alternative procedures for non-responses: Vouch subsequent cash receipts (3) Aging analysis: Review aging, assess collectibility | Year-end | (1) 70% value coverage, stratified sample (2) All non-responses (3) Complete aging | Senior A | SA 505, SA 330 |
| Receivables | Valuation | ECL (Expected Credit Loss) provision inadequate per Ind AS 109 | High | (1) Test ECL methodology for compliance with Ind AS 109 (2) Review customer creditworthiness for significant balances (3) Test management's assessment of credit-impaired accounts (4) Recalculate ECL provision for sample | Year-end | (1) Full methodology review (2) Top 20 customers by balance (3) All Stage 3 accounts (4) 10 accounts across all stages | Manager | SA 540, Ind AS 109 |
| Inventory | Existence | Inventory physically missing, not recorded, or fictitious | Medium | (1) Physical observation: Attend year-end inventory count, perform test counts (2) Test roll-forward: If count before year-end, test transactions between count and year-end (3) Compare book to physical count results, investigate variances | Year-end | (1) Observe at 15 locations (material locations covering 80% value), test count 50 items per location (2) All material movements if interim count (3) All variances > Rs. 50,000 | Assistant B + Senior C | SA 501, SA 330 |
| Inventory | Valuation | NRV impairment not recorded, inventory overvalued | Medium | (1) Test NRV calculations: Compare cost to NRV for sample items (2) Review slow-moving and obsolete inventory: Aging analysis, assess obsolescence provision adequacy (3) Test cost accumulation: For manufactured items, test overhead allocation | Year-end | (1) All items > Rs. 1 lakh + sample of others (15 items) (2) All items not moved in 12 months (3) 10 manufactured items | Senior C | SA 540, Ind AS 2 |
| Purchases & Payables | Completeness | Purchases/payables not recorded (understatement) | Medium | (1) Test controls on GRN/invoice matching (if controls-reliance) (2) Search for unrecorded liabilities: Review post year-end payments, GRNs near year-end, unmatched GRNs (3) Analytical procedures: Purchases vs. COGS and inventory movement | (1) Interim (2) Year-end (3) Final | (1) 20 transactions (2) All payments > Rs. 2 lakhs in first month post year-end + all unmatched GRNs (3) Overall analysis | (1) Assistant B (2) Senior A (3) Senior A | SA 330 |
| Payroll | Occurrence | Fictitious employees, ghost employees on payroll | Low | (1) Test controls on employee master data changes (if controls-reliance) (2) Test sample of payroll transactions: Vouch to employment contract, attendance records, bank transfer proof (3) Analytical procedures: Payroll trend analysis | (1) Interim (2) Year-end (3) Final | (1) 15 changes (2) 20 employees (stratified: all >Rs. 50k/month + sample of others) (3) Monthly trend | Assistant B | SA 330 |
| Fixed Assets | Existence | Assets disposed but not removed from books, assets do not exist | Low | (1) Physical verification: Inspect sample of material assets (2) Test additions: Vouch to supporting documents (invoice, approval, capitalization worksheet) (3) Test disposals: Vouch to disposal documentation, verify gain/loss calculation | Year-end | (1) All assets > Rs. 10 lakhs + 10% of others by value (2) All additions > Rs. 5 lakhs (3) All disposals | Senior C | SA 501, SA 330 |
| Fixed Assets | Valuation | Depreciation incorrect, impairment not recognized | Low | (1) Recalculate depreciation for sample of assets (2) Review impairment indicators per Ind AS 36 (3) If impairment identified, test recoverable amount calculation | Year-end | (1) 15 assets across categories (2) All CGUs, assess indicators (3) If applicable, test detailed calculations | Senior C | SA 330, Ind AS 36 |
| [Continue for all significant areas] | [assertion] | [risk] | [level] | [procedures] | [timing] | [extent] | [team] | [SA ref] |

**Nature of Procedure Codes:**
- **ToC** = Test of Controls (operating effectiveness)
- **SAP** = Substantive Analytical Procedures
- **ToD** = Tests of Details (detailed substantive testing)
- **Confirmation** = External confirmations (customers, banks, lawyers)
- **Physical Observation** = Inventory counts, asset inspection
- **Recalculation** = Reperform client calculations
- **Reperformance** = Reperform client procedures
- **Inspection** = Inspect documents, contracts, agreements
- **Inquiry** = Management inquiry, third-party inquiry
- **Specialist** = Engage auditor's expert (valuation, actuarial, IT, tax)

**Risk-Responsive Sizing Guidelines (Professional Judgment Required):**

| Combined Risk Level | Sample Size Guidance | Procedure Emphasis | Team Level | Additional Considerations |
|---------------------|---------------------|-------------------|-----------|---------------------------|
| **High** | Larger samples (30-40 items for ToD, or value coverage >70%) | Tests of details REQUIRED (cannot rely solely on analytics) | Manager/Partner involvement | Consider engaging specialist, extend to 100% testing for very high risk |
| **Medium** | Moderate samples (15-25 items for ToD) | Mix of analytics and details acceptable | Senior auditor level | Balance efficiency with coverage |
| **Low** | Smaller samples (10-15 items for ToD) | Substantive analytics may suffice (supported by limited ToD) | Staff level adequate | Focus effort on higher-risk areas |

**Important:** These are guidelines, not rules. Sample sizes depend on:
- Performance materiality (lower PM → larger samples)
- Population size and variability
- Tolerable error and expected error
- Sampling methodology (statistical vs. non-statistical)
- Results of controls testing (effective controls → may reduce substantive extent)

### Step 4: SA 330 Significant Risk Procedures

For EACH significant risk identified in the significant risks register (CAF-02-SIG-001), document specific responsive procedures.

**SA 330 Requirements for Significant Risks:**
- **SA 330.21:** If the auditor has determined that an assessed risk of material misstatement at the assertion level is a significant risk, the auditor shall perform substantive procedures that are specifically responsive to that risk.
- **CONSTRAINT:** Cannot rely solely on substantive analytical procedures for significant risks (SA 330.21)
- **CONSTRAINT:** Must include tests of details as part of response (SA 330.21)
- **CONSTRAINT:** If relying on controls for significant risks, must test operating effectiveness in current period (SA 330.15)

#### Significant Risk Responsive Procedures Schedule

| Significant Risk | Risk # | Financial Statement Impact | Responsive Procedures | SA 330 Compliance Check |
|------------------|--------|---------------------------|----------------------|-------------------------|
| Revenue recognition for long-term contracts (percentage of completion method) | SR-01 | Revenue, Receivables (Contract Assets) | (1) Test management's percentage of completion calculations: Reperform for sample of contracts, assess reasonableness of cost-to-complete estimates (2) Engage technical expert to assess stage of completion for complex projects (3) Test of details: Vouch costs incurred to supporting documentation (4) Review contract terms for variable consideration, assess management's estimates (5) Test cut-off and revenue allocation across periods | ToD included: YES (procedures 1, 3, 4, 5 are all tests of details), Current period ToC: N/A (substantive-only approach for this risk) |
| Inventory valuation (significant estimation uncertainty in NRV for slow-moving items) | SR-02 | Inventory, Cost of Sales | (1) Test NRV calculations for all slow-moving inventory items (>12 months aging) (2) Assess management's obsolescence provision methodology for bias (3) Engage industry specialist for technical obsolescence assessment (4) Test subsequent sales of slow-moving items post year-end to confirm NRV (5) Recalculate provision based on auditor's assessment | ToD included: YES (procedures 1, 4, 5), Current period ToC: N/A (substantive approach) |
| Related party transactions (significant transactions with related parties not at arm's length) | SR-03 | Multiple areas: Revenue, Purchases, Receivables, Payables, Other Income | (1) Confirm completeness of related party listing (board minutes, KMP disclosures, statutory registers) (2) Test of details: Vouch all significant related party transactions to supporting agreements (3) Assess arm's length nature: Compare pricing/terms to third-party transactions (4) Review substance over form: Assess business rationale for transactions (5) Test disclosure completeness per Ind AS 24 | ToD included: YES (procedures 2, 3, 5), Current period ToC: N/A (substantive approach) |
| Management override of controls (presumed fraud risk per SA 240) | SR-04 | Multiple areas (journal entries, estimates, unusual transactions) | See Step 5 - Fraud Risk Responsive Procedures (management override section) | ToD included: YES (journal entry testing, estimate review, unusual transaction investigation all involve tests of details), Current period ToC: N/A (fraud risk - substantive procedures required) |
| [Additional significant risks from register] | SR-XX | [impact] | [specific procedures responsive to risk] | [compliance check] |

**For each significant risk:**
- Procedures must be SPECIFICALLY RESPONSIVE to the identified risk (not generic procedures)
- Must include tests of details (SA 330.21 constraint)
- Extent must be sufficient given significance of risk (larger samples, higher coverage)
- Partner/manager involvement required for all significant risks

### Step 5: Fraud Risk Responsive Procedures

SA 240 (The Auditor's Responsibilities Relating to Fraud) requires specific procedures for PRESUMED fraud risks (revenue recognition + management override).

#### Revenue Recognition Fraud Risk (SA 240 Presumption)

**Risk:** Revenue may be recognized prematurely, fictitiously, or in wrong period to meet targets or inflate performance.

**Responsive Procedures:**
1. **Test revenue cut-off:** Test all revenue transactions in 10 days before and after year-end to confirm recorded in correct period (tighter window than standard cut-off testing)
2. **Analyze monthly revenue for unusual patterns/spikes:** Identify any unusual spikes near period-end, quarter-end, or year-end that may indicate manipulation
3. **Confirm significant transaction terms with customers:** Send confirmations for significant/unusual transactions to verify terms (price, quantity, delivery, payment terms, return rights)
4. **Review manual journal entries affecting revenue accounts:** Test all material manual journal entries to revenue (especially period-end adjustments)
5. **Test significant credit notes issued post year-end:** Review all significant credit notes in first 3 months post year-end, assess whether relate to pre year-end revenue (potential overstatement)
6. **Investigate unusual revenue transactions:** Identify transactions with unusual terms (extended payment, contingent pricing, bill-and-hold, consignment) and test for substance
7. **Test revenue recognition policy compliance:** For complex transactions, assess compliance with Ind AS 115 five-step model (especially performance obligations, variable consideration, timing)

#### Management Override of Controls (SA 240 Presumption)

**Risk:** Management can override controls to manipulate financial statements (journal entries, estimates, unusual transactions).

**Responsive Procedures:**
1. **Test ALL material manual journal entries made during period:**
   - Identify journal entries meeting characteristics: (a) made to unrelated accounts, (b) made by unusual users, (c) made at period-end, (d) without adequate description
   - For selected entries: Vouch to supporting documentation, assess business rationale, verify approval
   - **Extent:** Test 100% of journal entries >performance materiality, PLUS sample of others meeting risk characteristics
   - **Team:** Manager or partner to review high-risk entries

2. **Review accounting estimates for management bias:**
   - Identify all significant estimates (ECL, NRV, depreciation, provisions, fair values)
   - Assess reasonableness: Compare management's estimates to auditor's independent expectation or prior year outcomes
   - Look for directional bias: Are estimates consistently favorable to management (income-increasing)?
   - **Areas of focus:** Estimates affecting key ratios, debt covenants, or bonus targets

3. **Investigate significant unusual transactions:**
   - Identify transactions outside normal course of business or appearing unusual given understanding of entity
   - For each unusual transaction: Assess business rationale, test authorization, vouch to supporting documentation, consider substance over form
   - **Examples:** Large one-time sales, asset sales near year-end, complex restructuring, significant related party transactions

4. **Test journal entries to unusual account combinations:**
   - Identify journal entries between accounts not normally transacted together (e.g., revenue to equity, expense to asset)
   - Test for proper accounting treatment and business justification

5. **Analytical review of period-end adjustments:**
   - Compare period-end adjustments to prior years
   - Investigate adjustments that reverse in subsequent period (potential income smoothing)
   - Assess whether adjustments are supported by business events or appear manipulative

#### Element of Unpredictability (SA 240 Requirement)

**Decision point:** "What unpredictable procedure will you include this year to reduce risk of auditor procedures becoming predictable?"

**Examples of unpredictable elements:**
- Perform inventory observation at unannounced date/location
- Test accounts or assertions not normally tested in detail (e.g., detailed testing of low-risk account)
- Vary timing of procedures from prior year (e.g., if prior year tested at interim, test at year-end this year)
- Change sample selection method or criteria
- Assign different team members to areas than prior year
- Perform surprise cash counts
- Test journal entries from different period than prior year focus

**Document unpredictable element:** "[Describe specific unpredictable procedure planned for current engagement]"

### Step 6: Timing and Team Assignment

Map each procedure to timeline phase and assign responsible team member.

#### Audit Timeline Phases

| Phase | Timing | Key Procedures |
|-------|--------|----------------|
| **Planning** | 2-3 months before year-end | Audit strategy, risk assessment, materiality, planning analytics, controls understanding |
| **Interim** | 1-2 months before year-end (typically 2-3 months before balance sheet date) | Controls testing, substantive procedures up to interim date, preliminary analytics |
| **Year-end** | At or near balance sheet date | Physical observations (inventory, assets), external confirmations, cut-off testing |
| **Roll-forward** | Between interim and year-end | Test transactions from interim to year-end for areas tested at interim |
| **Final / Completion** | After year-end, before audit report | Subsequent events review, going concern assessment, final analytics, management representations, overall review |

#### Team Assignment Matrix

| Team Member | Role | Primary Responsibilities | Supervision/Review |
|-------------|------|--------------------------|-------------------|
| Partner | Engagement Partner | Overall engagement responsibility, significant risk procedures, significant judgments, fraud risk discussions, final review, audit report signing | Self (technical consultation for complex matters) |
| Manager | Engagement Manager | Planning, risk assessment, supervision of field work, review of working papers, significant accounts, complex areas | Partner review of significant matters |
| Senior A | Senior Auditor | Revenue, receivables, analytical procedures, complex testing, supervision of assistants | Manager review |
| Senior C | Senior Auditor | Inventory, fixed assets, related areas, supervision of assistants | Manager review |
| Assistant B | Staff Auditor | Payables, payroll, detailed testing, controls testing, support for seniors | Senior review (Senior A or C depending on area) |
| [Specialist if needed] | Auditor's Expert | Specialized areas: IT controls, tax provisions, actuarial valuations, complex fair values | Manager/Partner supervision |

**Supervision requirements:**
- All working papers reviewed by next level (assistant → senior → manager → partner)
- Significant risks: Partner involvement required
- Fraud risks: Partner involvement required
- Complex estimates: Manager or partner review required
- All significant judgments: Partner review required

#### Budget Allocation

| Phase | Budgeted Hours | Team Distribution | Timeline |
|-------|----------------|-------------------|----------|
| **Planning** | [X hours] | Partner [Y hours], Manager [Z hours], Senior [A hours], Staff [B hours] | [Start date] to [End date] |
| **Interim (if applicable)** | [X hours] | Partner [Y hours], Manager [Z hours], Senior [A hours], Staff [B hours] | [Start date] to [End date] |
| **Year-end execution** | [X hours] | Partner [Y hours], Manager [Z hours], Senior [A hours], Staff [B hours] | [Start date] to [End date] |
| **Final / Completion** | [X hours] | Partner [Y hours], Manager [Z hours], Senior [A hours], Staff [B hours] | [Start date] to [End date] |
| **TOTAL** | [Total hours] | Partner [%], Manager [%], Senior [%], Staff [%] | [Overall timeline] |

**Budget considerations:**
- First-year engagements: 20-30% higher budget (learning curve, no prior year reference)
- Complex areas (significant risks, estimates, fraud risks): Allocate more partner/manager time
- Controls-reliance approach: More interim time (controls testing), less year-end time (reduced substantive)
- Substantive-only approach: Less interim time, more year-end time (extensive substantive procedures)

## Output Format

**Detailed Audit Plan (CAF-01-PLN-001)** containing:

### 1. Controls-Reliance Decision Summary
- Table showing approach (controls-reliance vs. substantive-only) for each significant area
- Rationale for each decision
- Confirmation of consistency with audit strategy

### 2. Audit Plan Matrix (Main Output)
- Complete matrix for ALL significant financial statement areas and assertions
- Columns: FS Area | Assertion | Identified Risk | Risk Level | Nature of Procedure | Timing | Extent/Sample | Responsible | SA Reference
- Detailed procedures responsive to assessed risks
- Risk-responsive extent (higher risk → more extensive procedures)

### 3. Significant Risk Procedures Schedule
- Separate emphasis table for each significant risk from register
- Specific responsive procedures documented
- SA 330 compliance check (ToD included, current period ToC if applicable)
- Partner/manager involvement noted

### 4. Fraud Risk Responsive Procedures
- Revenue recognition fraud risk procedures (7 procedures minimum)
- Management override fraud risk procedures (5 procedures minimum)
- Element of unpredictability documented

### 5. Controls Testing Plan (if controls-reliance for any area)
- For each area with controls-reliance approach: Identify key controls to be tested
- Test design: How control operates, what evidence of operation
- Sample size for controls testing
- Timing of controls testing (interim)

### 6. Timeline and Team Assignment
- Audit timeline phases with key procedures mapped
- Team assignment matrix with roles and responsibilities
- Supervision and review requirements

### 7. Budget Hours Allocation
- Budgeted hours by phase and team member
- Team distribution percentages
- Overall engagement timeline

### 8. Working Paper Reference and Cross-References
- Document reference: CAF-01-PLN-001
- Prepared by: [Name], Date: [Date]
- Reviewed by: [Name], Date: [Date]

**Clear linkage note:**
"This audit plan implements the overall audit strategy (CAF-01-STR-001). All procedures are responsive to assessed risks from the risk matrix (CAF-02-RSK-001), significant risks register (CAF-02-SIG-001), and fraud risk assessment (CAF-02-FRA-001). Higher risk areas receive more extensive procedures with increased sample sizes, tests of details, and senior team member involvement."

**SA 300/330 compliance:**
- SA 300.9: Audit plan is more detailed than strategy, describing nature, timing, and extent of procedures
- SA 330.5: Procedures must be responsive to assessed risks at assertion level
- SA 330.21: Significant risks require tests of details, cannot rely solely on analytics
- SA 330.22: Substantive procedures for significant risks must be specifically responsive to that risk

---

**Disclaimer:** This tool assists with audit workflow documentation but does not substitute professional audit judgment. All audit plans must be tailored to specific engagement circumstances and reviewed by qualified Chartered Accountants. SA 330 requires professional judgment in designing procedures responsive to assessed risks - standardized procedures are insufficient for high-risk areas.
