# Analytical Review

Perform preliminary analytical procedures per SA 520 (Analytical Procedures) to identify unusual trends, significant variances, and areas requiring additional audit attention during the planning phase.

## Required Context

Before running this command, ensure:
- Current year draft financial statements available (balance sheet, statement of profit & loss)
- Prior year audited financial statements available (restated if necessary for comparability)
- Prior 2-3 years comparative financial data (if available for trend analysis)
- Industry benchmarks or peer company data (if applicable)
- Understanding of entity's business and recent significant events
- **Performance materiality amount** (for investigation threshold determination)
- **Industry sector** (for industry benchmark comparison)
- **Knowledge of significant events during the year** (acquisitions, new products, restructuring, management changes)

**Ask user:** "Provide current year draft P&L and balance sheet figures, prior year audited figures, and prior 2 years if available. Also provide performance materiality amount and identify any significant events during the year (e.g., acquisitions, new product lines, restructuring, management changes)."

## Workflow

### Step 1: Set Investigation Threshold

Before computing ratios and performing variance analysis, establish the investigation threshold:

**Primary threshold:** Variance >10% year-over-year (SA 520 general practice)
**Alternative threshold:** Variance >performance materiality (absolute amount)
**Threshold selection:** Use the LOWER of the two thresholds (more conservative approach ensures all material variances are investigated)

**For significant accounts** (revenue, receivables, inventory, major expenses):
- Consider using a 5% threshold (more sensitive to changes in key accounts)
- Rationale: These accounts are high-risk and drive overall financial statement assessment

**Decision point:** Document the investigation threshold selected and rationale:
- "Investigation threshold set at [10% / 5% / performance materiality amount / other]. Rationale: [explain choice based on risk assessment, materiality, account significance]."
- SA 520 requirement: "The auditor shall investigate significant fluctuations or relationships that are inconsistent with other relevant information or that differ from expected values by a significant amount."

### Step 2: Calculate Key Financial Ratios

Calculate ratios across four categories. Compare current year to prior year, calculate change, and benchmark against industry norms (if available).

#### Liquidity Ratios

| Ratio | Formula | Current Year | Prior Year | Change (%) | Industry Benchmark | Assessment |
|-------|---------|--------------|------------|------------|-------------------|------------|
| Current ratio | Current Assets / Current Liabilities | [calc] | [calc] | [calc] | [benchmark] | [Improving/Stable/Deteriorating] |
| Quick ratio | (Current Assets - Inventory) / Current Liabilities | [calc] | [calc] | [calc] | [benchmark] | [comment] |
| Cash ratio | Cash & Cash Equivalents / Current Liabilities | [calc] | [calc] | [calc] | [benchmark] | [comment] |
| Working capital | Current Assets - Current Liabilities | [calc] | [calc] | [calc] | N/A | [Increasing/Stable/Declining] |
| Working capital trend | (CY WC - PY WC) / PY WC × 100 | N/A | N/A | [calc] | N/A | [comment] |

**Red flag indicators:**
- Current ratio < 1.0 (current liabilities exceed current assets → liquidity stress)
- Current ratio declining significantly (>20% decline year-over-year → deteriorating liquidity)
- Quick ratio < 0.5 (insufficient liquid assets to cover short-term obligations)
- Negative working capital or rapidly declining working capital (going concern indicator)

#### Profitability Ratios

| Ratio | Formula | Current Year | Prior Year | Change (%) | Industry Benchmark | Assessment |
|-------|---------|--------------|------------|------------|-------------------|------------|
| Gross profit margin | Gross Profit / Revenue × 100 | [calc] | [calc] | [calc] | [benchmark] | [Improving/Stable/Deteriorating] |
| Operating profit margin | EBIT / Revenue × 100 | [calc] | [calc] | [calc] | [benchmark] | [comment] |
| Net profit margin | PAT / Revenue × 100 | [calc] | [calc] | [calc] | [benchmark] | [comment] |
| EBITDA margin | EBITDA / Revenue × 100 | [calc] | [calc] | [calc] | [benchmark] | [comment - useful for debt covenant compliance] |
| Return on assets (ROA) | PAT / Total Assets × 100 | [calc] | [calc] | [calc] | [benchmark] | [comment] |
| Return on equity (ROE) | PAT / Shareholders' Equity × 100 | [calc] | [calc] | [calc] | [benchmark] | [comment] |

**Red flag indicators:**
- **Gross margin improving while industry margins declining** (potential revenue manipulation or timing differences requiring investigation)
- **Revenue increasing but profit declining** (cost absorption issues, expense recognition problems, or margin compression)
- **Operating margin negative** (EBIT < 0 → going concern indicator, entity not covering operating costs)
- **Profitability ratios significantly above industry norms without clear business reason** (earnings quality concern, aggressive accounting policies)
- **EBITDA margin declining while revenue stable** (operating inefficiencies or cost increases not passed to customers)

#### Leverage Ratios

| Ratio | Formula | Current Year | Prior Year | Change (%) | Industry Benchmark | Assessment |
|-------|---------|--------------|------------|------------|-------------------|------------|
| Debt-to-equity | Total Debt / Shareholders' Equity | [calc] | [calc] | [calc] | [benchmark] | [Improving/Stable/Deteriorating] |
| Debt service coverage ratio (DSCR) | EBITDA / (Principal Repayment + Interest) | [calc] | [calc] | [calc] | [benchmark] | [comment] |
| Interest coverage | EBIT / Interest Expense | [calc] | [calc] | [calc] | [benchmark] | [comment] |
| Net debt / EBITDA | (Total Debt - Cash) / EBITDA | [calc] | [calc] | [calc] | [benchmark] | [comment - common covenant metric] |

**Red flag indicators:**
- **DSCR < 1.0** (entity cannot service debt obligations from operating cash flows → going concern indicator, likely loan covenant breach)
- **Interest coverage < 1.5** (debt service stress, limited buffer for interest payments)
- **Debt-to-equity significantly above industry norm** (high financial leverage, vulnerability to interest rate changes or business downturn)
- **Net debt / EBITDA > 4.0** (high leverage by lender standards, refinancing risk)
- **Increasing leverage ratios in declining revenue environment** (deteriorating credit profile)

#### Activity/Efficiency Ratios

| Ratio | Formula | Current Year | Prior Year | Change (%) | Industry Benchmark | Assessment |
|-------|---------|--------------|------------|------------|-------------------|------------|
| Inventory turnover | Cost of Goods Sold / Average Inventory | [calc] | [calc] | [calc] | [benchmark] | [Improving/Stable/Deteriorating] |
| Receivables turnover | Revenue / Average Receivables | [calc] | [calc] | [calc] | [benchmark] | [comment] |
| Payables turnover | Purchases / Average Payables | [calc] | [calc] | [calc] | [benchmark] | [comment] |
| Asset turnover | Revenue / Total Assets | [calc] | [calc] | [calc] | [benchmark] | [comment] |
| Days in inventory | 365 / Inventory Turnover | [calc] | [calc] | [calc] | [benchmark] | [comment] |
| Days in receivables | 365 / Receivables Turnover | [calc] | [calc] | [calc] | [benchmark] | [comment] |
| Days in payables | 365 / Payables Turnover | [calc] | [calc] | [calc] | [benchmark] | [comment] |
| Cash conversion cycle | Days in Inventory + Days in Receivables - Days in Payables | [calc] | [calc] | [calc] | [benchmark] | [comment] |

**Red flag indicators:**
- **Receivables days increasing while revenue stable or declining** (collectibility concerns, customer payment difficulties, potential revenue recognition issues)
- **Inventory days increasing while sales declining** (obsolescence risk, overproduction, slow-moving inventory requiring write-down)
- **Payables days increasing significantly** (liquidity stress, difficulty paying suppliers on time, potential supply chain disruption)
- **Inventory turnover declining in manufacturing/trading business** (working capital inefficiency, potential obsolescence)
- **Receivables turnover declining** (credit policy relaxation to boost sales, collection issues, or revenue quality concerns)
- **Cash conversion cycle lengthening** (increasing working capital requirements, cash flow pressure)

### Step 3: Perform Common-Size Analysis

Normalize financial statements to identify composition shifts and facilitate multi-year trend comparison.

#### Common-Size Balance Sheet (Each line item as % of Total Assets)

| Line Item | Current Year (%) | Prior Year (%) | 2 Years Prior (%) | Trend |
|-----------|------------------|----------------|-------------------|-------|
| **Assets** |
| Cash & Cash Equivalents | [calc] | [calc] | [calc] | [Increasing/Stable/Declining] |
| Trade Receivables | [calc] | [calc] | [calc] | [comment] |
| Inventory | [calc] | [calc] | [calc] | [comment] |
| Other Current Assets | [calc] | [calc] | [calc] | [comment] |
| **Total Current Assets** | [calc] | [calc] | [calc] | [comment] |
| Property, Plant & Equipment | [calc] | [calc] | [calc] | [comment] |
| Intangible Assets | [calc] | [calc] | [calc] | [comment] |
| Investments | [calc] | [calc] | [calc] | [comment] |
| Other Non-Current Assets | [calc] | [calc] | [calc] | [comment] |
| **Total Assets** | 100.0% | 100.0% | 100.0% | N/A |
| **Liabilities & Equity** |
| Trade Payables | [calc] | [calc] | [calc] | [comment] |
| Short-Term Borrowings | [calc] | [calc] | [calc] | [comment] |
| Other Current Liabilities | [calc] | [calc] | [calc] | [comment] |
| **Total Current Liabilities** | [calc] | [calc] | [calc] | [comment] |
| Long-Term Borrowings | [calc] | [calc] | [calc] | [comment] |
| Other Non-Current Liabilities | [calc] | [calc] | [calc] | [comment] |
| Shareholders' Equity | [calc] | [calc] | [calc] | [comment] |
| **Total Liabilities & Equity** | 100.0% | 100.0% | 100.0% | N/A |

**Decision point:** Flag any composition shifts >5 percentage points for investigation:
- Example: "Receivables increased from 15% to 22% of total assets (7 percentage point increase). Investigation required: Is this due to revenue growth, relaxed credit terms, collection issues, or revenue recognition timing?"

#### Common-Size Statement of Profit & Loss (Each line item as % of Revenue)

| Line Item | Current Year (%) | Prior Year (%) | 2 Years Prior (%) | Trend |
|-----------|------------------|----------------|-------------------|-------|
| **Revenue** | 100.0% | 100.0% | 100.0% | N/A |
| Cost of Goods Sold | [calc] | [calc] | [calc] | [Increasing/Stable/Declining] |
| **Gross Profit** | [calc] | [calc] | [calc] | [comment] |
| Employee Costs | [calc] | [calc] | [calc] | [comment] |
| Other Operating Expenses | [calc] | [calc] | [calc] | [comment] |
| Depreciation & Amortization | [calc] | [calc] | [calc] | [comment] |
| **EBITDA** | [calc] | [calc] | [calc] | [comment] |
| **EBIT** | [calc] | [calc] | [calc] | [comment] |
| Finance Costs | [calc] | [calc] | [calc] | [comment] |
| Other Income | [calc] | [calc] | [calc] | [comment] |
| **Profit Before Tax** | [calc] | [calc] | [calc] | [comment] |
| Tax Expense | [calc] | [calc] | [calc] | [comment] |
| **Profit After Tax** | [calc] | [calc] | [calc] | [comment] |

**Decision point:** Flag any composition shifts >5 percentage points for investigation:
- Example: "Cost of goods sold decreased from 72% to 65% of revenue (7 percentage point improvement). Investigation required: Is this due to pricing power, product mix shift, cost efficiencies, or inventory capitalization issues?"

### Step 4: Variance Analysis with Mandatory Investigation

Perform year-over-year variance analysis for ALL significant line items. For items exceeding the investigation threshold, MUST provide explanation (cannot leave blank).

| Item | Current Year | Prior Year | Variance (Abs) | Variance (%) | Exceeds Threshold? | Explanation / Investigation Required |
|------|--------------|------------|----------------|--------------|--------------------|------------------------------------|
| Revenue | [amount] | [amount] | [amount] | [%] | Yes/No | [REQUIRED if Yes] |
| Cost of Goods Sold | [amount] | [amount] | [amount] | [%] | Yes/No | [REQUIRED if Yes] |
| Gross Profit | [amount] | [amount] | [amount] | [%] | Yes/No | [REQUIRED if Yes] |
| Employee Costs | [amount] | [amount] | [amount] | [%] | Yes/No | [REQUIRED if Yes] |
| Other Operating Expenses | [amount] | [amount] | [amount] | [%] | Yes/No | [REQUIRED if Yes] |
| Finance Costs | [amount] | [amount] | [amount] | [%] | Yes/No | [REQUIRED if Yes] |
| Other Income | [amount] | [amount] | [amount] | [%] | Yes/No | [REQUIRED if Yes] |
| Profit Before Tax | [amount] | [amount] | [amount] | [%] | Yes/No | [REQUIRED if Yes] |
| Trade Receivables | [amount] | [amount] | [amount] | [%] | Yes/No | [REQUIRED if Yes] |
| Inventory | [amount] | [amount] | [amount] | [%] | Yes/No | [REQUIRED if Yes] |
| Trade Payables | [amount] | [amount] | [amount] | [%] | Yes/No | [REQUIRED if Yes] |
| Borrowings (Total) | [amount] | [amount] | [amount] | [%] | Yes/No | [REQUIRED if Yes] |
| [Other significant items] | [amount] | [amount] | [amount] | [%] | Yes/No | [REQUIRED if Yes] |

**For items exceeding investigation threshold:**

**Ask user** for each flagged item: "What is the explanation for this variance? If unknown, mark for investigation and document planned follow-up procedures."

**Categories of explanation:**
1. **Known business reason** (provide specific evidence):
   - New contract signed (identify contract, expected impact)
   - Price increase implemented (document pricing change, effective date)
   - Volume change (quantify volume change, explain driver)
   - One-time transaction (identify transaction, confirm non-recurring nature)
   - Acquisition/disposal of business (identify transaction, impact quantified)

2. **Requires investigation** (no known reason):
   - Document planned follow-up procedures: "Variance in [account] of [X%] has no clear business explanation. Plan to: (1) Discuss with management, (2) Review underlying transactions, (3) Test account for accuracy."

3. **Consistent with other information** (variance supported by other analysis):
   - Reference supporting analysis: "Receivables increase of 15% is consistent with revenue growth of 12% and increase in receivables days from 45 to 50 days (credit term relaxation for new customer segment)."

**Budget-to-actual comparison** (if budget available):
Include variance analysis comparing actual results to management's budget/forecast. Investigate significant variances (favorable or unfavorable) to assess:
- Quality of management's budgeting process
- Unexpected business developments
- Potential management bias in estimates

### Step 5: Identify Red Flag Indicators and Unusual Relationships

Structured assessment of common fraud and earnings management indicators per SA 520 and SA 240.

| Red Flag Indicator | Present? (Yes/No) | Evidence | Risk Implication |
|--------------------|-------------------|----------|------------------|
| Revenue increasing but receivables increasing faster | [Y/N] | [Receivables growth X%, Revenue growth Y%] | Collectibility concern OR revenue recognition quality issue (sales with extended terms, channel stuffing) |
| Gross margin improving while industry margins declining | [Y/N] | [Company margin +X%, Industry margin -Y%] | Potential revenue manipulation (bill-and-hold, side agreements) OR expense capitalization |
| Expenses decreasing while revenue stable/increasing | [Y/N] | [Expenses -X%, Revenue +/-Y%] | Expense capitalization (R&D, advertising classified as assets), deferred expense recognition |
| Round-number adjustments near year-end | [Y/N] | [Examples: Journal entries for exactly Rs. 5,00,000 or Rs. 10,00,000] | Management manipulation to achieve targets (investigate large round-number entries) |
| Related party balances increasing disproportionately | [Y/N] | [Related party receivables/payables growth X% vs. total Y%] | Transfer pricing issues, fund diversion, substance over form concerns |
| Cash flows from operations negative while profit positive | [Y/N] | [CFO: Rs. X negative, PAT: Rs. Y positive] | Earnings quality concern (aggressive revenue recognition, working capital build-up) |
| Significant increase in "Other Income" or "Exceptional Items" | [Y/N] | [Other Income: X% of revenue vs. Y% prior year] | Classification manipulation to inflate operating profit, one-time gains, asset sale timing |
| Inventory increasing faster than cost of goods sold | [Y/N] | [Inventory +X%, COGS +Y%] | Obsolescence risk, fictitious inventory, production overhead capitalization |
| Unusual relationships between accounts | [Y/N] | [Example: Payables declining while purchases increasing] | Payment timing issues, supplier relationship changes, or accounting error |
| Significant transactions with unusual terms | [Y/N] | [Examples from transaction review] | Substance-over-form issues, off-balance-sheet arrangements |

**Follow-up procedures for identified red flags:**
- For each "Yes" response: Document specific audit procedures planned to investigate (e.g., detailed testing, management inquiry, third-party confirmation, specialist review)

### Step 6: Going Concern Indicator Assessment

Cross-reference to SA 570 (Going Concern). Assess whether events or conditions exist that may cast significant doubt on entity's ability to continue as a going concern.

#### Financial Indicators

| Indicator | Present? | Evidence | Severity |
|-----------|----------|----------|----------|
| Net liability or negative net worth position | [Y/N] | [Total Liabilities - Total Assets = Rs. X] | [High/Medium/Low] |
| Negative operating cash flows | [Y/N] | [CFO = Rs. X negative for Y consecutive periods] | [High/Medium/Low] |
| DSCR < 1.0 (unable to service debt from operations) | [Y/N] | [DSCR = X, calculated as EBITDA / Debt Service] | [High/Medium/Low] |
| Defaults on loan repayments or breaches of loan covenants | [Y/N] | [Identify specific defaults/breaches] | [High/Medium/Low] |
| Inability to pay creditors on due dates | [Y/N] | [Evidence: Overdue payables aging, supplier complaints] | [High/Medium/Low] |
| Difficulty obtaining financing for essential operations or capital expenditure | [Y/N] | [Evidence from management discussions, lender communications] | [High/Medium/Low] |
| Significant operating losses | [Y/N] | [Loss of Rs. X in current year, Rs. Y in prior year] | [High/Medium/Low] |

#### Operating Indicators

| Indicator | Present? | Evidence | Severity |
|-----------|----------|----------|----------|
| Loss of key management without replacement | [Y/N] | [Identify departures: CEO, CFO, etc.] | [High/Medium/Low] |
| Loss of major market, customer, or supplier | [Y/N] | [Customer/supplier represents X% of revenue/purchases] | [High/Medium/Low] |
| Labor difficulties or shortage of critical materials | [Y/N] | [Evidence: Strikes, supply chain disruptions] | [High/Medium/Low] |
| Emergence of highly successful competitor | [Y/N] | [Market share loss, pricing pressure evidence] | [High/Medium/Low] |

#### Other Indicators

| Indicator | Present? | Evidence | Severity |
|-----------|----------|----------|----------|
| Non-compliance with capital or statutory requirements | [Y/N] | [Identify specific violations: minimum capital, regulatory ratios] | [High/Medium/Low] |
| Pending legal or regulatory proceedings | [Y/N] | [Cases that may jeopardize operations or result in material claims] | [High/Medium/Low] |
| Changes in legislation or policy adversely affecting entity | [Y/N] | [Identify regulatory changes, impact assessment] | [High/Medium/Low] |
| Uninsured or underinsured catastrophic losses | [Y/N] | [Natural disaster, fire, major asset loss] | [High/Medium/Low] |

**Decision point:** If ANY going concern indicator with "High" severity identified, OR multiple indicators with "Medium" severity:
- **Flag for immediate partner attention**
- **Reference /audit:going-concern command for detailed assessment** (SA 570 requires specific procedures: management plans evaluation, cash flow forecasts, post-year-end events review)
- **Document in risk assessment:** Going concern risk is automatically a significant risk requiring specific audit procedures

## Output Format

**Analytical Review Workpaper (CAF-01-ANA-001)** containing:

### 1. Investigation Threshold Documentation
- Threshold selected: [10% / 5% / Performance Materiality / Other]
- Rationale: [Explain basis for selection]
- SA 520 compliance note: [Confirm threshold is appropriate for identifying significant variances]

### 2. Financial Ratio Analysis
Present four ratio tables (Liquidity, Profitability, Leverage, Activity/Efficiency) with:
- Current year calculations
- Prior year calculations
- Change (% and absolute)
- Industry benchmark comparison (if available)
- Assessment (Improving/Stable/Deteriorating with explanation)
- Red flags identified

### 3. Common-Size Analysis
- Common-size balance sheet (3-year comparison)
- Common-size P&L (3-year comparison)
- Composition shifts >5 percentage points flagged with investigation notes

### 4. Variance Analysis Table
- All significant line items with absolute and % variances
- Threshold exceedance flagged
- MANDATORY explanations for all flagged items (cannot be blank)
- Budget-to-actual comparison (if budget available)

### 5. Red Flag Indicators Assessment
- Structured table with Present/Evidence/Risk Implication columns
- Follow-up procedures documented for each identified red flag

### 6. Going Concern Indicators Checklist
- Financial, operating, and other indicators assessed
- Severity ratings assigned
- Decision on whether going concern is a significant audit issue
- Reference to /audit:going-concern command if detailed assessment required

### 7. Overall Assessment Summary
- **Financial health summary:** Overall conclusion (Improving/Stable/Deteriorating) with supporting rationale
- **Key risk areas identified:** List of accounts/areas requiring increased audit focus based on analytical procedures
- **Items flagged for investigation:** Numbered list with planned follow-up procedures
  1. [Account/issue] - [Variance %] - [Planned procedure]
  2. [Account/issue] - [Variance %] - [Planned procedure]
- **Impact on audit plan:** How analytical review findings will influence detailed audit procedures (reference /audit:audit-plan)

### 8. Working Paper Reference
- Document reference: CAF-01-ANA-001
- Prepared by: [Name]
- Reviewed by: [Name]
- Date: [Date]

**Cross-references:**
- Links to risk matrix: Unusual items and red flags increase inherent risk ratings
- Links to audit plan: Areas with significant variances or red flags require enhanced audit procedures (increased sample sizes, tests of details, management inquiry)
- SA 520 requirement: "Analytical procedures performed during planning help identify unusual transactions, events, and trends that might indicate matters with audit implications."

---

**Disclaimer:** This tool assists with audit workflow documentation but does not substitute professional audit judgment. All analytical procedures outputs must be reviewed and evaluated by qualified Chartered Accountants. SA 520 requires professional skepticism in evaluating analytical procedure results, particularly when inconsistencies or unusual relationships are identified.
