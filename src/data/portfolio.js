import marketingImage from '../assets/portfolio/marketing-agents.png'
import retellCarImage from '../assets/portfolio/retell-car-rental.png'
import retellLeadImage from '../assets/portfolio/retell-lead.png'
import sdrImage from '../assets/portfolio/sdr-workflow.png'

export const navigation = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Learning', href: '#learning' },
  { label: 'Contact', href: '#contact' },
]

export const stats = [
  { value: '6+', count: 6, label: 'Production Systems' },
  { value: '5+', count: 5, label: 'Technologies Mastered' },
  { value: 'Remote', label: 'Open to Roles' },
]

export const experience = {
  role: 'AI Automation Engineer',
  company: 'Multiskills Nigeria Limited',
  period: 'June 2024 - Present',
  location: 'Port Harcourt, Nigeria',
  type: 'Full-time',
  bullets: [
    'Designed and deployed LLM-powered multi-agent workflows using n8n, including SDR agents, marketing content agents, and supervisor-worker architectures.',
    'Built the Odoo Multi-Agent ERP System: autonomous agents managing CRM, Sales, Inventory, HR, and Accounting through a central orchestration layer.',
    'Engineered a conversational AI voice agent using Retell AI and n8n with dynamic intent recognition and real-time booking API integration.',
    'Developed an AI lead qualification pipeline combining OpenAI scoring, data enrichment, and conditional CRM routing.',
    'Created system messages, SOPs, and agent guardrails to prevent LLM hallucination in production.',
  ],
  tech: ['n8n', 'OpenAI API', 'Python', 'Odoo', 'Retell AI', 'PostgreSQL', 'Supabase', 'REST APIs', 'WhatsApp API', 'LangChain'],
}

export const projectFilters = ['All', 'Multi-Agent', 'Voice AI', 'LLM Engineering', 'Automation']

export const projects = [
  {
    id: 'odoo',
    title: 'Odoo Multi-Agent ERP System',
    eyebrow: 'Flagship System',
    category: ['Multi-Agent', 'LLM Engineering'],
    status: 'In Production',
    description: 'A fleet of autonomous AI agents, each managing a dedicated Odoo module, operating independently while a central supervisor orchestrates cross-module workflows for non-technical business users.',
    tech: ['Python', 'Odoo API', 'OpenAI', 'Multi-Agent Architecture'],
    featured: true,
    capabilities: ['CRM & sales orchestration', 'Inventory intelligence', 'HR & accounting agents', 'Natural-language control'],
  },
  {
    id: 'voice',
    title: 'Conversational AI Voice Agents',
    eyebrow: 'Voice AI · Retell AI · n8n',
    category: ['Voice AI', 'LLM Engineering'],
    status: 'Deployed',
    description: 'Production conversational AI for real estate and car rental operations, with dynamic intent recognition, real-time availability checks, booking creation, email actions, and intelligent escalation.',
    tech: ['Retell AI', 'n8n', 'REST API', 'Intent Recognition'],
    images: [
      { src: retellCarImage, label: 'Car rental flow', alt: 'Retell AI conversation flow for a car rental voice agent' },
      { src: retellLeadImage, label: 'Lead qualification', alt: 'Retell AI outbound real estate lead qualification flow' },
    ],
  },
  {
    id: 'sdr',
    title: 'SDR Transcript Automation System',
    eyebrow: 'LLM Engineering · Automation',
    category: ['LLM Engineering', 'Automation'],
    status: 'Deployed',
    description: 'Automated SDR call transcript processing that extracts insights, scores leads, and generates personalised email campaigns, reducing processing time from 45 minutes to under 3 minutes.',
    tech: ['n8n', 'OpenAI API', 'CRM Integration'],
    image: { src: sdrImage, alt: 'Full n8n SDR transcript automation workflow' },
  },
  {
    id: 'lead',
    title: 'AI Lead Qualification Pipeline',
    eyebrow: 'Automation · LLM Engineering',
    category: ['Automation', 'LLM Engineering'],
    status: 'Deployed',
    description: 'A webhook-triggered system combining data enrichment, AI lead scoring, and company research, routing high-value leads to immediate sales action with CRM and calendar sync.',
    tech: ['OpenAI API', 'Webhooks', 'PostgreSQL', 'CRM'],
  },
  {
    id: 'marketing',
    title: 'Marketing Multi-Agent System',
    eyebrow: 'Multi-Agent · Automation',
    category: ['Multi-Agent', 'Automation'],
    status: 'Deployed',
    description: 'A supervisor-worker agent architecture that generates, reviews, quality-checks, and delivers marketing content autonomously, eliminating manual review cycles.',
    tech: ['n8n', 'LLMs', 'Multi-Agent Design'],
    image: { src: marketingImage, alt: 'Large n8n marketing multi-agent supervisor and worker workflow' },
  },
]

export const skillGroups = [
  { title: 'Agent & Automation Engineering', skills: ['n8n', 'Multi-Agent Design', 'Supervisor-Worker Architecture', 'Workflow Automation', 'Webhook Systems', 'Event-Driven Flows'] },
  { title: 'LLM Engineering', skills: ['Prompt Engineering', 'System Message Design', 'Hallucination Control', 'Agent Guardrails', 'RAG Systems', 'LangChain'] },
  { title: 'Programming', skills: ['Python', 'JavaScript', 'JSON', 'SQL'] },
  { title: 'Platforms & Infrastructure', skills: ['OpenAI API', 'Retell AI', 'Odoo', 'PostgreSQL', 'Supabase', 'Airtable', 'Docker · learning', 'GitHub Actions · learning'] },
  { title: 'Business Tools', skills: ['Notion', 'Google Workspace', 'Slack', 'WhatsApp API', 'CRM Integration'] },
]

export const mastering = ['Machine Learning', 'Deep Learning', 'NLP', 'Transformers', 'MLOps', 'Cloud Deployment · AWS/GCP']

export const learning = [
  { number: '01', title: 'Complete ML / DL / NLP / MLOps Bootcamp', meta: 'Krish Naik · Udemy', status: 'Active · Started August 2025', progress: 35 },
  { number: '02', title: 'LangChain & AI Agents', meta: 'Advanced agent orchestration', status: 'Current roadmap' },
  { number: '03', title: 'MLOps: Docker, MLflow & CI/CD', meta: 'Production ML infrastructure', status: 'Current roadmap' },
]
