import type { IconType } from 'react-icons';
import {
  SiCelery, SiDocker, SiFastapi, SiHuggingface, SiLangchain, SiLanggraph, SiNumpy,
  SiOllama, SiOpencv, SiPandas, SiPytest, SiPython, SiRedis,
  SiScikitlearn, SiStreamlit,
} from 'react-icons/si';
import {
  BarChart3, BadgeCheck, BrainCircuit, Boxes, Cpu, Database, Layers3, Plug,
  Sparkles, UsersRound, Workflow,
} from 'lucide-react';

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

export interface Skill {
  name: string;
  icon: IconType;
  category: SkillCategory;
  verified: boolean;
}

export type SkillCategory =
  | 'Agentic & LLM Orchestration'
  | 'Backend & Infra'
  | 'Data & ML'
  | 'Retrieval & Databases';

// Concept icons are used when a technology has no Simple Icons brand glyph.
const conceptIcon = (icon: typeof Database) => icon as unknown as IconType;

export const stackList: Skill[] = [
  { name: 'Python', icon: SiPython, category: 'Data & ML', verified: true },
  { name: 'SQL', icon: conceptIcon(Database), category: 'Retrieval & Databases', verified: true },
  { name: 'LangChain', icon: SiLangchain, category: 'Agentic & LLM Orchestration', verified: true },
  { name: 'LangGraph', icon: SiLanggraph, category: 'Agentic & LLM Orchestration', verified: true },
  { name: 'LCEL', icon: conceptIcon(Workflow), category: 'Agentic & LLM Orchestration', verified: true },
  { name: 'FastAPI', icon: SiFastapi, category: 'Backend & Infra', verified: true },
  { name: 'Pydantic v2', icon: conceptIcon(BadgeCheck), category: 'Backend & Infra', verified: true },
  { name: 'Docker', icon: SiDocker, category: 'Backend & Infra', verified: true },
  { name: 'pytest', icon: SiPytest, category: 'Backend & Infra', verified: true },
  { name: 'FAISS', icon: conceptIcon(Database), category: 'Retrieval & Databases', verified: true },
  { name: 'Vector Databases', icon: conceptIcon(Layers3), category: 'Retrieval & Databases', verified: true },
  { name: 'Embedding Models', icon: conceptIcon(Boxes), category: 'Retrieval & Databases', verified: true },
  { name: 'HuggingFace Transformers', icon: SiHuggingface, category: 'Data & ML', verified: true },
  { name: 'Scikit-learn', icon: SiScikitlearn, category: 'Data & ML', verified: true },
  { name: 'OpenCV', icon: SiOpencv, category: 'Data & ML', verified: true },
  { name: 'Pandas', icon: SiPandas, category: 'Data & ML', verified: true },
  { name: 'NumPy', icon: SiNumpy, category: 'Data & ML', verified: true },
  { name: 'Power BI', icon: conceptIcon(BarChart3), category: 'Data & ML', verified: true },
  { name: 'Streamlit', icon: SiStreamlit, category: 'Backend & Infra', verified: true },
  { name: 'Gemini', icon: conceptIcon(Sparkles), category: 'Agentic & LLM Orchestration', verified: true },
  { name: 'MySQL', icon: conceptIcon(Database), category: 'Retrieval & Databases', verified: true },
  { name: 'MCP (Model Context Protocol)', icon: conceptIcon(Plug), category: 'Agentic & LLM Orchestration', verified: false },
  { name: 'CrewAI', icon: conceptIcon(UsersRound), category: 'Agentic & LLM Orchestration', verified: false },
  { name: 'AutoGen', icon: conceptIcon(BrainCircuit), category: 'Agentic & LLM Orchestration', verified: false },
  { name: 'OpenAI API', icon: conceptIcon(Sparkles), category: 'Agentic & LLM Orchestration', verified: false },
  { name: 'Anthropic Claude API', icon: conceptIcon(BrainCircuit), category: 'Agentic & LLM Orchestration', verified: false },
  { name: 'Redis', icon: SiRedis, category: 'Backend & Infra', verified: false },
  { name: 'Celery', icon: SiCelery, category: 'Backend & Infra', verified: false },
  { name: 'Ollama', icon: SiOllama, category: 'Backend & Infra', verified: false },
  { name: 'vLLM', icon: conceptIcon(Cpu), category: 'Backend & Infra', verified: false },
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
