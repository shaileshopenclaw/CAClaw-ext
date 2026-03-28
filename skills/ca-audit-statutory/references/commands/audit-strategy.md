# Audit Strategy

Develop overall audit strategy per SA 300 (Planning an Audit of Financial Statements), establishing scope, timing, direction, and resource allocation for the engagement.

## Description

The audit strategy is the high-level roadmap for the entire engagement. Per SA 300, it establishes the scope, timing, and direction of the audit and guides the development of the more detailed audit plan. The strategy is a 2-3 page memorandum covering the big-picture decisions, NOT a detailed procedure manual.

**Critical distinction:** Audit Strategy (SA 300) = scope/timing/direction/resources (high-level). Audit Plan (SA 330) = detailed procedures, sample sizes, testing approaches (detailed).

This command helps document the overall audit strategy covering entity profile, scope determination (including CARO 2020 and tax audit applicability), identification of significant financial statement areas, timing plan with statutory deadlines, resource allocation with specialist needs, and audit approach decisions (controls-reliance vs. substantive-only) for each significant area.

## Required Context

Before running this command, ensure you have:

- **Entity understanding documented:** Business model, industry, ownership structure, governance framework
- **Prior year audit file reviewed:** For continuing engagements, review prior year strategy, findings, and any changes
- **Preliminary risk assessment completed:** Initial understanding of risks to inform approach decisions
- **Materiality calculated:** Overall materiality and performance materiality determined per /audit:materiality
- **Engagement team identified:** Availability of partner, manager, senior auditors, and specialists
- **Client acceptance/continuance approved:** Risk assessment and independence confirmed per /audit:client-acceptance

**Ask user:** "Provide entity details for strategy development:
- Company type: Private limited/Public limited/Listed/Subsidiary of foreign parent
- Turnover: Current year estimated/draft
- Nature of business: Manufacturing/Trading/Services/Mixed
- Number of locations: Head office plus branches/factories/warehouses
- Key regulatory requirements: Any industry-specific regulations (banking, NBFC, insurance, etc.)
- CARO applicability: Turnover, borrowings, paid-up capital (for threshold assessment)
- Tax audit applicability: Turnover exceeds Rs. 1 crore (business)/Rs. 50 lakhs (profession)"

## Workflow

### Step 1: Document Entity Profile

Create a concise entity profile (approximately half-page summary):

**Ask user:** "Provide the following entity information:
- Nature of business operations (brief description)
- Revenue scale and growth trend (3-year trend if available)
- Number of locations and geographic spread
- Ownership structure (promoter holding, institutional investors, public float if listed)
- Governance structure (board composition, audit committee presence, internal audit function existence)
- Related party relationships (holding company, subsidiaries, associates, key management personnel)"

**Financial highlights summary table:**

| Metric | Current Year (Draft/Est.) | Prior Year (Audited) | Prior Year-1 (Audited) | Change (Current vs PY) |
|--------|---------------------------|----------------------|------------------------|------------------------|
| Revenue | | | | % |
| PBT | | | | % |
| Total Assets | | | | % |
| Net Worth | | | | % |
| Key Ratios | [e.g., Gross margin %, Debt-Equity, Current Ratio] | | | |

**Regulatory environment:**
- Companies Act 2013 compliance (all companies)
- Industry-specific regulations: [Banking Regulation Act, RBI guidelines, SEBI LODR if listed, Insurance Act, etc.]
- Listing requirements if applicable: [BSE/NSE, quarterly reporting, corporate governance]
- Other regulatory oversight: [Industry regulators, environmental clearances, etc.]

**Document:** "Entity is a [type] company engaged in [business], with revenue of Rs. [X] crores. [Key characteristics relevant to audit approach]."

### Step 2: Determine Scope of Audit Work

**Standalone vs. Group Audit Decision:**

**Ask user:** "Is this a standalone audit or part of a group audit?
- Standalone: Single entity financials only
- Subsidiary of Indian parent: Component of group audit (consider SA 600 if group auditor uses our work)
- Subsidiary of foreign parent: May require compliance with parent's audit requirements
- Parent company with subsidiaries: Group audit scope determination required (note: consolidation procedures are separate from this strategy)"

**If group audit:** Note component materiality considerations and coordination with other auditors (detailed group audit procedures are out of scope for this command).

**Statutory reporting scope:**

Determine ALL applicable reporting requirements:

1. **Audit Report under Section 143 (mandatory for all companies)**
   - True and fair view opinion on financial statements
   - Report on internal financial controls (if applicable)
   - Other matters as per Companies Act

2. **CARO 2020 (Companies Auditor's Report Order) applicability:**

   **EXCLUDED from CARO:**
   - Banking companies
   - Insurance companies
   - Section 8 companies (not-for-profit)
   - One-person companies
   - Small companies (as defined under Section 2(85) with paid-up capital ≤Rs. 50 lakhs and turnover ≤Rs. 2 crores)

   **INCLUDED in CARO scope:**
   - Private limited companies above small company threshold
   - Public limited companies (listed and unlisted)
   - Holding/subsidiary/associate/JV companies

   **Decision point:** Based on entity type and thresholds, is CARO 2020 applicable?

   **If CARO applicable:** All 21 clauses must be addressed. This affects resource allocation (additional compliance work).

3. **Tax Audit under Section 44AB applicability:**

   **Thresholds:**
   - Business: Turnover/gross receipts exceeding Rs. 1 crore (or Rs. 10 crore if 95% digital transactions)
   - Profession: Gross receipts exceeding Rs. 50 lakhs
   - Presumptive taxation opted: Not applicable

   **Decision point:** Does entity exceed tax audit turnover threshold?

   **If tax audit applicable:** Form 3CD reporting required. This affects timing (September 30 deadline unless extended) and resource allocation (tax compliance work).

4. **SA 701 Key Audit Matters (KAM) reporting:**

   **Applicable ONLY to:**
   - Listed entities (equity or debt listed on recognized stock exchange)
   - Entities choosing to voluntarily report KAM

   **Decision point:** Is entity listed?

   **If KAM required:** Identify 2-5 key audit matters requiring partner-level attention for disclosure in audit report.

5. **Internal Financial Controls (IFC) reporting:**

   **Applicable to:**
   - Listed entities (mandatory)
   - Unlisted public companies with paid-up capital ≥Rs. 25 crores, or turnover ≥Rs. 250 crores, or outstanding loans/borrowings/debentures ≥Rs. 100 crores

   **Decision point:** Does entity meet IFC reporting threshold?

   **If IFC applicable:** Assess operating effectiveness of internal financial controls over financial reporting. This significantly affects audit approach and timing (IFC work often done at interim).

**Significant components and locations:**

Identify locations requiring physical audit presence:

| Location | Activity/Function | Estimated % of Revenue | Estimated % of Assets | Visit Required? | Timing |
|----------|------------------|------------------------|------------------------|-----------------|---------|
| Head Office | [Administration/Sales] | % | % | Yes | [Planning/Interim/Year-end] |
| [Branch/Factory name] | [Manufacturing/Sales] | % | % | Yes/No | [When] |

**Decision criteria for location visits:**
- Materiality: Location represents >10-15% of revenue or assets
- Risk: High-risk operations, history of issues, weak controls
- Observation requirements: Inventory observation, PPE verification
- First-year engagement: More extensive physical presence

**Exclusions (what is explicitly NOT in scope):**

Clearly document what is NOT covered to manage expectations:
- Consolidated financial statements (if only standalone audit)
- Internal financial controls reporting (if not applicable based on thresholds)
- Compliance with all laws (only specific compliance under Section 143(1)(h))
- Detection of all fraud (audit provides reasonable, not absolute, assurance)

**Document:** "Scope includes [list all applicable reports]. CARO 2020 is [applicable/not applicable because]. Tax audit under Section 44AB is [applicable/not applicable because]. IFC reporting is [applicable/not applicable because]."

### Step 3: Identify Significant Financial Statement Areas

Based on materiality and preliminary risk assessment, identify areas requiring audit attention.

**Ask user:** "Which financial statement areas are significant for this entity? Consider:
- Material account balances (>performance materiality or >10% of total assets/revenue)
- Complex accounting estimates requiring judgment
- Fraud risks (SA 240 presumes revenue recognition and management override risks)
- Prior year issues or industry-specific risks
- Regulatory focus areas"

**Common significant areas by entity type:**

**Manufacturing entity:**
- Revenue recognition (method, timing, sales cut-off)
- Trade receivables (recoverability, aging, ECL)
- Inventory (valuation, obsolescence, physical verification)
- Property, Plant & Equipment (additions, disposals, depreciation, impairment)
- Borrowings (terms, covenants, interest accrual)
- Provisions (warranty, contingencies)

**Trading entity:**
- Revenue recognition (sale vs. consignment, returns)
- Trade receivables and payables (matching, cut-off)
- Inventory (high turnover, valuation, obsolescence)
- Related party transactions (common in trading businesses)

**Services entity:**
- Revenue recognition (timing, unbilled revenue, deferred revenue)
- Trade receivables (recoverability, billing disputes)
- Employee benefits (payroll, PF/ESIC, gratuity provision)
- Lease obligations (office space, Ind AS 116 if applicable)

**For each significant area, document:**

| Significant Area | Why Significant | Preliminary Risk Assessment (H/M/L) | Expected Audit Approach |
|------------------|-----------------|-------------------------------------|-------------------------|
| Revenue | Material (Rs. X crores, 100% of revenue), fraud risk per SA 240 | H | [Controls-reliance/Substantive-only] |
| Trade Receivables | Material (Rs. X crores, Y% of assets), ECL estimation required | M | [Approach] |
| Inventory | Material, requires physical observation, valuation complexity | M/H | [Approach] |
| PPE | Material, additions during year, impairment indicators | L/M | [Approach] |

**Decision point:** For EACH significant area, preliminary risk assessment informs the expected audit approach (detailed in Step 6).

### Step 4: Develop Timing Plan

Create a comprehensive timeline showing all phases with planned dates and statutory deadlines.

**Audit phases timeline:**

| Phase | Key Activities | Planned Start | Planned End | Key Deliverables | Statutory/Target Deadline |
|-------|---------------|---------------|-------------|------------------|---------------------------|
| **Planning** | - Understanding entity and environment<br>- Risk assessment<br>- Materiality determination<br>- Audit strategy and plan<br>- Team briefing | [Date] | [Date] | - Audit strategy memo (CAF-01-STR-001)<br>- Audit plan (CAF-01-PLN-001)<br>- Risk assessment (CAF-01-RSK-001) | - |
| **Interim Audit** (if applicable) | - Controls documentation (walkthroughs)<br>- Test of controls (if controls-reliance approach)<br>- Substantive procedures up to interim date<br>- Analytical procedures | [Date] | [Date] | - Controls documentation<br>- ToC results<br>- Interim substantive testing WPs | - |
| **Year-end Procedures** | - Physical inventory observation<br>- Bank confirmations (as of year-end)<br>- Cut-off testing (sales, purchases)<br>- PPE physical verification | [Date around year-end] | [Date] | - Inventory observation report<br>- Bank confirmations<br>- Cut-off testing documentation | - |
| **Final Fieldwork** | - Remaining substantive procedures<br>- Analytical review<br>- Fair value estimates verification<br>- Related party transactions<br>- Subsequent events review (up to report date)<br>- Going concern assessment | [Date] | [Date] | - Substantive testing WPs<br>- Analytical review<br>- Going concern memo<br>- Subsequent events review | - |
| **Completion** | - Misstatements evaluation<br>- Management representation letter<br>- Partner/EQCR review<br>- Review points clearance<br>- Audit report drafting | [Date] | [Date] | - Misstatement summary<br>- Management rep letter<br>- Audit completion checklist<br>- Draft audit report | - |
| **Reporting** | - Management discussion of findings<br>- Final report review and signing<br>- Board/Audit Committee presentation | [Date] | [Date] | - Signed audit report<br>- Management letter (if any)<br>- Board presentation | **Target report signing date** |
| **File Assembly** | - Organize audit documentation<br>- Complete file review<br>- Archive audit file | [Date] | [Date] | - Final audit file | **Within 60 days of report date per SA 230** |

**Statutory deadline integration (for March 31 year-end companies):**

- **AGM deadline:** September 30 (within 6 months of year-end per Section 96)
- **Audit report deadline:** Must be ready well before AGM (typically by mid-August for September AGM)
- **ROC filing of financials:** Within 30 days of AGM (Form AOC-4)
- **CARO report:** Due with main audit report (no separate deadline)
- **Tax audit report (Form 3CD):** September 30 (November 30 if extended by CBDT - check for extension notifications)
- **File assembly:** Within 60 days of audit report date per SA 230

**For other year-ends:** Adjust deadlines accordingly (AGM within 6 months, file assembly 60 days).

**Ask user:** "What is the financial year-end date? [Month, Year]. When is the target AGM date? When does management need the audit report ready?"

**Document:** "Timeline allows [X] weeks for fieldwork completion before report signing target of [date]. This provides adequate time for [partner review/EQCR/clearance of review points] before reporting deadline."

### Step 5: Allocate Resources

**Team allocation:**

Define team structure with roles and responsibilities:

| Role | Team Member | Qualification/Experience | Time Allocation (estimated hours) | Key Responsibilities |
|------|-------------|-------------------------|-----------------------------------|----------------------|
| **Engagement Partner** | [Name] | CA, [X] years experience | [50-80 hours] | - Overall direction and supervision<br>- Significant judgments and estimates review<br>- Partner review of audit file<br>- Report signing<br>- Client relationship management |
| **Engagement Manager** | [Name] | CA, [X] years experience | [100-150 hours] | - Day-to-day supervision of fieldwork<br>- Review of audit working papers<br>- Complex areas (revenue, estimates, related parties)<br>- First-level review before partner review |
| **Senior Auditor(s)** | [Names] | CA/ICWA/pursuing CA Final, [X] years | [200-300 hours each] | - Lead for specific financial statement areas<br>- Execution of audit procedures<br>- Sampling and testing<br>- Supervision of staff/assistants<br>- Preparation of review notes |
| **Staff/Assistants** | [Names] | CA Inter/BCom/pursuing CA, [X] years | [300-500 hours total] | - Supporting audit procedures<br>- Vouching, verification, confirmations<br>- Data extraction and analysis<br>- Working paper preparation |
| **IT Specialist** (if needed) | [Name/Firm] | CISA/System auditor | [20-40 hours] | - IT general controls evaluation<br>- Application controls testing<br>- Data extraction and analytics support |
| **Tax Specialist** (if needed) | [Name] | CA with tax expertise | [30-50 hours] | - Tax provisions review<br>- Deferred tax calculations<br>- Tax audit (Form 3CD) if separate team<br>- Transfer pricing documentation review |
| **Valuation Specialist** (if needed) | [Name/Firm] | Registered valuer | [15-30 hours] | - Fair value measurements (investments, PPE impairment)<br>- Business combination valuation<br>- Intangible asset valuation |
| **Actuarial Specialist** (if needed) | [Name/Firm] | Actuary | [10-20 hours] | - Gratuity/leave encashment valuation<br>- Pension plan obligations (if any) |

**Ask user:** "Identify team members and confirm availability:
- Engagement partner: [Name and confirm availability for key dates]
- Engagement manager: [Name]
- Senior auditors: [Names and their area assignments]
- Staff/assistants: [Number available]
- Specialists needed: [IT/Tax/Valuation/Actuarial - identify specific needs]"

**Budget hours by phase:**

| Phase | Estimated Hours | % of Total |
|-------|-----------------|------------|
| Planning | [50-80] | 5-8% |
| Interim (if applicable) | [150-250] | 15-25% |
| Final fieldwork | [400-600] | 40-60% |
| Completion and reporting | [100-150] | 10-15% |
| File assembly and review | [50-80] | 5-8% |
| **Total** | **[800-1200]** | **100%** |

**Budget considerations:**
- First-year engagement: 30-50% more hours than recurring (due to setup, prior year understanding)
- Complex estimates: Additional hours for fair value, ECL, provisions
- Weak controls: More substantive testing hours required
- Multiple locations: Travel time and site visits add hours
- CARO/IFC reporting: Additional compliance hours

**Training needs:**

Identify training/briefing required for team:
- Industry-specific issues briefing (e.g., construction accounting, NBFC norms)
- New accounting standards applicable (Ind AS updates, recent announcements)
- Entity-specific systems and processes (ERP system, key controls)
- Fraud risk awareness (red flags specific to this entity/industry)

**Document:** "Team comprises [X] members totaling approximately [Y] budgeted hours. [Specialist name] will provide [expertise] for [specific areas]. Team briefing scheduled for [date] covering [key topics]."

### Step 6: Set Overall Audit Approach and Direction

**THIS IS THE HEART OF THE AUDIT STRATEGY.** This section distinguishes strategy from the detailed audit plan.

For each significant area identified in Step 3, make a HIGH-LEVEL approach decision: controls-reliance vs. substantive-only.

**Audit approach decision framework:**

| Significant Area | Preliminary Risk (H/M/L) | Control Environment | Approach Decision | Rationale for Approach |
|------------------|--------------------------|---------------------|-------------------|------------------------|
| Revenue | H (fraud risk) | [Strong/Adequate/Weak] | [Controls-reliance/Combined/Substantive-only] | [Entity-specific rationale] |
| Trade Receivables | M | [Strong/Adequate/Weak] | [Approach] | [Rationale] |
| Inventory | M/H | [Assessment] | [Approach] | [Rationale] |
| PPE | L/M | [Assessment] | [Approach] | [Rationale] |
| Borrowings | M | [Assessment] | [Approach] | [Rationale] |

**Three approach options:**

1. **Controls-reliance approach:**
   - Test operating effectiveness of controls
   - Reduced substantive testing (but not eliminated)
   - **Use when:** Controls are strong, cost-effective to test controls (vs. extensive substantive work), high transaction volumes make substantive-only impractical
   - **Example:** Revenue in a large manufacturing company with strong automated controls and high transaction volumes

2. **Substantive-only approach:**
   - No controls testing (or minimal walkthrough for understanding only)
   - Extensive substantive procedures (tests of details, substantive analytical procedures)
   - **Use when:** Controls are weak or don't exist, testing controls not cost-effective (small entity, owner involvement), low transaction volumes make substantive testing practical
   - **Example:** Related party transactions in a small private company (owner approval is control, not formal documented controls)

3. **Combined approach:**
   - Test key controls (not all controls, just critical ones)
   - Substantive procedures (not as extensive as substantive-only, but not minimal)
   - **Use when:** Mixed control environment (some strong, some weak), moderate transaction volumes, want to achieve efficiency from some controls testing
   - **Example:** Inventory in a mid-sized trading company (test key controls like perpetual inventory system, perform substantive count and valuation procedures)

**Ask user:** "For each significant area, what is the preliminary assessment of control strength? Select approach based on:
- Control environment strength (strong documented controls vs. owner oversight vs. weak/no controls)
- Transaction volumes (high volume suggests controls-reliance, low volume suggests substantive-only)
- Cost-benefit (will testing controls reduce overall audit effort?)
- Nature of area (related party transactions typically substantive-only even if controls exist)"

**Decision point:** For EACH significant area, document the approach and rationale. This is a professional judgment decision, not a mechanical rule.

**Key focus areas requiring heightened attention:**

Identify 2-5 areas requiring MOST audit attention (beyond routine procedures):

1. **Fraud risks (ALWAYS include per SA 240):**
   - Revenue recognition (presumed fraud risk)
   - Management override of controls (presumed fraud risk)
   - Document: Specific fraud scenarios relevant to this entity and how audit procedures address them

2. **Significant accounting estimates:**
   - Expected Credit Loss (ECL) on receivables - estimation uncertainty
   - Fair value measurements - management bias, model assumptions
   - Provisions for contingencies - completeness, measurement
   - PPE/intangible asset impairment - forecast assumptions
   - Document: Nature of estimate, degree of estimation uncertainty, planned audit response

3. **Prior year issues:**
   - Uncorrected misstatements from prior year (evaluate whether now material)
   - Management letter points from prior year (assess remediation)
   - Document: What changed, whether additional procedures needed

4. **Industry-specific risks:**
   - Construction: Revenue recognition (percentage of completion), unbilled receivables
   - NBFC: Loan classification (stage 1/2/3), ECL provisioning
   - Manufacturing: Inventory obsolescence, warranty provisions
   - Document: Industry risk and how audit approach addresses it

**Professional skepticism emphasis:**

Per SA 240, maintain professional skepticism throughout:
- Question management representations, especially in subjective areas (estimates, going concern)
- Be alert to contradictory audit evidence
- Don't accept less than persuasive evidence due to past experience with entity
- Document areas requiring heightened skepticism (fraud risk areas, estimates, related parties)

**Element of unpredictability (SA 240.A31):**

Include some unpredictability in audit procedures:
- Vary timing of procedures from year to year
- Test low-risk areas occasionally
- Perform surprise procedures (unannounced inventory counts, surprise bank confirmations)

**Document:** "Overall audit approach is [controls-reliance/substantive-only/mixed] based on control environment assessment. Key focus areas requiring heightened attention: [list 2-5 areas with brief rationale]. Professional skepticism will be emphasized in [fraud risk areas/estimates/related parties]."

## Output Format

**AUDIT STRATEGY MEMORANDUM**

(Target length: 2-3 pages. This is high-level strategy, NOT detailed procedures.)

**Working Paper Reference:** CAF-01-STR-001

**Engagement:** [Client name] - Statutory Audit for year ended [Date]

**Prepared by:** [Name, Role] **Date:** [Date]
**Reviewed by:** [Partner name] **Date:** [Date]

---

### 1. Entity Profile

**Nature of business:** [Brief description of operations, products/services, business model]

**Financial highlights:**

| Metric | CY (Draft) | PY | Change |
|--------|------------|----|---------|
| Revenue | Rs. X cr | Rs. X cr | X% |
| PBT | Rs. X cr | Rs. X cr | X% |
| Total Assets | Rs. X cr | Rs. X cr | X% |
| Net Worth | Rs. X cr | Rs. X cr | X% |

**Ownership and governance:** [Promoter holding X%, listed/unlisted, audit committee present/absent, internal audit function yes/no]

**Regulatory environment:** [Companies Act 2013, industry-specific regulations if any, listing requirements if applicable]

### 2. Scope of Audit

**Reporting scope:**
- Audit report under Section 143 on standalone financial statements: Yes
- CARO 2020 applicability: [Yes/No - brief reason]
- Tax audit under Section 44AB: [Yes/No - brief reason]
- Key Audit Matters (SA 701): [Applicable only if listed - Yes/No]
- Internal Financial Controls reporting: [Yes/No - based on thresholds]

**Locations:**
- [List significant locations requiring physical presence with brief rationale]

**Exclusions:**
- [Clearly state what is NOT in scope - consolidated FS, certain reports, etc.]

### 3. Significant Areas and Preliminary Risk Assessment

| Significant Area | Materiality (Rs./% of total) | Risk Level | Why Significant |
|------------------|------------------------------|------------|-----------------|
| Revenue | Rs. X cr (100% of revenue) | High | Material, fraud risk per SA 240, [entity-specific factors] |
| Trade Receivables | Rs. X cr (Y% of assets) | Medium | Material, ECL estimation required, [concentration risk/aging issues] |
| Inventory | Rs. X cr (Y% of assets) | Medium/High | Material, physical verification required, [valuation complexity/obsolescence] |
| PPE | Rs. X cr (Y% of assets) | Low/Medium | Material, [additions during year/impairment indicators] |
| [Other areas] | | | |

**Fraud risks (SA 240):** Revenue recognition (presumed risk) and management override of controls (presumed risk) will receive heightened attention through [specific procedures to be detailed in audit plan].

### 4. Timing Plan

| Phase | Planned Dates | Key Milestones |
|-------|---------------|----------------|
| Planning | [Date] to [Date] | Strategy, plan, risk assessment complete |
| Interim (if applicable) | [Date] to [Date] | Controls testing, interim substantive work |
| Year-end procedures | [Around year-end date] | Inventory observation, bank confirmations |
| Final fieldwork | [Date] to [Date] | Substantive testing, completion procedures |
| Reporting | [Date] to [Date] | Draft report by [date], signing by [date] |

**Statutory deadlines:** AGM by [date], ROC filing within 30 days of AGM, tax audit report by September 30, file assembly within 60 days of report date.

### 5. Resource Allocation

**Team composition:**
- Engagement partner: [Name] - overall direction, significant judgments, report signing
- Engagement manager: [Name] - day-to-day supervision, complex areas
- Senior auditors: [Names] - area leads: [brief allocation]
- Staff/assistants: [Number] - supporting procedures

**Specialists:** [IT/Tax/Valuation/Actuarial - if needed for specific areas]

**Budget:** Approximately [X] hours over [Y] weeks.

### 6. Audit Approach and Direction

**Overall approach per significant area:**

| Area | Approach | Rationale |
|------|----------|-----------|
| Revenue | [Controls-reliance/Substantive-only/Combined] | [Entity-specific rationale: control strength, transaction volumes, cost-benefit] |
| Trade Receivables | [Approach] | [Rationale] |
| Inventory | [Approach] | [Rationale] |
| [Others] | [Approach] | [Rationale] |

**Key focus areas requiring heightened attention:**
1. [Area/Risk] - [Why and how addressed]
2. [Area/Risk] - [Why and how addressed]
3. [Area/Risk] - [Why and how addressed]

**Professional skepticism:** Emphasized in fraud risk areas (revenue, management override), significant estimates (ECL, fair values, provisions), and related party transactions.

### 7. CARO/Tax Audit/Special Reporting

**CARO 2020:** [If applicable, note that all 21 clauses will be addressed. Specific attention to clauses [list any that require particular focus based on entity profile, e.g., Clause (x) loans to related parties, Clause (xvii) going concern].]

**Tax audit (Section 44AB):** [If applicable, Form 3CD will be prepared covering all 44 clauses. Coordination with tax team for [specific complex areas like transfer pricing, disallowances].]

**IFC reporting:** [If applicable, note approach to assessing operating effectiveness of internal financial controls over financial reporting.]

---

**NOTE:** This is the overall audit strategy per SA 300. Detailed audit procedures, sample sizes, and specific testing approaches are documented in the Audit Plan (CAF-01-PLN-001).

**Strategy approved by:** _______________________ [Engagement Partner] Date: _______

## Reference to Standards

**SA 300 - Planning an Audit of Financial Statements:**
- Para 7: Establish overall audit strategy setting scope, timing, and direction
- Para 8: Strategy guides development of detailed audit plan
- Para 9: Strategy considers entity, reporting framework, scope, timing, direction, resources

**For full SA 300 text and detailed requirements, reference:**
@skills/sa-standards-reference/SKILL.md (search for "SA 300")

**Related standards:**
- SA 315: Risk assessment informs strategy decisions
- SA 330: Strategy guides development of audit plan
- SA 600: Group audit considerations if applicable

**Related commands:**
- Before strategy → /audit:materiality (materiality feeds into strategy)
- Before strategy → /audit:client-acceptance (acceptance approved before planning)
- After strategy → /audit:audit-plan (detailed procedures based on strategy decisions)
- After strategy → /audit:risk-matrix (detailed risk assessment for significant areas)

---

**Disclaimer:** This tool assists with audit workflow documentation per SA 300 but does not substitute professional audit judgment. Audit strategy requires consideration of entity-specific circumstances, preliminary risk assessment, and professional skepticism. All strategy decisions must be reviewed and approved by the engagement partner. The auditor remains responsible for compliance with Standards on Auditing and professional standards. This strategy is a high-level roadmap - detailed procedures are documented in the audit plan per SA 330.
