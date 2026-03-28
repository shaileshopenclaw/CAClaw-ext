# Engagement Quality Control Review

Perform engagement quality control review (EQCR) per SA 220 to objectively evaluate significant judgments made by the engagement team and conclusions reached in formulating the audit report before it is issued.

## Enhanced Description

This command generates the Engagement Quality Control Review (EQCR) checklist per SA 220 (Quality Control for an Audit of Financial Statements).

**EQCR is MANDATORY for listed entities per SA 220.19.** For other engagements, EQCR applicability is based on the firm's quality control policies. Consider EQCR for:
- Listed companies (mandatory per SA 220.19)
- Unlisted public interest entities (government companies, financial institutions, large private companies)
- Entities with significant public stakeholder base
- High-risk engagements (first-year audits, going concern issues, significant fraud risks)
- Engagements with complex accounting or auditing issues
- Regulatory oversight entities (SEBI, RBI, IRDAI regulated)

**EQCR Reviewer Independence**: The EQCR reviewer must be INDEPENDENT of the engagement team, possess appropriate technical expertise and experience, and must not have made any decisions that the review would evaluate. The reviewer cannot be the engagement partner or any engagement team member.

**Objective**: The EQCR provides an objective evaluation of significant judgments and conclusions before the audit report is issued, enhancing audit quality through independent review.

## Required Context

Before running this command, ensure:
- All audit procedures are complete
- All working papers are prepared, reviewed, and signed off
- Audit completion memorandum is prepared (see /audit:completion-memo)
- Draft audit report is prepared (see /audit:draft-report)
- EQCR reviewer is independent of engagement team and has appropriate technical expertise
- EQCR is required per firm policy or SA 220.19 (listed entities)

**Interactive Prompts** (ask user at command invocation):
1. Entity name, financial year, entity type (listed / unlisted / public interest entity)
2. Engagement partner name and EQCR reviewer name (must be different persons)
3. Proposed auditor's report date
4. EQCR applicability determination (mandatory for listed / required per firm policy / not required)
5. Status of working paper reviews (all complete and signed off?)

## CRITICAL: SA 220.19 Report Dating Sequencing

**THE MOST COMMON EQCR ERROR - DO NOT VIOLATE THIS REQUIREMENT**

### SA 220.19 Prohibition

**Per SA 220.19, the auditor's report CANNOT be dated before EQCR completion for listed entities.**

This is a **strict sequencing requirement**, not a suggestion. Violation constitutes non-compliance with SA 220.

### Correct vs. Incorrect Sequencing

**WRONG SEQUENCING** (violates SA 220.19):
```
15-May: Partner reviews draft report and signs off
15-May: Auditor's report dated 15-May
17-May: EQCR reviewer completes review
❌ VIOLATION: Report dated before EQCR completion
```

**CORRECT SEQUENCING** (complies with SA 220.19):
```
12-May: Engagement team completes all audit procedures
13-May: Draft audit report prepared
13-May: EQCR review commences
15-May: EQCR reviewer completes review and signs off
15-May (or later): Partner dates and signs auditor's report
✅ COMPLIANT: Report dated on or after EQCR completion
```

### Verification Checkpoint

**Before dating the auditor's report, verify:**
- EQCR completion date: [DATE 1]
- Proposed auditor's report date: [DATE 2]
- **CONFIRM: DATE 2 >= DATE 1** (report date must be on or after EQCR completion)

If the dates are incorrect, **STOP** and reschedule:
- Option A: Complete EQCR earlier to meet desired report date
- Option B: Delay report date to allow EQCR completion
- **NOT PERMITTED**: Dating report before EQCR completion

### EQCR Findings Requiring Resolution

If the EQCR reviewer identifies issues requiring resolution:

1. **Engagement team addresses findings**: Additional audit procedures, revised analysis, enhanced documentation
2. **Re-submission for EQCR clearance**: Engagement team submits resolution evidence to EQCR reviewer
3. **EQCR reviewer re-reviews**: Confirms findings adequately addressed
4. **Report dating prohibited**: Until all EQCR findings are resolved and EQCR reviewer provides final sign-off
5. **New EQCR completion date**: May be several days after initial review if significant rework required

**Timeline implication**: Plan for EQCR completion at least 2-3 days before desired report date to allow for findings resolution if needed.

## EQCR Applicability Guidance

### When is EQCR Required?

**Mandatory** (per SA 220.19):
- All listed entities (companies whose equity or debt securities are listed on a recognized stock exchange)

**Recommended** (per firm policy - consult quality control manual):
- Unlisted public interest entities:
  - Government companies (Section 2(45) of Companies Act)
  - Public sector undertakings
  - Government-controlled entities
- Financial institutions:
  - Banks (scheduled and non-scheduled)
  - Non-Banking Financial Companies (NBFCs)
  - Insurance companies
  - Asset management companies
  - Stock brokers and commodity brokers
- Large private companies:
  - Turnover > Rs. 1,000 crore OR
  - Total assets > Rs. 500 crore OR
  - Significant debt financing (borrowings > Rs. 100 crore)
- Entities with significant public stakeholder base:
  - >500 shareholders
  - Public deposits accepted
  - Significant retail creditors or customers
- Regulatory oversight entities (SEBI, RBI, IRDAI, IRDA regulated)
- High-risk engagements:
  - First-year audit of significant entity
  - Going concern material uncertainty exists
  - Qualified/adverse/disclaimer opinion anticipated
  - Complex Group structures requiring consolidation
  - Significant fraud risks or fraud identified
  - Significant related party transactions

**Decision Framework for Borderline Cases**:
Evaluate based on:
1. Entity size and complexity
2. Public interest level (number and nature of stakeholders)
3. Regulatory oversight and scrutiny
4. Risk profile (financial, operational, fraud, going concern)
5. Stakeholder expectations (lenders, regulators, large shareholders)
6. Prior year issues or qualified opinions

**When in doubt, err on the side of performing EQCR.** The quality benefit justifies the incremental cost.

## EQCR Reviewer Qualifications

Per SA 220, the EQCR reviewer must satisfy the following criteria:

**Independence** (non-negotiable):
- Must NOT be the engagement partner
- Must NOT be any member of the engagement team
- Must NOT have made any decisions that the EQCR would evaluate
- Must NOT have any financial interest in the entity
- Must be free from threats to independence (self-interest, self-review, advocacy, familiarity, intimidation)

**Technical Competence**:
- Sufficient technical expertise: Thorough understanding of SAs, Ind AS, Companies Act, CARO 2020
- Experience level: Typically partner or senior director level with audit experience
- Industry knowledge: Preferably experience in the entity's industry or similar complexity
- Continuing professional education: Up-to-date with recent accounting and auditing developments

**Authority**:
- Must have sufficient authority within the firm to make objective judgments
- Must be able to require engagement team to perform additional procedures if necessary
- Should have direct access to firm's managing partner if disagreements arise

**Availability and Objectivity**:
- Must have sufficient time to perform thorough review (not cursory rubber-stamp)
- Must apply professional skepticism and question engagement team judgments
- Should not be burdened with conflicting responsibilities during EQCR period

**Rotation Considerations**:
- Consider rotating EQCR reviewer consistent with partner rotation policies
- For listed entities: EQCR reviewer rotation helps maintain independence and fresh perspective
- Maximum tenure: Align with firm policy (e.g., 5-7 years, then rotate)

## Workflow

### 1. Review Engagement Acceptance Documentation

Per SA 220.9-11, verify proper client acceptance/continuance:

**Client Acceptance/Continuance Review**:
- Client acceptance/continuance form completed (see /audit:client-acceptance)
- Risk assessment appropriate (low/medium/high rating justified)
- Independence confirmed at acceptance stage (all team members, all prohibited services check)
- Competence to perform engagement confirmed (technical expertise, industry knowledge, resources)
- Ethical requirements compliance documented (ICAI Code of Ethics)
- Acceptance approval by appropriate personnel (partner level for medium/high risk)
- Recurring client: Prior year issues considered (qualified opinions, scope limitations, fee disputes)

**EQCR Reviewer Assessment**:
- Is the client acceptance decision appropriate given the entity's risk profile?
- Were independence threats properly identified and safeguards adequate?
- Does the firm have the competence and resources to perform this engagement?

**Rating**: [Satisfactory / Requires Attention / Not Satisfactory]

**Comments**: [EQCR reviewer's specific observations, concerns, or recommendations]

---

### 2. Verify Independence Assessment Current

Confirm independence throughout audit period per SA 220:

**Independence Questionnaire**:
- All team members completed independence questionnaire (engagement partner, manager, seniors, staff)
- Questionnaires current (dated within 30 days of proposed report date)
- No prohibited services provided during audit period or financial period under audit
- Prohibited services check per Section 144 of Companies Act:
  - No accounting and bookkeeping services
  - No internal audit services
  - No design and implementation of financial information system
  - No actuarial services
  - No investment advisory or investment banking services
  - No outsourced CFO or similar management functions
  - No legal services

**Fee Dependency Assessment**:
- Recurring audit fees from this client: [X]% of firm's total revenues
- Threshold for listed entities: <15% (per ICAI guidelines)
- Threshold for unlisted: <25% (per firm policy, adjust as needed)
- If threshold exceeded: Safeguards documented (additional EQCR, consultation with technical partner)

**Close Relationships Check**:
- No close personal relationships (immediate family, close relatives) between team members and client key personnel
- No business relationships (joint ventures, partnerships, significant vendor/customer relationships)
- No recent employment (team members not employed by client within last 2 years)

**Rotation Requirements** (for listed companies):
- Engagement partner rotation: Every 5 years (Section 139(2) proviso, Companies Act)
- Audit firm rotation: Every 10 years (if individual, every 5 years) (Section 139(2), Companies Act)
- Current engagement partner tenure: [X] years of [5] years maximum
- Rotation compliant: [Yes / No - action required]

**Threats and Safeguards**:
- Self-interest threat: [Identified / Not identified] - Safeguards: [describe]
- Self-review threat: [Identified / Not identified] - Safeguards: [describe]
- Advocacy threat: [Identified / Not identified] - Safeguards: [describe]
- Familiarity threat: [Identified / Not identified] - Safeguards: [describe]
- Intimidation threat: [Identified / Not identified] - Safeguards: [describe]
- Overall residual risk after safeguards: [Low / Acceptable / Unacceptable]

**EQCR Reviewer Assessment**:
- Are all independence requirements satisfied?
- Are threats properly identified and safeguards adequate?
- Is independence documented and current?

**Rating**: [Satisfactory / Requires Attention / Not Satisfactory]

**Comments**: [Specific observations]

---

### 3. Review Materiality Calculations and Appropriateness

Per SA 320 (Materiality in Planning and Performing an Audit):

**Review Materiality Determination** (see /audit:materiality):
- Benchmark selected: [Profit Before Tax / Revenue / Total Assets / Net Assets / Gross Profit]
- Benchmark amount: Rs. [AMOUNT]
- Percentage applied: [X]%
- Overall materiality: Rs. [AMOUNT]

**Evaluate Benchmark Appropriateness**:
- Is the benchmark appropriate for this entity's circumstances?
- For profit-making entities with stable profits: PBT typically appropriate
- For loss-making or volatile profit entities: Revenue or assets may be more appropriate
- For government entities or non-profits: Total expenses or gross expenses
- For asset-intensive entities: Total assets
- Benchmark selection rationale documented: [Yes / No]

**Evaluate Percentage Applied**:
- Percentage range typically: 0.5%-2% of PBT, 0.5%-1% of revenue, 1%-2% of assets
- Is percentage within reasonable range?
- Is percentage justified based on entity-specific factors (volatility, stakeholder expectations, public interest)?

**Performance Materiality Review**:
- Performance materiality: Rs. [AMOUNT] ([Y]% of overall materiality)
- Expected range: 50%-75% of overall materiality (NEVER above 75%)
- Is performance materiality within acceptable range?
- Factors considered: Risk of material misstatement, control environment, prior year misstatements

**Trivial Threshold Review**:
- Trivial threshold: Rs. [AMOUNT] ([Z]% of overall materiality)
- Expected range: 3%-5% of overall materiality
- Is trivial threshold appropriate?

**Materiality Revision During Audit**:
- Was materiality revised during the audit? [Yes / No]
- If yes, revision documented with: Original amounts, revised amounts, reason for revision, date of revision
- Revision appropriate? [Yes / No / Not applicable]

**Impact on Extent of Testing**:
- Did performance materiality appropriately guide extent of testing?
- Were sample sizes, analytical procedure thresholds, and testing scope consistent with materiality levels?

**EQCR Reviewer Assessment**:
- Is materiality determination reasonable and appropriate?
- Is performance materiality within acceptable range and did it guide audit procedures?

**Rating**: [Satisfactory / Requires Attention / Not Satisfactory]

**Comments**: [Specific observations]

---

### 4. Review Risk Assessment and Responses

Per SA 315 (Identifying and Assessing the Risks of Material Misstatement) and SA 330 (The Auditor's Responses to Assessed Risks):

**Review Risk Assessment Workpapers**:
- /audit:risk-matrix (file reference B1)
- /audit:fraud-risk (file reference B2)
- /audit:significant-risks (file reference B3)

**Inherent and Control Risk Assessments**:
- Are inherent risk assessments reasonable for each significant financial statement area and assertion?
- Are control risk assessments based on adequate understanding of internal controls?
- Is the combined risk assessment (inherent × control) appropriate?
- Higher-risk areas identified: [List significant risks]

**Significant Risks Appropriately Identified**:
- Revenue recognition (presumed fraud risk per SA 240): [Identified / Not applicable]
- Management override of controls (presumed fraud risk per SA 240): [Identified]
- Entity-specific significant risks identified: [List]
- Are all significant risks properly identified and documented?

**Audit Responses Appropriate for Assessed Risks**:
- For significant risks, do responses include tests of details? (SA 330.21 requires ToD, not just analytical)
- For higher-risk assertions, is testing more extensive (larger samples, more experienced team members)?
- For lower-risk areas, are analytical procedures the primary response (if appropriate)?
- Are audit responses clearly documented and linked to assessed risks?

**Specific Review Areas**:
- **Revenue Recognition Response**: Cut-off testing, contract review, Ind AS 115 judgment areas addressed
- **Management Override Response**: Journal entry testing, estimates review, unusual transactions analysis, unpredictability element
- **Going Concern Risk** (if applicable): Cash flow forecasts reviewed, debt covenant compliance verified, subsequent events considered

**EQCR Reviewer Assessment**:
- Are risk assessments reasonable?
- Are significant risks properly identified (including presumed fraud risks)?
- Are audit responses appropriate for assessed risks (nature, timing, extent)?

**Rating**: [Satisfactory / Requires Attention / Not Satisfactory]

**Comments**: [Specific observations]

---

### 5. Verify Significant Judgments

Evaluate critical areas requiring professional judgment (per SA 220.17):

#### 5a. Going Concern (SA 570)

**Review Going Concern Assessment** (see /audit:going-concern, file reference E1):
- Period covered: At least 12 months from balance sheet date
- Procedures performed: Management assessment review, analytical procedures, cash flow forecast review, debt covenant review, subsequent events
- Indicators identified: Financial, operating, other
- Severity assessment: High / Medium / Low / None

**Management's Plans to Address** (if indicators exist):
- Plans documented: Financing plans, operational improvements, asset disposals, cost reductions
- Auditor's evaluation: Feasibility assessment, cash flow forecast reasonableness, binding commitments verification
- Assessment conclusion: Plans are [feasible / uncertain / unlikely to succeed]

**Financial Statement Disclosures**:
- Adequacy of going concern disclosures in Note [X]
- Disclosure includes: Principal events/conditions, management's plans, material uncertainty description (if applicable)

**Auditor's Conclusion**:
- [No material uncertainty - going concern basis appropriate]
- [Material uncertainty exists - adequately disclosed - separate Going Concern section in report per SA 570.22]
- [Going concern basis inappropriate - adverse opinion required per SA 570.24]

**EQCR Reviewer Assessment**:
- Is the going concern assessment thorough and conclusion reasonable?
- If material uncertainty exists, are disclosures adequate?
- Is the impact on the audit report appropriate (separate section or modification)?

**Rating**: [Satisfactory / Requires Attention / Not Satisfactory]

**Comments**: [Specific observations]

#### 5b. Accounting Estimates (SA 540 Revised)

**Review Estimates Assessment** (see /audit:estimates-review, file reference E2):
- Significant estimates reviewed: ECL provisioning, inventory NRV, impairment, fair values, useful lives, provisions
- For each significant estimate:
  - Management's methodology: [Appropriate / Questionable]
  - Key assumptions: [Reasonable / Optimistic / Conservative / Unrealistic]
  - Auditor's testing approach: [Approach 1 (subsequent events) / Approach 2 (test process) / Approach 3 (independent estimate)]
  - Reasonableness conclusion: [Within acceptable range / Biased / Unreasonable]

**Management Bias Assessment**:
- Pattern identified: [Consistently conservative / Consistently optimistic / Random / Mixed]
- Bias indicators: Changes benefiting management, selective application, inconsistent treatment, failure to adjust
- Motivation to bias: [Bonus targets / Debt covenants / Going concern / Other]
- Fraud risk consideration: Do bias indicators elevate fraud risk? [Yes / No]
- Overall bias conclusion: [No bias identified / Some indicators but not material / Significant bias]

**EQCR Reviewer Assessment**:
- Are significant estimates identified and appropriately tested?
- Are management's assumptions reasonable?
- Is management bias adequately considered?

**Rating**: [Satisfactory / Requires Attention / Not Satisfactory]

**Comments**: [Specific observations]

#### 5c. Provisions and Contingencies

**Review Provisions Assessment**:
- Legal matters, litigation, claims, warranties, restructuring, environmental provisions
- Amounts provided: Rs. [AMOUNT]
- Disclosure-only matters: [List]
- Legal counsel responses obtained and reviewed
- Classification appropriate: Provision (probable and estimable) vs. contingent liability (possible) vs. disclosure not required (remote)

**EQCR Reviewer Assessment**:
- Are provisions appropriately measured and contingencies appropriately disclosed?
- Is treatment consistent with legal counsel advice?

**Rating**: [Satisfactory / Requires Attention / Not Satisfactory]

**Comments**: [Specific observations]

#### 5d. Revenue Recognition

**Review Revenue Recognition Assessment**:
- Revenue recognition policies comply with Ind AS 115
- Significant judgment areas: Performance obligation identification, transaction price allocation, variable consideration, timing of recognition
- Complex contracts reviewed: [Number], total value Rs. [AMOUNT]
- Judgment conclusions: [Reasonable / Aggressive / Conservative]
- Cut-off testing performed: [Sample size], exceptions: [Number]

**EQCR Reviewer Assessment**:
- Are revenue recognition policies appropriate and consistently applied?
- Are significant judgment areas adequately addressed?

**Rating**: [Satisfactory / Requires Attention / Not Satisfactory]

**Comments**: [Specific observations]

---

### 6. Review Audit Report and CARO Report Drafts

Before issuance, verify appropriateness of all reporting:

#### 6a. Audit Report Review (SA 700/705/706)

**Review Draft Audit Report** (see /audit:draft-report, file reference G1):

**Opinion Type Appropriateness**:
- Proposed opinion: [Unmodified / Qualified / Adverse / Disclaimer]
- Is opinion type supported by audit findings?
- If modified opinion:
  - Matter giving rise to modification clearly described
  - Materiality assessed: [Material but not pervasive / Material and pervasive]
  - Basis for Qualified/Adverse/Disclaimer paragraph clear and complete

**Basis for Opinion Paragraph**:
- States audit conducted per SAs
- States opinion on true and fair view (or exception if modified)
- References Auditor's Responsibilities section
- Independence statement included

**Going Concern Section** (if material uncertainty exists):
- Separate section with heading "Material Uncertainty Related to Going Concern" (per SA 570.22)
- NOT labeled as Emphasis of Matter
- Draws attention to Note [X] in financial statements
- States that opinion is not modified in respect of this matter

**Key Audit Matters Section** (for listed entities - mandatory per SA 701):
- Review KAM draft (see /audit:kam-draft, file reference G2)
- KAMs identified are most significant matters communicated with TCWG
- Each KAM includes: Description, how matter addressed in audit, reference to financial statement disclosure
- Appropriate number of KAMs: Typically 3-5 (not too few, not too many)
- KAMs appropriately exclude: Matters giving rise to modified opinion (reported separately), going concern material uncertainty (reported separately), matters not communicated with TCWG

**Emphasis of Matter / Other Matter Paragraphs**:
- Emphasis of Matter (if applicable): Draws attention to appropriately disclosed matter fundamental to users' understanding (e.g., significant related party transaction, significant uncertainty other than going concern)
- Other Matter (if applicable): Matters relevant to users' understanding of audit, auditor's responsibilities, or audit report (e.g., other information not yet available, comparative information audited by predecessor)

**Section 143(3) Reporting** (Companies Act specific):
- All 10 sub-clauses of Section 143(3) addressed
- Reporting on internal financial controls per Section 143(3)(i) - separate opinion provided
- Adverse reporting (if any) supported by audit evidence

**Auditor's Responsibilities Section**:
- Standard language per SA 700 Appendix
- Includes responsibilities for fraud (SA 240), going concern (SA 570), KAM (SA 701 if listed)
- Appropriate for entity (listed vs unlisted, Ind AS vs AS)

**Report Dating, Signature, Place**:
- Report date: [DATE] (verify >= EQCR completion date for listed entities)
- Audit firm name, address, registration number (ICAI FRN)
- Partner name, membership number, designation, UDIN (placeholder for actual UDIN after report signing)
- Place of signature

**EQCR Reviewer Assessment**:
- Is the audit report appropriate in all respects?
- Is the opinion type justified by audit findings?
- Are all required sections included and properly worded?

**Rating**: [Satisfactory / Requires Attention / Not Satisfactory]

**Comments**: [Specific observations]

#### 6b. CARO 2020 Report Review

**Review CARO Report Draft** (see /audit:caro-report, file reference G3):

**Applicability Verification**:
- Is CARO applicable to this entity? (All companies except: exempted classes per Rule 11, Section 143(3)(i) reporting)
- Are all applicable clauses addressed (3(i) through 3(xxi))?

**Adverse Reporting Review**:
- Adverse reporting in clauses: [List]
- Each adverse report supported by audit evidence in working papers
- Cross-reference to working papers: [File references]
- Consistency with audit report and Section 143(3) reporting

**Not Applicable Conclusions**:
- Clauses marked N/A: [List]
- Rationale for N/A valid: (e.g., no inventory, no borrowings, no loans given, no fraud reported)
- N/A conclusions not used to avoid difficult reporting (professional skepticism check)

**Specific High-Risk CARO Clauses**:
- 3(i): PPE records, title deeds, revaluation
- 3(ii): Inventory physical verification
- 3(iii): Loans, guarantees, security to specified parties (related parties)
- 3(v): Public deposits (acceptance prohibited, repayment status)
- 3(vii): Statutory dues regularity and disputes (critical clause, often adverse)
- 3(ix): Loan defaults and utilization
- 3(x): Fraud reported by auditor
- 3(xiii): Related party transactions (Sections 177, 188)

**EQCR Reviewer Assessment**:
- Is CARO reporting complete and accurate?
- Are adverse reports justified and supported?
- Is N/A usage appropriate?
- Consistency with audit report?

**Rating**: [Satisfactory / Requires Attention / Not Satisfactory]

**Comments**: [Specific observations]

---

### 7. Check Documentation Completeness

Per SA 230 (Audit Documentation):

**Significant Matters Documented**:
- All significant matters identified during audit are documented with auditor's conclusions
- Significant matters include: Significant risks, significant judgments, significant findings/issues, significant consultations

**Significant Judgments Documented**:
- Each significant judgment documented with: Issue, alternatives considered, conclusion, rationale, date, person
- Examples: Materiality determination, going concern conclusion, estimate reasonableness, provision classification

**Significant Findings/Issues**:
- Significant findings documented: Control deficiencies, misstatements, disagreements with management, fraud indicators
- Resolution documented: How findings were addressed, additional procedures performed, conclusion

**Consultations Documented**:
- All consultations (internal or external) documented with: Issue, persons consulted, advice received, conclusion, date
- Consultation conclusions appropriately reflected in audit approach and conclusions

**Disagreements with Management**:
- All disagreements documented: Nature of disagreement, how resolved, conclusion
- Unresolved disagreements: Escalation documented, impact on audit report

**Review Notes and Sign-Offs**:
- All review notes from manager and partner reviews are cleared
- Working papers signed off: Preparer, reviewer, partner (where applicable)
- Review completion dates documented

**Completion Checklist**:
- Firm's audit completion checklist signed off
- All items marked complete or N/A (with justification)

**Working Papers Support Audit Report**:
- EQCR reviewer selected sample of working papers and verified conclusions support audit report
- No inconsistencies between working papers and audit report/CARO report

**File Ready for Assembly** (SA 230.14):
- 60-day assembly deadline: [Report Date + 60 days]
- Assembly plan documented: Responsible person, assembly tasks, completion timeline

**EQCR Reviewer Assessment**:
- Is audit documentation complete for all significant matters?
- Do working papers support conclusions in audit report?
- Is file ready for assembly within 60 days?

**Rating**: [Satisfactory / Requires Attention / Not Satisfactory]

**Comments**: [Specific observations]

---

### 8. Verify Professional Skepticism Application

Throughout audit, assess whether engagement team demonstrated professional skepticism per SA 200:

**Questioning Mindset Evidence**:
- Working papers show evidence of auditor questioning and not accepting management representations at face value
- Examples: Follow-up questions documented, alternative explanations considered, corroborating evidence obtained

**Contradictory Evidence Investigated**:
- When audit evidence contradicted management assertions or other evidence, was it adequately investigated?
- Investigation documented: Nature of contradiction, additional procedures performed, resolution

**Management Bias Considered**:
- Estimates review shows consideration of management bias (not just acceptance of management's point estimate)
- Bias assessment documented: Pattern identification, motivation analysis, conclusion

**Not Over-Relying on Prior Year**:
- Is current year audit appropriately tailored to current year risks and circumstances?
- Evidence that auditor did not simply roll forward prior year approach without reassessment

**Critical Assessment of Management Representations**:
- Management representations corroborated with independent evidence where possible
- Representations not accepted blindly (especially for significant matters)

**Challenge in High-Risk Areas**:
- Significant risks show evidence of heightened skepticism: More extensive testing, partner involvement, consultations
- Fraud risk procedures demonstrate element of unpredictability

**EQCR Reviewer Assessment**:
- Does audit documentation demonstrate appropriate professional skepticism?
- Are there areas where skepticism should have been higher?

**Rating**: [Satisfactory / Requires Attention / Not Satisfactory]

**Comments**: [Specific observations]

---

### 9. Confirm Consultations Documented

Review technical consultations per SA 220.18:

**Complex or Contentious Matters**:
- Complex accounting matters: [List if any] - Consultation documented? [Yes / No / N/A]
- Complex auditing matters: [List if any] - Consultation documented? [Yes / No / N/A]
- Disagreements with management: [List if any] - Consultation documented? [Yes / No / N/A]

**Consultation Documentation Requirements**:
For each consultation, documentation includes:
- Issue: Clear description of the matter requiring consultation
- Persons consulted: Name, qualification, internal/external
- Advice received: Summary of advice and rationale
- Conclusion: How consultation conclusion was reflected in audit approach
- Date: When consultation occurred

**Consultation Conclusions Appropriately Reflected**:
- Review sample consultations and verify conclusions are reflected in working papers and audit report
- Consistency check: No deviations from consultation advice without documented justification

**EQCR Reviewer Assessment**:
- Are all required consultations documented?
- Are consultation conclusions appropriately reflected?

**Rating**: [Satisfactory / Requires Attention / Not Satisfactory]

**Comments**: [Specific observations]

---

### 10. EQCR Findings and Resolution

Track all findings identified during EQCR:

**Finding Documentation** (for each finding):

| Finding # | Description | Severity | Engagement Team Response | Resolution Status | Evidence |
|-----------|-------------|----------|-------------------------|-------------------|----------|
| 1 | [Description] | [Critical / Important / Advisory] | [Response] | [Open / In Progress / Resolved / Accepted by EQCR] | [File ref] |
| 2 | [Description] | [Critical / Important / Advisory] | [Response] | [Open / In Progress / Resolved / Accepted by EQCR] | [File ref] |

**Severity Definitions**:
- **Critical**: Must be resolved before audit report issuance. Report dating prohibited until resolved.
- **Important**: Should be resolved before report issuance. If not resolved, EQCR reviewer must explicitly accept.
- **Advisory**: Recommendations for improvement in future audits. Do not affect current year report issuance.

**Resolution Process**:
1. Engagement team receives EQCR findings
2. Engagement team performs additional procedures / enhances documentation / revises conclusions as needed
3. Engagement team submits resolution evidence to EQCR reviewer
4. EQCR reviewer reviews resolution evidence
5. EQCR reviewer accepts resolution or requests further work
6. Process repeats until all critical and important findings resolved

**Timeline for Resolution**:
- Critical findings: Must be resolved before report dating
- Important findings: Target resolution before report dating or explicit acceptance by EQCR reviewer
- Advisory findings: Documented for future engagement improvement

---

## Overall EQCR Conclusion

After completing all sections of the EQCR checklist, the EQCR reviewer provides an overall conclusion.

**Three Possible Outcomes**:

### Outcome 1: Approved for Issuance

**Conclusion**: All matters have been satisfactorily addressed. The significant judgments made and conclusions reached are appropriate. The proposed audit report is appropriate in the circumstances. Sufficient appropriate audit evidence has been obtained.

**Status**: EQCR complete. Audit report may be dated and issued.

**EQCR Completion Date**: [DATE]

---

### Outcome 2: Approved Subject to Resolution of Items

**Conclusion**: EQCR is substantially complete, but specific items listed below must be resolved before the audit report can be issued.

**Outstanding Items**:
1. [Specific item requiring resolution]
2. [Specific item requiring resolution]
3. [Specific item requiring resolution]

**Status**: Report dating PROHIBITED until all items are resolved and EQCR reviewer provides clearance.

**Expected Resolution Date**: [DATE]

**Process**: Engagement team to resolve items and submit evidence to EQCR reviewer. EQCR reviewer will re-review and provide final sign-off.

---

### Outcome 3: Not Approved

**Conclusion**: Significant concerns exist that require substantial additional audit work or fundamental reconsideration of conclusions. The proposed audit report is not appropriate as currently drafted.

**Significant Concerns** (list specific issues):
1. [Major concern - describe in detail]
2. [Major concern - describe in detail]

**Required Actions**:
- Engagement team must perform substantial additional audit procedures
- Significant judgments must be reconsidered
- Audit report may require modification
- Consultation with technical partner or national office required
- Re-submission for EQCR after substantial rework

**Status**: Report dating PROHIBITED. Substantial rework required.

**This is a rare outcome but critical for quality control when engagement team has not adequately addressed significant matters.**

---

## EQCR Sign-Off Section

**EQCR Reviewer Information**:
- Name: [Full Name]
- Qualification: [CA, CPA, etc.]
- ICAI Membership Number: [Number]
- Designation: [Partner / Director / Senior Manager]
- Relationship to engagement: Independent of engagement team, not part of audit team

**EQCR Timeline**:
- EQCR start date: [DATE]
- EQCR completion date: [DATE]
- Duration: [X] days

**Overall EQCR Conclusion**: [Approved for Issuance / Approved Subject to Resolution / Not Approved]

**EQCR Reviewer Signature**: ___________________

**Date**: [DATE]

**Critical Verification for Listed Entities**:

> **Per SA 220.19, the auditor's report date ([REPORT DATE]) is not earlier than this EQCR completion date ([EQCR DATE]).**
>
> Verified: Report date ([REPORT DATE]) >= EQCR completion date ([EQCR DATE]) ✓

---

## Cross-References Section

### Reviews (documents reviewed during EQCR):

**Completion and Planning**:
- /audit:completion-memo → File reference F6 (partner synthesis reviewed)
- /audit:materiality → File reference A2 (materiality determination reviewed)
- /audit:audit-strategy → File reference A1 (audit approach reviewed)

**Risk Assessment**:
- /audit:risk-matrix → File reference B1 (risk assessment reviewed)
- /audit:fraud-risk → File reference B2 (fraud risks reviewed)
- /audit:significant-risks → File reference B3 (significant risks reviewed)

**Significant Judgments**:
- /audit:going-concern → File reference E1 (going concern conclusion reviewed)
- /audit:estimates-review → File reference E2 (estimates and bias reviewed)
- /audit:subsequent-events → File reference F1 (subsequent events reviewed)
- /audit:misstatement-schedule → File reference F2 (misstatements reviewed)

**Reporting**:
- /audit:draft-report → File reference G1 (audit report appropriateness assessed)
- /audit:kam-draft → File reference G2 (KAM selection reviewed - listed entities)
- /audit:caro-report → File reference G3 (CARO consistency verified)
- /audit:representation-letter → File reference G8 (management representations reviewed - dating verified)

### Filed:

- /audit:file-index → This EQCR checklist filed at Section F7

---

## Output Format

A comprehensive EQCR checklist (minimum 10-15 pages) containing:

1. **Cover Page**: Entity name, FY, engagement partner, EQCR reviewer, EQCR dates
2. **CRITICAL SEQUENCING WARNING**: SA 220.19 report dating prohibition with correct/incorrect examples
3. **EQCR Applicability Guidance**: When EQCR is required (mandatory vs. recommended)
4. **EQCR Reviewer Qualifications**: Independence, competence, authority criteria
5. **Section 1: Engagement Acceptance** - Rating and comments
6. **Section 2: Independence** - Rating and comments
7. **Section 3: Materiality** - Rating and comments
8. **Section 4: Risk Assessment and Responses** - Rating and comments
9. **Section 5: Significant Judgments** (4 sub-sections: going concern, estimates, provisions, revenue) - Ratings and comments per sub-section
10. **Section 6: Audit Report and CARO Review** (2 sub-sections) - Ratings and comments per sub-section
11. **Section 7: Documentation Completeness** - Rating and comments
12. **Section 8: Professional Skepticism** - Rating and comments
13. **Section 9: Consultations** - Rating and comments
14. **EQCR Findings Table**: Findings, severity, resolution status
15. **Overall EQCR Conclusion**: One of three outcomes (Approved / Approved Subject to Resolution / Not Approved)
16. **EQCR Sign-Off**: Reviewer details, timeline, signature, SA 220.19 verification statement
17. **Cross-References**: All related commands and file references

## Professional Disclaimer

> **Professional Judgment Required**: This command generates a comprehensive EQCR checklist template per SA 220. The EQCR must be performed by a qualified reviewer independent of the engagement team with appropriate technical expertise.
>
> **SA 220.19 Compliance**: For listed entities, the auditor's report CANNOT be dated before EQCR completion. This is a strict requirement, not a recommendation. Violation constitutes non-compliance with SA 220.
>
> **EQCR Effectiveness**: The EQCR is only effective if the reviewer applies professional skepticism, questions engagement team judgments, and requires additional procedures when necessary. A cursory or rubber-stamp review defeats the purpose of EQCR and provides no quality benefit.
>
> **Responsibility**: The EQCR reviewer is responsible for the objective evaluation documented in this checklist. The engagement partner remains responsible for the audit and the audit opinion. The EQCR does not reduce the engagement partner's responsibilities.
>
> **No Substitute for Professional Judgment**: This tool assists with EQCR documentation structure but does not substitute the professional judgment of qualified Chartered Accountants. All EQCR findings, ratings, and conclusions must be based on the reviewer's independent assessment.
