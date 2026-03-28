# Statutory Dues Verification

Verify compliance with statutory dues deposit requirements per CARO clause 3(vii), covering regularity of deposit, aging analysis (6-month threshold), and disputed dues table for Provident Fund, ESI, Income Tax, GST, customs, excise, cess, and professional tax.

**Critical CARO 3(vii) Focus**: This is a KEY cross-cutting command — outputs feed into CARO report (Clause 3(vii)), Form 3CD (Clauses 42, 43), and tax computation (Section 43B/36(1)(va) disallowances). Aging analysis MUST be computed as of balance sheet date, NOT audit completion date.

## Required Context

Before running this command, ensure:
- Complete access to statutory registers, challans, and payment vouchers
- Access to all statutory returns filed (PF, ESI, TDS, GST, professional tax)
- Audited financial statements with provisions and liabilities for statutory dues
- Understanding of applicable statutory dues based on entity's business operations
- Prior year CARO report for comparison

**Ask the user to provide**:
- Balance sheet date (for aging computation — CRITICAL for CARO 3(vii)(a))
- Number of employees on rolls (determines PF/ESI applicability — 20+ for PF, 10+ for ESI)
- States where entity operates (for professional tax variations and state-specific levies)
- Whether any statutory dues are disputed (for disputed dues table per CARO 3(vii)(b))
- Prior year CARO report conclusion on statutory dues (for comparative analysis)

## Workflow

### 1. Identify Applicable Statutory Dues

Determine which statutory dues apply to this entity based on business operations, employee count, turnover, and geographical presence.

**Applicability Decision Table**:

| Due Type | Applicable If... | Legal Reference | Due Date Rule | Consequence of Default |
|----------|-----------------|----------------|---------------|----------------------|
| **Provident Fund (PF)** | 20+ employees | PF Act, 1952 | 15th of following month | Interest @ 12% p.a. + damages; Section 36(1)(va)/43B disallowance |
| **Employee State Insurance (ESI)** | 10+ employees, wages < Rs. 21,000/month | ESIC Act, 1948 | 15th of following month | Interest @ 12% p.a. + damages |
| **TDS (Income Tax)** | All employers/payers | Income Tax Act, 1961 | 7th of following month (30 April for March) | Interest @ 1% per month u/s 201(1A); late fee u/s 234E |
| **TCS (Tax Collected at Source)** | Specified sellers (cars, scrap, etc.) | Income Tax Act, 1961 | 7th of following month | Interest @ 1% per month u/s 206C(7); late fee |
| **GST** | Turnover > threshold OR voluntary registration | CGST Act, 2017 | 20th of following month (GSTR-3B) | Interest @ 18% p.a.; late fee Rs. 50/day per Act |
| **Professional Tax** | Employees/professionals in specified states | State PT Acts | Varies by state (15th or month-end) | Interest/penalty per state law |
| **Income Tax (Advance Tax)** | Estimated tax > Rs. 10,000 | Income Tax Act, Sec 208 | 15-Jun, 15-Sep, 15-Dec, 15-Mar (quarterly) | Interest u/s 234B @ 1% per month on shortfall |
| **Labour Welfare Fund** | State-specific (if applicable) | State LWF Acts | Varies by state (annual/bi-annual) | Penalty per state law |
| **Building & Other Construction Workers Cess** | Construction companies | BOCW Act, 1996 | Within 30 days of receipt of payment | Penalty @ 2% per month up to 5% |

**Additional Conditionally Applicable Dues**:
- **Customs Duty**: If entity imports goods (payment at time of clearance)
- **Excise Duty**: Rarely applicable post-GST (petroleum products only)
- **Sales Tax/VAT**: Only for pre-GST periods or petroleum products
- **Royalty/Lease Premium**: If entity uses government land/mineral resources

**Verification Procedure**:
1. Review entity's operations, employee headcount, turnover
2. Check state-wise presence for state-specific levies
3. Verify registration status for each applicable due
4. Document non-applicable dues with reason (e.g., "PF not applicable — only 15 employees")

### 2. Month-by-Month Regularity Verification

For EACH applicable statutory due, verify regularity across ALL 12 months of the financial year. CARO requires month-by-month verification — a single large payment in March could mask 10 months of default.

**Enhanced Regularity Table Format**:

| Due Type | Month | Due Date | Amount Due (Rs.) | Payment Date | Payment Reference (Challan No.) | Delay (Days) | Interest Applicable (Rs.) | Remarks |
|----------|-------|----------|-----------------|--------------|------------------------------|--------------|-------------------------|---------|
| PF (Employee) | Apr-24 | 15-May-24 | 1,00,000 | 15-May-24 | Challan 12345 | - | - | On time |
| PF (Employer) | Apr-24 | 15-May-24 | 1,00,000 | 18-May-24 | Challan 12345 | 3 days | 986 | Delayed (damages applicable) |
| ESI (Total) | Apr-24 | 15-May-24 | 15,000 | 15-May-24 | Challan 67890 | - | - | On time |
| TDS (194J) | Apr-24 | 07-May-24 | 50,000 | 10-May-24 | Challan BSR123 | 3 days | 123 | Interest u/s 201(1A) |
| GST (GSTR-3B) | Apr-24 | 20-May-24 | 2,50,000 | 22-May-24 | PMT-0612... | 2 days | 274 | Late fee + interest |

**Separate Tables/Sections for Each Due Type**:

**Provident Fund (PF) — Enhanced Verification**:
- Separate employee contribution (12% of basic + DA) and employer contribution (12% or 13.61% with admin charges)
- Verify ECR (Electronic Challan-cum-Return) filing date along with payment date
- Cross-verify with Form 12A (annual return) and Form 3A (contribution card)
- Check for wage ceiling compliance (current: Rs. 15,000 for statutory PF; higher for voluntary)
- **Section 36(1)(va) vs. Section 43B distinction** (see Section 8 below)

| Month | Wages (Rs.) | Employee Contribution (12%) | Employer Contribution (13.61%) | Total Due | Due Date | ECR Filing Date | Payment Date | Delay | Interest/Damages |
|-------|-------------|---------------------------|------------------------------|-----------|----------|----------------|--------------|-------|-----------------|
| Apr-24 | 15,00,000 | 1,80,000 | 2,04,150 | 3,84,150 | 15-May-24 | 12-May-24 | 15-May-24 | - | - |
| May-24 | 16,00,000 | 1,92,000 | 2,17,760 | 4,09,760 | 15-Jun-24 | 10-Jun-24 | 18-Jun-24 | 3 days | 3,367 |

**Employee State Insurance (ESI) — Enhanced Verification**:
- Verify employee contribution (0.75%) and employer contribution (3.25%)
- Check wage ceiling (current: Rs. 21,000/month)
- Verify IP (Insured Person) count and wages

| Month | Wages (Rs.) | Employee (0.75%) | Employer (3.25%) | Total Due | Due Date | Payment Date | Delay | Interest |
|-------|-------------|----------------|----------------|-----------|----------|--------------|-------|---------|
| Apr-24 | 10,00,000 | 7,500 | 32,500 | 40,000 | 15-May-24 | 15-May-24 | - | - |

**TDS (Income Tax) — Section-Wise Verification**:

Each TDS section has different rates and thresholds. Verify separately:

| TDS Section | Nature | Month | Deducted (Rs.) | Due Date | Payment Date | Challan No. | Delay | Interest u/s 201(1A) |
|------------|--------|-------|----------------|----------|--------------|-------------|-------|-------------------|
| 192 (Salary) | Apr-24 | 1,50,000 | 07-May-24 | 07-May-24 | BSR-001 | - | - |
| 194A (Interest) | Apr-24 | 25,000 | 07-May-24 | 07-May-24 | BSR-002 | - | - |
| 194C (Contractors) | Apr-24 | 75,000 | 07-May-24 | 10-May-24 | BSR-003 | 3 days | 184 |
| 194I (Rent) | Apr-24 | 50,000 | 07-May-24 | 07-May-24 | BSR-004 | - | - |
| 194J (Professional Fees) | Apr-24 | 1,00,000 | 07-May-24 | 08-May-24 | BSR-005 | 1 day | 82 |
| 194Q (Goods Purchase) | Apr-24 | 30,000 | 07-May-24 | 07-May-24 | BSR-006 | - | - |

**Quarterly TDS Return Filing Verification**:
- Form 24Q (salary TDS) — quarterly
- Form 26Q (non-salary TDS) — quarterly
- Check filing dates and late fees paid (Section 234E: Rs. 200/day, max Rs. 10,000)

**GST — Component-Wise Verification**:

Reconcile with GSTR-3B (monthly return) filed on GST portal:

| Month | CGST (Rs.) | SGST (Rs.) | IGST (Rs.) | Cess (Rs.) | Total Due | Due Date (20th) | Payment Date | PMT No. | Delay | Interest + Late Fee |
|-------|-----------|-----------|-----------|-----------|-----------|----------------|--------------|---------|-------|------------------|
| Apr-24 | 1,00,000 | 1,00,000 | 50,000 | - | 2,50,000 | 20-May-24 | 20-May-24 | PMT-06... | - | - |
| May-24 | 1,10,000 | 1,10,000 | 55,000 | - | 2,75,000 | 20-Jun-24 | 25-Jun-24 | PMT-06... | 5 days | 678 (interest) + 100 (late fee) |

**Cross-reference**: Use /audit:gst-reconciliation for detailed GST compliance verification.

**Professional Tax — State-Wise Verification**:

Professional tax varies significantly by state. Document state-specific applicability and due dates:

| State | Month | Amount (Rs.) | Due Date | Payment Date | Challan No. | Delay | Penalty |
|-------|-------|-------------|----------|--------------|-------------|-------|---------|
| Maharashtra | Apr-24 | 5,000 | 30-Apr-24 | 28-Apr-24 | PT-MAH-001 | - | - |
| Karnataka | Apr-24 | 4,200 | Last day of month | 30-Apr-24 | PT-KAR-001 | - | - |

### 3. 6-Month Aging Analysis (CRITICAL CARO 3(vii)(a) Requirement)

Compute aging AS OF BALANCE SHEET DATE (NOT audit completion date). This is the most common CARO error — reporting as of wrong date invalidates the entire clause.

**Aging Computation Procedure**:

1. **Determine Balance Sheet Date**: E.g., 31-March-2025
2. **Filter for dues outstanding AS OF that date**: Check which dues were unpaid on 31-March-2025
3. **Compute days outstanding from original due date to balance sheet date**
4. **Flag dues outstanding > 180 days (6 months)**

**Aging Computation Format**:

| Due Type | Month/Period | Original Due Date | Amount (Rs.) | Payment Date (if paid) | Days Outstanding as of 31-Mar-25 | > 6 Months? | CARO Reportable? |
|----------|-------------|------------------|-------------|----------------------|------------------------------|------------|----------------|
| PF (Employer) | Sep-24 | 15-Oct-24 | 2,00,000 | 10-Nov-24 | Paid before BS date | NO | NO (paid) |
| TDS (194C) | Aug-24 | 07-Sep-24 | 75,000 | **Still unpaid** | **205 days** | **YES** | **YES** |
| GST | Jul-24 | 20-Aug-24 | 2,50,000 | 15-Apr-25 | **224 days** | **YES** | **YES** (unpaid on BS date) |
| PF (Employee) | Oct-24 | 15-Nov-24 | 1,80,000 | **Still unpaid** | **136 days** | NO (< 6 months) | NO |

**CRITICAL WARNINGS**:

**WARNING 1**: Even if dues are paid by audit completion date (e.g., 30-June-2025), CARO requires reporting based on balance sheet date position (31-March-2025). If unpaid on 31-March-2025 for > 6 months → MUST report adverse.

**WARNING 2**: "Regular deposit" means paid BY DUE DATE, not just "paid eventually". A payment on 16-May for 15-May due date is NOT regular — it's a default, even if delay is 1 day.

**WARNING 3**: Do NOT compute aging from balance sheet date. Compute from original due date to balance sheet date. Example:
- Due date: 07-Sep-2024
- Balance sheet date: 31-Mar-2025
- Days outstanding: (30-Sep-24: 23 days) + (Oct-24: 31) + (Nov-24: 30) + (Dec-24: 31) + (Jan-25: 31) + (Feb-25: 28) + (Mar-25: 31) = **205 days** → > 6 months → REPORTABLE

**Summary for CARO 3(vii)(a)**:

```
Total amount of undisputed statutory dues outstanding > 6 months as of 31-March-2025:

TDS u/s 194C (Aug 2024):        Rs. 75,000 (205 days outstanding)
GST (Jul 2024):                 Rs. 2,50,000 (224 days outstanding)
                                ___________
Total:                          Rs. 3,25,000

CARO Conclusion: ADVERSE — Dues outstanding > 6 months identified
```

### 4. Disputed Statutory Dues Table (CARO 3(vii)(b) Requirement)

Identify all statutory dues that have NOT been deposited on account of disputes pending at various forums.

**Enhanced Disputed Dues Table Format**:

| Statute Name | Nature of Dues | Amount (Rs.) | Period to Which It Relates | Forum Where Dispute Pending | Current Status | Amount Deposited Under Protest (Rs.) |
|-------------|----------------|-------------|---------------------------|----------------------------|---------------|-------------------------------------|
| Income Tax Act, 1961 | TDS u/s 194C disallowance | 5,00,000 | FY 2021-22 | Commissioner of Income Tax (Appeals) | Appeal filed on 15-Aug-2023, hearing pending | 1,00,000 (20% pre-deposit) |
| CGST Act, 2017 | ITC denial on capital goods | 3,50,000 | FY 2022-23 | Additional Commissioner (Appeals) | Appeal filed on 10-Sep-2024, order awaited | Nil (stay granted) |
| PF Act, 1952 | Employer contribution on bonus disputed | 2,00,000 | FY 2020-21 | Regional PF Commissioner | Hearing held on 20-Jan-2025, order pending | 50,000 (25% pre-deposit) |
| ESI Act, 1948 | Coverage dispute — contract workers | 1,50,000 | FY 2022-23 | ESI Court | Case filed on 05-Nov-2024, first hearing on 12-May-2025 | Nil |
| Customs Act, 1962 | Valuation addition on import | 8,00,000 | FY 2023-24 | CESTAT (Customs, Excise & Service Tax Appellate Tribunal) | Appeal filed on 22-Dec-2024, hearing not yet scheduled | 2,00,000 (25% pre-deposit) |

**Categorize Disputes by Statute**:

**Income Tax Act Disputes**:
- TDS disallowance (Section 40(a)(ia) — non-deduction or non-payment)
- Additions to income (transfer pricing, deemed dividend, unexplained cash credits)
- Penalty proceedings (Section 271C — TDS default, Section 271(1)(c) — concealment)
- Interest charges (Section 234A, 234B, 234C)

**GST/CGST Act Disputes**:
- ITC denial (Section 16/17 — ineligibility, blocked credits, proportionate reversal)
- Rate classification disputes (HSN code interpretation)
- Place of supply disputes (IGST vs CGST/SGST)
- Time of supply disputes (advance vs. invoice vs. delivery)
- Demand for interest/penalty on delayed filing

**PF Act Disputes**:
- Wage definition (what constitutes "basic wages" for PF calculation)
- Coverage disputes (whether certain employees are covered under PF Act)
- Contribution rate disputes (12% vs. higher voluntary rate)
- Exemption claims (exempted establishments, international workers)

**ESI Act Disputes**:
- Wage ceiling disputes (Rs. 21,000 threshold interpretation)
- Coverage disputes (contract workers, part-time employees)
- Contribution rate disputes

**Customs Act Disputes**:
- Valuation disputes (transaction value vs. enhanced value by customs)
- Classification disputes (tariff heading interpretation)
- Exemption notification disputes (eligibility for concessional duty)

**Other Statute Disputes**:
- Sales Tax/VAT disputes (for pre-GST periods)
- Professional Tax disputes (state-specific)
- Labour Welfare Fund disputes

**Forum Hierarchy** (for each dispute, document current stage):

**Income Tax**:
1. Assessing Officer (AO) — Original assessment
2. Commissioner of Income Tax (Appeals) — CIT(A) — First appeal
3. Income Tax Appellate Tribunal (ITAT) — Second appeal
4. High Court — Writ petition or appeal on substantial question of law
5. Supreme Court — Appeal on substantial question of law of general importance

**GST**:
1. Adjudicating Authority (Proper Officer) — Original order
2. Appellate Authority (Additional/Joint Commissioner) — First appeal
3. Appellate Tribunal (GST Appellate Tribunal) — Second appeal
4. High Court — Appeal on substantial question of law
5. Supreme Court — Final appeal

**PF**:
1. Regional Provident Fund Commissioner (RPFC) — Original order
2. Provident Fund Appellate Tribunal — Appeal
3. High Court — Writ petition or appeal

**Current Status Documentation** (for each dispute):
- Notice received (date, authority, nature)
- Reply filed (date, grounds)
- Hearing held (date, submissions made)
- Order received (date, operative portion)
- Appeal filed to higher forum (date, forum)
- Pre-deposit/stay application (amount deposited, stay granted/rejected)

### 5. Reconciliation with Books of Account

Cross-verify statutory dues paid and outstanding with books of account and financial statements.

**Reconciliation Procedure**:

1. **Reconcile Total Statutory Dues Paid** (per challans vs. expense/liability ledgers):

```
Total PF paid as per Challans (Apr-Mar):                         Rs. 45,00,000
PF expense as per books (P&L):                                   Rs. 46,00,000
Difference:                                                       Rs.  1,00,000

Reason: March 2025 PF accrued in books (Rs. 4,00,000) but paid in April 2025 (after year-end)
Outstanding liability as of 31-Mar-2025:                         Rs.  4,00,000
Verified with Balance Sheet — Current Liabilities — PF Payable:  Rs.  4,00,000  ✓
```

2. **Reconcile Provisions for Disputed Dues**:

```
Disputed dues as per Disputed Dues Table:                        Rs. 20,00,000
Provision for disputed statutory dues (Balance Sheet):           Rs. 15,00,000
Difference:                                                       Rs.  5,00,000

Analysis:
- Income Tax dispute (Rs. 5,00,000) — provided Rs. 3,00,000 (management believes Rs. 2,00,000 will be deleted)
- GST dispute (Rs. 3,50,000) — provided Rs. 3,50,000 (full provision)
- PF dispute (Rs. 2,00,000) — provided Rs. 1,50,000 (management believes Rs. 50,000 will be waived)
- ESI dispute (Rs. 1,50,000) — provided Rs. 1,00,000
- Customs dispute (Rs. 8,00,000) — provided Rs. 6,00,000 (25% pre-deposit already paid)

Total provision:                                                  Rs. 15,00,000
Shortfall in provision:                                           Rs.  5,00,000 → Qualify if material
```

3. **Verify Amounts Deposited Under Protest**:

```
Amounts deposited under protest as per Disputed Dues Table:      Rs.  3,50,000
Amount shown in Balance Sheet — Other Current Assets:            Rs.  3,50,000  ✓
(Refundable if dispute is decided in favor of entity)
```

4. **Check Notes to Accounts Disclosures**:

Verify contingent liabilities note discloses:
- Nature of disputes
- Amounts involved
- Forums where pending
- Management's assessment of outflow probability
- Amounts provided vs. disclosed as contingent

### 6. Section 43B and Section 36(1)(va) Disallowance Computation

Compute disallowances for tax computation purposes. This is the MOST LITIGATED tax issue — clear distinction is critical.

**CRITICAL DISTINCTION**:

| Aspect | Section 43B (Employer Contribution) | Section 36(1)(va) (Employee Contribution) |
|--------|-----------------------------------|----------------------------------------|
| **Applies to** | Employer's share of PF, ESI, pension, gratuity, superannuation | Employee's share of PF, ESI deducted from salary |
| **Allowable if paid** | Before return filing date (e.g., 31-Oct-2025 for FY 24-25) | ONLY if paid by due date under relevant Act (NOT return filing date) |
| **Strictness** | Lenient — extended time till return filing | Strict — due date compliance mandatory |
| **Interest treatment** | Disallowed if unpaid by return filing date | Disallowed if unpaid by due date |
| **Legal reference** | Section 43B of Income Tax Act | Section 36(1)(va) + Section 2(24)(x) deemed income |
| **Supreme Court ruling** | Alom Extrusions (2009), Checkmate Services (2022) | Checkmate Services (2022) — employee share MUST be paid by due date |

**Section 43B — Employer Contribution Disallowance Computation**:

Three-column approach:

| Due Type | Month | Amount Accrued in FY 24-25 (Rs.) | Paid by Due Date? | Paid by Return Filing Date (31-Oct-25)? | Disallowable u/s 43B (Rs.) |
|----------|-------|------------------------------|----------------|--------------------------------------|-------------------------|
| PF (Employer) | Apr-24 | 2,00,000 | No (paid 18-May) | Yes (paid 18-May-24) | Nil |
| PF (Employer) | Mar-25 | 2,10,000 | No (paid 12-Apr-25) | Yes (paid 12-Apr-25) | Nil |
| PF (Employer) | Mar-25 | 2,10,000 | No | **No (still unpaid as of 31-Oct-25)** | **2,10,000** |
| ESI (Employer) | Mar-25 | 35,000 | No (paid 20-Apr-25) | Yes | Nil |
| Gratuity (Provision) | FY 24-25 | 5,00,000 | N/A (no payment) | No | **5,00,000** |

**Total Section 43B Disallowance**: Rs. 7,10,000 (to be added back in tax computation)

**Section 36(1)(va) — Employee Contribution Disallowance Computation**:

Two-column approach (NO extension to return filing date):

| Due Type | Month | Amount Deducted from Salary (Rs.) | Due Date | Paid by Due Date? | Payment Date (if late) | Delay (Days) | Disallowable u/s 36(1)(va) (Rs.) |
|----------|-------|-------------------------------|----------|---------------|---------------------|------------|------------------------------|
| PF (Employee) | Apr-24 | 1,80,000 | 15-May-24 | Yes | 15-May-24 | - | Nil |
| PF (Employee) | May-24 | 1,85,000 | 15-Jun-24 | No | 18-Jun-24 | 3 days | **1,85,000** |
| PF (Employee) | Mar-25 | 1,95,000 | 15-Apr-25 | No | 20-Apr-25 | 5 days | **1,95,000** |
| ESI (Employee) | Mar-25 | 7,500 | 15-Apr-25 | Yes | 15-Apr-25 | - | Nil |

**Total Section 36(1)(va) Disallowance**: Rs. 3,80,000 (to be added back in tax computation)

**PLUS Section 2(24)(x) Deemed Income** (if employee contribution paid late but allowed as deduction):
- If entity claimed deduction for employee PF in FY 24-25 but paid late → ALSO taxable as deemed income
- Double disallowance: Deduction disallowed + taxable as income

**Reference for Tax Computation**: Feed into /audit:tax-computation and /audit:tax-3cd (Clauses 42, 43).

### 7. Statutory Returns Filing Compliance

Verify timely filing of all statutory returns and identify late fees/penalties paid.

**Returns Filing Checklist**:

**Provident Fund**:
- ECR (Electronic Challan-cum-Return) — Monthly (due: 15th of following month)
- Form 12A (Annual Return) — Annual (due: 30th April)
- Form 3A (Contribution Card) — Monthly
- Late fees: Rs. 100/day for ECR delay (max Rs. 5,000)

| Month | ECR Due Date | ECR Filed On | Delay | Late Fee Paid |
|-------|-------------|-------------|-------|--------------|
| Apr-24 | 15-May-24 | 12-May-24 | - | - |
| May-24 | 15-Jun-24 | 18-Jun-24 | 3 days | 300 |

**ESI**:
- Monthly contribution return — Monthly (due: 15th of following month)
- Half-yearly return — Bi-annual
- Late fees: As per ESIC rules

**TDS**:
- Form 24Q (salary TDS) — Quarterly (due: 31st July, 31st Oct, 31st Jan, 31st May)
- Form 26Q (non-salary TDS) — Quarterly (same dates)
- Form 27Q (TDS on NRI payments) — Quarterly
- Late fees: Section 234E — Rs. 200/day (max Rs. 10,000 per return)

| Quarter | Return | Due Date | Filed On | Delay | Late Fee u/s 234E |
|---------|--------|----------|----------|-------|-----------------|
| Q1 FY25 | Form 24Q | 31-Jul-24 | 30-Jul-24 | - | - |
| Q1 FY25 | Form 26Q | 31-Jul-24 | 05-Aug-24 | 5 days | 1,000 |

**GST**:
- GSTR-1 (outward supplies) — Monthly (due: 11th of following month)
- GSTR-3B (summary return with tax payment) — Monthly (due: 20th of following month)
- GSTR-9 (annual return) — Annual (due: 31st December of next FY)
- Late fees: GSTR-1/3B — Rs. 50/day per Act (CGST + SGST = Rs. 100/day total, max Rs. 10,000); GSTR-9 — Rs. 100/day per Act

| Return | Period | Due Date | Filed On | Delay | Late Fee |
|--------|--------|----------|----------|-------|----------|
| GSTR-1 | Apr-24 | 11-May-24 | 11-May-24 | - | - |
| GSTR-3B | Apr-24 | 20-May-24 | 22-May-24 | 2 days | 200 |
| GSTR-9 | FY 23-24 | 31-Dec-24 | 28-Dec-24 | - | - |

**Professional Tax**:
- Monthly/quarterly returns (varies by state)
- Annual return (some states)
- Late fees: State-specific

**Summary of Late Fees/Penalties Paid** (for FY 24-25):

| Statute | Nature | Amount (Rs.) | Verified in Expense Ledger? |
|---------|--------|-------------|---------------------------|
| PF | ECR late filing | 3,000 | Yes |
| TDS | Form 26Q late filing (Section 234E) | 4,000 | Yes |
| GST | GSTR-3B late fees | 2,400 | Yes |
| **Total** | | **9,400** | **Yes** |

### 8. CARO Reporting Draft Wording

Provide ready-to-use draft wording for CARO clause 3(vii)(a) and 3(vii)(b) based on verification results.

**Clause 3(vii)(a) — Regularity of Deposit**

**Template 1: Regular (Clean Opinion)**

```
According to the information and explanations given to us and on the basis of our examination of the records of the Company, the Company has been regular in depositing undisputed statutory dues, including Provident Fund, Employees' State Insurance, Income Tax, Goods and Services Tax, Professional Tax, and other material statutory dues, as applicable, with the appropriate authorities.

Further, according to the information and explanations given to us, no undisputed amounts payable in respect of the aforesaid statutory dues were outstanding as at 31st March 2025 for a period of more than six months from the date they became payable.
```

**Template 2: Not Regular (Adverse Opinion with Details)**

```
According to the information and explanations given to us and on the basis of our examination of the records of the Company, the Company has not been regular in depositing undisputed statutory dues, including Provident Fund, Employees' State Insurance, Income Tax, Goods and Services Tax, Professional Tax, and other material statutory dues, as applicable, with the appropriate authorities during the year.

Further, according to the information and explanations given to us, the following undisputed amounts payable in respect of statutory dues were outstanding as at 31st March 2025 for a period of more than six months from the date they became payable:

| Name of the Statute | Nature of Dues | Amount (Rs.) | Period to which the amount relates | Due Date | Date of Payment (if paid after 31-Mar-25) |
|---------------------|----------------|-------------|----------------------------------|----------|----------------------------------|
| Income Tax Act, 1961 | TDS u/s 194C | 75,000 | August 2024 | 07-Sep-2024 | 15-Apr-2025 (after BS date) |
| CGST/SGST Act, 2017 | GST liability | 2,50,000 | July 2024 | 20-Aug-2024 | Still unpaid as of audit date |
```

**Template 3: Partially Regular (Mixed Opinion)**

```
According to the information and explanations given to us and on the basis of our examination of the records of the Company:

(a) The Company has been regular in depositing undisputed statutory dues, including Provident Fund, Employees' State Insurance, and Professional Tax with the appropriate authorities. However, the Company has NOT been regular in depositing undisputed Income Tax (TDS) and Goods and Services Tax with the appropriate authorities.

(b) According to the information and explanations given to us, the following undisputed amounts payable in respect of TDS and GST were outstanding as at 31st March 2025 for a period of more than six months from the date they became payable:

[Insert table as in Template 2]
```

**Clause 3(vii)(b) — Disputed Dues**

**Template 1: No Disputes (Clean Opinion)**

```
According to the information and explanations given to us, there are no dues of Income Tax, Goods and Services Tax, Customs Duty, Cess, or any other statutory dues which have not been deposited on account of any dispute.
```

**Template 2: Disputes Exist (Disclosure with Table)**

```
According to the information and explanations given to us, the following statutory dues have not been deposited by the Company on account of disputes:

| Name of the Statute | Nature of Dues | Amount (Rs.) | Period to which the amount relates | Forum where dispute is pending |
|---------------------|----------------|-------------|----------------------------------|------------------------------|
| Income Tax Act, 1961 | TDS disallowance u/s 40(a)(ia) | 5,00,000 | FY 2021-22 | Commissioner of Income Tax (Appeals) |
| CGST Act, 2017 | ITC denial on capital goods | 3,50,000 | FY 2022-23 | Additional Commissioner (Appeals) |
| PF Act, 1952 | Employer contribution on bonus | 2,00,000 | FY 2020-21 | Regional Provident Fund Commissioner |
| ESI Act, 1948 | Coverage dispute | 1,50,000 | FY 2022-23 | ESI Court |
| Customs Act, 1962 | Valuation addition | 8,00,000 | FY 2023-24 | CESTAT |

Note: Amounts deposited under protest/pre-deposit and provisions made are disclosed in the Notes to Accounts.
```

**CRITICAL CARO DRAFTING NOTES**:

1. **Date Reference**: ALWAYS "as at [Balance Sheet Date]", NEVER "as at audit date" or "as of now"
2. **6-Month Cutoff**: Compute from due date to balance sheet date (NOT audit date)
3. **"Regular" Definition**: Paid BY due date, not just "paid eventually"
4. **Disputed vs. Undisputed**: Separate clearly — disputed dues in 3(vii)(b), undisputed in 3(vii)(a)
5. **Materiality**: "Material statutory dues" — document which dues are material vs. not material (immaterial dues can be excluded)
6. **Subsequent Payment**: If dues paid after BS date but before audit date, STILL report as outstanding in 3(vii)(a) BUT disclose payment in narration

## Cross-References

- **/audit:caro-report** — Supports CARO Clause 3(vii) reporting (regularity and disputed dues)
- **/audit:caro-checklist** — Evidence requirements and working paper format for CARO 3(vii)
- **/audit:tax-3cd** — Supports Form 3CD Clauses 42 (employee contributions) and 43 (employer contributions)
- **/audit:tax-computation** — Section 43B and Section 36(1)(va) disallowances feed into tax computation
- **/audit:gst-reconciliation** — GST payment regularity verification (detailed GST compliance)
- **/audit:compliance-register** — Statutory compliance tracking and monitoring

## Output Format

A comprehensive statutory dues compliance workpaper containing:

**Section 1 — Applicable Statutory Dues**:
- List of all dues applicable to the entity with legal basis and applicability criteria
- List of non-applicable dues with reasons

**Section 2 — Regularity of Deposit Table**:
- Month-wise/transaction-wise table showing due date, payment date, amount, and delay for each statutory due type
- Separate detailed tables for PF, ESI, TDS (section-wise), GST, Professional Tax
- Summary of delays identified with interest/late fee computation

**Section 3 — 6-Month Aging Analysis**:
- Aging computation table with days outstanding as of balance sheet date
- Specific identification of amounts outstanding > 180 days (if any)
- Summary: Total undisputed dues outstanding > 6 months

**Section 4 — Disputed Statutory Dues Table**:
- Formatted per CARO 3(vii)(b) with columns: Statute, Nature, Amount, Period, Forum
- Categorization by statute type (Income Tax, GST, PF, ESI, Customs, Others)
- Current status documentation for each dispute
- Amounts deposited under protest

**Section 5 — Reconciliation with Books**:
- Reconciliation of statutory dues paid per challans with expense/liability ledgers
- Reconciliation of provisions for disputed dues with actual disputed amounts
- Verification of amounts deposited under protest in balance sheet
- Notes to accounts disclosure verification

**Section 6 — Section 43B and 36(1)(va) Disallowance**:
- Section 43B computation table (employer contribution — three-column approach)
- Section 36(1)(va) computation table (employee contribution — strict due date compliance)
- Total disallowances for tax computation
- Cross-reference to /audit:tax-computation

**Section 7 — Statutory Returns Filing Compliance**:
- Checklist of all statutory returns with filing dates and due dates
- Identification of late filing instances and late fees paid
- Summary table of late fees/penalties

**Section 8 — CARO Reporting Conclusion**:
- Draft wording for CARO clause 3(vii)(a) — regularity of deposit (choose Template 1/2/3 based on findings)
- Draft wording for CARO clause 3(vii)(b) — disputed dues (choose Template 1/2 based on findings)
- Supporting analysis and basis for opinion

**Section 9 — Management Representation**:
- Confirmation from management that all statutory dues have been disclosed
- Confirmation that no disputes are pending other than those disclosed
- Confirmation of amounts deposited under protest

The workpaper provides comprehensive evidence supporting CARO clause 3(vii) reporting and ensures statutory dues compliance verification is complete and defensible.

---

**Disclaimer:** This tool assists with audit workflow documentation but does not substitute professional audit judgment. All outputs must be reviewed by qualified Chartered Accountants.
