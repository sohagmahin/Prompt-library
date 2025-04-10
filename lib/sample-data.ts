import { Prompt, PromptCategory } from "./types";

export const samplePrompts: Prompt[] = [
  // Productivity & Business
  {
    id: "1",
    title: "Productivity Task Breakdown",
    description: "Break down complex tasks into manageable steps",
    content:
      "Please break down the following task into smaller, manageable steps: [task]. Consider time estimates, dependencies, and potential roadblocks for each step.",
    category: "productivity-business",
    tags: ["productivity", "task-management", "planning"],
    createdAt: new Date("2024-01-01"),
    updatedAt: new Date("2024-01-01"),
    popularity: 100,
  },
  {
    id: "2",
    title: "Meeting Agenda Generator",
    description: "Create a structured meeting agenda",
    content:
      "Generate a meeting agenda for [meeting_type] meeting with the following details:\n- Duration: [duration]\n- Main Topic: [topic]\n- Participants: [participants]\n\nInclude time slots, discussion points, and action items.",
    category: "productivity-business",
    tags: ["meetings", "agenda", "business"],
    createdAt: new Date("2024-01-02"),
    updatedAt: new Date("2024-01-02"),
    popularity: 95,
  },
  {
    id: "3",
    title: "Project Status Report",
    description: "Generate a comprehensive project status report",
    content:
      "Create a project status report for [project_name] with the following sections:\n1. Project Overview\n2. Current Status\n3. Key Achievements\n4. Challenges & Risks\n5. Next Steps\n6. Timeline Update\n\nInclude relevant metrics and KPIs.",
    category: "productivity-business",
    tags: ["reporting", "project-management", "status-update"],
    createdAt: new Date("2024-01-03"),
    updatedAt: new Date("2024-01-03"),
    popularity: 90,
  },

  // Marketing & Social Media
  {
    id: "4",
    title: "Social Media Post Generator",
    description: "Create engaging social media posts",
    content:
      "Generate a [platform] post about [topic] with a [tone] tone. Include relevant hashtags and a call to action.",
    category: "marketing-social-media",
    tags: ["marketing", "social-media", "content"],
    createdAt: new Date("2024-01-04"),
    updatedAt: new Date("2024-01-04"),
    popularity: 85,
  },
  {
    id: "5",
    title: "Email Marketing Campaign",
    description: "Create an effective email marketing sequence",
    content:
      "Design a [type] email marketing campaign for [product/service] targeting [audience]. Include:\n1. Subject line\n2. Preview text\n3. Email body\n4. Call to action\n5. Follow-up sequence",
    category: "marketing-social-media",
    tags: ["email-marketing", "campaign", "conversion"],
    createdAt: new Date("2024-01-05"),
    updatedAt: new Date("2024-01-05"),
    popularity: 80,
  },
  {
    id: "6",
    title: "SEO Content Brief",
    description: "Generate a comprehensive SEO content brief",
    content:
      "Create an SEO content brief for [topic] targeting [keyword]. Include:\n1. Target audience\n2. Search intent\n3. Content structure\n4. Key points to cover\n5. Internal linking opportunities\n6. Meta description",
    category: "marketing-social-media",
    tags: ["seo", "content-marketing", "brief"],
    createdAt: new Date("2024-01-06"),
    updatedAt: new Date("2024-01-06"),
    popularity: 75,
  },

  // Coding & Development

  {
    id: "7",
    title: "Code Review Assistant",
    description: "Get detailed code review feedback",
    content:
      "Please review the following [language] code and provide feedback on:\n1. Code quality and best practices\n2. Potential bugs or edge cases\n3. Performance optimizations\n4. Security considerations\n\nCode:\n[code]",
    category: "coding-development",
    tags: ["programming", "code-review", "best-practices"],
    createdAt: new Date("2024-01-07"),
    updatedAt: new Date("2024-01-07"),
    popularity: 95,
  },
  {
    id: "8",
    title: "Software Engineer Cover Letter",
    description:
      "Generate a tailored cover letter for software engineering roles",
    content:
      "Compose a professional and engaging cover letter for a [position_type] role. The candidate has experience as a [experience_level] specializing in [specialization]. Highlight relevant skills, projects, and achievements from their CV. Ensure the tone is confident yet concise, and tailored to the job requirements and company culture. Include:\n\n1. An engaging opening statement\n2. Key technical skills and frameworks\n3. Notable projects or contributions\n4. Soft skills and teamwork experiences\n5. A closing paragraph emphasizing enthusiasm and availability for an interview.",
    category: "coding-development",
    tags: ["cover-letter", "career", "software-engineering"],
    createdAt: new Date("2024-04-11"),
    updatedAt: new Date("2024-04-11"),
    popularity: 85,
  },

  {
    id: "9",
    title: "API Documentation",
    description: "Generate comprehensive API documentation",
    content:
      "Create API documentation for [api_name] with the following sections:\n1. Overview\n2. Authentication\n3. Endpoints\n4. Request/Response Examples\n5. Error Handling\n6. Rate Limiting\n\nInclude code samples in [language].",
    category: "coding-development",
    tags: ["api", "documentation", "technical-writing"],
    createdAt: new Date("2024-01-08"),
    updatedAt: new Date("2024-01-08"),
    popularity: 90,
  },
  {
    id: "10",
    title: "Database Query Optimizer",
    description: "Optimize database queries for better performance",
    content:
      "Analyze and optimize the following [database] query:\n[query]\n\nConsider:\n1. Index usage\n2. Query execution plan\n3. Potential bottlenecks\n4. Alternative approaches\n5. Best practices",
    category: "coding-development",
    tags: ["database", "optimization", "sql"],
    createdAt: new Date("2024-01-09"),
    updatedAt: new Date("2024-01-09"),
    popularity: 85,
  },

  // Education & Research
  {
    id: "11",
    title: "Research Paper Outline",
    description: "Create a structured research paper outline",
    content:
      "Generate an outline for a research paper on [topic] with the following sections:\n1. Abstract\n2. Introduction\n3. Literature Review\n4. Methodology\n5. Results\n6. Discussion\n7. Conclusion\n8. References",
    category: "education-research",
    tags: ["research", "academic", "writing"],
    createdAt: new Date("2024-01-10"),
    updatedAt: new Date("2024-01-10"),
    popularity: 80,
  },
  {
    id: "12",
    title: "Study Guide Generator",
    description: "Create a comprehensive study guide",
    content:
      "Generate a study guide for [subject] covering [topics]. Include:\n1. Key concepts\n2. Important formulas/theorems\n3. Practice problems\n4. Common mistakes to avoid\n5. Study tips",
    category: "education-research",
    tags: ["study", "learning", "education"],
    createdAt: new Date("2024-01-11"),
    updatedAt: new Date("2024-01-11"),
    popularity: 75,
  },
  {
    id: "13",
    title: "Literature Review",
    description: "Generate a comprehensive literature review",
    content:
      "Create a literature review on [topic] focusing on [aspect]. Include:\n1. Historical context\n2. Key theories\n3. Current research\n4. Gaps in knowledge\n5. Future directions",
    category: "education-research",
    tags: ["literature", "review", "academic"],
    createdAt: new Date("2024-01-12"),
    updatedAt: new Date("2024-01-12"),
    popularity: 70,
  },

  // Creative Writing
  {
    id: "14",
    title: "Character Development",
    description: "Create detailed character profiles",
    content:
      "Develop a character profile for [character_name] with the following details:\n1. Physical description\n2. Personality traits\n3. Background story\n4. Motivations\n5. Character arc\n6. Relationships",
    category: "creative-writing",
    tags: ["character", "fiction", "writing"],
    createdAt: new Date("2024-01-13"),
    updatedAt: new Date("2024-01-13"),
    popularity: 85,
  },
  {
    id: "15",
    title: "Plot Structure",
    description: "Outline a compelling story plot",
    content:
      "Create a plot structure for a [genre] story with:\n1. Inciting incident\n2. Rising action\n3. Climax\n4. Falling action\n5. Resolution\n\nInclude character arcs and subplots.",
    category: "creative-writing",
    tags: ["plot", "storytelling", "structure"],
    createdAt: new Date("2024-01-14"),
    updatedAt: new Date("2024-01-14"),
    popularity: 80,
  },
  {
    id: "16",
    title: "Dialogue Generator",
    description: "Create natural and engaging dialogue",
    content:
      "Write a dialogue between [character1] and [character2] about [topic]. Consider:\n1. Character voices\n2. Emotional tone\n3. Subtext\n4. Conflict/tension\n5. Natural flow",
    category: "creative-writing",
    tags: ["dialogue", "conversation", "writing"],
    createdAt: new Date("2024-01-15"),
    updatedAt: new Date("2024-01-15"),
    popularity: 75,
  },

  // Personal Development
  {
    id: "17",
    title: "Goal Setting Framework",
    description: "Create a structured goal-setting plan",
    content:
      "Develop a goal-setting framework for [goal] using the SMART criteria:\n1. Specific\n2. Measurable\n3. Achievable\n4. Relevant\n5. Time-bound\n\nInclude action steps and milestones.",
    category: "personal-development",
    tags: ["goals", "planning", "self-improvement"],
    createdAt: new Date("2024-01-16"),
    updatedAt: new Date("2024-01-16"),
    popularity: 90,
  },
  {
    id: "18",
    title: "Habit Formation",
    description: "Create a habit formation plan",
    content:
      "Design a habit formation plan for [habit] with:\n1. Trigger identification\n2. Routine development\n3. Reward system\n4. Progress tracking\n5. Obstacle planning",
    category: "personal-development",
    tags: ["habits", "routine", "self-improvement"],
    createdAt: new Date("2024-01-17"),
    updatedAt: new Date("2024-01-17"),
    popularity: 85,
  },
  {
    id: "19",
    title: "Time Management",
    description: "Create an effective time management system",
    content:
      "Develop a time management system for [context] with:\n1. Priority matrix\n2. Daily schedule\n3. Task batching\n4. Focus blocks\n5. Review process",
    category: "personal-development",
    tags: ["time-management", "productivity", "planning"],
    createdAt: new Date("2024-01-18"),
    updatedAt: new Date("2024-01-18"),
    popularity: 80,
  },

  // Daily Life
  {
    id: "20",
    title: "Meal Planning",
    description: "Create a healthy meal plan",
    content:
      "Generate a [duration] meal plan for [diet_type] with:\n1. Breakfast options\n2. Lunch options\n3. Dinner options\n4. Snack ideas\n5. Shopping list\n\nConsider [dietary_restrictions].",
    category: "daily-life",
    tags: ["meal-planning", "nutrition", "health"],
    createdAt: new Date("2024-01-19"),
    updatedAt: new Date("2024-01-19"),
    popularity: 85,
  },
  {
    id: "21",
    title: "Travel Itinerary",
    description: "Create a detailed travel itinerary",
    content:
      "Design a [duration] travel itinerary for [destination] with:\n1. Daily schedule\n2. Transportation details\n3. Accommodation options\n4. Activities and attractions\n5. Budget breakdown\n6. Packing list",
    category: "daily-life",
    tags: ["travel", "planning", "itinerary"],
    createdAt: new Date("2024-01-20"),
    updatedAt: new Date("2024-01-20"),
    popularity: 80,
  },
  {
    id: "22",
    title: "Home Organization",
    description: "Create a home organization plan",
    content:
      "Develop a home organization plan for [space] with:\n1. Decluttering strategy\n2. Storage solutions\n3. Maintenance routine\n4. Organization zones\n5. Cleaning schedule",
    category: "daily-life",
    tags: ["organization", "home", "cleaning"],
    createdAt: new Date("2024-01-21"),
    updatedAt: new Date("2024-01-21"),
    popularity: 75,
  },
];

export const categories: {
  id: PromptCategory;
  name: string;
  description: string;
}[] = [
  {
    id: "productivity-business",
    name: "Productivity & Business",
    description:
      "Prompts for task management, business strategy, and productivity enhancement",
  },
  {
    id: "marketing-social-media",
    name: "Marketing & Social Media",
    description:
      "Prompts for content creation, social media management, and marketing strategies",
  },
  {
    id: "coding-development",
    name: "Coding & Development",
    description: "Prompts for programming, code review, and development tasks",
  },
  {
    id: "education-research",
    name: "Education & Research",
    description: "Prompts for learning, research, and academic writing",
  },
  {
    id: "creative-writing",
    name: "Creative Writing",
    description:
      "Prompts for storytelling, content creation, and creative expression",
  },
  {
    id: "personal-development",
    name: "Personal Development",
    description:
      "Prompts for self-improvement, goal setting, and personal growth",
  },
  {
    id: "daily-life",
    name: "Daily Life",
    description: "Prompts for everyday tasks, health, and lifestyle management",
  },
];
