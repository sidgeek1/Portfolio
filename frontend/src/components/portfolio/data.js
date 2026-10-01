export const EMAIL = "abhisheksiddantj@gmail.com";
export const LINKEDIN = "https://in.linkedin.com/in/abhishek-siddant-jonnalagadda";
export const PHONE = "+91 784-269-8676";
export const LOCATION = "Hyderabad, India";

export const NAV = [
  { id: "about", label: "About" },
  { id: "skills", label: "Toolkit" },
  { id: "studio", label: "3D Studio" },
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
];

export const STATS = [
  { value: 30, suffix: "M+", label: "Insurance records analysed" },
  { value: 48, suffix: "%", label: "Risk-scoring accuracy gain" },
  { value: 42, suffix: "%", label: "Fewer stockout incidents" },
  { value: 29, suffix: "%", label: "Lead-to-customer lift" },
];

export const MARQUEE = [
  "SQL & Python", "Power BI & Tableau", "Root-Cause Analysis", "Risk Scoring",
  "KPI Dashboards", "Go-To-Market Strategy", "Azure Data Factory", "XGBoost & Scikit-learn",
];

export const PILLARS = [
  { n: "01", title: "Data-first decisions", text: "Every recommendation starts with a question worth answering and a dataset worth trusting — 30M records or 30." },
  { n: "02", title: "Root cause over symptoms", text: "Quantitative and root-cause analysis that finds the drivers of risk, cost and churn, not just the trend line." },
  { n: "03", title: "Stories stakeholders act on", text: "Executive-ready dashboards and requirements that turn analysis into product, pricing and process decisions." },
];

export const SKILLS = [
  {
    key: "eng", span: "lg:col-span-7", title: "Languages & Data Engineering",
    tags: ["Python", "SQL", "R", "DAX", "Azure Data Factory", "Databricks"],
    note: "Clean, validated pipelines that keep data reliable from source to report.", level: 92,
  },
  {
    key: "ml", span: "lg:col-span-5", title: "Machine Learning & Analytics",
    tags: ["Scikit-learn", "Pandas", "NumPy", "XGBoost", "NLP"],
    note: "Predictive models that turn historical data into practical recommendations.", level: 86,
  },
  {
    key: "bi", span: "lg:col-span-5", title: "BI & Visualisation",
    tags: ["Power BI", "Tableau", "Looker Studio", "Excel (Advanced)"],
    note: "Clear, executive-ready dashboards that make performance easy to track.", level: 94,
  },
  {
    key: "strat", span: "lg:col-span-7", title: "Business & Strategy",
    tags: ["Requirements & PDDs", "Root-Cause Analysis", "KPI Design", "Segmentation", "Pricing", "Go-To-Market"],
    note: "Translating business questions into analysis, requirements and action.", level: 90,
  },
];

export const DATABASES = ["MS SQL Server", "MySQL", "PgAdmin"];

export const PROJECTS = [
  {
    id: "risk", no: "01", title: "Insurance Risk Intelligence", kicker: "Helioinfotech · Insurance",
    impact: "+48%", impactLabel: "risk-scoring accuracy", metric: "30M+ records · −36% refresh time",
    text: "Segmented 30M+ insurance records to expose claims, pricing and risk drivers, plus an AI plan recommender.",
    tech: ["SQL", "Python", "Scikit-learn", "Power BI"],
    image: "https://images.unsplash.com/photo-1757466762489-52fea38071ad?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400",
  },
  {
    id: "inventory", no: "02", title: "Real-Time Inventory System", kicker: "Red Hat (IBM) · Retail Ops",
    impact: "−42%", impactLabel: "stockout incidents", metric: "1M+ daily events · −35% ingestion errors",
    text: "Real-time Azure inventory tracking across 15K+ SKUs, shipped to production in 8 weeks.",
    tech: ["Azure", "Python", "SQL", "ETL"],
    image: "https://images.unsplash.com/photo-1762267683517-6e9bc20675e9?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400",
  },
  {
    id: "nba", no: "03", title: "NBA Game Intelligence", kicker: "Machine Learning",
    impact: "+15%", impactLabel: "prediction accuracy", metric: "112 → 39 optimised predictors",
    text: "An ML pipeline on Boston Celtics data, built to scale league-wide.",
    tech: ["Python", "XGBoost", "Random Forest", "BiLSTM"],
    image: "https://images.unsplash.com/photo-1641355262431-021a396d4fe5?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400",
  },
  {
    id: "sales", no: "04", title: "Market Sales Prediction", kicker: "Pricing Analytics",
    impact: "85%", impactLabel: "model accuracy", metric: "25% peak-season turnover found",
    text: "A Python pricing model enriched with review sentiment, delivered in Tableau.",
    tech: ["Python", "SQL", "NLP", "Tableau"],
    image: "https://images.unsplash.com/photo-1770486036751-e55247238964?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400",
  },
];

export const EXPERIENCE = [
  {
    period: "Sep 2024 — Now", role: "Business / Strategy Analyst", company: "Helioinfotech LLC · New Jersey, USA",
    points: [
      "Analysed 30M+ insurance records with SQL, Python and Power BI to uncover segments, claims trends, pricing patterns and risk drivers.",
      "Built an AI-enabled healthcare plan recommendation framework with Scikit-learn.",
      "Improved risk-scoring accuracy by 48% through quantitative and root-cause analysis.",
      "Cut reporting refresh time by 36% with stakeholder-driven KPI dashboards.",
    ],
  },
  {
    period: "Feb 2021 — Apr 2022", role: "Business Analyst", company: "Genzeon · Hyderabad, India",
    points: [
      "Led analysis of 20M+ customer records across 15+ healthcare data streams.",
      "Ran current/future-state assessments and documented workflows through PDDs.",
      "Defined KPIs and solution priorities contributing to a 17% lift in campaign ROI.",
      "Delivered executive-ready Power BI and Tableau dashboards.",
    ],
  },
  {
    period: "Jan 2018 — Dec 2020", role: "Business Intelligence Engineer", company: "Red Hat (IBM) · Hyderabad, India",
    points: [
      "Built a real-time inventory management system on Azure, Python and SQL.",
      "Validated 1M+ daily events across 15K+ SKUs — 35% fewer ingestion errors, 42% fewer stockouts.",
      "Supervised 4+ interns and delivered to production within 8 weeks.",
    ],
  },
  {
    period: "Nov 2017 — Dec 2020", role: "Co-Founder / Product Head", company: "Warranty ME · Hyderabad, India",
    points: [
      "Drove go-to-market, unlocking 3 markets and +29% lead-to-customer conversion in two quarters.",
      "Secured funding and incubation at IIIT Hyderabad and T-Hub.",
    ],
  },
];

export const EDUCATION = [
  { school: "Stevens Institute of Technology", place: "Hoboken, NJ, USA", degree: "Master's, Management Information Systems", period: "2022 — 2024", note: "Provost Master's Scholarship" },
  { school: "Gurunanak Institute of Technology", place: "Hyderabad, India", degree: "B.Tech, Computer Science & Engineering", period: "2016 — 2020", note: "Specialisation: Software Development" },
];

export const CERTS = [
  "Microsoft Certified: Power BI Data Analyst Associate (PL-300)",
  "AWS Certified Cloud Practitioner (CLF-C02)",
  "DataCamp: SQL Fundamentals",
  "Red Hat: Architecture in Scalable Cloud Solutions",
  "NASBA: Introduction to Artificial Intelligence",
];

export const ACHIEVEMENTS = [
  "IEEE paper (2017) — Data Shadows: Navigating Privacy in a Hyper-connected World",
  "Judge, startup founder pitches — ICICSE (2019) & AI: Future of Machines (2018)",
];

export const DATASETS = {
  finance: {
    label: "Big Tech Revenue", unit: "$B", cols: ["2019", "2020", "2021", "2022", "2023", "2024"],
    rows: ["Amazon", "Apple", "Alphabet", "Microsoft"],
    values: [
      [280.5, 386.1, 469.8, 514.0, 574.8, 638.0],
      [260.2, 274.5, 365.8, 394.3, 383.3, 391.0],
      [161.9, 182.5, 257.6, 282.8, 307.4, 350.0],
      [125.8, 143.0, 168.1, 198.3, 211.9, 245.1],
    ],
    insight: "Amazon grew 2.3× since 2019, while Apple has been flat since 2022.",
    source: "Company annual reports (10-K). Apple FY ends Sep, Microsoft FY ends Jun.",
    sourceUrl: "https://www.sec.gov/edgar/search/",
  },
  health: {
    label: "US Health Spending", unit: "$B", cols: ["2019", "2020", "2021", "2022", "2023"],
    rows: ["Hospital care", "Physician & clinical", "Prescription drugs"],
    values: [
      [1267.6, 1334.0, 1376.7, 1419.1, 1519.7],
      [814.1, 870.5, 910.4, 910.6, 978.0],
      [351.0, 374.3, 403.6, 403.7, 449.7],
    ],
    insight: "Prescription drug spending grew fastest: +28% from 2019 to 2023.",
    source: "CMS National Health Expenditure Accounts (2024 release).",
    sourceUrl: "https://www.cms.gov/data-research/statistics-trends-and-reports/national-health-expenditure-data/historical",
  },
};
