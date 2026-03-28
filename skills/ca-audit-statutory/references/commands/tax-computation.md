# Tax Computation Review

Review the income tax computation for completeness, accuracy, and compliance with Income Tax Act provisions, focusing on common error areas, concessional tax regime eligibility (Section 115BAA/115BAB), MAT/AMT analysis, and advance tax compliance.

## Required Context

Before running this command, ensure:
- Audited financial statements are finalized
- Tax computation draft prepared by entity
- Form 3CD preparation is complete or in progress (see /audit:tax-3cd)
- Prior year tax returns and assessments available for reference
- Understanding of entity's business model and tax positions

Ask the user to provide:
- **Entity type**: Company/LLP/firm/individual/HUF (affects tax rates and regime eligibility)
- **Section 115BAA/115BAB option**: Whether entity has opted for concessional tax regime (affects allowable deductions)
- **Total income (approximate)**: For rate determination and surcharge applicability
- **Brought-forward losses**: Whether entity has losses from prior years to be set off

## Workflow

### 1. Review Computation Structure

Verify the tax computation follows the prescribed format per Income Tax Act:

**Income Under Five Heads**:
- Income from salary (Schedule S) - if applicable
- Income from house property (Schedule HP)
- Profits and gains from business or profession (Schedule BP) - MAIN SCHEDULE for most entities
- Capital gains (Schedule CG) - short-term and long-term
- Income from other sources (Schedule OS) - interest, dividends, etc.

**Set-off and Carry Forward**:
- **Intra-head set-off**: Losses within same head (e.g., loss from one business against profit from another business)
- **Inter-head set-off**: Losses from one head against income from other heads (restrictions: house property loss max Rs. 2 lakh per year, capital loss cannot be set off against other heads)
- **Brought-forward losses**: Verify 8-year limitation for business losses (no limitation for unabsorbed depreciation)
- **Loss order**: Current year depreciation → brought forward depreciation → current year business loss → brought forward business loss

**Deductions Under Chapter VI-A**:
- Sections 80C to 80U (for individuals/HUF)
- Section 80G (donations), 80GGA, 80GGB, 80GGC
- Section 80IA to 80IE (for businesses - profit-linked deductions)
- **CRITICAL**: If entity opted for Section 115BAA/115BAB, most Chapter VI-A deductions NOT available (verify none claimed)

**Tax Computation**:
- Tax on total income at applicable rate
- Rebate under Section 87A (if applicable - individuals with income ≤ Rs. 7 lakh)
- Surcharge (based on income slabs)
- Health & Education Cess @ 4% on tax + surcharge
- MAT computation (if applicable under Section 115JB) - compare with normal tax, higher is payable

**Verification Checklist**:
- ☐ All five heads of income addressed (mark "Nil" if not applicable)
- ☐ Set-off sequence followed correctly
- ☐ Brought-forward losses verified with prior year returns (check 8-year limitation)
- ☐ Chapter VI-A deductions checked for eligibility and limits
- ☐ Tax rate applied correctly (normal vs. concessional regime)
- ☐ Surcharge computed per income slabs
- ☐ MAT computation done (if company and not under 115BAA/115BAB)

### 2. Common Error Area Analysis

Systematically verify the following high-risk areas for disallowances and adjustments:

#### Error Area 1: Section 40A(2)(b) - Related Party Payments

**Nature**: Excessive or unreasonable payments to related parties are disallowable.

**Verification Checklist**:

| Related Party | Relationship | Nature of Payment | Amount | Fair Market Value | Excess (Disallowable) | Justification |
|---------------|--------------|-------------------|--------|------------------|---------------------|---------------|

**Steps**:
1. Identify all related parties per Section 40A(2)(b) definition (directors, partners, 20%+ shareholders, their relatives, entities in which these persons have 20%+ interest)
2. Extract all payments to related parties from books
3. Assess arm's length nature:
   - **Salary**: Compare with industry benchmarks for similar role/qualification (use salary surveys)
   - **Rent**: Obtain registered valuer's certificate or comparable properties
   - **Commission/Professional Fees**: Compare with third-party rates
   - **Interest**: Compare with bank rates or third-party borrowing rates
4. Compute excessive portion (if any) and add to taxable income

**Common Errors**:
- Not identifying all related parties (especially entities in which directors have 20%+ interest)
- Accepting director's salary without benchmarking (especially owner-managed companies)
- Not obtaining comparables for rent paid to related parties

**Cross-reference**: Form 3CD Clause 39 (from /audit:tax-3cd) must match this analysis

#### Error Area 2: Section 40A(3) - Cash Payments Exceeding Limits

**Nature**: Cash payments exceeding Rs. 10,000 per day per party are disallowable (Rs. 35,000 for transport).

**Verification Format**:

| Date | Party | Voucher Nos. | Individual Amounts | Aggregate | Exception | Disallowable |
|------|-------|--------------|-------------------|-----------|-----------|--------------|

**Steps**:
1. Extract all cash payments from cash book
2. **AGGREGATE per party per day** (CRITICAL - not per voucher)
3. Identify payments exceeding Rs. 10,000
4. Verify exceptions (Rule 6DD): government payments, banking facilities unavailable, force majeure, agricultural produce
5. Compute total disallowance and add to taxable income

**Key Principle - Payment Splitting Detection**:
- Three payments of Rs. 9,000 to same party on same day = Rs. 27,000 aggregate → disallowable (Rs. 17,000)
- Demand drafts, pay orders = cash equivalents (disallowable if exceeds limit)

**Common Errors**:
- Not aggregating payments per party per day (treating each voucher separately)
- Treating demand drafts/pay orders as "banking channels" (they are cash equivalents)
- Claiming exceptions without documentation

**Cross-reference**: Form 3CD Clause 38 must match this computation

#### Error Area 3: Section 43B - Statutory Dues Payment Basis

**Nature**: Statutory dues allowable only on payment basis. If paid before return filing date, allowable; if unpaid, disallowable.

**Required Format - Three-Column Analysis**:

| Due Type | Accrued in Books | Paid Before Return Filing Date | Unpaid (Disallowable) |
|----------|-----------------|-------------------------------|---------------------|
| Tax/duty/cess/fee | Rs. ___ | Rs. ___ | Rs. ___ |
| PF - Employer contribution | Rs. ___ | Rs. ___ | Rs. ___ |
| ESI - Employer contribution | Rs. ___ | Rs. ___ | Rs. ___ |
| Bonus/commission to employees | Rs. ___ | Rs. ___ | Rs. ___ |
| Interest on borrowings | Rs. ___ | Rs. ___ | Rs. ___ |
| Leave encashment | Rs. ___ | Rs. ___ | Rs. ___ |
| Municipal taxes | Rs. ___ | Rs. ___ | Rs. ___ |
| **Section 43B(h) - MSE payments** | Rs. ___ | Rs. ___ | Rs. ___ |

**Return Filing Due Date**:
- Companies: 30th September (with transfer pricing) / 31st October (without TP)
- Non-companies: 31st July (regular) / 30th September (tax audit)

**Steps**:
1. For each category, identify amount expensed in P&L
2. Verify payment dates from challans/bank statements
3. Classify: (a) paid during year, (b) paid after year but before return due date, (c) unpaid
4. **IMPORTANT**: Category (b) is ALLOWABLE (Section 43B allows payment up to return filing date)
5. Disallow only category (c) amounts

**Section 43B(h) - MSE Payments (NEW - 4th Amendment Rules 2024)**:
- Separately identify amounts due to Micro and Small Enterprises
- Prescribed time: 15 days (no agreement) / 45 days (with agreement), whichever earlier
- Amounts unpaid beyond prescribed time: Disallowable
- Verification: Obtain Udyam Registration Certificates, verify payment dates

**Common Errors**:
- **CRITICAL ERROR**: Treating dues paid after year-end but before return filing date as disallowable (WRONG - allowable under Section 43B)
- Example: PF for Feb-Mar FY 2024-25 paid in April 2025 → ALLOWABLE if return filed by Sept 2025
- Not separately tracking Section 43B(h) MSE payments
- Including employee contributions in Section 43B (wrong - that's Section 36(1)(va) with different rules)

**Cross-reference**: /audit:statutory-dues for detailed payment verification; Form 3CD Clause 42

#### Error Area 4: Depreciation Reconciliation

**Nature**: Depreciation as per books (Schedule II/entity policy) differs from IT Act rates. Reconciliation required.

**Required Format - Block-wise WDV Reconciliation**:

| Asset Block | Opening WDV (IT Act) | Additions | Deletions | Closing WDV | Rate (IT Act) | Depreciation | Book Depreciation | Difference |
|-------------|---------------------|-----------|-----------|-------------|---------------|-------------|------------------|------------|

**Steps**:
1. **WDV Opening Reconciliation**: Opening WDV must match closing WDV of prior year tax computation (CRITICAL - if mismatch, investigate)
2. **Rate Verification**: Verify rates per IT Act, not Schedule II:
   - Buildings (residential) - 5%; Buildings (non-residential) - 10%
   - Plant & Machinery - 15%/30%/40% depending on type
   - Computers/servers - 40%
   - Furniture/fittings - 10%
   - Motor vehicles - 15%
3. **Additional Depreciation Check** (Section 32(1)(iia)):
   - 20% on new plant & machinery used in manufacturing (first year)
   - 35% if put to use for < 180 days in first year (balance 15% in second year)
   - **IMPORTANT**: If Section 115BAA/115BAB opted, NO additional depreciation allowed (common error)
4. **Revaluation Add-back**: Depreciation on revalued portion must be added back (allowable only on historical cost)
5. Compute net adjustment: (IT Act Depreciation - Book Depreciation)

**Common Errors**:
- Additional depreciation claimed despite 115BAA/115BAB option (prohibited under concessional regime)
- Revaluation depreciation not added back
- WDV opening not reconciled (leads to cascading errors)
- Rate mismatch (using Schedule II rates instead of IT Act rates)

**Cross-reference**: Form 3CD Clause 14 must match this computation

#### Error Area 5: Chapter VI-A Deductions

**Nature**: Deductions under Chapter VI-A must meet eligibility criteria and limits. If Section 115BAA/115BAB opted, most deductions not available.

**Verification Format**:

| Section | Deduction Type | Amount Claimed | Limit/Eligibility | Eligible Amount | Evidence Verified | Excess Disallowed |
|---------|---------------|---------------|------------------|----------------|------------------|------------------|

**Key Deductions to Verify**:
- **Section 80C**: Investments (LIC, PPF, ELSS, etc.) - Max Rs. 1.5 lakh (individuals only)
- **Section 80D**: Health insurance premiums - Limits vary (individuals only)
- **Section 80G**: Donations - 50%/100% with/without limits depending on donee
- **Section 80IA/80IB/80IC**: Profit-linked deductions for specified businesses - complex eligibility
- **Section 10AA**: SEZ deductions - profit-based

**CRITICAL CHECK for Section 115BAA/115BAB**:
If entity opted for concessional regime (22%/15%), the following deductions are PROHIBITED:
- Section 10AA (SEZ deduction)
- Section 32(1)(iia) (additional depreciation)
- Section 32AD (investment allowance)
- Section 33AB/33ABA (tea/coffee/rubber development)
- Section 35AD (specified business)
- Investment-linked deductions
- Most Chapter VI-A deductions

**Steps**:
1. Check if entity opted for Section 115BAA/115BAB (critical)
2. If YES: Verify NO prohibited deductions claimed
3. If NO: Verify each deduction for eligibility, limits, and documentary evidence
4. Cross-check claimed amounts against supporting documents (investment proofs, donation receipts)

**Common Errors**:
- Claiming Chapter VI-A deductions under 115BAA/115BAB regime (prohibited)
- Exceeding Section 80C limit of Rs. 1.5 lakh
- Claiming 100% of donation under 80G when only 50% eligible

**Cross-reference**: Form 3CD Clause 17 for disallowances

### 3. Concessional Tax Regime Analysis

Determine whether entity is eligible for and has properly opted for concessional tax rates under Section 115BAA or 115BAB.

#### Section 115BAA - Domestic Company @ 22% (Effective 25.168%)

**Eligibility Checklist**:

| Condition | Requirement | Entity Status | Evidence | Compliant? |
|-----------|-------------|---------------|----------|------------|
| Entity Type | Domestic company | [Type] | Certificate of Incorporation | ☐ Yes / ☐ No |
| Option Exercise | Form filed with first return | [Filed in AY ___] | Form attached to ITR-6 | ☐ Yes / ☐ No |
| Irrevocability | Cannot switch back | [Confirmed] | Management representation | ☐ Yes / ☐ No |
| Section 10AA | No SEZ deductions | [Not claimed] | Tax computation verified | ☐ Yes / ☐ No |
| Additional Depreciation | No Section 32(1)(iia) | [Not claimed] | Depreciation schedule | ☐ Yes / ☐ No |
| Investment Allowance | No Section 32AD | [Not claimed] | Tax computation verified | ☐ Yes / ☐ No |
| Other Deductions | No 33AB/33ABA/35AD | [Not claimed] | Tax computation verified | ☐ Yes / ☐ No |
| MAT Non-Applicability | MAT provisions don't apply | [Confirmed] | Tax computed at 22% flat | ☐ Yes / ☐ No |
| Prior Period Losses | Losses from pre-option period NOT carried forward | [Verified] | Loss schedule | ☐ Yes / ☐ No |

**Tax Computation Summary (if eligible)**:
- Total Income: Rs. ___
- Tax @ 22%: Rs. ___
- Surcharge @ 10% (if income > Rs. 1 crore): Rs. ___
- Health & Education Cess @ 4%: Rs. ___
- **Total Tax Payable**: Rs. ___ (Effective rate: 25.168% if surcharge applicable)

**Comparison with Normal Regime**:

| Item | Normal Regime (30%) | 115BAA Regime (22%) | Difference |
|------|-------------------|-------------------|------------|
| Tax before surcharge | Rs. ___ | Rs. ___ | Rs. ___ |
| Surcharge | Rs. ___ | Rs. ___ | Rs. ___ |
| Cess | Rs. ___ | Rs. ___ | Rs. ___ |
| **Total Tax** | Rs. ___ | Rs. ___ | **Rs. ___ (Savings)** |

**Recommendation**: Based on analysis, entity [IS / IS NOT] benefiting from Section 115BAA. If not opted yet, [recommend option / recommend staying with normal regime].

#### Section 115BAB - New Manufacturing Company @ 15% (Effective 17.16%)

**Eligibility Checklist**:

| Condition | Requirement | Entity Status | Evidence | Compliant? |
|-----------|-------------|---------------|----------|------------|
| Entity Type | Domestic company | [Type] | Certificate of Incorporation | ☐ Yes / ☐ No |
| Manufacturing Business | Engaged in manufacturing/production | [Confirmed] | Business activities | ☐ Yes / ☐ No |
| Setup Date | Set up and registered on/after 01-Oct-2019 | [Date: ___] | Incorporation certificate | ☐ Yes / ☐ No |
| Manufacturing Commencement | Before 31-Mar-2024 (extended deadline) | [Date: ___] | Production records | ☐ Yes / ☐ No |
| New Plant/Machinery | Not previously used | [Confirmed] | Asset register, purchase invoices | ☐ Yes / ☐ No |
| Option Exercise | Form filed with first return | [Filed in AY ___] | Form attached to ITR-6 | ☐ Yes / ☐ No |
| Prohibited Deductions | No 10AA/32(1)(iia)/32AD/etc. | [Not claimed] | Tax computation verified | ☐ Yes / ☐ No |
| MAT Non-Applicability | MAT provisions don't apply | [Confirmed] | Tax computed at 15% flat | ☐ Yes / ☐ No |

**Tax Computation Summary (if eligible)**:
- Total Income: Rs. ___
- Tax @ 15%: Rs. ___
- Surcharge @ 10% (if income > Rs. 1 crore): Rs. ___
- Health & Education Cess @ 4%: Rs. ___
- **Total Tax Payable**: Rs. ___ (Effective rate: 17.16% if surcharge applicable)

**Key Verification Points**:
- Manufacturing commencement date verification (must be before 31-Mar-2024) - obtain production records, sales invoices
- Asset register verification - ensure no plant/machinery was previously used or transferred from another entity
- Option irrevocability - confirm entity understands cannot switch back

**Common Errors**:
- Not verifying manufacturing commencement date (many entities missed 31-Mar-2024 deadline)
- Claiming regime for non-manufacturing activities (trading/services not eligible)
- Using second-hand plant/machinery (violates eligibility)

### 4. MAT/AMT Computation

#### Section 115JB - Minimum Alternate Tax (MAT) for Companies

**Applicability**: Companies (except those opted for Section 115BAA/115BAB)

**Book Profit Computation Format**:

| Item | Amount | Basis |
|------|--------|-------|
| **Net profit per P&L** | Rs. ___ | From audited financial statements |
| **Add:**
| Provision for income tax | Rs. ___ | As per P&L |
| Provision for deferred tax | Rs. ___ | As per Ind AS 12 |
| Amount carried to reserves (if debited to P&L) | Rs. ___ | Transfer to reserves |
| Depreciation per books MINUS depreciation per IT Act (if positive) | Rs. ___ | Clause 14 computation |
| Unabsorbed depreciation/loss b/f | Rs. ___ | Per IT Act |
| Amount inadmissible u/s 30-43B (per Form 3CD Clause 17) | Rs. ___ | Disallowances |
| Expenditure on employee stock options | Rs. ___ | If debited to P&L |
| Other adjustments per Explanation 1 to Section 115JB | Rs. ___ | Case-specific |
| **Less:**
| Depreciation per IT Act MINUS depreciation per books (if positive) | Rs. ___ | Clause 14 computation |
| Income exempt u/s 10/11/12 (except 10(38)) | Rs. ___ | Dividend, agricultural income |
| Amount withdrawn from reserves (if credited to P&L) | Rs. ___ | Reserve withdrawal |
| Amount of loss b/f or unabsorbed depreciation from earlier years u/s 32/72/73/74/74A as per P&L | Rs. ___ | B/F losses per books |
| **Book Profit** | Rs. ___ | Total additions - total deductions |
| **MAT @ 15%** | Rs. ___ | 15% of book profit |
| **Add:** Surcharge and cess | Rs. ___ | Per income slabs |
| **MAT Payable** | Rs. ___ | Total MAT liability |

**Normal Tax Computation**:
- Tax as per regular computation: Rs. ___

**Tax Payable**: **HIGHER of MAT and Normal Tax**

**MAT Credit**:
- If MAT > Normal Tax: MAT Credit = MAT - Normal Tax
- MAT credit can be carried forward for 15 assessment years
- Set off in year when Normal Tax > MAT

**MAT Credit Computation**:

| AY | MAT Paid | Normal Tax | MAT Credit Arose | MAT Credit Utilized | Balance MAT Credit |
|----|----------|-----------|-----------------|-------------------|-------------------|

**IMPORTANT**: MAT provisions NOT applicable if entity opted for Section 115BAA/115BAB. If opted, do NOT compute MAT.

**Common Errors**:
- Computing MAT for entities under 115BAA/115BAB regime (not applicable)
- Not adjusting for depreciation difference correctly (add if books > IT Act; deduct if IT Act > books)
- Not carrying forward MAT credit (15-year limit)

#### Section 115JC - Alternate Minimum Tax (AMT) for Non-Companies

**Applicability**: LLP/firm/individual/HUF claiming profit-linked deductions (Sections 80H to 80RRB) or Chapter VI-A deductions > Rs. 1 lakh

**Adjusted Total Income Computation**:
- Total income as per normal computation: Rs. ___
- Add: Deductions u/s 10AA, 80H to 80RRB: Rs. ___
- Add: Chapter VI-A deductions (if exceeds Rs. 1 lakh): Rs. ___
- **Adjusted Total Income**: Rs. ___
- **AMT @ 18.5%**: Rs. ___

**Tax Payable**: Higher of AMT and Normal Tax

**AMT Credit**: Similar to MAT credit, 15-year carry forward

### 5. Advance Tax Compliance

**Installment Schedule Verification**:

| Due Date | Required % | Required Amount | Actual Paid | Shortfall | Interest u/s 234C |
|----------|-----------|----------------|-------------|-----------|------------------|
| 15-Jun | 15% | Rs. ___ | Rs. ___ | Rs. ___ | Rs. ___ |
| 15-Sep | 45% (cumulative) | Rs. ___ | Rs. ___ (cumulative) | Rs. ___ | Rs. ___ |
| 15-Dec | 75% (cumulative) | Rs. ___ | Rs. ___ (cumulative) | Rs. ___ | Rs. ___ |
| 15-Mar | 100% (cumulative) | Rs. ___ | Rs. ___ (cumulative) | Rs. ___ | Rs. ___ |

**Interest Computation**:

**Section 234B - Deferment of Advance Tax**:
- If advance tax paid < 90% of assessed tax
- Interest @ 1% per month on shortfall from 01-Apr to date of assessment

**Section 234C - Short Payment of Installments**:
- Computed per installment based on shortfall
- Interest @ 1% per month on shortfall amount for period of default

**Advance Tax Computation Format**:
- Total tax liability for the year: Rs. ___
- Less: TDS/TCS credits: Rs. ___
- **Net advance tax payable**: Rs. ___
- 15% by 15-Jun: Rs. ___
- 45% by 15-Sep: Rs. ___
- 75% by 15-Dec: Rs. ___
- 100% by 15-Mar: Rs. ___

**Presumptive Taxation Relief**:
- If entity under Section 44AD/44ADA/44AE: Advance tax can be paid in one installment by 15-Mar
- No interest u/s 234C for earlier installments

**Verification**:
- ☐ Advance tax challans obtained for all installments
- ☐ Amounts cross-verified with Form 26AS
- ☐ Interest u/s 234B computed (if shortfall from 90%)
- ☐ Interest u/s 234C computed per installment
- ☐ Presumptive taxation relief verified (if applicable)

### 6. Tax Computation Summary Format

Provide complete computation in standard format:

```
INCOME TAX COMPUTATION FOR AY 20__-__

A. INCOME FROM SALARY                                      Rs. ___
   (Details per Schedule S)

B. INCOME FROM HOUSE PROPERTY                               Rs. ___
   (Details per Schedule HP)

C. PROFITS AND GAINS FROM BUSINESS/PROFESSION              Rs. ___
   (Details per Schedule BP)
   Net profit per P&L                          Rs. ___
   Add: Disallowances
     - Section 40A(2) related party            Rs. ___
     - Section 40A(3) cash payments            Rs. ___
     - Section 43B statutory dues              Rs. ___
     - Section 43B(h) MSE payments             Rs. ___
     - Depreciation excess (books over IT)     Rs. ___
     - Other disallowances                     Rs. ___   Rs. ___
   Less: Allowances
     - Depreciation as per IT Act              Rs. ___
     - Other allowances                        Rs. ___   Rs. ___
   Business income                                         Rs. ___

D. CAPITAL GAINS                                           Rs. ___
   (Details per Schedule CG)

E. INCOME FROM OTHER SOURCES                               Rs. ___
   (Interest, dividends, etc.)

GROSS TOTAL INCOME                                         Rs. ___

Less: DEDUCTIONS UNDER CHAPTER VI-A
   Section 80C                                 Rs. ___
   Section 80D                                 Rs. ___
   Section 80G                                 Rs. ___
   [Other sections]                            Rs. ___
   Total Chapter VI-A deductions                           Rs. ___

TOTAL TAXABLE INCOME                                       Rs. ___

TAX COMPUTATION:
   Tax at applicable rate                                  Rs. ___
   [For 115BAA: 22% / For 115BAB: 15% / Normal: 30%]
   Add: Surcharge                                          Rs. ___
   Add: Health & Education Cess @ 4%                       Rs. ___
   TOTAL TAX                                               Rs. ___

MAT COMPUTATION (if applicable):
   Book profit as per Section 115JB                        Rs. ___
   MAT @ 15%                                               Rs. ___
   Add: Surcharge and cess                                 Rs. ___
   TOTAL MAT                                               Rs. ___

TAX PAYABLE: Higher of Normal Tax and MAT                  Rs. ___

Less: ADVANCE TAX AND TDS/TCS CREDITS
   Advance tax paid                            Rs. ___
   TDS (per Form 26AS)                         Rs. ___
   TCS (per Form 26AS)                         Rs. ___
   Total credits                                           Rs. ___

TAX PAYABLE/(REFUNDABLE)                                   Rs. ___

Add: INTEREST (if applicable)
   Section 234A (late filing)                  Rs. ___
   Section 234B (advance tax shortfall)        Rs. ___
   Section 234C (installment shortfall)        Rs. ___
   Total interest                                          Rs. ___

TOTAL TAX AND INTEREST PAYABLE                             Rs. ___
```

## Cross-References

- **/audit:tax-3cd**: All disallowances identified in tax computation must match Form 3CD clause reporting (especially Clauses 14, 17, 38, 39, 42, 43). Cross-verify before finalizing.
- **/audit:tax-checklist**: Master tax audit control document integrating Form 3CD completion, tax computation review, TDS compliance, and final sign-off.
- **/audit:statutory-dues**: Section 43B analysis - detailed payment verification with regularity table and three-column analysis for disallowance computation.

## Output Format

A comprehensive tax computation review workpaper containing:
- **Computation Structure Review**: Checklist confirming all required components present (five heads, set-off, Chapter VI-A, tax rates)
- **Error Area Analysis**: Section-wise tables for:
  - Section 40A(2) related party payments with arm's length assessment
  - Section 40A(3) cash payments with aggregation and splitting detection
  - Section 43B statutory dues with three-column analysis and payment date verification
  - Depreciation reconciliation with WDV and rate verification
  - Chapter VI-A deductions with eligibility and limit verification
- **Concessional Tax Rate Assessment**:
  - Section 115BAA eligibility analysis with condition checklist and comparison table
  - Section 115BAB eligibility analysis (if applicable)
  - Recommendation on regime selection
- **MAT/AMT Analysis**:
  - Book profit computation (if applicable)
  - MAT vs. Normal tax comparison
  - MAT credit available and carry-forward schedule
- **Advance Tax Compliance Review**:
  - Installment payment schedule with shortfall identification
  - Interest calculations u/s 234B and 234C
- **Reconciliation with Form 3CD**: Cross-check table ensuring all Form 3CD disallowances reflected in tax computation
- **Identified Issues and Adjustments**: Summary of all corrections needed with amounts
- **Final Tax Liability**: Revised computation incorporating auditor's adjustments
- **Conclusion**: Opinion on whether tax computation is in accordance with Income Tax Act provisions

---

**Disclaimer:** This tool assists with audit workflow documentation but does not substitute professional audit judgment. All outputs must be reviewed by qualified Chartered Accountants.
