export type Opportunity = {
  slug: string;
  title: string;
  posted: string;
  category: string;
  location: string;
  commitment: string;
  pay: string;
  skills: string[];
  featured?: boolean;
  summary: string;
  overview: string;
  responsibilities: string[];
  qualifications: string[];
  niceToHave: string[];
};

export const opportunities: Opportunity[] = [
  {
    slug: "ai-evaluation-engineer",
    title: "AI Evaluation Engineer",
    posted: "Aug 25, 2026",
    category: "Engineering",
    location: "Remote · Southeast Asia",
    commitment: "10–20 hours / week",
    pay: "$50–95 / hour",
    skills: ["Python", "TypeScript", "Agent evaluation", "Debugging", "MCP"],
    featured: true,
    summary: "Design demanding, reproducible tasks that reveal how software agents reason, recover, and complete real work.",
    overview: "You will work with GradNorm’s evaluation team to turn authentic software-engineering workflows into controlled agent tasks. The role combines systems thinking, careful specification, and hands-on testing across modern development tools.",
    responsibilities: [
      "Build realistic task environments around bugs, feature work, and codebase maintenance.",
      "Write deterministic checks that distinguish genuine completion from plausible-looking output.",
      "Review agent traces and identify the reasoning or tool-use behavior behind failures.",
      "Document reference approaches and edge cases for research and training teams.",
    ],
    qualifications: [
      "Strong production experience in at least one modern programming language.",
      "Comfort debugging unfamiliar codebases and communicating technical decisions clearly.",
      "Practical understanding of tests, version control, APIs, and developer tooling.",
      "Reliable written English and the ability to work independently in a remote setting.",
    ],
    niceToHave: ["Experience with LLM agents or MCP tools", "Open-source contributions", "Fluency in a Southeast Asian language"],
  },
  {
    slug: "thai-language-cultural-expert",
    title: "Thai Language & Cultural Expert",
    posted: "Aug 25, 2026",
    category: "Language",
    location: "Remote · Thailand",
    commitment: "8–15 hours / week",
    pay: "$28–55 / hour",
    skills: ["Thai", "English", "Localization", "Research", "Quality review"],
    featured: true,
    summary: "Help AI systems understand the language, context, and everyday conventions that generic datasets miss.",
    overview: "You will create and review high-context Thai language tasks spanning customer communication, local commerce, and knowledge work. Your judgment will help us measure whether models are merely fluent or genuinely useful in context.",
    responsibilities: [
      "Author natural Thai prompts, responses, and evaluation criteria across practical domains.",
      "Identify cultural assumptions, ambiguity, and regional language patterns that affect quality.",
      "Review model outputs for factual accuracy, tone, and contextual appropriateness.",
      "Collaborate with researchers to refine rubrics and difficult test cases.",
    ],
    qualifications: [
      "Native-level Thai and professional written English.",
      "Excellent editorial judgment and close attention to small differences in meaning.",
      "Experience in localization, research, education, operations, or a related field.",
      "Ability to explain quality decisions with concise evidence.",
    ],
    niceToHave: ["Experience evaluating AI outputs", "Knowledge of Thai digital commerce", "Editorial or linguistic training"],
  },
  {
    slug: "marketplace-operations-specialist",
    title: "Marketplace Operations Specialist",
    posted: "Aug 24, 2026",
    category: "Operations",
    location: "Remote · Southeast Asia",
    commitment: "10–18 hours / week",
    pay: "$35–70 / hour",
    skills: ["Seller operations", "Catalogs", "Promotions", "Order workflows"],
    featured: true,
    summary: "Translate the practical judgment behind regional seller operations into realistic tasks for AI agents.",
    overview: "This project focuses on the workflows marketplace teams handle every day: catalog updates, promotion setup, order exceptions, and performance review. You will help us reproduce those decisions in safe, resettable environments.",
    responsibilities: [
      "Map high-friction seller workflows and the decisions required to complete them well.",
      "Create realistic scenarios, source materials, and expected outcomes.",
      "Review agent behavior against how experienced operators actually work.",
      "Surface local platform conventions and exceptions that documentation does not capture.",
    ],
    qualifications: [
      "Two or more years in marketplace, ecommerce, or merchant operations.",
      "Hands-on experience with seller centers, catalog tools, promotions, or order management.",
      "Clear written communication and a structured approach to process documentation.",
      "Professional fluency in English and at least one Southeast Asian language.",
    ],
    niceToHave: ["Regional multi-market experience", "Training or QA background", "Familiarity with automation tools"],
  },
  {
    slug: "financial-reasoning-expert",
    title: "Financial Reasoning Expert",
    posted: "Aug 24, 2026",
    category: "Finance",
    location: "Remote · APAC",
    commitment: "8–16 hours / week",
    pay: "$45–90 / hour",
    skills: ["Financial analysis", "Spreadsheets", "Accounting", "Data review"],
    featured: true,
    summary: "Create rigorous, spreadsheet-grounded problems that test financial reasoning rather than surface fluency.",
    overview: "You will turn real financial analysis and accounting workflows into evaluation tasks with traceable assumptions and verifiable answers. Projects may span forecasting, reconciliation, management reporting, and small-business finance.",
    responsibilities: [
      "Design multi-step financial tasks using realistic tables, documents, and constraints.",
      "Create reference analyses and clear grading criteria for each task.",
      "Review model work for calculation accuracy, unsupported assumptions, and decision quality.",
      "Help calibrate task difficulty across different model capabilities.",
    ],
    qualifications: [
      "Professional experience in accounting, FP&A, audit, investment analysis, or consulting.",
      "Advanced spreadsheet fluency and strong quantitative reasoning.",
      "Ability to communicate assumptions and methodology precisely.",
      "A degree or recognized qualification in finance, accounting, economics, or a related field.",
    ],
    niceToHave: ["CPA, CFA, or equivalent qualification", "Experience with regional SME finance", "Data analytics experience"],
  },
  {
    slug: "agent-safety-researcher",
    title: "Agent Safety Researcher",
    posted: "Aug 23, 2026",
    category: "Research",
    location: "Remote",
    commitment: "10–20 hours / week",
    pay: "$60–110 / hour",
    skills: ["AI safety", "Red teaming", "Experiment design", "Python"],
    summary: "Develop adversarial evaluations for agents operating across tools, interfaces, and sensitive workflows.",
    overview: "You will work on practical safety evaluations for tool-using agents. The focus is observable behavior: whether an agent respects boundaries, handles ambiguity, and recovers safely when workflows become adversarial or underspecified.",
    responsibilities: [
      "Design realistic adversarial scenarios for computer-use and tool-using agents.",
      "Specify expected safe behavior, failure modes, and measurable outcomes.",
      "Analyze traces and cluster recurring safety-relevant behaviors.",
      "Partner with engineers to turn research hypotheses into repeatable evaluations.",
    ],
    qualifications: [
      "Experience in AI safety, security research, red teaming, or rigorous model evaluation.",
      "Strong experimental reasoning and comfort working with ambiguous failure modes.",
      "Ability to write precise task specifications and evaluation rubrics.",
      "Working knowledge of Python and modern AI development workflows.",
    ],
    niceToHave: ["Published evaluation research", "Human factors background", "Experience with agentic systems"],
  },
  {
    slug: "bilingual-data-quality-lead",
    title: "Bilingual Data Quality Lead",
    posted: "Aug 22, 2026",
    category: "Quality",
    location: "Remote · Southeast Asia",
    commitment: "15–25 hours / week",
    pay: "$40–75 / hour",
    skills: ["Quality systems", "Bilingual review", "Rubrics", "Team calibration"],
    summary: "Set the quality bar for expert-authored datasets and keep distributed review teams calibrated.",
    overview: "You will lead quality review for multilingual expert-data projects, translating project goals into practical rubrics and helping contributors apply them consistently across difficult edge cases.",
    responsibilities: [
      "Build review rubrics, sampling plans, and escalation paths for expert data.",
      "Calibrate contributors using examples, counterexamples, and structured feedback.",
      "Investigate quality trends and recommend changes to instructions or workflows.",
      "Report project-level quality signals to operations and research leads.",
    ],
    qualifications: [
      "Experience leading QA, annotation, editorial, localization, or research operations.",
      "Professional fluency in English and a Southeast Asian language.",
      "Strong judgment, documentation skills, and comfort giving direct feedback.",
      "Ability to balance consistency with nuanced domain-specific decisions.",
    ],
    niceToHave: ["Experience with AI training data", "People-management experience", "Statistical quality-control knowledge"],
  },
  {
    slug: "healthcare-workflow-expert",
    title: "Healthcare Workflow Expert",
    posted: "Aug 22, 2026",
    category: "Healthcare",
    location: "Remote · APAC",
    commitment: "6–12 hours / week",
    pay: "$50–100 / hour",
    skills: ["Clinical workflows", "Evidence review", "Documentation", "Patient safety"],
    summary: "Shape careful evaluations around clinical-adjacent workflows, documentation, and evidence-grounded decisions.",
    overview: "You will help us create non-diagnostic evaluation tasks that reflect how healthcare professionals review information, document work, and maintain appropriate limits under uncertainty.",
    responsibilities: [
      "Develop evidence-grounded scenarios and clear task boundaries.",
      "Review outputs for factual support, appropriate uncertainty, and safety.",
      "Create reference responses and detailed scoring guidance.",
      "Advise the team on realistic professional workflows and terminology.",
    ],
    qualifications: [
      "Current or recent professional experience in medicine, nursing, pharmacy, or clinical research.",
      "Strong evidence-review and written communication skills.",
      "Careful judgment around uncertainty and professional boundaries.",
      "Ability to work asynchronously and document reasoning clearly.",
    ],
    niceToHave: ["Medical education experience", "Health informatics background", "Research publication experience"],
  },
  {
    slug: "indonesian-commerce-specialist",
    title: "Indonesian Commerce Specialist",
    posted: "Aug 21, 2026",
    category: "Operations",
    location: "Remote · Indonesia",
    commitment: "8–15 hours / week",
    pay: "$30–60 / hour",
    skills: ["Bahasa Indonesia", "Ecommerce", "Merchant tools", "Customer operations"],
    summary: "Bring local commerce knowledge to the tasks and evaluations used to improve AI agents in Indonesia.",
    overview: "You will document and evaluate ecommerce workflows that depend on Indonesian language, local platform conventions, and practical merchant judgment.",
    responsibilities: [
      "Author realistic merchant and customer-operations scenarios in Bahasa Indonesia and English.",
      "Define correct outcomes for catalog, order, promotion, and service workflows.",
      "Review agent behavior for local accuracy, completeness, and tone.",
      "Explain platform-specific exceptions and unwritten operating practices.",
    ],
    qualifications: [
      "Native-level Bahasa Indonesia and professional English.",
      "Hands-on experience in ecommerce, marketplace, retail, or customer operations.",
      "Strong process reasoning and attention to detail.",
      "Comfort learning new interfaces and documenting work step by step.",
    ],
    niceToHave: ["Seller-center experience", "Localization or QA background", "Experience training operations teams"],
  },
  {
    slug: "applied-data-scientist",
    title: "Applied Data Scientist",
    posted: "Aug 20, 2026",
    category: "Data",
    location: "Remote · APAC",
    commitment: "10–20 hours / week",
    pay: "$55–105 / hour",
    skills: ["Python", "Statistics", "Experimentation", "Data visualization"],
    summary: "Build analytical tasks that measure whether models can move from messy evidence to defensible decisions.",
    overview: "You will create evaluation tasks grounded in practical analytics: cleaning imperfect data, selecting appropriate methods, interpreting results, and communicating limitations.",
    responsibilities: [
      "Design realistic datasets and multi-step analytical questions.",
      "Create reference notebooks, calculations, and grading criteria.",
      "Review model outputs for methodological soundness and unsupported claims.",
      "Work with researchers to identify meaningful capability boundaries.",
    ],
    qualifications: [
      "Three or more years applying statistics or data science to real decisions.",
      "Strong Python, SQL, and exploratory-analysis skills.",
      "Excellent understanding of experimental design and uncertainty.",
      "Ability to explain technical work to non-specialists.",
    ],
    niceToHave: ["Causal inference experience", "Experience in regional technology companies", "Model evaluation work"],
  },
];

export function getOpportunity(slug: string) {
  return opportunities.find((opportunity) => opportunity.slug === slug);
}
