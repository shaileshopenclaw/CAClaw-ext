# CARO 2020 Report Drafting

Draft a complete CARO 2020 (Companies Auditor's Report Order) report covering all 21 main clauses and their sub-clauses with proper favorable, adverse, or not applicable wording for each clause. This command uses a three-template approach for every reportable sub-clause per MCA notification dated 25-Feb-2020.

## Description

This command generates a comprehensive CARO 2020 report as an Annexure to the main audit report. CARO 2020, effective from financial year 2021-22 onwards, requires auditors to report on 21 specific matters organized under clause 3(i) through clause 3(xxi), covering 38 sub-clauses total.

The reporting approach follows a three-template structure for each sub-clause:
- **Template A (Favorable):** Clean affirmative wording confirming compliance
- **Template B (Adverse/Qualified):** Specific non-compliance with amounts, periods, and nature of deviations
- **Template C (Not Applicable):** Clear explanation of why the clause doesn't apply to the entity

This systematic approach ensures no clause is missed and all reporting follows the prescribed MCA format.

## Required Context

Before running this command, ensure:
- All audit procedures are complete and documented in respective working papers
- CARO applicability has been confirmed (see Applicability Assessment section below)
- Entity type and specific exemptions have been verified
- Clause-wise working papers are available using /audit:caro-checklist command
- Complete understanding of CARO 2020 reporting requirements per MCA notification
- Coordination with /audit:statutory-dues for clause 3(vii) support
- Coordination with /audit:going-concern for clause 3(xix) support

**Ask the user:**
- What is the entity type? (Listed/Unlisted/Private/Public/Government company)
- Has CARO applicability been confirmed based on size thresholds?
- Are CARO checklist working papers complete? (Reference: /audit:caro-checklist output)
- Which clauses require adverse or not applicable reporting based on audit findings?

## CARO 2020 Applicability Assessment

Before drafting the report, verify CARO applicability:

### Exempted Entities (CARO NOT applicable):

- Banking companies (as defined in Banking Regulation Act, 1949)
- Insurance companies (as defined in Insurance Act, 1938)
- Section 8 companies (companies with charitable objects)
- One Person Companies (OPCs)
- Small companies as per Section 2(85) (Paid-up capital ≤ Rs. 2 crore AND Turnover ≤ Rs. 20 crore)
- Private companies meeting ALL four thresholds below:
  - Paid-up capital ≤ Rs. 1 crore at year-end
  - Total reserves and surplus ≤ Rs. 1 crore at year-end
  - Total borrowings ≤ Rs. 1 crore at year-end
  - Revenue from operations ≤ Rs. 1 crore during the year

### CARO Applicability Decision:

| Condition | Status | CARO Applicable? |
|-----------|--------|------------------|
| Entity is banking/insurance/Section 8/OPC | Yes | NO - Exempt |
| Entity is small company (capital ≤ Rs. 2 crore AND turnover ≤ Rs. 20 crore) | Yes | NO - Exempt |
| Private company meeting all four thresholds above | Yes | NO - Exempt |
| All other companies (including subsidiaries, holding companies) | Yes | YES - CARO applies |

**Note:** Even if parent company is exempt, subsidiary may be covered. For consolidated reporting, see Clause 3(xxi).

## Workflow

1. **Confirm CARO Applicability** — Use the assessment table above to determine if CARO 2020 applies to the entity.

2. **Review Clause-wise Working Papers** — Obtain completed /audit:caro-checklist output containing:
   - Evidence obtained for each applicable clause
   - Instances of non-compliance identified
   - Quantitative data required for reporting (amounts, percentages, periods)
   - Management representations obtained
   - Completion status and conclusions (Favorable/Adverse/NA)

3. **Determine Reporting Template for Each Clause** — For each of the 21 clauses and 38 sub-clauses:
   - If compliance confirmed and clause applicable → Use Template A (Favorable)
   - If non-compliance identified → Use Template B (Adverse) with specific details
   - If clause doesn't apply to entity → Use Template C (Not Applicable)

4. **Draft Report Using Three-Template Structure** — See detailed clause-by-clause templates in Templates section below.

5. **Cross-Reference Supporting Working Papers** — Ensure each clause references:
   - Specific working paper supporting the conclusion
   - Cross-references to /audit:statutory-dues (for clause 3(vii))
   - Cross-references to /audit:going-concern (for clause 3(xix))
   - Cross-references to /audit:program areas supporting each clause

## Clause-by-Clause Report Templates

### Clause 3(i): Property, Plant and Equipment (PPE) and Intangible Assets

#### Sub-clause (a): Records of PPE and Intangible Assets

**Template A - FAVORABLE:**
"(A)(a) The Company has maintained proper records showing full particulars, including quantitative details and situation, of Property, Plant and Equipment."

"(A)(a) The Company has maintained proper records showing full particulars, including quantitative details and situation, of intangible assets."

**Template B - ADVERSE:**
"(A)(a) The Company has not maintained proper records showing full particulars, including quantitative details and situation, of Property, Plant and Equipment in the following cases: [specify nature - e.g., Office Equipment quantitative details not maintained for items purchased before FY 20XX-XX amounting to Rs. [X] lakhs; Computers location details not updated for [Y] items costing Rs. [Z] lakhs]."

**Template C - NOT APPLICABLE:**
"(A)(a) The Company has not acquired any Property, Plant and Equipment during the year and does not hold any Property, Plant and Equipment as at the year-end. Accordingly, reporting under clause 3(i)(a) of the Order is not applicable."

#### Sub-clause (b): Physical Verification of PPE

**Template A - FAVORABLE:**
"(A)(b) According to the information and explanations given to us and on the basis of our examination of the records of the Company, the Property, Plant and Equipment have been physically verified by the management at reasonable intervals. No material discrepancies were noticed on such verification."

**Template B - ADVERSE:**
"(A)(b) According to the information and explanations given to us and on the basis of our examination of the records of the Company, the Property, Plant and Equipment have been physically verified by the management during the year. Material discrepancies aggregating to Rs. [X] lakhs ([Y]% of gross block) were noticed on such verification and have not been properly dealt with in the books of account. [Specify nature: e.g., shortage of [item type] at [location], items physically present but not recorded, etc.]."

**Template C - NOT APPLICABLE:**
"(A)(b) The Company has not acquired any Property, Plant and Equipment during the year and does not hold any Property, Plant and Equipment as at the year-end. Accordingly, reporting under clause 3(i)(b) of the Order is not applicable."

#### Sub-clause (c): Title Deeds of Immovable Properties

**Template A - FAVORABLE:**
"(A)(c) According to the information and explanations given to us and on the basis of our examination of the records of the Company, the title deeds of all the immovable properties (other than immovable properties where the Company is the lessee and the lease agreements are duly executed in favour of the lessee) disclosed in the financial statements are held in the name of the Company."

**Template B - ADVERSE:**
"(A)(c) According to the information and explanations given to us and on the basis of our examination of the records of the Company, the title deeds of the following immovable properties are not held in the name of the Company:

| Description of Property | Gross Carrying Value (Rs.) | Held in Name of | Whether promoter/director/their relative/employee | Property held since which date | Reason for not being held in name of Company |
|------------------------|---------------------------|----------------|------------------------------------------------|-------------------------------|---------------------------------------------|
| [Property 1 - e.g., Office Building, Plot No. X] | [Amount] | [Name] | [Yes/No] | [Date] | [Reason - e.g., Registration pending, transferred but title deed not received] |"

**Template C - NOT APPLICABLE:**
"(A)(c) The Company does not hold any immovable properties. Accordingly, reporting under clause 3(i)(c) of the Order is not applicable."

#### Sub-clause (d): Revaluation of PPE or Intangible Assets

**Template A - FAVORABLE:**
"(A)(d) The Company has not revalued its Property, Plant and Equipment (including Right of Use assets) or intangible assets during the year. Accordingly, reporting under clause 3(i)(d) of the Order is not applicable."

**Template B - ADVERSE:**
"(A)(d) The Company has revalued its Property, Plant and Equipment during the year. The revaluation was not based on the valuation by a Registered Valuer as defined under rule 2 of the Companies (Registered Valuers and Valuation) Rules, 2017. [OR: The revaluation increase of Rs. [X] lakhs has not been properly dealt with in the books of account.]"

**Template C - NOT APPLICABLE:**
(Same as Template A - typically favorable means not applicable)

#### Sub-clause (e): Benami Property Proceedings

**Template A - FAVORABLE:**
"(A)(e) According to the information and explanations given to us and on the basis of our examination of the records of the Company, no proceedings have been initiated or are pending against the Company for holding any benami property under the Benami Transactions (Prohibition) Act, 1988 and rules made thereunder. Accordingly, reporting under clause 3(i)(e) of the Order is not applicable."

**Template B - ADVERSE:**
"(A)(e) According to the information and explanations given to us and on the basis of our examination of the records of the Company, proceedings have been initiated/are pending against the Company for holding benami property under the Benami Transactions (Prohibition) Act, 1988. [Provide details: Property description, value, status of proceedings, authority before which pending]."

**Template C - NOT APPLICABLE:**
(Same as Template A)

### Clause 3(ii): Inventory

#### Sub-clause (a): Physical Verification of Inventory

**Template A - FAVORABLE:**
"(A)(a) The inventories have been physically verified by the management at reasonable intervals during the year. In our opinion, the frequency of such verification is reasonable. No material discrepancies were noticed on physical verification of inventories as compared to the book records."

**Template B - ADVERSE:**
"(A)(a) The inventories have been physically verified by the management during the year. However, in our opinion, the frequency of such verification is not reasonable. [OR: Material discrepancies aggregating to Rs. [X] lakhs ([Y]% of inventory value) were noticed on physical verification as compared to the book records, and the same have not been properly dealt with in the books of account. Details: [specify nature of discrepancies - shortage/excess/damaged/obsolete items].]"

**Template C - NOT APPLICABLE:**
"(A)(a) The Company does not hold any inventories during the year. Accordingly, reporting under clause 3(ii)(a) of the Order is not applicable."

#### Sub-clause (b): Working Capital Facilities from Banks/Financial Institutions

**Template A - FAVORABLE:**
"(A)(b) According to the information and explanations given to us and on the basis of our examination of the records of the Company, the Company has been sanctioned working capital limits in excess of five crore rupees, in aggregate, from banks or financial institutions on the basis of security of current assets. In our opinion, the quarterly returns or statements filed by the Company with such banks or financial institutions are in agreement with the books of account of the Company."

**Template B - ADVERSE:**
"(A)(b) According to the information and explanations given to us and on the basis of our examination of the records of the Company, the Company has been sanctioned working capital limits in excess of five crore rupees, in aggregate, from banks or financial institutions on the basis of security of current assets. The quarterly returns or statements filed by the Company with such banks or financial institutions are not in agreement with the books of account of the Company. The discrepancies are:

| Particulars | As per Books (Rs. lakhs) | As per Quarterly Return (Rs. lakhs) | Variance (Rs. lakhs) | Quarter |
|-------------|--------------------------|-------------------------------------|---------------------|---------|
| [e.g., Trade Receivables] | [Amount] | [Amount] | [Variance] | [Q1/Q2/Q3/Q4] |
| [e.g., Inventory] | [Amount] | [Amount] | [Variance] | [Q1/Q2/Q3/Q4] |"

**Template C - NOT APPLICABLE:**
"(A)(b) The Company has not been sanctioned any working capital limits in excess of five crore rupees, in aggregate, from banks or financial institutions on the basis of security of current assets during the year. Accordingly, reporting under clause 3(ii)(b) of the Order is not applicable."

### Clause 3(iii): Investments, Guarantees, Loans and Security to Specified Parties

#### Sub-clause (a): Investments, Loans, Guarantees, and Security - Register under Section 189

**Template A - FAVORABLE:**
"(A)(a) The Company has provided loans/advances in the nature of loans/stood guarantee/provided security to companies/firms/Limited Liability Partnerships or any other parties. In respect of the aforesaid, according to information and explanation given to us:

(i) The Company has provided loans/advances in the nature of loans/stood guarantee/provided security to [number] parties during the year. The aggregate amount during the year and the outstanding balance at the balance sheet date is Rs. [X] lakhs. The Company has maintained proper records showing full particulars including quantitative details and situation of the investments."

**Template B - ADVERSE:**
"(A)(a) The Company has provided loans/advances in the nature of loans to parties covered under section 189 of the Companies Act, 2013. However, the Company has not maintained proper records showing full particulars including quantitative details as required under section 189."

**Template C - NOT APPLICABLE:**
"(A)(a) In our opinion and according to the information and explanations given to us, the Company has not provided any loans or advances in the nature of loans, or stood guarantee, or provided security to companies, firms, Limited Liability Partnerships or any other parties. Accordingly, reporting under clause 3(iii)(a) of the Order is not applicable."

#### Sub-clause (b)-(f): Terms, Repayment, Overdue Amounts, Prejudicial Loans

**Template A - FAVORABLE (for applicable clauses):**
"(A)(b) The investments made and the terms and conditions of the grant of loans/advances in the nature of loans/guarantees/security provided are not prejudicial to the Company's interest.

(A)(c) In respect of loans and advances in the nature of loans, the schedule of repayment of principal and payment of interest has been stipulated and the repayments/receipts are regular.

(A)(d) In respect of loans and advances in the nature of loans, there is no overdue amount for more than ninety days.

(A)(e) No loan or advance in the nature of loan granted which has fallen due during the year has been renewed or extended or fresh loans granted to settle the overdue of existing loans given to the same parties. [OR: Loans aggregating to Rs. [X] lakhs were renewed/extended, and the same is not prejudicial to the interest of the Company.]

(A)(f) The Company has not granted any loans or advances in the nature of loans either repayable on demand or without specifying any terms or period of repayment."

**Template B - ADVERSE (examples):**
"(A)(b) The investments made and the terms and conditions of the grant of loans are prejudicial to the Company's interest. [Specify: e.g., Loans granted to related parties at interest rate of [X]% which is lower than the Company's cost of funds of [Y]%; loans granted without adequate security.]

(A)(c) In respect of loans and advances in the nature of loans, the schedule of repayment of principal and payment of interest has been stipulated. However, repayments/receipts are not regular. [Specify: Principal repayment overdue by [X] months aggregating Rs. [Y] lakhs; Interest overdue aggregating Rs. [Z] lakhs.]

(A)(d) In respect of loans and advances in the nature of loans, there is overdue amount of Rs. [X] lakhs which has been outstanding for more than ninety days as on balance sheet date. [Provide aging: 91-180 days: Rs. [Y] lakhs; > 180 days: Rs. [Z] lakhs.]"

### Clause 3(iv): Compliance with Sections 185 and 186

**Template A - FAVORABLE:**
"(A) In our opinion and according to the information and explanations given to us, the Company has complied with the provisions of sections 185 and 186 of the Companies Act, 2013 in respect of loans granted, investments made and guarantees and securities provided."

**Template B - ADVERSE:**
"(A) In our opinion and according to the information and explanations given to us, the Company has not complied with the provisions of sections 185 and/or 186 of the Companies Act, 2013 in respect of loans granted, investments made and guarantees and securities provided. The details of non-compliance are as follows: [Specify: e.g., Loans to directors/related parties under Section 185 without shareholder approval aggregating Rs. [X] lakhs; Investments exceeding prescribed limits under Section 186 by Rs. [Y] lakhs without special resolution.]"

**Template C - NOT APPLICABLE:**
"(A) In our opinion and according to the information and explanations given to us, the Company has not granted any loans, made any investments, or provided any guarantees or security to the parties covered under sections 185 and 186 of the Companies Act, 2013. Accordingly, reporting under clause 3(iv) of the Order is not applicable."

### Clause 3(v): Public Deposits under Sections 73 to 76

**Template A - FAVORABLE:**
"(A) The Company has accepted deposits from the public and has complied with the provisions of sections 73 to 76 of the Companies Act, 2013 and the rules framed thereunder."

**Template B - ADVERSE:**
"(A) The Company has accepted deposits from the public aggregating Rs. [X] lakhs during the year. The Company has not complied with the provisions of sections 73 to 76 of the Companies Act, 2013. [Specify non-compliance: e.g., Deposits accepted without filing Form DPT-3 with ROC; Deposit repayment defaults aggregating Rs. [Y] lakhs; Interest payment delays exceeding [Z] days.]"

**Template C - NOT APPLICABLE:**
"(A) In our opinion and according to the information and explanations given to us, the Company has not accepted any deposits from the public or amounts which are deemed to be deposits within the meaning of sections 73 to 76 of the Companies Act, 2013 and the rules framed thereunder. Accordingly, reporting under clause 3(v) of the Order is not applicable."

### Clause 3(vi): Cost Records under Section 148(1)

**Template A - FAVORABLE:**
"(A) The Central Government has prescribed the maintenance of cost records under sub-section (1) of section 148 of the Companies Act, 2013 for [specify product/activity]. The Company has maintained such cost records."

**Template B - ADVERSE:**
"(A) The Central Government has prescribed the maintenance of cost records under sub-section (1) of section 148 of the Companies Act, 2013 for [specify product/activity]. The Company has not maintained proper cost records as prescribed."

**Template C - NOT APPLICABLE:**
"(A) The maintenance of cost records has not been prescribed by the Central Government under sub-section (1) of section 148 of the Companies Act, 2013 for any of the products/services of the Company. Accordingly, reporting under clause 3(vi) of the Order is not applicable."

### Clause 3(vii): Statutory Dues

**Cross-reference:** This clause should be supported by detailed working paper from /audit:statutory-dues command.

#### Sub-clause (a): Regularity in Depositing Statutory Dues

**Template A - FAVORABLE:**
"(A)(a) According to the records of the Company examined by us and the information and explanation given to us, the Company is generally regular in depositing undisputed statutory dues including Goods and Services Tax, Provident Fund, Employees State Insurance, Income-tax, Sales-tax, Service Tax, duty of Customs, duty of Excise, Value Added Tax, Cess and any other material statutory dues, as applicable, with the appropriate authorities.

According to the information and explanations given to us, no undisputed amounts payable in respect of the aforesaid dues were outstanding as at 31st March [year] for a period of more than six months from the date they became payable."

**Template B - ADVERSE:**
"(A)(a) According to the records of the Company examined by us and the information and explanation given to us, the Company has not been regular in depositing undisputed statutory dues including [specify dues - e.g., Provident Fund, Employees State Insurance, Income-tax, Goods and Services Tax] with the appropriate authorities.

According to the information and explanations given to us, the following undisputed statutory dues were outstanding as at 31st March [year] for a period of more than six months from the date they became payable:

| Name of Statute | Nature of Dues | Amount (Rs. lakhs) | Period to which amount relates | Due Date | Period Outstanding (months) |
|-----------------|----------------|-------------------|-------------------------------|----------|----------------------------|
| [e.g., EPF Act] | Provident Fund | [Amount] | [Month/Year] | [Date] | [Months] |
| [e.g., ESI Act] | ESI Contribution | [Amount] | [Month/Year] | [Date] | [Months] |
| [e.g., Income Tax Act] | TDS | [Amount] | [Quarter/Year] | [Date] | [Months] |"

#### Sub-clause (b): Disputed Statutory Dues Not Deposited

**Template A - FAVORABLE:**
"(A)(b) According to the information and explanations given to us, there are no dues of Goods and Services Tax, Provident Fund, Employees State Insurance, Income-tax, Sales-tax, Service Tax, duty of Customs, duty of Excise, Value Added Tax, Cess and any other statutory dues which have not been deposited on account of disputes."

**Template B - ADVERSE:**
"(A)(b) According to the information and explanations given to us, the following statutory dues have not been deposited by the Company on account of disputes:

| Name of Statute | Nature of Dues | Amount (Rs. lakhs) | Period to which amount relates | Forum where dispute is pending |
|-----------------|----------------|-------------------|-------------------------------|------------------------------|
| [e.g., Income Tax Act, 1961] | Income Tax | [Amount] | AY [Year] | [CIT(A)/ITAT/High Court/Supreme Court] |
| [e.g., CGST Act, 2017] | GST | [Amount] | FY [Year] | [Appellate Authority/Tribunal] |
| [e.g., Central Excise Act] | Excise Duty | [Amount] | [Period] | [CESTAT/Commissioner Appeals] |"

### Clause 3(viii): Unrecorded Income Surrendered or Disclosed

**Template A - FAVORABLE:**
"(A) According to the information and explanations given to us, no transactions were surrendered or disclosed as income during the year in the tax assessments under the Income Tax Act, 1961, which have not been recorded in the books of account."

**Template B - ADVERSE:**
"(A) According to the information and explanations given to us, the Company has surrendered/disclosed income of Rs. [X] lakhs during the year in tax assessment under the Income Tax Act, 1961, which was not recorded in the books of account. [Specify: Nature of income - e.g., unexplained cash credits, unrecorded sales, etc.; Assessment Year; Whether subsequently recorded in books.]"

**Template C - NOT APPLICABLE:**
(Typically favorable - no surrender means favorable reporting)

### Clause 3(ix): Default in Repayment of Loans and Borrowings

#### Sub-clause (a): Default to Banks/FIs/Government

**Template A - FAVORABLE:**
"(A)(a) In our opinion and according to the information and explanations given to us, the Company has not defaulted in repayment of loans or other borrowings or in the payment of interest thereon to any lender."

**Template B - ADVERSE:**
"(A)(a) In our opinion and according to the information and explanations given to us, the Company has defaulted in repayment of loans or other borrowings or in the payment of interest thereon to banks/financial institutions/government. The details are:

| Lender | Amount in Default (Rs. lakhs) | Principal/Interest | Period of Default (months) | Remarks |
|--------|------------------------------|-------------------|---------------------------|---------|
| [Bank name] | [Amount] | [Principal/Interest/Both] | [Months] | [Any other relevant info] |"

#### Sub-clause (b): Willful Defaulter

**Template A - FAVORABLE:**
"(A)(b) In our opinion and according to the information and explanations given to us, the Company has not been declared a willful defaulter by any bank or financial institution or government or any government authority."

**Template B - ADVERSE:**
"(A)(b) In our opinion and according to the information and explanations given to us, the Company has been declared a willful defaulter by [specify: Bank/FI/RBI/Government authority] vide [order reference] dated [date]."

#### Sub-clause (c): Term Loan Utilization

**Template A - FAVORABLE:**
"(A)(c) In our opinion and according to the information and explanations given to us, the term loans were applied by the Company during the year for the purposes for which they were obtained."

**Template B - ADVERSE:**
"(A)(c) In our opinion and according to the information and explanations given to us, the Company has utilized term loans aggregating Rs. [X] lakhs for purposes other than those for which they were obtained. [Specify: Loan purpose as per sanction letter vs. actual utilization.]"

**Template C - NOT APPLICABLE:**
"(A)(c) The Company has not taken any term loans during the year and no term loans were outstanding as at the balance sheet date. Accordingly, reporting under clause 3(ix)(c) of the Order is not applicable."

#### Sub-clause (d): Short-term Funds for Long-term Purposes

**Template A - FAVORABLE:**
"(A)(d) In our opinion and according to the information and explanations given to us, the funds raised on short-term basis have not been utilized for long-term purposes by the Company."

**Template B - ADVERSE:**
"(A)(d) In our opinion and according to the information and explanations given to us, the Company has utilized short-term funds aggregating Rs. [X] lakhs for long-term purposes. [Specify: Nature of short-term funds - e.g., working capital facilities, short-term borrowings; Long-term purpose - e.g., capital expenditure, long-term investments.]"

#### Sub-clause (e): Funds Raised from Entities/Persons for Discharge of Liabilities

**Template A - FAVORABLE:**
"(A)(e) In our opinion and according to the information and explanations given to us, the Company has not taken any funds from any entity or person on account of or to meet the obligations of its subsidiaries, associates or joint ventures."

**Template B - ADVERSE:**
"(A)(e) In our opinion and according to the information and explanations given to us, the Company has taken funds from entities/persons aggregating Rs. [X] lakhs on account of or to meet the obligations of its subsidiaries/associates/joint ventures. [Specify: Entity name, relationship, purpose, repayment terms.]"

**Template C - NOT APPLICABLE:**
"(A)(e) The Company does not have any subsidiaries, associates or joint ventures. Accordingly, reporting under clause 3(ix)(e) of the Order is not applicable."

#### Sub-clause (f): Negative Pledge

**Template A - FAVORABLE:**
"(A)(f) In our opinion and according to the information and explanations given to us, the Company has not raised any loans during the year on the pledge of securities held in its subsidiaries, joint ventures or associate companies."

**Template B - ADVERSE:**
"(A)(f) In our opinion and according to the information and explanations given to us, the Company has raised loans during the year aggregating Rs. [X] lakhs on the pledge of securities held in its subsidiaries/joint ventures/associate companies. [Specify: Details of pledged securities, lender, loan amount, terms.]"

**Template C - NOT APPLICABLE:**
"(A)(f) The Company does not have any subsidiaries, associates or joint ventures. Accordingly, reporting under clause 3(ix)(f) of the Order is not applicable."

### Clause 3(x): Fraud Reported by or on the Company

**Template A - FAVORABLE:**
"(A) No fraud by the Company or no material fraud on the Company has been noticed or reported during the year."

**Template B - ADVERSE:**
"(A) During the year, the following frauds by the Company or on the Company have been noticed/reported:

| Nature of Fraud | Amount Involved (Rs. lakhs) | Parties Involved | Whether reported under Section 143(12) | Remarks |
|-----------------|----------------------------|------------------|---------------------------------------|---------|
| [Specify fraud type - e.g., misappropriation, financial statement fraud, asset misappropriation] | [Amount] | [Party names/positions] | [Yes/No, Date of reporting to MCA] | [Status of investigation, recovery] |"

### Clause 3(xi): Managerial Remuneration under Section 197

**Template A - FAVORABLE:**
"(A) The managerial remuneration has been paid or provided by the Company to its directors in accordance with the requisite approvals mandated by the provisions of section 197 read with Schedule V to the Companies Act, 2013."

**Template B - ADVERSE:**
"(A) The managerial remuneration paid/provided by the Company to its directors during the year is in excess of the limits prescribed under section 197 read with Schedule V to the Companies Act, 2013. [Specify: Director name, designation, remuneration paid Rs. [X] lakhs, permissible limit Rs. [Y] lakhs, excess Rs. [Z] lakhs; Whether shareholder approval obtained.]"

**Template C - NOT APPLICABLE:**
"(A) The Company has not paid or provided any managerial remuneration to its directors during the year. Accordingly, reporting under clause 3(xi) of the Order is not applicable."

### Clause 3(xii): Nidhi Company Compliance

**Template A - FAVORABLE:**
"(A) In our opinion and according to the information and explanations given to us, the Company is a Nidhi Company registered under section 406 of the Companies Act, 2013. The Company has complied with the Net Owned Funds to Deposits in the ratio of 1:20 to meet out the liability and is maintaining ten percent unencumbered term deposits as specified in the Nidhi Rules, 2014."

**Template B - ADVERSE:**
"(A) In our opinion and according to the information and explanations given to us, the Company is a Nidhi Company registered under section 406 of the Companies Act, 2013. The Company has not complied with the following Nidhi Rules, 2014: [Specify: Net Owned Funds to Deposits ratio non-compliance, unencumbered term deposits not maintained, other violations.]"

**Template C - NOT APPLICABLE:**
"(A) In our opinion and according to the information and explanations given to us, the Company is not a Nidhi Company. Accordingly, reporting under clause 3(xii) of the Order is not applicable."

### Clause 3(xiii): Related Party Transactions under Sections 177 and 188

**Template A - FAVORABLE:**
"(A) In our opinion and according to the information and explanations given to us, all transactions with related parties are in compliance with sections 177 and 188 of the Companies Act, 2013, where applicable. The details of such related party transactions have been disclosed in the financial statements as required under Indian Accounting Standard (Ind AS) 24, Related Party Disclosures specified under Section 133 of the Act."

**Template B - ADVERSE:**
"(A) In our opinion and according to the information and explanations given to us, the Company has entered into transactions with related parties which are not in compliance with sections 177 and/or 188 of the Companies Act, 2013. [Specify: Nature of transaction, party name, amount Rs. [X] lakhs, non-compliance - e.g., Board/Audit Committee approval not obtained, special resolution not passed where required, not at arm's length.]"

**Template C - NOT APPLICABLE:**
"(A) The Company has not entered into any transactions with related parties during the year. Accordingly, reporting under clause 3(xiii) of the Order is not applicable."

### Clause 3(xiv): Preferential Allotment or Private Placement

**Template A - FAVORABLE:**
"(A) In our opinion and according to the information and explanations given to us:
(i) The Company has made preferential allotment or private placement of shares/convertible debentures during the year under review and the requirements of section 42 of the Companies Act, 2013 have been complied with.
(ii) The amounts raised through such allotment have been applied by the Company during the year for the purposes for which the funds were raised."

**Template B - ADVERSE:**
"(A) In our opinion and according to the information and explanations given to us:
(i) The Company has made preferential allotment or private placement of shares/convertible debentures during the year. However, the requirements of section 42 of the Companies Act, 2013 have not been complied with. [Specify non-compliance: e.g., Private placement offer letter not issued, special resolution not passed, proceeds not utilized within prescribed time.]
(ii) The amounts raised of Rs. [X] lakhs have not been fully applied during the year. Unutilized funds aggregating Rs. [Y] lakhs are lying in [specify: bank account/temporary investments]. [OR: Funds were utilized for purposes other than those for which they were raised.]"

**Template C - NOT APPLICABLE:**
"(A) The Company has not made any preferential allotment or private placement of shares or convertible debentures (fully, partially or optionally convertible) during the year under review. Accordingly, reporting under clause 3(xiv) of the Order is not applicable."

### Clause 3(xv): Non-cash Transactions under Section 192

**Template A - FAVORABLE:**
"(A) In our opinion and according to the information and explanations given to us, the Company has not entered into any non-cash transactions with its directors or persons connected with its directors and hence, provisions of section 192 of the Companies Act, 2013 are not applicable to the Company."

**Template B - ADVERSE:**
"(A) In our opinion and according to the information and explanations given to us, the Company has entered into non-cash transactions with directors or persons connected with directors aggregating Rs. [X] lakhs. [Specify: Nature of transaction - e.g., issue of shares for consideration other than cash, purchase/sale of assets; Party name and relationship with director; Whether section 192 requirements complied with - Board approval, disclosure in Board's report.]"

**Template C - NOT APPLICABLE:**
(Same as Template A - favorable means not applicable)

### Clause 3(xvi): Registration under Section 45-IA of RBI Act (NBFC)

**Template A - FAVORABLE:**
"(A) In our opinion and according to the information and explanations given to us, the Company is required to be registered under section 45-IA of the Reserve Bank of India Act, 1934 and the Company has obtained the registration. [Certificate No. [X] dated [date]]"

**Template B - ADVERSE:**
"(A) In our opinion and according to the information and explanations given to us, the Company is required to be registered under section 45-IA of the Reserve Bank of India Act, 1934. However, the Company has not obtained such registration. [Specify: Whether application filed, current status.]"

**Template C - NOT APPLICABLE:**
"(A) In our opinion and according to the information and explanations given to us, the Company is not required to be registered under section 45-IA of the Reserve Bank of India Act, 1934. Accordingly, reporting under clause 3(xvi) of the Order is not applicable."

### Clause 3(xvii): Cash Losses

#### Sub-clause (a): Current Year Cash Loss

**Template A - FAVORABLE:**
"(A)(a) The Company has not incurred any cash loss in the financial year under audit."

**Template B - ADVERSE:**
"(A)(a) The Company has incurred cash loss of Rs. [X] lakhs during the financial year under audit. [Cash loss = Loss before tax + Non-cash charges (depreciation, provisions, etc.) - Non-cash income]"

#### Sub-clause (b): Preceding Year Cash Loss

**Template A - FAVORABLE:**
"(A)(b) The Company has not incurred any cash loss in the immediately preceding financial year."

**Template B - ADVERSE:**
"(A)(b) The Company had incurred cash loss of Rs. [X] lakhs in the immediately preceding financial year."

### Clause 3(xviii): Auditor Resignation

**Template A - FAVORABLE:**
"(A) There has been no resignation of the statutory auditors during the year. Accordingly, reporting under clause 3(xviii) of the Order is not applicable."

**Template B - ADVERSE:**
"(A) The statutory auditors [Auditor firm name] resigned during the year on [date]. The following are the issues, objections or concerns raised by the outgoing auditors: [Specify issues from resignation letter - e.g., management integrity concerns, disagreement on accounting treatment, limitation of scope, fraud suspicion, etc.]"

**Template C - NOT APPLICABLE:**
(Same as Template A)

### Clause 3(xix): Going Concern Assessment

**Cross-reference:** This clause should be supported by detailed working paper from /audit:going-concern command.

**Template A - FAVORABLE:**
"(A) On the basis of the financial ratios, ageing and expected dates of realisation of financial assets and payment of financial liabilities, other information accompanying the financial statements, our knowledge of the Board of Directors and management plans and based on our examination of the evidence supporting the assumptions, nothing has come to our attention which causes us to believe that any material uncertainty exists as on the date of the audit report that the Company is not capable of meeting its liabilities existing at the date of balance sheet as and when they fall due within a period of one year from the balance sheet date."

**Template B - ADVERSE:**
"(A) On the basis of the financial ratios, ageing and expected dates of realisation of financial assets and payment of financial liabilities, other information accompanying the financial statements, our knowledge of the Board of Directors and management plans and based on our examination of the evidence supporting the assumptions, the following material uncertainties exist as on the date of the audit report indicating that the Company may not be capable of meeting its liabilities existing at the date of balance sheet as and when they fall due within a period of one year from the balance sheet date:

[Specify indicators:
- Negative working capital: Rs. [X] lakhs (Current assets Rs. [Y] lakhs vs. Current liabilities Rs. [Z] lakhs)
- Current ratio: [ratio] (threshold: < 1.0)
- Operating cash flow negative for [X] consecutive years
- Default in loan repayments (see Clause 3(ix))
- Net worth erosion: Net worth is [X]% of paid-up share capital
- Recurring losses: Loss for current year Rs. [Y] lakhs; cumulative losses Rs. [Z] lakhs
- Other indicators: [specify]]

These conditions indicate the existence of a material uncertainty that may cast significant doubt about the Company's ability to continue as a going concern. [Reference to disclosure in financial statements under Ind AS 1/Note to accounts]"

### Clause 3(xx): Corporate Social Responsibility (CSR) under Section 135

#### Sub-clause (a): Unspent CSR Amount

**Template A - FAVORABLE:**
"(A)(a) The Company has spent Rs. [X] lakhs towards Corporate Social Responsibility (CSR) as required under section 135 of the Companies Act, 2013. There is no unspent CSR amount for the year requiring a transfer to a Fund specified in Schedule VII to the Companies Act or special account in compliance with the provisions of sub-section (6) of section 135."

**Template B - ADVERSE:**
"(A)(a) The Company was required to spend Rs. [X] lakhs (being 2% of average net profit of preceding 3 financial years) towards Corporate Social Responsibility (CSR) under section 135 of the Companies Act, 2013. The Company has spent only Rs. [Y] lakhs during the year. The unspent amount of Rs. [Z] lakhs has not been transferred to a Fund specified in Schedule VII to the Companies Act within a period of six months of the expiry of the financial year in compliance with second proviso to sub-section (5) of section 135. [OR: The unspent amount has been transferred to [specify Fund] on [date], which is beyond the prescribed six-month period.]"

**Template C - NOT APPLICABLE:**
"(A)(a) The provisions of section 135 of the Companies Act, 2013 are not applicable to the Company. Accordingly, reporting under clause 3(xx)(a) of the Order is not applicable."

#### Sub-clause (b): Ongoing Project Transfer to Unspent CSR Account

**Template A - FAVORABLE:**
"(A)(b) The Company has ongoing CSR projects. The amount required to be transferred to the Unspent CSR Account under sub-section (6) of section 135 has been so transferred within a period of thirty days from the end of the financial year."

**Template B - ADVERSE:**
"(A)(b) The Company has ongoing CSR projects. However, the amount of Rs. [X] lakhs required to be transferred to the Unspent CSR Account under sub-section (6) of section 135 has not been transferred within a period of thirty days from the end of the financial year. [Specify: Transfer date if delayed, or not transferred.]"

**Template C - NOT APPLICABLE:**
"(A)(b) The Company does not have any ongoing CSR projects. Accordingly, reporting under clause 3(xx)(b) of the Order is not applicable."

### Clause 3(xxi): Consolidated Financial Statements (Holding/Subsidiary)

**Template A - FAVORABLE:**
"(A) The Company is not a holding company or a subsidiary company. Accordingly, reporting under clause 3(xxi) of the Order is not applicable."

**Template B - ADVERSE (for qualifications in subsidiary/JV audits):**
"(A) Based on our examination and according to the information and explanations given to us, the following qualifications or adverse remarks by the respective auditors in the CARO reports of the companies included in the consolidated financial statements are reproduced below:

| Name of Entity | Relationship | CARO Clause | Qualification/Adverse Remark | Impact on Consolidated FS |
|----------------|--------------|-------------|----------------------------|---------------------------|
| [Subsidiary name] | Wholly-owned Subsidiary | 3(vii) | Statutory dues outstanding > 6 months: Rs. [X] lakhs | [Specify consolidated impact] |
| [JV name] | Joint Venture | 3(xix) | Material uncertainty regarding going concern | [Specify consolidated impact] |"

**Template C - NOT APPLICABLE:**
(Same as Template A)

## Report Structure Template

### Introductory Paragraph:

"ANNEXURE TO THE INDEPENDENT AUDITOR'S REPORT

(Referred to in paragraph [X] under 'Report on Other Legal and Regulatory Requirements' section of our report of even date)

In terms of the information and explanations sought by us and given by the Company and the books of account and records examined by us in the normal course of audit and to the best of our knowledge and belief, we state that:"

### Body: All 21 Clauses in Sequence

[Insert all applicable clause reporting using the templates above]

### Conclusion Paragraph:

"For [Auditor Firm Name]
Chartered Accountants
Firm Registration Number: [FRN]

[Signature]
[Partner Name]
Partner
Membership Number: [M.No.]
UDIN: [UDIN]

Place: [City]
Date: [Date]"

## Cross-References

This command integrates with the following related commands:

- **/audit:caro-checklist** — Use this command to prepare clause-by-clause working papers with evidence requirements before drafting CARO report. The checklist output provides the factual foundation for selecting appropriate templates (Favorable/Adverse/NA).

- **/audit:statutory-dues** — For Clause 3(vii) (Statutory Dues), obtain detailed regularity table and disputed dues table from this command. Cross-reference working paper reference in CARO report.

- **/audit:going-concern** — For Clause 3(xix) (Going Concern), obtain comprehensive going concern assessment including financial ratio analysis, indicator checklist, and management plan evaluation from this command.

- **/audit:program** — Multiple CARO clauses map to specific audit program areas:
  - Clause 3(i) → PPE audit program (area: fixed-assets)
  - Clause 3(ii) → Inventory audit program (area: inventory)
  - Clause 3(iii), 3(iv) → Investments and loans programs (area: investments, loans-advances)
  - Clause 3(ix) → Borrowings audit program (area: borrowings)
  - Clause 3(xiii) → Related party transactions (area: related-parties)
  - Clause 3(xx) → CSR compliance (area: other-areas)

## Anti-Patterns to Avoid

- **Do NOT use vague language:** CARO requires precise statements. Avoid phrases like "generally maintained records" or "substantially complied." Use either clean favorable language or specific adverse details.

- **Do NOT skip sub-clauses:** Every reportable sub-clause (38 total across 21 main clauses) must be addressed. Omitting even one sub-clause leads to incomplete CARO reporting.

- **Do NOT omit placeholder brackets in adverse templates:** When drafting adverse findings, include specific amounts, periods, and nature of non-compliance. Templates show [brackets] to indicate where specifics must be filled in.

- **Do NOT mix templates:** Each sub-clause should use ONE of the three templates (Favorable/Adverse/NA), not a hybrid. If both favorable and adverse findings exist for the same sub-clause, use Template B (Adverse) and specify the extent of non-compliance.

- **Do NOT assume exemption without verification:** Always verify CARO applicability using the assessment table. Private companies can cross thresholds mid-year; OPCs can convert to private companies; small company status can change.

## Output Format

A complete CARO 2020 report structured as an Annexure to the main audit report, containing:

1. **Introductory paragraph** identifying the Order (CARO 2020) and the financial statements audited
2. **All 21 main clauses** (3(i) through 3(xxi)) addressed in prescribed MCA sequence
3. **Each applicable sub-clause** clearly numbered and responded to using appropriate template (Favorable/Adverse/NA)
4. **Specific details** in adverse reporting: amounts in Rs. lakhs, time periods in months/years, nature of non-compliance, affected parties
5. **Tables** for detailed adverse reporting (title deeds, statutory dues, disputed dues, fraud instances, subsidiary qualifications)
6. **Cross-references** to supporting working papers
7. **Conclusion paragraph** with auditor signature block (firm name, FRN, partner name, membership number, UDIN, place, date)
8. **Professional formatting** suitable for inclusion as Annexure to audit report per Companies Act 2013 requirements

---

**Disclaimer:** This tool assists with audit workflow documentation but does not substitute professional audit judgment. All outputs must be reviewed by qualified Chartered Accountants. CARO 2020 reporting requires deep understanding of MCA requirements, company-specific facts, and audit evidence. The templates provided are guidance only; actual reporting must reflect specific audit findings and comply with applicable auditing standards.
