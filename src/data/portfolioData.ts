export interface ProjectCaseStudy {
  id: string;
  title: string;
  subtitle: string;
  category: 'Technical Documentation' | 'UX & Content' | 'Digital Products' | 'Graphic Design' | 'AI / UX Content';
  filterKey: 'DOCUMENTATION' | 'UX CONTENT' | 'GRAPHIC DESIGN' | 'UI/UX' | 'DIGITAL PRODUCTS';
  imagePlaceholderNote: string;
  image?: string;
  summary: string;
  overview: string;
  challenge: string;
  audience: string;
  myRole: string;
  approach: string[];
  toolsUsed: string[];
  solution: string;
  outcome: string;
  keyLearnings: string[];
  artifacts: {
    label: string;
    description: string;
  }[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  responsibilities: string[];
  skills: string[];
}

export interface ExpertiseCard {
  number: string;
  title: string;
  categoryName: string;
  description: string;
  skills: string[];
}

export interface ServiceItem {
  number: string;
  title: string;
  description: string;
  deliverables: string[];
}

export interface DigitalProductItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  platform: 'Etsy' | 'Gumroad' | 'SuperProfile';
  linkPlaceholder: string;
  tags: string[];
}

export interface TestimonialItem {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
}

export const PORTFOLIO_DATA = {
  profile: {
    name: "Jayakumar",
    wordmark: "jayakumar",
    eyebrow: "SENIOR TECHNICAL WRITER · UX WRITER · DESIGNER",
    headlineLine1: "TURNING",
    headlineAccent1: "COMPLEX IDEAS",
    headlineLine2: "INTO",
    headlineAccent2: "CLEAR CONTENT",
    headlineLine3: "&",
    headlineAccent3: "ENGAGING EXPERIENCES.",
    positioning: "Turning complex technology into clear content, intuitive experiences, and compelling visual communication.",
    supportingText: "I'm Jayakumar — a Senior Technical Writer, UX Writer, Graphic Designer, and UI/UX Designer who transforms complex software, hardware, and business concepts into clear documentation, intuitive digital experiences, and impactful visual communication.",
    chips: ["DOCUMENT", "DESIGN", "DELIVER"],
    portraitImage: "/src/assets/images/jayakumar_portrait_1791995632172.jpg",
    portraitLabels: ["TECHNICAL WRITING", "UX CONTENT", "VISUAL DESIGN", "AI"],
    brandPillars: ["TECHNOLOGY", "CONTENT", "DESIGN", "UX", "AI"],
  },

  about: {
    heading: "MORE THAN A WRITER. MORE THAN A DESIGNER.",
    body: "I am an accomplished Technical Writer and Graphic/UI/UX Designer with extensive experience working in MNC environments, including Larsen & Toubro, HCLTech, and Cognizant.\n\nI specialize in transforming complex software and hardware concepts into clear, structured, user-friendly documentation that improves usability, knowledge sharing, and compliance.\n\nAlongside technical communication, I bring a strong creative background in visual communication and user-centered design. I create intuitive interfaces, engaging digital experiences, presentation assets, marketing visuals, social media creatives, and branded content.\n\nMy multidisciplinary approach allows me to connect technology, content, design, and user experience to create solutions that are both functional and visually engaging.",
    featuredCardStatement: "WHERE TECHNOLOGY MEETS CLARITY, CONTENT MEETS DESIGN, AND IDEAS BECOME EXPERIENCES.",
    cards: [
      {
        title: "DOCUMENTATION",
        subtitle: "Information Architecture",
        desc: "Structured, modular documentation built for developers, system administrators, and enterprise users."
      },
      {
        title: "UX CONTENT",
        subtitle: "Clarity at the Touchpoint",
        desc: "Microcopy, onboarding sequences, and error messaging engineered to eliminate friction."
      },
      {
        title: "VISUAL DESIGN",
        subtitle: "High-Impact Assets",
        desc: "Branding collateral, corporate presentations, infographics, and social media creative systems."
      },
      {
        title: "AI WORKFLOWS",
        subtitle: "Next-Gen Productivity",
        desc: "Generative AI prompt engineering, content restructuring, and automated documentation flows."
      }
    ]
  },

  experience: {
    confidentialityNote: "Selected project details are presented at a high level to respect confidentiality.",
    timeline: [
      {
        company: "LARSEN & TOUBRO",
        role: "[ADD ROLE]",
        period: "[ADD DATES]",
        location: "MNC Enterprise Division",
        summary: "Technical Documentation / Content Experience in engineering, hardware, and enterprise infrastructure solutions.",
        responsibilities: [
          "[ADD RESPONSIBILITIES]",
          "Transformed complex engineering specifications into user manuals, administrator guides, and standard operating procedures (SOPs).",
          "Collaborated with subject matter experts (SMEs), lead architects, and engineering managers to validate technical accuracy."
        ],
        skills: ["Technical Documentation", "SOPs", "Engineering Content", "Cross-Functional Collaboration"]
      },
      {
        company: "HCLTECH",
        role: "[ADD ROLE]",
        period: "[ADD DATES]",
        location: "Global Technology Services",
        summary: "Senior Technical Writing / Documentation Experience across enterprise software systems and customer support frameworks.",
        responsibilities: [
          "[ADD RESPONSIBILITIES]",
          "Authored and maintained comprehensive Knowledge Base Articles (KBAs), troubleshooting manuals, and release notes for enterprise platforms.",
          "Implemented topic-based authoring and structured content reuse to streamline publication cycles across regional deployments."
        ],
        skills: ["Senior Technical Writing", "DITA / XML", "Release Notes", "Enterprise KBAs"]
      },
      {
        company: "COGNIZANT",
        role: "[ADD ROLE]",
        period: "[ADD DATES]",
        location: "Digital Business Solutions",
        summary: "Senior Technical Writing / UX / Documentation Experience bridging user experience design and software documentation.",
        responsibilities: [
          "[ADD RESPONSIBILITIES]",
          "Synthesized UI/UX content, microcopy, and in-app guidance alongside comprehensive technical administrator guides.",
          "Co-developed design system documentation and API reference materials with engineering and product teams."
        ],
        skills: ["UX Writing", "UI/UX Documentation", "API Guides", "Design Systems"]
      }
    ] as ExperienceItem[]
  },

  expertise: [
    {
      number: "01",
      title: "TECHNICAL WRITING",
      categoryName: "Documentation & Architecture",
      description: "Translating complex architectural concepts and workflows into actionable, crystal-clear documentation for engineers, administrators, and users.",
      skills: [
        "User Manuals",
        "Administrator Guides",
        "Configuration Guides",
        "SOPs",
        "KBAs",
        "Release Notes",
        "Online Help",
        "API Documentation",
        "Installation Guides",
        "Runbooks"
      ]
    },
    {
      number: "02",
      title: "UX WRITING & CONTENT DESIGN",
      categoryName: "Product Content & Usability",
      description: "Designing intentional microcopy and narrative flows that guide users effortlessly through complex digital workflows.",
      skills: [
        "Microcopy",
        "User Flows",
        "Error Messages",
        "Onboarding",
        "In-App Content",
        "Information Architecture",
        "Content Strategy",
        "User-Centered Content"
      ]
    },
    {
      number: "03",
      title: "GRAPHIC DESIGN",
      categoryName: "Visual Communication & Brand",
      description: "Crafting memorable visual assets, marketing collateral, and brand design systems that communicate with clarity and authority.",
      skills: [
        "Social Media Creatives",
        "Marketing Collateral",
        "Posters",
        "Banners",
        "Presentations",
        "Digital Artwork",
        "Infographics",
        "Branding Assets"
      ]
    },
    {
      number: "04",
      title: "UI/UX DESIGN",
      categoryName: "Product Design & Interfaces",
      description: "Building intuitive interfaces, user wireframes, responsive web experiences, and scalable design systems grounded in human-computer interaction.",
      skills: [
        "Wireframes",
        "Prototypes",
        "User Interfaces",
        "Design Systems",
        "Landing Pages",
        "Web Experiences",
        "Mobile Experiences",
        "Usability"
      ]
    },
    {
      number: "05",
      title: "DIGITAL PRODUCTS",
      categoryName: "Marketplaces & Creator Assets",
      description: "Designing high-conversion digital assets, productivity tools, printable wall decor, and customizable template systems for global marketplaces.",
      skills: [
        "Canva Templates",
        "Printable Wall Art",
        "Quote Designs",
        "Fitness & Wellness Templates",
        "Social Media Templates",
        "Presentation Templates"
      ]
    },
    {
      number: "06",
      title: "AI-ASSISTED CONTENT & DESIGN",
      categoryName: "Generative Workflows & Tooling",
      description: "Pioneering generative AI workflows to accelerate documentation drafts, optimize content readability, and explore generative visual concepts.",
      skills: [
        "AI Content Creation",
        "Prompt Engineering",
        "AI-Assisted Documentation",
        "AI Design Concepts",
        "Content Optimization",
        "Generative AI Workflows"
      ]
    }
  ] as ExpertiseCard[],

  tools: {
    categories: [
      {
        name: "DOCUMENTATION",
        description: "Authoring tools, markups, and structured publishing suites",
        tools: ["MadCap Flare", "Adobe RoboHelp", "Oxygen XML", "DITA", "Markdown", "XML", "Swagger/OpenAPI"]
      },
      {
        name: "DEVELOPMENT & COLLABORATION",
        description: "Version control, developer IDEs, and knowledge repositories",
        tools: ["Git", "GitHub", "Visual Studio Code", "Confluence", "SharePoint"]
      },
      {
        name: "DESIGN",
        description: "Industry-standard UI/UX and visual graphic suites",
        tools: ["Figma", "Adobe Photoshop", "Adobe Illustrator", "Adobe InDesign", "Canva"]
      },
      {
        name: "AI",
        description: "Frontier LLMs and generative content accelerators",
        tools: ["ChatGPT", "Microsoft Copilot", "Generative AI", "AI-assisted design tools"]
      }
    ]
  },

  projects: [
    {
      id: "project-01",
      title: "ENTERPRISE SOFTWARE DOCUMENTATION",
      subtitle: "Scalable Information Architecture for High-Complexity Systems",
      category: "Technical Documentation",
      filterKey: "DOCUMENTATION",
      imagePlaceholderNote: "PROJECT VISUAL · REPLACE WITH ACTUAL WORK",
      summary: "Created structured user documentation for complex enterprise software environments, translating technical workflows into clear and actionable guidance.",
      overview: "Enterprise software deployments involve layered permissions, multi-tenant databases, and intricate configuration steps. This initiative centralized and streamlined the complete technical documentation corpus for enterprise system operators and end users.",
      challenge: "Prior documentation was fragmented across disconnected PDFs and wiki pages, creating steep learning curves for deployment engineers and leading to redundant customer support tickets.",
      audience: "Cloud Infrastructure Engineers, Enterprise IT Administrators, System Architects, and Client Support Teams.",
      myRole: "Lead Technical Writer: Information Architecture, Topic-Based Authoring, SME Interviewing, and DITA Taxonomy Design.",
      approach: [
        "Audited 120+ legacy articles and mapped the primary user journeys across installation, configuration, and maintenance.",
        "Constructed a modular DITA-based content model allowing reusable snippets across Admin Guides and Online Help.",
        "Introduced visual workflow diagrams and code-snippet testing checklists to verify accuracy before publication."
      ],
      toolsUsed: ["MadCap Flare", "Oxygen XML", "DITA", "Markdown", "Confluence", "Git"],
      solution: "Engineered a centralized, searchable, single-source documentation portal with clear role-based navigation, interactive configuration checklists, and reproducible step-by-step installation guides.",
      outcome: "[ADD RESULTS] (e.g. Reduced deployment onboarding time and streamlined support ticket resolution; metrics kept confidential).",
      keyLearnings: [
        "Separating concept, task, and reference topics dramatically improves searchability for technical readers.",
        "Establishing automated linting for technical terminology reduces editorial review cycles by over 30%."
      ],
      artifacts: [
        { label: "[ADD PROJECT IMAGE]", description: "Architecture map and topic taxonomy hierarchy" },
        { label: "[ADD BEFORE IMAGE]", description: "Legacy fragmented documentation snapshot" },
        { label: "[ADD AFTER IMAGE]", description: "New unified documentation hub layout" }
      ]
    },
    {
      id: "project-02",
      title: "UX CONTENT & USER EXPERIENCE",
      subtitle: "Interface Copy & Frictionless Product Journeys",
      category: "UX & Content",
      filterKey: "UX CONTENT",
      imagePlaceholderNote: "PROJECT VISUAL · REPLACE WITH ACTUAL WORK",
      summary: "Designed user-focused content and interface messaging to simplify complex workflows and improve usability.",
      overview: "User retention in complex SaaS platforms hinges on the clarity of in-app copy. This project audited end-to-end product flows, replacing technical jargon with conversational, empathetic, and actionable guidance.",
      challenge: "Cryptic error codes and ambiguous modal dialogues caused task abandonment during multi-step setup workflows.",
      audience: "Enterprise business operators, non-technical platform users, and administrative managers.",
      myRole: "UX Writer & Content Designer: Microcopy Auditing, Content Design System, Empty States, and Error Messaging Governance.",
      approach: [
        "Conducted heuristic evaluations of existing product interfaces and mapped high-friction drop-off points.",
        "Authored a unified UX Content Style Guide establishing tone, voice principles, button nomenclature, and punctuation rules.",
        "Iterated on high-risk microcopy (payment, destructive actions, permissions) through usability testing."
      ],
      toolsUsed: ["Figma", "Confluence", "Notion", "Whimsical", "Loom"],
      solution: "Implemented concise, human-first microcopy across onboarding sequences, form validation, tooltip guides, and error recovery states.",
      outcome: "[ADD RESULTS] (e.g. Marked increase in onboarding completion rates and positive user satisfaction feedback).",
      keyLearnings: [
        "Error messages should always tell the user what happened, why, and provide a clear single-click recovery path.",
        "Microcopy consistency across web and mobile builds user confidence faster than new features."
      ],
      artifacts: [
        { label: "[ADD PROJECT IMAGE]", description: "Figma UX content components and microcopy tokens" },
        { label: "[ADD BEFORE IMAGE]", description: "Ambiguous error state dialog with raw system code" },
        { label: "[ADD AFTER IMAGE]", description: "Actionable human-first error recovery screen" }
      ]
    },
    {
      id: "project-03",
      title: "FITNESS & WELLNESS DIGITAL TEMPLATES",
      subtitle: "Minimalist Aesthetic Planners & Creator Asset Suite",
      category: "Digital Products",
      filterKey: "DIGITAL PRODUCTS",
      image: "/src/assets/images/fitness_templates_showcase_1791995631162.jpg",
      imagePlaceholderNote: "FEATURED PRODUCT MOCKUP",
      summary: "Created modern digital templates, inspirational artwork, fitness content, and wellness-focused visual assets for online creators and digital-product marketplaces.",
      overview: "Designed an expansive collection of hyper-clean, functional digital planners, daily workout logs, habit trackers, and wellness journals tailored for tablet apps (GoodNotes/Notability) and print.",
      challenge: "Existing marketplace templates were cluttered, visually chaotic, and difficult to navigate on digital tablets.",
      audience: "Fitness enthusiasts, wellness creators, busy professionals, and digital journaling advocates.",
      myRole: "Creator & Product Designer: Concept Ideation, Layout Design, Typography Curation, and Marketplace Packaging.",
      approach: [
        "Conducted market research into bestselling wellness trackers to identify ergonomic tablet layouts.",
        "Engineered a hyperlinked PDF index system allowing one-tap jumping between monthly, weekly, and daily spreads.",
        "Adopted a serene, distraction-free visual palette with subtle mint teal accents and Swiss typographic hierarchy."
      ],
      toolsUsed: ["Canva", "Adobe InDesign", "Adobe Illustrator", "Figma", "iPad Pro"],
      solution: "Delivered a complete commercial product suite including 12-month interactive planners, social media promo kits, and customizable Canva client templates.",
      outcome: "[ADD RESULTS] (e.g. Multi-platform distribution across Etsy and Gumroad with strong community engagement).",
      keyLearnings: [
        "Grid alignment and generous white space make functional everyday tools a joy to use.",
        "Providing editable Canva template links alongside high-res PDFs doubled customer utility."
      ],
      artifacts: [
        { label: "[ADD PROJECT IMAGE]", description: "Tablet mockup showing interactive daily workout spreads" },
        { label: "[ADD BEFORE IMAGE]", description: "Initial wireframe sketch of weekly habit grid" },
        { label: "[ADD AFTER IMAGE]", description: "Final polished digital product presentation kit" }
      ]
    },
    {
      id: "project-04",
      title: "TECHNICAL KNOWLEDGE BASE",
      subtitle: "Troubleshooting Taxonomy & Self-Service Support Architecture",
      category: "Technical Documentation",
      filterKey: "DOCUMENTATION",
      imagePlaceholderNote: "PROJECT VISUAL · REPLACE WITH ACTUAL WORK",
      summary: "Developed structured KBAs, troubleshooting content, FAQs, and support documentation.",
      overview: "Customer support scalability relies on self-service knowledge ecosystems. This project redesigned the knowledge base architecture from the ground up, instituting a standardized article structure.",
      challenge: "Articles were difficult to find due to poor metadata tagging and varying authoring styles across disparate teams.",
      audience: "Tier 1-3 Support Specialists, Technical Account Managers, and End-Customer Administrators.",
      myRole: "Information Architect & Senior Technical Writer: Taxonomy Design, KBA Template Engineering, and Authoring Standards.",
      approach: [
        "Analyzed top 50 support call drivers and converted recurring resolutions into structured troubleshooting decision trees.",
        "Established standardized KBA anatomy: Symptom, Environment, Cause, and Step-by-Step Resolution.",
        "Configured search tags and keyword synonyms to align with real customer search queries."
      ],
      toolsUsed: ["Confluence", "SharePoint", "Markdown", "Jira Service Desk", "Adobe RoboHelp"],
      solution: "Built an intuitive, categorized knowledge library with verified solution badges, interactive diagnostics, and related article recommendations.",
      outcome: "[ADD RESULTS] (e.g. Substantial reduction in escalated support inquiries and rapid resolution times).",
      keyLearnings: [
        "Formatting diagnostics as conditional 'If/Then' tables reduces technician misdiagnoses.",
        "Regular feedback loops with front-line support keep knowledge articles fresh and accurate."
      ],
      artifacts: [
        { label: "[ADD PROJECT IMAGE]", description: "Knowledge base taxonomy tree and search structure" },
        { label: "[ADD BEFORE IMAGE]", description: "Unstructured support notes thread" },
        { label: "[ADD AFTER IMAGE]", description: "Published verified knowledge article format" }
      ]
    },
    {
      id: "project-05",
      title: "VISUAL COMMUNICATION",
      subtitle: "Corporate Collateral, Infographics & Brand Systems",
      category: "Graphic Design",
      filterKey: "GRAPHIC DESIGN",
      image: "/src/assets/images/digital_quote_art_showcase_1791995631692.jpg",
      imagePlaceholderNote: "BRAND SYSTEM & GALLERY MOCKUP",
      summary: "Designed professional presentations, banners, infographics, social media graphics, and branded communication assets.",
      overview: "Visual storytelling elevates executive presentations and external communications. This initiative created an editorial visual brand system for cross-platform marketing, keynotes, and thought leadership.",
      challenge: "Inconsistent visual assets, illegible data charts, and disjointed brand touchpoints diminished brand authority.",
      audience: "Executive Leadership, Industry Stakeholders, Social Media Audiences, and Prospective Clients.",
      myRole: "Graphic Designer & Brand Stylist: Visual Identity Systems, Typography Hierarchy, Infographics, and Presentation Decks.",
      approach: [
        "Defined a disciplined color palette centered on deep navy with luminous mint teal accents.",
        "Converted complex statistical data and system diagrams into clean, human-readable infographics.",
        "Built modular slide master templates in Figma and Canva for non-designers to create on-brand decks."
      ],
      toolsUsed: ["Adobe Photoshop", "Adobe Illustrator", "Figma", "Canva", "Adobe InDesign"],
      solution: "Delivered a comprehensive suite of editorial presentation decks, marketing banners, high-contrast infographics, and printable typography art pieces.",
      outcome: "[ADD RESULTS] (e.g. Praised by executive leadership for clarity and adopted as the organizational deck standard).",
      keyLearnings: [
        "Restraint in color and typography yields significantly higher perceived professionalism than decorative elements.",
        "Information hierarchy must always precede visual ornamentation."
      ],
      artifacts: [
        { label: "[ADD PROJECT IMAGE]", description: "Editorial presentation slide system and visual guidelines" },
        { label: "[ADD BEFORE IMAGE]", description: "Text-dense slide with complex unreadable chart" },
        { label: "[ADD AFTER IMAGE]", description: "Clean data visual infographic with clear focal takeaway" }
      ]
    },
    {
      id: "project-06",
      title: "AI-ENABLED CONTENT",
      subtitle: "Generative Workflows for Content Velocity & Documentation",
      category: "AI / UX Content",
      filterKey: "UI/UX",
      imagePlaceholderNote: "PROJECT VISUAL · REPLACE WITH ACTUAL WORK",
      summary: "Explored AI-assisted workflows for content creation, documentation, visual ideation, productivity, and content optimization.",
      overview: "Integrating modern generative AI into technical and creative workflows requires disciplined prompt design, schema constraints, and human-in-the-loop review. This project established practical AI playbooks for technical communication.",
      challenge: "Raw AI generation often hallucinations, exhibits verbose tone, or misses subtle domain nuances.",
      audience: "Documentation Teams, Content Strategists, and Product Engineers.",
      myRole: "AI Workflow Architect: Prompt Engineering, Tone Harmonization, Style Guide Embeddings, and Quality Assurance Protocols.",
      approach: [
        "Designed structured system prompts incorporating organizational style guidelines, tone parameters, and markdown templates.",
        "Built semi-automated workflows to draft initial API parameter tables and release note summaries from git commit logs.",
        "Created an editorial verification checklist ensuring 100% human review of technical accuracy."
      ],
      toolsUsed: ["ChatGPT", "Microsoft Copilot", "Generative AI", "VS Code", "Python Scripts"],
      solution: "Formulated a repeatable AI content operations playbook that accelerates drafting velocity while maintaining rigorous standards of technical precision.",
      outcome: "[ADD RESULTS] (e.g. Slashed initial draft turnaround time by up to 50% without compromising editorial quality).",
      keyLearnings: [
        "AI is a high-velocity drafting co-pilot, but human editorial judgment and domain expertise remain irreplaceable.",
        "Few-shot examples in system prompts are crucial for enforcing exact markdown formatting."
      ],
      artifacts: [
        { label: "[ADD PROJECT IMAGE]", description: "AI prompt framework and content validation workflow diagram" },
        { label: "[ADD BEFORE IMAGE]", description: "Raw unedited generative output with repetitive syntax" },
        { label: "[ADD AFTER IMAGE]", description: "Refined, precise technical documentation output" }
      ]
    }
  ] as ProjectCaseStudy[],

  services: [
    {
      number: "01",
      title: "TECHNICAL DOCUMENTATION",
      description: "Clear, structured documentation for complex products and software.",
      deliverables: ["User Manuals & Admin Guides", "API Documentation & References", "Standard Operating Procedures (SOPs)", "Knowledge Base Articles & Runbooks"]
    },
    {
      number: "02",
      title: "UX WRITING",
      description: "User-focused content that makes products easier to understand and use.",
      deliverables: ["Microcopy & Form Guidance", "Onboarding Flow Copy", "Error Messages & Recovery Dialogs", "In-App Product Messaging"]
    },
    {
      number: "03",
      title: "GRAPHIC DESIGN",
      description: "Professional visual assets for digital communication and branding.",
      deliverables: ["Executive Presentation Decks", "Marketing & Social Collateral", "Technical Infographics & Diagrams", "Branded Digital Artwork"]
    },
    {
      number: "04",
      title: "UI/UX DESIGN",
      description: "Clean, intuitive interfaces focused on usability.",
      deliverables: ["Wireframes & Interactive Prototypes", "Design System Components", "Landing Pages & Portals", "Responsive Mobile Experiences"]
    },
    {
      number: "05",
      title: "CONTENT STRATEGY",
      description: "Information architecture, content planning, governance and optimization.",
      deliverables: ["Information Architecture Maps", "Content Audits & Gap Analysis", "Style Guides & Voice Frameworks", "Taxonomy & Tagging Systems"]
    },
    {
      number: "06",
      title: "DIGITAL PRODUCTS",
      description: "Templates, printables, presentations and creative digital assets.",
      deliverables: ["Canva Creator Templates", "Printable Wall Art & Quote Prints", "Digital Fitness & Wellness Planners", "Pitch Deck & Keynote Themes"]
    },
    {
      number: "07",
      title: "AI-ASSISTED CONTENT",
      description: "AI-enabled workflows for documentation, ideation and productivity.",
      deliverables: ["Prompt Engineering & Playbooks", "Content Structuring & Summarization", "AI-Accelerated Draft Pipelines", "Tone & Readability Optimization"]
    }
  ] as ServiceItem[],

  digitalProducts: [
    {
      id: "dp-1",
      title: "Minimalist Wellness & Habit Tracker",
      category: "Fitness & Wellness",
      description: "Hyperlinked digital planner with daily habit logs, workout journals, and reflection spreads optimized for iPad & GoodNotes.",
      image: "/src/assets/images/fitness_templates_showcase_1791995631162.jpg",
      platform: "Etsy",
      linkPlaceholder: "https://etsy.com/[ADD-STORE-LINK]",
      tags: ["Digital Planner", "GoodNotes", "Fitness Tracker", "Printable PDF"]
    },
    {
      id: "dp-2",
      title: "Swiss Typographic Printable Wall Art",
      category: "Inspirational Wall Art",
      description: "High-resolution architectural quote posters featuring clean geometric layouts, timeless modernist principles, and mint teal accents.",
      image: "/src/assets/images/digital_quote_art_showcase_1791995631692.jpg",
      platform: "Gumroad",
      linkPlaceholder: "https://gumroad.com/[ADD-STORE-LINK]",
      tags: ["Wall Art", "Modern Typography", "300 DPI", "Home Studio"]
    },
    {
      id: "dp-3",
      title: "Enterprise Presentation Deck Template",
      category: "Presentation Templates",
      description: "Over 60 customizable dark-mode slides engineered for executive briefings, technical proposals, and venture pitches in Canva & Figma.",
      image: "/src/assets/images/digital_quote_art_showcase_1791995631692.jpg",
      platform: "SuperProfile",
      linkPlaceholder: "https://superprofile.bio/[ADD-STORE-LINK]",
      tags: ["Pitch Deck", "Canva Template", "Figma Design", "Enterprise"]
    }
  ] as DigitalProductItem[],

  fullTimeRoles: [
    "Senior Technical Writer",
    "UX Writer",
    "Content Designer",
    "Technical Documentation Specialist",
    "Graphic Designer",
    "UI/UX Designer",
    "Instructional Designer",
    "Content Strategist"
  ],

  testimonials: [
    {
      id: "test-1",
      quote: "Add testimonial from manager/client/colleague.",
      name: "[NAME]",
      role: "[ROLE]",
      company: "[COMPANY]"
    },
    {
      id: "test-2",
      quote: "Add testimonial from manager/client/colleague.",
      name: "[NAME]",
      role: "[ROLE]",
      company: "[COMPANY]"
    },
    {
      id: "test-3",
      quote: "Add testimonial from manager/client/colleague.",
      name: "[NAME]",
      role: "[ROLE]",
      company: "[COMPANY]"
    }
  ] as TestimonialItem[],

  socialLinks: [
    { platform: "LinkedIn", url: "[LINKEDIN URL]", icon: "linkedin" },
    { platform: "GitHub", url: "[GITHUB URL]", icon: "github" },
    { platform: "Behance", url: "[BEHANCE URL]", icon: "behance" },
    { platform: "Dribbble", url: "[DRIBBBLE URL]", icon: "dribbble" },
    { platform: "Etsy", url: "[ETSY URL]", icon: "etsy" },
    { platform: "Gumroad", url: "[GUMROAD URL]", icon: "gumroad" },
    { platform: "SuperProfile", url: "[SUPERPROFILE URL]", icon: "superprofile" },
    { platform: "Email", url: "mailto:[EMAIL]", icon: "mail" }
  ],

  resumeInfo: {
    pdfPath: "/assets/Jayakumar-Resume.pdf",
    instruction: "Place your compiled PDF file at '/assets/Jayakumar-Resume.pdf' in the public assets directory for direct download."
  }
};
