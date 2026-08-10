export interface ProjectFeature {
  title: string;
  description: string;
}

export interface Project {
  id: string;
  slug: string;
  index: string;
  title: string[];
  category: string;
  stack: string[];
  description: string[];
  overview: string;
  problem: string;
  architecture: {
    summary: string;
    stack: string[];
  };
  keyFeatures: ProjectFeature[];
  whatMakesItDifferent: string[];
  githubUrl: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    id: 'orchestrai', slug: 'orchestrai', index: '01', title: ['ORCHESTR', 'AI'],
    category: 'AUTONOMOUS SOFTWARE ENGINEERING',
    stack: ['LANGGRAPH', 'FASTAPI', 'PYDANTIC V2', 'FAISS', 'DOCKER'],
    description: ['Prompt-to-project engineering workflow coordinated by specialist agents.', 'Clean Architecture keeps the orchestration graph independent from LLM and sandbox adapters.'],
    overview: 'A self-verifying engineering agent. Describe what you want built — OrchestrAI plans it, implements it, checks its own work through a real retry loop, and writes the docs.',
    problem: 'Code-generation tools can produce snippets, but they leave requirements interpretation, sequencing, testing, and failure recovery to the developer. OrchestrAI makes those responsibilities explicit stages in one controlled workflow.',
    architecture: { summary: 'A LangGraph orchestration layer coordinates analyst, planner, coder, debugger, reviewer, and documentation roles. The backend follows ports-and-adapters boundaries: domain models and application services depend on ports, while OpenRouter, telemetry, and the local sandbox remain infrastructure adapters.', stack: ['Python', 'LangGraph', 'FastAPI', 'Pydantic v2', 'OpenRouter', 'SQLite', 'FAISS', 'Docker', 'pytest'] },
    keyFeatures: [
      { title: 'Specialist graph', description: 'Moves from requirements analysis through planning, coding, verification, review, and documentation as named orchestration stages.' },
      { title: 'Verification loop', description: 'Routes failed verification through debugging and reflection before bounded re-attempts instead of treating generation as a one-shot response.' },
      { title: 'Replaceable infrastructure', description: 'LLM, sandbox, event, and telemetry integrations are defined behind ports so the core workflow remains testable.' },
    ],
    whatMakesItDifferent: ['The repository implements Clean Architecture boundaries rather than coupling agents directly to a provider SDK.', 'Verification is represented as domain state and an explicit service, with unit and integration coverage around the graph.'],
    githubUrl: 'https://github.com/SukhadxTomar/OrchestrAI',
  },
  {
    id: 'datasciencecopilot', slug: 'data-science-copilot', index: '02', title: ['DATA SCIENCE', 'COPILOT'],
    category: 'AGENTIC DATA SCIENCE',
    stack: ['LANGGRAPH', 'FASTAPI', 'PANDAS', 'SCIKIT-LEARN', 'XGBOOST'],
    description: ['Dataset-to-report data-science workflow with planning, deterministic ML tools, and resumable graph execution.', 'The planner is constrained by a capability registry rather than being allowed to invent arbitrary operations.'],
    overview: 'A next-gen agentic data science copilot that builds end-to-end, actionable ML solutions from business problems and datasets.',
    problem: 'A lot of data science automation relies on LLMs to generate code for every dataset. This project takes a different approach by combining flexible planning with a reliable tool layer that can be tested, resumed, and controlled.',
    architecture: { summary: 'LangGraph orchestrates the execution flow, while a Planner Agent builds and validates plans from registered capabilities. The graph state keeps track of paths and summaries, while datasets, dataframes, and trained models are stored on disk.', stack: ['Python', 'FastAPI', 'LangGraph', 'Pandas', 'scikit-learn', 'XGBoost', 'Optuna', 'SHAP', 'OpenRouter', 'pytest'] },
    keyFeatures: [
      { title: 'Static graph, dynamic plan', description: 'Fixed nodes provide operational control while a dataset-specific plan selects the work to run.' },
      { title: 'Registry-bound execution', description: 'Capabilities declare requirements and outputs, and the planner validator checks the resulting DAG before execution.' },
      { title: 'Resumable runs', description: 'Node-level checkpoints, bounded planning retries, and human-input fallback keep long-running automation recoverable.' },
    ],
    whatMakesItDifferent: ['Agents select deterministic tools; they do not write arbitrary analysis code into the workflow.', 'The capability registry and plan validator make the LLM plan inspectable before expensive ML work starts.'],
    githubUrl: 'https://github.com/SukhadxTomar/DataScience-Copilot',
  },
  {
    id: 'tailorcv', slug: 'tailorcv-ai', index: '03', title: ['TAILORCV', 'AI'],
    category: 'AGENTIC RESUME PIPELINE',
    stack: ['FASTAPI', 'LANGGRAPH', 'PYDANTIC V2', 'OPENROUTER', 'PYTEST'],
    description: ['Backend-first resume tailoring pipeline with deterministic matching and validation before export.', 'The anti-fabrication layer rejects unsupported claims rather than trusting generated copy.'],
    overview: 'An AI-powered resume tailoring platform that analyzes resumes and job descriptions, then creates ATS-friendly, role-specific resumes while keeping every detail grounded in the original resume.',
    problem: 'Tailoring a resume can easily lead to made-up skills, projects, or achievements. TailorCV separates resume analysis, matching, generation, and validation to keep the final resume accurate and based on the original resume.',
    architecture: { summary: 'A LangGraph pipeline handles resume and job description extraction, matching, tailoring, validation, and ATS analysis. Structured models keep the original and tailored resumes separate, while a flexible LLM layer makes it easy to switch between providers.', stack: ['Python', 'FastAPI', 'LangGraph', 'Pydantic v2', 'OpenRouter', 'pytest', 'PDF/DOCX extraction'] },
    keyFeatures: [
      { title: 'Grounded tailoring', description: 'The validator checks skills, credentials, experience, projects, technologies, education, and numeric claims against source evidence.' },
      { title: 'Deterministic matching', description: 'Required skills, preferred skills, and keywords are scored before the tailoring stage.' },
      { title: 'API-ready exports', description: 'Dedicated routes support parsing, tailoring, ATS analysis, and DOCX/PDF output alongside the full workflow.' },
    ],
    whatMakesItDifferent: ['The anti-fabrication validator inspects generated content field by field instead of relying on a prompt instruction alone.', 'Provider coupling is isolated behind an LLM client protocol, which keeps workflow tests independent of live model calls.'],
    githubUrl: 'https://github.com/SukhadxTomar/tailorcv-ai',
  },
  {
    id: 'docintel', slug: 'docintel-ai', index: '04', title: ['DOCINTEL', 'AI'],
    category: 'HYBRID RAG PLATFORM',
    stack: ['LANGCHAIN', 'FAISS', 'GEMINI', 'STREAMLIT'],
    description: ['Multi-PDF chat that routes each question between grounded retrieval and general-model responses.', 'FAISS scores are normalized and compared with a configurable threshold before RAG is selected.'],
    overview: 'An AI-powered PDF assistant that lets users ask questions about their documents and get accurate, context-aware answers using retrieval-augmented generation.',
    problem: 'Always-on retrieval can force irrelevant context into simple questions and create misleading answers. DocIntel makes retrieval quality a routing decision instead of assuming every prompt belongs to the PDF corpus.',
    architecture: { summary: 'Uploaded PDFs are split, embedded, and stored in FAISS for retrieval. A smart router decides how to answer each question: relevant document matches go through the RAG pipeline, while unrelated or low-confidence questions are handled directly by the LLM.', stack: ['Python', 'Streamlit', 'LangChain LCEL', 'Google Gemini', 'Hugging Face embeddings', 'FAISS', 'MMR retrieval'] },
    keyFeatures: [
      { title: 'Score-aware router', description: 'It normalizes relevance or distance scores to a comparable confidence range and evaluates a configurable threshold.' },
      { title: 'Honest fallback', description: 'Missing, weak, or failed retrieval uses the general LLM path rather than inventing document support.' },
      { title: 'Traceable streaming', description: 'Both response paths stream token-by-token, with routing reason, timing, score, and document-source logging.' },
    ],
    whatMakesItDifferent: ['The router reuses its selected chunks, avoiding a second untracked retrieval between decision and answer.', 'It records why retrieval was rejected, including unavailable scores and exceptions, not just the final route.'],
    githubUrl: 'https://github.com/SukhadxTomar/docintel-ai',
  },
  {
    id: 'churn', slug: 'customer-intelligence-system', index: '05', title: ['CUSTOMER', 'INTELLIGENCE'],
    category: 'CLASSICAL ML / ANALYTICS',
    stack: ['PANDAS', 'SCIKIT-LEARN', 'K-MEANS', 'STREAMLIT'],
    description: ['RFM segmentation and churn-risk prediction built from UCI Online Retail transactions.', 'A Streamlit interface serves the saved model for customer-level inference.'],
    overview: 'An analytics and machine learning system that uses customer purchase data to understand customer behavior, segment customers, and predict churn to support better business decisions.',
    problem: 'Transaction-level retail data does not directly reveal whom to retain or prioritise. The project derives customer-level behaviour signals, identifies cohorts, and makes that risk assessment usable outside a notebook.',
    architecture: { summary: 'Pandas preprocessing cleans transactions and derives RFM features. StandardScaler and K-Means create four customer segments; a Logistic Regression model predicts churn from the customer-level inputs, then Joblib persists the model for a Streamlit prediction interface.', stack: ['Python', 'Pandas', 'NumPy', 'scikit-learn', 'K-Means', 'Logistic Regression', 'Joblib', 'Streamlit'] },
    keyFeatures: [
      { title: 'RFM foundation', description: 'Recency, frequency, and monetary value convert transaction history into a consistent customer profile.' },
      { title: 'Segment + score', description: 'Four K-Means groups contextualize a Logistic Regression churn probability.' },
      { title: 'Reusable inference', description: 'Saved preprocessing and model artefacts support a Streamlit form instead of a one-off analysis result.' },
    ],
    whatMakesItDifferent: ['Segmentation and churn scoring are combined, so the prediction is paired with a behavioural customer context.', 'The clustering step standardizes RFM values before fitting K-Means, preventing monetary scale from dominating the grouping.'],
    githubUrl: 'https://github.com/SukhadxTomar/customer-intelligence-system',
  },
  {
    id: 'creditrisk', slug: 'credit-risk-prediction', index: '06', title: ['CREDIT RISK', 'PREDICTION'],
    category: 'CLASSICAL ML',
    stack: ['SCIKIT-LEARN', 'PANDAS', 'NUMPY', 'STREAMLIT'],
    description: ['Interactive loan-default prediction with an interpretable credit-score and risk-rating transformation.', 'The inference helper aligns live form data to persisted model features before scoring.'],
    overview: 'A machine learning system that analyzes customer and financial data to assess credit risk and predict the likelihood of loan default.',
    problem: 'A raw classifier probability is difficult to use in a lending decision. This project wraps model inference in an input preparation and score-mapping layer designed for a clear interactive risk assessment.',
    architecture: { summary: 'The app loads a trained Joblib model along with its scaler and feature configuration. Input data is transformed to match the training format, then the model predicts default risk and converts the result into an easy-to-understand credit score and risk rating.', stack: ['Python', 'scikit-learn', 'Pandas', 'NumPy', 'Joblib', 'Streamlit'] },
    keyFeatures: [
      { title: 'Schema-aligned input', description: 'Live form input is transformed to the exact feature order expected by the saved model.' },
      { title: 'Decision-friendly output', description: 'Default probability is translated into a 300–900 score and Poor-to-Excellent risk label.' },
      { title: 'Interactive assessment', description: 'A Streamlit interface returns the risk result immediately from borrower and loan attributes.' },
    ],
    whatMakesItDifferent: ['The persisted artefact includes model, scaler, feature list, and scale columns, reducing training-versus-inference mismatch.', 'The score transformation exposes the classifier result in a lending-oriented format rather than a probability alone.'],
    githubUrl: 'https://github.com/SukhadxTomar/credit-risk-prediction',
  },
  {
    id: 'salesanalytics', slug: 'sales-performance-analytics', index: '07', title: ['SALES PERFORMANCE', 'ANALYTICS'],
    category: 'BUSINESS INTELLIGENCE',
    stack: ['PYTHON', 'PANDAS', 'MYSQL', 'POWER BI'],
    description: ['Retail sales analysis connecting cleaned transaction data, SQL KPI work, and Power BI reporting.', 'The repository includes the analysis notebook, dashboard file, source data, and dashboard exports.'],
    overview: 'An end-to-end retail analytics project that moves from raw transaction cleanup and exploratory analysis to SQL KPIs and an interactive Power BI reporting layer.',
    problem: 'Retail performance depends on products, regions, sales trends, profits, and customers. This project brings these insights together in one analytics workflow and an interactive dashboard.',
    architecture: { summary: 'Python and Pandas clean and enrich transaction data for exploratory analysis. The cleaned dataset feeds MySQL KPI queries, while Power BI turns the results into filterable performance, product, regional, and trend views.', stack: ['Python', 'Pandas', 'MySQL', 'SQL', 'Power BI', 'Jupyter'] },
    keyFeatures: [
      { title: 'Data-to-dashboard flow', description: 'Cleaning, EDA, SQL analysis, and BI reporting are represented as one progression from raw records to decisions.' },
      { title: 'KPI analysis', description: 'The analysis covers revenue growth, top products, regional contribution, profit, and margin.' },
      { title: 'Pareto evidence', description: 'The documented analysis surfaces the concentration of revenue among a small share of products.' },
    ],
    whatMakesItDifferent: ['The repository includes both the Power BI artifact and exported dashboard views, so the reporting layer is inspectable alongside the analysis.', 'It combines Python transformation with a separate SQL analytics layer instead of treating the dashboard as a static visual.'],
    githubUrl: 'https://github.com/SukhadxTomar/sales-performance-analytics',
  },
];
