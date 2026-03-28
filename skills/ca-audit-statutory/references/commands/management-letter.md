# Management Letter Drafting

Draft a management letter (also called letter of internal control deficiencies or letter of observations) per SA 265 documenting internal control deficiencies, control weaknesses, and recommendations for improvement, categorized by severity with proper distinction between Material Weakness, Significant Deficiency, Control Deficiency, and Best Practice Recommendations.

## Purpose and SA 265 Requirements

**SA 265.9 MANDATES written communication of material weaknesses and significant deficiencies to Those Charged With Governance (TCWG).** This is NOT optional. Control deficiencies and observations are communicated to management (not necessarily TCWG).

The management letter serves multiple purposes:
- Fulfill mandatory SA 265 reporting obligation for significant internal control matters
- Provide management and governance with actionable recommendations for control improvement
- Document auditor's internal control findings for audit file and quality control
- Create basis for monitoring implementation of recommendations in subsequent periods

**Critical distinction:** The audit was designed to obtain reasonable assurance about whether the financial statements are free from material misstatement. It was NOT designed to identify all deficiencies in internal control. The management letter reports only those deficiencies significant enough to merit communication, not a comprehensive assessment of all controls.

## Required Context

Before running this command, ensure:
- Audit fieldwork is substantially complete
- Internal control evaluation has been performed per SA 315
- All significant deficiencies and material weaknesses have been identified
- Communication with Those Charged With Governance regarding deficiencies has occurred (for material weaknesses and significant deficiencies)
- Draft financial statements are available to assess materiality of observations

**Interactive prompts - Ask user:**
- Entity name and financial year
- Audit areas where internal control deficiencies were noted (revenue, purchases, payroll, treasury, IT, financial close, etc.)
- Whether audit committee or board has been separately informed of material weaknesses (oral communication should precede written)
- Prior year management letter observations and their current status (Implemented/Partially Implemented/Not Implemented/No Longer Applicable)

## Workflow

### Step 1: Compile Observations from Audit Fieldwork

Gather all observations noted during the audit including:
- Internal control deficiencies identified during controls evaluation per SA 315
- Operational inefficiencies observed during substantive procedures
- Compliance gaps with laws and regulations (Companies Act, tax laws, regulatory requirements)
- Areas for improvement in financial reporting processes and financial close procedures
- Technology and system-related observations (IT general controls, access controls, change management)
- Governance and oversight observations (board oversight, audit committee effectiveness)

### Step 2: Severity Classification Decision Tree

**This is the CRITICAL step requiring professional judgment.** Proper classification determines the audience (TCWG vs. management) and urgency of communication.

#### Step 1: Is it a deficiency in internal control? (per SA 265.6)

**Definition:** A deficiency in internal control exists when:
- A control does not exist (design deficiency), OR
- A control is not properly designed to prevent or detect misstatements (design deficiency), OR
- A control exists and is properly designed but does not operate effectively (operating effectiveness deficiency)

**Decision:**
- If YES → Proceed to severity assessment (Step 2 below)
- If NOT a deficiency (just an improvement suggestion, process optimization, or best practice recommendation) → Classify as **Best Practice Recommendation** (communicate to management, NOT mandatory SA 265 communication)

#### Step 2: Material Weakness Test (per SA 265.6(b))

**Question:** If this deficiency is NOT addressed, is there a REASONABLE POSSIBILITY (not certainty, not even "probable" - just possibility) that a material misstatement of the financial statements will NOT be prevented or detected and corrected on a timely basis?

**Key threshold:** "Reasonable possibility" is a LOW threshold. You do not need to prove the misstatement WILL occur or is LIKELY to occur. You only need to assess whether it COULD POSSIBLY occur and be material.

**Decision:**
- If YES (reasonable possibility of material misstatement) → **Material Weakness**
- If NO (not a reasonable possibility of material misstatement) → Proceed to Step 3

**Material Weakness Examples (for calibration):**
- Lack of segregation of duties in revenue recognition with no compensating controls (reasonable possibility of material revenue overstatement)
- No review or approval of journal entries by management, particularly period-end adjusting entries (reasonable possibility of management override)
- Absence of financial close procedures and reconciliations (reasonable possibility of undetected errors accumulating)
- Ineffective IT general controls over financially significant systems (access controls, change management, backup procedures)
- No review of significant accounting estimates by senior personnel independent of preparer

#### Step 3: Significant Deficiency Test (per SA 265.6(a))

**Question:** Is this deficiency (individually or in combination with other deficiencies) important enough to merit attention by Those Charged With Governance?

**Factors to consider:**
- Could it result in a misstatement that is MORE than inconsequential but LESS than material?
- Does it relate to a significant account or disclosure?
- Does it affect compliance with laws or regulations?
- Is it a repeat deficiency that management has failed to address?
- Does it indicate a more pervasive control environment weakness?

**Decision:**
- If YES (important enough for TCWG attention) → **Significant Deficiency**
- If NO (not important enough for TCWG) → **Control Deficiency** (communicate to management, not necessarily TCWG)

**Significant Deficiency Examples (for calibration):**
- Lack of segregation of duties in accounts payable with compensating controls that are NOT consistently applied (e.g., periodic reviews occur sometimes but not regularly)
- Inadequate reconciliation controls (monthly reconciliations instead of weekly for high-volume accounts, or reconciliations performed without consistent review)
- Inadequate documentation of approval for non-routine transactions (complex contracts, related party transactions, significant estimates)
- Control deficiencies in areas with moderate risk but where deficiency affects multiple processes

**Control Deficiency Examples (for calibration):**
- Minor documentation gaps in routine approvals (paperwork filed late but approval occurred)
- Late performance of reconciliations (all reconciliations performed but not within timeframe policy requires)
- Absence of secondary review for low-value routine transactions
- Process inefficiencies that do not create significant misstatement risk

**Best Practice Recommendation Examples (not deficiencies):**
- Process automation opportunities that would improve efficiency
- System upgrade recommendations for better reporting capabilities
- Training suggestions for staff skill development
- Documentation improvements beyond minimum control requirements

### Step 3: Communication Requirements per SA 265

Based on severity classification:

**Material Weaknesses and Significant Deficiencies:**
- MUST communicate in WRITING to Those Charged With Governance (SA 265.9) - typically the Audit Committee or Board of Directors
- Timing: As soon as practicable after identification, but no later than issuance of management letter
- Content per SA 265.A14: Include description of deficiency and explanation of potential effects (no need to quantify actual loss amount, but explain the RISK)

**Control Deficiencies:**
- SHOULD communicate in writing to appropriate level of management
- May be included in same letter or separate communication

**Best Practice Recommendations:**
- MAY communicate as suggestions for improvement (not required by SA 265)

**Prior year observations follow-up:**
Include a separate section showing status of prior year management letter observations:
- Implemented (describe evidence of implementation)
- Partially Implemented (describe what was done, what remains)
- Not Implemented (describe why, reassess severity)
- No Longer Applicable (explain why circumstances changed)

### Step 4: Structure Each Observation - The 7-Element Format

For each observation, follow this structured format (per SA 265.A14 and professional best practice):

#### (a) Observation Title
Brief, descriptive heading that conveys the nature of the deficiency
- Example: "Inadequate Segregation of Duties in Accounts Payable"
- Example: "Ineffective Review Controls for Revenue Recognition Judgments"

#### (b) Condition Found
What was observed during the audit, with specifics:
- What control was expected to be in place?
- What did we actually find?
- Include relevant details: dates, frequencies, amounts if applicable, sample sizes tested

Example: "We noted that the same individual in the finance department has system access to create vendor masters, approve purchase orders, process invoices for payment, and execute EFT payments. During our testing of 30 payments totaling Rs. 2.5 crores, we found 8 instances (27%) where all four functions were performed by a single person with no supervisory review."

#### (c) Criteria
What should be (the control standard, regulatory requirement, or best practice):
- Applicable internal control framework (COSO, COBIT)
- Companies Act requirements
- Industry best practices
- Entity's own policies

Example: "Effective internal control frameworks require segregation of incompatible duties to ensure no single individual has control over all phases of a transaction from initiation through authorization, recording, custody, and reconciliation. The Companies Act, 2013 requires adequate internal financial controls."

#### (d) Root Cause
Why the gap exists (be specific, not generic):
- NOT acceptable: "Lack of attention to controls" or "Management oversight"
- Acceptable: "Limited finance department staffing (2 persons managing entire accounts payable function) combined with absence of compensating controls such as exception reporting or supervisory review"

Common root causes:
- Staffing constraints (size, turnover, skills gap)
- System limitations (ERP cannot enforce segregation, manual workarounds required)
- Process design flaws (control steps not built into workflow)
- Inadequate oversight (no monitoring of control performance)
- Resource prioritization (operational priorities overshadow control activities)

#### (e) Effect/Risk
Impact if the deficiency is not addressed:
- Quantify if possible: "Could result in misstatement of Rs. [X] lakhs" or "affects [Y]% of total purchases"
- Qualitative risk description: "Increases fraud risk in payments cycle" or "Could result in undetected errors in revenue recognition"
- Link to financial statement assertions: accuracy, completeness, existence, rights and obligations, valuation

Example: "This deficiency increases the risk of fraudulent vendor creation, unauthorized purchases, duplicate payments, and misappropriation of cash through fictitious payments. The annual accounts payable volume of Rs. 45 crores provides significant exposure. Without compensating controls, a material misstatement could occur and not be detected on a timely basis, meeting the definition of a Material Weakness per SA 265."

#### (f) Recommendation
Specific, actionable corrective action with implementation steps:

**Best practice:** Provide both short-term and long-term recommendations where applicable

Short-term (interim controls while permanent solution is implemented):
- "Implement weekly supervisory review of exception reports listing: (1) vendors created and paid within same month, (2) changes to vendor bank details, (3) duplicate invoice numbers, (4) round-dollar payments, (5) payments above Rs. 5 lakhs"

Long-term (permanent solution):
- "Implement role-based access controls in ERP system to segregate the functions of: (1) vendor master maintenance (procurement team), (2) purchase order approval (department heads), (3) invoice entry and processing (accounts payable clerk), (4) payment approval and execution (finance manager). If segregation is not feasible due to staff constraints, implement automated compensating controls such as system-generated exception reports with required management review and sign-off."

Include:
- Specific steps (not just "improve controls")
- Responsible function or role (not necessarily individual names)
- Any resource requirements (system configuration, additional staff, training)
- Reference to best practices or frameworks where relevant

#### (g) Management Response
Placeholder section for management's response:

"[To be completed by management:
1. Agreement or disagreement with observation (if disagreement, explain basis)
2. Action plan with specific implementation steps
3. Responsible person (name and designation)
4. Target implementation date
5. Any constraints or challenges anticipated]"

**Note:** Management responses are typically obtained after draft management letter is shared. Final letter includes both auditor observations and management responses.

### Step 5: Fully Worked Examples

#### Example 1: Material Weakness - Segregation of Duties in Revenue Recognition

**Observation Title:** Inadequate Segregation of Duties in Revenue Recognition with No Compensating Controls

**Severity:** Material Weakness

**Condition Found:** We noted that the same individual (Sales Manager) in the Company has authority to negotiate sales contracts, approve revenue recognition timing, create sales invoices in the ERP system, and adjust customer accounts receivable balances. During our testing of 25 revenue transactions totaling Rs. 8.5 crores, we found 12 instances (48%) where all four functions were performed by the Sales Manager with no independent review. Additionally, we noted that the Sales Manager's compensation includes a bonus component based on monthly revenue targets.

**Criteria:** Effective internal control frameworks require segregation of incompatible duties, particularly in the revenue cycle which is a presumed fraud risk area per SA 240. Industry best practice requires separation between: (1) contract negotiation/customer relationship management, (2) revenue recognition decision-making, (3) billing/accounts receivable recording, and (4) collection and adjustment authorization.

**Root Cause:** The deficiency exists due to small organizational size (15 employees) and historical reliance on single individual managing customer relationships end-to-end. Management has not designed compensating controls such as independent review of revenue recognition decisions or exception reporting for unusual patterns.

**Effect/Risk:** This deficiency creates a reasonable possibility that revenue could be materially overstated through premature recognition, fictitious transactions, or improper adjustment of accounts receivable without detection. Given the combination of lack of segregation, compensation incentive based on revenue, and absence of compensating controls, a material misstatement could occur and not be prevented or detected on a timely basis. Annual revenue of Rs. 120 crores provides significant exposure.

**Recommendation:**

*Short-term (implement immediately):*
- Finance Manager (independent of sales function) to review and approve all revenue recognition decisions for transactions above Rs. 10 lakhs, documenting review in a revenue recognition checklist covering: contract terms, delivery evidence, customer acceptance, collectability assessment, Ind AS 115 five-step model application
- CFO to review monthly exception reports covering: revenue recognized on last day of month, revenue adjustments, credit notes issued, revenue recognized before delivery, changes to payment terms

*Long-term (implement within 6 months):*
- Restructure ERP access controls to separate: (1) Sales Manager - contract negotiation and customer relationship (view-only access to AR), (2) Finance team - revenue recognition approval and recording, (3) Accounts receivable team - billing and collections, (4) CFO - approval of AR adjustments above Rs. 1 lakh
- Implement system-based workflow requiring Finance approval before revenue recognition for transactions above Rs. 10 lakhs
- Implement automated controls: system validation preventing revenue recognition without delivery evidence attachment, duplicate invoice number prevention, customer credit limit enforcement

**Management Response:** [To be completed by management: (1) Agree/Disagree with observation, (2) Action plan with specific steps, (3) Responsible person, (4) Target implementation date]

---

#### Example 2: Significant Deficiency - Reconciliation Controls

**Observation Title:** Inadequate Bank Reconciliation Review Controls

**Severity:** Significant Deficiency

**Condition Found:** We noted that while bank reconciliations are prepared monthly for all 8 bank accounts (current accounts, OD accounts, escrow accounts), there is no documented evidence of supervisory review and approval. During our testing of 24 bank reconciliations (3 months × 8 accounts), we found 6 instances (25%) where reconciling items exceeded Rs. 5 lakhs and were outstanding for more than 60 days without investigation notes or follow-up evidence. Additionally, reconciliation format varies across accounts (no standard template), and old outstanding items are carried forward without regular review.

**Criteria:** Effective cash management controls require not only preparation of bank reconciliations but also timely review and approval by personnel independent of cash handling and recording functions. Best practice requires: (1) monthly reconciliations within 10 days of month-end, (2) documented review and approval by supervisor, (3) investigation and clearance of reconciling items within 30-60 days, (4) standardized reconciliation format with required sign-offs.

**Root Cause:** The deficiency exists due to inadequate oversight by the Finance Manager, who is responsible for review but has not established a formal review and approval process. There is no established policy for follow-up on outstanding reconciling items, and the ERP system does not enforce workflow requiring approvals before reconciliation closure.

**Effect/Risk:** Without independent review of bank reconciliations, there is increased risk that errors or irregularities in cash transactions could go undetected for extended periods. Specific risks include: undetected bank errors, unauthorized transactions, kiting schemes, delayed identification of fraudulent payments, or misappropriation of cash. While the Company's overall control environment and other detective controls reduce the risk of material misstatement, this deficiency is important enough to merit attention by the Audit Committee given the liquidity and fraud risk associated with cash.

**Recommendation:**

*Immediate actions:*
- Finance Manager to establish bank reconciliation review protocol: (1) review all reconciliations within 15 days of month-end, (2) document review by signing and dating reconciliation, (3) investigate all reconciling items > Rs. 2 lakhs within 15 days, (4) provide written explanation for items outstanding > 60 days
- CFO to perform quarterly review of all bank reconciliations focusing on aged outstanding items

*Within 3 months:*
- Implement standardized bank reconciliation template in Excel or ERP system with required fields: reconciling items description, amount, age, responsible person for follow-up, expected clearance date, investigation notes
- Establish policy: reconciling items > Rs. 2 lakhs or outstanding > 60 days require CFO approval with documented rationale
- Provide training to accounts team on reconciliation best practices and importance of timely clearance

**Management Response:** [To be completed by management: (1) Agree/Disagree with observation, (2) Action plan with specific steps, (3) Responsible person, (4) Target implementation date]

### Step 6: Organization and Presentation

Organize observations using one of these approaches (select based on entity circumstances and TCWG preference):

**Option A: By Severity (RECOMMENDED for audit committee presentation)**
- Section 1: Material Weaknesses (if any) - highest priority
- Section 2: Significant Deficiencies - require TCWG attention
- Section 3: Control Deficiencies - for management attention
- Section 4: Best Practice Recommendations (optional) - improvement opportunities

**Option B: By Business Process Area**
- Revenue Cycle (order-to-cash)
- Purchase Cycle (procure-to-pay)
- Payroll and Human Resources
- Treasury and Cash Management
- Inventory and Production
- IT General Controls and Cybersecurity
- Financial Close and Reporting
- Governance and Oversight

**Option C: By Financial Statement Area**
- Revenue and Receivables
- Purchases, Expenses, and Payables
- Inventory and Cost of Sales
- Property, Plant and Equipment
- Investments and Financial Instruments
- Cash and Bank
- Taxation
- Financial Reporting Process

**Summary Table Format** (include at beginning of letter, after introduction):

| S.No. | Observation Title | Severity | Financial Statement Area | Status |
|-------|-------------------|----------|-------------------------|---------|
| 1 | Inadequate Segregation of Duties in Revenue Recognition | Material Weakness | Revenue | New |
| 2 | Inadequate Bank Reconciliation Review Controls | Significant Deficiency | Cash | Repeat |
| 3 | No Review of Journal Entries by Management | Material Weakness | Financial Close | New |
| 4 | Delayed Reconciliation of Supplier Statements | Control Deficiency | Purchases | New |
| 5 | Process Automation Opportunity in Expense Claims | Best Practice | Payroll | New |

Status: New (first identified this year) / Repeat (identified in prior year, not yet resolved)

### Step 7: Letter Format Template

```
[Audit Firm Letterhead]
[Firm Name, Address, Registration Number]

Date: [Date]

To,
The Board of Directors / Audit Committee
[Company Name]
[Address]

Dear Sirs/Madam,

Subject: Management Letter - Audit of Financial Statements for the year ended [Date]

**Introduction**

In connection with our audit of the [standalone/consolidated] financial statements of [Company Name] ("the Company") for the year ended [Date], we performed procedures to obtain an understanding of internal control relevant to the audit in order to design audit procedures that are appropriate in the circumstances, but not for the purpose of expressing an opinion on the effectiveness of the Company's internal control.

We are pleased to present our observations and recommendations regarding internal control matters that came to our attention during the course of our audit. This letter communicates deficiencies in internal control that we consider to be Material Weaknesses and Significant Deficiencies as defined in Standard on Auditing (SA) 265 "Communicating Deficiencies in Internal Control to Those Charged with Governance and Management".

**Important clarifications:**

1. **Scope limitation:** Our audit was designed to obtain reasonable assurance about whether the financial statements are free from material misstatement. It was NOT designed to identify all deficiencies in internal control. Consequently, there may be deficiencies in internal control that were not identified during our audit.

2. **Severity definitions per SA 265:**
   - **Material Weakness:** A deficiency or combination of deficiencies in internal control such that there is a reasonable possibility that a material misstatement of the financial statements will not be prevented, or detected and corrected, on a timely basis.
   - **Significant Deficiency:** A deficiency or combination of deficiencies in internal control that is less severe than a material weakness, yet important enough to merit attention by those charged with governance.

3. **Communication requirement:** SA 265.9 requires auditors to communicate in writing to those charged with governance all material weaknesses and significant deficiencies identified during the audit, regardless of whether remedial action has already been taken.

**Summary of Observations**

[Insert summary table here - see format above]

**Detailed Observations**

[Insert detailed observations using 7-element format - see Step 4 and Step 5]

**Prior Year Observations - Status Update**

The following table summarizes the status of observations raised in our management letter dated [Prior Year Date]:

| S.No. | Prior Year Observation | Severity | Current Status | Comments |
|-------|------------------------|----------|----------------|----------|
| 1 | [Observation Title] | [Severity] | Implemented | [Management implemented system access controls separating duties. We verified implementation during FY26 audit.] |
| 2 | [Observation Title] | [Severity] | Partially Implemented | [Management has implemented review process but documentation requirements are not consistently followed.] |
| 3 | [Observation Title] | [Severity] | Not Implemented | [Management has not yet implemented due to resource constraints. This observation is repeated in current year letter with updated assessment.] |

[If any prior year Material Weaknesses or Significant Deficiencies remain unresolved, emphasize this and note the escalating risk]

**Conclusion**

We appreciate the cooperation and assistance extended to us by the management and staff of the Company during the course of our audit. We believe that implementation of the recommendations contained in this letter will strengthen the Company's internal control environment and reduce the risk of material misstatement.

We would be pleased to discuss these observations and recommendations with you at your convenience. We request management to provide written responses to each observation, including:
1. Agreement or disagreement with the observation (with basis if disagreement)
2. Detailed action plan with specific implementation steps
3. Responsible person and designation
4. Target implementation date
5. Any resource requirements or constraints

Please provide management responses within [30] days to enable us to include them in the final version of this management letter for your records and our audit file.

For [Audit Firm Name]
Chartered Accountants
Firm Registration Number: [Number]

[Signature]
[Partner Name]
Partner
Membership Number: [Number]
Place: [City]
Date: [Date]
```

## Cross-References

**Inputs to this command (from prior phases):**

- /audit:risk-matrix - Control risk assessment feeds identification of control deficiencies
- /audit:program - Area-specific control testing procedures identify specific control deficiencies during execution
- /audit:misstatement-schedule - Misstatements detected during audit may indicate underlying control deficiencies
- /audit:caro-report - CARO reporting on internal financial controls (Clause 3(i)(d)) informs management letter observations

**Outputs consumed by:**

- /audit:quality-review - EQCR reviewer verifies that all material weaknesses and significant deficiencies have been properly communicated per SA 265
- /audit:completion-memo - Significant control deficiencies documented in completion memo as part of significant matters
- /audit:draft-report - Material weaknesses may affect Section 143(3)(i) reporting on adequacy of internal financial controls over financial reporting
- /audit:representation-letter - Management provides representations on design and implementation of internal controls to prevent and detect fraud

## Output Format

A comprehensive management letter containing:

**Mandatory sections:**
- Formal letterhead with firm details, registration number, date
- Addressee (Board of Directors or Audit Committee for Material Weaknesses and Significant Deficiencies; Management for Control Deficiencies)
- Introduction paragraph explaining purpose, scope, SA 265 reference, and clarifying this is not a comprehensive control review
- Severity definitions (Material Weakness, Significant Deficiency, Control Deficiency per SA 265.6)
- Summary table of all observations with severity classification
- Detailed observations section using 7-element structure (Title, Condition, Criteria, Root Cause, Effect/Risk, Recommendation, Management Response placeholder)
- Prior year follow-up section showing status of previous observations
- Conclusion paragraph offering to discuss, requesting written management response with action plans and timelines
- Signature section with partner name, firm details, membership number, place, date

**Optional sections (based on circumstances):**
- Best practice recommendations (if any observations do not meet deficiency definition but represent improvement opportunities)
- Positive observations (controls that are operating effectively, if helpful for context or morale)

## Professional Disclaimer

**IMPORTANT:** This tool assists with audit workflow documentation but does not substitute professional audit judgment. All outputs must be reviewed by qualified Chartered Accountants.

**Specific caveats for management letter:**
- Severity classification (Material Weakness vs. Significant Deficiency vs. Control Deficiency) requires significant professional judgment and understanding of entity circumstances
- The "reasonable possibility" threshold for Material Weakness in SA 265.6(b) is intentionally subjective and must be assessed in entity-specific context
- Communication timing and format must comply with SA 265.9 requirements (written communication to TCWG for Material Weaknesses and Significant Deficiencies)
- Management letter does not relieve management of responsibility for internal control design and implementation
- This letter communicates only those deficiencies identified during audit procedures and should not be interpreted as providing assurance that no other deficiencies exist

---

**Disclaimer:** This tool assists with audit workflow documentation but does not substitute professional audit judgment. All outputs must be reviewed by qualified Chartered Accountants.
