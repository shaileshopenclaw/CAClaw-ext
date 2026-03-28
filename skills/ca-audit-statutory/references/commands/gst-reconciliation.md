# GST Reconciliation Guidance

Guide through comprehensive GST reconciliation procedures covering all four reconciliation dimensions: GSTR-1 vs. books (outward supplies), GSTR-2B vs. purchase register (inward supplies), Input Tax Credit (ITC) eligibility verification per Section 16, and GSTR-9 annual return reconciliation with audited financials.

**Critical**: The Section 16(2)(aa) requirement (effective 01-Jan-2022) mandates that ITC is valid ONLY if the invoice appears in GSTR-2B — supplier must file GSTR-1 and pay GST for ITC to be eligible. This makes month-by-month GSTR-2B reconciliation mandatory, not optional.

## Required Context

Before running this command, ensure:
- Entity is registered under GST and files regular GST returns
- Access to all GST returns filed (GSTR-1, GSTR-3B, GSTR-2A/2B, GSTR-9)
- Audited financial statements are finalized
- Books of account including sales register, purchase register, and GST ledgers are available
- Understanding of entity's business model and applicability of GST rates/exemptions

**Ask the user to provide**:
- GST registration numbers (list all if entity has multiple GSTINs for different states)
- Financial year for reconciliation (e.g., FY 2024-25)
- Whether entity makes both taxable and exempt supplies (triggers Rule 42/43 proportionate reversal requirement)
- Whether entity has export transactions (zero-rated supplies requiring specific treatment)
- Turnover threshold (determines if e-invoicing is mandatory — Rs. 5 crore from Aug 2023)

## Workflow

### 1. GSTR-1 vs Books Reconciliation (Outward Supplies)

Reconcile sales reported in books with GSTR-1 filed on GST portal to ensure all outward supplies are correctly reported.

**GSTR-1 Components to Reconcile**:
- B2B invoices (supplies to registered persons with GSTIN)
- B2C large invoices (supplies to unregistered persons > Rs. 2.5 lakh per invoice)
- B2C small invoices (supplies to unregistered persons ≤ Rs. 2.5 lakh — state-wise aggregate)
- Credit/debit notes issued (adjustments to previous supplies)
- Exports (with and without payment of IGST) — zero-rated supplies
- Nil rated, exempted, and non-GST supplies
- Advances received with GST liability

**Month-by-Month Reconciliation Format**:

| Month | Sales per Books (incl GST) | Sales per GSTR-1 | Difference | Variance Reason | Action Required |
|-------|---------------------------|------------------|------------|----------------|-----------------|
| Apr-24 | 11,80,000 | 11,80,000 | - | - | None |
| May-24 | 12,45,000 | 12,20,000 | 25,000 | Credit note issued in June for May supply | Verify reversal in Jun GSTR-1 |
| Jun-24 | 13,10,000 | 13,35,000 | (25,000) | Advance received with GST in Jun, revenue recognized in Jul | Document timing difference |

**Rate-Wise Breakup Reconciliation** (essential for detecting classification errors):

| Rate | Sales per Books (taxable value) | GSTR-1 Taxable Value | Variance | Investigation |
|------|--------------------------------|---------------------|----------|---------------|
| 0% (Zero-rated/Exempt) | 2,50,000 | 2,50,000 | - | - |
| 5% | 5,00,000 | 4,80,000 | 20,000 | Check if items wrongly classified at 12% |
| 12% | 8,00,000 | 8,20,000 | (20,000) | Possible rate misclassification from 5% |
| 18% | 15,00,000 | 15,00,000 | - | - |
| 28% | 1,00,000 | 1,00,000 | - | - |
| Exempt | 50,000 | 50,000 | - | - |
| Non-GST | 25,000 | - | 25,000 | Correctly excluded from GST |

**Common Issues and Detection Procedures**:

1. **Export sales zero-rated classification mismatch**:
   - Issue: Exports shown in domestic sales in books but zero-rated in GSTR-1
   - Detection: Compare export register with GSTR-1 Table 6A (exports with payment of IGST) and Table 6B (exports without payment)
   - Resolution: Reconcile shipping bills, ARE-1 forms, and BRC (Bank Realization Certificate) with GSTR-1 export entries

2. **Advances received with GST in GSTR-1 but not in sales register**:
   - Issue: GST paid on advances (per Section 12 — time of supply) but revenue not yet recognized per Ind AS 115
   - Detection: Compare GSTR-1 Table 11A (taxable outward supplies on which tax not paid — advances) with advance ledger
   - Resolution: Document timing difference; verify adjustment when invoice issued

3. **Credit notes timing differences**:
   - Issue: Credit notes issued in books but amendments not reflected in GSTR-1 of original supply month
   - Detection: Track credit note register and verify Table 9B (credit notes for B2B) and Table 9C (credit notes for B2C large)
   - Resolution: Verify credit notes reported in GSTR-1 of issue month (not original invoice month)

4. **Place of supply errors causing IGST/CGST/SGST misclassification**:
   - Issue: Intra-state supply wrongly classified as inter-state (or vice versa) affecting IGST vs CGST/SGST
   - Detection: Compare customer location (billing/shipping address) with tax type charged
   - Resolution: Verify place of supply rules (Sections 10, 11, 12, 13 of IGST Act); amend GSTR-1 if errors found

5. **E-invoicing compliance check** (mandatory for turnover > Rs. 5 crore from Aug 2023):
   - Issue: Invoices issued without IRN (Invoice Reference Number) from e-invoice portal
   - Detection: Check if all B2B invoices have IRN; verify GSTR-1 auto-population from e-invoice system
   - Resolution: Generate IRNs for missing invoices; reconcile e-invoice portal data with GSTR-1

**Reconciliation Statement Format**:

```
Sales as per Books of Account (including GST)                     Rs. 1,50,00,000
Add: Advances received with GST (not yet recognized as revenue)   Rs.    5,00,000
Less: Exempt supplies (included in books, excluded from GST)      Rs. (10,00,000)
Less: Non-GST supplies (out of scope)                             Rs.  (2,00,000)
Add: Export sales (zero-rated, shown net in books)               Rs.   20,00,000
Less: Credit notes issued but not adjusted in books               Rs.  (1,00,000)
Adjusted Sales for GSTR-1                                         Rs. 1,62,00,000

Sales as per GSTR-1 (April-March)                                 Rs. 1,62,00,000
Difference                                                        Rs.          Nil
```

### 2. GSTR-2B vs Purchase Register Reconciliation (Inward Supplies)

Reconcile purchases in books with GSTR-2B (auto-populated statement of ITC available) to verify ITC eligibility per Section 16(2)(aa).

**GSTR-2B Components** (auto-populated based on supplier's GSTR-1):
- B2B invoices (regular supplies from registered suppliers)
- B2B debit/credit notes (adjustments)
- ISD credit (Input Service Distributor credit, if applicable)
- TDS/TCS credit (tax deducted/collected at source)
- Imports (IGST paid on Bill of Entry)

**Month-by-Month Reconciliation Format** (CRITICAL for Section 16(2)(aa) compliance):

| Month | ITC per GSTR-2B | ITC Claimed in GSTR-3B | ITC per Books | Variance GSTR-2B vs Books | Variance GSTR-3B vs GSTR-2B |
|-------|-----------------|------------------------|---------------|--------------------------|----------------------------|
| Apr-24 | 1,50,000 | 1,50,000 | 1,75,000 | 25,000 (invoices not in 2B) | Nil (compliant) |
| May-24 | 1,65,000 | 1,60,000 | 1,60,000 | Nil | 5,000 (excess claimed — check) |
| Jun-24 | 1,80,000 | 1,80,000 | 1,85,000 | 5,000 (supplier late filing) | Nil (compliant) |

**Supplier-Wise Variance Analysis** (for material suppliers):

| Supplier Name | Supplier GSTIN | Invoices per Books (Rs.) | Invoices per GSTR-2B (Rs.) | Variance | Root Cause | Action |
|---------------|----------------|-------------------------|---------------------------|----------|------------|--------|
| ABC Pvt Ltd | 27AABCA1234A1Z5 | 5,00,000 | 5,00,000 | - | - | None |
| XYZ Ltd | 27AABCX5678B1Z3 | 3,00,000 | 2,50,000 | 50,000 | Invoice dated 30-Jun uploaded by supplier in Jul | Reverse ITC in Jun, reclaim in Jul |
| PQR Traders | 27AABCP9012C1Z1 | 2,00,000 | - | 2,00,000 | Supplier not filed GSTR-1 | Follow up + reverse ITC per 16(2)(aa) |

**Detection Procedures for Common Variances**:

1. **Invoices in books but NOT in GSTR-2B** (supplier non-compliance — MOST CRITICAL):
   - **Issue**: Supplier has not filed GSTR-1, or filed with errors (GSTIN mismatch, invoice number errors)
   - **Section 16(2)(aa) Impact**: ITC NOT eligible even if all other conditions met — MUST reverse ITC
   - **Detection**: Compare purchase register with GSTR-2B supplier-wise; identify missing invoices
   - **Conservative Approach**: Reverse ITC immediately in month when invoice NOT in GSTR-2B; reclaim when supplier files correct GSTR-1
   - **Action**:
     - Communicate with supplier to file/correct GSTR-1
     - Reverse ITC via Table 4(B)(2) in GSTR-3B
     - Monitor subsequent months' GSTR-2B for appearance
     - Reclaim reversed ITC once available (subject to time limits)

2. **Invoices in GSTR-2B but NOT in books** (potential duplicate or unbooked):
   - **Issue**: Supplier uploaded invoice in their GSTR-1 but entity has not booked purchase
   - **Detection**: Download GSTR-2B; compare with purchase register; identify extra invoices
   - **Investigation**:
     - Check if invoice physically received but not yet booked (timing difference)
     - Check if supplier uploaded duplicate invoice (multiple entries for same invoice)
     - Check if invoice belongs to different entity (GSTIN error by supplier)
   - **Action**: Book legitimate purchases; request supplier to delete duplicates; report GSTIN errors

3. **Timing differences where supplier files GSTR-1 late**:
   - **Issue**: Purchase booked in Month X, supplier files GSTR-1 in Month Y (invoice appears in Month Y GSTR-2B)
   - **Section 16(2)(aa) Impact**: ITC eligible only from Month Y, NOT Month X
   - **Conservative Approach**: Claim ITC in month when invoice appears in GSTR-2B, NOT in booking month
   - **Action**: Delay ITC claim until GSTR-2B reflects invoice; document timing difference

4. **Reverse charge mechanism purchases** (recipient pays GST, not in GSTR-2B supplier section):
   - **Issue**: RCM purchases (unregistered supplier, specified services like legal, GTA) — entity pays GST as recipient
   - **Detection**: Check Table 3.1(d) in GSTR-2B (inward supplies on which tax is to be paid on reverse charge basis)
   - **Verification**: Ensure RCM liability and ITC both shown in GSTR-3B (Table 3.1(d) and Table 4(A)(3))
   - **Action**: Reconcile RCM purchases separately; verify net-off in GSTR-3B

**Month-Wise ITC Reconciliation with Section 16(2)(aa) Compliance**:

```
ITC as per Books of Account (April)                              Rs. 1,75,000
Less: ITC on invoices NOT in GSTR-2B (supplier non-compliance)   Rs. (25,000)
ITC Eligible per Section 16(2)(aa) (= GSTR-2B Apr)               Rs. 1,50,000

ITC Claimed in GSTR-3B (April)                                   Rs. 1,50,000
Difference                                                       Rs.      Nil
Compliance: YES — ITC claim aligned with GSTR-2B
```

### 3. ITC Eligibility Verification (Section 16 Five-Condition Test)

Verify all Input Tax Credit claimed meets the five mandatory conditions under Section 16 of CGST Act, 2017. ALL five conditions must be satisfied; failure of even one condition makes ITC ineligible.

**Section 16 Five-Condition Checklist**:

For sample invoices (select high-value invoices, new suppliers, unusual expenses), verify:

**Condition 1: Tax invoice/debit note in possession**
- Verification: Check invoice original (or e-invoice with IRN) is in entity's possession
- Documentation: Invoice number, date, supplier GSTIN, taxable value, tax amount, HSN code
- Failure: No ITC if invoice not in possession (oral purchase, missing invoice)

**Condition 2: Goods/services received**
- Verification:
  - Goods: Check GRN (Goods Received Note), inward register, physical verification
  - Services: Check service completion certificate, email confirmations, delivery proof
- Documentation: GRN number, receipt date, quantity received vs. invoice
- Failure: No ITC if goods/services not actually received (fraudulent invoice, quantity mismatch)

**Condition 3: Tax charged actually paid to government by supplier** (Section 16(2)(aa) — verified via GSTR-2B)
- Verification: Invoice must appear in GSTR-2B (auto-populated from supplier's GSTR-1)
- Critical: Supplier must have filed GSTR-1 AND paid GST to government
- Documentation: GSTR-2B download showing invoice details
- Failure: No ITC if invoice not in GSTR-2B — most common ITC denial reason post-2022

**Condition 4: GSTR-3B return filed by entity**
- Verification: Check GSTR-3B filing status for month in which ITC claimed
- Documentation: GSTR-3B acknowledgment, ARN (Application Reference Number)
- Failure: ITC cannot be claimed if return not filed (no mechanism to claim without return)

**Condition 5: Payment to supplier within 180 days of invoice date** (Section 16(2)(d))
- Verification:
  - Check payment vouchers, bank statements for payment date
  - If payment NOT made within 180 days → ITC must be reversed with interest
  - If payment made after reversal → ITC can be reclaimed
- Calculation: Invoice date to payment date = X days. If X > 180, reversal required.
- Documentation: Payment reference, date, amount, bank statement confirmation
- Failure: ITC reversed if unpaid beyond 180 days; can reclaim when paid

**ITC Eligibility Verification Table** (sample format for workpaper):

| Invoice No. | Date | Supplier GSTIN | Taxable Value | Tax (Rs.) | Condition 1 (Invoice) | Condition 2 (Received) | Condition 3 (GSTR-2B) | Condition 4 (Return Filed) | Condition 5 (180-day) | Eligible? | Action |
|-------------|------|----------------|---------------|-----------|---------------------|----------------------|---------------------|--------------------------|---------------------|-----------|--------|
| INV-001 | 05-Apr-24 | 27AABCA1234A1Z5 | 1,00,000 | 18,000 | Yes (hard copy) | Yes (GRN#123) | Yes (Apr GSTR-2B) | Yes (ARN: AB12...) | Yes (paid 20-Apr) | YES | Claim valid |
| INV-002 | 10-Apr-24 | 27AABCX5678B1Z3 | 50,000 | 9,000 | Yes (e-invoice) | Yes (service cert) | **NO (not in 2B)** | Yes | Yes (paid 25-Apr) | **NO** | **Reverse ITC per 16(2)(aa)** |
| INV-003 | 15-Apr-24 | 27AABCP9012C1Z1 | 75,000 | 13,500 | Yes | Yes (GRN#125) | Yes (Apr GSTR-2B) | Yes | **NO (unpaid)** | **NO** | **Reverse after 180 days** |

**Key Takeaways**:
- Even ONE failed condition → entire ITC ineligible
- Condition 3 (GSTR-2B) is the most stringent post-2022 — systematic month-wise check required
- Condition 5 creates timing risk — track aged payables for ITC reversal

### 4. Section 17(5) Blocked Credits Identification

Even if all Section 16 conditions are met, ITC is NOT available on specific categories of expenses listed in Section 17(5) of CGST Act, 2017. Identify and reverse ITC on blocked credits.

**Comprehensive Blocked Credits List with Examples**:

1. **Motor vehicles and conveyances** — EXCEPT when used for:
   - Transportation of goods (delivery vehicles, trucks)
   - Passenger transportation (taxis, buses for hire)
   - Imparting motor driving skills (driving schools)
   - **Examples of BLOCKED**: Staff cars, director's car (personal use), two-wheelers for employees
   - **Examples of ALLOWED**: Delivery vans, freight trucks, company-owned taxis for business

2. **Food and beverages, outdoor catering** — EXCEPT:
   - Provided to customers (restaurant selling food — input for output)
   - Provided to employees under statutory obligation (canteen per Factories Act)
   - **Examples of BLOCKED**: Client entertainment meals, birthday celebration catering, employee lunch (no statutory obligation)
   - **Examples of ALLOWED**: Canteen food in factory (statutory), hotel's restaurant food purchases

3. **Club memberships, health and fitness centers**:
   - **Examples of BLOCKED**: Gym memberships for employees, golf club membership for directors, wellness center subscriptions
   - **No exceptions** — ITC always blocked

4. **Rent-a-cab, life/health insurance, travel benefits to employees** — EXCEPT:
   - Obligatory for employer to provide (statutory requirement)
   - Used for business travel (customer visits, site inspections)
   - **Examples of BLOCKED**: Employee health insurance (voluntary benefit), life insurance premiums, family travel
   - **Examples of ALLOWED**: Cab hire for client meetings, travel insurance for business trip, group health insurance under labor law

5. **Works contract for immovable property construction** — EXCEPT:
   - Plant and machinery (capitalized equipment with ITC available)
   - **Examples of BLOCKED**: Office building construction, warehouse civil works (walls, roof), factory shed
   - **Examples of ALLOWED**: Installation of fixed plant/machinery, foundation for machinery (if integral)

6. **Personal consumption**:
   - **Examples**: Personal mobile phones, personal laptops, goods taken by owner for personal use
   - **ITC blocked** — even if used partly for business

7. **Goods lost, stolen, destroyed, written off, or disposed of by way of gift or free samples**:
   - **Examples of BLOCKED**: Inventory destroyed in fire, obsolete stock written off, free samples distributed, gifts to clients
   - **Exception for free samples**: Only if distributed as per marketing policy and reasonable quantity
   - **Verification**: Check stock registers for write-offs, disposal records, free sample distribution logs

**Blocked Credit Identification Table**:

| Expense Category | Vendor | Amount (Rs.) | GST Paid (Rs.) | Blocked per Section 17(5)? | Reason | ITC to Reverse |
|------------------|--------|--------------|---------------|---------------------------|--------|----------------|
| Staff Car Purchase | ABC Motors | 8,00,000 | 1,44,000 | YES | Motor vehicle — not for specified use | 1,44,000 |
| Outdoor Catering (Client Event) | XYZ Caterers | 50,000 | 9,000 | YES | Food & beverages — not statutory or output | 9,000 |
| Gym Membership | Fitness First | 1,20,000 | 21,600 | YES | Health/fitness center — no exception | 21,600 |
| Rent-a-Cab (Client Meeting) | Uber India | 5,000 | 900 | NO | Business travel — exception applies | - |
| Office Building Civil Work | PQR Builders | 50,00,000 | 9,00,000 | YES | Works contract for immovable property | 9,00,000 |
| Machinery Installation | PQR Builders | 10,00,000 | 1,80,000 | NO | Plant & machinery — exception | - |
| Free Samples Distribution | - | 25,000 | 4,500 | YES | Goods disposed as free samples | 4,500 |

**Total Section 17(5) Blocked Credits to Reverse**: Rs. 10,88,700

**Verification Procedure**:
1. Review all expense ledgers for FY
2. Identify expenses falling under Section 17(5) categories
3. Check if any exceptions apply (burden of proof on assessee)
4. Compute total blocked credit
5. Verify reversal in GSTR-3B Table 4(B) or GSTR-9 Table 7

### 5. Rule 42/43 Proportionate Reversal (for Mixed Supplies)

If entity makes BOTH taxable and exempt supplies, ITC on common inputs/input services must be reversed proportionately per Rule 42 (inputs/input services) and Rule 43 (capital goods) of CGST Rules.

**Rule 42 — Common Inputs and Input Services** (reversal formula):

```
Reversal Amount = Common ITC × (Exempt Turnover / Total Turnover)

Where:
- Common ITC = ITC that cannot be attributed exclusively to taxable or exempt supplies
- Exempt Turnover = Turnover of exempt supplies + non-GST supplies
- Total Turnover = Taxable supplies + Exempt supplies + Exports (zero-rated)
```

**Worked Example**:

```
Total ITC availed in Q1 FY 24-25:                                Rs. 10,00,000
ITC exclusively on taxable inputs (identifiable):                Rs.  6,00,000
ITC exclusively on exempt inputs (identifiable):                 Rs.  1,00,000 (already not claimed)
Common ITC (on admin, utilities, rent — attributable to both):  Rs.  3,00,000

Turnover for Q1:
Taxable supplies (18% GST):                                      Rs. 80,00,000
Exempt supplies (education services):                            Rs. 20,00,000
Total Turnover:                                                  Rs. 1,00,00,000

Exempt Supply % = 20,00,000 / 1,00,00,000 = 20%

Rule 42 Reversal = 3,00,000 × 20% = Rs. 60,000
```

**Rule 43 — Capital Goods** (separate computation with 5-year reversal):

If capital goods are used for both taxable and exempt supplies:

```
Reversal per year = (Total ITC on capital goods / 5 years) × (Exempt Turnover / Total Turnover)

Example:
Capital goods ITC (machinery):                                   Rs. 5,00,000
Exempt % in Year 1:                                              20%
Reversal in Year 1 = (5,00,000 / 5) × 20% = Rs. 20,000

Note: Reversal required for 5 years OR till capital goods disposed, whichever is earlier
```

**Proportionate Reversal Computation Table**:

| Quarter | Total ITC (Rs.) | ITC on Exempt Inputs (identifiable) | Common ITC (Rs.) | Exempt Turnover (Rs.) | Total Turnover (Rs.) | Exempt % | Reversal Amount (Rs.) |
|---------|----------------|-----------------------------------|-----------------|---------------------|---------------------|----------|---------------------|
| Q1 FY25 | 10,00,000 | 1,00,000 (not claimed) | 3,00,000 | 20,00,000 | 1,00,00,000 | 20% | 60,000 |
| Q2 FY25 | 11,00,000 | 1,20,000 (not claimed) | 3,50,000 | 25,00,000 | 1,10,00,000 | 22.7% | 79,450 |
| Q3 FY25 | 12,00,000 | 1,50,000 (not claimed) | 4,00,000 | 30,00,000 | 1,20,00,000 | 25% | 1,00,000 |
| Q4 FY25 | 13,00,000 | 1,80,000 (not claimed) | 4,50,000 | 35,00,000 | 1,30,00,000 | 26.9% | 1,21,050 |

**Total Annual Reversal (Rule 42)**: Rs. 3,60,500

**Monthly Provisional Reversal + Annual True-Up Procedure**:

1. **Monthly**: Calculate provisional reversal based on estimated exempt % from previous year
2. **Quarterly**: Adjust provisional reversal based on actual quarterly performance
3. **Annual**: Final true-up in GSTR-9 annual return (Table 7 — ITC reversed)
4. **Reversal in GSTR-3B**: Table 4(B)(2) — ITC reversed — Rule 42/43

**Key Points**:
- Cannot claim ITC on identifiable exempt inputs — reversal only for COMMON ITC
- Banking/financial services making exempt (interest income) + taxable (fee income) → mandatory reversal
- Developers with sale of land (exempt) + construction services (taxable) → mandatory reversal

### 6. GSTR-9 Annual Return Reconciliation

Reconcile GSTR-9 annual return (filed by 31st December of next FY) with audited financial statements to ensure consistency and identify discrepancies.

**GSTR-9 Key Tables and Reconciliation**:

**Table 5 — Outward Supplies Reconciliation**:

```
Revenue from Operations (as per Audited P&L)                     Rs. 5,00,00,000
Add: Exempt supplies (not in revenue, but in GSTR-9)            Rs.    50,00,000
Add: Export incentives shown separately (if any)                 Rs.    10,00,000
Less: Non-operating income included in revenue                   Rs.  (5,00,000)
Add: Advances with GST (shown in GSTR-1, revenue not recognized) Rs.    15,00,000
Less: Revenue recognized but invoice not yet raised              Rs.  (10,00,000)
Adjusted Turnover for GSTR-9 Table 5                            Rs. 5,60,00,000

Turnover as per GSTR-9 Table 5 (sum of GSTR-1 Apr-Mar)          Rs. 5,60,00,000
Difference                                                       Rs.           Nil
```

**Common Reconciliation Items**:

1. **Ind AS 115 revenue recognition timing vs. GST time of supply**:
   - Issue: Revenue recognized over time (Ind AS 115 — stage of completion) vs. GST triggered at invoice/payment (whichever earlier)
   - Example: Construction contracts — revenue recognized per stage, GST on progress billing
   - Reconciliation: Document timing differences; verify cumulative alignment

2. **Advances with GST but revenue not recognized**:
   - Issue: GST paid on advance (Section 12 time of supply) but revenue deferred till delivery
   - GSTR-1: Shown in Table 11A (outward supplies on which tax not paid — advances)
   - P&L: Not in revenue (shown in advance liability)
   - Reconciliation: Identify all advances; verify GST paid and liability recognized

3. **Bill-and-hold, consignment arrangements**:
   - Issue: Goods transferred to customer but revenue deferred (bill-and-hold); or goods sent to consignee (consignment stock)
   - GST: Tax point may trigger earlier (removal from place of business)
   - Reconciliation: Review arrangement terms; verify GST treatment aligns with substance

**Table 6 — ITC Availed Reconciliation**:

```
ITC as per Books of Account (sum of all ITC entries)             Rs. 80,00,000
Less: ITC reversed — Section 17(5) blocked credits               Rs. (10,00,000)
Less: ITC reversed — Rule 42/43 proportionate reversal           Rs.  (3,60,500)
Less: ITC reversed — 180-day payment condition                   Rs.  (2,00,000)
Add: ITC reclaimed (payment made after reversal)                 Rs.    1,50,000
Net ITC Available                                                Rs. 65,89,500

ITC as per GSTR-9 Table 6 (sum of GSTR-3B Table 4 Apr-Mar)      Rs. 65,89,500
Difference                                                       Rs.          Nil
```

**Table 7 — ITC Reversed Reconciliation**:

| Reversal Category | Amount (Rs.) | Verified in GSTR-3B? | Verified in Books? |
|-------------------|--------------|---------------------|-------------------|
| Section 17(5) blocked credits | 10,00,000 | Yes — Table 4(B)(2) | Yes — reversal entries |
| Rule 42/43 proportionate reversal | 3,60,500 | Yes — Table 4(B)(2) | Yes — quarterly journals |
| 180-day payment non-compliance | 2,00,000 | Yes — Table 4(B)(2) | Yes — reversal on aging |
| Section 16(2)(aa) — not in GSTR-2B | 5,00,000 | Yes — Table 4(B)(2) | Yes — supplier non-compliance tracker |
| **Total Reversal (Table 7)** | **20,60,500** | **Verified** | **Verified** |

**Table 9 — Tax Paid Reconciliation**:

```
GST Liability as per Books (sum of CGST/SGST/IGST expense)       Rs. 90,00,000
Add: Interest paid on delayed payment                            Rs.    50,000
Add: Late fees paid                                              Rs.    10,000
Total GST Outflow                                                Rs. 90,60,000

Tax Paid as per GSTR-9 Table 9 (from GSTR-3B Apr-Mar)           Rs. 90,00,000
Interest & Late Fee (separate disclosure)                        Rs.    60,000
Total as per GSTR-9                                              Rs. 90,60,000
Difference                                                       Rs.          Nil
```

**Reconciliation Workpaper Format**:

For each table (5, 6, 7, 8, 9), prepare:
- Amount as per audited financial statements
- Adjustments (with narration and cross-reference)
- Amount as per GSTR-9
- Difference (investigate if > performance materiality)

### 7. Discrepancy Classification and Resolution

Classify all identified discrepancies by priority and create action plan for resolution.

**Priority Matrix**:

**Category A — Supplier Non-Compliance (HIGH PRIORITY)** — Immediate follow-up required:
- Issue: Invoices in books but NOT in GSTR-2B (supplier not filed GSTR-1 or filed incorrectly)
- Impact: ITC reversed per Section 16(2)(aa); cash flow impact; interest cost
- Action:
  1. Send written communication to supplier requesting GSTR-1 filing/correction
  2. Reverse ITC immediately in current month GSTR-3B
  3. Monitor next month GSTR-2B for appearance
  4. Reclaim ITC when available (via Table 4(A)(2) in GSTR-3B)
- Timeline: 15 days for supplier follow-up; immediate reversal

**Category B — ITC Ineligibility (HIGH PRIORITY)** — Reverse with interest:
- Issue: ITC claimed but not eligible (blocked credits, 180-day breach, conditions not met)
- Impact: Tax liability + interest @ 24% on wrongly claimed ITC
- Action:
  1. Compute total ineligible ITC with interest calculation
  2. Reverse in current month GSTR-3B Table 4(B)(2)
  3. Pay interest via DRC-03 (Liability tab on GST portal)
  4. Disclose in GSTR-9 Table 7
- Timeline: Immediate (avoid accumulation of interest)

**Category C — Underreporting (MEDIUM PRIORITY)** — Amend returns with interest:
- Issue: Turnover in books higher than GSTR-1 (invoices missed in GST return)
- Impact: Tax liability + interest @ 18% on delayed payment
- Action:
  1. Identify missed invoices
  2. File GSTR-1 amendment for original month (or report in current month if beyond amendment window)
  3. Pay GST liability with interest
  4. Adjust GSTR-9 to reflect correct turnover
- Timeline: 30 days (amendment allowed till Nov 30 of next FY or annual return filing)

**Category D — Timing Differences (LOW PRIORITY)** — Document only:
- Issue: Temporary differences due to cut-off (booked in Month X, reflected in Month Y)
- Impact: Nil (self-correcting over annual period)
- Action:
  1. Document nature of timing difference with narration
  2. Verify reversal in subsequent period
  3. Ensure GSTR-9 annual reconciliation shows nil net difference
- Timeline: No action required if verified as timing

**Interest Rates (for quantification)**:
- Interest on delayed tax payment: 18% per annum (Section 50(1))
- Interest on wrongly claimed ITC: 24% per annum (Section 50(3))
- Calculation: (Tax amount × Interest rate × Days delayed) / 365

**Resolution Tracker Table**:

| Discrepancy # | Category | Nature | Amount (Rs.) | Root Cause | Resolution Action | Responsible | Timeline | Status |
|--------------|----------|--------|-------------|------------|-------------------|-------------|----------|--------|
| 1 | A | ITC not in GSTR-2B | 50,000 | Supplier XYZ not filed GSTR-1 | Communicate + reverse | Accounts Manager | 15 days | In Progress |
| 2 | B | Section 17(5) blocked | 1,44,000 | Staff car purchase | Reverse ITC + interest | Tax Team | Immediate | Pending reversal |
| 3 | C | Invoice missed in GSTR-1 | 18,000 | Data entry error | Amend GSTR-1 + pay tax | Compliance Team | 30 days | Planned |
| 4 | D | Revenue timing difference | 25,000 | Ind AS 115 stage of completion | Document only | Auditor | NA | Documented |

## Cross-References

- **/audit:statutory-dues** — GST payment regularity verification feeds into statutory dues aging analysis
- **/audit:tax-computation** — ITC reversals (blocked credits, proportionate reversal) are added back as expenses for tax computation
- **/audit:caro-report** — Supports CARO Clause 3(vii) reporting on GST dues regularity
- **/audit:tax-3cd** — Supports Form 3CD Clause 13 (turnover reconciliation) and Clause 30 (tax provisions)

## Output Format

A comprehensive GST reconciliation workpaper containing:

**Section 1 — GSTR-1 vs. Books Reconciliation**:
- Month-by-month reconciliation table with variance analysis
- Rate-wise breakup reconciliation
- Reconciliation statement with adjustments

**Section 2 — GSTR-2B vs. Books Reconciliation**:
- Month-by-month ITC reconciliation with Section 16(2)(aa) compliance check
- Supplier-wise variance analysis for material suppliers
- ITC eligibility confirmation per GSTR-2B

**Section 3 — ITC Eligibility Verification**:
- Section 16 five-condition checklist for sample invoices
- Verification table with invoice-level compliance status

**Section 4 — Section 17(5) Blocked Credits**:
- Identification table with expense category, amount, reason, reversal required
- Total blocked credits computation

**Section 5 — Rule 42/43 Proportionate Reversal**:
- Quarterly computation table with exempt % and reversal amount
- Capital goods separate computation (if applicable)
- Total annual reversal

**Section 6 — GSTR-9 Annual Return Reconciliation**:
- Table 5 (turnover) reconciliation with audited P&L
- Table 6 (ITC availed) reconciliation with books
- Table 7 (ITC reversed) reconciliation
- Table 9 (tax paid) reconciliation

**Section 7 — Discrepancy Summary and Resolution**:
- Priority matrix (Category A/B/C/D) with all identified variances
- Resolution tracker table with action plan, responsible person, timeline
- Interest computation on tax/ITC defaults

**Section 8 — Conclusion**:
- Opinion on whether GST returns are consistent with books of account
- Assessment of GST compliance (regular, not regular, disputes)
- Recommendations for improvement

---

**Disclaimer:** This tool assists with audit workflow documentation but does not substitute professional audit judgment. All outputs must be reviewed by qualified Chartered Accountants.
