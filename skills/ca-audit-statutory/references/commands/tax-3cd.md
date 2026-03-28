# Form 3CD Clause Guidance

Guide through all 44 clauses of Form 3CD systematically for tax audit under Section 44AB of the Income Tax Act, providing clause-wise verification requirements, source documents, common errors, and cross-references to relevant sections per ICAI Guidance Note on Tax Audit (Revised 2025).

## Required Context

Before running this command, ensure:
- Tax audit applicability confirmed (turnover/gross receipts exceed prescribed limits under Section 44AB)
- Complete audited financial statements are available
- Tax computation and ITR draft are prepared
- All relevant books of account, statutory registers, and tax workings are accessible
- Prior year Form 3CD and tax audit report available for reference

Ask the user to provide:
- **Assessment Year and Previous Year**: Required for Form 3CD header
- **Entity type**: Company/LLP/firm/individual/HUF (affects certain clauses)
- **Section 115BAA/115BAB option**: Whether entity has opted for concessional tax regime (affects depreciation and deduction clauses)
- **Turnover figure**: For Section 44AB applicability confirmation and threshold verification

## Workflow

Form 3CD contains 44 clauses organized into four logical sections. This command guides through each clause systematically with verification points, source documents, and common error warnings.

### Section A: Basic Information (Clauses 1-12)

These clauses capture fundamental assessee information and audit basis.

**Clause 1-6: Assessee Details**
- **Information Required**: Name, PAN, status (company/firm/individual/HUF/AOP/BOI), registered address, previous year, assessment year
- **Source Documents**: PAN card, registration certificate, ITR of previous year
- **Verification**: Ensure PAN matches across all documents; verify assessment year = previous year + 1
- **Common Errors**: Incorrect previous year dates (should be 01-Apr to 31-Mar), PAN mismatch with ITR

**Clause 7: Nature of Business**
- **Information Required**: Nature of business/profession with NIC (National Industrial Classification) code
- **Source Documents**: Certificate of incorporation, business registration, GST registration
- **Verification**: NIC code must be 4 or 5 digits matching primary business activity
- **Common Errors**: Generic description without NIC code, NIC code not matching actual business activity

**Clause 8: Partnership Firm/AOP/BOI Details**
- **Information Required**: If assessee is partnership firm/AOP/BOI, details of partners/members
- **Source Documents**: Partnership deed, profit sharing agreement
- **Verification**: Cross-check with Section 189 register (if company giving loans to partners)
- **Applicability**: Mark "Not Applicable" if assessee is company/LLP/individual/HUF

**Clauses 9-10: Audit Requirements**
- **Clause 9**: Whether books of account audited under any other law (e.g., Companies Act for companies)
- **Clause 10**: Basis of liability to tax audit - turnover exceeds Rs. 1 crore (business) / Rs. 10 crore (digital transactions 95%+) / Rs. 50 lakh (profession) / opted out of presumptive taxation
- **Verification**: For Clause 10, compute turnover from books and verify against threshold
- **Common Errors**: Not verifying digital transaction percentage for Rs. 10 crore threshold; incorrect turnover computation (should exclude GST if separately shown)

**Clause 11: Books of Account**
- **Information Required**: Books of account maintained as per Section 44AA
- **Source Documents**: List of books maintained (cash book, ledger, stock register, sales/purchase register, etc.)
- **Verification**: For companies - statutory books required; for business > Rs. 25 lakh income - books required per Section 44AA
- **Common Errors**: Not mentioning auxiliary books (purchase register, sales register, expense register)

**Clause 12: Presumptive Taxation**
- **Information Required**: Whether eligible for presumptive taxation under Section 44AD/44ADA/44AE but opted for regular computation
- **Verification**: Check turnover/gross receipts against presumptive scheme thresholds
- **Applicability**: If not applicable to presumptive schemes or turnover exceeds limits, mark "Not Applicable"

### Section B: Profit & Loss Details (Clauses 13-21)

These clauses verify P&L items requiring tax adjustments.

**Clause 13: Gross Profit/Receipts/Turnover**
- **Information Required**: Gross profit, gross receipts, and turnover as per P&L account
- **Source Documents**: Audited financial statements, GST returns (GSTR-1 for turnover reconciliation)
- **Verification**:
  - Reconcile turnover per books with GSTR-1 (see /audit:gst-reconciliation)
  - Verify turnover excludes GST if separately disclosed
  - Check for revenue recognition policy consistency with Ind AS 115
- **Common Errors**: Including GST in turnover when shown separately; not reconciling with GST returns; prior period income included without separate disclosure

**Clause 14: Depreciation - CRITICAL CLAUSE**

This is one of the most complex clauses requiring detailed reconciliation.

- **Information Required**:
  - Depreciation as per books of account (per Schedule II of Companies Act or as per entity's policy)
  - Depreciation as per Income Tax Act (Section 32)
  - Reconciliation of differences

- **Required Format - Three-Column Comparison**:

| Asset Block | Opening WDV (IT Act) | Additions | Deletions | Closing WDV | Rate (IT Act) | Depreciation (IT Act) | Depreciation (Books) | Difference |
|-------------|---------------------|-----------|-----------|-------------|---------------|---------------------|---------------------|------------|

- **Verification Steps**:
  1. **WDV Reconciliation**: Opening WDV as per IT Act must match closing WDV of prior year tax computation
  2. **Rate Verification**: Verify rates applied are per IT Act (not Schedule II rates)
     - Buildings (residential) - 5%; Buildings (non-residential) - 10%; Plant & Machinery - 15%/30%/40%; Computers - 40%; Furniture - 10%; Vehicles - 15%
  3. **Additional Depreciation Check**: For new plant & machinery used in manufacturing:
     - 20% additional depreciation on cost (first year)
     - 35% if plant & machinery acquired and put to use for less than 180 days in first year (balance 15% in second year)
     - **IMPORTANT**: If entity opted for Section 115BAA/115BAB, NO additional depreciation allowed
  4. **Revaluation Add-back**: If assets revalued, depreciation on revalued portion must be added back (not allowable under IT Act)
  5. **Block Concept**: Ensure assets grouped into correct blocks for WDV computation

- **Common Errors**:
  - Revaluation depreciation not added back to income (allowable only on historical cost)
  - Additional depreciation computed despite 115BAA/115BAB option (not allowed under concessional regime)
  - Rate mismatch - using Schedule II rates instead of IT Act rates
  - WDV opening balance not reconciled with prior year
  - Depreciation on assets not put to use claimed (not allowable)
  - Pro-rata depreciation not computed correctly for additions/deletions during year

**Clause 15: Amounts Debited to P&L but to be Capitalized**
- **Information Required**: Expenditure debited to P&L account but to be capitalized as per IT Act (e.g., preliminary expenses, capital work in progress expenses booked as revenue)
- **Verification**: Review significant expenses for capital vs. revenue classification
- **Common Errors**: Research and development expenses on new product treated as revenue; borrowing costs during construction not capitalized

**Clause 16: Amounts Not Credited to P&L but Includible in Income**
- **Information Required**: Items credited directly to reserves/capital but taxable (e.g., profit on sale of asset credited to revaluation reserve, government grants credited to capital reserve)
- **Source Documents**: Reserves schedule, journal entries for direct reserve credits
- **Verification**: Review all credit entries to reserves for potential income items
- **Common Errors**: Government grants credited to capital reserve (taxable u/s 2(24)(xviii)); forfeited share application money not disclosed; profit on sale of assets credited to capital reserve

**Clause 17: Amounts Inadmissible under Sections 30-43B - KEY CLAUSE**

This clause requires detailed analysis of all disallowances.

- **Information Required**: Expenditure debited to P&L but not allowable or allowable on restricted basis

- **Required Format - Disallowance Table**:

| Description | Section | Amount Debited to P&L | Disallowable Amount | Reason for Disallowance |
|-------------|---------|----------------------|-------------------|------------------------|

- **Categories of Disallowances**:

  **1. Section 37(2B) - Advertisement Payments**:
  - Payments for advertisement in any souvenir, brochure etc. published by political party - 100% disallowable

  **2. Explanation to Section 37 - Penalties and Fines**:
  - Any penalty or fine paid for violation of law - 100% disallowable
  - Includes: Traffic challans, GST penalties, income tax penalties, environmental fines

  **3. Section 37(1) - CSR Expenditure**:
  - CSR expenditure u/s 135 of Companies Act - 100% disallowable (not incurred wholly and exclusively for business)

  **4. Section 37 - Entertainment Expenditure**:
  - Entertainment expenses - generally disallowable unless for staff welfare with reasonable limits

  **5. Section 40(a)(ia) - TDS Non-Compliance**:
  - Payments subject to TDS where TDS not deducted/deposited - 30% of payment disallowable
  - If TDS deposited before filing return - allowable

  **6. Section 40(a)(iii) - Interest/Commission/Brokerage Without TDS**:
  - Interest, commission, brokerage, professional fees where TDS not deducted - disallowable

  **7. Section 40(a)(iv) - Interest/Salary to Partners**:
  - Interest/salary to partners in excess of limits prescribed by Section 40(b)

  **8. Section 40A(7) - Provision for Gratuity**:
  - Gratuity provision not covered by approved gratuity fund - disallowable (allowable only on payment basis u/s 43B)

  **9. Section 80G/80GGA Donations**:
  - Donations qualifying for deduction - not disallowed here, allowed separately under Chapter VI-A

- **Verification**: Review expense ledgers for each category; cross-check with TDS returns
- **Common Errors**: Not identifying political party advertisement payments; not disallowing penalties paid to government departments; not checking TDS compliance for Section 40(a)(ia)

**Clause 18: Amounts Allowable but Not Debited to P&L**
- **Information Required**: Deductions allowable under IT Act but not claimed in books (e.g., weighted deduction for R&D, additional depreciation if not booked)
- **Applicability**: Usually "Nil" - entities normally claim all expenses in books
- **Common Errors**: Missing eligible weighted deductions for scientific research u/s 35

**Clause 19: Prior Period Items**
- **Information Required**: Prior period income/expenditure debited/credited to P&L
- **Verification**: Review P&L for prior period adjustment entries; verify tax treatment in respective years
- **Common Errors**: Prior period income not offered to tax in current year if not taxed in original year

**Clause 20: Depreciation on Revaluation**
- **Information Required**: Depreciation on revalued assets claimed in books but added back for tax purposes
- **Verification**: If assets revalued, compute depreciation on revalued portion and confirm add-back
- **Common Errors**: Claiming depreciation on full revalued amount without add-back

**Clause 21: Business Income vs. Capital Gains**
- **Information Required**: Amount included in income as business income but chargeable as capital gains or vice versa
- **Verification**: Review sale of assets/investments for correct classification (trading asset = business income; capital asset = capital gains)
- **Common Errors**: Sale of land held as stock-in-trade shown as capital gains; sale of investments shown as business income when should be capital gains

### Section C: Balance Sheet Details (Clauses 22-32)

These clauses verify balance sheet items and deemed profits.

**Clause 22: Method of Valuation of Closing Stock - CRITICAL**
- **Information Required**: Method of stock valuation (FIFO/weighted average/specific identification)
- **Verification**:
  - Verify consistency with prior year
  - If method changed, compute impact of change
  - Verify cost includes all direct costs and appropriate overhead allocation
  - Check whether lower of cost or NRV applied
- **Common Errors**: Method not consistently applied; NRV not considered for slow-moving stock; overhead allocation not reasonable

**Clause 22 (Amended): Section 43B(h) - MSE Payment Disallowance (4th Amendment Rules 2024)**

IMPORTANT: This is a RECENT amendment effective from AY 2024-25. Many auditors miss this clause.

- **Information Required**:
  - Details of Micro and Small Enterprises (MSEs) to whom amounts are due
  - Amounts paid within prescribed time (15/45 days per MSME Act Section 15)
  - Amounts payable beyond prescribed time (disallowable u/s 43B(h))

- **MSE Identification Procedure**:
  1. Obtain list of suppliers/creditors from purchase register
  2. Verify MSE status on Udyam Registration portal (www.udyamregistration.gov.in)
  3. Obtain Udyam Registration Certificates from suppliers claiming MSE status
  4. Cross-check GSTIN with Udyam database

- **Prescribed Time Computation**:
  - **No written agreement**: 15 days from date of acceptance of goods/services
  - **Written agreement exists**: Agreement date OR 45 days, whichever is earlier
  - Count days from date of acceptance/receipt of goods or services

- **Disallowance Computation Format**:

| Supplier Name | Udyam No. | Amount Due | Date of Acceptance | Prescribed Time | Payment Date | Days Delayed | Unpaid Amount (Disallowable) |
|---------------|-----------|------------|-------------------|----------------|--------------|--------------|---------------------------|

- **Common Errors**:
  - **Not identifying all MSE suppliers**: Many suppliers are MSEs but not disclosed; verify registration status
  - **Incorrect prescribed time**: Using 45 days when no agreement exists (should be 15 days)
  - **Not computing disallowance**: Amounts paid within 1-2 months treated as compliant (disallowable if beyond prescribed time)
  - **Missing documentation**: Not obtaining Udyam certificates to verify MSE status

- **Cross-reference**: Section 43B(h) disallowances must flow to /audit:tax-computation adjustments

**Clause 23: Method of Accounting**
- **Information Required**: Whether cash system or mercantile system of accounting followed
- **Verification**: Verify consistency with prior year; if changed, assess impact and reason for change
- **Common Errors**: Hybrid accounting (some items on cash, others on mercantile) without proper disclosure

**Clause 24-32: Deemed Profits and Special Provisions**

These clauses cover specific income inclusions under various sections:

- **Clause 24**: Amounts deemed as profits u/s 28 to 44DA (e.g., cash credits u/s 68, unexplained investments u/s 69)
- **Clause 25-27**: Capital, current account, drawings of partners/proprietor
- **Clause 28**: Amounts borrowed from related parties (for verification of deemed dividend u/s 2(22)(e))
- **Clause 29-32**: Specified business income, presumptive income provisions

**Verification**: Review for any unexplained cash credits, unsecured loans from unknown parties, on-money receipts
**Common Errors**: Not identifying loans from companies in which directors are substantial shareholders (deemed dividend risk u/s 2(22)(e))

### Section D: Specific Provisions Verification (Clauses 33-44)

This is the MOST CRITICAL section with provisions requiring detailed transaction-level verification.

**Clause 33-37: Various Specific Provisions**
- Cover specific industries (tea/coffee/rubber development account, motor transport, speculative transactions, etc.)
- **Applicability**: Most clauses not applicable for regular businesses; mark "Not Applicable" if not relevant

**Clause 38: Section 40A(3) - Cash Payments - CRITICAL CLAUSE**

This is one of the most frequently qualified clauses due to common non-compliance.

- **Provision**: Payment exceeding Rs. 10,000 in cash per day per party is disallowable (Rs. 35,000 for transport operators)

- **Key Principle**: AGGREGATE payments per party per day (not per voucher)

- **Verification Procedure**:
  1. Extract all cash payments from cash book for the year
  2. Aggregate payments per party per day
  3. Identify payments exceeding Rs. 10,000 (Rs. 35,000 for transport)
  4. Check for applicable exceptions
  5. Compute total disallowance

- **Required Format**:

| Date | Party Name | Voucher Nos. | Individual Amounts | Aggregate Payment | Mode | Disallowable? | Exception Applied? | Disallowable Amount |
|------|------------|--------------|-------------------|-------------------|------|---------------|-------------------|---------------------|

- **Exceptions (Rule 6DD)**:
  - Payments to government or banking company or post office
  - Payment in circumstances where banking facilities are not available (remote area - specify)
  - Payment on account of force majeure (unforeseen circumstances - document)
  - Payment for agricultural produce to seller who is cultivator
  - Payment for purchase of products through commission agent where amount does not exceed Rs. 35,000 per day

- **Common Errors - PAYMENT SPLITTING DETECTION**:
  - ⚠️ **Payment Splitting**: Three payments of Rs. 9,000 each to same party on same day (total Rs. 27,000) - should be aggregated and disallowed
  - ⚠️ **Mode Misclassification**: Demand drafts, pay orders, prepaid instruments treated as "banking channels" (they are cash equivalents - disallowable)
  - ⚠️ **Exception Misapplication**: Claiming force majeure without proper documentation (require proof of unforeseen event)
  - ⚠️ **Not Aggregating**: Treating each payment voucher separately instead of aggregating per party per day
  - ⚠️ **Transport Operator Limit**: Claiming Rs. 35,000 limit for regular freight payments (limit applies only to transport operators hired for goods carriage)

- **Documentation Required**: For each exception claimed, obtain supporting evidence (remote area certification, force majeure proof, government payment confirmation)

**Clause 39: Section 40A(2)(b) - Related Party Payments - CRITICAL**

- **Provision**: Excessive or unreasonable payments to related parties are disallowable

- **Related Party Definition (Section 40A(2)(b))**:
  - Directors and their relatives
  - Partners and their relatives (if assessee is firm)
  - Shareholders holding 20% or more voting power and their relatives (if assessee is company)
  - Any person who carries on business/profession where assessee or above persons have 20%+ interest
  - Relatives of persons above

- **Verification Procedure**:
  1. Identify all related parties per definition above
  2. Extract all payments to related parties (salary, rent, commission, professional fees, interest, purchase of goods/services)
  3. Assess reasonableness of each payment against market rates/arm's length principle
  4. Identify excessive portion

- **Required Format**:

| Related Party | Relationship Category | Nature of Payment | Amount Paid | Fair Market Value / Comparables | Excessive Amount | Justification for Excess |
|---------------|---------------------|-------------------|-------------|-------------------------------|------------------|-------------------------|

- **Arm's Length Assessment**:
  - Salary: Compare with industry standards for similar role/qualification
  - Rent: Obtain registered valuer's certificate or comparable rent agreements
  - Commission: Verify against commission rates for third parties
  - Professional fees: Compare with third-party professional fees for similar services
  - Interest: Compare with bank interest rates or third-party borrowing rates

- **Common Errors**:
  - Not identifying all related parties (especially 20%+ shareholders' relatives)
  - Accepting management's assertion of reasonableness without independent verification
  - Not obtaining comparables for rent/professional fees
  - Ignoring transactions with entities in which directors have 20%+ interest

**Clause 40: Section 269SS - Cash Loans/Deposits Received**

- **Provision**: Loan, deposit, or specified advance of Rs. 20,000 or more accepted/renewed in cash attracts penalty equal to amount received
- **Threshold**: Rs. 20,000 or more (per transaction)
- **Mode**: Cash (excludes cheque, bank draft, electronic clearing, online transfer)
- **Exceptions**: Loans from government, banking company, post office, co-operative bank
- **Verification**: Review loan register, cash book credit entries, deposit acceptance register
- **Common Errors**: Not reporting loans/deposits between Rs. 20,000 and Rs. 2,00,000 (reporting threshold in Form 3CD is Rs. 20,000); accepting renewal of loan in cash

**Clause 41: Section 269T - Cash Repayment**

- **Provision**: Repayment of loan/deposit of Rs. 20,000 or more in cash attracts penalty
- **Threshold**: Rs. 20,000 or more (per repayment transaction)
- **Exceptions**: Same as Section 269SS
- **Verification**: Review loan repayment vouchers, cash book debit entries
- **Common Errors**: Part payments of Rs. 19,000 each (multiple transactions) to circumvent limit (each transaction is separate; cumulative not aggregated for 269T unlike 40A(3))

**Clause 42: Section 43B - Statutory Dues - CRITICAL CLAUSE**

This clause is frequently disallowed or qualified due to payment timing issues.

- **Provision**: Certain expenses allowable only on payment basis (not on accrual basis) even under mercantile system

- **Seven Categories under Section 43B**:
  1. **(a)** Any tax, duty, cess, or fee under any law (income tax, GST, customs, excise)
  2. **(b)** Employer's contribution to PF/superannuation fund/ESI
  3. **(c)** Bonus or commission to employees
  4. **(d)** Interest on borrowings from public financial institutions, scheduled banks, etc.
  5. **(e)** Interest on delayed payment of tax/duty/cess/fee
  6. **(f)** Leave encashment
  7. **(g)** Municipal taxes and cesses (added recently)
  8. **(h)** Payments to Micro and Small Enterprises beyond prescribed time (Section 43B(h) - see Clause 22 amendment)

- **Key Rule**: Expenses accrued but not paid before return filing due date are DISALLOWABLE. If paid before return filing date, ALLOWABLE.

- **Required Format - Three-Column Analysis**:

| Due Type | Accrued in Books (Per P&L) | Paid Before Return Filing Date | Still Unpaid (Disallowable) | Remarks |
|----------|---------------------------|-------------------------------|---------------------------|---------|

- **Return Filing Due Date**:
  - Companies: 30th September following FY (if transfer pricing) / 31st October (without transfer pricing)
  - Non-companies: 31st July following FY (regular) / 30th September (if tax audit)

- **Verification Steps**:
  1. For each category, identify amounts expensed in P&L
  2. Verify payment dates from challans/bank statements
  3. Classify as: (a) paid during year, (b) paid after year but before return due date, (c) unpaid
  4. Disallow category (c) amounts
  5. Verify that category (a) + (b) amounts are included in expense account

- **Common Errors**:
  - ⚠️ **Critical Error**: Treating dues paid after year-end but before return filing date as disallowable (WRONG - Section 43B allows payment up to return filing date)
  - Example: PF for Feb-Mar FY 2024-25 paid in April-May 2025 (before return due date Sept 2025) - ALLOWABLE, not disallowable
  - Not separately tracking Section 43B(h) MSE payments (new amendment)
  - Not verifying actual payment dates from challans (relying on books without payment proof)
  - Including employee contributions in Section 43B analysis (employee share is Section 36(1)(va), not 43B - different rules)

- **Cross-Reference**: Detailed statutory dues payment verification at /audit:statutory-dues

**Clause 43: Section 36(1)(va) - Employee Contributions to PF/ESI - CRITICAL CLAUSE**

This is the MOST LITIGATED clause in tax audits. Supreme Court decision in Checkmate Services (2022) confirmed strict interpretation.

- **Provision**: Employee's contribution to PF/ESI deducted from salary but not deposited within due date is DISALLOWABLE

- **Due Date**:
  - **PF (Employee share)**: 15th of the month following the month of deduction (per EPF Act)
  - **ESI (Employee share)**: 15th of the month following the month of deduction (per ESI Act)

- **CRITICAL DIFFERENCE from Section 43B**:
  - Section 43B (employer contribution): Allowable if paid before return filing date
  - Section 36(1)(va) (employee contribution): Must be paid by due date under PF/ESI Act (15th of following month) - NO EXTENSION to return filing date

- **Example**:
  - March 2025 salary: Employee PF Rs. 50,000 deducted
  - Due date: 15th April 2025
  - If paid on 20th April 2025: DISALLOWABLE (even though before return filing date)
  - If paid on 10th April 2025: ALLOWABLE

- **Verification Procedure**:
  1. Obtain monthly ECR (Electronic Challan-cum-Return) filed with EPFO for all 12 months
  2. Verify filing date on EPFO/ESIC portal
  3. For each month, verify employee contribution deposited by 15th of following month
  4. Identify delays (even 1 day delay = disallowable for that month)
  5. Compute total disallowance

- **Required Format**:

| Month | Employee PF Deducted | Employee ESI Deducted | Due Date | Actual Payment Date | Delay (Days) | Disallowable Amount |
|-------|---------------------|---------------------|----------|-------------------|--------------|---------------------|

- **Common Errors**:
  - Conflating with Section 43B (employer share) - different due date rules
  - Treating employee contribution paid by return filing date as allowable (WRONG - must be by 15th of following month)
  - Not verifying actual payment dates from EPFO/ESIC portal (relying on books)
  - Missing delays of 1-2 days (even 1 day delay makes it disallowable per Supreme Court)

- **Supreme Court Ruling (Checkmate Services Pvt. Ltd., 2022)**: Even one-day delay in depositing employee contributions makes it disallowable. No extension to return filing date available.

**Clause 44: Other Reporting Requirements**
- Various other specific reporting items (transfer pricing, international transactions, deemed dividend, etc.)
- Verify applicability and provide details as required

## Form 3CD Completion Tracking Table

Use this master table to track clause-by-clause completion and facilitate reviewer sign-off.

| Clause | Description | Amount/Details | Source Document | Common Errors Checked | WP Ref | Status | Reviewer Sign-off |
|--------|-------------|----------------|-----------------|----------------------|--------|--------|------------------|
| 1-6 | Assessee basic details | [Name, PAN, etc.] | PAN card, ITR | ☐ PAN verified | | ☐ Complete | |
| 7 | Nature of business + NIC | [Description + Code] | Registration cert | ☐ NIC code verified | | ☐ Complete | |
| 8 | Partnership details | [Details or NA] | Partnership deed | ☐ Applicability checked | | ☐ Complete | |
| 9 | Audit under other law | [Yes/No] | Audit report | ☐ Verified | | ☐ Complete | |
| 10 | Section 44AB basis | [Turnover Rs. ___] | Books, GST | ☐ Threshold verified | | ☐ Complete | |
| 11 | Books maintained | [List of books] | Book inspection | ☐ Auxiliary books checked | | ☐ Complete | |
| 12 | Presumptive taxation | [Yes/No/NA] | Turnover analysis | ☐ Applicability assessed | | ☐ Complete | |
| 13 | Turnover/receipts | [Amount] | P&L, GSTR-1 | ☐ GST reconciled | | ☐ Complete | |
| 14 | **Depreciation** | Book: Rs.___ / IT: Rs.___ | Depreciation schedule | ☐ WDV reconciled ☐ Rates verified ☐ Revaluation added back ☐ 115BAA checked | | ☐ Complete | |
| 15 | Amounts to capitalize | [Amount or Nil] | Expense ledgers | ☐ Capital items identified | | ☐ Complete | |
| 16 | Amounts not in P&L | [Amount or Nil] | Reserve schedule | ☐ Reserve credits reviewed | | ☐ Complete | |
| 17 | **Disallowances** | [Section-wise table] | Expense ledgers | ☐ Penalties ☐ CSR ☐ TDS compliance | | ☐ Complete | |
| 18 | Amounts allowable but not debited | [Amount or Nil] | IT provisions | ☐ Weighted deductions checked | | ☐ Complete | |
| 19 | Prior period items | [Amount or Nil] | P&L adjustments | ☐ Tax treatment verified | | ☐ Complete | |
| 20 | Revaluation depreciation | [Amount or Nil] | Revaluation register | ☐ Add-back computed | | ☐ Complete | |
| 21 | Business vs capital gains | [Details or Nil] | Asset sale register | ☐ Classification verified | | ☐ Complete | |
| 22 | **Stock valuation + MSE** | Method: ___ / MSE: Rs.___ | Stock register, Udyam | ☐ Method consistent ☐ MSE identified ☐ Prescribed time computed | | ☐ Complete | |
| 23 | Accounting method | [Cash/Mercantile] | Accounting policy | ☐ Consistency checked | | ☐ Complete | |
| 24-32 | Deemed profits, partner accounts | [Details or NA] | Various registers | ☐ Section 68/69 reviewed | | ☐ Complete | |
| 33-37 | Special provisions | [Details or NA] | Industry-specific | ☐ Applicability checked | | ☐ Complete | |
| 38 | **Section 40A(3) cash** | Disallowable: Rs.___ | Cash book, vouchers | ☐ Aggregated per party ☐ Splitting detected ☐ Exceptions verified | | ☐ Complete | |
| 39 | **Section 40A(2) related party** | Excess: Rs.___ or Nil | Related party schedule | ☐ All RP identified ☐ Arm's length assessed | | ☐ Complete | |
| 40 | Section 269SS | [Amount or Nil] | Loan register | ☐ Cash receipts verified | | ☐ Complete | |
| 41 | Section 269T | [Amount or Nil] | Repayment vouchers | ☐ Cash payments verified | | ☐ Complete | |
| 42 | **Section 43B statutory dues** | Disallowable: Rs.___ | Challans, /audit:statutory-dues | ☐ Payment dates verified ☐ Return filing date applied ☐ Three-column analysis | | ☐ Complete | |
| 43 | **Section 36(1)(va) employee contribution** | Disallowable: Rs.___ or Nil | ECR, EPFO portal | ☐ Due date 15th verified ☐ Delay computed ☐ NOT confused with 43B | | ☐ Complete | |
| 44 | Other requirements | [Various] | Various | ☐ All items addressed | | ☐ Complete | |

**Critical Clauses (Flag for Partner Review)**: 14, 17, 22, 38, 39, 42, 43

## Reconciliation with Tax Computation

After completing Form 3CD, perform mandatory reconciliation with tax computation:

**All Form 3CD disallowances MUST flow to /audit:tax-computation adjustments:**

| Form 3CD Clause | Item | Amount in Form 3CD | Amount in Tax Computation | Difference | Resolved? |
|----------------|------|-------------------|--------------------------|------------|-----------|
| 14 | Depreciation difference | Rs. ___ | Rs. ___ | Rs. ___ | ☐ Yes |
| 17 | Disallowances (Sections 30-37) | Rs. ___ | Rs. ___ | Rs. ___ | ☐ Yes |
| 22 | Section 43B(h) MSE | Rs. ___ | Rs. ___ | Rs. ___ | ☐ Yes |
| 38 | Section 40A(3) cash | Rs. ___ | Rs. ___ | Rs. ___ | ☐ Yes |
| 39 | Section 40A(2) related party | Rs. ___ | Rs. ___ | Rs. ___ | ☐ Yes |
| 42 | Section 43B statutory dues | Rs. ___ | Rs. ___ | Rs. ___ | ☐ Yes |
| 43 | Section 36(1)(va) employee contribution | Rs. ___ | Rs. ___ | Rs. ___ | ☐ Yes |

**If any difference exists**: Investigate and resolve. Most common reason is Form 3CD completed without updating tax computation or vice versa.

## Cross-References

- **/audit:tax-computation**: All Form 3CD disallowances must flow through to tax computation adjustments. Use this command to review the complete tax computation for consistency.
- **/audit:tax-checklist**: Master control document integrating Form 3CD completion with tax computation review, TDS compliance, and final sign-off checklist.
- **/audit:statutory-dues**: Detailed payment verification for Section 43B (Clause 42) statutory dues with regularity table and aging analysis.
- **/audit:gst-reconciliation**: Turnover reconciliation (Clause 13) - reconcile books turnover with GSTR-1, identify ITC implications.

## Output Format

A comprehensive Form 3CD preparation workpaper containing:
- **Header Section**: Assessment year, previous year, assessee details, PAN
- **Section A - Basic Information**: Clauses 1-12 completed with supporting references
- **Section B - P&L Details**: Clauses 13-21 with detailed schedules for Clause 14 (depreciation) and Clause 17 (disallowances)
- **Section C - Balance Sheet Details**: Clauses 22-32 with stock valuation methodology and Section 43B(h) MSE computation
- **Section D - Specific Provisions**: Clauses 33-44 with detailed tables for Clauses 38, 39, 42, 43
- **Completion Tracking Table**: All 44 clauses with status, workpaper references, and reviewer sign-off
- **Reconciliation with Tax Computation**: Cross-check table ensuring consistency
- **Key Findings Summary**: Material disallowances, common errors identified, areas requiring management attention
- **Sign-off Section**: Preparer, reviewer, partner signatures with dates

The workpaper should serve as complete evidence that all 44 Form 3CD clauses have been systematically addressed, verified, and reconciled with tax computation.

---

**Disclaimer:** This tool assists with audit workflow documentation but does not substitute professional audit judgment. All outputs must be reviewed by qualified Chartered Accountants.
