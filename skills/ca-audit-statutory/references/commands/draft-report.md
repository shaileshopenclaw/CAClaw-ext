# Audit Report Drafting

Draft a complete independent auditor's report per SA 700 (Revised), SA 705 (Revised), and SA 706 (Revised) (all effective from April 2018) with appropriate opinion type (unmodified, qualified, adverse, or disclaimer), basis paragraphs, and all required sections under the Companies Act 2013.

This command implements the revised audit report structure where the Opinion paragraph appears FIRST (not at the end as per pre-2018 format). Note: "subject to" opinions are NO LONGER permissible under SA 705.

## Required Context

Before running this command, ensure:
- All audit procedures are complete and documented
- Misstatement schedule has been finalized (see /audit:misstatement-schedule)
- Going concern assessment is complete (see /audit:going-concern)
- CARO 2020 report is drafted (see /audit:caro-report)
- Key Audit Matters are drafted if applicable (see /audit:kam-draft for listed companies)
- Management representation letter is obtained (see /audit:representation-letter)
- Communication with Those Charged With Governance is complete
- For listed entities, EQCR has been completed before report dating (see /audit:quality-review)

The auditor will be asked to provide the following information interactively:

1. **Entity type:** Listed/Unlisted/Public Company/Private Company/Government Company
2. **Financial year and reporting framework:** Year ended [date], Ind AS or Indian GAAP (Accounting Standards)
3. **Financial statement type:** Standalone or Consolidated
4. **Misstatement status:** Whether any material misstatements remain uncorrected
5. **Scope limitations:** Whether any scope limitations were encountered during the audit
6. **Going concern matters:** Whether any material uncertainty related to going concern exists
7. **Other matters requiring emphasis:** Any matters requiring Emphasis of Matter or Other Matter paragraphs

## Opinion Type Decision Tree

Follow this structured decision tree per SA 705 to determine the appropriate opinion type:

### Decision Point 1: Are there material misstatements in the financial statements?

**Question:** Based on the finalized misstatement schedule (see /audit:misstatement-schedule), are there material misstatements that remain uncorrected in the financial statements?

- **NO** → Proceed to **Decision Point 3**
- **YES** → Proceed to **Decision Point 2**

### Decision Point 2: Are the material misstatements pervasive?

**CRITICAL:** Pervasiveness per SA 705.5(a) is assessed using THREE SEPARATE QUESTIONS with OR logic (not AND logic). If YES to ANY ONE question, the misstatement is pervasive.

**Question A - Confined to Specific Elements Test:**
Is the misstatement NOT confined to specific elements, accounts, or items of the financial statements? In other words, does it affect multiple areas of the financial statements?

**Question B - Substantial Proportion Test:**
Even if the misstatement is confined to specific elements, does it represent or could it represent a substantial proportion of the financial statements? (Generally, consider >10-15% of relevant benchmark as substantial)

**Question C - Fundamental Disclosure Test:**
With regard to disclosures, is the misstatement or omission fundamental to users' understanding of the financial statements?

**Pervasiveness Determination:**
- If **YES to ANY ONE** of the three questions above → **Pervasive** → **Adverse Opinion** (SA 705.8)
- If **NO to ALL THREE** questions → **Not Pervasive** → **Qualified Opinion** (SA 705.7(a))

### Decision Point 3: Was sufficient appropriate audit evidence obtained?

**Question:** Were you able to obtain sufficient appropriate audit evidence to support your audit opinion?

- **YES** → **Unmodified Opinion** (SA 700)
- **NO** → Proceed to **Decision Point 4**

### Decision Point 4: Is the inability to obtain evidence pervasive?

**CRITICAL:** Apply the same three-question pervasiveness test as in Decision Point 2:

**Question A:** Is the scope limitation NOT confined to specific elements, accounts, or items?

**Question B:** Even if confined, does the scope limitation represent or could represent a substantial proportion of the financial statements?

**Question C:** Regarding disclosures, is the inability to obtain evidence fundamental to users' understanding?

**Pervasiveness Determination:**
- If **YES to ANY ONE** question → **Pervasive** → **Disclaimer of Opinion** (SA 705.9)
- If **NO to ALL THREE** questions → **Not Pervasive** → **Qualified Opinion** (SA 705.7(b))

### Calibration Examples (Pervasiveness Assessment)

**Scenario A - Inventory Misstatement (Qualified Opinion):**
- **Facts:** Inventory misstated by Rs. 5 crores (material), total assets Rs. 100 crores, misstatement affects only inventory line item.
- **Analysis:**
  - Question A: Confined to single line item (inventory) → NO
  - Question B: Represents 5% of total assets (not substantial proportion, <10%) → NO
  - Question C: Not fundamental to overall understanding of financial position → NO
- **Conclusion:** Material but NOT pervasive → **Qualified Opinion**

**Scenario B - Revenue Recognition Policy Violation (Adverse Opinion):**
- **Facts:** Revenue recognition policy violates Ind AS 115, affecting Rs. 30 crores revenue out of total revenue Rs. 200 crores. Policy violation also affects trade receivables, contract assets, deferred revenue, and all revenue-related disclosures across the financial statements.
- **Analysis:**
  - Question A: NOT confined (affects revenue, receivables, contract assets, deferred revenue, multiple notes) → YES
  - Question B: Represents 15% of total revenue (substantial proportion) → YES
  - Question C: Revenue recognition is fundamental to understanding financial performance → YES
- **Conclusion:** Material AND pervasive (meets all three tests, only one needed) → **Adverse Opinion**

**Scenario C - Investment Valuation Evidence Limitation (Disclaimer of Opinion):**
- **Facts:** Unable to obtain evidence for investment valuation of Rs. 8 crores, total assets Rs. 80 crores, management refuses to provide independent valuation report or supporting documentation.
- **Analysis:**
  - Question A: Confined to single line item (investments) → NO
  - Question B: Represents 10% of total assets (borderline substantial proportion) → YES
  - Question C: Cannot determine actual misstatement; potential impact on profit/loss unknown → YES
- **Conclusion:** Material AND pervasive (substantial proportion test met) → **Disclaimer of Opinion**

## Workflow

### Step 1: Determine Opinion Type

Based on the decision tree above, select the appropriate opinion type:
- **Type A - Unmodified Opinion (SA 700)**
- **Type B - Qualified Opinion (SA 705)** - material but not pervasive
- **Type C - Adverse Opinion (SA 705)** - material and pervasive
- **Type D - Disclaimer of Opinion (SA 705)** - inability to obtain evidence that is pervasive

### Step 2: Draft Report Sections in Prescribed Order

Structure the audit report per revised SA 700 with the following sections in exact order:

**a. Title:** "Independent Auditor's Report"

**b. Addressee:** "To the Members of [Company Name]"

**c. Report on the Audit of [Standalone/Consolidated] Financial Statements:**
   - Opinion paragraph (or Qualified/Adverse/Disclaimer paragraph)
   - Basis for Opinion (or Basis for Qualified/Adverse/Disclaimer Opinion)
   - Material Uncertainty Related to Going Concern (if applicable, per SA 570.22)
   - Emphasis of Matter (if applicable, per SA 706)
   - Other Matter (if applicable, per SA 706)
   - Key Audit Matters (for listed entities only, per SA 701 - see /audit:kam-draft)
   - Information Other Than the Financial Statements and Auditor's Report Thereon (SA 720)
   - Responsibilities of Management and Those Charged with Governance for the Financial Statements
   - Auditor's Responsibilities for the Audit of the Financial Statements

**d. Report on Other Legal and Regulatory Requirements:**
   - Section 143(3) of the Companies Act 2013 - mandatory reporting points
   - Section 143(5) - C&AG directions (if applicable for government companies)

**e. Annexures:**
   - Annexure A: Report under Section 143(3) of the Companies Act 2013 on CARO 2020
   - Annexure B: Report on Internal Financial Controls under Section 143(3)(i)

**f. Signature Block:** Firm details, partner details, UDIN, place, and date

### Step 3: Draft Opinion Paragraph (Based on Opinion Type Selected)

#### Type A - Unmodified Opinion (SA 700):

"**Opinion**

We have audited the accompanying [standalone/consolidated] financial statements of [Company Name] ("the Company"), which comprise the Balance Sheet as at 31 March [Year], the Statement of Profit and Loss (including Other Comprehensive Income), the Statement of Changes in Equity and the Statement of Cash Flows for the year then ended, and notes to the financial statements, including a summary of the significant accounting policies and other explanatory information (hereinafter referred to as "the financial statements").

In our opinion and to the best of our information and according to the explanations given to us, the aforesaid [standalone/consolidated] financial statements give the information required by the Companies Act, 2013 ("the Act") in the manner so required and give a true and fair view in conformity with the [Indian Accounting Standards prescribed under section 133 of the Act read with the Companies (Indian Accounting Standards) Rules, 2015, as amended / accounting principles generally accepted in India], of the state of affairs of the Company as at 31 March [Year], and its [profit/loss], total comprehensive income, changes in equity and its cash flows for the year ended on that date."

#### Type B - Qualified Opinion (SA 705.7):

**For Material Misstatement - Not Pervasive:**

"**Qualified Opinion**

We have audited the accompanying [standalone/consolidated] financial statements of [Company Name] ("the Company"), which comprise the Balance Sheet as at 31 March [Year], the Statement of Profit and Loss (including Other Comprehensive Income), the Statement of Changes in Equity and the Statement of Cash Flows for the year then ended, and notes to the financial statements, including a summary of the significant accounting policies and other explanatory information.

In our opinion and to the best of our information and according to the explanations given to us, **except for the effects of the matter described in the Basis for Qualified Opinion section of our report**, the aforesaid [standalone/consolidated] financial statements give the information required by the Companies Act, 2013 in the manner so required and give a true and fair view in conformity with [Ind AS/accounting principles generally accepted in India] of the state of affairs of the Company as at 31 March [Year], and its [profit/loss], total comprehensive income, changes in equity and its cash flows for the year ended on that date."

**For Inability to Obtain Evidence - Not Pervasive:**

"In our opinion and to the best of our information and according to the explanations given to us, **except for the possible effects of the matter described in the Basis for Qualified Opinion section of our report**, the aforesaid [standalone/consolidated] financial statements give the information required by the Companies Act, 2013 in the manner so required and give a true and fair view..."

#### Type C - Adverse Opinion (SA 705.8):

"**Adverse Opinion**

We have audited the accompanying [standalone/consolidated] financial statements of [Company Name] ("the Company"), which comprise the Balance Sheet as at 31 March [Year], the Statement of Profit and Loss (including Other Comprehensive Income), the Statement of Changes in Equity and the Statement of Cash Flows for the year then ended, and notes to the financial statements, including a summary of the significant accounting policies and other explanatory information.

In our opinion and to the best of our information and according to the explanations given to us, **because of the significance of the matter described in the Basis for Adverse Opinion section of our report, the aforesaid [standalone/consolidated] financial statements do not give a true and fair view** in conformity with [Ind AS/accounting principles generally accepted in India] of the state of affairs of the Company as at 31 March [Year], and its [profit/loss], total comprehensive income, changes in equity and its cash flows for the year ended on that date. The financial statements also do not give the information required by the Companies Act, 2013 in the manner so required."

#### Type D - Disclaimer of Opinion (SA 705.9):

"**Disclaimer of Opinion**

We were engaged to audit the accompanying [standalone/consolidated] financial statements of [Company Name] ("the Company"), which comprise the Balance Sheet as at 31 March [Year], the Statement of Profit and Loss (including Other Comprehensive Income), the Statement of Changes in Equity and the Statement of Cash Flows for the year then ended, and notes to the financial statements, including a summary of the significant accounting policies and other explanatory information.

**We do not express an opinion** on the accompanying [standalone/consolidated] financial statements of the Company. Because of the significance of the matter described in the Basis for Disclaimer of Opinion section of our report, we have not been able to obtain sufficient appropriate audit evidence to provide a basis for an audit opinion on these financial statements."

### Step 4: Draft Basis Paragraph

#### Basis for Opinion (Unmodified Opinion):

"**Basis for Opinion**

We conducted our audit in accordance with the Standards on Auditing (SAs) specified under section 143(10) of the Companies Act, 2013. Our responsibilities under those Standards are further described in the Auditor's Responsibilities for the Audit of the Financial Statements section of our report. We are independent of the Company in accordance with the Code of Ethics issued by the Institute of Chartered Accountants of India (ICAI) together with the ethical requirements that are relevant to our audit of the financial statements under the provisions of the Companies Act, 2013 and the Rules thereunder, and we have fulfilled our other ethical responsibilities in accordance with these requirements and the Code of Ethics. We believe that the audit evidence we have obtained is sufficient and appropriate to provide a basis for our opinion."

#### Basis for Qualified Opinion (Modified Opinion):

"**Basis for Qualified Opinion**

[Describe the specific matter giving rise to the qualification]

**Example for Material Misstatement:**
"The Company's inventories as at 31 March [Year] are stated in the Balance Sheet at Rs. [X] crores. Management has not recognized a provision for obsolete inventory items identified during our physical verification, which we estimate should be written down by approximately Rs. [Y] crores. As a result, inventories are overstated by Rs. [Y] crores, and profit before tax is overstated by the same amount. Tax expense would be reduced by Rs. [Z] crores, resulting in net overstatement of profit after tax by Rs. [Y-Z] crores."

**Example for Scope Limitation:**
"The Company's investment in [Subsidiary/Associate] amounting to Rs. [X] crores (representing [%] of total assets) is carried at cost. We were unable to obtain sufficient appropriate audit evidence regarding the carrying value of this investment as management did not provide us with audited financial statements of [Subsidiary/Associate] or an independent valuation report. Consequently, we were unable to determine whether any adjustment to this amount was necessary."

**Quantitative Impact:** If determinable, state the amounts. If not determinable, state: "We were unable to determine the quantum of adjustments that might have been necessary had we been able to obtain sufficient appropriate audit evidence."

**Qualitative Impact:** Describe the nature of the impact on users' understanding of the financial statements.

We conducted our audit in accordance with the Standards on Auditing (SAs) specified under section 143(10) of the Companies Act, 2013. Our responsibilities under those Standards are further described in the Auditor's Responsibilities for the Audit of the Financial Statements section of our report. We are independent of the Company in accordance with the Code of Ethics issued by ICAI together with the ethical requirements that are relevant to our audit of the financial statements under the provisions of the Act and the Rules thereunder, and we have fulfilled our other ethical responsibilities in accordance with these requirements and the Code of Ethics. We believe that the audit evidence we have obtained is sufficient and appropriate to provide a basis for our qualified opinion."

#### Basis for Adverse Opinion:

"**Basis for Adverse Opinion**

[Describe the specific matter giving rise to the adverse opinion, with quantitative impact]

**Example:**
"As disclosed in Note [X] to the financial statements, the Company has recognized revenue from long-term construction contracts on a percentage-of-completion basis using the output method (milestones achieved). However, the Company has not assessed whether multiple performance obligations exist under Ind AS 115, nor has it allocated the transaction price to identified performance obligations. We have determined that the contracts contain multiple distinct performance obligations (design, procurement, construction, commissioning) that should be accounted for separately. Based on our assessment, revenue for the year is overstated by Rs. [Y] crores (current year recognition of Rs. [A] crores should have been Rs. [B] crores), and trade receivables/contract assets are overstated by Rs. [Z] crores. The cumulative impact on retained earnings from prior years is Rs. [W] crores. This accounting policy violation is inconsistent with Ind AS 115 and is pervasive to the financial statements as it affects revenue, receivables, contract assets/liabilities, deferred tax, and all revenue-related disclosures."

We conducted our audit in accordance with the SAs specified under section 143(10) of the Companies Act, 2013... [continue with standard independence and responsibilities language]"

#### Basis for Disclaimer of Opinion:

"**Basis for Disclaimer of Opinion**

[Describe the specific matter giving rise to the disclaimer]

**Example:**
"The Company's financial statements include amounts for Property, Plant and Equipment of Rs. [X] crores, Inventories of Rs. [Y] crores, and Trade Receivables of Rs. [Z] crores, which together represent [%] of total assets. We were appointed as auditors on [date], after the year-end, and were unable to observe the physical verification of inventories or confirm trade receivables as at 31 March [Year]. We were also unable to satisfy ourselves by alternative means concerning the existence and condition of these assets. Because these balances represent a substantial proportion of the Company's assets and affect multiple areas of the financial statements, we were unable to obtain sufficient appropriate audit evidence to provide a basis for an audit opinion."

**Note per SA 705.29:** When expressing a disclaimer of opinion, DO NOT state "We conducted our audit in accordance with SAs" in the Basis paragraph (omit this language as no audit conclusion can be reached). Also omit the description of the auditor's responsibilities or refer to ISA 701 [not applicable in Indian context - KAM section not included in Disclaimer opinions per SA 701.14]."

### Step 5: Include Additional Paragraphs (If Applicable)

#### Material Uncertainty Related to Going Concern (SA 570.22)

**CRITICAL:** If material uncertainty related to going concern exists and is adequately disclosed, use this EXACT prescribed heading (not generic "Emphasis of Matter" per SA 570.22):

"**Material Uncertainty Related to Going Concern**

We draw attention to Note [X] in the financial statements, which indicates that the Company incurred a net loss of Rs. [Y] crores during the year ended 31 March [Year] and, as of that date, the Company's current liabilities exceeded its current assets by Rs. [Z] crores and the Company has defaulted in repayment of borrowings to [Bank/FI]. As stated in Note [X], these events or conditions, along with other matters as set forth in Note [X], indicate that a material uncertainty exists that may cast significant doubt on the Company's ability to continue as a going concern. Our opinion is not modified in respect of this matter."

**Placement:** Immediately after the Basis for Opinion section.

**If going concern basis is inappropriate:** Do NOT use this paragraph. Instead, express an **Adverse Opinion** per SA 570.23.

#### Emphasis of Matter (SA 706)

Use for matters OTHER than going concern material uncertainty. Emphasis of Matter draws attention to a matter that is:
- Appropriately presented or disclosed in the financial statements, AND
- Of such importance that it is fundamental to users' understanding

**Common triggers:**
- Significant uncertainty in litigation outcome or regulatory inquiry
- Early adoption of a new accounting standard or change in accounting policy
- Significant related party transactions requiring user attention
- Major catastrophic event affecting the entity (e.g., fire, natural disaster)

**Template:**

"**Emphasis of Matter**

We draw attention to Note [X] in the financial statements, which describes [describe the matter, e.g., "the uncertainty related to the outcome of the lawsuit filed against the Company claiming damages of Rs. [Y] crores. The ultimate outcome of this matter cannot presently be determined, and no provision for any liability that may result has been made in the financial statements"]. Our opinion is not modified in respect of this matter."

**Note:** State clearly that the opinion is not modified. If the matter results in modified opinion, it goes in the Basis paragraph, not Emphasis of Matter.

#### Other Matter (SA 706)

Use for matters OTHER than those presented or disclosed in the financial statements but relevant to users' understanding of:
- The audit, or
- The auditor's responsibilities, or
- The auditor's report

**Common triggers:**
- Comparatives audited by predecessor auditor
- Unaudited supplementary information included in the document
- Prior period financial statements were unaudited
- Restriction on distribution or use of auditor's report

**Template for Predecessor Auditor:**

"**Other Matter**

The financial statements of the Company for the year ended 31 March [Prior Year], included in these financial statements, were audited by another auditor who expressed an unmodified opinion on those statements on [date]."

**Template for Unaudited Supplementary Information:**

"**Other Matter**

The supplementary information included in Annexure [X] to the financial statements for the year ended 31 March [Year] is presented for purposes of additional analysis and is not a required part of the financial statements. Such supplementary information is the responsibility of management and was derived from and relates directly to the underlying accounting and other records used to prepare the financial statements. The supplementary information has been subjected to the auditing procedures applied in our audit of the financial statements. In our opinion, the supplementary information is fairly stated in all material respects in relation to the financial statements as a whole."

#### Key Audit Matters (SA 701) - For Listed Entities ONLY

**Applicability:** SA 701 is MANDATORY for audits of financial statements of listed entities.

**Placement:** After Emphasis of Matter/Other Matter sections and before Responsibilities sections.

**Cross-reference:** See **/audit:kam-draft** for detailed KAM drafting guidance.

**CRITICAL EXCLUSIONS per SA 701.14:**
- KAM section is NOT included in Disclaimer of Opinion reports
- KAMs are NOT a substitute for required Emphasis of Matter paragraphs (going concern material uncertainty MUST have separate prescribed section, not included as KAM)
- Matters giving rise to modified opinion go in Basis paragraph, NOT in KAM section

**Introductory Paragraph:**

"**Key Audit Matters**

Key audit matters are those matters that, in our professional judgment, were of most significance in our audit of the [standalone/consolidated] financial statements of the current period. These matters were addressed in the context of our audit of the financial statements as a whole, and in forming our opinion thereon, and we do not provide a separate opinion on these matters.

[Insert individual KAMs per /audit:kam-draft - typically 2-5 KAMs]"

### Step 6: Section 143(3) Reporting - Companies Act 2013

Draft the "Report on Other Legal and Regulatory Requirements" section addressing ALL mandatory reporting points:

"**Report on Other Legal and Regulatory Requirements**

As required by Section 143(3) of the Act, we report that:

(a) We have sought and obtained all the information and explanations which to the best of our knowledge and belief were necessary for the purposes of our audit.

(b) In our opinion, proper books of account as required by law have been kept by the Company so far as it appears from our examination of those books. [If branch: and proper returns adequate for the purposes of our audit have been received from branches not visited by us.]

(c) The Balance Sheet, the Statement of Profit and Loss including Other Comprehensive Income, the Statement of Changes in Equity and the Statement of Cash Flows dealt with by this Report are in agreement with the books of account [and with the returns received from branches not visited by us].

(d) In our opinion, the aforesaid [standalone/consolidated] financial statements comply with the [Indian Accounting Standards / Accounting Standards] prescribed under Section 133 of the Act. [If qualified/adverse opinion: **Except for the effects of the matter described in the Basis for Qualified Opinion section, in our opinion...**]

(e) On the basis of the written representations received from the directors as on 31 March [Year] taken on record by the Board of Directors, none of the directors is disqualified as on 31 March [Year] from being appointed as a director in terms of Section 164(2) of the Act.

(f) With respect to the adequacy of the internal financial controls over financial reporting of the Company and the operating effectiveness of such controls, refer to our separate Report in Annexure B. [If listed entity: Our report expresses an unmodified opinion on the adequacy and operating effectiveness of the Company's internal financial controls over financial reporting.]

(g) [For listed/public companies] With respect to the other matters to be included in the Auditor's Report in accordance with Rule 11 of the Companies (Audit and Auditors) Rules, 2014, in our opinion and to the best of our information and according to the explanations given to us:

    i. The Company has disclosed the impact of pending litigations on its financial position in its financial statements - Refer Note [X];

    ii. The Company did not have any long-term contracts including derivative contracts for which there were any material foreseeable losses. [OR: The Company has made provision, as required under the applicable law or accounting standards, for material foreseeable losses, if any, on long-term contracts including derivative contracts - Refer Note [X]];

    iii. There has been no delay in transferring amounts, required to be transferred, to the Investor Education and Protection Fund by the Company. [OR: There were no amounts which were required to be transferred to the Investor Education and Protection Fund by the Company.]

    [If applicable for government companies:]
    iv. The reporting under Section 143(3)(i) of the Act on whether the Company has adequate internal financial controls over financial reporting in place and the operating effectiveness of such controls is not applicable to the Company. [OR provide affirmative statement]

    v. The reporting under Section 143(3)(j) of the Act on whether the Company has complied with the provisions of Section 197 read with Schedule V to the Act in respect of managerial remuneration - [state conclusion]

(h) With respect to the matters to be included in the Auditor's Report under Section 197(16) of the Act:
    In our opinion and according to the information and explanations given to us, the remuneration paid by the Company to its directors during the current year is in accordance with the provisions of Section 197 of the Act. The remuneration paid to any director is not in excess of the limit laid down under Section 197 of the Act. The Ministry of Corporate Affairs has not prescribed other details under Section 197(16) which are required to be commented upon by us."

**Section 143(5) - C&AG Directions (Government Companies Only):**

If the entity is a government company and the Comptroller and Auditor General of India (C&AG) has issued directions under Section 143(5), add:

"As required by the Comptroller and Auditor General of India, in terms of Section 143(5) of the Act, we report that:

[List each direction and the auditor's response/finding for that direction]

1. [Direction 1] - [Auditor's finding/response]
2. [Direction 2] - [Auditor's finding/response]
..."

### Step 7: Draft Annexures

#### Annexure A - CARO 2020 Report

"**Annexure A to the Independent Auditor's Report**

(Referred to in paragraph [X] under 'Report on Other Legal and Regulatory Requirements' section of our report of even date)

**Report on the Matters specified in paragraph 3 of the Companies (Auditor's Report) Order, 2020 (CARO 2020)**

[Cross-reference to /audit:caro-report for complete CARO 2020 reporting]

[Insert complete CARO 2020 report covering all applicable clauses 3(i) through 3(xxi)]

For [Audit Firm Name]
Chartered Accountants
Firm Registration No.: [XXXXXX/XXXXXXX]

[Partner Name]
Partner
Membership No.: [XXXXXX]
UDIN: [UDIN]

Place: [City]
Date: [Date]"

#### Annexure B - Internal Financial Controls Report

"**Annexure B to the Independent Auditor's Report**

(Referred to in paragraph [X] under 'Report on Other Legal and Regulatory Requirements' section of our report of even date)

**Report on the Internal Financial Controls Over Financial Reporting under Clause (i) of Sub-section 3 of Section 143 of the Companies Act, 2013 ("the Act")**

We have audited the internal financial controls over financial reporting of [Company Name] ("the Company") as of 31 March [Year] in conjunction with our audit of the [standalone/consolidated] financial statements of the Company for the year ended on that date.

**Management's Responsibility for Internal Financial Controls**

The Company's management is responsible for establishing and maintaining internal financial controls based on the internal control over financial reporting criteria established by the Company considering the essential components of internal control stated in the Guidance Note on Audit of Internal Financial Controls Over Financial Reporting issued by the Institute of Chartered Accountants of India (ICAI). These responsibilities include the design, implementation and maintenance of adequate internal financial controls that were operating effectively for ensuring the orderly and efficient conduct of its business, including adherence to company's policies, the safeguarding of its assets, the prevention and detection of frauds and errors, the accuracy and completeness of the accounting records, and the timely preparation of reliable financial information, as required under the Companies Act, 2013.

**Auditor's Responsibility**

Our responsibility is to express an opinion on the Company's internal financial controls over financial reporting based on our audit. We conducted our audit in accordance with the Guidance Note on Audit of Internal Financial Controls Over Financial Reporting (the "Guidance Note") issued by ICAI and the Standards on Auditing deemed to be prescribed under section 143(10) of the Companies Act, 2013, to the extent applicable to an audit of internal financial controls. Those Standards and the Guidance Note require that we comply with ethical requirements and plan and perform the audit to obtain reasonable assurance about whether adequate internal financial controls over financial reporting was established and maintained and if such controls operated effectively in all material respects.

Our audit involves performing procedures to obtain audit evidence about the adequacy of the internal financial controls system over financial reporting and their operating effectiveness. Our audit of internal financial controls over financial reporting included obtaining an understanding of internal financial controls over financial reporting, assessing the risk that a material weakness exists, and testing and evaluating the design and operating effectiveness of internal control based on the assessed risk. The procedures selected depend on the auditor's judgement, including the assessment of the risks of material misstatement of the financial statements, whether due to fraud or error.

We believe that the audit evidence we have obtained is sufficient and appropriate to provide a basis for our audit opinion on the Company's internal financial controls system over financial reporting.

**Meaning of Internal Financial Controls Over Financial Reporting**

A company's internal financial control over financial reporting is a process designed to provide reasonable assurance regarding the reliability of financial reporting and the preparation of financial statements for external purposes in accordance with generally accepted accounting principles. A company's internal financial control over financial reporting includes those policies and procedures that (1) pertain to the maintenance of records that, in reasonable detail, accurately and fairly reflect the transactions and dispositions of the assets of the company; (2) provide reasonable assurance that transactions are recorded as necessary to permit preparation of financial statements in accordance with generally accepted accounting principles, and that receipts and expenditures of the company are being made only in accordance with authorisations of management and directors of the company; and (3) provide reasonable assurance regarding prevention or timely detection of unauthorised acquisition, use, or disposition of the company's assets that could have a material effect on the financial statements.

**Inherent Limitations of Internal Financial Controls Over Financial Reporting**

Because of the inherent limitations of internal financial controls over financial reporting, including the possibility of collusion or improper management override of controls, material misstatements due to error or fraud may occur and not be detected. Also, projections of any evaluation of the internal financial controls over financial reporting to future periods are subject to the risk that the internal financial control over financial reporting may become inadequate because of changes in conditions, or that the degree of compliance with the policies or procedures may deteriorate.

**Opinion**

In our opinion, the Company has, in all material respects, an adequate internal financial controls system over financial reporting and such internal financial controls over financial reporting were operating effectively as at 31 March [Year], based on the internal control over financial reporting criteria established by the Company considering the essential components of internal control stated in the Guidance Note on Audit of Internal Financial Controls Over Financial Reporting issued by the Institute of Chartered Accountants of India.

[If material weakness identified: **Qualified/Adverse opinion language describing the weakness**]

For [Audit Firm Name]
Chartered Accountants
Firm Registration No.: [XXXXXX/XXXXXXX]

[Partner Name]
Partner
Membership No.: [XXXXXX]
UDIN: [UDIN]

Place: [City]
Date: [Date]"

### Step 8: Signature Block and Dating

"For [Audit Firm Name]
Chartered Accountants
Firm Registration Number: [ICAI FRN format: XXXXXX/XXXXXXX]

[Partner Name]
Partner
Membership Number: [ICAI Membership Number: XXXXXX]
UDIN: [Unique Document Identification Number - 12 digits - MANDATORY per ICAI, generate at https://udin.icai.org]

Place: [City]
Date: [Date in DD Month YYYY format, e.g., 15 May 2026]"

**CRITICAL SEQUENCING REQUIREMENTS:**

1. **Representation Letter Dating (SA 580.14):** The management representation letter must be dated as close as practicable to, but not after, the auditor's report date. Ideally, same date as the auditor's report. See **/audit:representation-letter**.

2. **EQCR Completion Before Report Dating (SA 220.19 - Listed Entities):** For listed entities, the auditor's report CANNOT be dated before the Engagement Quality Control Review (EQCR) is completed. The report date must be the same as or after the EQCR completion date. See **/audit:quality-review**.

**Verification Checkpoints Before Dating Report:**
- [ ] All audit procedures completed and documented
- [ ] All outstanding items in audit program resolved
- [ ] Misstatement schedule finalized and evaluated (see /audit:misstatement-schedule)
- [ ] Management representation letter obtained and dated appropriately (see /audit:representation-letter)
- [ ] Subsequent events procedures completed through report date (see /audit:subsequent-events)
- [ ] CARO 2020 report finalized (see /audit:caro-report)
- [ ] For listed entities: KAM section drafted (see /audit:kam-draft)
- [ ] For listed entities: EQCR completed with "Approved for issuance" sign-off (see /audit:quality-review)
- [ ] Partner has reviewed and approved the final report
- [ ] UDIN generated at https://udin.icai.org before report issuance

**WARNING BOX:**

```
┌────────────────────────────────────────────────────────────────────┐
│  CRITICAL SEQUENCING REQUIREMENT (SA 220.19)                       │
│                                                                    │
│  For LISTED ENTITIES, the audit report CANNOT be dated before     │
│  EQCR completion.                                                  │
│                                                                    │
│  Sequence: EQCR Completion → Report Dating → Report Issuance      │
│                                                                    │
│  See /audit:quality-review for EQCR completion procedures.        │
└────────────────────────────────────────────────────────────────────┘
```

## Cross-References

### Inputs to This Command (From Prior Phases)

This command integrates outputs from multiple prior-phase commands:

**Phase 3 - Planning & Risk Assessment:**
- **/audit:materiality** - Overall and performance materiality thresholds affect misstatement evaluation
- **/audit:risk-matrix** - Identified significant risks inform KAM determination and audit approach

**Phase 4 - Execution & Completion:**
- **/audit:misstatement-schedule** - Uncorrected misstatements directly affect opinion type determination per decision tree
- **/audit:going-concern** - Material uncertainty triggers "Material Uncertainty Related to Going Concern" section per SA 570.22
- **/audit:estimates-review** - Significant estimate conclusions support opinion and may be KAM candidates
- **/audit:subsequent-events** - Events affecting disclosures must be reflected in financial statements and report

**Phase 5 - Specialized Reporting:**
- **/audit:caro-report** - CARO 2020 report included as Annexure A, must be consistent with audit opinion
- **/audit:statutory-dues** - Statutory dues status affects Section 143(3) reporting and CARO 3(vii)

**Phase 6 - Current Phase:**
- **/audit:kam-draft** - KAM section inserted for listed entities (cross-reference for KAM drafting)
- **/audit:representation-letter** - Dating coordination required (representation letter not dated after report)

### Outputs Consumed By (Later Commands in Phase 6)

- **/audit:quality-review** - Draft report is primary document reviewed during EQCR before report dating (listed entities)
- **/audit:completion-memo** - Final report type (unmodified/qualified/adverse/disclaimer) documented in completion memo
- **/audit:file-index** - Final signed audit report filed in Section G (Reporting) of audit file per SA 230

## Output Format

A complete independent auditor's report structured as follows:

1. **Title and Addressee**
2. **Report on the Audit of Financial Statements** (4-6 pages depending on opinion type and entity type)
   - Opinion/Qualified/Adverse/Disclaimer paragraph
   - Basis for Opinion/Basis for Modification paragraph
   - Material Uncertainty Related to Going Concern (if applicable)
   - Emphasis of Matter (if applicable)
   - Other Matter (if applicable)
   - Key Audit Matters (listed entities only, 2-5 KAMs)
   - Information Other Than the Financial Statements
   - Responsibilities of Management and TCWG
   - Auditor's Responsibilities
3. **Report on Other Legal and Regulatory Requirements** (1-2 pages)
   - Section 143(3) reporting (all mandatory points a through h)
   - Section 143(5) C&AG directions (if applicable)
4. **Annexure A - CARO 2020 Report** (cross-reference to /audit:caro-report)
5. **Annexure B - Internal Financial Controls Report** (1-2 pages)
6. **Signature Block** with:
   - Firm name and registration number
   - Partner name and membership number
   - UDIN (12-digit unique document identification number)
   - Place and date

**Report Length:**
- Unlisted entity, unmodified opinion: 6-8 pages
- Listed entity, unmodified opinion with KAMs: 10-14 pages
- Modified opinion (any type): Add 1-2 pages for Basis paragraph and implications

**Professional Formatting:**
- Use company letterhead or audit firm letterhead per firm policy
- Paragraph numbering for Section 143(3) reporting points
- Bold headings for each section per SA 700 prescribed format
- Clear section breaks between Report on Audit and Report on Other Legal Requirements

## Anti-Patterns to Avoid

**DO NOT:**
- ❌ Use pre-2018 report format with Opinion at the end (Opinion now appears FIRST per revised SA 700.22)
- ❌ Use "subject to" opinion language (no longer permissible under SA 705)
- ❌ Use generic "Emphasis of Matter" heading for going concern material uncertainty (must use prescribed "Material Uncertainty Related to Going Concern" heading per SA 570.22)
- ❌ Include KAM section in Disclaimer of Opinion reports (prohibited per SA 701.14)
- ❌ Treat pervasiveness as single binary question (must assess all three tests: confined, substantial proportion, fundamental disclosure)
- ❌ Include matters giving rise to modified opinion as KAMs (they go in Basis paragraph)
- ❌ Date the report before EQCR completion for listed entities (SA 220.19 violation)
- ❌ Date the report before obtaining management representation letter (SA 580.14 violation)
- ❌ Omit UDIN from signature block (mandatory for all reports per ICAI)
- ❌ Copy opinion paragraph from prior year without updating for current year facts
- ❌ Use boilerplate "except for" language without specific quantitative impact in Basis paragraph

---

**Disclaimer:** This tool assists with audit workflow documentation but does not substitute professional audit judgment. All outputs must be reviewed by qualified Chartered Accountants. The auditor's report is the primary deliverable of the statutory audit and requires partner-level review and approval before issuance. Opinion type determination, particularly pervasiveness assessment, requires professional judgment and cannot be automated. This command structures the judgment process but does not make the judgment.
