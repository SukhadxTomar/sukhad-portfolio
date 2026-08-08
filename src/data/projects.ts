export interface Project {
  id: string;
  index: string;
  title: string[];
  category: string;
  stack: string[];
  description: string[];
  github?: string;
}

export const projects: Project[] = [
  {
    id: 'orchestrai',
    index: '01',
    title: ['ORCHESTR', 'AI'],
    category: 'AUTONOMOUS SOFTWARE ENGINEERING',
    stack: ['LANGGRAPH', 'FASTAPI', 'PYDANTIC V2', 'FAISS', 'DOCKER'],
    description: [
      'Autonomous engineering system that turns a single prompt into a working project — coordinating agents for requirements, planning, architecture, codegen, testing, debugging, review, and docs.',
      'Built on Clean Architecture (ports & adapters) with a LangGraph orchestration layer isolating domain logic from LLM providers and infrastructure.',
      'Feedback loop: Test Runner → Debug Agent → Reflection Agent → retry for autonomous re-attempts on failure.',
    ],
    github: 'https://github.com/SukhadxTomar/OrchestrAI',
  },
  {
    id: 'datasciencecopilot',
    index: '02',
    title: ['DATA SCIENCE', 'COPILOT'],
    category: 'AGENTIC DATA SCIENCE',
    stack: ['LANGGRAPH', 'FASTAPI', 'PANDAS', 'SCIKIT-LEARN', 'XGBOOST'],
    description: [
      'Autonomous "AI data scientist" — upload a dataset, describe the problem, and a multi-agent workflow runs EDA, cleaning, feature engineering, training, evaluation, and SHAP explainability.',
      'Follows a "static graph, dynamic plan" design: fixed LangGraph nodes with a Planner Agent generating a per-dataset execution plan constrained to a Capability Registry.',
      'Agents use deterministic tools and never generate code; checkpointing after every node with bounded retries and human-input fallback.',
    ],
    github: 'https://github.com/SukhadxTomar/DataScience-Copilot',
  },
  {
    id: 'tailorcv',
    index: '03',
    title: ['TAILORCV', 'AI'],
    category: 'AGENTIC RESUME PIPELINE',
    stack: ['FASTAPI', 'LANGGRAPH', 'PYDANTIC V2', 'OPENROUTER', 'PYTEST'],
    description: [
      'Backend-first pipeline that tailors resumes to a job description: extraction, Resume/Job reader agents, a Matching Engine, tailoring, ATS analysis, and DOCX/PDF export.',
      'Anti-Fabrication Validator rejects tailored output containing unsupported skills, certifications, experience, projects, technologies, or numeric claims.',
      'Provider-neutral LLMClient protocol over OpenRouter, with a pytest suite covering agents, matching, validation, and the LangGraph workflow.',
    ],
    github: 'https://github.com/SukhadxTomar/tailorcv-ai',
  },
  {
    id: 'docintel',
    index: '04',
    title: ['DOCINTEL', 'AI'],
    category: 'HYBRID RAG PLATFORM',
    stack: ['LANGCHAIN', 'FAISS', 'GEMINI', 'STREAMLIT'],
    description: [
      'Multi-PDF chatbot that decides per-question — via FAISS similarity scores against a confidence threshold — whether to answer from your documents or from general model knowledge.',
      'Built on LangChain LCEL with MMR retrieval, BAAI/bge-small-en-v1.5 embeddings, and Google Gemini 2.5 Flash, streaming answers token by token.',
      'Source attribution distinguishing document-grounded vs. general answers, with structured logging across the pipeline.',
    ],
    github: 'https://github.com/SukhadxTomar/docintel-ai',
  },
  {
    id: 'churn',
    index: '05',
    title: ['CUSTOMER', 'INTELLIGENCE'],
    category: 'CLASSICAL ML / ANALYTICS',
    stack: ['PANDAS', 'SCIKIT-LEARN', 'K-MEANS', 'STREAMLIT'],
    description: [
      'Customer analytics platform on the UCI Online Retail dataset, computing per-customer RFM (Recency, Frequency, Monetary) profiles.',
      'K-Means clustering segmenting customers into high-value, loyal, at-risk, and inactive cohorts.',
      'Logistic Regression churn model over the RFM features and segment, served through a Streamlit app.',
    ],
    github: 'https://github.com/SukhadxTomar/customer-intelligence-system',
  },
  {
    id: 'creditrisk',
    index: '06',
    title: ['CREDIT RISK', 'PREDICTION'],
    category: 'CLASSICAL ML',
    stack: ['SCIKIT-LEARN', 'PANDAS', 'NUMPY', 'STREAMLIT'],
    description: [
      'ML app predicting a borrower’s loan-default probability, then deriving a credit score and risk rating.',
      'Scores from borrower features including income, loan amount, tenure, days past due, delinquency ratio, and credit utilization.',
      'Interactive Streamlit interface driving the prediction workflow end to end.',
    ],
    github: 'https://github.com/SukhadxTomar/credit-risk-prediction',
  },
];
