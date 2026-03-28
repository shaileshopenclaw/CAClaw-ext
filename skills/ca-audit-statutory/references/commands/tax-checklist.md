# Tax Audit Checklist

Complete master checklist for tax audit under Section 44AB of the Income Tax Act, serving as the control document to ensure all requirements are completed before report issuance. This integrates Form 3CD completion (/audit:tax-3cd), tax computation review (/audit:tax-computation), TDS compliance, statutory dues verification, and final sign-off procedures.

## Required Context

Before running this command, ensure:
- Financial statements audit is complete or substantially complete
- Access to all tax returns, TDS returns, advance tax challans, statutory payment records
- Form 3CD preparation is in progress or completed (see /audit:tax-3cd)
- Tax computation is available (see /audit:tax-computation)
- Prior year tax audit reports available for reference

Ask the user to provide:
- **Assessment Year**: For which tax audit is being conducted
- **Entity type**: Company/LLP/firm/individual/HUF
- **Turnover/Gross Receipts**: For Section 44AB applicability verification
- **Form 3CD and Tax Computation Status**: Whether already prepared or to be prepared using other commands

## Workflow

### Section 1: Applicability Verification

Confirm whether tax audit is required under Section 44AB and document the basis.

#### Decision Tree for Section 44AB Applicability:

**For Business (Section 44AB(a))**:

| Threshold | Condition | Applicable? |
|-----------|-----------|-------------|
| Rs. 1 crore | Total sales/turnover/gross receipts in previous year | If exceeded → Tax audit required |
| Rs. 10 crore | Same as above BUT 95%+ of transactions through banking channels AND 95%+ receipts/payments by non-cash modes | If exceeded → Tax audit required (higher threshold for digital transactions) |

**Digital Transaction Threshold Verification** (for Rs. 10 crore threshold):
1. Compute total business transactions (payments + receipts)
2. Compute transactions through banking channels (bank transfers, cheques, credit/debit cards, UPI, NEFT/RTGS)
3. Verify: Banking transactions / Total transactions ≥ 95%
4. Compute total receipts + total payments
5. Compute non-cash receipts + non-cash payments
6. Verify: Non-cash / Total ≥ 95%
7. Both conditions must be satisfied for Rs. 10 crore threshold

**For Profession (Section 44AB(b))**:

| Threshold | Condition | Applicable? |
|-----------|-----------|-------------|
| Rs. 50 lakh | Gross receipts in previous year | If exceeded → Tax audit required |

**For Presumptive Taxation Opt-Out (Section 44AB(c) and (d))**:

| Section | Condition | Applicable? |
|---------|-----------|-------------|
| 44AB(c) | Eligible for Section 44AD/44ADA but declared lower income | Tax audit required even if turnover < Rs. 1 crore |
| 44AB(d) | Eligible for Section 44AE but claimed income lower than deemed income | Tax audit required |

**Applicability Verification Table**:

| Item | Entity Figure | Threshold | Basis | Tax Audit Required? |
|------|--------------|-----------|-------|-------------------|
| Business Turnover | Rs. ___ | Rs. 1 crore / Rs. 10 crore | Section 44AB(a) | ☐ Yes / ☐ No |
| Digital Transaction % | ___% banking + ___% non-cash | Both ≥ 95% | For Rs. 10 crore threshold | ☐ Verified |
| Professional Receipts | Rs. ___ | Rs. 50 lakh | Section 44AB(b) | ☐ Yes / ☐ No |
| Presumptive Opt-Out | ☐ Yes / ☐ No | N/A | Section 44AB(c)/(d) | ☐ Yes / ☐ No |

**Conclusion**: Tax audit under Section 44AB [IS / IS NOT] required for AY ___. Basis: [specify threshold exceeded].

**Turnover Computation Verification**:
- Turnover as per books: Rs. ___
- Less: GST (if separately disclosed): Rs. ___
- **Net turnover for Section 44AB**: Rs. ___
- Cross-reference: Form 3CD Clause 13, GSTR-1 annual turnover

### Section 2: Form Selection

Determine correct forms based on entity type and statutory audit status.

#### Form Selection Logic:

| Entity Type | Statutory Audit Required? | Form 3CA | Form 3CB | Form 3CD |
|-------------|-------------------------|---------|---------|---------|
| Company (including deemed public) | Yes (under Companies Act 2013) | ✓ | ✗ | ✓ |
| LLP | Yes (under LLP Act 2008, if applicable) | ✓ | ✗ | ✓ |
| Partnership Firm | No | ✗ | ✓ | ✓ |
| Individual | No | ✗ | ✓ | ✓ |
| HUF | No | ✗ | ✓ | ✓ |
| AOP/BOI | No | ✗ | ✓ | ✓ |
| Trust | Varies | ✓ (if yes) | ✓ (if no) | ✓ |

**Form 3CA**: Chartered Accountant's Audit Report
- Used when entity's accounts are required to be audited under another law (Companies Act, LLP Act, etc.)
- Contains auditor's report certifying books maintained per Section 44AA

**Form 3CB**: Chartered Accountant's Report
- Used for all other assessees not required to be audited under another law
- Certifies maintenance of books under Section 44AA

**Form 3CD**: Statement of Particulars (Common to Both)
- Contains 44 clauses of specific information
- Common statement annexed to both Form 3CA and Form 3CB
- ALL tax audits require Form 3CD completion

**Form Selection for This Entity**:
- Entity type: [Company/LLP/Firm/Individual/HUF/AOP/BOI/Trust]
- Statutory audit under other law: ☐ Yes (Companies Act/LLP Act) / ☐ No
- **Form required**: Form [3CA / 3CB] + Form 3CD (mandatory)

### Section 3: Form 3CD Completion Verification

Master checklist ensuring all 44 clauses are addressed. Use /audit:tax-3cd command output for detailed clause-by-clause guidance.

#### All 44 Clauses Completion Status:

| Clause | Description | Status | Amount/Details | Critical? | WP Ref | Reviewed? |
|--------|-------------|--------|---------------|-----------|--------|-----------|
| 1-6 | Assessee basic details (name, PAN, status, address, previous year, AY) | ☐ Complete | | | | ☐ |
| 7 | Nature of business with NIC code | ☐ Complete | | | | ☐ |
| 8 | Partnership/AOP/BOI details (if applicable) | ☐ Complete / ☐ NA | | | | ☐ |
| 9 | Audit under other law | ☐ Complete | | | | ☐ |
| 10 | Section 44AB liability basis | ☐ Complete | | | | ☐ |
| 11 | Books of account maintained | ☐ Complete | | | | ☐ |
| 12 | Presumptive taxation | ☐ Complete / ☐ NA | | | | ☐ |
| 13 | Gross profit/receipts/turnover | ☐ Complete | Rs. ___ | | | ☐ |
| **14** | **Depreciation (Books vs IT Act)** | ☐ Complete | Book: Rs. ___ / IT: Rs. ___ | **CRITICAL** | | ☐ |
| 15 | Amounts to capitalize | ☐ Complete | | | | ☐ |
| 16 | Amounts not in P&L but includible | ☐ Complete | | | | ☐ |
| **17** | **Disallowances (Sections 30-37)** | ☐ Complete | Rs. ___ | **CRITICAL** | | ☐ |
| 18 | Amounts allowable but not debited | ☐ Complete / ☐ NA | | | | ☐ |
| 19 | Prior period items | ☐ Complete | | | | ☐ |
| 20 | Revaluation depreciation | ☐ Complete / ☐ NA | | | | ☐ |
| 21 | Business income vs capital gains | ☐ Complete / ☐ NA | | | | ☐ |
| **22** | **Stock valuation method + MSE payments** | ☐ Complete | Method: ___ / MSE: Rs. ___ | **CRITICAL** | | ☐ |
| 23 | Method of accounting | ☐ Complete | | | | ☐ |
| 24-32 | Deemed profits, partner accounts | ☐ Complete | | | | ☐ |
| 33-37 | Special provisions | ☐ Complete / ☐ NA | | | | ☐ |
| **38** | **Section 40A(3) cash payments** | ☐ Complete | Disallowable: Rs. ___ | **CRITICAL** | | ☐ |
| **39** | **Section 40A(2) related party payments** | ☐ Complete | Excess: Rs. ___ | **CRITICAL** | | ☐ |
| 40 | Section 269SS cash loans | ☐ Complete / ☐ NA | | | | ☐ |
| 41 | Section 269T cash repayment | ☐ Complete / ☐ NA | | | | ☐ |
| **42** | **Section 43B statutory dues** | ☐ Complete | Disallowable: Rs. ___ | **CRITICAL** | | ☐ |
| **43** | **Section 36(1)(va) employee contributions** | ☐ Complete | Disallowable: Rs. ___ | **CRITICAL** | | ☐ |
| 44 | Other reporting requirements | ☐ Complete | | | | ☐ |

**Critical Clauses Requiring Partner Review**: 14, 17, 22, 38, 39, 42, 43

**Critical Clause Verification**:

**Clause 14 - Depreciation**:
- ☐ WDV reconciliation completed (opening WDV verified with prior year)
- ☐ Rates per IT Act verified (not Schedule II rates)
- ☐ Additional depreciation check completed (verify if 115BAA/115BAB opted → not allowable)
- ☐ Revaluation add-back computed (if assets revalued)

**Clause 22 - Section 43B(h) MSE Payments (NEW)**:
- ☐ MSE suppliers identified (Udyam Registration verified)
- ☐ Prescribed time computed (15/45 days)
- ☐ Payment dates verified
- ☐ Disallowance computed for delayed payments

**Clause 38 - Section 40A(3) Cash Payments**:
- ☐ Payments aggregated per party per day (not per voucher)
- ☐ Payment splitting detection completed
- ☐ Exceptions verified with documentation

**Clause 42 - Section 43B Statutory Dues**:
- ☐ Three-column analysis completed (accrued / paid before return filing / disallowable)
- ☐ Return filing due date applied correctly
- ☐ Section 43B(h) MSE separately identified

**Clause 43 - Section 36(1)(va) Employee Contributions**:
- ☐ Due date verified (15th of following month - NOT return filing date)
- ☐ ECR filing dates verified on EPFO/ESIC portal
- ☐ NOT conflated with Section 43B (different rules)

**Overall Form 3CD Status**:
- Total clauses: 44
- Completed: ___
- Not Applicable: ___
- Pending: ___
- **Ready for sign-off**: ☐ Yes / ☐ No (if no, list pending clauses: ___)

### Section 4: Tax Computation Cross-Check

Reconciliation between Form 3CD disclosures and tax computation to ensure consistency.

Use /audit:tax-computation command output for detailed tax computation review.

#### Reconciliation Table:

| Item | Form 3CD Clause | Amount in Form 3CD | Amount in Tax Computation | Difference | Resolved? | Notes |
|------|----------------|-------------------|--------------------------|------------|-----------|-------|
| Depreciation difference | 14 | Book: Rs. ___ / IT: Rs. ___ | Net adjustment: Rs. ___ | Rs. ___ | ☐ Yes | |
| Disallowances (Sections 30-37) | 17 | Rs. ___ | Rs. ___ | Rs. ___ | ☐ Yes | |
| Section 43B(h) MSE | 22 | Rs. ___ | Rs. ___ | Rs. ___ | ☐ Yes | |
| Section 40A(3) cash payments | 38 | Rs. ___ | Rs. ___ | Rs. ___ | ☐ Yes | |
| Section 40A(2) related party | 39 | Rs. ___ | Rs. ___ | Rs. ___ | ☐ Yes | |
| Section 43B statutory dues | 42 | Rs. ___ | Rs. ___ | Rs. ___ | ☐ Yes | |
| Section 36(1)(va) employee PF/ESI | 43 | Rs. ___ | Rs. ___ | Rs. ___ | ☐ Yes | |

**All differences must be zero or explained. If any difference exists, investigate before proceeding.**

**Tax Computation Structure Verification**:
- ☐ All five heads of income addressed
- ☐ Set-off and carry forward losses computed correctly
- ☐ Chapter VI-A deductions verified for eligibility
- ☐ If Section 115BAA/115BAB opted: Prohibited deductions verified as NOT claimed
- ☐ Tax rate applied correctly (normal vs. concessional)
- ☐ MAT computation done (if applicable - companies not under 115BAA/115BAB)
- ☐ Advance tax and TDS/TCS credits verified with Form 26AS

### Section 5: TDS Compliance Review

Comprehensive TDS compliance verification covering deduction, deposit, return filing, and certificate issuance.

#### Section-wise TDS Verification:

| Section | Nature of Payment | Rate | Threshold | Deducted? | Deposited Timely? | Return Filed? | Certificates Issued? | Interest/Penalty? |
|---------|------------------|------|-----------|-----------|------------------|--------------|---------------------|------------------|
| 192 | Salary | Slab rates | No threshold | ☐ Yes | ☐ Yes | ☐ Yes | ☐ Yes (Form 16) | ☐ NA |
| 194A | Interest (other than securities) | 10% | Rs. 5,000 (others) / Rs. 40,000 (banks) | ☐ Yes / ☐ NA | ☐ Yes / ☐ NA | ☐ Yes / ☐ NA | ☐ Yes (16A) / ☐ NA | ☐ NA |
| 194C | Contractors/sub-contractors | 1% (individual/HUF) / 2% (others) | Rs. 30,000 per transaction / Rs. 1 lakh annual | ☐ Yes / ☐ NA | ☐ Yes / ☐ NA | ☐ Yes / ☐ NA | ☐ Yes (16A) / ☐ NA | ☐ NA |
| 194H | Commission/brokerage | 5% | Rs. 15,000 | ☐ Yes / ☐ NA | ☐ Yes / ☐ NA | ☐ Yes / ☐ NA | ☐ Yes (16A) / ☐ NA | ☐ NA |
| 194I | Rent - Plant/Machinery | 2% | Rs. 2,40,000 | ☐ Yes / ☐ NA | ☐ Yes / ☐ NA | ☐ Yes / ☐ NA | ☐ Yes (16A) / ☐ NA | ☐ NA |
| 194I | Rent - Land/Building | 10% | Rs. 2,40,000 | ☐ Yes / ☐ NA | ☐ Yes / ☐ NA | ☐ Yes / ☐ NA | ☐ Yes (16A) / ☐ NA | ☐ NA |
| 194J | Professional/technical fees | 10% (professional) / 2% (technical) | Rs. 30,000 | ☐ Yes / ☐ NA | ☐ Yes / ☐ NA | ☐ Yes / ☐ NA | ☐ Yes (16A) / ☐ NA | ☐ NA |
| 194Q | Purchase of goods | 0.1% | Rs. 50 lakh (annual) | ☐ Yes / ☐ NA | ☐ Yes / ☐ NA | ☐ Yes / ☐ NA | ☐ Yes (16A) / ☐ NA | ☐ NA |
| 206C(1H) | TCS on sale of goods | 0.1% | Rs. 50 lakh (annual) | ☐ Yes / ☐ NA | ☐ Yes / ☐ NA | ☐ Yes / ☐ NA | ☐ Yes (27D) / ☐ NA | ☐ NA |
| [Others] | [Specify if applicable] | | | | | | | |

**TDS Deposit Compliance**:
- **Due date**: 7th of following month (30th April for March TDS)
- **Verification**: Obtain all TDS payment challans; verify dates
- **Form 26AS Reconciliation**: Cross-verify all TDS deposited is reflected in Form 26AS

**TDS Return Filing Compliance**:

| Quarter | Period | Due Date | Return Form | Filed On | Status | Late Filing Fee |
|---------|--------|----------|-------------|----------|--------|----------------|
| Q1 | Apr-Jun | 31-Jul | 24Q/26Q | ___ | ☐ Timely / ☐ Late | Rs. ___ |
| Q2 | Jul-Sep | 31-Oct | 24Q/26Q | ___ | ☐ Timely / ☐ Late | Rs. ___ |
| Q3 | Oct-Dec | 31-Jan | 24Q/26Q | ___ | ☐ Timely / ☐ Late | Rs. ___ |
| Q4 | Jan-Mar | 31-May | 24Q/26Q | ___ | ☐ Timely / ☐ Late | Rs. ___ |

**Late Filing Fee (Section 234E)**:
- Rs. 200 per day of delay
- Maximum: Rs. 10,000 per return
- Compute: ___ days delay × Rs. 200 = Rs. ___ (max Rs. 10,000)

**Interest for Late Deposit (Section 201(1A))**:
- Interest @ 1% per month (or part thereof) on TDS amount from due date to actual deposit date
- Computation format:

| Month | TDS Amount | Due Date | Deposit Date | Delay (Months) | Interest @ 1% p.m. |
|-------|------------|----------|--------------|----------------|-------------------|
| | Rs. ___ | | | | Rs. ___ |

**Form 26AS/AIS/TIS Reconciliation**:
- ☐ Form 26AS downloaded and reviewed
- ☐ All TDS deducted by entity matches challans
- ☐ All TDS deducted on entity's income verified in 26AS
- ☐ AIS (Annual Information Statement) reviewed for completeness
- ☐ TIS (Tax Information Statement) cross-verified with books
- ☐ Discrepancies identified: [list or "None"]

### Section 6: Section 269SS/269T Compliance

Cash loan and repayment restriction verification to ensure compliance with anti-money laundering provisions.

#### Section 269SS - Cash Loans/Deposits Received:

**Provision**: Loan, deposit, or specified advance of Rs. 20,000 or more cannot be accepted/renewed in cash.

**Verification**:

| Transaction Date | Party Name | Nature (Loan/Deposit/Advance) | Amount | Mode | Compliant? | Penalty Risk? | Notes |
|-----------------|------------|-------------------------------|--------|------|------------|---------------|-------|
| | | | Rs. ___ | Cash/Cheque/Bank Transfer | ☐ Yes / ☐ No | ☐ Yes / ☐ No | |

**Exceptions**: Loans from government, banking company, post office, co-operative society/bank

**Penalty**: Equal to amount accepted/renewed in cash (if violated)

**Compliance Status**:
- ☐ No cash loans/deposits ≥ Rs. 20,000 received during the year
- ☐ All loans/deposits ≥ Rs. 20,000 received through banking channels
- ☐ Violations identified: [Specify or "None"]

#### Section 269T - Cash Repayment:

**Provision**: Repayment of loan/deposit of Rs. 20,000 or more cannot be made in cash.

**Verification**:

| Repayment Date | Party Name | Nature (Loan/Deposit) | Amount Repaid | Mode | Compliant? | Penalty Risk? | Notes |
|----------------|------------|---------------------|---------------|------|------------|---------------|-------|
| | | | Rs. ___ | Cash/Cheque/Bank Transfer | ☐ Yes / ☐ No | ☐ Yes / ☐ No | |

**Exceptions**: Same as Section 269SS

**Penalty**: Equal to amount repaid in cash (if violated)

**Compliance Status**:
- ☐ No cash repayments ≥ Rs. 20,000 made during the year
- ☐ All repayments ≥ Rs. 20,000 made through banking channels
- ☐ Violations identified: [Specify or "None"]

### Section 7: Statutory Dues Compliance

Summary of statutory dues payment regularity and delays. Use /audit:statutory-dues command for detailed verification.

#### Statutory Dues Regularity Summary:

| Due Type | Paid On Time? | Delays > 6 Months? | Disallowance u/s 43B | Disallowance u/s 36(1)(va) | Total Disallowance | Cross-ref |
|----------|--------------|-------------------|-------------------|--------------------------|-------------------|-----------|
| PF - Employer share | ☐ Yes / ☐ No | ☐ Yes / ☐ No | Rs. ___ | N/A | Rs. ___ | /audit:statutory-dues |
| PF - Employee share | ☐ Yes / ☐ No | ☐ Yes / ☐ No | N/A | Rs. ___ | Rs. ___ | /audit:statutory-dues |
| ESI - Employer share | ☐ Yes / ☐ No | ☐ Yes / ☐ No | Rs. ___ | N/A | Rs. ___ | /audit:statutory-dues |
| ESI - Employee share | ☐ Yes / ☐ No | ☐ Yes / ☐ No | N/A | Rs. ___ | Rs. ___ | /audit:statutory-dues |
| TDS | ☐ Yes / ☐ No | ☐ Yes / ☐ No | Rs. ___ | N/A | Rs. ___ | Section 5 above |
| GST | ☐ Yes / ☐ No | ☐ Yes / ☐ No | Rs. ___ | N/A | Rs. ___ | /audit:gst-reconciliation |
| Professional Tax | ☐ Yes / ☐ No | ☐ Yes / ☐ No | Rs. ___ | N/A | Rs. ___ | /audit:statutory-dues |
| Municipal Tax | ☐ Yes / ☐ No | ☐ Yes / ☐ No | Rs. ___ | N/A | Rs. ___ | /audit:statutory-dues |

**CRITICAL DISTINCTION**:
- **Section 43B (Employer share)**: Allowable if paid before return filing date (Sept/Oct)
- **Section 36(1)(va) (Employee share)**: Must be paid by 15th of following month - NO extension to return filing date

**Key Findings**:
- Total disallowances u/s 43B: Rs. ___
- Total disallowances u/s 36(1)(va): Rs. ___
- Delays > 6 months (CARO 2020 reporting concern): [List or "None"]

### Section 8: Advance Tax Compliance

Summary of advance tax installment compliance and interest calculations. Refer to /audit:tax-computation for detailed analysis.

#### Installment Schedule Summary:

| Due Date | Required % | Required Amount | Actual Paid | Shortfall | Interest u/s 234C |
|----------|-----------|----------------|-------------|-----------|------------------|
| 15-Jun | 15% | Rs. ___ | Rs. ___ | Rs. ___ | Rs. ___ |
| 15-Sep | 45% (cumulative) | Rs. ___ | Rs. ___ (cumulative) | Rs. ___ | Rs. ___ |
| 15-Dec | 75% (cumulative) | Rs. ___ | Rs. ___ (cumulative) | Rs. ___ | Rs. ___ |
| 15-Mar | 100% (cumulative) | Rs. ___ | Rs. ___ (cumulative) | Rs. ___ | Rs. ___ |

**Section 234B Interest (Deferment of Advance Tax)**:
- Applicable if: Advance tax paid < 90% of assessed tax
- Interest: 1% per month from 01-Apr to date of determination
- Computation: Rs. ___

**Section 234C Interest (Short Payment per Installment)**:
- Total interest for all installments: Rs. ___

**Presumptive Taxation Relief** (if applicable):
- ☐ Entity under Section 44AD/44ADA/44AE
- ☐ Advance tax paid in one installment by 15-Mar (allowed)
- ☐ No interest u/s 234C for earlier installments

**Advance Tax Compliance Status**:
- ☐ All installments paid timely
- ☐ Shortfalls identified with interest computed
- ☐ Form 26AS reflects all advance tax payments

### Section 9: Pre-Signing Checklist

Final verification before report issuance. ALL items must be completed.

#### Document Completion Checklist:

- ☐ **Form 3CA/3CB**: Signed by authorized signatory of the entity
- ☐ **Form 3CD**: Completed for all 44 clauses and signed by auditor
- ☐ **Tax Computation**: Prepared, reviewed, and signed by entity's authorized signatory
- ☐ **Schedules and Annexures**: All supporting schedules to Form 3CD prepared (depreciation, disallowances, etc.)
- ☐ **Management Representation Letter**: Obtained (tax audit specific - covering all Form 3CD representations)
- ☐ **Reconciliation with Financial Statements**: Form 3CD data reconciled with audited financials
- ☐ **Cross-verification Completed**: Form 3CD vs. Tax Computation (Section 4 above)

#### Quality Review Checklist:

- ☐ **Critical clauses reviewed by partner**: Clauses 14, 17, 22, 38, 39, 42, 43
- ☐ **All disallowances verified**: Supporting workpapers available for each disallowance
- ☐ **TDS compliance confirmed**: All TDS sections verified, returns filed
- ☐ **Statutory dues verified**: Payment dates confirmed with challans, disallowances computed
- ☐ **Prior year comparisons**: Significant variations explained
- ☐ **Professional judgment documentation**: Key judgments documented (related party payments, arm's length pricing, etc.)

#### UDIN (Unique Document Identification Number):

**IMPORTANT**: UDIN is MANDATORY for all tax audit reports before uploading to IT portal.

- ☐ Tax audit report finalized
- ☐ UDIN to be generated on ICAI portal: https://udin.icai.org
- ☐ UDIN format: [12-digit number]
- ☐ UDIN mentioned on Form 3CA/3CB

**UDIN Generation Steps** (after signing):
1. Login to ICAI UDIN portal
2. Select "Generate UDIN"
3. Enter: Document type (Tax Audit Report), Financial Year, Document Date
4. Enter Entity Name, GSTIN/PAN
5. Generate UDIN
6. Mention UDIN on signed Form 3CA/3CB

**UDIN**: ___ ___ ___ ___ ___ ___ ___ ___ ___ ___ ___ ___ (to be filled after generation)

#### Due Date Compliance:

| Type | Due Date | Actual/Planned Filing Date | Compliant? |
|------|----------|---------------------------|------------|
| Tax Audit Report (Non-TP) | 30-Sep-20__ | ___ | ☐ Yes / ☐ No |
| Tax Audit Report (With TP) | 30-Nov-20__ | ___ | ☐ Yes / ☐ No |
| ITR Filing (Companies - Non-TP) | 31-Oct-20__ | ___ | ☐ Yes / ☐ No |
| ITR Filing (Companies - With TP) | 30-Nov-20__ | ___ | ☐ Yes / ☐ No |
| ITR Filing (Non-companies) | 30-Sep-20__ | ___ | ☐ Yes / ☐ No |

**Transfer Pricing (TP) Applicability**:
- ☐ International transactions exist (related party transactions outside India)
- ☐ Specified domestic transactions u/s 92BA (if aggregate > Rs. 20 crore)
- ☐ Form 3CEB required (TP report)
- ☐ November 30 deadline applicable

#### Final Sign-off:

| Role | Name | Signature | Date |
|------|------|-----------|------|
| Prepared by (Article/Assistant) | | | |
| Reviewed by (Manager/Senior) | | | |
| **Partner Sign-off** | | | |

**Partner Certification**:
- ☐ I have reviewed all critical clauses and supporting workpapers
- ☐ All disallowances are supported by evidence and properly computed
- ☐ TDS and statutory dues compliance verified
- ☐ Form 3CD reconciled with tax computation
- ☐ Quality review completed
- ☐ Ready for UDIN generation and filing

### Outstanding Items (if any):

List any pending items before final issuance:

1. ___
2. ___
3. ___

**All outstanding items must be cleared before report issuance.**

## Cross-References

- **/audit:tax-3cd**: Detailed Form 3CD clause-by-clause guidance. Use to complete Section 3 of this checklist.
- **/audit:tax-computation**: Detailed tax computation review with error area analysis, 115BAA/115BAB verification, MAT computation. Use for Section 4 cross-check.
- **/audit:statutory-dues**: Detailed statutory dues payment verification with regularity table and aging analysis. Use for Section 7.
- **/audit:gst-reconciliation**: GST compliance and turnover reconciliation. Cross-verify turnover in Form 3CD Clause 13.

## Output Format

A comprehensive master tax audit checklist containing:
- **Applicability Confirmation**: Detailed calculation showing Section 44AB threshold exceeded with turnover computation
- **Form Selection Documentation**: Clear determination of Form 3CA or 3CB with rationale
- **Form 3CD Completion Status**: All 44 clauses marked with status, critical clauses highlighted, completion percentage
- **Tax Computation Cross-Check**: Reconciliation table with all key items verified (depreciation, disallowances, etc.)
- **TDS Compliance Matrix**: Section-wise table showing deduction, deposit, return filing, certificate issuance status
- **Section 269SS/269T Review**: Loan/deposit schedule with mode of acceptance/repayment
- **Statutory Dues Compliance Summary**: Due-wise payment status with delays identified and disallowances computed
- **Advance Tax Compliance**: Installment schedule with shortfall identification and interest calculations
- **Pre-Signing Checklist**: Document completion, quality review, UDIN generation reminder with all checkboxes
- **Outstanding Items List**: Any pending verifications or clarifications with responsibility assignment
- **Sign-off Section**: Three-tier sign-off (Preparer, Reviewer, Partner) with dates
- **UDIN Placeholder**: For post-signature generation with portal link

The checklist serves as the **master control document** ensuring all tax audit requirements under Section 44AB are completed before Form 3CA/3CB issuance. It integrates outputs from /audit:tax-3cd, /audit:tax-computation, and /audit:statutory-dues commands.

---

**Disclaimer:** This tool assists with audit workflow documentation but does not substitute professional audit judgment. All outputs must be reviewed by qualified Chartered Accountants.
