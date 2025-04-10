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
    author: "System",
    createdAt: new Date("2024-01-01"),
    updatedAt: new Date("2024-01-01"),
    popularity: 100,
    placeholders: [
      {
        name: "task",
        description: "The main task to break down",
        defaultValue: "Launch a new product",
      },
    ],
  },
  {
    id: "2",
    title: "Meeting Agenda Generator",
    description: "Create a structured meeting agenda",
    content:
      "Generate a meeting agenda for [meeting_type] meeting with the following details:\n- Duration: [duration]\n- Main Topic: [topic]\n- Participants: [participants]\n\nInclude time slots, discussion points, and action items.",
    category: "productivity-business",
    tags: ["meetings", "agenda", "business"],
    author: "System",
    createdAt: new Date("2024-01-02"),
    updatedAt: new Date("2024-01-02"),
    popularity: 95,
    placeholders: [
      {
        name: "meeting_type",
        description: "Type of meeting",
        defaultValue: "team sync",
      },
      {
        name: "duration",
        description: "Meeting duration",
        defaultValue: "1 hour",
      },
      {
        name: "topic",
        description: "Main discussion topic",
        defaultValue: "Q2 project planning",
      },
      {
        name: "participants",
        description: "Meeting participants",
        defaultValue: "Product team, Engineering team",
      },
    ],
  },
  {
    id: "3",
    title: "Project Status Report",
    description: "Generate a comprehensive project status report",
    content:
      "Create a project status report for [project_name] with the following sections:\n1. Project Overview\n2. Current Status\n3. Key Achievements\n4. Challenges & Risks\n5. Next Steps\n6. Timeline Update\n\nInclude relevant metrics and KPIs.",
    category: "productivity-business",
    tags: ["reporting", "project-management", "status-update"],
    author: "System",
    createdAt: new Date("2024-01-03"),
    updatedAt: new Date("2024-01-03"),
    popularity: 90,
    placeholders: [
      {
        name: "project_name",
        description: "Name of the project",
        defaultValue: "Website Redesign",
      },
    ],
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
    author: "System",
    createdAt: new Date("2024-01-04"),
    updatedAt: new Date("2024-01-04"),
    popularity: 85,
    placeholders: [
      {
        name: "platform",
        description: "Social media platform",
        defaultValue: "Twitter",
      },
      {
        name: "topic",
        description: "Post topic",
        defaultValue: "AI technology",
      },
      {
        name: "tone",
        description: "Tone of the post",
        defaultValue: "professional",
      },
    ],
  },
  {
    id: "5",
    title: "Email Marketing Campaign",
    description: "Create an effective email marketing sequence",
    content:
      "Design a [type] email marketing campaign for [product/service] targeting [audience]. Include:\n1. Subject line\n2. Preview text\n3. Email body\n4. Call to action\n5. Follow-up sequence",
    category: "marketing-social-media",
    tags: ["email-marketing", "campaign", "conversion"],
    author: "System",
    createdAt: new Date("2024-01-05"),
    updatedAt: new Date("2024-01-05"),
    popularity: 80,
    placeholders: [
      {
        name: "type",
        description: "Type of campaign",
        defaultValue: "welcome series",
      },
      {
        name: "product/service",
        description: "Product or service being marketed",
        defaultValue: "new SaaS product",
      },
      {
        name: "audience",
        description: "Target audience",
        defaultValue: "small business owners",
      },
    ],
  },
  {
    id: "6",
    title: "SEO Content Brief",
    description: "Generate a comprehensive SEO content brief",
    content:
      "Create an SEO content brief for [topic] targeting [keyword]. Include:\n1. Target audience\n2. Search intent\n3. Content structure\n4. Key points to cover\n5. Internal linking opportunities\n6. Meta description",
    category: "marketing-social-media",
    tags: ["seo", "content-marketing", "brief"],
    author: "System",
    createdAt: new Date("2024-01-06"),
    updatedAt: new Date("2024-01-06"),
    popularity: 75,
    placeholders: [
      {
        name: "topic",
        description: "Content topic",
        defaultValue: "digital marketing strategies",
      },
      {
        name: "keyword",
        description: "Target keyword",
        defaultValue: "content marketing tips",
      },
    ],
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
    author: "System",
    createdAt: new Date("2024-01-07"),
    updatedAt: new Date("2024-01-07"),
    popularity: 95,
    placeholders: [
      {
        name: "language",
        description: "Programming language",
        defaultValue: "TypeScript",
      },
      {
        name: "code",
        description: "Code to review",
        defaultValue: "// Your code here",
      },
    ],
  },
  {
    id: "8",
    title: "API Documentation",
    description: "Generate comprehensive API documentation",
    content:
      "Create API documentation for [api_name] with the following sections:\n1. Overview\n2. Authentication\n3. Endpoints\n4. Request/Response Examples\n5. Error Handling\n6. Rate Limiting\n\nInclude code samples in [language].",
    category: "coding-development",
    tags: ["api", "documentation", "technical-writing"],
    author: "System",
    createdAt: new Date("2024-01-08"),
    updatedAt: new Date("2024-01-08"),
    popularity: 90,
    placeholders: [
      {
        name: "api_name",
        description: "Name of the API",
        defaultValue: "User Management API",
      },
      {
        name: "language",
        description: "Programming language for examples",
        defaultValue: "JavaScript",
      },
    ],
  },
  {
    id: "9",
    title: "Database Query Optimizer",
    description: "Optimize database queries for better performance",
    content:
      "Analyze and optimize the following [database] query:\n[query]\n\nConsider:\n1. Index usage\n2. Query execution plan\n3. Potential bottlenecks\n4. Alternative approaches\n5. Best practices",
    category: "coding-development",
    tags: ["database", "optimization", "sql"],
    author: "System",
    createdAt: new Date("2024-01-09"),
    updatedAt: new Date("2024-01-09"),
    popularity: 85,
    placeholders: [
      {
        name: "database",
        description: "Database type",
        defaultValue: "PostgreSQL",
      },
      {
        name: "query",
        description: "SQL query to optimize",
        defaultValue: "SELECT * FROM users WHERE status = 'active'",
      },
    ],
  },

  // Education & Research
  {
    id: "10",
    title: "Research Paper Outline",
    description: "Create a structured research paper outline",
    content:
      "Generate an outline for a research paper on [topic] with the following sections:\n1. Abstract\n2. Introduction\n3. Literature Review\n4. Methodology\n5. Results\n6. Discussion\n7. Conclusion\n8. References",
    category: "education-research",
    tags: ["research", "academic", "writing"],
    author: "System",
    createdAt: new Date("2024-01-10"),
    updatedAt: new Date("2024-01-10"),
    popularity: 80,
    placeholders: [
      {
        name: "topic",
        description: "Research topic",
        defaultValue: "impact of AI on education",
      },
    ],
  },
  {
    id: "11",
    title: "Study Guide Generator",
    description: "Create a comprehensive study guide",
    content:
      "Generate a study guide for [subject] covering [topics]. Include:\n1. Key concepts\n2. Important formulas/theorems\n3. Practice problems\n4. Common mistakes to avoid\n5. Study tips",
    category: "education-research",
    tags: ["study", "learning", "education"],
    author: "System",
    createdAt: new Date("2024-01-11"),
    updatedAt: new Date("2024-01-11"),
    popularity: 75,
    placeholders: [
      {
        name: "subject",
        description: "Subject to study",
        defaultValue: "Calculus",
      },
      {
        name: "topics",
        description: "Topics to cover",
        defaultValue: "derivatives, integrals, limits",
      },
    ],
  },
  {
    id: "12",
    title: "Literature Review",
    description: "Generate a comprehensive literature review",
    content:
      "Create a literature review on [topic] focusing on [aspect]. Include:\n1. Historical context\n2. Key theories\n3. Current research\n4. Gaps in knowledge\n5. Future directions",
    category: "education-research",
    tags: ["literature", "review", "academic"],
    author: "System",
    createdAt: new Date("2024-01-12"),
    updatedAt: new Date("2024-01-12"),
    popularity: 70,
    placeholders: [
      {
        name: "topic",
        description: "Research topic",
        defaultValue: "machine learning in healthcare",
      },
      {
        name: "aspect",
        description: "Specific aspect to focus on",
        defaultValue: "diagnostic applications",
      },
    ],
  },

  // Creative Writing
  {
    id: "13",
    title: "Character Development",
    description: "Create detailed character profiles",
    content:
      "Develop a character profile for [character_name] with the following details:\n1. Physical description\n2. Personality traits\n3. Background story\n4. Motivations\n5. Character arc\n6. Relationships",
    category: "creative-writing",
    tags: ["character", "fiction", "writing"],
    author: "System",
    createdAt: new Date("2024-01-13"),
    updatedAt: new Date("2024-01-13"),
    popularity: 85,
    placeholders: [
      {
        name: "character_name",
        description: "Character's name",
        defaultValue: "Sarah Johnson",
      },
    ],
  },
  {
    id: "14",
    title: "Plot Structure",
    description: "Outline a compelling story plot",
    content:
      "Create a plot structure for a [genre] story with:\n1. Inciting incident\n2. Rising action\n3. Climax\n4. Falling action\n5. Resolution\n\nInclude character arcs and subplots.",
    category: "creative-writing",
    tags: ["plot", "storytelling", "structure"],
    author: "System",
    createdAt: new Date("2024-01-14"),
    updatedAt: new Date("2024-01-14"),
    popularity: 80,
    placeholders: [
      {
        name: "genre",
        description: "Story genre",
        defaultValue: "science fiction",
      },
    ],
  },
  {
    id: "15",
    title: "Dialogue Generator",
    description: "Create natural and engaging dialogue",
    content:
      "Write a dialogue between [character1] and [character2] about [topic]. Consider:\n1. Character voices\n2. Emotional tone\n3. Subtext\n4. Conflict/tension\n5. Natural flow",
    category: "creative-writing",
    tags: ["dialogue", "conversation", "writing"],
    author: "System",
    createdAt: new Date("2024-01-15"),
    updatedAt: new Date("2024-01-15"),
    popularity: 75,
    placeholders: [
      {
        name: "character1",
        description: "First character",
        defaultValue: "detective",
      },
      {
        name: "character2",
        description: "Second character",
        defaultValue: "suspect",
      },
      {
        name: "topic",
        description: "Dialogue topic",
        defaultValue: "the missing evidence",
      },
    ],
  },

  // Personal Development
  {
    id: "16",
    title: "Goal Setting Framework",
    description: "Create a structured goal-setting plan",
    content:
      "Develop a goal-setting framework for [goal] using the SMART criteria:\n1. Specific\n2. Measurable\n3. Achievable\n4. Relevant\n5. Time-bound\n\nInclude action steps and milestones.",
    category: "personal-development",
    tags: ["goals", "planning", "self-improvement"],
    author: "System",
    createdAt: new Date("2024-01-16"),
    updatedAt: new Date("2024-01-16"),
    popularity: 90,
    placeholders: [
      {
        name: "goal",
        description: "Personal goal",
        defaultValue: "learning a new language",
      },
    ],
  },
  {
    id: "17",
    title: "Habit Formation",
    description: "Create a habit formation plan",
    content:
      "Design a habit formation plan for [habit] with:\n1. Trigger identification\n2. Routine development\n3. Reward system\n4. Progress tracking\n5. Obstacle planning",
    category: "personal-development",
    tags: ["habits", "routine", "self-improvement"],
    author: "System",
    createdAt: new Date("2024-01-17"),
    updatedAt: new Date("2024-01-17"),
    popularity: 85,
    placeholders: [
      {
        name: "habit",
        description: "Habit to develop",
        defaultValue: "daily meditation",
      },
    ],
  },
  {
    id: "18",
    title: "Time Management",
    description: "Create an effective time management system",
    content:
      "Develop a time management system for [context] with:\n1. Priority matrix\n2. Daily schedule\n3. Task batching\n4. Focus blocks\n5. Review process",
    category: "personal-development",
    tags: ["time-management", "productivity", "planning"],
    author: "System",
    createdAt: new Date("2024-01-18"),
    updatedAt: new Date("2024-01-18"),
    popularity: 80,
    placeholders: [
      {
        name: "context",
        description: "Time management context",
        defaultValue: "remote work",
      },
    ],
  },

  // Daily Life
  {
    id: "19",
    title: "Meal Planning",
    description: "Create a healthy meal plan",
    content:
      "Generate a [duration] meal plan for [diet_type] with:\n1. Breakfast options\n2. Lunch options\n3. Dinner options\n4. Snack ideas\n5. Shopping list\n\nConsider [dietary_restrictions].",
    category: "daily-life",
    tags: ["meal-planning", "nutrition", "health"],
    author: "System",
    createdAt: new Date("2024-01-19"),
    updatedAt: new Date("2024-01-19"),
    popularity: 85,
    placeholders: [
      {
        name: "duration",
        description: "Meal plan duration",
        defaultValue: "weekly",
      },
      {
        name: "diet_type",
        description: "Type of diet",
        defaultValue: "vegetarian",
      },
      {
        name: "dietary_restrictions",
        description: "Dietary restrictions",
        defaultValue: "no nuts, gluten-free",
      },
    ],
  },
  {
    id: "20",
    title: "Travel Itinerary",
    description: "Create a detailed travel itinerary",
    content:
      "Design a [duration] travel itinerary for [destination] with:\n1. Daily schedule\n2. Transportation details\n3. Accommodation options\n4. Activities and attractions\n5. Budget breakdown\n6. Packing list",
    category: "daily-life",
    tags: ["travel", "planning", "itinerary"],
    author: "System",
    createdAt: new Date("2024-01-20"),
    updatedAt: new Date("2024-01-20"),
    popularity: 80,
    placeholders: [
      {
        name: "duration",
        description: "Trip duration",
        defaultValue: "7 days",
      },
      {
        name: "destination",
        description: "Travel destination",
        defaultValue: "Tokyo, Japan",
      },
    ],
  },
  {
    id: "21",
    title: "Home Organization",
    description: "Create a home organization plan",
    content:
      "Develop a home organization plan for [space] with:\n1. Decluttering strategy\n2. Storage solutions\n3. Maintenance routine\n4. Organization zones\n5. Cleaning schedule",
    category: "daily-life",
    tags: ["organization", "home", "cleaning"],
    author: "System",
    createdAt: new Date("2024-01-21"),
    updatedAt: new Date("2024-01-21"),
    popularity: 75,
    placeholders: [
      {
        name: "space",
        description: "Space to organize",
        defaultValue: "home office",
      },
    ],
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
