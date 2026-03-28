# Audit Methodology: How and Why

This guide explains the audit methodology behind each command in the statutory-audit plugin. For each command family, we answer three questions:

1. **WHY do these commands exist?** - Which SA requirement or audit principle they implement
2. **WHAT should the auditor know?** - Key professional judgment areas and common pitfalls
3. **HOW does the output fit into working papers?** - Where it goes in the audit file, quality control checkpoints, and what happens next in the audit flow

## Professional Disclaimer

> **IMPORTANT:** This guide discusses audit methodology in the context of plugin commands. It assumes the reader is a qualified Chartered Accountant with knowledge of Standards on Auditing. References to SA requirements are for context -- always refer to the full text of applicable standards. This guide is NOT a replacement for:
> - Professional audit training and qualification requirements
> - Current versions of Standards on Auditing (SAs) issued by ICAI
> - Firm-specific quality control procedures and methodologies
> - Professional judgment based on specific engagement circumstances

## Introduction

This guide explains **WHY**, **WHAT**, and **HOW** for each command family in the statutory-audit plugin.

**WHY explains the audit principle:** Every command implements specific SA requirements or Companies Act provisions. Understanding which requirement drives each command helps you apply professional judgment appropriately.

**WHAT explains judgment areas:** Auditing is not mechanical. This guide explains where professional judgment is required, what the common errors are that practicing auditors make, and what the correct approach is. It assumes you're a qualified CA who knows SA basics but needs guidance on judgment areas and pitfalls.

**HOW explains working paper integration:** This guide shows how command output maps to working paper file structure, provides quality control review checkpoints for engagement partners, and explains what happens next in the audit flow.

**This is a bridge** between what commands DO (see [COMMANDS.md](COMMANDS.md)) and the professional knowledge you already have. It's explanation documentation (Diátaxis framework), not a tutorial or reference manual.

## Contents

### Engagement & Planning
- [Engagement Acceptance Methodology](#engagement-acceptance-methodology)
- [Materiality Methodology](#materiality-methodology)
- [Audit Strategy & Planning Methodology](#audit-strategy--planning-methodology)

### Risk Assessment
- [Risk Assessment Methodology](#risk-assessment-methodology)

### Execution & Testing
- [Audit Program & Testing Methodology](#audit-program--testing-methodology)

### Completion Procedures
- [Going Concern Methodology](#going-concern-methodology)
- [Accounting Estimates Methodology](#accounting-estimates-methodology)
- [Subsequent Events & Misstatement Methodology](#subsequent-events--misstatement-methodology)

### Specialized Reporting
- [CARO Methodology](#caro-methodology)

### Final Reporting & Quality Control
- [Audit Opinion & Reporting Methodology](#audit-opinion--reporting-methodology)
- [Quality Control Methodology](#quality-control-methodology)

---

## Engagement Acceptance Methodology

**Commands:** `/audit:new-engagement`, `/audit:independence-check`, `/audit:client-acceptance`

### WHY these commands exist

SA 210 requires auditors to establish whether preconditions for an audit exist before accepting an engagement. SA 220 requires evaluation of independence and ethical requirements. Section 141 and 144 of the Companies Act 2013 impose specific independence and disqualification criteria for Indian statutory audits.

The engagement acceptance phase is NOT administrative paperwork -- it's a risk management decision. Accepting a high-risk engagement without proper evaluation can result in:
- Professional liability exposure (audit failure)
- Reputational damage to the firm
- Regulatory sanctions (ICAI disciplinary proceedings, NFRA actions)
- Criminal liability in cases of fraud (Section 447 - willful fraud carries 6 months to 10 years imprisonment)

### Key SA requirements

- **SA 210.6:** Determine that preconditions for audit are present (acceptable financial reporting framework, management acknowledges responsibilities)
- **SA 210.10:** Agree terms of engagement and document in engagement letter
- **SA 220.11-14:** Accept/continue engagement only when independence can be maintained, ethical requirements complied with, and firm has capabilities/resources
- **Section 139-144:** Appointment, rotation, removal, resignation procedures and disqualification criteria under Companies Act

### WHAT the auditor should know

#### 1. Preconditions for audit (SA 210)

The auditor must verify TWO things before accepting:

**Precondition 1: Acceptable financial reporting framework**
- Is the accounting framework acceptable? (Ind AS, AS, IFRS for India, Schedule III presentation)
- Does the framework adequately disclose all material information? (Schedule III disclosure requirements)
- Is the framework appropriate for the entity's circumstances? (Ind AS voluntary for non-listed, mandatory for listed)

**If framework is unacceptable:** Cannot accept engagement.

**Example:** Management insists on cash basis accounting for a Rs. 50 crore revenue company - not an acceptable framework for statutory audit.

**Precondition 2: Management acknowledges responsibilities**
- Preparation of financial statements per applicable framework (Schedule III, Ind AS/AS)
- Design, implementation, maintenance of internal control (not just financial controls - operational controls affecting FS)
- Providing auditor with:
  - Access to all information relevant to FS (including board minutes, related party info, lawyer's letters)
  - Additional information requested (trial balance, schedules, reconciliations)
  - Unrestricted access to persons (management, employees, third parties)

**If management refuses to acknowledge:** Cannot accept engagement.

**Example:** Management states "We'll provide what we think is relevant" - insufficient. SA 210 requires unrestricted access.

**Common pitfall:** Accepting engagement before verifying management will provide unrestricted access to information. Discovery of scope limitations after acceptance leads to engagement withdrawal or disclaimer of opinion.

**Correct approach:** Obtain explicit written acknowledgment of management responsibilities in engagement letter before commencing fieldwork.

#### 2. Independence assessment (SA 220, Section 141/144)

Independence has TWO dimensions:
- **Independence in mind:** State of mind that permits the auditor to perform the engagement without being affected by influences that compromise professional judgment (actual independence)
- **Independence in appearance:** Avoidance of facts and circumstances that are so significant a reasonable and informed third party would conclude independence is compromised (perceived independence)

Both dimensions must be met. Actual independence alone is insufficient if appearance is compromised.

**Section 141(3) disqualifications - AUTOMATIC disqualifications, not subject to judgment:**
- Officer or employee of the company (automatic disqualification)
- Partner or employee of officer/employee of company (automatic disqualification)
- Indebted to company for Rs. 5 lakhs or more (automatic disqualification)
- Holds security of company (shareholding - automatic disqualification)
- Relative is director/KMP or holds securities of Rs. 1 lakh or more (automatic disqualification)
- Has business relationship with company (renders professional services >Rs. 1 lakh or commercial relationship >10% of gross income)

**Section 144 - Additional restrictions on non-audit services (NAS):**
- Accounting and bookkeeping services (cannot maintain books and then audit them - self-review threat)
- Internal audit (cannot audit own internal audit work)
- Design and implementation of financial information system (cannot audit system you designed)
- Actuarial services (cannot audit own actuarial valuations)
- Investment advisory/banking services (self-interest threat)
- Outsourced CFO/financial functions (management threat)

**If NAS provided by network firm or partner/relative:** May still disqualify per Section 141(4). Must evaluate threat magnitude.

**Common pitfall:** Focusing only on Section 141(3) checklist and missing appearance threats. Independence requires both legal compliance AND professional assessment.

**Correct approach:** Two-stage assessment: (1) Section 141(3)/(4)/144 eligibility screening (go/no-go), then (2) ICAI Code of Ethics five-threat framework (significance and safeguards evaluation).

#### 3. Client acceptance risk factors (SA 220)

**Red flags requiring REJECTION:**
- Management integrity concerns (prior fraud, regulatory sanctions, criminal proceedings against directors)
- Suspected money laundering or illegal activities
- Unreasonable management expectations (insistence on unmodified opinion before audit commenced)
- Scope limitations imposed by management
- Fee pressure indicating insufficient time/resources for quality audit
- Related party transactions with undisclosed beneficial ownership
- Aggressive accounting or earnings management indicators
- Refusal to provide management representation letter

**Yellow flags requiring ADDITIONAL SAFEGUARDS:**
- First-year audit (higher inherent risk - more supervision, specialist involvement)
- Complex transactions (derivatives, SPVs, VIE structures - require specialists)
- Significant estimates (ECL, fair values, deferred tax - more skepticism)
- Lender restrictions or covenant breaches (pressure on management to manipulate)
- Weak control environment (more substantive procedures, larger samples)
- High-risk industry (construction, real estate, finance - inherently risky)

**Common pitfall:** Treating acceptance assessment as binary checklist rather than risk evaluation requiring partner-level judgment.

**Correct approach:** Risk-based assessment with documented rationale for acceptance and identification of specific safeguards for yellow flags.

#### 4. Prior auditor communication (Section 139(8), SA 300)

MANDATORY requirement per Section 139(8) before accepting appointment:
- Request prior auditor in writing for information on professional/other reasons for resignation/non-reappointment
- Prior auditor must respond within 30 days
- Non-response is NOT approval - auditor must make inquiries from other sources

**What to ask prior auditor:**
- Reason for resignation/non-reappointment (independence issue, fee dispute, scope limitation, disagreement with management, integrity concerns)
- Any disagreements with management on accounting or auditing matters
- Communications to those charged with governance regarding fraud, illegal acts, material weaknesses
- Understanding regarding facts that might bear on integrity of management
- Any other professional reasons for not accepting reappointment

**If prior auditor raises concerns:** Carefully evaluate. May require rejection of engagement.

**Common pitfall:** Not following up when prior auditor doesn't respond within 30 days. Non-response is a red flag, not a clearance.

**Correct approach:** If no response within 30 days, make inquiries from bankers, regulatory filings, and other sources. Document inquiries made.

### HOW the command output fits into working papers

**Working paper file structure:**
```
01-Engagement/
├── ENG-001 - Engagement Letter (signed)
├── ENG-002 - Independence Assessment
│   ├── Independence questionnaire (all team members)
│   ├── Threat identification and safeguards
│   ├── Annual independence declarations
│   └── Partner approval of independence conclusion
├── ENG-003 - Client Acceptance Evaluation
│   ├── Acceptance assessment per SA 220
│   ├── Risk factors identified
│   ├── Prior auditor communication (request and response)
│   ├── Background inquiries (bankers, regulatory databases)
│   └── Partner approval to accept engagement
├── ENG-004 - Preconditions for Audit
│   ├── Financial reporting framework acceptability
│   ├── Management acknowledgment of responsibilities
│   └── Engagement terms agreed
└── ENG-005 - Document Request List (issued to client)
```

**Command outputs map to:**
- `/audit:new-engagement` output → ENG-001 (engagement letter), ENG-004 (preconditions), ENG-005 (document request)
- `/audit:independence-check` output → ENG-002 (complete independence documentation)
- `/audit:client-acceptance` output → ENG-003 (acceptance evaluation with partner approval)

**Quality control review checkpoints:**
- ☐ Engagement letter signed by client before fieldwork commenced?
- ☐ Independence assessed for firm, network firms, and all team members?
- ☐ Prior auditor communication completed per Section 139(8)?
- ☐ Risk factors identified and addressed through team composition/procedures?
- ☐ Partner approval documented for both independence and acceptance?

**What happens next in the audit flow:**
1. Engagement acceptance phase COMPLETE → proceed to planning phase (`/audit:materiality`)
2. If risks identified → design additional quality control procedures (more supervision, specialist involvement, second partner review)
3. Throughout audit → monitor for changes requiring reassessment (new scope limitations, management integrity concerns, independence threats)

---

## Materiality Methodology

**Command:** `/audit:materiality`

### WHY this command exists

SA 320 establishes requirements and guidance on materiality in planning and performing an audit. Materiality is THE foundational concept driving the entire audit:
- Sample sizes (performance materiality determines extent of testing)
- Risk assessment thresholds (what's material enough to assess as significant risk?)
- Misstatement evaluation (what aggregate misstatements are material?)
- Reporting decisions (qualified opinion if material, adverse if pervasive)

**Materiality is NOT:**
- A fixed formula (not "always 5% of PBT" - requires judgment)
- Purely quantitative (qualitative factors can make small amounts material)
- Set once and forgotten (must revise if circumstances change)
- The same as "trivial" or "immaterial" (clearly trivial is a separate concept)

### Key SA requirements

- **SA 320.10:** Determine materiality for financial statements as a whole when establishing overall audit strategy
- **SA 320.11:** Determine performance materiality for purposes of assessing risks and designing further procedures
- **SA 320.12-13:** Revise materiality if become aware of information during audit that would have caused different determination initially

### WHAT the auditor should know

#### 1. Overall materiality - professional judgment required

**NOT a formula:** SA 320.A3 states clearly - "Determining materiality involves exercise of professional judgment." There is NO prescribed benchmark or percentage in SA 320.

**Why judgment required:**
- Different entities have different characteristics (profit-focused vs. revenue-focused vs. asset-focused)
- Different users have different information needs (lenders focus on debt service, shareholders focus on earnings, regulators focus on capital adequacy)
- Quantitative benchmarks must be adjusted for qualitative factors (regulatory thresholds, debt covenants, statutory limits)

**Common benchmarks (GUIDANCE, not rules):**

| Benchmark | Typical % | When Appropriate | Example Scenario |
|-----------|-----------|------------------|------------------|
| Profit before tax (PBT) | 5-10% | Profit-oriented entities with stable earnings | Manufacturing, services, trading companies with consistent profitability |
| Revenue | 0.5-2% | Loss-making, startups, volatile profits, thin margins | Startup in growth phase, retailers with <5% net margins, revenue-based lending |
| Total Assets | 1-2% | Asset-intensive entities, investment companies | Real estate, infrastructure projects, holding companies, asset management |
| Gross Profit | 3-5% | Trading entities where gross margin is key metric | Pure traders, retail chains (gross margin more stable than net profit) |
| Net Assets/Equity | 2-5% | Not-for-profit, Section 8 companies | NGOs, trusts, charitable organizations (no profit motive, focus on net worth preservation) |

**Percentage selection within range - not arbitrary:**

**Select LOWER END (conservative):**
- Regulated entities (banks, NBFCs, insurance) - regulators impose stricter requirements
- Public interest entities (listed companies, large unlisted) - more users, more scrutiny
- Lender covenants with tight thresholds (small changes trigger covenant breach)
- First-year engagements (no historical understanding of entity, higher uncertainty)
- High-risk industries (construction, real estate, finance - inherently volatile)

**Select HIGHER END (less conservative):**
- Owner-managed private companies (few external users, owners directly involved)
- Stable industries (mature manufacturing, utilities - low volatility)
- Low assessed risk (strong controls, competent management, no prior issues)
- Recurring engagements with clean track record (no material misstatements historically)

**Common pitfall:** Using fixed formula without entity-specific judgment. Example: "We always use 5% of PBT" applied mechanically without considering user needs or risk profile.

**Correct approach:** Select benchmark and percentage based on entity characteristics, user needs, and risk assessment. Document entity-specific rationale, not generic statements.

#### 2. Performance materiality - NOT optional

Performance materiality is REQUIRED by SA 320.11 - it's not "overall materiality minus a buffer." It serves a specific purpose.

**Purpose per SA 320.11:**
"Performance materiality means the amount or amounts set by the auditor at LESS than materiality for financial statements as a whole to REDUCE TO AN APPROPRIATELY LOW LEVEL the probability that the aggregate of uncorrected and undetected misstatements exceeds overall materiality."

**Translation:** You WILL find misstatements during the audit. Some will be corrected by management (corrected misstatements). Some will be SMALL and you'll identify them (uncorrected misstatements in your schedule). Some will be missed DESPITE your procedures (undetected misstatements - audit risk concept). Performance materiality is set LOW ENOUGH that even if you miss some items, the aggregate still won't exceed overall materiality.

**Why 50-75% of overall materiality:**

**75% (higher performance materiality):**
- Use when you expect FEW misstatements (strong controls, low complexity, good track record)
- RISK: If you find multiple misstatements during audit, aggregate may approach overall materiality quickly
- Appropriate for: Low-risk, well-controlled entities with stable operations

**60-70% (medium performance materiality):**
- Use when you expect SOME misstatements (adequate controls, moderate complexity, some prior year issues)
- RISK: Moderate - provides reasonable buffer
- Appropriate for: Most routine statutory audits

**50% (lower performance materiality):**
- Use when you expect MANY misstatements (weak controls, high complexity, numerous estimates, history of adjustments)
- RISK: Low risk of aggregate exceeding overall materiality
- Appropriate for: High-risk entities, first-year audits, significant fraud risk, many accounting estimates

**Common pitfall:** Setting performance materiality at 75% without justification, then finding aggregate misstatements approach overall materiality during audit.

**Correct approach:** Risk-based performance materiality percentage with documented rationale. First-year audits should default to 50-60% (conservative) absent specific factors justifying higher percentage.

#### 3. Trivial threshold (clearly trivial) - different concept

Per SA 450.5: "The auditor is not required to accumulate misstatements that the auditor believes are CLEARLY TRIVIAL. Clearly trivial is not another expression for not material. Matters that are clearly trivial will be of a wholly different (smaller) order of magnitude, and will be matters that are clearly inconsequential, whether taken individually or in aggregate."

**Purpose:** Administrative efficiency - don't waste time documenting Rs. 500 petty cash errors when materiality is Rs. 10 lakhs.

**Range 3-5% of overall materiality:**

**3% (lower clearly trivial):**
- First-year audits (want to see all items to understand entity's error patterns)
- High-risk entities (accumulation of small items may indicate systemic control issues)
- When you expect many small errors that may aggregate

**5% (higher clearly trivial):**
- Low-risk entities with strong controls
- Recurring engagements with historically few misstatements
- When administrative efficiency important (large audits with many transactions)

**WARNING:** "Clearly trivial" does NOT mean "ignore all small items." If you find 50 items of Rs. 40,000 each (below Rs. 50,000 trivial threshold), aggregate is Rs. 20 lakhs - NOT trivial, requires evaluation.

**Common pitfall:** Using trivial threshold as excuse to not accumulate small misstatements. If pattern emerges (many small items in same area), indicates control deficiency requiring evaluation.

**Correct approach:** Accumulate items above trivial threshold. If pattern of items below threshold emerges, accumulate those as well to assess aggregate effect.

#### 4. Qualitative factors (SA 320.A3)

Quantitative materiality may need to be LOWERED due to qualitative factors:

**Regulatory thresholds (common in India):**
- RBI net worth requirements for NBFCs (Rs. 200 lakhs for Asset Finance Company) - if entity at Rs. 210 lakhs, Rs. 10 lakhs quantitative materiality would be TOO HIGH
- Listing agreement public shareholding requirements (25% minimum) - if at 25.3%, small changes material
- Capital adequacy ratios for banks (CRAR 9% minimum) - if at 9.2%, small changes material

**Debt covenants (very common):**
- Debt-to-equity ratio covenant (e.g., must maintain <2:1) - if current ratio 2.05:1, small changes material
- Interest coverage ratio (e.g., must maintain >2.5x) - if at 2.6x, small profit changes material
- Minimum tangible net worth covenants - if close to threshold, materiality must be below gap

**Statutory thresholds triggering new obligations:**
- CSR applicability (Rs. 5 crore net profit) - if profit at Rs. 5.3 crores, small changes trigger/untrigger CSR
- Section 185/186 limits (60% of paid-up capital + free reserves + securities premium for loans) - if close to limit, small changes material
- Internal financial controls reporting (listed entities) - threshold compliance affects reporting obligations

**Fraud (SA 240.36):**
- ANY AMOUNT involving fraud is material (even Rs. 10,000 fraud is material due to implications for management integrity)
- Intentional misstatements to achieve targets, meet covenants, manipulate EPS - material regardless of amount

**Common pitfall:** Setting materiality purely quantitatively without evaluating qualitative factors. Discovery late in audit that entity is close to covenant breach requires materiality revision and additional procedures.

**Correct approach:** Assess qualitative factors during planning. If regulatory threshold, covenant, or statutory limit is close (within 10-15% of threshold), consider whether quantitative materiality should be lowered.

#### 5. Materiality revision (SA 320.12-13)

**REQUIRED when:**
- Auditor becomes aware of information during audit that would have caused different determination at planning stage
- Actual results differ significantly from planning assumptions (draft PBT Rs. 20 lakhs, actual PBT Rs. 3 lakhs after adjustments)
- Circumstances change (new lender, regulatory investigation, major litigation, planned IPO)

**Variance triggers:**
- <10% variance: Generally no revision needed (unless qualitative factors changed)
- 10-25% variance: Reassess - consider revision if variance is systematic (not one-off item)
- >25% variance: Revision STRONGLY RECOMMENDED

**If materiality LOWERED:**
- CRITICAL: Evaluate whether additional procedures needed for areas already tested
- If testing done at performance materiality of Rs. 15 lakhs, now revised to Rs. 8 lakhs, areas already tested may need ADDITIONAL samples
- Document: Impact analysis + additional procedures performed (or why none needed if performance materiality provided adequate margin)

**If materiality RAISED:**
- No additional procedures typically needed (testing at lower threshold already provides more assurance than revised higher threshold requires)
- Document: Revision rationale + confirmation no additional procedures needed

**Common pitfall:** Not revising materiality when actual results differ significantly from draft. Continuing to apply original materiality leads to over-auditing (if actual higher) or under-auditing (if actual lower).

**Correct approach:** Monitor for variance triggers throughout audit. If draft PBT Rs. 20 lakhs but adjustments identified during fieldwork reduce to Rs. 3 lakhs, revise materiality BEFORE completing fieldwork.

### HOW the command output fits into working papers

**Working paper file structure:**
```
02-Planning/
├── MAT-001 - Materiality Calculation Schedule
│   ├── Benchmark selection rationale (entity-specific, not generic)
│   ├── Percentage selection rationale (risk-based, user-focused)
│   ├── Overall materiality calculation
│   ├── Performance materiality determination
│   ├── Trivial threshold determination
│   ├── Qualitative factors assessment
│   └── Prior year comparison (for recurring engagements)
├── MAT-002 - Materiality Revision Log (populated during audit if revisions occur)
│   ├── Date of revision
│   ├── Trigger for revision (variance from draft, changed circumstances)
│   ├── Impact analysis (which areas affected)
│   ├── Additional procedures required (or justification for none)
│   └── Partner approval of revision
```

**Command output maps to:**
- `/audit:materiality` output → MAT-001 (complete schedule with rationale)
- Revision triggers during audit → MAT-002 (revision log)

**Quality control review checkpoints:**
- ☐ Benchmark selection justified with ENTITY-SPECIFIC rationale (not "we always use PBT")?
- ☐ Percentage within range justified based on risk profile and user needs?
- ☐ Performance materiality between 50-75% with clear rationale for percentage selected?
- ☐ Trivial threshold between 3-5% with justification?
- ☐ Qualitative factors assessed (regulatory thresholds, covenants, statutory limits)?
- ☐ Prior year comparison showing changes and explanations (recurring engagements)?

**What happens next in the audit flow:**
1. Materiality determination COMPLETE → feeds into audit strategy (`/audit:audit-strategy`)
2. Performance materiality → used in risk assessment (`/audit:risk-matrix`) to determine which risks are material
3. Performance materiality → drives sample sizes in audit programs (`/audit:program [area]`)
4. Trivial threshold → determines which misstatements accumulate in misstatement schedule (`/audit:misstatement-schedule`)
5. Monitor for revision triggers throughout audit → revise if needed and document impact

---

## Audit Strategy & Planning Methodology

**Commands:** `/audit:audit-strategy`, `/audit:analytical-review`, `/audit:audit-plan`

### WHY these commands exist

SA 300 requires the auditor to establish an overall audit strategy and develop an audit plan. SA 520 requires the auditor to use analytical procedures as risk assessment procedures. These commands implement the planning phase of the audit.

**Strategy vs. Plan distinction (critical):**
- **Strategy** is the 2-3 page high-level memo setting scope, timing, and direction of the audit
- **Plan** is the detailed procedures document linking risks to specific testing procedures

Many auditors confuse the two or produce only one combined document, but SA 300 requires both.

### Key SA requirements

- **SA 300.7:** Establish overall audit strategy that sets scope, timing, and direction of audit
- **SA 300.9:** Develop audit plan that includes descriptions of nature, timing, extent of planned risk assessment procedures, further audit procedures at assertion level, other planned audit procedures
- **SA 520.6:** Design and perform analytical procedures as risk assessment procedures to obtain understanding of entity and identify areas of higher risk

### WHAT the auditor should know

#### 1. Audit strategy components

**Scope:** What's included in the audit
- Financial statement type (standalone/consolidated)
- Accounting framework (Ind AS, AS, IFRS)
- Additional reporting requirements (CARO 2020, Section 143(3) reporting, tax audit if applicable)
- Areas requiring specialized skills (IT audit, valuation, actuarial, tax)

**Timing:** When audit work will be performed
- Planning phase (weeks 1-2)
- Interim audit if controls reliance approach (weeks 4-6)
- Year-end fieldwork (weeks 8-12)
- Completion and reporting (weeks 13-14)
- Statutory deadlines (AGM, ROC filing, tax audit September 30, file assembly 60 days per SA 230)

**Direction:** Overall approach to the audit
- Controls-reliance vs. substantive-only vs. combined approach by area
- Materiality levels and how they affect scoping
- Preliminary assessment of risks requiring special audit consideration
- Team composition and supervision requirements

**Common pitfall:** Confusing strategy with plan. Strategy is HIGH-LEVEL direction setting. Plan is DETAILED procedures.

**Correct approach:** Strategy is 2-3 pages. Plan is 10-20 pages with detailed procedures by assertion.

#### 2. Analytical procedures as risk assessment procedures

**Four analytical procedure types:**

**Ratio analysis:**
- Liquidity: Current ratio, quick ratio, cash ratio
- Profitability: Gross margin, EBITDA margin, net margin, ROA, ROE
- Leverage: Debt-to-equity, interest coverage, debt service coverage
- Activity: Inventory turnover, receivables days, payables days, asset turnover

**Trend analysis:**
- Compare current year to prior year (absolute and percentage change)
- Multi-year trends (3-5 years if available)
- Comparison to budgets/forecasts (if reliable)
- Industry benchmarks (if available)

**Common-size analysis:**
- Balance sheet as % of total assets
- P&L as % of revenue
- Identifies composition shifts (>5 percentage points = investigate)

**Reasonableness testing:**
- Estimated rental expense based on square footage and market rates
- Estimated interest expense based on average borrowings and interest rates
- Estimated depreciation based on fixed asset base and depreciation policy

**Investigation threshold framework:**
Use LOWER of:
- 10% of performance materiality, OR
- 10% variance from expectation

For significant accounts, use 5% threshold (more sensitive).

**Common pitfall:** Setting investigation thresholds too high. If performance materiality is Rs. 10 lakhs and threshold is 50%, you won't investigate items below Rs. 5 lakhs - may miss significant items.

**Correct approach:** Use LOWER of 10% of performance materiality or 10% variance. For revenue and other significant accounts, use 5%.

#### 3. CARO and tax audit scope integration

**CRITICAL:** CARO 2020 and Section 44AB tax audit are NOT afterthoughts. They affect resource allocation and timing.

**CARO 2020 scope:**
- Applicability assessment (entity type, paid-up capital, borrowings, revenue thresholds)
- If applicable, affects execution phase (CARO 3(vii) statutory dues requires month-by-month aging, CARO 3(i) fixed assets requires physical verification)
- Requires specialized knowledge of Companies Act provisions
- Must be integrated into strategy timing (cannot wait until reporting phase)

**Tax audit scope:**
- If entity subject to Section 44AB (turnover >Rs. 1 crore for business, >Rs. 50 lakhs for profession)
- Form 3CD 44 clauses require specific verification procedures
- GST reconciliation requires GSTR-2B data (month-by-month)
- Statutory dues verification overlaps with CARO 3(vii)
- Timing: Tax audit report due by September 30 (earlier than AGM for March year-end)

**Common pitfall:** Not integrating CARO and tax audit into strategy. Discovery late in audit that CARO applicable requires significant additional procedures.

**Correct approach:** Assess CARO applicability and tax audit requirement during planning. If applicable, reflect in strategy scope, resource allocation, and timing.

### HOW the command output fits into working papers

**Working paper file structure:**
```
02-Planning/
├── STR-001 - Overall Audit Strategy
│   ├── Scope of engagement (FS type, framework, additional reporting)
│   ├── Timing plan (phases, milestones, deadlines)
│   ├── Direction (approach, materiality, preliminary risks, team)
│   └── Partner approval of strategy
├── ANA-001 - Analytical Review
│   ├── Ratio analysis (liquidity, profitability, leverage, activity)
│   ├── Trend analysis (current vs. prior, multi-year)
│   ├── Common-size analysis (composition shifts)
│   ├── Investigation thresholds applied
│   ├── Unusual items identified (for risk assessment)
│   └── Going concern indicators (if any)
├── PLN-001 - Detailed Audit Plan
│   ├── Risk assessment procedures by area
│   ├── Further audit procedures by area and assertion
│   ├── Sample sizes and selection methods
│   ├── Timing of procedures (interim vs. year-end)
│   └── Team member assignments
```

**Command outputs map to:**
- `/audit:audit-strategy` output → STR-001 (strategy memo)
- `/audit:analytical-review` output → ANA-001 (analytical procedures)
- `/audit:audit-plan` output → PLN-001 (detailed plan)

**Quality control review checkpoints:**
- ☐ Strategy distinguishes clearly between scope, timing, and direction (not combined with plan)?
- ☐ CARO and tax audit scope integrated into strategy if applicable?
- ☐ Analytical procedures investigation thresholds appropriate (LOWER of 10% PM or 10% variance)?
- ☐ Unusual items from analytical review carried forward to risk assessment?
- ☐ Audit plan links risks to specific procedures by assertion (not generic)?
- ☐ Partner approval of strategy before fieldwork commenced?

**What happens next in the audit flow:**
1. Strategy and planning COMPLETE → proceed to risk assessment (`/audit:risk-matrix`, `/audit:fraud-risk`)
2. Unusual items from analytical review → considered in inherent risk assessment
3. Audit plan → guides execution phase (`/audit:program [area]` for each area)

---

## Risk Assessment Methodology

**Commands:** `/audit:risk-matrix`, `/audit:fraud-risk`, `/audit:significant-risks`

### WHY these commands exist

SA 315 (Revised 2019) requires the auditor to identify and assess risks of material misstatement at the financial statement level and assertion level. SA 240 requires identification of fraud risks. SA 330 requires responsive procedures for all identified risks.

**Risk assessment is THE foundation of the entire audit approach.** Higher-risk areas require:
- More persuasive evidence (tests of details rather than analytical procedures)
- Larger sample sizes
- More experienced staff (manager/partner involvement)
- Current period testing (cannot rely solely on prior year work)

### Key SA requirements

- **SA 315.5:** Assess risks of material misstatement on a SPECTRUM from low to high for each assertion
- **SA 315.13:** Identify and assess inherent risk separately from control risk (spectrum-based approach)
- **SA 240.26:** Presume fraud risk exists in revenue recognition (rebuttable)
- **SA 240.31:** Identify risk of management override of controls (not rebuttable)
- **SA 330.7(b):** Design and perform further audit procedures responsive to assessed risks at assertion level

### WHAT the auditor should know

#### 1. Inherent risk assessment (SPECTRUM concept - SA 315 Revised 2019)

**CRITICAL CHANGE in SA 315 (Revised 2019):** Inherent risk must be assessed on a SPECTRUM from low to high BEFORE considering any controls.

This is a significant shift from prior approach where risk was assessed as "high" or "not high" (binary) and controls were considered simultaneously.

**Inherent risk factors (assess BEFORE controls):**
- **Complexity:** Simple, routine transactions (Low) vs. complex requiring technical analysis (High)
- **Subjectivity:** Observable market prices (Low) vs. unobservable inputs requiring judgment (High)
- **Change:** Stable, unchanged (Low) vs. new transactions/systems/standards (High)
- **Susceptibility to fraud:** Low inherent fraud susceptibility (Low) vs. high incentive/opportunity (High)
- **Uncertainty:** Low estimation uncertainty (Low) vs. wide range of outcomes (High)
- **Susceptibility to management bias:** Objective, verifiable (Low) vs. significant judgment and potential bias (High)

**Inherent Risk Rating:** H (High - upper end of spectrum) / M (Medium - mid-spectrum) / L (Low - lower end of spectrum)

**Common pitfall:** Considering controls when assessing inherent risk. Example: "Inherent risk is Low because entity has strong control environment" - WRONG. Control environment affects CONTROL RISK, not inherent risk.

**Correct approach:** Assess inherent risk based ONLY on nature of item (complexity, subjectivity, change, fraud susceptibility, uncertainty, management bias). Then separately assess control risk.

#### 2. Assertion-level risk assessment (SA 315, SA 330)

Risk must be assessed for ALL SEVEN assertions (not just at financial statement line item level):

1. **Existence/Occurrence:** Asset/liability exists, transaction occurred
2. **Completeness:** All items recorded
3. **Valuation/Accuracy:** Amounts appropriately measured
4. **Rights and Obligations:** Entity owns/controls assets, owes liabilities
5. **Cut-off:** Transactions recorded in correct period
6. **Classification:** Items properly classified
7. **Presentation and Disclosure:** Items properly presented and disclosed

**Example: Trade receivables**
- **Existence:** Medium (customer may dispute invoice)
- **Completeness:** Low (incentive to understate receivables is limited)
- **Valuation:** High (ECL requires significant judgment)
- **Rights:** Low (ownership typically clear)
- **Cut-off:** Medium (risk of early recognition)
- **Classification:** Low (current vs. non-current is straightforward)
- **Disclosure:** Medium (related party, aging, ECL disclosures complex)

**Common pitfall:** Assessing risk only at line item level ("Trade receivables: Medium risk") without assertion-level breakdown. Leads to inappropriate procedures (testing existence when valuation is the real risk).

**Correct approach:** Assess each assertion separately. Design procedures responsive to specific assertions at risk.

#### 3. Fraud risk assessment (SA 240)

**Two presumed fraud risks (ALWAYS assess):**

**Presumed Risk 1: Revenue recognition (SA 240.26) - REBUTTABLE**
- Presumption is that fraud risk exists in revenue recognition
- Can be rebutted ONLY if documented reason (e.g., simple cash sales with no credit terms)
- If not rebutted, must identify WHICH revenue types and WHICH assertions pose fraud risk
- Common fraud schemes: Channel stuffing, early recognition, fictitious sales, side agreements, improper cutoff

**Presumed Risk 2: Management override of controls (SA 240.31) - NOT REBUTTABLE**
- Management can override controls regardless of control environment strength
- ALWAYS a risk requiring responsive procedures
- Common override methods: Journal entries (especially near year-end), management estimates (bias in assumptions), unusual transactions (related party or SPVs)

**Common pitfall:** Treating fraud risk assessment as compliance checklist. Example: "We assessed fraud risk per SA 240" without identifying specific fraud risks and responsive procedures.

**Correct approach:** Identify specific fraud risk scenarios (what could go wrong, what incentive/opportunity exists, what assertions affected) and design specific responsive procedures.

#### 4. Significant risks (SA 315.27, SA 330.21)

**Definition per SA 315.27:** Risk requiring special audit consideration (close to upper end of inherent risk spectrum).

**Characteristics:**
- Risk of fraud
- Related to recent significant economic, accounting, or other developments
- Complexity of transactions
- Significant transactions with related parties
- High degree of subjectivity in financial information (especially fair value, ECL)
- Significant transactions outside normal course of business

**Constraints per SA 330.21:**
- **CANNOT rely solely on substantive analytical procedures** (must use tests of details)
- **IF controls reliance approach, MUST test controls in current period** (cannot rely on prior year control testing)

**Common pitfall:** Identifying too many significant risks (dilutes focus) or too few (misses areas requiring special attention). Rule of thumb: 20-30% of material areas should be significant risks.

**Correct approach:** Reserve "significant risk" designation for genuinely high-end spectrum risks. Not every High inherent risk is a significant risk - only those requiring SPECIAL audit consideration.

### HOW the command output fits into working papers

**Working paper file structure:**
```
03-Risk-Assessment/
├── RISK-001 - Risk Assessment Matrix
│   ├── All significant areas listed
│   ├── Inherent risk by assertion (spectrum-based, BEFORE controls)
│   ├── Control risk by assertion (after evaluating relevant controls)
│   ├── Combined risk of material misstatement by assertion
│   └── Risk ratings: H/M/L with documented rationale
├── RISK-002 - Fraud Risk Assessment
│   ├── Revenue recognition fraud risk (presumed, unless rebutted)
│   ├── Management override fraud risk (always present)
│   ├── Other fraud risks identified (if any)
│   ├── Fraud triangle assessment (incentive, opportunity, rationalization)
│   └── Responsive procedures for each fraud risk
├── RISK-003 - Significant Risks Identification
│   ├── List of significant risks (areas requiring special audit consideration)
│   ├── Rationale for each (why close to upper end of spectrum)
│   ├── SA 330.21 constraints noted (ToD mandatory, current period controls testing if reliance)
│   └── Responsive procedures designed
```

**Command outputs map to:**
- `/audit:risk-matrix` output → RISK-001 (comprehensive risk matrix)
- `/audit:fraud-risk` output → RISK-002 (fraud risk assessment)
- `/audit:significant-risks` output → RISK-003 (significant risks)

**Quality control review checkpoints:**
- ☐ Inherent risk assessed BEFORE controls (no control environment references in inherent risk rationale)?
- ☐ All seven assertions assessed for each material area?
- ☐ Revenue recognition fraud risk addressed (rebutted with documentation, or responsive procedures designed)?
- ☐ Management override fraud risk responsive procedures included?
- ☐ Significant risks identified with rationale (special audit consideration required)?
- ☐ SA 330.21 constraints applied to significant risks (ToD mandatory, current controls testing)?

**What happens next in the audit flow:**
1. Risk assessment COMPLETE → feeds into audit plan (`/audit:audit-plan`)
2. Significant risks → drive detailed testing programs (`/audit:program [area]` with enhanced procedures)
3. Fraud risks → require element of unpredictability in procedures per SA 240.30

---

## Audit Program & Testing Methodology

**Commands:** `/audit:program [area]`, `/audit:sampling`, `/audit:sample-evaluate`

### WHY these commands exist

SA 330 requires the auditor to design and perform further audit procedures responsive to assessed risks. SA 530 provides guidance on audit sampling. SA 500 establishes requirements for audit evidence.

These commands implement the execution phase - translating risk assessment into specific testing procedures with appropriate sample sizes.

### Key SA requirements

- **SA 330.6:** Design overall responses to assessed risks at financial statement level
- **SA 330.7:** Design further audit procedures (tests of controls, substantive procedures) responsive to assessed risks at assertion level
- **SA 530.6:** When sampling, design sample that provides reasonable basis for conclusions about population
- **SA 530.14:** Evaluate results of audit sampling to determine whether preliminary assessment of characteristic of population has been confirmed or needs revision

### WHAT the auditor should know

#### 1. Risk-responsive procedures (SA 330.7)

**Nature of procedures (WHAT you do):**
- **Higher risk:** Tests of details (more persuasive evidence)
- **Lower risk:** Substantive analytical procedures (less persuasive, but sufficient if risk is low)
- **Significant risk:** MUST use tests of details (cannot rely solely on analytical procedures per SA 330.21)

**Timing of procedures (WHEN you do it):**
- **Higher risk:** Current period testing (year-end or close to year-end)
- **Lower risk:** Interim testing acceptable (with rollforward procedures)
- **Significant risk with controls reliance:** MUST test controls in current period (cannot rely on prior year)

**Extent of procedures (HOW MUCH you test):**
- **Higher risk:** Larger samples, more items tested
- **Lower risk:** Smaller samples, fewer items tested
- **Significant risk:** Sample size at upper end of range for risk level

**Team involvement:**
- **Higher risk:** More experienced staff (manager/partner)
- **Lower risk:** Less experienced staff with appropriate review
- **Significant risk:** Partner involvement in planning, execution oversight, or review

**Common pitfall:** Using same procedures for all areas regardless of risk. Example: Same sample size for all balance sheet items.

**Correct approach:** Vary nature, timing, extent, and team based on assessed risk by assertion.

#### 2. Sampling methods (SA 530)

**When to use statistical sampling:**
- **Monetary Unit Sampling (MUS):** Best for testing OVERSTATEMENT (assets, revenue). Sample selection biased toward larger items.
- **Classical Variables Sampling:** Best for testing UNDERSTATEMENT (liabilities, expenses). Unbiased sample.
- **Attribute Sampling:** Best for testing CONTROLS (whether control operates effectively).

**When to use non-statistical sampling:**
- Small populations (<30 items)
- Low-risk areas where statistical precision not required
- When professional judgment on sample composition is more important than statistical calculation

**Sample size factors (SA 530.A12):**
- **Risk of material misstatement:** Higher risk → larger sample
- **Tolerable misstatement:** Lower tolerance → larger sample (inverse relationship)
- **Expected misstatement:** Higher expected → larger sample (need more items to project population error)
- **Population size:** Minimal effect on sample size once population exceeds 250 items
- **Stratification:** Can reduce sample size by dividing population into homogeneous subgroups

**Common pitfall:** Using arbitrary sample sizes. Example: "We tested 20 items" without reference to risk, tolerable misstatement, or population characteristics.

**Correct approach:** Use structured risk factor table or statistical formula. Document basis for sample size.

#### 3. Sample evaluation (SA 530.14)

**Projection of misstatements to population:**

If you find misstatements in sample, you MUST project to population (unless population is fully tested).

**MUS projection method:**
- For items containing misstatement: Project proportionally (misstatement % × population)
- For items without misstatement: Assume population misstatement = sample misstatement rate × total population

**Classical variables projection:**
- Calculate sample mean error and standard deviation
- Project to population with confidence interval
- More complex than MUS but provides statistical precision

**Non-statistical projection:**
- Project sample error rate to population
- Example: 5 misstatements in 60 sample items = 8.33% error rate. If population is 1,000 items, projected misstatement is 83 items.

**Common pitfall:** Not projecting sample misstatements to population. Discovery of 3 misstatements totaling Rs. 50,000 in sample doesn't mean population misstatement is Rs. 50,000 - must project.

**Correct approach:** ALWAYS project sample misstatements to population. Evaluate whether projected misstatement (plus sampling risk) is below performance materiality.

### HOW the command output fits into working papers

**Working paper file structure:**
```
04-Execution/
├── [Area Name]/ (e.g., Trade-Receivables)
│   ├── PROG-[Area]-001 - Audit Program
│   │   ├── Risk assessment summary (from RISK-001)
│   │   ├── Audit objectives by assertion
│   │   ├── Detailed procedures by assertion
│   │   ├── Sample sizes and selection methods
│   │   ├── Red flags to watch for
│   │   └── Assertion coverage matrix (quality control)
│   ├── SAMP-[Area]-001 - Sample Selection
│   │   ├── Population description (source, completeness verified)
│   │   ├── Sample size calculation (risk factors, formula)
│   │   ├── Selection method (random, systematic, MUS, judgmental)
│   │   ├── Items selected (list with identifying information)
│   │   └── Rationale for sample size and method
│   ├── TEST-[Area]-001 to 999 - Testing Documentation
│   │   ├── Each sample item tested (procedure, evidence obtained, conclusion)
│   │   ├── Exceptions noted (misstatements, control deficiencies)
│   │   └── Follow-up on exceptions
│   ├── EVAL-[Area]-001 - Sample Evaluation
│   │   ├── Summary of exceptions found
│   │   ├── Projection of misstatements to population
│   │   ├── Evaluation against performance materiality
│   │   ├── Qualitative evaluation (nature and cause of misstatements)
│   │   ├── Implications for risk assessment (revised if needed)
│   │   └── Conclusion on assertion
```

**Command outputs map to:**
- `/audit:program [area]` output → PROG-[Area]-001 (audit program)
- `/audit:sampling` output → SAMP-[Area]-001 (sample calculation)
- `/audit:sample-evaluate` output → EVAL-[Area]-001 (evaluation)

**Quality control review checkpoints:**
- ☐ Audit program procedures responsive to assessed risks by assertion?
- ☐ Sample size justified based on risk factors (not arbitrary)?
- ☐ Sample selection method appropriate for objective (MUS for overstatement, classical for understatement)?
- ☐ Exceptions found during testing documented with follow-up?
- ☐ Misstatements projected to population (not just summed)?
- ☐ Projected misstatements below performance materiality?

**What happens next in the audit flow:**
1. Testing programs COMPLETE for all areas → proceed to completion procedures (`/audit:going-concern`, `/audit:estimates-review`, `/audit:subsequent-events`)
2. Misstatements identified → accumulate in misstatement schedule (`/audit:misstatement-schedule`)
3. Control deficiencies identified → communicate in management letter (`/audit:management-letter`)

---

## Going Concern Methodology

**Command:** `/audit:going-concern`

### WHY this command exists

SA 570 (Revised 2024) requires the auditor to evaluate management's assessment of the entity's ability to continue as a going concern and conclude whether a material uncertainty exists.

Going concern affects EVERY AUDIT - not just financially distressed entities. The auditor must conclude in EVERY audit whether material uncertainty exists.

### Key SA requirements

- **SA 570.10:** Evaluate management's assessment of going concern (at least 12 months from balance sheet date)
- **SA 570.16:** If events/conditions identified that may cast significant doubt, perform additional procedures
- **SA 570.20:** Conclude whether material uncertainty exists requiring disclosure
- **SA 570.22:** If material uncertainty exists and adequately disclosed, unmodified opinion with separate "Material Uncertainty Related to Going Concern" section

### WHAT the auditor should know

#### 1. Going concern indicator assessment

**Three indicator categories (SA 570.A2-A3):**

**Financial indicators (8 indicators):**
- Net liability position or net current liability position
- Fixed-term borrowings approaching maturity without realistic prospects of renewal/repayment
- Indications of withdrawal of financial support by creditors
- Negative operating cash flows indicated by historical or prospective financial statements
- Adverse key financial ratios
- Substantial operating losses or deterioration in asset values
- Arrears or discontinuance of dividends
- Inability to pay creditors on due dates

**Operating indicators (7 indicators):**
- Management intentions to liquidate entity or cease operations
- Loss of key management without replacement
- Loss of major market, key customer(s), franchise, license, or principal supplier(s)
- Labor difficulties
- Shortages of important supplies
- Emergence of highly successful competitor
- Non-compliance with capital or other statutory requirements

**Other indicators (6 indicators):**
- Non-compliance with statutory requirements (including capital adequacy)
- Pending legal or regulatory proceedings that may result in claims entity unlikely to satisfy
- Changes in law or regulation or government policy expected to adversely affect entity
- Uninsured or underinsured catastrophe occurrence
- Political instability in country of operations
- Natural disasters adversely affecting operations

**Severity ratings:** High (immediate threat to going concern) / Medium (could affect going concern if not addressed) / Low (noted but not significant)

**Common pitfall:** Not performing going concern assessment for profitable entities. SA 570 requires assessment for EVERY audit, not just loss-making entities.

**Correct approach:** Checklist-based assessment of all indicators for every engagement. Profitable entities may still have going concern issues (liquidity problems, regulatory issues, etc.).

#### 2. Management plan evaluation with professional skepticism

If indicators identified, management will provide plans to address. Auditor must evaluate with PROFESSIONAL SKEPTICISM.

**Evaluation criteria:**
- **Feasibility:** Is plan realistic given entity's circumstances and industry conditions?
- **Completeness:** Does plan address all identified indicators?
- **Assumptions:** Are forecast assumptions reasonable? Compare to historical track record.
- **Timeline:** Is timing achievable?
- **Commitment:** Are plans binding (signed agreements) or aspirational (intentions)?

**Cash flow forecast scrutiny:**
- **Retrospective review:** Compare prior forecasts to actual. If management historically optimistic, increase skepticism.
- **Sensitivity analysis:** What if revenue 10% lower or costs 10% higher? Does forecast survive stress testing?
- **Covenant compliance:** Will forecast results maintain compliance with debt covenants?

**Common pitfall:** Accepting management forecasts without challenge. Management has incentive to be optimistic.

**Correct approach:** Challenge key assumptions in forecast. Test historical accuracy of management forecasts. Obtain corroborating evidence (binding commitments, not intentions).

#### 3. Audit report implications (4 scenarios)

**Scenario 1: No material uncertainty, no significant doubt**
- Unmodified opinion, no modification or separate section

**Scenario 2: Material uncertainty exists, adequately disclosed**
- Unmodified opinion (financial statements are fairly presented)
- Separate section "Material Uncertainty Related to Going Concern" per SA 570.22
- This is NOT a qualified opinion - separate section draws attention but opinion is unmodified

**Scenario 3: Material uncertainty exists, inadequate disclosure**
- Qualified or adverse opinion (depending on pervasiveness)
- Basis for Qualified/Adverse Opinion paragraph describes inadequate disclosure

**Scenario 4: Management refuses to perform going concern assessment**
- Qualified opinion (scope limitation) or disclaimer (if pervasive)
- Basis paragraph describes scope limitation

**Common pitfall:** Treating material uncertainty as qualified opinion. Material uncertainty with adequate disclosure gets UNMODIFIED opinion with separate section per SA 570.22, NOT qualified opinion.

**Correct approach:** If material uncertainty adequately disclosed, use separate "Material Uncertainty Related to Going Concern" section. Opinion paragraph remains unmodified.

### HOW the command output fits into working papers

**Working paper file structure:**
```
05-Completion/
├── GC-001 - Going Concern Assessment
│   ├── Management's assessment reviewed (at least 12 months from balance sheet date)
│   ├── Indicator checklist (Financial 8, Operating 7, Other 6)
│   ├── Severity rating for each indicator identified
│   ├── Management plans evaluated (if indicators exist)
│   ├── Cash flow forecast review (if applicable)
│   ├── Additional procedures performed (if material uncertainty suspected)
│   ├── Conclusion on material uncertainty (exists / does not exist)
│   └── Audit report implications (which scenario applies)
```

**Command output maps to:**
- `/audit:going-concern` output → GC-001 (complete assessment)

**Quality control review checkpoints:**
- ☐ Going concern assessment performed (even if entity profitable)?
- ☐ All indicator categories assessed (Financial, Operating, Other)?
- ☐ Management plans evaluated with professional skepticism (if indicators exist)?
- ☐ Cash flow forecast challenged (assumptions tested, retrospective review performed)?
- ☐ Conclusion on material uncertainty clearly documented?
- ☐ Audit report implication identified (which of 4 scenarios)?

**What happens next in the audit flow:**
1. Going concern assessment COMPLETE → conclusion feeds into audit report (`/audit:draft-report`)
2. If material uncertainty exists and adequately disclosed → separate section in audit report per SA 570.22
3. If material uncertainty exists and inadequately disclosed → qualified or adverse opinion

---

## Accounting Estimates Methodology

**Command:** `/audit:estimates-review`

### WHY this command exists

SA 540 (Revised) establishes requirements for auditing accounting estimates. Accounting estimates are high-risk areas because they involve:
- Management judgment (subjectivity)
- Estimation uncertainty (wide range of possible outcomes)
- Complexity (technical accounting and valuation models)

### Key SA requirements

- **SA 540.13:** Assess inherent risk separately for each accounting estimate (three inherent risk factors: complexity, subjectivity, estimation uncertainty)
- **SA 540.18:** For estimates with higher inherent risk, use one or more of three approaches to test the estimate
- **SA 540.21:** Assess all accounting estimates for indicators of possible management bias

### WHAT the auditor should know

#### 1. Three inherent risk factors (SA 540.13) - assess BEFORE controls

For EACH significant accounting estimate, assess three inherent risk factors:

**Estimation uncertainty:**
- Low: Narrow range of possible outcomes (e.g., warranty provision with stable historical claims rate)
- High: Wide range of possible outcomes (e.g., fair value of unquoted equity investment, ECL for stressed portfolio)

**Subjectivity:**
- Low: Observable market data or inputs (e.g., fair value of listed securities, NRV based on market prices)
- High: Unobservable inputs requiring significant management judgment (e.g., discount rates for impairment testing, ECL assumptions for new product)

**Complexity:**
- Low: Simple calculations (e.g., depreciation based on straight-line method)
- High: Complex models or multiple assumptions (e.g., ECL multi-stage model, defined benefit obligation actuarial valuation)

**Common estimates to assess:**
- Expected Credit Loss (ECL) provisions - Trade receivables, loans
- Impairment testing - Goodwill, intangibles, PPE, investments
- Fair value measurements - Financial instruments, business combinations, share-based payments
- Net Realizable Value (NRV) - Inventory
- Useful life estimates - PPE, intangibles (affects depreciation/amortization)
- Provisions - Warranties, litigation, restructuring, onerous contracts, decommissioning
- Employee benefits - Gratuity, leave encashment (actuarial assumptions)

**Common pitfall:** Not assessing inherent risk separately for each estimate type. ECL and impairment have different risk profiles requiring different approaches.

**Correct approach:** Assess three inherent risk factors separately for EACH estimate. Higher inherent risk → more persuasive procedures required.

#### 2. Three testing approaches (SA 540.18)

For estimates with higher inherent risk, use one or more approaches:

**Approach 1: Obtain evidence from events occurring up to the date of auditor's report**
- Use SUBSEQUENT EVENTS as evidence of estimate reasonableness
- Example: Trade receivables ECL at March 31, 2026. If customer paid in April 2026, supports estimate. If customer filed insolvency in April 2026, contradicts estimate.
- **Best when:** Short time period between balance sheet date and audit report date, events provide persuasive evidence

**Approach 2: Test how management made the estimate**
- Test data used (completeness, accuracy, relevance)
- Test assumptions used (reasonableness, consistency)
- Test model used (appropriate, correctly applied)
- Example: For ECL, test aging data completeness, test PD/LGD assumptions against historical data, test model calculations.
- **Best when:** Management has robust process, data and assumptions testable, auditor has ability to evaluate model

**Approach 3: Develop auditor's independent estimate or range**
- Auditor develops own estimate using different data, assumptions, or model
- Compare to management estimate
- If within auditor's range, reasonable. If outside, investigate difference.
- Example: For NRV, auditor independently determines market price and selling costs, compares to management estimate.
- **Best when:** Auditor has access to independent data, auditor has expertise (or uses expert), management process weak

**Common pitfall:** Using Approach 2 only (testing management process) without considering Approach 1 (subsequent events) or Approach 3 (independent estimate). Approach 2 alone may not provide sufficient evidence for high-risk estimates.

**Correct approach:** For significant estimates with higher inherent risk, consider ALL three approaches. Often combination of approaches provides most persuasive evidence.

#### 3. Management bias assessment (SA 540.21)

Assess ALL accounting estimates (not just individually material ones) for indicators of possible management bias.

**Why assess across all estimates:** Pattern of bias may not be apparent when looking at individual estimates, but becomes clear when viewing all estimates together.

**Indicators of possible management bias:**
- **Directional bias:** All estimates are conservative (understate assets, overstate liabilities) or optimistic (overstate assets, understate liabilities)
- **Selective application:** Management applies different methods/assumptions for similar estimates without justification
- **Inconsistency:** Estimates inconsistent with historical experience without explanation
- **Changes in methods/assumptions:** Unjustified changes that improve reported results
- **Motivation:** Management has incentive to achieve targets (bonus, covenant compliance, IPO valuation)

**If management bias suspected:**
- Discuss with management (obtain explanations)
- Perform additional procedures (more extensive testing, obtain independent data)
- Consider implications for control environment and fraud risk
- If material and pervasive, consider qualified or adverse opinion

**Common pitfall:** Not assessing management bias across all estimates. Focus only on individual estimate reasonableness, miss pattern of bias.

**Correct approach:** Create summary table of all estimates showing direction of difference between management estimate and auditor expectation. Look for patterns.

### HOW the command output fits into working papers

**Working paper file structure:**
```
05-Completion/
├── EST-001 - Accounting Estimates Review
│   ├── List of all significant estimates identified
│   ├── Three inherent risk factors assessed for each (estimation uncertainty, subjectivity, complexity)
│   ├── For each estimate:
│   │   ├── Description of estimate and accounting policy
│   │   ├── Approach(es) used (Approach 1, 2, 3 or combination)
│   │   ├── Procedures performed
│   │   ├── Evidence obtained
│   │   ├── Auditor's conclusion on reasonableness
│   │   └── Difference from management (if any)
│   ├── Management bias assessment across all estimates
│   │   ├── Directional pattern analysis
│   │   ├── Indicators of bias identified (if any)
│   │   ├── Management explanations obtained
│   │   └── Implications for opinion
│   └── Overall conclusion on accounting estimates
```

**Command output maps to:**
- `/audit:estimates-review` output → EST-001 (complete review)

**Quality control review checkpoints:**
- ☐ All significant accounting estimates identified?
- ☐ Three inherent risk factors assessed for each estimate (NOT just "high/medium/low")?
- ☐ Appropriate testing approach selected based on inherent risk (higher risk → Approach 1/3, not just Approach 2)?
- ☐ Management bias assessed ACROSS ALL estimates (not just individually)?
- ☐ If bias indicators identified, additional procedures performed?
- ☐ Estimates with significant differences investigated and resolved?

**What happens next in the audit flow:**
1. Estimates review COMPLETE → significant differences accumulate in misstatement schedule (`/audit:misstatement-schedule`)
2. Management bias concerns → affects risk assessment and professional skepticism throughout audit
3. Estimates conclusion → feeds into overall opinion formation (`/audit:draft-report`)

---

## Subsequent Events & Misstatement Methodology

**Commands:** `/audit:subsequent-events`, `/audit:misstatement-schedule`

### WHY these commands exist

SA 560 requires the auditor to perform procedures to identify events between balance sheet date and auditor's report date. SA 450 requires accumulation and evaluation of misstatements identified during the audit.

These are completion procedures that affect the auditor's opinion.

### Key SA requirements

- **SA 560.6:** Perform procedures to identify events between balance sheet date and auditor's report date requiring adjustment or disclosure
- **SA 560.10:** Respond appropriately to facts that become known after auditor's report date but before financial statements issued
- **SA 450.5:** Accumulate misstatements identified (except clearly trivial)
- **SA 450.11:** Evaluate whether aggregate uncorrected misstatements are material

### WHAT the auditor should know

#### 1. Three-period framework (SA 560)

**Period 1: Balance sheet date to auditor's report date - ACTIVE procedures required**

Auditor MUST perform procedures:
- Inquire of management regarding subsequent events
- Read board minutes and management accounts for post-year-end period
- Read interim financial statements (if available)
- Inquire of legal counsel regarding litigation
- Perform search for unrecorded liabilities
- Review cash receipts/payments after year-end

**Period 2: Auditor's report date to financial statements issuance - RESPOND if known**

No active procedures required, BUT if auditor becomes aware of fact that would have affected audit report:
- Discuss with management
- Determine if financial statements need amendment
- If amended, perform procedures on amendment and issue new audit report
- If not amended and material, consider legal obligations (inform TCWG, prevent reliance on report)

**Period 3: After financial statements issued - RESPOND if known**

If auditor becomes aware of fact that existed at report date and would have changed audit report:
- Discuss with TCWG
- Determine if financial statements need amendment
- If amended and reissued, perform procedures and issue new audit report with dual dating
- If not amended, consider legal obligations

**Common pitfall:** Confusing Period 1 (active procedures) with Period 2/3 (respond if known). Period 1 requires ACTIVE procedures. Periods 2/3 require response only if auditor BECOMES AWARE.

**Correct approach:** Perform active procedures (inquiries, reading minutes/accounts, legal letter) through date of auditor's report. After that, respond only if information comes to attention.

#### 2. Adjusting vs. non-adjusting event classification (Ind AS 10)

**Adjusting events (require financial statement amendment):**
- Provide evidence of conditions that existed at balance sheet date
- Examples:
  - Customer bankruptcy in April 2026 regarding receivable outstanding at March 31, 2026 (provides evidence of impairment at balance sheet date)
  - Settlement of lawsuit in May 2026 for amount different from provision at March 31, 2026 (provides evidence of obligation at balance sheet date)
  - Discovery of fraud occurring before year-end (condition existed at balance sheet date)

**Non-adjusting events (require disclosure only if material):**
- Indicative of conditions that arose AFTER balance sheet date
- Examples:
  - Fire destroying factory in April 2026 (condition arose after March 31, 2026)
  - Acquisition of subsidiary in May 2026 (arose after year-end)
  - Major litigation commenced after year-end (arose after balance sheet date)
  - Decline in market value of investments after year-end (arose after balance sheet date)

**Borderline cases (judgment required):**
- Customer bankruptcy for receivable outstanding at year-end: Is it evidence of condition at year-end (gradual deterioration) or new condition (sudden shock)?
- Inventory NRV: Fire destroyed inventory after year-end - adjusting or non-adjusting? Depends on whether obsolescence existed at year-end.

**Common pitfall:** Incorrect classification. Example: Treating customer bankruptcy as non-adjusting when gradual deterioration pattern indicates condition existed at balance sheet date.

**Correct approach:** Evaluate whether event provides evidence of condition at balance sheet date (adjusting) or indicates condition arising after balance sheet date (non-adjusting). For gradual deterioration, typically adjusting. For sudden shock, typically non-adjusting.

#### 3. Misstatement accumulation and evaluation (SA 450)

**Accumulate ALL misstatements above trivial threshold:**
- Factual misstatements (objectively wrong - e.g., inventory count error)
- Judgmental misstatements (difference in judgment - e.g., auditor's ECL estimate differs from management)
- Projected misstatements (extrapolation from sample to population)

**Evaluate individually and in aggregate:**

**Individual evaluation:**
- Is any single misstatement material? If yes, request management correction or modify opinion.

**Aggregate evaluation:**
- Sum all uncorrected misstatements (factual + judgmental + projected)
- Compare to overall materiality
- Consider qualitative factors (fraud, breach of regulation, covenant compliance, trend reversal)

**Decision framework:**
- Aggregate uncorrected < overall materiality → Unmodified opinion (but must be BELOW materiality, not equal)
- Aggregate uncorrected > overall materiality AND not pervasive → Qualified opinion
- Aggregate uncorrected > overall materiality AND pervasive → Adverse opinion

**Common pitfall:** Not projecting sample misstatements to population. Discovery of Rs. 50,000 misstatement in sample doesn't mean population misstatement is Rs. 50,000.

**Correct approach:** Project ALL sample misstatements to population. Accumulate projected amounts in misstatement schedule. Evaluate aggregate against materiality.

### HOW the command output fits into working papers

**Working paper file structure:**
```
05-Completion/
├── SE-001 - Subsequent Events Review
│   ├── Period 1 procedures performed (through auditor's report date)
│   │   ├── Management inquiry documentation
│   │   ├── Board minutes reviewed (dates)
│   │   ├── Management accounts reviewed (periods)
│   │   ├── Legal letter (dated close to audit report date)
│   │   ├── Unrecorded liabilities search results
│   │   └── Cash receipts/payments review
│   ├── Events identified (if any)
│   │   ├── Description of event
│   │   ├── Classification (adjusting vs. non-adjusting)
│   │   ├── Financial statement impact (adjustment or disclosure)
│   │   └── Auditor's conclusion
│   └── Period 2/3 considerations (if applicable after report date)
├── MIS-001 - Misstatement Schedule
│   ├── Summary of uncorrected misstatements
│   │   ├── Balance sheet impact (assets, liabilities, equity)
│   │   ├── P&L impact (income, expenses, PBT)
│   │   ├── Source (area of audit, factual/judgmental/projected)
│   │   └── Management's response (waived correction with reason)
│   ├── Summary of corrected misstatements (for reference)
│   ├── Aggregate evaluation
│   │   ├── Sum of uncorrected misstatements
│   │   ├── Comparison to overall materiality
│   │   ├── Qualitative factors assessment
│   │   └── Conclusion on opinion impact
│   └── Communication to TCWG (uncorrected misstatements letter)
```

**Command outputs map to:**
- `/audit:subsequent-events` output → SE-001 (subsequent events review)
- `/audit:misstatement-schedule` output → MIS-001 (misstatement schedule)

**Quality control review checkpoints:**
- ☐ Period 1 active procedures performed through date of auditor's report?
- ☐ Events identified classified correctly (adjusting vs. non-adjusting)?
- ☐ All misstatements above trivial threshold accumulated (including projected)?
- ☐ Aggregate uncorrected misstatements compared to overall materiality?
- ☐ Qualitative factors considered (not just quantitative)?
- ☐ Conclusion on opinion impact documented?

**What happens next in the audit flow:**
1. Subsequent events and misstatement evaluation COMPLETE → conclusion feeds into audit report (`/audit:draft-report`)
2. If aggregate uncorrected > materiality → qualified or adverse opinion
3. If aggregate uncorrected < materiality → unmodified opinion (but documented that aggregate is below threshold)

---

## CARO Methodology

**Commands:** `/audit:caro-report`, `/audit:caro-checklist`

### WHY these commands exist

CARO 2020 (Companies (Auditor's Report) Order 2020) is a statutory requirement for certain companies under the Companies Act 2013. It requires auditors to report on 21 specific matters in a prescribed format.

CARO is NOT optional - it's a mandatory reporting requirement if the company is covered. Non-compliance can result in penalties for both company and auditor.

### Key SA requirements

- **CARO 2020 notification:** Issued by MCA on February 25, 2020, applicable for financial years commencing on or after April 1, 2020
- **Companies Act Section 143(11):** Central Government may prescribe matters to be included in auditor's report
- **Applicability criteria:** Company type, paid-up capital, borrowings, revenue thresholds

### WHAT the auditor should know

#### 1. Applicability criteria and exemptions

**CARO applies to:**
- Private limited companies with paid-up capital + reserves > Rs. 1 crore, OR
- Private limited companies with turnover > Rs. 10 crores, OR
- Private limited companies with outstanding loans/borrowings from banks/financial institutions > Rs. 1 crore at any time during the year, OR
- Public limited companies (listed or unlisted) regardless of size

**CARO does NOT apply to (exemptions):**
- Banking companies
- Insurance companies
- Section 8 companies (NPO companies)
- Small companies (as defined under Section 2(85) - paid-up capital ≤ Rs. 50 lakhs AND turnover ≤ Rs. 2 crores)
- Private companies with turnover ≤ Rs. 10 crores AND borrowings ≤ Rs. 1 crore AND paid-up capital + reserves ≤ Rs. 1 crore
- One Person Companies (OPCs)

**Common pitfall:** Applying CARO to exempt entities. Example: Reporting CARO for Section 8 company (NGO) when it's specifically exempted.

**Correct approach:** Assess applicability at planning stage. If close to thresholds, monitor during audit (turnover may cross Rs. 10 crores during year even if draft below).

#### 2. Three-template approach (favorable/adverse/NA)

Each CARO clause requires one of three reporting templates:

**Favorable template:**
Used when company complies with requirement.
Example (CARO 3(i)(a)): "The Company has maintained proper records showing full particulars, including quantitative details and situation of Property, Plant and Equipment."

**Adverse template:**
Used when company does not comply with requirement.
Example (CARO 3(i)(a)): "The Company has not maintained proper records showing full particulars of Property, Plant and Equipment. We noted the following deficiencies: [describe]"

**NA template:**
Used when clause is not applicable to the company.
Example (CARO 3(v)): "The Company has not accepted any deposits from the public. Accordingly, clause 3(v) is not applicable."

**CRITICAL:** Template wording is highly prescriptive. Deviations from prescribed wording can be questioned by regulators.

**Common pitfall:** Using customized wording instead of prescribed templates. Example: "Fixed asset register is inadequately maintained" instead of prescribed adverse wording.

**Correct approach:** Use exact prescribed wording from CARO 2020 notification. Only customize the description of deficiency within the adverse template structure.

#### 3. Clause-specific reporting requirements

Some clauses require specific verification procedures and prescribed wording:

**CARO 3(vii): Statutory dues**

**CRITICAL REQUIREMENT:** 6-month aging computed as of BALANCE SHEET DATE, not audit completion date.

Example: Balance sheet date March 31, 2026. Statutory dues unpaid for >6 months means unpaid since before October 1, 2025. Even if paid in April 2026, still report as outstanding >6 months at March 31, 2026.

**Statutory dues covered:**
- Goods and Services Tax (GST)
- Provident Fund (PF)
- Employees' State Insurance (ESI)
- Income Tax (TDS, advance tax)
- Professional Tax
- Sales Tax / Value Added Tax (VAT) (if applicable for transition periods)
- Customs Duty, Excise Duty (if applicable)

**Reporting requirements:**
- Whether statutory dues regularly deposited
- If delays, whether deposits made before due date per statute
- Amount outstanding as of balance sheet date (if unpaid)
- Period for which outstanding (if >6 months)
- Disputed dues (amount, statute, forum where disputed)

**Common pitfall:** Computing 6-month aging from audit completion date. Example: March 31, 2026 balance sheet, audit in June 2026. Computing aging from June 2026 (wrong) instead of March 31, 2026 (correct).

**Correct approach:** Aging always from balance sheet date. Obtain statutory dues ledger as of March 31, 2026. Filter items unpaid >6 months AS OF THAT DATE.

**CARO 3(iii): Loans, guarantees, investments**

Must report on:
- Whether loans/guarantees/security/investments within limits of Section 185 (loans to directors) and Section 186 (loans to others, guarantees, security)
- Whether terms and conditions of loans are prejudicial to company's interest
- Whether interest/principal repayments are regular
- If overdue, whether steps taken for recovery

**CARO 3(ix): Default in repayment**

Must report whether company defaulted in repayment of loans/borrowings/interest to banks/financial institutions/lenders. If yes:
- Amount of default
- Period of default
- Whether default continuing at year-end

This affects credit ratings and lender relationships - accurate reporting is critical.

**Common pitfall:** Not reporting defaults because payment made before audit completion. Default at year-end must be reported even if subsequently paid.

**Correct approach:** Obtain lender confirmations and payment schedules. Report status as of balance sheet date.

### HOW the command output fits into working papers

**Working paper file structure:**
```
07-CARO/
├── CARO-001 - Applicability Assessment
│   ├── Entity type verification
│   ├── Paid-up capital + reserves calculation
│   ├── Turnover calculation
│   ├── Outstanding borrowings (maximum during year)
│   ├── Exemption assessment
│   └── Conclusion on applicability
├── CARO-002 - Clause-by-Clause Checklist
│   ├── For each of 21 clauses:
│   │   ├── Sub-clause breakdown (if applicable)
│   │   ├── Verification procedures required
│   │   ├── Evidence obtained
│   │   ├── Compliance assessment
│   │   ├── Template selection (favorable/adverse/NA)
│   │   └── Draft wording
│   └── Quality control review (all 21 clauses addressed)
├── CARO-003 - Statutory Dues Verification (3(vii))
│   ├── List of all statutory dues types
│   ├── Deposit registers reviewed
│   ├── Due date compliance analysis
│   ├── Aging analysis as of balance sheet date (>6 months)
│   ├── Disputed dues schedule (if any)
│   └── Draft wording for 3(vii)
├── CARO-004 - Draft CARO Report
│   ├── Introduction paragraph (entity details, period)
│   ├── 21 clause responses (using prescribed templates)
│   ├── Partner review and approval
│   └── Final CARO report (for issuance with audit report)
```

**Command outputs map to:**
- `/audit:caro-checklist` output → CARO-002 (clause-by-clause checklist)
- `/audit:caro-report` output → CARO-004 (draft CARO report)
- Supporting verification → CARO-003 (statutory dues detail)

**Quality control review checkpoints:**
- ☐ CARO applicability correctly assessed (not applied to exempt entities)?
- ☐ All 21 clauses addressed (not partial coverage)?
- ☐ 3(vii) aging computed from balance sheet date (not audit date)?
- ☐ Prescribed template wording used (not customized)?
- ☐ Adverse wording supported by evidence (deficiencies described)?
- ☐ NA template used only when genuinely not applicable (with reason)?

**What happens next in the audit flow:**
1. CARO report COMPLETE → attached to statutory audit report (separate annexure)
2. CARO report dated same date as audit report (cannot be earlier or later)
3. Any adverse reporting in CARO may affect main audit report (going concern, material misstatement)

---

## Audit Opinion & Reporting Methodology

**Commands:** `/audit:draft-report`, `/audit:kam-draft`, `/audit:management-letter`, `/audit:representation-letter`

### WHY these commands exist

SA 700 requires the auditor to form an opinion on the financial statements and express that opinion clearly through a written report. SA 705/706 govern modified opinions and emphasis/other matter paragraphs. SA 701 requires Key Audit Matters (KAMs) for listed entities. SA 265 requires communication of significant deficiencies to TCWG. SA 580 requires obtaining written representations from management.

These commands implement the reporting phase - the culmination of the entire audit.

### Key SA requirements

- **SA 700.10:** Form opinion whether financial statements present fairly, in all material respects, in accordance with applicable framework
- **SA 705.7-9:** Modify opinion (qualified, adverse, disclaimer) based on nature and pervasiveness of matter
- **SA 701.8:** For listed entities, communicate KAMs in audit report
- **SA 265.9:** Communicate significant deficiencies in writing to TCWG
- **SA 580.8:** Request written representations from management

### WHAT the auditor should know

#### 1. Opinion formation process and pervasiveness assessment

**Opinion decision tree (see /audit:draft-report command for complete tree):**

**Step 1:** Material misstatements exist?
- No → Check sufficient appropriate evidence obtained → Unmodified
- Yes → Assess pervasiveness → Qualified or Adverse

**Step 2:** Sufficient appropriate evidence obtained?
- Yes → Unmodified
- No → Assess pervasiveness → Qualified or Disclaimer

**Pervasiveness assessment (CRITICAL):**

SA 705.5(a) defines pervasiveness using THREE separate questions with OR logic (not AND):

**Question A - Confined test:**
Is the misstatement NOT confined to specific elements, accounts, or items? (i.e., does it affect multiple areas?)

**Question B - Substantial proportion test:**
Even if confined, does it represent or could it represent a substantial proportion of the financial statements? (Generally, >10-15% of benchmark)

**Question C - Fundamental disclosure test:**
With regard to disclosures, is the misstatement/omission fundamental to users' understanding?

**If YES to ANY ONE question → Pervasive → Adverse (for misstatements) or Disclaimer (for scope limitations)**

**If NO to ALL THREE questions → Not Pervasive → Qualified**

**Common pitfall:** Treating pervasiveness as binary judgment ("feels pervasive") instead of applying THREE-question test systematically.

**Correct approach:** Answer each of three questions separately. If ANY ONE is yes, pervasive. Must document assessment using three-question framework.

#### 2. KAM selection hierarchy (SA 701) for listed entities

**Three-stage process:**

**Stage 1: Universe of significant matters**
All matters communicated to TCWG:
- Significant risks identified
- Areas of significant management judgment (accounting estimates)
- Effect of significant events/transactions during the period
- All matters that received significant auditor attention

**Stage 2: Most significant matters (three-criteria test)**
From universe, identify MOST significant using THREE criteria:
1. Areas assessed as higher risk or identified as significant risks
2. Significant auditor judgments relating to areas of significant management judgment
3. Effect on audit of significant events/transactions during period

**Stage 3: Calibrate to 2-5 KAMs**
- Too few (<2): Investors may question whether audit was thorough
- Too many (>5): Dilutes focus, readers can't distinguish what truly matters
- 2-5 KAMs is optimal range for most listed companies

**KAM vs. EOM distinction (CRITICAL):**

**KAM (SA 701):**
- Matters arising from audit (auditor's perspective on what required significant attention)
- Includes description of matter, how addressed in audit, and reference to disclosure

**Emphasis of Matter (SA 706):**
- Draws attention to matter appropriately presented/disclosed in financial statements
- Use when matter is fundamental to users' understanding but not a KAM
- Example: Going concern material uncertainty (SA 570.22 requires separate section, NOT KAM)

**Other Matter (SA 706):**
- Matter not presented/disclosed in financial statements but relevant to users' understanding of audit, auditor's responsibilities, or audit report
- Example: Predecessor auditor reported on prior year comparatives

**Common pitfall:** Including going concern material uncertainty as KAM. SA 570.22 requires separate "Material Uncertainty Related to Going Concern" section, not KAM treatment.

**Correct approach:** Going concern material uncertainty gets separate section per SA 570.22. Do not also list as KAM (that would be redundant and incorrect).

#### 3. Management letter severity classification (SA 265)

**Three-tier decision tree:**

**Step 1:** Is there a deficiency in internal control?
- Control does not exist when needed, OR
- Control exists but not properly designed, OR
- Control exists and properly designed but doesn't operate effectively

**Step 2:** Is there reasonable possibility that deficiency could result in material misstatement?
- "Reasonable possibility" = LOW threshold per SA 265.6(b) - not certainty, not probability, just possibility
- Consider: Magnitude of potential misstatement, likelihood of misstatement occurring
- If YES → **Material Weakness**
- If NO → Proceed to Step 3

**Step 3:** Is deficiency important enough for TCWG attention?
- Would TCWG want to know about this deficiency?
- Consider: Nature of control, importance of area, regulatory implications
- If YES → **Significant Deficiency**
- If NO → **Control Deficiency** (not required to communicate, but may choose to for relationship maintenance)

**Communication requirements:**
- **Material Weakness and Significant Deficiency:** MUST communicate in writing to TCWG (SA 265.9)
- **Control Deficiency:** Optional communication

**Common pitfall:** Treating "reasonable possibility" as high threshold. Example: "Deficiency exists but material misstatement is unlikely, so not Material Weakness" - WRONG. "Unlikely" still means possibility exists.

**Correct approach:** "Reasonable possibility" is LOW bar. If deficiency COULD result in material misstatement (even if unlikely), it's Material Weakness.

#### 4. Representation letter requirements (SA 580)

**Nine mandatory categories (SA 580.A20-A22):**
1. Financial Statements - preparation and fair presentation responsibility
2. Completeness of Information - provided all relevant information and access
3. Fraud and Non-Compliance - disclosed all known/suspected fraud and laws/regulations violations
4. Related Parties - identified and disclosed all related parties and transactions
5. Going Concern - basis of preparation appropriate (going concern or liquidation)
6. Subsequent Events - disclosed all events after balance sheet date requiring adjustment/disclosure
7. Uncorrected Misstatements - acknowledgment that uncorrected misstatements are immaterial (schedule attached)
8. Litigation and Claims - disclosed all actual/possible litigation and claims
9. Laws and Regulations - disclosed non-compliance with laws/regulations affecting financial statements

**Both positive AND negative representations required:**
- **Positive:** "We have disclosed all related party transactions" (SA 580.13)
- **Negative:** "We are not aware of any related party transactions that have not been disclosed" (SA 580.14)

Many management letters omit negative representations, but SA 580.14 requires both.

**Dating requirement (STRICT):**
Representation letter MUST be dated:
- Same date as auditor's report, OR
- Immediately before (1-2 days maximum before), BUT
- NEVER after auditor's report

**Why strict dating:** Auditor's report date is the date through which auditor obtained sufficient appropriate evidence. Representation letter dated after audit report suggests auditor didn't have evidence at report date.

**Common pitfall:** Representation letter dated after audit report. Example: Audit report dated June 15, representation letter dated June 17 - VIOLATES SA 580.14.

**Correct approach:** Obtain signed representation letter on or immediately before audit report date. If representation letter not obtained by report date, cannot issue audit report.

### HOW the command output fits into working papers

**Working paper file structure:**
```
06-Reporting/
├── REP-001 - Opinion Formation
│   ├── Summary of uncorrected misstatements
│   ├── Pervasiveness assessment (three-question framework)
│   ├── Opinion type determination (unmodified/qualified/adverse/disclaimer)
│   ├── Basis paragraph (if modified opinion)
│   └── Partner approval of opinion
├── REP-002 - Draft Audit Report
│   ├── Opinion paragraph (appears FIRST per SA 700 Revised)
│   ├── Basis for Opinion
│   ├── Material Uncertainty Related to Going Concern (if applicable per SA 570.22)
│   ├── Key Audit Matters (listed entities only per SA 701)
│   ├── Other Information (if applicable per SA 720)
│   ├── Responsibilities paragraphs (management, auditor)
│   ├── Report on Other Legal and Regulatory Requirements (Section 143(3))
│   ├── CARO 2020 (annexed as separate annexure)
│   └── Partner approval
├── REP-003 - Key Audit Matters (listed entities only)
│   ├── Stage 1: Universe of significant matters
│   ├── Stage 2: Most significant matters (three-criteria assessment)
│   ├── Stage 3: Calibration to 2-5 KAMs
│   ├── For each KAM:
│   │   ├── Description of matter and why it's a KAM
│   │   ├── How matter addressed in audit
│   │   ├── Reference to related disclosure in financial statements
│   │   └── Partner approval
├── REP-004 - Management Letter
│   ├── Severity classification for each deficiency
│   │   ├── Step 1: Is there a deficiency?
│   │   ├── Step 2: Reasonable possibility of material misstatement? → Material Weakness
│   │   ├── Step 3: Important for TCWG? → Significant Deficiency
│   ├── Deficiency description (observation, implication, recommendation)
│   ├── Management response (obtained after draft shared)
│   └── Follow-up from prior year (status of prior year recommendations)
├── REP-005 - Management Representation Letter
│   ├── Nine mandatory categories (all included)
│   ├── Both positive and negative representations
│   ├── Schedule of uncorrected misstatements (attached)
│   ├── Dual signatory (MD + CFO per Companies Act practice)
│   ├── Dating verification (same as or before audit report date)
│   └── Signed copy obtained before audit report issuance
```

**Command outputs map to:**
- `/audit:draft-report` output → REP-002 (complete audit report)
- `/audit:kam-draft` output → REP-003 (KAMs for listed entities)
- `/audit:management-letter` output → REP-004 (deficiency communication)
- `/audit:representation-letter` output → REP-005 (management representations)

**Quality control review checkpoints:**
- ☐ Opinion type determined using pervasiveness three-question framework?
- ☐ Opinion paragraph appears FIRST (not at end - SA 700 Revised format)?
- ☐ Going concern material uncertainty gets separate section (not KAM) per SA 570.22?
- ☐ KAMs calibrated to 2-5 for listed entities (not too few, not too many)?
- ☐ Management letter deficiencies classified using three-step decision tree?
- ☐ Representation letter includes all nine mandatory categories?
- ☐ Both positive AND negative representations included?
- ☐ Representation letter dated same as or before audit report (NEVER after)?
- ☐ Dual signatory on representation letter (MD + CFO)?

**What happens next in the audit flow:**
1. Audit report drafted → EQCR review required before dating (for listed entities per SA 220.19)
2. EQCR completion → Audit report dating (DATE 2 must be >= DATE 1, sequencing critical)
3. Audit report issued → File assembly (60 days from audit report date per SA 230)

---

## Quality Control Methodology

**Commands:** `/audit:completion-memo`, `/audit:quality-review`, `/audit:file-index`

### WHY these commands exist

SA 230 requires documentation of significant matters, conclusions reached, and significant professional judgments. SA 220 requires engagement quality control, including EQCR for listed entities. These commands implement the final quality control and documentation completion phase.

### Key SA requirements

- **SA 230.8:** Prepare documentation that enables experienced auditor with no previous connection to understand procedures performed, evidence obtained, conclusions reached
- **SA 230.10:** Document significant matters, conclusions, and significant professional judgments made in reaching conclusions
- **SA 220.19:** For listed entities, EQCR must be completed BEFORE audit report is dated
- **SA 230.14:** Assemble audit file within 60 days of audit report date

### WHAT the auditor should know

#### 1. Completion memo as narrative synthesis (SA 230.A11)

**Purpose:** Partner-level synthesis document explaining "WHY" opinion appropriate (not just "WHAT" procedures done).

**NOT a checklist:** Completion memo is narrative explaining professional judgments, not checklist of procedures completed.

**Structure (8 sections recommended):**

1. **Executive Summary** (1 page)
   - Opinion conclusion (unmodified/qualified/adverse)
   - Overall financial statement presentation assessment
   - Key matters affecting opinion
   - Significant judgments made

2. **Significant Risks** (2-3 paragraphs per risk)
   - Risk description and why significant
   - Procedures performed
   - Evidence obtained and evaluation
   - Conclusion on whether risk appropriately addressed

3. **Accounting Estimates** (2-3 paragraphs per estimate)
   - Estimate description and management's process
   - Inherent risk assessment (three factors)
   - Testing approach used (Approach 1/2/3)
   - Conclusion on reasonableness

4. **Going Concern** (1 page)
   - Indicators identified (if any)
   - Management plans evaluated (if indicators exist)
   - Conclusion on material uncertainty

5. **Fraud Risk** (1 page)
   - Revenue recognition fraud risk assessment
   - Management override procedures performed
   - Any fraud identified or suspected

6. **Misstatements** (1 page)
   - Summary of corrected and uncorrected misstatements
   - Aggregate evaluation against materiality
   - Qualitative factors considered
   - Conclusion on materiality

7. **Modifications and Emphasis** (if applicable)
   - Basis for modification (if modified opinion)
   - Pervasiveness assessment (three-question framework documented)
   - EOM/OOM paragraphs (if applicable)

8. **Opinion Rationale** (THE MOST IMPORTANT SECTION - 2 pages)
   - Overall conclusion on financial statement presentation
   - Key factors supporting opinion (evidence obtained, judgments made, consultations completed)
   - Why opinion type selected is appropriate
   - Partner sign-off

**Common pitfall:** Completion memo as checklist ("Risk assessment: Done. Testing: Done. Opinion: Unmodified") rather than narrative explaining professional judgment.

**Correct approach:** Partner-level narrative synthesizing significant matters and explaining WHY opinion appropriate given evidence obtained and judgments made.

#### 2. SA 220.19 sequencing (EQCR completion before report dating)

**CRITICAL sequencing for listed entities:**

**Correct sequence:**
1. All audit procedures complete → Documentation prepared
2. EQCR partner review → EQCR completion DATE 1
3. Audit report dating → DATE 2 (DATE 2 must be >= DATE 1)
4. Audit report issuance → DATE 3

**Incorrect sequence (VIOLATES SA 220.19):**
1. All audit procedures complete
2. Audit report dated DATE 2
3. EQCR completion DATE 1 (AFTER report dating - VIOLATION)

**Why sequencing matters:** SA 220.19 requires EQCR completion before report dating because audit report date is the date through which auditor obtained sufficient appropriate evidence. EQCR is part of obtaining that evidence - must be complete before report date.

**Verification checkpoint:** DATE 2 (audit report date) >= DATE 1 (EQCR completion date)

**Common pitfall:** Dating audit report before EQCR completion. Example: Audit report dated June 15, EQCR completion documented as June 17 - MOST COMMON EQCR ERROR per SA 220 guidance.

**Correct approach:** Do not date audit report until EQCR completion documented. If EQCR identifies issues requiring additional procedures, report date moves forward.

#### 3. Dual-use file index concept

File index serves TWO distinct purposes at different stages:

**Purpose 1: Planning/Tracking Index (generated at engagement start)**
- Created during planning phase (before fieldwork)
- Lists all expected working paper sections
- Status column: "In Progress" / "Not Started" / "Complete"
- Used by audit team to track completion
- Updated throughout audit as sections are completed

**Purpose 2: Final Assembly Index (generated post-report)**
- Created during file assembly (after audit report issued)
- Lists all ACTUAL working papers in final audit file
- Status column: "Complete" / "N/A" (only two options)
- Cross-references to each working paper location
- Sign-off by partner confirming file assembly complete
- Must be finalized within 60 days of audit report date (SA 230.14)

**Common pitfall:** Using planning index as final assembly index without updating. Result: Index shows "In Progress" items when file is supposedly complete, or lists sections that were never created ("N/A" not used).

**Correct approach:** Two separate file indexes. Planning index for tracking. Final assembly index for documentation (generated fresh after report issuance, reflects actual file contents only).

### HOW the command output fits into working papers

**Working paper file structure:**
```
CAF-06-Completion/
├── COMP-001 - Completion Memo
│   ├── Executive Summary (1 page)
│   ├── Significant Risks (2-3 paragraphs per risk)
│   ├── Accounting Estimates (2-3 paragraphs per estimate)
│   ├── Going Concern (1 page)
│   ├── Fraud Risk (1 page)
│   ├── Misstatements (1 page)
│   ├── Modifications and Emphasis (if applicable)
│   ├── Opinion Rationale (THE MOST IMPORTANT SECTION - 2 pages)
│   └── Partner sign-off
├── COMP-002 - EQCR Checklist (listed entities only)
│   ├── EQCR partner details (name, independence confirmed)
│   ├── Significant matters review (risks, estimates, going concern, misstatements)
│   ├── Financial statement review (presentation and disclosure)
│   ├── Audit report review (opinion, KAMs if applicable, Section 143(3))
│   ├── EQCR partner conclusion (engagement conducted per professional standards)
│   ├── EQCR completion DATE 1 (documented)
│   └── EQCR partner sign-off
├── COMP-003 - File Assembly Checklist
│   ├── All working paper sections listed
│   ├── Cross-references verified (all cross-refs valid)
│   ├── Partner review completeness verified
│   ├── Signed audit report filed
│   ├── Signed representation letter filed
│   ├── Signed management letter filed (if issued)
│   ├── File assembly completion date (within 60 days of audit report date)
│   └── Partner sign-off on file assembly
├── COMP-004 - File Index (Final Assembly)
│   ├── CAF (Current Audit File) sections listed with cross-references
│   ├── All sections marked "Complete" or "N/A" (no "In Progress")
│   ├── PAF (Permanent Audit File) sections referenced
│   ├── Sign-off by partner confirming index reflects actual file contents
│   └── File assembly date (within 60 days)
```

**Command outputs map to:**
- `/audit:completion-memo` output → COMP-001 (narrative synthesis)
- `/audit:quality-review` output → COMP-002 (EQCR checklist for listed entities)
- `/audit:file-index` output → COMP-004 (final assembly index)

**Quality control review checkpoints:**
- ☐ Completion memo is narrative synthesis (not checklist)?
- ☐ Opinion rationale section explains WHY opinion appropriate (most important section)?
- ☐ EQCR completed before audit report dated (for listed entities)?
- ☐ EQCR completion DATE 1 <= Audit report DATE 2 (sequencing verified)?
- ☐ File index reflects actual file contents (not planning index)?
- ☐ All cross-references in file index valid (point to existing working papers)?
- ☐ File assembly completed within 60 days of audit report date (SA 230.14)?

**What happens next in the audit flow:**
1. Completion memo, EQCR (if applicable), and file assembly COMPLETE → Audit engagement complete
2. File archived and retained per firm's retention policy (minimum 7 years per SA 230)
3. File closed (no further additions except in limited circumstances per SA 230.13)

---

## Cross-References

For complete information on using these commands, see:

- **[Command Reference](COMMANDS.md)** - Detailed usage instructions, arguments, expected outputs for all 30 commands
- **[Skill Reference](SKILLS.md)** - Background knowledge skills that Claude auto-loads contextually
- **[Complete Walkthrough](WALKTHROUGH.md)** - Step-by-step demonstration of full audit lifecycle with realistic example
- **[README](../README.md)** - Installation, quick-start guide, standards coverage overview

---

*This methodology guide is based on Standards on Auditing issued by ICAI, Companies Act 2013 and related regulations, CARO 2020, and professional audit methodology. Always refer to current versions of standards for authoritative guidance.*
