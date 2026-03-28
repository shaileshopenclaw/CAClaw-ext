# CARO 2020 Checklist

Generate a comprehensive working paper checklist for CARO 2020 covering all clauses and sub-clauses with evidence requirements, verification steps, common qualification triggers, and cross-references to main audit working papers. This checklist serves as both a planning tool (to identify evidence to gather) and a completion tool (to verify all clauses addressed before drafting report).

## Description

This command generates a clause-by-clause working paper checklist for CARO 2020 (Companies Auditor's Report Order) effective from FY 2021-22 onwards. The checklist covers all 21 main clauses (3(i) through 3(xxi)) and 38 sub-clauses with specific evidence requirements, verification procedures, qualification triggers, and status tracking.

The checklist should be used at TWO stages:
1. **Planning Stage:** Identify what evidence needs to be collected for each applicable CARO clause during fieldwork
2. **Completion Stage:** Verify all clauses have been addressed with appropriate evidence before drafting CARO report using /audit:caro-report command

This systematic approach ensures no CARO clause is missed and audit evidence is complete.

## Required Context

Before running this command, ensure:
- Entity type and CARO applicability have been confirmed (see /audit:caro-report for applicability assessment)
- Audit planning is complete with understanding of entity operations and business model
- Access to all statutory registers and records maintained by the entity
- Communication established with management for CARO-specific representations
- Understanding of which audit areas have been completed (to determine CARO clause coverage)

**Ask the user:**
- What is the entity type and has CARO applicability been confirmed?
- Which audit areas have been completed so far? (To assess which CARO clauses have supporting working papers)
- Is this for planning stage (before fieldwork) or completion stage (before CARO report drafting)?
- Are there any known areas of non-compliance or limitation of scope that will affect CARO reporting?

## Workflow

1. **Confirm CARO Applicability** — Use the applicability assessment from /audit:caro-report command to verify CARO 2020 applies to the entity. If exempt, document reason and discontinue CARO checklist.

2. **Create Master Checklist Table** — For each of the 21 clauses and 38 sub-clauses, create a structured checklist with columns:
   - Clause/Sub-Clause number
   - Requirement (brief description of what auditor must verify)
   - Applicable? (Yes/No/Partial - based on entity-specific facts)
   - Evidence Required (specific documents, registers, reconciliations)
   - Verification Steps (what auditor must do)
   - Working Paper Reference
   - Completion Status (Not Started/In Progress/Complete)
   - Conclusion (Favorable/Adverse/NA)

3. **For Each Clause, Document Evidence Requirements** — Specify exact registers, documents, reconciliations, and computations required. See detailed clause-by-clause requirements in Evidence Requirements section below.

4. **Identify Common Qualification Triggers** — For each high-risk clause, list warning indicators that lead to adverse CARO reporting. See Common Qualification Triggers section below.

5. **Cross-Reference to Main Audit Working Papers** — Map each CARO clause to the corresponding audit program area and working paper reference. This ensures main audit work supports CARO conclusions.

6. **Obtain Management Representations** — Document CARO-specific representations required from management. See Management Representation Requirements section below.

7. **Track Completion Status** — Update checklist as audit progresses. At completion stage, ensure all applicable clauses show "Complete" status with appropriate conclusion (Favorable/Adverse/NA).

8. **Prepare Summary** — Identify any clauses requiring adverse reporting or not applicable treatment for CARO report drafting.

## Master Checklist Table

### Clause 3(i): Property, Plant and Equipment (PPE) and Intangible Assets

| Sub-Clause | Requirement | Applicable? | Evidence Required | Verification Steps | WP Ref | Status | Conclusion |
|------------|-------------|-------------|-------------------|-------------------|--------|--------|------------|
| 3(i)(a) | PPE and intangible assets records maintained | Y/N | - Fixed Asset Register with quantitative details<br>- Location/situation details for each asset<br>- Reconciliation of FAR to general ledger | - Verify FAR contains: Description, quantity, location, cost, accumulated depreciation<br>- Match FAR gross block to GL<br>- Sample test 25-50 assets for completeness of details | | | Favorable/Adverse/NA |
| 3(i)(b) | Physical verification conducted at reasonable intervals | Y/N | - Physical verification reports (current year + prior years)<br>- Management policy on verification frequency<br>- Discrepancy reports and adjustments | - Review verification policy (per SA 501, verify at least every 3 years)<br>- Verify frequency is reasonable (100% verification every 3 years or rotating basis)<br>- Check material discrepancies identified and adjustments made | | | Favorable/Adverse/NA |
| 3(i)(c) | Title deeds of immovable properties held in company's name | Y/N | - Title deeds/sale deeds for all properties<br>- Property register<br>- Legal opinion on title (if recent purchase) | - Obtain list of all immovable properties from FAR<br>- Verify title deed name matches company<br>- For properties not in company name, prepare table with details per CARO format<br>- Verify whether promoter/director/relative holds title | | | Favorable/Adverse/NA |
| 3(i)(d) | Revaluation of PPE/intangible assets | Y/N | - Revaluation reports from Registered Valuer<br>- Board resolution approving revaluation<br>- Accounting entries for revaluation | - If revaluation done, verify Registered Valuer per Rule 2 of Companies (Registered Valuers and Valuation) Rules, 2017<br>- Check revaluation increase credited to revaluation reserve<br>- Verify depreciation on revalued amount | | | Favorable/Adverse/NA |
| 3(i)(e) | Benami property proceedings | Y/N | - Management representation on benami property<br>- Legal searches for proceedings under Benami Transactions Act | - Obtain explicit management representation<br>- Conduct legal database search for proceedings against company<br>- If proceedings exist, obtain details (property, value, forum) | | | Favorable/Adverse/NA |

**Common Qualification Triggers - Clause 3(i):**
- PPE register not maintained with quantitative details (especially for items acquired before computerization)
- Location/situation column blank for movable assets (computers, equipment, vehicles)
- Physical verification not conducted (common for geographically dispersed assets)
- Verification done only for high-value items, small items ignored (violates "all PPE" requirement)
- Material discrepancies in verification (shortage/excess) not adjusted in books
- Immovable properties held in director's name or not yet transferred to company name
- Title deeds pending registration (sale deed executed but registration pending)
- Revaluation done by non-Registered Valuer (violates Companies Act 2013)

### Clause 3(ii): Inventory

| Sub-Clause | Requirement | Applicable? | Evidence Required | Verification Steps | WP Ref | Status | Conclusion |
|------------|-------------|-------------|-------------------|-------------------|--------|--------|------------|
| 3(ii)(a) | Physical verification of inventory at reasonable intervals; discrepancies | Y/N | - Inventory physical count reports (year-end or periodic)<br>- Management policy on inventory verification frequency<br>- Discrepancy reports (book vs. physical)<br>- Adjustments in books | - Review inventory verification policy<br>- Assess frequency as reasonable (year-end or periodic based on business)<br>- Compare book inventory to physical count<br>- Verify material discrepancies >5% or >PM identified and adjusted<br>- For perpetual inventory system, verify cycle counts conducted | | | Favorable/Adverse/NA |
| 3(ii)(b) | Working capital facilities secured by inventory/receivables; quarterly return reconciliation | Y/N | - Sanction letters from banks/FIs showing WC limits >Rs. 5 crore<br>- Quarterly stock statements filed with banks (Form A/B/C)<br>- Books of account (inventory, receivables ledgers)<br>- Reconciliation of stock statements to books | - Obtain all sanction letters, sum WC limits (if >Rs. 5 crore, clause applies)<br>- Obtain copies of quarterly stock statements (Q1/Q2/Q3/Q4)<br>- For each quarter, reconcile stock statement figures to books:<br>&nbsp;&nbsp;- Inventory as per books vs. stock statement<br>&nbsp;&nbsp;- Trade receivables as per books vs. stock statement<br>- Prepare variance table if differences exist (see CARO report template) | | | Favorable/Adverse/NA |

**Common Qualification Triggers - Clause 3(ii):**
- Physical verification not conducted by management (auditor attendance alone doesn't satisfy this)
- Verification conducted only at year-end for high-inventory-turnover businesses (frequency unreasonable)
- Material discrepancies between book and physical (>5% or >performance materiality) not adjusted
- Discrepancies written off directly to P&L without investigation
- Quarterly stock statements inflated compared to books (to satisfy bank margin requirements)
- RM/WIP/FG not separately disclosed in stock statements (leads to misstatement)
- Drawing power calculation in stock statement incorrect (valuation not at cost or NRV)

### Clause 3(iii): Investments, Guarantees, Loans to Specified Parties (Section 189)

| Sub-Clause | Requirement | Applicable? | Evidence Required | Verification Steps | WP Ref | Status | Conclusion |
|------------|-------------|-------------|-------------------|-------------------|--------|--------|------------|
| 3(iii)(a) | Loans/guarantees/security provided - Register under Section 189 | Y/N | - Register maintained under Section 189 of Companies Act<br>- Loan agreements<br>- Board resolutions approving loans/guarantees<br>- General ledger for loans/advances | - Obtain Section 189 register<br>- Verify all parties covered: Subsidiaries, JVs, associates, firms in which director is partner, private companies in which director is member/director<br>- Verify register contains: Party name, amount, terms, security, repayment schedule<br>- Match register to GL and ensure completeness | | | Favorable/Adverse/NA |
| 3(iii)(b) | Terms not prejudicial to company's interest | Y/N | - Loan agreements with terms (interest rate, repayment, security)<br>- Company's borrowing cost (for comparison)<br>- Market interest rates for comparable instruments | - Compare loan interest rate to company's cost of funds (if lending rate < borrowing rate, potentially prejudicial)<br>- Verify adequate security obtained (if unsecured loan to related party, assess risk)<br>- Check repayment terms are commercially reasonable<br>- For investments, verify return expectation is reasonable | | | Favorable/Adverse/NA |
| 3(iii)(c) | Repayment schedule stipulated; receipts regular | Y/N | - Loan agreements showing principal and interest repayment schedule<br>- Bank statements/receipts showing actual repayments<br>- Aging of principal and interest receivable | - Verify loan agreement specifies: Principal repayment schedule (monthly/quarterly/bullet), Interest payment frequency<br>- Compare scheduled vs. actual repayments<br>- Identify any delays or defaults<br>- Calculate overdue amounts (principal and interest separately) | | | Favorable/Adverse/NA |
| 3(iii)(d) | Overdue amounts >90 days | Y/N | - Aging analysis of loans and interest receivable<br>- Follow-up correspondence with borrowers for overdue amounts | - Prepare aging: 0-90 days, 91-180 days, 181-365 days, >365 days<br>- Identify amounts overdue >90 days (both principal and interest)<br>- Verify whether reasonable steps taken to recover overdue amounts | | | Favorable/Adverse/NA |
| 3(iii)(e) | Loans renewed/extended or fresh loans to settle overdues | Y/N | - Board resolutions approving renewals/extensions<br>- Amended loan agreements<br>- Fresh loan agreements<br>- Analysis of whether fresh loan proceeds used to settle old loan | - Identify any loans falling due during the year<br>- Check if any were renewed or extended (amended repayment terms)<br>- Check if fresh loans granted to same party around time old loan became due<br>- If yes, assess whether renewal/extension is prejudicial (evergreening of bad loans) | | | Favorable/Adverse/NA |
| 3(iii)(f) | Loans repayable on demand or without terms | Y/N | - All loan agreements<br>- Analysis of repayment terms | - Review all loan agreements<br>- Identify any loans: Repayable on demand, OR without specifying period of repayment<br>- If yes, report amount of such loans | | | Favorable/Adverse/NA |

**Common Qualification Triggers - Clause 3(iii):**
- Section 189 register not maintained (common for smaller companies)
- Loans to related parties at interest rate below company's borrowing cost (prejudicial terms)
- Unsecured loans to related parties without adequate justification (risk of non-recovery)
- Repayment schedule not documented in loan agreement (verbal arrangements)
- Principal or interest overdue >90 days without adequate follow-up action
- Loans renewed multiple times without principal reduction (evergreening)
- Fresh loans granted to borrower with existing overdue loans (circumventing default reporting)
- Loans structured as "on demand" to avoid specific repayment commitment

### Clause 3(iv): Compliance with Sections 185 and 186

| Sub-Clause | Requirement | Applicable? | Evidence Required | Verification Steps | WP Ref | Status | Conclusion |
|------------|-------------|-------------|-------------------|-------------------|--------|--------|------------|
| 3(iv) | Loans/investments/guarantees/security under Sections 185 & 186 | Y/N | - **Section 185:** Loans to directors, firms in which director is partner, private companies in which director is member<br>- **Section 186:** All loans, investments, guarantees, securities<br>- Board resolutions<br>- Special resolutions (if required)<br>- Financial statements for limit calculations | **Section 185 verification:**<br>- Identify all loans/guarantees to directors/related entities<br>- Verify shareholder approval by special resolution obtained (unless exemption applies)<br>- Check exemptions: Loans to wholly-owned subsidiary, guarantee for subsidiary borrowing<br><br>**Section 186 verification:**<br>- Sum all loans, investments, guarantees, securities given<br>- Calculate limit: 60% of paid-up capital + free reserves + securities premium, OR 100% of free reserves + securities premium, whichever is higher<br>- Verify Board resolution passed before making investment/loan/guarantee<br>- If exceeding limit, verify special resolution passed<br>- Check annual return disclosure (MGT-7) includes Section 186 details | | | Favorable/Adverse/NA |

**Common Qualification Triggers - Clause 3(iv):**
- Loans to directors or director-related entities without shareholder approval (Section 185 violation)
- Section 186 limits exceeded without special resolution
- Board resolution not passed before granting loan/making investment
- Investment in unquoted equity shares of private companies exceeds limits
- Guarantees given without disclosure in annual return
- Loan to subsidiary not exempted (subsidiary not wholly-owned)

### Clause 3(v): Public Deposits (Sections 73-76)

| Sub-Clause | Requirement | Applicable? | Evidence Required | Verification Steps | WP Ref | Status | Conclusion |
|------------|-------------|-------------|-------------------|-------------------|--------|--------|------------|
| 3(v) | Acceptance of public deposits and compliance with Sections 73-76 | Y/N | - Deposit register<br>- Form DPT-3 filed with ROC<br>- Deposit repayment schedule<br>- Interest payment records<br>- Credit rating (if applicable)<br>- Deposit insurance (if applicable) | - Obtain list of all deposits accepted during year<br>- Verify definition: "Deposit" per Rule 2(1)(c) of Companies (Acceptance of Deposits) Rules, 2014<br>- Exclude amounts not constituting deposits (director loans with conditions, advance for goods/services)<br>- Verify Form DPT-3 filed with ROC within 30 days of deposit acceptance<br>- Check deposit limits not exceeded (35% of paid-up capital + free reserves for public companies)<br>- Verify repayment defaults (if any)<br>- Verify interest payment timeliness | | | Favorable/Adverse/NA |

**Common Qualification Triggers - Clause 3(v):**
- Form DPT-3 not filed with ROC within prescribed time
- Deposits accepted in excess of 35% limit (public companies) or in violation of prohibition (private companies from AY 2019-20)
- Deposit repayment defaults (principal not repaid on maturity)
- Interest payment delays exceeding 30 days
- Deposit insurance not obtained (if required)
- Credit rating not obtained for public companies accepting deposits

### Clause 3(vi): Cost Records under Section 148(1)

| Sub-Clause | Requirement | Applicable? | Evidence Required | Verification Steps | WP Ref | Status | Conclusion |
|------------|-------------|-------------|-------------------|-------------------|--------|--------|------------|
| 3(vi) | Maintenance of cost records prescribed under Section 148(1) | Y/N | - Notification from MCA prescribing cost records for specific products/industries<br>- Cost accounting records maintained by company<br>- Cost audit report (if applicable) | - Check if company's product/industry is covered under Companies (Cost Records and Audit) Rules, 2014<br>- Industries typically covered: Electricity, pharmaceuticals, bulk drugs, sugar, fertilizers, petroleum products, etc.<br>- If prescribed, verify cost records maintained showing: Material cost, labor cost, overhead allocation, cost of production<br>- Cross-check with cost auditor's report (if cost audit applicable) | | | Favorable/Adverse/NA |

**Common Qualification Triggers - Clause 3(vi):**
- Cost records prescribed but not maintained (violation of Section 148)
- Cost records incomplete (missing material consumption details, overhead allocation)
- Cost records not reconciled with financial accounts
- Cost audit qualification on adequacy of cost records

### Clause 3(vii): Statutory Dues

**Cross-reference:** This clause should be supported by detailed working paper from /audit:statutory-dues command.

| Sub-Clause | Requirement | Applicable? | Evidence Required | Verification Steps | WP Ref | Status | Conclusion |
|------------|-------------|-------------|-------------------|-------------------|--------|--------|------------|
| 3(vii)(a) | Regularity in depositing statutory dues; dues outstanding >6 months | Always Applicable | - PF challans and ECR (monthly, April-March)<br>- ESI challans and returns (monthly, April-March)<br>- TDS challans (monthly for salary TDS, quarterly for other TDS) and returns (24Q, 26Q, 27Q)<br>- GST payment history and GSTR-3B (monthly)<br>- Professional tax payment receipts<br>- Income tax advance tax challans<br>- Other statutory dues (labour welfare fund, state-specific levies)<br>- Aging analysis as of balance sheet date | **For each statutory due:**<br>1. Prepare regularity table with columns: Due type, Period, Amount, Due date, Payment date, Delay (days)<br>2. Identify any delays in deposit<br>3. Compute aging as of 31-March: Days outstanding = 31-March minus original due date<br>4. Filter for dues outstanding >180 days (6 months)<br>5. If any dues outstanding >6 months, prepare adverse reporting table per CARO format<br><br>**Use /audit:statutory-dues command for detailed verification** | | | Favorable/Adverse/NA |
| 3(vii)(b) | Disputed statutory dues not deposited | Always Applicable | - Demand orders from tax authorities (Income Tax, GST, Service Tax, Excise, Customs, VAT, etc.)<br>- Appeal orders<br>- Stay orders (if any)<br>- Schedule of disputed dues with forum details | - Obtain list of all demand orders received from tax authorities<br>- Identify demands against which company has filed appeal<br>- For each disputed demand, prepare table with columns: Name of statute, Nature of dues, Amount, Period, Forum where pending<br>- Cross-verify with contingent liabilities note in financial statements<br>- If no disputed dues, favorable reporting<br><br>**Use /audit:statutory-dues command for complete disputed dues table** | | | Favorable/Adverse/NA |

**Common Qualification Triggers - Clause 3(vii):**
- PF/ESI delays >6 months (very common, especially during COVID periods)
- TDS deposited late (after due date) for multiple months
- GST payment delays (common when ITC claimed exceeds actual liability)
- Professional tax not deposited (ignored by companies, attracts penalty)
- Disputed dues not disclosed in CARO report (missing forum details)
- Demand orders appealed to CIT(A) or GST Appellate Authority but not reported in CARO
- Interest paid on delayed statutory dues (red flag for regularity)

### Clause 3(viii): Unrecorded Income Surrendered or Disclosed in Tax Assessments

| Sub-Clause | Requirement | Applicable? | Evidence Required | Verification Steps | WP Ref | Status | Conclusion |
|------------|-------------|-------------|-------------------|-------------------|--------|--------|------------|
| 3(viii) | Transactions not recorded in books but surrendered/disclosed as income during tax assessment | Y/N | - Tax assessment orders for current year and prior years<br>- Income surrendered details (Section 132(4), Section 153A assessments)<br>- Voluntary disclosure schemes (if any)<br>- Books of account entries | - Obtain all tax assessment orders (scrutiny, search, survey assessments)<br>- Identify any income surrendered or disclosed not previously recorded in books<br>- Common examples: Unexplained cash credits (Section 68), unexplained investments (Section 69), unexplained expenses (Section 69C), unrecorded sales<br>- Verify whether such income was subsequently recorded in books<br>- Obtain management representation on completeness of income disclosure | | | Favorable/Adverse/NA |

**Common Qualification Triggers - Clause 3(viii):**
- Unrecorded income surrendered during search/survey (Section 132/133A)
- Cash credits (Section 68) disclosed in tax assessment not in books
- Unexplained investments identified during assessment
- Income disclosed under voluntary disclosure schemes not recorded
- Settlement Commission proceedings with income addition

### Clause 3(ix): Default in Repayment of Loans and Borrowings

| Sub-Clause | Requirement | Applicable? | Evidence Required | Verification Steps | WP Ref | Status | Conclusion |
|------------|-------------|-------------|-------------------|-------------------|--------|--------|------------|
| 3(ix)(a) | Default in repayment to banks/FIs/government/lenders | Y/N | - Sanction letters (term loans, working capital facilities)<br>- Repayment schedules<br>- Bank statements showing actual repayments<br>- Default notices from lenders (if any)<br>- Audited financial statements of lenders showing NPA classification (if listed) | - Obtain all loan agreements and repayment schedules<br>- Compare scheduled repayments (principal and interest) to actual repayments<br>- Identify any delays/defaults<br>- Prepare default table per CARO format: Lender name, Amount in default, Principal/Interest/Both, Period of default (months)<br>- Verify if defaults cured before balance sheet date<br>- Obtain lender confirmations to verify NPA status | | | Favorable/Adverse/NA |
| 3(ix)(b) | Declared willful defaulter by bank/FI/government | Y/N | - RBI willful defaulter list (public database)<br>- Bank letters/notices declaring willful defaulter status<br>- Management representation | - Search RBI's List of Willful Defaulters (published on RBI website quarterly)<br>- Obtain explicit management representation that company is not declared willful defaulter<br>- Check for any notices from lenders regarding willful default proceedings | | | Favorable/Adverse/NA |
| 3(ix)(c) | Term loan utilized for purposes for which obtained | Y/N | - Term loan sanction letters specifying purpose<br>- Utilization certificates submitted to banks<br>- Books of account showing application of loan proceeds<br>- Asset register (if loan for capital expenditure) | - For each term loan, identify stated purpose in sanction letter<br>- Trace loan proceeds in bank account<br>- Verify actual utilization matches stated purpose<br>- Examples: Loan for machinery purchase → verify machinery acquired; Loan for working capital → verify used for inventory/receivables<br>- Check if any diversion of funds to other purposes | | | Favorable/Adverse/NA |
| 3(ix)(d) | Short-term funds used for long-term purposes | Y/N | - Working capital limits and utilization<br>- Cash credit/overdraft account statements<br>- Fixed asset register<br>- Capital work-in-progress schedule<br>- Long-term investments | - Define short-term: Working capital facilities (cash credit, overdraft), short-term borrowings (< 1 year maturity)<br>- Define long-term purposes: Capital expenditure (PPE, intangibles), long-term investments, CWIP, deferred revenue expenditure<br>- Analyze utilization: Check if WC limits used to fund capex or long-term investments<br>- Red flag: CC/OD account showing large debits for fixed asset purchases | | | Favorable/Adverse/NA |
| 3(ix)(e) | Funds raised from entities/persons to meet obligations of subsidiaries/associates/JVs | Y/N | - Loan agreements showing purpose<br>- Bank statements<br>- Intercompany loan agreements<br>- Subsidiary/associate financial statements | - Identify any loans/borrowings raised by company during year<br>- Check stated purpose: If purpose is to fund subsidiary/JV/associate (onward lending or guarantee settlement), clause applies<br>- Trace fund flow: Company borrows → Company lends to subsidiary or pays subsidiary's obligations<br>- Assess commercial rationale and terms | | | Favorable/Adverse/NA |
| 3(ix)(f) | Loans raised on pledge of securities of subsidiaries/JVs/associates | Y/N | - Loan agreements with pledge clauses<br>- Share certificates of subsidiaries/JVs pledged<br>- Stock statements (if securities pledged)<br>- Demat account statements showing lien marking | - Review all loan agreements for security clauses<br>- Identify any where security includes shares of subsidiary/JV/associate held by company<br>- Obtain details: Pledged shares (number, value), Lender, Loan amount, Terms<br>- Verify disclosure in notes to financial statements | | | Favorable/Adverse/NA |

**Common Qualification Triggers - Clause 3(ix):**
- Default in term loan EMI payments (delayed by >30 days for multiple months)
- Interest on loans not paid on due date (shows cash flow stress)
- Overdraft limit exceeded continuously (indicates disguised term loan)
- Willful defaulter status (RBI list search shows company name)
- Term loan for machinery but funds used for working capital (diversion)
- CC/OD account used to purchase fixed assets (short-term for long-term)
- Holding company borrows to fund loss-making subsidiary (cash drain)
- Shares of subsidiary pledged for holding company's borrowing (siphoning risk)

### Clause 3(x): Fraud Reported by or on the Company

| Sub-Clause | Requirement | Applicable? | Evidence Required | Verification Steps | WP Ref | Status | Conclusion |
|------------|-------------|-------------|-------------------|-------------------|--------|--------|------------|
| 3(x) | Fraud by the company or on the company noticed/reported | Always Applicable | - Fraud reporting under Section 143(12) to MCA<br>- Whistleblower complaints<br>- Management fraud inquiry reports<br>- Police complaints/FIRs (if filed)<br>- Management representation letter | - Review whistleblower complaints received during year<br>- Check management fraud inquiry reports<br>- Verify if any fraud reported to MCA under Section 143(12) during audit<br>- Obtain explicit management representation: "All instances of fraud have been disclosed to auditors"<br>- Document frauds if any: Nature (misappropriation, financial reporting fraud, asset theft), Amount, Parties involved, Reporting status, Recovery status | | | Favorable/Adverse/NA |

**Common Qualification Triggers - Clause 3(x):**
- Fraud detected during audit (theft, embezzlement, financial statement fraud)
- Fraud reported under Section 143(12) to MCA (mandates CARO reporting)
- Whistleblower complaint investigation confirmed fraud
- Management identified but did not report fraud to auditors initially
- Cyber fraud (payment diversion, email compromise) causing monetary loss

### Clause 3(xi): Managerial Remuneration under Section 197

| Sub-Clause | Requirement | Applicable? | Evidence Required | Verification Steps | WP Ref | Status | Conclusion |
|------------|-------------|-------------|-------------------|-------------------|--------|--------|------------|
| 3(xi) | Managerial remuneration paid/provided per Section 197 read with Schedule V | Y/N | - Board resolution approving managerial remuneration<br>- Remuneration policy<br>- Computation of permissible limits per Section 197 and Schedule V<br>- Shareholder approval (special resolution if limits exceeded)<br>- Financial statements (for profit calculation) | - Identify all managerial personnel: Managing Director, Whole-time Director, Manager<br>- Calculate permissible limits per Section 197:<br>&nbsp;&nbsp;- If profit: 11% for one MD/WTD/Manager, 10% for all directors<br>&nbsp;&nbsp;- If inadequate profit or loss: Schedule V limits apply (based on effective capital)<br>- Sum actual remuneration paid (salary, commission, perquisites, PF contribution)<br>- Compare actual vs. permissible<br>- If exceeded, verify shareholder approval by special resolution obtained | | | Favorable/Adverse/NA |

**Common Qualification Triggers - Clause 3(xi):**
- Remuneration exceeds Section 197 limits without shareholder approval
- Company in loss but paying remuneration exceeding Schedule V limits
- Effective capital calculation incorrect (not based on subscribed capital minus losses)
- Shareholder approval taken but excess remuneration not within permissible special resolution limits
- Perquisites not included in remuneration calculation (understatement of total remuneration)

### Clause 3(xii): Nidhi Company Compliance

| Sub-Clause | Requirement | Applicable? | Evidence Required | Verification Steps | WP Ref | Status | Conclusion |
|------------|-------------|-------------|-------------------|-------------------|--------|--------|------------|
| 3(xii) | Nidhi Company compliance with Net Owned Funds to Deposits ratio and unencumbered deposits | Y/N | - Nidhi Company registration certificate<br>- NOF computation<br>- Deposits register<br>- Unencumbered term deposits certificates<br>- Financial statements | - Verify company is registered as Nidhi Company under Section 406<br>- Calculate Net Owned Funds (NOF): Paid-up equity capital + Free reserves - Accumulated losses - Intangible assets<br>- Calculate Total Deposits<br>- Verify ratio: NOF:Deposits = 1:20 (NOF must be at least 1/20th of deposits)<br>- Verify unencumbered term deposits: Company must maintain 10% of deposits as unencumbered term deposits<br>- Check other Nidhi Rules compliance (membership, borrowing restrictions) | | | Favorable/Adverse/NA |

**Common Qualification Triggers - Clause 3(xii):**
- NOF to Deposits ratio violated (NOF insufficient for deposit base)
- Unencumbered term deposits not maintained at 10% level
- Nidhi accepting deposits from non-members (violation)
- Borrowing limits exceeded (Nidhi cannot borrow more than 1.5 times NOF)

### Clause 3(xiii): Related Party Transactions (Sections 177 and 188)

| Sub-Clause | Requirement | Applicable? | Evidence Required | Verification Steps | WP Ref | Status | Conclusion |
|------------|-------------|-------------|-------------------|-------------------|--------|--------|------------|
| 3(xiii) | Related party transactions compliance with Sections 177 and 188; disclosure per Ind AS 24 | Y/N | - Related party register<br>- Board of Directors minutes<br>- Audit Committee minutes approving RPTs<br>- Special resolution (if material RPTs)<br>- Arm's length pricing documentation<br>- Financial statements RPT note | - Obtain list of related parties per Ind AS 24 (directors, KMPs, relatives, entities controlled/influenced)<br>- Identify all transactions with related parties during year<br>- **Section 177:** Verify all material RPTs approved by Audit Committee before entering into transaction<br>- **Section 188:** Verify Board approval obtained; if material contracts (exceeding specified limits), verify shareholder approval by special resolution<br>- Verify transactions are at arm's length<br>- Cross-verify RPT disclosure in financial statements Note (completeness) | | | Favorable/Adverse/NA |

**Common Qualification Triggers - Clause 3(xiii):**
- Material RPTs not approved by Audit Committee (Section 177 violation)
- Contracts with related parties exceeding thresholds without shareholder approval (Section 188 violation)
- RPTs not at arm's length (preferential pricing to related parties)
- Transactions with director-controlled entities not disclosed as related party
- Special resolution not passed for material contracts (>10% of turnover or specified limits)

### Clause 3(xiv): Preferential Allotment or Private Placement

| Sub-Clause | Requirement | Applicable? | Evidence Required | Verification Steps | WP Ref | Status | Conclusion |
|------------|-------------|-------------|-------------------|-------------------|--------|--------|------------|
| 3(xiv)(i) | Preferential allotment/private placement compliance with Section 42 | Y/N | - Board resolution approving preferential issue<br>- Special resolution (if applicable)<br>- Private placement offer letter<br>- Form PAS-4 filed with ROC<br>- Application money received within prescribed time<br>- Allotment within 60 days | - Verify if company made preferential allotment or private placement during year<br>- Check Section 42 compliance:<br>&nbsp;&nbsp;- Private placement offer letter issued to identified persons<br>&nbsp;&nbsp;- Special resolution passed (if required)<br>&nbsp;&nbsp;- Form PAS-4 filed with ROC before allotment<br>&nbsp;&nbsp;- Application money received within prescribed time<br>&nbsp;&nbsp;- Allotment made within 60 days of receipt of application money<br>- Verify pricing (not below fair value for preferential issue) | | | Favorable/Adverse/NA |
| 3(xiv)(ii) | Funds raised applied for stated purposes | Y/N | - Objects clause in offer letter/resolution<br>- Bank statements showing receipt and utilization<br>- Books of account<br>- Asset register or investment records | - Identify stated purpose of fund raising (capex, working capital, debt repayment, general corporate purposes)<br>- Trace fund receipt in bank account<br>- Trace utilization: Match to stated purpose<br>- Identify any unutilized funds (lying in bank or temporary investments)<br>- Verify timeline: Funds should be applied during the year or shortly after year-end | | | Favorable/Adverse/NA |

**Common Qualification Triggers - Clause 3(xiv):**
- Form PAS-4 not filed with ROC before allotment (procedural violation)
- Application money received but allotment delayed beyond 60 days (refund obligation)
- Special resolution not passed where required
- Funds raised for specific purpose (say, capex) but used for other purposes (working capital)
- Unutilized funds lying idle for extended periods without justification
- Private placement made to more than 200 persons (becomes public issue)

### Clause 3(xv): Non-cash Transactions with Directors (Section 192)

| Sub-Clause | Requirement | Applicable? | Evidence Required | Verification Steps | WP Ref | Status | Conclusion |
|------------|-------------|-------------|-------------------|-------------------|--------|--------|------------|
| 3(xv) | Non-cash transactions with directors or persons connected with directors | Y/N | - Board resolutions<br>- Transaction documents (sale deed, share transfer form)<br>- Valuation reports<br>- Disclosure in Board's report | - Identify any transactions with directors/persons connected with directors where consideration is other than cash<br>- Examples: Issue of shares for consideration other than cash, Purchase of assets from director for shares, Sale of assets to director for debentures<br>- Verify Section 192 compliance:<br>&nbsp;&nbsp;- Board resolution passed approving transaction<br>&nbsp;&nbsp;- Disclosure in Board's report<br>- Obtain management representation if no such transactions | | | Favorable/Adverse/NA |

**Common Qualification Triggers - Clause 3(xv):**
- Shares issued to director for consideration other than cash (e.g., for debt settlement) without Board approval
- Assets purchased from director against issue of shares without proper valuation
- Non-cash transaction not disclosed in Board's report (Section 192 requirement)

### Clause 3(xvi): NBFC Registration (Section 45-IA of RBI Act)

| Sub-Clause | Requirement | Applicable? | Evidence Required | Verification Steps | WP Ref | Status | Conclusion |
|------------|-------------|-------------|-------------------|-------------------|--------|--------|------------|
| 3(xvi) | Registration under Section 45-IA of RBI Act for NBFCs | Y/N | - RBI Certificate of Registration (CoR)<br>- Financial assets composition<br>- Income from financial activities<br>- Application to RBI (if pending) | - Determine if company is NBFC:<br>&nbsp;&nbsp;- Financial assets >50% of total assets, AND<br>&nbsp;&nbsp;- Income from financial assets >50% of gross income<br>- If NBFC, verify RBI registration certificate (CoR) obtained<br>- Check CoR for category: Asset Finance, Loan Company, Investment Company, etc.<br>- If registration required but not obtained, adverse reporting<br>- If not NBFC, favorable (not applicable) reporting | | | Favorable/Adverse/NA |

**Common Qualification Triggers - Clause 3(xvi):**
- Company meets NBFC criteria but not registered with RBI (violates RBI Act)
- Registration application filed but CoR not yet received (pending status)
- Company operating as NBFC without registration (serious violation attracting penalties)

### Clause 3(xvii): Cash Losses

| Sub-Clause | Requirement | Applicable? | Evidence Required | Verification Steps | WP Ref | Status | Conclusion |
|------------|-------------|-------------|-------------------|-------------------|--------|--------|------------|
| 3(xvii)(a) | Cash loss in current financial year | Always Applicable | - Financial statements (P&L, notes)<br>- Cash loss computation | - Calculate cash loss for current year (FY under audit):<br>&nbsp;&nbsp;**Cash Loss = Loss before tax + Non-cash charges (Depreciation, Provisions, Impairment) - Non-cash income (Revaluation gains, MTM gains not realized)**<br>- If result is negative (cash outflow), report cash loss amount<br>- If result is positive or zero, favorable reporting (no cash loss) | | | Favorable/Adverse/NA |
| 3(xvii)(b) | Cash loss in immediately preceding financial year | Always Applicable | - Prior year financial statements<br>- Prior year cash loss computation | - Calculate cash loss for preceding year (FY 20XX-XX):<br>&nbsp;&nbsp;Use same formula as above<br>- If prior year had cash loss, report amount<br>- If no cash loss in prior year, favorable reporting | | | Favorable/Adverse/NA |

**Common Qualification Triggers - Clause 3(xvii):**
- Cash loss in current year (operating cash outflow even before capex/financing)
- Cash loss in both current and prior year (sustained cash burn indicating going concern risk)
- Start-up/early stage companies typically have cash losses (expected but must be reported)

### Clause 3(xviii): Auditor Resignation

| Sub-Clause | Requirement | Applicable? | Evidence Required | Verification Steps | WP Ref | Status | Conclusion |
|------------|-------------|-------------|-------------------|-------------------|--------|--------|------------|
| 3(xviii) | Resignation of statutory auditors; issues/objections raised | Y/N | - Auditor resignation letter<br>- Board minutes noting resignation<br>- Form ADT-3 filed with ROC<br>- Issues/concerns mentioned in resignation letter | - Check if any statutory auditor resigned during the year<br>- If yes, obtain copy of resignation letter<br>- Extract issues, objections, or concerns raised by resigning auditor:<br>&nbsp;&nbsp;- Management integrity concerns<br>&nbsp;&nbsp;- Disagreement on accounting treatment<br>&nbsp;&nbsp;- Limitation of scope<br>&nbsp;&nbsp;- Fraud suspicion<br>&nbsp;&nbsp;- Other professional reasons<br>- Report verbatim from resignation letter<br>- If no resignation, favorable (not applicable) reporting | | | Favorable/Adverse/NA |

**Common Qualification Triggers - Clause 3(xviii):**
- Auditor resigned citing management integrity concerns (red flag for successor auditor)
- Resignation due to disagreement on revenue recognition or other accounting treatment
- Resignation due to limitation of scope (management not providing information)
- Resignation citing suspected fraud or material misstatement
- Frequent auditor changes (multiple resignations in short period)

### Clause 3(xix): Going Concern Assessment

**Cross-reference:** This clause should be supported by detailed working paper from /audit:going-concern command.

| Sub-Clause | Requirement | Applicable? | Evidence Required | Verification Steps | WP Ref | Status | Conclusion |
|------------|-------------|-------------|-------------------|-------------------|--------|--------|------------|
| 3(xix) | Material uncertainty regarding going concern based on financial ratios, aging, management plans | Always Applicable | - Financial ratios (current ratio, debt-equity, interest coverage, DSCR)<br>- Aging of receivables and payables<br>- Cash flow projections<br>- Management plans for addressing cash flow issues<br>- Going concern assessment working paper<br>- Loan default details (if any) | - Perform comprehensive going concern assessment per SA 570 (Revised):<br><br>**Financial Indicators:**<br>- Negative working capital<br>- Current ratio < 1.0<br>- Negative operating cash flows<br>- Net worth erosion<br>- Recurring losses<br>- Loan defaults (see Clause 3(ix))<br><br>**Aging Analysis:**<br>- Overdue receivables (DSO >90 days)<br>- Overdue payables (creditor pressure)<br><br>**Management Plans:**<br>- Evaluate feasibility of management's plans to address cash flow shortfalls<br><br>**Use /audit:going-concern command for detailed assessment**<br><br>If material uncertainty exists, prepare adverse reporting with specific indicators | | | Favorable/Adverse/NA |

**Common Qualification Triggers - Clause 3(xix):**
- Negative working capital with no credible refinancing plan
- Current ratio <0.5 (severe liquidity stress)
- Recurring losses for 3+ consecutive years
- Loan defaults (cross-reference Clause 3(ix))
- Negative net worth (accumulated losses exceed equity)
- Operating cash flow negative for multiple years
- Overdue payables with supplier legal notices
- Bank account freezes or garnishment orders

### Clause 3(xx): Corporate Social Responsibility (CSR) - Section 135

| Sub-Clause | Requirement | Applicable? | Evidence Required | Verification Steps | WP Ref | Status | Conclusion |
|------------|-------------|-------------|-------------------|-------------------|--------|--------|------------|
| 3(xx)(a) | Unspent CSR amount - transfer to Fund specified in Schedule VII or special account | Y/N | - CSR Committee minutes<br>- CSR policy<br>- CSR expenditure details<br>- Computation of 2% of average net profit<br>- Unspent CSR Account details<br>- Transfer proof (if applicable) | - Verify Section 135 applicability:<br>&nbsp;&nbsp;- Net worth ≥Rs. 500 crore, OR<br>&nbsp;&nbsp;- Turnover ≥Rs. 1,000 crore, OR<br>&nbsp;&nbsp;- Net profit ≥Rs. 5 crore<br>- Calculate required CSR spend: 2% of average net profit of preceding 3 FYs<br>- Verify actual CSR spend during year<br>- If shortfall exists:<br>&nbsp;&nbsp;- Unspent amount for ongoing projects → Transfer to Unspent CSR Account within 30 days<br>&nbsp;&nbsp;- Unspent amount for other than ongoing projects → Transfer to Fund in Schedule VII (PM CARES, etc.) within 6 months<br>- Verify transfer dates and compliance | | | Favorable/Adverse/NA |
| 3(xx)(b) | Ongoing project - transfer to Unspent CSR Account within 30 days | Y/N | - Ongoing CSR project details<br>- Unspent CSR Account bank statement<br>- Transfer details | - Identify if company has ongoing CSR projects (projects with implementation period >1 year)<br>- Calculate unspent amount for ongoing projects<br>- Verify transfer to Unspent CSR Account within 30 days of FY end (by 30-April)<br>- If delayed or not transferred, adverse reporting | | | Favorable/Adverse/NA |

**Common Qualification Triggers - Clause 3(xx):**
- CSR expenditure shortfall without valid reasons (company didn't spend required 2%)
- Unspent CSR amount not transferred to Schedule VII Fund within 6 months
- Ongoing project amount not transferred to Unspent CSR Account within 30 days
- CSR spent on activities not eligible under Schedule VII
- CSR Committee not constituted despite Section 135 applicability
- Average net profit calculation incorrect (3-year average not computed properly)

### Clause 3(xxi): Consolidated Financial Statements (Holding/Subsidiary)

| Sub-Clause | Requirement | Applicable? | Evidence Required | Verification Steps | WP Ref | Status | Conclusion |
|------------|-------------|-------------|-------------------|-------------------|--------|--------|------------|
| 3(xxi) | Qualifications/adverse remarks in CARO reports of subsidiaries/JVs included in consolidated FS | Y/N | - Audited financial statements of all subsidiaries/associates/JVs<br>- CARO reports of all subsidiaries/associates/JVs (where applicable)<br>- Consolidation working papers | - Identify if company is holding company or has subsidiaries/JVs/associates<br>- Obtain CARO reports for all Indian subsidiaries/JVs (CARO applies to them separately)<br>- Review each CARO report for qualifications or adverse remarks<br>- If any qualification/adverse remark exists:<br>&nbsp;&nbsp;- Reproduce the qualification in holding company's CARO report<br>&nbsp;&nbsp;- Specify entity name, relationship, clause number, nature of qualification<br>&nbsp;&nbsp;- Assess impact on consolidated financial statements<br>- If no qualifications in subsidiary CARO reports, favorable reporting (not applicable) | | | Favorable/Adverse/NA |

**Common Qualification Triggers - Clause 3(xxi):**
- Subsidiary has CARO qualification (e.g., statutory dues default, loan default, going concern) → Must be reproduced in holding company's consolidated CARO
- Multiple subsidiaries with different CARO qualifications (compile all)
- Subsidiary CARO not available (scope limitation in consolidation)

## Common Qualification Triggers - Consolidated Summary

The following are the most frequent causes of adverse CARO reporting across all clauses:

1. **Clause 3(i) - PPE:** PPE register not maintained with quantitative details; physical verification not done or material discrepancies not adjusted; title deeds not in company's name

2. **Clause 3(ii) - Inventory:** Physical verification frequency unreasonable; material discrepancies not adjusted; quarterly stock statements to banks not reconciled with books

3. **Clause 3(iii) - Loans to specified parties:** Loans at non-arm's length rates; repayment schedules not followed; amounts overdue >90 days; loan evergreening through renewals

4. **Clause 3(vii) - Statutory dues:** PF/ESI/TDS outstanding >6 months (most common CARO qualification); disputed statutory dues not disclosed with forum details

5. **Clause 3(ix) - Loan defaults:** Default in term loan EMI payments; overdraft limits exceeded; short-term WC funds used for long-term capex

6. **Clause 3(x) - Fraud:** Any fraud detected must be reported (no threshold)

7. **Clause 3(xiii) - Related party transactions:** Material RPTs without Audit Committee/Board/shareholder approval; transactions not at arm's length

8. **Clause 3(xix) - Going concern:** Negative working capital; recurring losses; loan defaults creating material uncertainty

9. **Clause 3(xx) - CSR:** Unspent CSR amount not transferred to prescribed fund/account within time limit

## Management Representation Requirements

Obtain the following CARO-specific management representations in the management representation letter:

### General Representation:
"We confirm that we have provided complete information to the auditors for the purposes of CARO 2020 reporting. All registers, records, and documents required for CARO compliance have been made available."

### Clause-Specific Representations:

- **Clause 3(i)(e) - Benami property:** "No proceedings have been initiated or are pending against the Company for holding any benami property under the Benami Transactions (Prohibition) Act, 1988."

- **Clause 3(x) - Fraud:** "All instances of fraud by the Company or on the Company have been disclosed to the auditors. We confirm that there are no undisclosed fraud instances."

- **Clause 3(viii) - Unrecorded income:** "All income surrendered or disclosed during tax assessments has been communicated to the auditors. No transactions were surrendered as income that were not recorded in the books of account."

- **Clause 3(ix)(b) - Willful defaulter:** "The Company has not been declared a willful defaulter by any bank, financial institution, government, or government authority."

- **Clause 3(xii) - Nidhi Company:** (If applicable) "The Company has complied with all the provisions of the Nidhi Rules, 2014, including the Net Owned Funds to Deposits ratio and maintenance of unencumbered term deposits."

- **Clause 3(xviii) - Auditor resignation:** "There has been no resignation of statutory auditors during the year." [OR: "The statutory auditors [Name] resigned on [date]. The resignation letter and all issues raised therein have been provided to you."]

- **Clause 3(xx) - CSR:** (If applicable) "All CSR expenditure has been incurred in accordance with Section 135 of the Companies Act, 2013. Unspent CSR amounts, if any, have been transferred to the prescribed funds/accounts within the stipulated timelines."

## Cross-References to Main Audit Working Papers

Map each CARO clause to corresponding audit areas and working papers:

| CARO Clause | Audit Area (from /audit:program) | Working Paper Cross-Reference | Additional Commands |
|-------------|----------------------------------|-------------------------------|-------------------|
| 3(i) | Fixed Assets | PPE audit program, Physical verification report, FAR | /audit:program fixed-assets |
| 3(ii) | Inventory | Inventory audit program, Physical count observation, NRV testing | /audit:program inventory |
| 3(iii), 3(iv) | Loans & Advances, Investments | Loans audit program, Section 189 register, Investment verification | /audit:program loans-advances, investments |
| 3(v) | Deposits | Deposit register, DPT-3 filing verification | (Included in other-areas) |
| 3(vi) | Cost Records | Cost audit report review | (Included in other-areas) |
| 3(vii) | Statutory Compliance | Statutory dues working paper | **/audit:statutory-dues** |
| 3(viii) | Tax Assessments | Tax assessment order review | (Part of tax computation) |
| 3(ix) | Borrowings | Borrowings audit program, Loan agreements, Repayment schedules | /audit:program borrowings |
| 3(x) | Fraud Inquiry | Whistleblower complaints, Fraud investigation reports | (Part of risk assessment) |
| 3(xi) | Managerial Remuneration | Director remuneration computation, Section 197 limits | (Part of related parties) |
| 3(xii) | Nidhi Compliance | Nidhi Rules compliance verification | (Included in other-areas if applicable) |
| 3(xiii) | Related Parties | Related party transactions working paper | /audit:program related-parties |
| 3(xiv) | Share Capital | Preferential issue documents, fund utilization tracking | /audit:program share-capital |
| 3(xv) | Director Transactions | Non-cash transaction register | (Part of related parties) |
| 3(xvi) | NBFC Registration | RBI CoR, NBFC criteria assessment | (Included in other-areas if applicable) |
| 3(xvii) | Cash Losses | Cash loss computation | (Part of analytical review) |
| 3(xviii) | Auditor Changes | Auditor resignation letter | (Part of engagement acceptance) |
| 3(xix) | Going Concern | Going concern assessment working paper | **/audit:going-concern** |
| 3(xx) | CSR | CSR expenditure computation, compliance verification | (Included in other-areas) |
| 3(xxi) | Consolidation | Subsidiary CARO reports | (Part of group audit) |

## Output Format

A comprehensive CARO 2020 working paper checklist containing:

### 1. Cover Page
- Entity name
- Financial year under audit
- CARO applicability confirmation (Yes/No with rationale)
- Prepared by / Date
- Reviewed by / Date

### 2. Master Checklist
- All 21 clauses and 38 sub-clauses in tabular format (see Master Checklist Table sections above)
- Columns: Clause number, Requirement, Applicable (Y/N), Evidence Required, Verification Steps, WP Reference, Status, Conclusion

### 3. Evidence Obtained Summary
- For each applicable clause, list key evidence obtained:
  - Document name
  - Date obtained
  - Source (management/bank/government portal)
  - Working paper filed at

### 4. Common Qualification Triggers Review
- For high-risk clauses (3(i), 3(ii), 3(vii), 3(ix), 3(xix), 3(xx)), checklist of common triggers reviewed
- Note any triggers identified during audit

### 5. Management Representations
- List of CARO-specific representations required
- Status: Obtained / Pending / Not Applicable

### 6. Cross-Reference Map
- Table mapping each CARO clause to audit program area and working paper reference

### 7. Summary of Conclusions
- List all clauses requiring Favorable / Adverse / Not Applicable reporting
- For adverse reporting: Brief reason and CARO report impact

### 8. Sign-off
- Prepared by: [Name, Signature, Date]
- Reviewed by: [Senior/Manager Name, Signature, Date]
- Approved by: [Partner Name, Signature, Date]

### 9. Appendices
- Appendix A: CARO applicability assessment computation
- Appendix B: Detailed evidence checklists for complex clauses (3(vii), 3(ix), 3(xix))
- Appendix C: Reconciliation of CARO checklist to /audit:caro-report output

---

**Disclaimer:** This tool assists with audit workflow documentation but does not substitute professional audit judgment. All outputs must be reviewed by qualified Chartered Accountants. CARO 2020 checklist preparation requires understanding of entity-specific facts, applicable laws, and audit evidence standards per SA 500 (Audit Evidence).
