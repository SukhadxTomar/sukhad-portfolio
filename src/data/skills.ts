export interface Capability {
  index: string;
  name: string;
  weight: number; // out of 8, relative depth indicator derived from resume emphasis
}

export const capabilities: Capability[] = [
  { index: '01', name: 'AGENTIC SYSTEMS', weight: 8 },
  { index: '02', name: 'LLM ENGINEERING', weight: 8 },
  { index: '03', name: 'RAG / RETRIEVAL', weight: 7 },
  { index: '04', name: 'MACHINE LEARNING', weight: 7 },
  { index: '05', name: 'BACKEND SYSTEMS', weight: 6 },
  { index: '06', name: 'COMPUTER VISION', weight: 4 },
  { index: '07', name: 'DATA ANALYTICS', weight: 6 },
  { index: '08', name: 'DEEP LEARNING', weight: 5 },
];

export const stackList: string[] = [
  'Python', 'SQL', 'LangChain', 'LangGraph', 'LCEL', 'FastAPI', 'Pydantic v2',
  'Docker', 'pytest', 'FAISS', 'Vector Databases', 'Embedding Models',
  'HuggingFace Transformers', 'Scikit-learn', 'OpenCV', 'Pandas', 'NumPy', 'Power BI',
];

export interface TimelineEntry {
  year: string;
  label: string;
}

export const timeline: TimelineEntry[] = [
  { year: '2026', label: 'DATA SCIENCE COPILOT' },
  { year: '2026', label: 'ORCHESTRAI' },
  { year: '2026', label: 'TAILORCV AI' },
  { year: '2025', label: 'DOCINTEL AI' },
  { year: '2025', label: 'COMPUTER VISION / CLASSICAL ML' },
  { year: '2022', label: 'B.TECH CSE, AKTU — BEGAN' },
];

export const marqueeWords: string[] = [
  'AI ENGINEER', 'AGENTIC SYSTEMS', 'LLM ENGINEERING', 'MACHINE LEARNING',
  'LANGGRAPH', 'FASTAPI', 'PYTHON',
];
