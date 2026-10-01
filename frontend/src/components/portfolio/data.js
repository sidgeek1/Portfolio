export const EMAIL = "abhisheksiddantj@gmail.com";
export const LINKEDIN = "https://in.linkedin.com/in/abhishek-siddant-jonnalagadda";

export const NAV = [
  { id: "about", label: "About" },
  { id: "skills", label: "Toolkit" },
  { id: "studio", label: "3D Studio" },
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
];

export const STATS = [
  { value: 4, suffix: "+", label: "Years in analytics" },
  { value: 20, suffix: "+", label: "Strategy engagements" },
  { value: 12, prefix: "$", suffix: "M", label: "Value surfaced" },
  { value: 50, suffix: "+", label: "Execs on my dashboards" },
];

export const MARQUEE = [
  "SQL & BigQuery", "Python & Pandas", "Tableau & Power BI", "Strategic Forecasting",
  "Cohort Analysis", "A/B Experimentation", "Unit Economics", "Financial Modeling",
];

export const PILLARS = [
  { n: "01", title: "Data-first decisions", text: "Every recommendation starts with a question worth answering and a dataset worth trusting." },
  { n: "02", title: "Predictive over reactive", text: "Models that tell leadership what is about to happen, not just what already did." },
  { n: "03", title: "Stories executives act on", text: "One chart, one sentence, one decision. Complexity stays in the appendix." },
];

export const SKILLS = [
  {
    key: "eng", span: "lg:col-span-7", title: "Data Engineering & Querying",
    tags: ["Advanced SQL", "PostgreSQL", "Snowflake", "BigQuery", "dbt", "ETL Pipelines"],
    note: "100M+ row datasets, tuned for sub-second dashboards.", level: 92,
  },
  {
    key: "ml", span: "lg:col-span-5", title: "Statistics & Machine Learning",
    tags: ["Python", "Pandas", "Scikit-Learn", "Regression", "Clustering", "Forecasting"],
    note: "Churn & demand models shipped at 95%+ accuracy.", level: 86,
  },
  {
    key: "bi", span: "lg:col-span-5", title: "BI & Data Storytelling",
    tags: ["Tableau", "Power BI", "Looker", "Exec Reporting"],
    note: "C-suite dashboards used weekly by 50+ leaders.", level: 94,
  },
  {
    key: "strat", span: "lg:col-span-7", title: "Business & Strategy Frameworks",
    tags: ["Cohort Analysis", "LTV / CAC", "Market Sizing", "A/B Testing", "Pricing", "Financial Modeling"],
    note: "Found a $2.4M bottleneck hiding in an expansion funnel.", level: 90,
  },
];

export const PROJECTS = [
  {
    id: "churn", no: "01", title: "Retention Engine", kicker: "Enterprise SaaS",
    impact: "$1.8M", impactLabel: "ARR saved", metric: "−18.4% churn",
    text: "A gradient-boosted churn model reading engagement telemetry across 40,000 enterprise seats, wired into CS playbooks so risk turned into action within a week.",
    tech: ["Python", "SQL", "XGBoost", "Tableau"],
    image: "https://images.unsplash.com/photo-1757466762489-52fea38071ad?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400",
  },
  {
    id: "attr", no: "02", title: "Attribution Rewired", kicker: "E-commerce Growth",
    impact: "+32%", impactLabel: "marketing ROI", metric: "$4.2M spend re-allocated",
    text: "Replaced last-click with a Markov-chain multi-touch model across paid channels, then rebuilt the budget process around it.",
    tech: ["BigQuery", "Python", "Looker", "Markov chains"],
    image: "https://images.unsplash.com/photo-1762267683517-6e9bc20675e9?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400",
  },
  {
    id: "fin", no: "03", title: "Unit Economics Simulator", kicker: "Fintech Strategy",
    impact: "10k", impactLabel: "scenarios / run", metric: "Adopted by the board",
    text: "A Monte-Carlo forecasting tool that let leadership stress-test rate shifts and default risk before committing capital.",
    tech: ["Python", "Monte Carlo", "Streamlit", "Power BI"],
    image: "https://images.unsplash.com/photo-1641355262431-021a396d4fe5?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400",
  },
];

export const EXPERIENCE = [
  {
    period: "2023 — Now", role: "Senior Data & Strategy Analyst", company: "Enterprise Technology",
    points: ["Lead strategy analytics across $50M+ in annual transaction volume.", "Set the modelling standards and mentor a pod of junior analysts."],
  },
  {
    period: "2022 — 2023", role: "Data Analyst, Growth Strategy", company: "Analytics & Insights Firm",
    points: ["Ran 25+ A/B experiments, lifting signup conversion by 14%.", "Automated ETL feeding real-time executive Tableau suites."],
  },
  {
    period: "2021 — 2022", role: "Business Analyst", company: "Consulting & Operations",
    points: ["Built market-sizing and pricing models for new-region launches.", "Translated ops data into weekly KPI narratives for leadership."],
  },
];

const Q = ["Q1", "Q2", "Q3", "Q4", "Q5", "Q6"];
export const DATASETS = {
  revenue: {
    label: "Revenue Yield", unit: "$M", cols: Q, rows: ["North America", "Europe", "APAC", "LATAM"],
    values: [[4.2, 4.8, 5.1, 5.9, 6.4, 7.2], [3.1, 3.4, 3.3, 3.9, 4.4, 4.9], [1.8, 2.4, 3.2, 3.9, 4.8, 5.6], [0.9, 1.1, 1.4, 1.6, 2.1, 2.5]],
    insight: "APAC compounds fastest: 3.1× in six quarters.",
  },
  churn: {
    label: "Cohort Churn", unit: "%", cols: ["M1", "M2", "M3", "M4", "M5", "M6"], rows: ["Jan cohort", "Feb cohort", "Mar cohort", "Apr cohort"],
    values: [[8.1, 6.4, 5.2, 4.6, 4.1, 3.9], [7.4, 5.9, 4.7, 4.0, 3.6, 3.2], [6.2, 4.8, 3.9, 3.3, 2.9, 2.6], [5.1, 3.9, 3.1, 2.7, 2.3, 2.0]],
    insight: "Onboarding redesign cut month-one churn by 37%.",
  },
  supply: {
    label: "Supply Efficiency", unit: "idx", cols: Q, rows: ["Sourcing", "Warehousing", "Last mile", "Returns"],
    values: [[62, 66, 71, 74, 78, 81], [55, 58, 64, 69, 72, 77], [48, 52, 57, 63, 70, 76], [40, 44, 47, 53, 58, 64]],
    insight: "Last-mile routing gave the biggest efficiency jump.",
  },
};
