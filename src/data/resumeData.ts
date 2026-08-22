export interface ProjectExperience {
  title: string;
  period: string;
  company: string;
  client?: string;
  role: string;
  teamSize: string;
  location: string;
  tech: string[];
  responsibilities: string[];
}

export interface FeatureCategory {
  category: string;
  items: {
    title: string;
    description: string;
  }[];
}

export interface AppDetail {
  tagline: string;
  architecture: string;
  techStack: string[];
  coreFeatures: {
    title: string;
    description: string;
  }[];
  featureCategories?: FeatureCategory[];
  securityAndPrivacy: string[];
  systemHighlights?: string[];
}

export interface Innovation {
  title: string;
  type: 'US Patent' | 'Chrome Extension' | 'Android App';
  dateOrNumber: string;
  description: string;
  link?: string;
  tags: string[];
  details?: AppDetail;
}

export interface CertificationDetail {
  name: string;
  category:
    | 'OmniStudio & Industries'
    | 'Developer & Architecture'
    | 'Consultant & Cloud Strategy'
    | 'Administrator & Builder'
    | 'Analytics & Marketing';
  badgeTitle: string;
  overview: string;
  keyDomains: {
    title: string;
    description: string;
  }[];
  practicalImpact: string;
  skillsValidated: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface ResumeData {
  personal: {
    name: string;
    role: string;
    tagline: string;
    summary: string;
    experienceYears: string;
    location: string;
    email: string;
    phone?: string;
    github: string;
    linkedin: string;
    education: {
      degree: string;
      institution: string;
    };
  };
  skills: SkillCategory[];
  toolsAndDevOps: string[];
  certifications: string[];
  certificationDetails: CertificationDetail[];
  innovations: Innovation[];
  experiences: ProjectExperience[];
  companies: {
    name: string;
    role: string;
    period: string;
    badgeColor: string;
  }[];
  trainingAndFreelance: {
    trainedCount: string;
    trainedDesc: string;
    freelanceCount: string;
    freelanceDesc: string;
    industryCount?: string;
    industryDesc?: string;
    totalProjects?: string;
  };
}

export const resumeData: ResumeData = {
  personal: {
    name: 'Rajni Kant Roy',
    role: 'Salesforce Technical Architect & Team Lead',
    tagline: '11+ Years of Salesforce Development, Architecture & Leadership',
    summary:
      'Seasoned Salesforce Technical Architect with 11+ years of experience leading, designing, and delivering complex enterprise solutions across telecom, media, and airlines domains. Proven track record in Salesforce Industries, OmniStudio, CPQ, AWS, AI integrations, and high-performance team leadership.',
    experienceYears: '11+ Years',
    location: 'Pune, India',
    email: 'rajnikantroyy@gmail.com',
    github: 'https://github.com/rajnikantroy',
    linkedin: 'https://www.linkedin.com/in/rajnikantroy/',
    education: {
      degree: 'Master of Computer Application (MCA)',
      institution: 'University of Pune, India',
    },
  },
  skills: [
    {
      title: 'Salesforce Core & Clouds',
      skills: [
        'Apex',
        'Lightning Web Components (LWC)',
        'Flows & Process Automation',
        'Service Cloud',
        'Sales Cloud',
        'Media Cloud',
        'Experience Cloud / Communities',
        'Salesforce Security & Sharing',
        'Lightning Bolt',
      ],
    },
    {
      title: 'Salesforce Industries & OmniStudio',
      skills: [
        'OmniStudio (OmniScripts, DataRaptors, FlexCards)',
        'Salesforce Industries (Vlocity) Digital Platform',
        'Industries CPQ & CPQ API',
        'Digital Commerce API',
        'Vlocity CP',
        'CLM',
        'Vlocode & Vlocity DX',
      ],
    },
    {
      title: 'Integration & Cloud Infrastructure',
      skills: [
        'AWS Services',
        'Amazon Connect',
        'MuleSoft IDP',
        'APIGEE & Swagger',
        'Jitterbit',
        'REST & SOAP Web Services',
        'Enhanced SMS Integration',
        'Nimble AMS & Box Integration',
      ],
    },
    {
      title: 'Full Stack & Software Engineering',
      skills: [
        'Java',
        'C#',
        'Node.js',
        'JavaScript & TypeScript',
        'React & Next.js',
        'AngularJS',
        'HTML5 & CSS3 / Tailwind',
        'MySQL & MS SQL',
      ],
    },
  ],
  toolsAndDevOps: [
    'Cursor',
    'VS Code',
    'Salesforce DX (SFDX)',
    'Vlocity DX',
    'Data Loader',
    'GitHub & GitHub Actions',
    'Jenkins CI/CD',
    'SVN',
    'Docker',
    'Copado & Flosum',
    'Claude & ChatGPT',
    'Gemini AI',
  ],
  certifications: [
    'Salesforce Certified OmniStudio Developer',
    'Salesforce Certified OmniStudio Communications Developer II',
    'Salesforce Certified Industries CPQ Developer',
    'Salesforce Certified CPQ Specialist',
    'Salesforce Certified Administrator',
    'Salesforce Certified Platform App Builder',
    'Salesforce Certified Platform Developer I',
    'Salesforce Certified Platform Developer II',
    'Salesforce Certified Service Cloud Consultant',
    'Salesforce Certified Sales Cloud Consultant',
    'Salesforce Certified Community Cloud Consultant',
    'Salesforce Certified Einstein Analytics and Discovery Consultant',
    'Salesforce Certified Marketing Cloud Email Specialist',
  ],
  certificationDetails: [
    {
      name: 'Salesforce Certified OmniStudio Developer',
      category: 'OmniStudio & Industries',
      badgeTitle: 'Digital Customer Experience & Data Orchestration',
      overview:
        'Validates deep architectural expertise in designing, building, and deploying digital customer self-service journeys, dynamic guided user interactions, and enterprise data transformations using the Salesforce OmniStudio digital platform.',
      keyDomains: [
        {
          title: 'OmniScripts & Guided Flow Design',
          description:
            'Multi-step dynamic user interaction flows featuring conditional branching, client-side formulas, real-time input validations, and custom Lightning Web Component (LWC) embedding.',
        },
        {
          title: 'DataRaptors (Extract, Load, Transform, Turbo)',
          description:
            'High-performance declarative data engine for extracting nested SObject hierarchies, executing complex JSON transformations, and performing bulk upserts with permission security.',
        },
        {
          title: 'Integration Procedures & Service Layer',
          description:
            'Server-side microservices aggregating multiple external REST/SOAP endpoints, executing asynchronous batches, and utilizing session/platform cache for sub-second responses.',
        },
        {
          title: 'FlexCards & UI Context Layer',
          description:
            '360-degree contextual cards rendering multi-source customer records, flyouts, clickable actions, state-dependent UI, and event dispatching.',
        },
      ],
      practicalImpact:
        'Architected automated self-service onboarding portals and agent consoles handling millions of customer interactions across Telia Company, Telefónica Germany, and SAS Airlines.',
      skillsValidated: [
        'OmniScripts',
        'DataRaptor Extract/Load/Transform',
        'Integration Procedures',
        'FlexCards',
        'Calculation Procedures & Matrices',
        'LWC for OmniStudio',
      ],
    },
    {
      name: 'Salesforce Certified OmniStudio Communications Developer II',
      category: 'OmniStudio & Industries',
      badgeTitle: 'Telecom Architecture & High-Scale Digital Commerce',
      overview:
        'Advanced Tier-II industry specialization certifying high-scale telecom architecture, TM Forum SID data model compliance, Digital Commerce APIs, and enterprise telecommunications ordering workflows.',
      keyDomains: [
        {
          title: 'TM Forum SID Data Model Implementation',
          description:
            'Standardized Shared Information/Data model structuring multi-tier telecom catalogs, subscriptions, billing accounts, and technical service points.',
        },
        {
          title: 'Digital Commerce API & High-Volume Caching',
          description:
            'Sub-second anonymous & authenticated catalog browsing, basket management, offer qualification, and cached pricing engines built for high-traffic web portals.',
        },
        {
          title: 'Asset-Based Ordering & MACD Operations',
          description:
            'Move, Add, Change, Disconnect (MACD) subscriber lifecycle operations with contract amendments, future-dated changes, and asset renewals.',
        },
        {
          title: 'Enterprise Telecom Integration',
          description:
            'Connecting OmniStudio journeys to external rating engines, billing systems, inventory masters, and downstream fulfillment orchestrators.',
        },
      ],
      practicalImpact:
        'Led end-to-end technical architecture for Telia Scandinavia & Telefónica Germany mass customization online B2B/B2C digital commerce platforms.',
      skillsValidated: [
        'Communications Cloud SID Model',
        'Digital Commerce API',
        'MACD Operations',
        'Multi-Site CPQ',
        'Telecom Enterprise Architecture',
        'Vlocode & Vlocity DX',
      ],
    },
    {
      name: 'Salesforce Certified Industries CPQ Developer',
      category: 'OmniStudio & Industries',
      badgeTitle: 'Industries CPQ & Advanced Pricing Matrices',
      overview:
        'Certifies expert mastery over Salesforce Industries Configure, Price, Quote (Vlocity CPQ) engine for complex multi-product catalogs, advanced pricing rules, and asset management.',
      keyDomains: [
        {
          title: 'Hierarchical Product Modeling & Bundling',
          description:
            'Designing complex product structures, attribute-based configurations, cardinality rules, and multi-currency commercial price lists.',
        },
        {
          title: 'Calculation Matrices & Context Rules',
          description:
            'Dynamic multi-dimensional pricing matrices, calculation procedures, volume discounts, penalty models, and contextual qualification rules.',
        },
        {
          title: 'Cart Operations & Validation Hooks',
          description:
            'Customizing CPQ API cart hooks, eligibility and compatibility validations, price overrides, and promotional bundle bundling.',
        },
        {
          title: 'Contract Lifecycle & Frame Agreements',
          description:
            'Asset-based ordering, master service agreements (MSA), contract amendments, split billing, and automated renewals.',
        },
      ],
      practicalImpact:
        'Engineered enterprise B2B quote-to-order platforms for European telecom operators, automating complex fiber infrastructure and enterprise bundle configurations.',
      skillsValidated: [
        'Vlocity CPQ API',
        'Calculation Matrices',
        'Context Rules',
        'Product Attribute Modeling',
        'Cart Pricing Hooks',
        'Asset-Based Ordering',
      ],
    },
    {
      name: 'Salesforce Certified CPQ Specialist',
      category: 'OmniStudio & Industries',
      badgeTitle: 'Quote-to-Cash Configuration & Revenue Architecture',
      overview:
        'Validates comprehensive expertise in designing, configuring, and optimizing quote-to-cash workflows using Salesforce Core CPQ (Configure, Price, Quote).',
      keyDomains: [
        {
          title: 'Product & Bundle Configuration',
          description:
            'Configurator bundles, option constraints, feature categorization, nested bundles, and dynamic product search filters.',
        },
        {
          title: 'Price Rules & Dynamic Calculation',
          description:
            'Price rules, summary variables, discount schedules, block pricing, cost-plus markup, and multi-currency quote line calculations.',
        },
        {
          title: 'Quote Line Editor (QLE) Customization',
          description:
            'Multi-dimensional quoting (MDQ), custom action buttons, column layouts, line drawer fields, and contracted pricing.',
        },
        {
          title: 'Advanced Approvals & Document Generation',
          description:
            'Multi-tier parallel/sequential approval chains, dynamic PDF quote generation templates, and contract renewal co-termination.',
        },
      ],
      practicalImpact:
        'Automated enterprise quoting pipelines, eliminating quoting errors and cutting quote turnaround time for sales forces.',
      skillsValidated: [
        'Salesforce Core CPQ',
        'Quote Line Editor (QLE)',
        'Price Rules & Summary Variables',
        'Advanced Approvals',
        'Subscription & MDQ Quoting',
        'Renewals & Amendments',
      ],
    },
    {
      name: 'Salesforce Certified Platform Developer II',
      category: 'Developer & Architecture',
      badgeTitle: 'Advanced Programmatic Architecture & Enterprise Patterns',
      overview:
        'Advanced Tier-II programmatic credential validating expert-level knowledge of advanced Apex, asynchronous architectures, API integrations, complex UI components, and enterprise performance tuning.',
      keyDomains: [
        {
          title: 'Advanced Asynchronous Apex',
          description:
            'Queueable Apex with transaction finalizers, Batch Apex with stateful tracking, Schedulable Apex, and Future methods under strict concurrency.',
        },
        {
          title: 'Enterprise Integration & Web Services',
          description:
            'Custom Apex REST/SOAP services, OpenAPI integration, Platform Events, Change Data Capture (CDC), and external service parsing.',
        },
        {
          title: 'Performance Tuning & Large Data Volumes (LDV)',
          description:
            'SOQL Query Plan analysis, database indexes, skinny tables, Big Objects, bulkification, and governor limit mitigation.',
        },
        {
          title: 'Advanced Lightning Web Components (LWC)',
          description:
            'Custom events, Lightning Message Service (LMS), custom wire adapters, DOM optimization, and third-party JavaScript libraries.',
        },
      ],
      practicalImpact:
        'Led architecture for high-throughput enterprise event buses and custom API service layers processing thousands of transactions per minute.',
      skillsValidated: [
        'Advanced Asynchronous Apex',
        'Custom REST/SOAP Endpoints',
        'Large Data Volumes (LDV)',
        'Lightning Message Service (LMS)',
        'Platform Events & CDC',
        'Performance Profiling',
      ],
    },
    {
      name: 'Salesforce Certified Platform Developer I',
      category: 'Developer & Architecture',
      badgeTitle: 'Core Programmatic Development & Lightning Architecture',
      overview:
        'Certifies foundational programmatic development capabilities on the Lightning Platform using Apex, Visualforce, and Lightning Web Components.',
      keyDomains: [
        {
          title: 'Apex Object-Oriented Programming',
          description:
            'Apex classes, trigger frameworks, governor limits, SOQL/SOSL queries, and robust transaction management.',
        },
        {
          title: 'Unit Testing & Test-Driven Development',
          description:
            'Authoring comprehensive unit tests with Test.startTest()/stopTest(), mock HTTP/SOAP interfaces, and >85% code coverage.',
        },
        {
          title: 'Declarative vs Programmatic Trade-Offs',
          description:
            'Architectural decisions balancing custom code against declarative Flows and formula engines for maintainability.',
        },
        {
          title: 'UI Development with LWC',
          description:
            'Component lifecycles, Lightning Data Service (LDS), reactive properties, and modern JavaScript (ES6+).',
        },
      ],
      practicalImpact:
        'Built resilient backend services, trigger frameworks, and modular LWC widgets across multiple enterprise clients.',
      skillsValidated: [
        'Apex Triggers & Design Patterns',
        'SOQL & SOSL Queries',
        'Governor Limit Optimization',
        'Unit Testing & Mocking',
        'Lightning Web Components (LWC)',
      ],
    },
    {
      name: 'Salesforce Certified Platform App Builder',
      category: 'Administrator & Builder',
      badgeTitle: 'Declarative App Architecture & Data Modeling',
      overview:
        'Validates skills in designing relational data models, user interfaces, advanced business logic automations, and granular security rules declaratively on the Lightning Platform.',
      keyDomains: [
        {
          title: 'Data Model & Schema Engineering',
          description:
            'Master-detail relationships, lookups, junction objects, roll-up summary fields, and schema optimization.',
        },
        {
          title: 'Salesforce Flow Orchestration',
          description:
            'Screen Flows, Record-Triggered Flows, Scheduled Flows, Sub-flows, and advanced approval processes.',
        },
        {
          title: 'Security & Access Architecture',
          description:
            'Organization-Wide Defaults (OWD), sharing rules, role hierarchies, permission sets, and field-level security (FLS).',
        },
        {
          title: 'Lightning UI Customization',
          description:
            'Lightning App Builder, dynamic forms, dynamic actions, component visibility rules, and mobile app design.',
        },
      ],
      practicalImpact:
        'Designed scalable declarative data models and automated workflows, reducing technical debt while ensuring strict data isolation.',
      skillsValidated: [
        'Salesforce Flow Orchestration',
        'Data Modeling & Schema Builder',
        'Dynamic Forms & Actions',
        'Security & Sharing Architecture',
        'Lightning App Builder',
      ],
    },
    {
      name: 'Salesforce Certified Administrator',
      category: 'Administrator & Builder',
      badgeTitle: 'Org Governance, Security & Cloud Operations',
      overview:
        'Certifies comprehensive operational knowledge of Salesforce org configuration, user maintenance, security administration, standard cloud objects, and data governance.',
      keyDomains: [
        {
          title: 'User Management & Org Security',
          description:
            'User provisioning, profile/permission set management, Single Sign-On (SSO), Multi-Factor Authentication (MFA), and login IP restrictions.',
        },
        {
          title: 'Standard Cloud Object Operations',
          description:
            'Lead lifecycle management, Opportunity pipelines, Account/Contact hierarchies, Cases, and Knowledge Base configuration.',
        },
        {
          title: 'Data Governance & Data Loader',
          description:
            'Mass data imports, deduplication rules, validation rules, data backups, and audit trail inspection.',
        },
        {
          title: 'Analytics & Reporting Infrastructure',
          description:
            'Custom report types, summary/matrix reports, executive dashboards, report subscriptions, and folder access controls.',
        },
      ],
      practicalImpact:
        'Governed multi-thousand user production orgs with high availability, robust security policies, and zero-downtime release cadences.',
      skillsValidated: [
        'User & Security Administration',
        'Data Management & Data Loader',
        'Standard Object Lifecycles',
        'Reports & Interactive Dashboards',
        'Audit Trail & Compliance',
      ],
    },
    {
      name: 'Salesforce Certified Service Cloud Consultant',
      category: 'Consultant & Cloud Strategy',
      badgeTitle: 'Enterprise Customer Support & Contact Center Architecture',
      overview:
        'Demonstrates strategic and architectural mastery in designing and deploying scalable customer support solutions using Service Cloud.',
      keyDomains: [
        {
          title: 'Case Management & Omni-Channel Routing',
          description:
            'Skills-based & queue-based Omni-Channel routing, escalation rules, auto-response rules, and milestone SLAs with Entitlement management.',
        },
        {
          title: 'Cloud Telephony & CTI Integrations',
          description:
            'Integrating Amazon Connect, Service Cloud Voice, Computer Telephony Integration (CTI), and Interactive Voice Response (IVR) systems.',
        },
        {
          title: 'Knowledge Management & Service Console',
          description:
            'Lightning Service Console design, split views, macro automations, knowledge versioning, and approval workflows.',
        },
        {
          title: 'Digital Engagement & Messaging',
          description:
            'Web-to-Case, Email-to-Case, Messaging for In-App and Web (MIAW), and automated chatbot handoffs.',
        },
      ],
      practicalImpact:
        'Designed mission-critical customer service contact centers connecting Salesforce with Amazon Connect telephony for SAS Airlines.',
      skillsValidated: [
        'Omni-Channel Routing',
        'Amazon Connect & CTI',
        'Entitlements & Milestone SLAs',
        'Knowledge Management',
        'Digital Engagement Channels',
      ],
    },
    {
      name: 'Salesforce Certified Sales Cloud Consultant',
      category: 'Consultant & Cloud Strategy',
      badgeTitle: 'B2B Sales Pipeline & Revenue Operations Architecture',
      overview:
        'Validates expertise in designing end-to-end sales processes, lead-to-opportunity pipelines, territory management, and revenue forecasting for enterprise sales teams.',
      keyDomains: [
        {
          title: 'Lead Management & Sales Automation',
          description:
            'Lead scoring, web-to-lead capture, automated lead assignment rules, and conversion mappings across Accounts, Contacts, and Opportunities.',
        },
        {
          title: 'Opportunity & Pipeline Management',
          description:
            'Sales paths, guidance for success, quote synchronization, multi-currency price books, and product scheduling.',
        },
        {
          title: 'Enterprise Territory Management & Forecasting',
          description:
            'Collaborative forecasting (quota vs commit), hierarchical territory rules, and automated account assignment models.',
        },
        {
          title: 'Sales Productivity Integrations',
          description:
            'Email integrations (Outlook/Gmail), Einstein Activity Capture, High Velocity Sales, and mobile sales enablement.',
        },
      ],
      practicalImpact:
        'Architected nationwide B2B sales representative platforms for major media, cable, and telecom enterprises.',
      skillsValidated: [
        'Lead-to-Opportunity Lifecycles',
        'Enterprise Territory Management',
        'Collaborative Forecasting',
        'Multi-Currency & Price Books',
        'Sales Cloud Productivity',
      ],
    },
    {
      name: 'Salesforce Certified Community Cloud Consultant',
      category: 'Consultant & Cloud Strategy',
      badgeTitle: 'Experience Cloud & External Identity Portals',
      overview:
        'Certifies expertise in building interactive, branded digital portals, partner networks, and customer communities on Salesforce Experience Cloud.',
      keyDomains: [
        {
          title: 'Experience Builder & Lightning Bolt Templates',
          description:
            'Customer Service template, Partner Central, Lightning Bolt solutions, and responsive custom theme layouts.',
        },
        {
          title: 'Community Security & External Sharing',
          description:
            'Customer/Partner community licenses, sharing sets, share groups, external user registration, and public guest access.',
        },
        {
          title: 'Salesforce CMS & Audience Personalization',
          description:
            'Salesforce CMS content delivery, audience targeting rules, personalized content feeds, and multilingual portals.',
        },
        {
          title: 'Moderation & Gamification',
          description:
            'Member reputation levels, badge awards, automated moderation rules, and Chatter collaboration workspaces.',
        },
      ],
      practicalImpact:
        'Built European multi-tenant B2B partner communities using Lightning Bolt templates for global consumer goods brands.',
      skillsValidated: [
        'Experience Builder & Lightning Bolt',
        'Community Licensing & Sharing Sets',
        'Salesforce CMS & Audience Targeting',
        'Self-Service Portals',
        'External User Security',
      ],
    },
    {
      name: 'Salesforce Certified Einstein Analytics and Discovery Consultant',
      category: 'Analytics & Marketing',
      badgeTitle: 'CRM Analytics, SAQL & Predictive AI Insights',
      overview:
        'Demonstrates mastery in transforming complex business data into interactive AI-powered analytics dashboards, predictive models, and actionable discovery stories.',
      keyDomains: [
        {
          title: 'Data Layer, Recipes & SAQL',
          description:
            'Data preparation recipes, multi-source dataset joins, replication sync, and custom SAQL (Salesforce Analytics Query Language) queries.',
        },
        {
          title: 'Interactive Dashboard Architecture',
          description:
            'Dynamic step bindings, global filters, action frameworks, widget interactions, and mobile-optimized dashboard layouts.',
        },
        {
          title: 'Einstein Discovery Predictive AI Models',
          description:
            'Automated story creation, predictive outcome variable analysis, model validation, and deployment of live predictions into Lightning pages.',
        },
        {
          title: 'Asset Security & Row-Level Governance',
          description:
            'Security predicates (row-level dataset security), permission set assignments, and app sharing governance.',
        },
      ],
      practicalImpact:
        'Built predictive executive dashboards surfacing subscriber churn risk and revenue optimization insights for enterprise leadership.',
      skillsValidated: [
        'CRM Analytics Dataflows & Recipes',
        'SAQL Query Language',
        'Interactive Dashboard Binding',
        'Einstein Discovery Predictive Stories',
        'Row-Level Security Predicates',
      ],
    },
    {
      name: 'Salesforce Certified Marketing Cloud Email Specialist',
      category: 'Analytics & Marketing',
      badgeTitle: 'Marketing Cloud Journeys, AMPscript & Automation',
      overview:
        'Certifies specialized capability in designing, automating, and analyzing personalized enterprise email marketing campaigns on Salesforce Marketing Cloud.',
      keyDomains: [
        {
          title: 'Dynamic Content & AMPscript Development',
          description:
            'AMPscript programmatic personalization, responsive HTML email templates, dynamic content blocks, and Content Builder.',
        },
        {
          title: 'Data Extensions & Contact Builder',
          description:
            'Relational data extension modeling, Contact Builder data designer, SQL query activities in Automation Studio, and audience segmentation.',
        },
        {
          title: 'Journey Builder & Multi-Step Lifecycle Automations',
          description:
            'Multi-touch 1-to-1 customer lifecycle journeys, API trigger events, decision splits, wait activities, and goal tracking.',
        },
        {
          title: 'Deliverability, Tracking & Sender Authentication',
          description:
            'Sender Authentication Package (SAP), IP warming strategies, spam filter avoidance, bounce handling, and email performance telemetry.',
        },
      ],
      practicalImpact:
        'Engineered high-deliverability automated customer notification journeys and personalized lifecycle engagement streams.',
      skillsValidated: [
        'Journey Builder & Multi-Step Lifecycle',
        'Automation Studio & SQL',
        'AMPscript Dynamic Content',
        'Data Extensions & Contact Builder',
        'Email Deliverability & SAP',
      ],
    },
  ],
  innovations: [
    {
      title: 'Intelligent Code Quality Monitoring',
      type: 'US Patent',
      dateOrNumber: 'US Patent: US10572367B2',
      description:
        'Patented system and methodology for automated, intelligent code quality analysis, static code monitoring, and architectural pattern enforcement.',
      link: 'https://patents.google.com/patent/US10572367B2/en',
      tags: ['US Patent', 'Code Quality', 'AI & Automation'],
      details: {
        tagline: 'Patented Multi-Environment Automated Code Quality Assessment & Orchestration Platform',
        architecture:
          'Automated Code Quality Management Platform (CQMP) + Omnichannel Bot Framework + Multi-Cloud Environment Adaptor + Automated Test Executor',
        techStack: [
          'US Patent US10572367B2',
          'Multi-Environment Token Authorization Engine',
          'Bot Framework & Virtual Agent NLP Engine',
          'Multi-Cloud Framework Adaptor (ICCM Adaptor)',
          'Static & Dynamic Code Quality Assessment Engine',
          'Predictive Quality Forecasting & Trend Analytics',
        ],
        coreFeatures: [
          {
            title: 'Omnichannel Conversational Virtual Agent',
            description:
              'Receives code quality assessment requests via voice, media, SMS, email, and chat, automatically translating multimedia files into structured execution requests.',
          },
          {
            title: 'Multi-Environment Concurrent Orchestration',
            description:
              'Simultaneously authorizes, accesses, and executes test suites across Development, Testing, and Production environments across multiple cloud providers.',
          },
          {
            title: 'Token-Based Environment Authorization',
            description:
              'Obtains and securely caches environment-specific access tokens, eliminating redundant authentication handshakes and conserving network resources.',
          },
          {
            title: 'Automated Quality Assessment Suite',
            description:
              'Automates code coverage (CC), code duplication analysis, cyclomatic complexity calculations, lines of code (LOC), and defect detection.',
          },
          {
            title: 'Predictive Quality Forecasting & Self-Healing',
            description:
              'Forecasts scoring trends from historical code iterations, predicts defect risk, and automatically generates new test classes for untested code paths.',
          },
          {
            title: 'Automated Deployment State Gating',
            description:
              'Dynamically modifies program deployment states (online/offline/rollback) and gates release pipelines based on threshold compliance scores.',
          },
        ],
        featureCategories: [
          {
            category: '🤖 Omnichannel Bot Framework & NLP Translation',
            items: [
              {
                title: 'Multi-Channel Conversational Bot',
                description:
                  'Enables developers to initiate and schedule quality audits using voice messages, phone calls, SMS, email, or chat.',
              },
              {
                title: 'Multimedia Conversion Engine',
                description:
                  'Converts incoming voice/media requests into standardized text files and executable JSON payloads.',
              },
              {
                title: 'NLP Ambiguity Resolution',
                description:
                  'Leverages natural language processing and historical request context to resolve abbreviations (e.g., CC → Code Coverage, env → Environment).',
              },
            ],
          },
          {
            category: '🌐 Multi-Environment Orchestration & Token Security',
            items: [
              {
                title: 'Concurrent Multi-Environment Execution',
                description:
                  'Dispatches parallel quality assessments across Dev, Test, and Prod instances without separate manual runs.',
              },
              {
                title: 'Token-Based Authorization & Caching',
                description:
                  'Securely negotiates and stores environment security tokens to avoid repetitive authentication handshakes.',
              },
              {
                title: 'Multi-Cloud Framework Adaptor (ICCM)',
                description:
                  'Standardizes API calls and responses across disparate cloud providers and development frameworks.',
              },
            ],
          },
          {
            category: '⚡ Automated Code Quality Assessment Suite',
            items: [
              {
                title: 'Automated Code Coverage (CC) Engine',
                description:
                  'Executes test classes and measures exact execution percentages of production codebase paths.',
              },
              {
                title: 'Cyclomatic Complexity & Duplication',
                description:
                  'Maps linearly independent execution paths and flags redundant code blocks that skew coverage metrics.',
              },
              {
                title: 'Automated Annual & Periodic Scheduling',
                description:
                  'Configures automated calendar-based or trigger-based test executions with zero human intervention required.',
              },
            ],
          },
          {
            category: '🧠 Predictive Quality Forecasting & Self-Healing',
            items: [
              {
                title: 'Historical Scoring Trend Forecasting',
                description:
                  'Predicts future defect risks by analyzing past quality trajectories before executing heavy test runs.',
              },
              {
                title: 'Automated Test Class Generation',
                description:
                  'Synthesizes supplementary test classes to cover untested functions when coverage thresholds fall below targets.',
              },
              {
                title: 'Deployment State Gating',
                description:
                  'Automatically promotes or restricts deployment states (online/offline) based on passing assessment scores.',
              },
            ],
          },
          {
            category: '📊 Unified Executive Dashboard & Real-Time Telemetry',
            items: [
              {
                title: 'Multi-Environment Score Matrix',
                description:
                  'Side-by-side comparative views of code health across Dev, QA, and Production environments.',
              },
              {
                title: 'Automated Notifications & Sprint Reports',
                description:
                  'Dispatches automated SMS/Email alerts and summary statistics when threshold violations or milestones occur.',
              },
            ],
          },
        ],
        securityAndPrivacy: [
          'Token-Isolated Access: Uses environment-specific security tokens without exposing master credentials',
          'Patented Verification Algorithm: Granted under United States Patent and Trademark Office (US Patent US10572367B2)',
          'Isolated Sandbox Execution: Non-destructive test execution inside secure environment containers',
        ],
        systemHighlights: [
          'Conserves 90%+ Processing & Network Overhead: Batch multi-environment execution eliminates manual test requests.',
          'Self-Healing Test Generation: Automatically synthesizes new test classes to repair low coverage scores.',
        ],
      },
    },
    {
      title: 'Salesforce Simplified',
      type: 'Chrome Extension',
      dateOrNumber: 'Since 2018',
      description:
        'Built for developers, admins, QA & release managers to browse, search, and package org metadata directly from any page without Setup roundtrips. Features dynamic metadata discovery (Apex, LWC, Flows, Objects, Fields), debug logs, package.xml builder, and live org health diagnostics.',
      link: 'https://chromewebstore.google.com/detail/salesforce-simplified/hjeigbpcblpkaienmpihneipkempijob?authuser=0&hl=en',
      tags: ['Developers & Admins', 'Metadata & Logs', 'Package.xml Builder', 'Chrome Web Store'],
      details: {
        tagline: 'Unified Browser-Native Developer & Administrator Operating Layer for Salesforce',
        architecture:
          'Client-Side Chrome Extension (Manifest V3) + In-Page Overlay & Full-Page Workspace + Direct Salesforce REST/Tooling/Metadata APIs',
        techStack: [
          'Chrome Extension (Manifest V3)',
          'TypeScript & React UI',
          'Salesforce REST & Tooling APIs',
          'Salesforce Metadata API (ZIP Generation)',
          'Client-Side In-Memory Session Security',
          'Canvas / SVG Relationship Graph',
        ],
        coreFeatures: [
          {
            title: 'Dynamic Metadata & Schema Explorer',
            description:
              'Connects to live REST/Tooling APIs to discover custom/standard objects, Apex, LWC, Flows, validation rules, layouts, and permissions without hardcoded menus.',
          },
          {
            title: 'Visual Package.xml & Manifest Builder',
            description:
              'Select any component to auto-expand child fields, layouts, and dependencies via the Tooling Dependency API and retrieve a deployment-ready ZIP directly from the browser.',
          },
          {
            title: 'All Fields Live Grid & JSON Export',
            description:
              'Inspect and inline-edit fields not rendered on current page layouts with permission-aware field validation and full-record JSON copying.',
          },
          {
            title: 'SOQL Query Editor from List Views',
            description:
              'Expose, modify, and execute underlying SOQL queries from any list view with smart field suggestions and exports to CSV, JSON, and Excel.',
          },
          {
            title: 'Event Graph & Observability Debugging',
            description:
              'Correlates audit trail events, debug logs, and record modifications into a relational sequence graph with verified vs inferred confidence metrics.',
          },
          {
            title: 'Multi-Org Management & Staged Org Sync',
            description:
              'Pairs multiple Salesforce environments (Prod, Sandboxes, Scratch Orgs) with staged reviews and rollback guardrails for metadata and record migration.',
          },
        ],
        featureCategories: [
          {
            category: '🔍 Dynamic Metadata & Schema Explorer',
            items: [
              {
                title: 'Live Schema Discovery',
                description:
                  'Dynamically discovers standard/custom objects, Apex classes, triggers, flows, LWC/Aura, layouts, and custom metadata types.',
              },
              {
                title: 'Dual Perspectives (My Items vs All)',
                description:
                  'Filter thousands of enterprise components between personal modifications and organization-wide assets.',
              },
              {
                title: 'Tooling Dependency Traversal',
                description:
                  'Identifies referenced components and structural dependencies before packaging or modifying metadata.',
              },
            ],
          },
          {
            category: '📦 Package.xml & ZIP Retrieval',
            items: [
              {
                title: 'Visual Package.xml Builder',
                description:
                  'Build clean, valid package manifests visually without manual XML authoring or forgotten child dependencies.',
              },
              {
                title: 'Direct Browser ZIP Retrieval',
                description:
                  'Calls the Metadata API to download deployment-ready ZIP archives straight to your local downloads folder.',
              },
            ],
          },
          {
            category: '📊 Data Productivity & "All Fields"',
            items: [
              {
                title: 'All Fields Live Grid',
                description:
                  'Bypasses page layout omissions to show every field on a record in an editable, permission-respecting grid.',
              },
              {
                title: 'List View SOQL Interceptor',
                description:
                  'Extracts and allows modification of list view queries with field autocomplete and Tooling API fallback.',
              },
              {
                title: 'Multi-Format Data Export',
                description:
                  'Export live query results instantly into structured CSV, JSON, or Excel spreadsheets.',
              },
            ],
          },
          {
            category: '🧠 Event Graph & Observability Debugging',
            items: [
              {
                title: 'Correlated Event Graph',
                description:
                  'Visualizes transaction cause-and-effect across Apex, Flows, integrations, and user audit trails.',
              },
              {
                title: 'Observational Evidence Replay',
                description:
                  'Replays execution evidence non-destructively without firing side-effects or external webhooks in production.',
              },
            ],
          },
          {
            category: '🔄 Multi-Org Management & Staged Sync',
            items: [
              {
                title: 'Multi-Environment Pairing',
                description:
                  'Switch contexts seamlessly across Production, UAT, QA, Sandbox, and Scratch Orgs from a single tab.',
              },
              {
                title: 'Staged Deployment Guardrails',
                description:
                  'Validate, stage, and review component payloads with rollback capabilities before committing changes.',
              },
            ],
          },
          {
            category: '🛡️ Governance, Auditing & Trust Telemetry',
            items: [
              {
                title: 'In The Org Today',
                description:
                  'Live operational audit of user logins, client application types, and failed authentication spikes.',
              },
              {
                title: 'Trust Status & API Limits',
                description:
                  'Live Salesforce Trust instance health monitor alongside real-time 24-hour API limit telemetry.',
              },
            ],
          },
          {
            category: '⚡ Developer API & Debugging Utilities',
            items: [
              {
                title: 'Dynamic REST/Tooling Explorer',
                description:
                  'Browse Salesforce APIs dynamically by clicking paths directly from structured API responses.',
              },
              {
                title: 'Debug Log Center',
                description:
                  'Filter and download server debug logs by user, operation, or log size with instant parsing.',
              },
              {
                title: 'Component Change Watcher',
                description:
                  'Star sensitive Apex classes, flows, and objects to monitor modification dates and author changes.',
              },
            ],
          },
        ],
        securityAndPrivacy: [
          '100% Client-Side Local Execution: Zero intermediate proxy servers, zero external analytics telemetry',
          'Direct Browser-to-Salesforce API Transport: All API traffic flows strictly between browser and Salesforce infrastructure',
          'In-Memory Ephemeral Session Security: Tokens exist only in memory during active browser sessions (never saved to disk)',
          'Strict Origin Validation: Origin filters ensure session tokens are never transmitted to non-Salesforce endpoints',
        ],
        systemHighlights: [
          'Dual-Mode Operation: In-page floating contextual panel + Full-page standalone engineering workspace.',
          'Non-Destructive Guardrails: Explicit user triggers with visual staging and rollbacks for all deployment actions.',
        ],
      },
    },
    {
      title: "Manager's Companion",
      type: 'Chrome Extension',
      dateOrNumber: 'Chrome Store',
      description:
        'Built for engineering leads and managers to streamline daily operations. Features comprehensive KPI reporting (blockers, workload, ticket ageing, priority mix, monthly targets) and desktop-notified incident monitoring for critical issues.',
      link: 'https://chromewebstore.google.com/detail/managers-companion/noielgdhlkohbbgghaolikioghpecfag?authuser=0&hl=en',
      tags: ['Leads & Managers', 'Daily KPI Reports', 'Incident Monitor', 'Chrome Web Store'],
      details: {
        tagline: '1-Click Jira Reporting, Real-Time Availability & Instant Incident Monitor for Engineering Leads',
        architecture:
          'Client-Side Chrome Extension (Manifest V3) + Direct Atlassian REST Client + High-DPI 3× Canvas Renderer',
        techStack: [
          'Chrome Extension (Manifest V3)',
          'TypeScript & React UI',
          'Atlassian Jira REST API',
          'High-DPI 3× Canvas Renderer',
          'Chrome Desktop Notifications API',
          'Local-Only Storage Ledger',
        ],
        coreFeatures: [
          {
            title: '1-Click Live Daily Report',
            description:
              'Turns the 30–45 minute morning scramble into a 1-click status dashboard with KPI cards for open work, blockers, critical items, and closure targets.',
          },
          {
            title: 'Real-Time Team Availability & On-Call View',
            description:
              'Accurately displays team leaves, holidays, and active on-call assignments without manual spreadsheet tracking or guessing.',
          },
          {
            title: 'Instant Incident Monitor & Desktop Alerts',
            description:
              'Pings desktop alerts the moment a blocker or high-severity incident is logged, preventing SLA breaches and delayed responses.',
          },
          {
            title: 'Honest-Signal Risk Detection',
            description:
              'Surfaces hidden risks beyond simple ticket counts: silently stalled work, bus-factor dependencies on single developers, and aged backlog items.',
          },
          {
            title: '1-Click 3× Crisp Image Sharing for Outlook & Slack',
            description:
              'Copies a crisp 3× resolution PNG directly to clipboard ready to paste into Outlook, Teams, or Slack without blurriness or cropping.',
          },
          {
            title: 'Zero-Server Architecture & Credential Privacy',
            description:
              'Talks directly from browser to your Atlassian site. Zero external servers, zero telemetry, and Jira tokens never leave local browser storage.',
          },
        ],
        featureCategories: [
          {
            category: '📊 1-Click Daily Operational Reporting',
            items: [
              {
                title: 'One-Click Report Assembly',
                description:
                  'Generates instant status reports across Jira projects, replacing manual copy-pasting and query assembling.',
              },
              {
                title: 'Comprehensive KPI Summary Cards',
                description:
                  'Live counters for open work, blockers, critical priority items, in-progress tasks, flagged issues, and unassigned tickets.',
              },
              {
                title: 'Assignee Workload & Priority Mix',
                description:
                  'Visual breakdown of developer workload distribution and monthly closure performance versus team KPI targets.',
              },
            ],
          },
          {
            category: '👥 Team Availability & On-Call Tracker',
            items: [
              {
                title: 'Live Roster & Availability Dashboard',
                description:
                  'Aggregates team member leaves, upcoming holidays, and on-call rotations in a single glance.',
              },
              {
                title: 'Interruption-Free Alignment',
                description:
                  'Eliminates repetitive "what is your status?" check-ins by providing an accurate, self-serve picture of team capacity.',
              },
            ],
          },
          {
            category: '🚨 Proactive Incident Monitor & SLA Defense',
            items: [
              {
                title: 'Real-Time Blocker & SLA Alerting',
                description:
                  'Monitors critical incidents and sends instant desktop pings the moment high-priority issues breach thresholds.',
              },
              {
                title: 'Faster Time-to-Response',
                description:
                  'Cuts response latency by alerting leads immediately instead of discovering incidents hours later.',
              },
            ],
          },
          {
            category: '💡 Honest-Signal Risk Insights',
            items: [
              {
                title: 'Beyond "Tickets Closed" Metrics',
                description:
                  'Detects work silently stalled for days, ticket ageing patterns, and backlog items too messy to plan against.',
              },
              {
                title: 'Bus-Factor Risk Warnings',
                description:
                  'Identifies critical functional areas and epics resting entirely on a single person to prevent bottlenecks.',
              },
            ],
          },
          {
            category: '🖼️ "Last-Mile" 3× Resolution Sharing',
            items: [
              {
                title: '1-Click Copy 3× Crisp PNG',
                description:
                  'Puts a high-DPI 3× resolution image onto your clipboard—pastes razor-sharp text directly into Outlook, Teams, or Slack.',
              },
              {
                title: 'Export as PNG & PDF Print',
                description:
                  'Generates presentation-ready PNG attachments or formal PDF printouts for executive status meetings.',
              },
            ],
          },
          {
            category: '🔒 Zero-Server & Credential-Safe Privacy',
            items: [
              {
                title: 'No Server / No Vendor Cloud',
                description:
                  'Extension communicates directly between browser and Atlassian Jira with no middleman backend or proxy.',
              },
              {
                title: 'Jira Tokens Never Leave Browser',
                description:
                  'API credentials remain strictly inside local browser storage and are never uploaded or transmitted externally.',
              },
              {
                title: 'Sanitized Team Backups',
                description:
                  'Configuration export files deliberately strip Jira credentials so settings can be safely shared with teammates.',
              },
            ],
          },
        ],
        securityAndPrivacy: [
          'Zero-Server Architecture: Direct browser-to-Atlassian communication with no vendor backend, cloud database, or middleman',
          'Credential Isolation: Jira API token, email, and base URL are stored strictly in local browser profile and never leave the device',
          'Zero Telemetry: No tracking, no remote logging, and no analytics collected or phoned home',
          'Sanitized Configuration Exports: Team backups deliberately exclude API credentials for safe teammate onboarding',
        ],
        systemHighlights: [
          'High-DPI 3× Canvas Renderer: Generates crystal-clear images that never blur when pasted into Outlook or Slack.',
          'Reclaims 100+ Hours/Month: Saves ~30 mins daily per engineering lead (~10+ hours/month across each team leader).',
        ],
      },
    },
    {
      title: 'Sentinel — Traffic & Privacy Guard',
      type: 'Chrome Extension',
      dateOrNumber: 'Chrome Store',
      description:
        'Advanced browser security and privacy extension designed to protect against fingerprinting, trackers, and data collection. Features real-time network monitoring (API calls, WebSockets, background requests), WebRTC leak protection, and live security telemetry.',
      link: 'https://chromewebstore.google.com/detail/sentinel-%E2%80%94-traffic-privac/iodoahnciemefkffpmhegnlcdjljaglp?authuser=0&hl=en',
      tags: ['Privacy & Security', 'Fingerprint Shield', 'Live Network Monitor', 'Chrome Web Store'],
      details: {
        tagline: 'Real-Time Traffic Telemetry, Advanced Fingerprint Shield & Network Privacy Guard',
        architecture:
          'Client-Side Chrome Extension (Manifest V3) + declarativeNetRequest Engine + Canvas/Audio API Interceptor + Network Anomaly Detector',
        techStack: [
          'Chrome Extension (Manifest V3)',
          'TypeScript & React UI',
          'declarativeNetRequest API',
          'WebRTC IP Leak Guard',
          'Canvas & WebGL Fingerprint Interceptor',
          'CSP / HSTS Security Header Validator',
          'Local Storage Telemetry Cache',
        ],
        coreFeatures: [
          {
            title: 'Advanced Browser Fingerprint Protection',
            description:
              'Shields commonly abused fingerprinting surfaces (Canvas, WebGL, AudioContext, screen resolution, font enumeration) to minimize browser uniqueness without breaking web functionality.',
          },
          {
            title: 'Tracker, Ad & Session Replay Blocker',
            description:
              'Blocks advertising scripts, third-party analytics, cross-site beacons, and session-replay surveillance tools before they execute.',
          },
          {
            title: 'Live Network & Domain Inspector',
            description:
              'Real-time stream displaying every domain contacted during page load, API calls, background requests, WebSockets, and cross-origin submissions.',
          },
          {
            title: 'WebRTC Privacy & VPN Leak Protection',
            description:
              'Prevents WebRTC from leaking local and public IP addresses past VPN tunnels and privacy proxies.',
          },
          {
            title: 'Website Privacy Score & Anomaly Detection',
            description:
              'Calculates automated 0–100 privacy scores based on tracking density and flags anomalous spikes in third-party connections.',
          },
          {
            title: 'Evidence Lock & Traffic Snapshots',
            description:
              'Capture and preserve timestamped snapshots of network activity and third-party trackers for security audits and investigations.',
          },
        ],
        featureCategories: [
          {
            category: '🛡️ Fingerprint Protection & Canvas Shield',
            items: [
              {
                title: 'Multi-Surface API Shielding',
                description:
                  'Protects Canvas rendering, WebGL parameters, AudioContext audio fingerprints, and font detection vectors.',
              },
              {
                title: 'Device Identity Masking',
                description:
                  'Reduces device uniqueness across visited sites so commercial trackers cannot construct persistent cross-domain profiles.',
              },
            ],
          },
          {
            category: '🚫 Tracker, Ad & Telemetry Defense',
            items: [
              {
                title: 'Proactive Script Blocking',
                description:
                  'Halts known third-party tracking scripts, advertising SDKs, and behavioral analytics before they execute.',
              },
              {
                title: 'Browsing Speed Acceleration',
                description:
                  'Cuts heavy tracking overhead and ad bloat to significantly improve page loading performance.',
              },
            ],
          },
          {
            category: '📡 Live Network Telemetry & WebRTC Shield',
            items: [
              {
                title: 'Live Request & Domain Stream',
                description:
                  'Instant visibility into all background API calls, beacon pings, WebSocket connections, and external domains.',
              },
              {
                title: 'WebRTC IP Leak Guard',
                description:
                  'Shields true private/public IP addresses from WebRTC STUN/TURN queries that could bypass VPN tunnels.',
              },
              {
                title: 'Evidence Lock Capture',
                description:
                  'Freezes and saves comprehensive network request logs to local storage for security reviews.',
              },
            ],
          },
          {
            category: '🧠 Privacy Scoring & Security Auditing',
            items: [
              {
                title: 'Automated Privacy Score',
                description:
                  'Rates websites based on tracking behavior, third-party cookies, and cross-site script inclusion.',
              },
              {
                title: 'Cross-Site Tracker Mapping',
                description:
                  'Identifies recurring tracking infrastructure that follows users across multiple distinct domains.',
              },
              {
                title: 'Security Header Validation',
                description:
                  'Inspects CSP, HSTS, X-Frame-Options, and Referrer-Policy headers to verify server security posture.',
              },
            ],
          },
          {
            category: '⚙️ 6 Tailored Protection Profiles',
            items: [
              {
                title: 'Standard Guard & QA/Testing',
                description:
                  'Standard Guard for balanced everyday browsing; QA/Testing mode with minimal interference for developer debugging.',
              },
              {
                title: 'Ghost Mode & Red Team',
                description:
                  'Ghost Mode maximizes anti-fingerprinting stealth; Red Team grants security researchers deep raw packet inspection.',
              },
              {
                title: 'Bunker Mode & Investigation',
                description:
                  'Bunker Mode enforces zero-tolerance blocking on suspicious domains; Investigation mode logs deep forensics.',
              },
            ],
          },
        ],
        securityAndPrivacy: [
          '100% Local On-Device Processing: Zero cloud servers, zero analytics, zero proxy middleman servers',
          'Zero Browsing History Telemetry: Visited domains and network request logs are never uploaded or tracked remotely',
          'Native declarativeNetRequest: Hardware-accelerated Chrome rule evaluation with zero memory bloat',
        ],
        systemHighlights: [
          '6 Protection Profiles: Tailors privacy posture instantly from casual browsing to aggressive research audits.',
          'Evidence Lock Forensics: Easily capture reproducible network proof for security audits and bug reports.',
        ],
      },
    },
    {
      title: 'Auto Skip Reels & Shorts',
      type: 'Chrome Extension',
      dateOrNumber: 'Chrome Store',
      description:
        'Hands-free video navigator that automatically advances YouTube Shorts, Instagram Reels, and Facebook Reels after playing once. Features countdown pill overlays, custom watch limits, playback speed controls (0.5×–2×), ad-skipping, and category/keyword filters.',
      link: 'https://chromewebstore.google.com/detail/auto-skip-reels-shorts/jopgdlfocjopfokadekkaiplklamdale?authuser=0&hl=en',
      tags: ['Hands-Free Auto Skip', 'Reels & Shorts', 'Digital Wellbeing', 'Chrome Web Store'],
      details: {
        tagline: 'Hands-Free Video Navigator, Smart Content Filter & Digital Wellbeing Engine for Short-Form Feeds',
        architecture:
          'Chrome Extension (Manifest V3) + IntersectionObserver Viewport Engine + DOM MutationObserver + Split Storage Architecture',
        techStack: [
          'Chrome Extension (Manifest V3)',
          'IntersectionObserver Viewport Engine',
          'Multi-Event Pointer & DOM Scroller',
          'HTML5 Video Controller',
          'Split Storage (chrome.storage.sync & local)',
          'Glassmorphic Floating Overlay',
          'Global Keyboard Hooks (chrome.commands)',
        ],
        coreFeatures: [
          {
            title: 'Hands-Free Multi-Platform Auto-Advance',
            description:
              'Seamlessly auto-advances short-form videos across YouTube Shorts, Instagram Reels, Facebook Reels, and TikTok the instant they finish playing.',
          },
          {
            title: 'IntersectionObserver 50% Efficiency Engine',
            description:
              'Observes video elements with a 0.5 viewport threshold, only tracking active videos to reduce CPU and battery consumption by up to 50%.',
          },
          {
            title: 'Like Count & Smart Content Filtering',
            description:
              'Configurable like threshold (50 to 1M) with multi-language parsing (K, L, 万, M) that automatically skips 0-like, hidden, or low-quality videos.',
          },
          {
            title: 'Creator & Keyword Whitelists/Blacklists',
            description:
              'Locks playback on favorite creators and whitelisted topics while instantly skipping blacklisted @handles and keywords.',
          },
          {
            title: 'Per-Platform Speed & Background Auto-Mute',
            description:
              'Independent playback speed controls (1.0×–2.0×) and automatic audio muting when switching away to background browser tabs.',
          },
          {
            title: 'Daily Watch Limits & Time Saved Analytics',
            description:
              'Digital wellbeing guard with daily watch time limits, skip goal progress rings, 7-day trend graphs, and gamified milestone badges.',
          },
        ],
        featureCategories: [
          {
            category: '🌐 Multi-Platform Navigation Engine',
            items: [
              {
                title: 'Full 4-Platform Support',
                description:
                  'Native navigation hooks for YouTube Shorts, Instagram Reels, Facebook Reels, and TikTok feed containers.',
              },
              {
                title: 'Background Inactive Tab Skipping',
                description:
                  'Uses instant layout scroll offsets and pointer dispatching so video skipping never freezes in background tabs.',
              },
              {
                title: 'IntersectionObserver Viewport Engine',
                description:
                  'Tracks timeupdate events only when video is >= 50% in view, drastically cutting CPU overhead.',
              },
            ],
          },
          {
            category: '🎯 Content & Smart Filtering Rules',
            items: [
              {
                title: 'Like Count Threshold Filter',
                description:
                  'Skip videos below threshold with multi-language number parsing (K, L, 万, M) and automatic 0/null like filtering.',
              },
              {
                title: 'Creator Whitelist & Blacklist',
                description:
                  'Scrapes channel names and @handles to lock playback on favorite creators or bypass blacklisted profiles.',
              },
              {
                title: 'Category & Keyword Filters',
                description:
                  'Auto-detects and toggles skipping for 5 topics (Music, News, Sports, Comedy, Tech) and custom keyword lists.',
              },
              {
                title: 'Auto-Skip Sponsored & Ads',
                description:
                  'Detects sponsored overlays and ad banners to advance past them without waiting.',
              },
            ],
          },
          {
            category: '🎛️ Speed Controls, Audio & Fail-Safes',
            items: [
              {
                title: 'Per-Platform Speed Overrides',
                description:
                  'Independent 1-click playback speed controls (1.0×, 1.25×, 1.5×, 2.0×) enforced in real-time.',
              },
              {
                title: 'Background Tab Auto-Mute',
                description:
                  'Mutes audio when switching to another tab and automatically restores original volume upon return.',
              },
              {
                title: 'Smart Engagement Detection',
                description:
                  'Auto-pauses skipping with a toast banner whenever you open comments or type in text input fields.',
              },
              {
                title: 'Auto-Reload Recovery Fail-Safe',
                description:
                  'Recovers feed navigation automatically with a strict reload budget if a site becomes stuck.',
              },
            ],
          },
          {
            category: '⏱️ Digital Wellbeing & Watch Limits',
            items: [
              {
                title: 'Max Daily Watch Limit',
                description:
                  'Configurable daily limit (10–120 mins) displaying a glassmorphic break reminder banner when reached.',
              },
              {
                title: 'Daily Skips Goal Tracker',
                description:
                  'Visual conic progress ring tracking daily skip goals (e.g. 50 skips/day) to encourage mindful scrolling.',
              },
              {
                title: 'Early Force-Watch Limit',
                description:
                  'Force-skips overly long videos early after a set watch duration (e.g. after 15 seconds).',
              },
            ],
          },
          {
            category: '📊 Analytics, History & Gamification',
            items: [
              {
                title: 'Total Time Saved Calculator',
                description:
                  'Tracks cumulative minutes saved from ad skips, early skips, and like threshold skips.',
              },
              {
                title: '7-Day Trend Chart & Breakdown',
                description:
                  'Interactive bar chart showing daily skip trends and comparative progress bars across all 4 platforms.',
              },
              {
                title: 'Interactive History Log',
                description:
                  'Review recent skips with platform badges, category filter chips, video titles, and timestamps.',
              },
              {
                title: 'Milestone Badges',
                description:
                  'Earn gamified badges: Starter (60 skips), Crusader (360 skips), and Master (1,440 skips).',
              },
            ],
          },
          {
            category: '⌨️ Global Shortcuts & Data Management',
            items: [
              {
                title: 'Global Keyboard Shortcuts',
                description:
                  'Alt+Shift+S (Toggle On/Off), Alt+Shift+N (Next Video), and Alt+Shift+L (Lock Current Video).',
              },
              {
                title: 'Split Storage Architecture',
                description:
                  'Uses chrome.storage.sync for cloud settings and chrome.storage.local for fast analytics logs.',
              },
              {
                title: 'One-Click JSON Backup & Restore',
                description:
                  'Export full configuration JSON files and restore settings instantly across browsers.',
              },
            ],
          },
        ],
        securityAndPrivacy: [
          '100% Local DOM & Storage Execution: Operates entirely in browser memory without storing or transmitting watched content',
          'Zero Tracking: No analytics, cookies, or video history transmitted outside your machine',
        ],
        systemHighlights: [
          'Up to 50% CPU & Battery Savings: IntersectionObserver threshold isolates processing strictly to active viewports.',
          'Cross-Platform Parity: Identical hands-free automation across YouTube, Instagram, Facebook, and TikTok.',
        ],
      },
    },
    {
      title: 'Salesforce Prism',
      type: 'Chrome Extension',
      dateOrNumber: 'Chrome Store',
      description:
        'Smart AI CRM assistant to deep clone full parent-child record hierarchies across orgs and enrich records directly from LinkedIn profiles. Features Bring-Your-Own-AI (write SOQL, debug rules), Cmd+K command palette, and one-click lead/contact creation.',
      link: 'https://chromewebstore.google.com/detail/salesforce-prism/aagiojdphcbpafnpcniokdjcpfdphjgk?authuser=0&hl=en',
      tags: ['AI CRM Assistant', 'Deep Record Clone', 'LinkedIn Enrichment', 'Chrome Web Store'],
      details: {
        tagline: 'Smart AI CRM Assistant, Multi-Org Hierarchy Deep-Clone & Cross-Org Data Bridge',
        architecture:
          'Client-Side Chrome Extension (Manifest V3) + Multi-Org Connection Manager + Recursive Graph Traversal Engine + In-Page Command Palette (Cmd+K)',
        techStack: [
          'Chrome Extension (Manifest V3)',
          'TypeScript & React UI',
          'Salesforce REST & Composite APIs',
          'Tooling API & Describe Engine',
          'Multi-Org Session Vault',
          'Bring-Your-Own-AI LLM Bridge (OpenAI / Claude / Gemini API)',
          'Command Palette (Cmd+K)',
        ],
        coreFeatures: [
          {
            title: 'Multi-Org Connection & Auto-Switching',
            description:
              'Connect unlimited Production, Sandbox, and Developer orgs with automatic tab-tracking that switches active org context as you navigate.',
          },
          {
            title: 'Deep Copy Hierarchy Traversal (5 Levels Deep)',
            description:
              'Recursively discovers and fetches parent records, child lists, and grandchildren up to 5 levels deep in seconds with live progress telemetry.',
          },
          {
            title: 'Deep Paste & Relational Reconstruction',
            description:
              'Recreates entire parent-child record trees in target orgs while automatically resolving and updating lookup field references to new IDs.',
          },
          {
            title: 'Smart Copy/Paste with System Field Sanitization',
            description:
              'Cmd+Shift+K to capture any record as clean JSON. Automatically strips read-only fields (Id, CreatedDate, SystemModstamp) and retries on missing fields.',
          },
          {
            title: 'LinkedIn Profile Superpowers',
            description:
              'Side-by-side discrepancy comparisons and one-click structured Lead and Contact creation directly from LinkedIn profiles.',
          },
          {
            title: 'Bring-Your-Own-AI & Command Palette (Cmd+K)',
            description:
              'Global command palette with in-context AI to generate SOQL, debug complex validation rules, and research prospects without leaving the page.',
          },
        ],
        featureCategories: [
          {
            category: '🏢 Multi-Org Management & Tab Context',
            items: [
              {
                title: 'Unlimited Org Connections',
                description:
                  'Connect Production, Sandbox, Scratch, and Developer editions with custom My Domain support.',
              },
              {
                title: 'Auto-Switching Tab Intelligence',
                description:
                  'Automatically syncs active org context when you switch browser tabs to prevent accidental cross-org pastes.',
              },
              {
                title: 'Live Org Status Indicators',
                description:
                  'Instant visual badges indicating active connection state, token expiration, and org hostname.',
              },
            ],
          },
          {
            category: '🌳 Deep Copy (5-Level Recursive Traversal)',
            items: [
              {
                title: 'Recursive Family Tree Discovery',
                description:
                  'Fetches root records, child related lists, and grandchildren up to 5 generations deep in a single operation.',
              },
              {
                title: 'Live Progress & Telemetry',
                description:
                  'Real-time metrics showing depth level, unique records discovered, relationship count, and skipped items.',
              },
              {
                title: 'Pause & Partial-Copy Engine',
                description:
                  'Pause massive tree traversals at any time to immediately copy records fetched up to that checkpoint.',
              },
              {
                title: 'Hierarchy Tree & Records Grid',
                description:
                  'Interactive family tree with direct Salesforce record teleportation links and sortable data tables.',
              },
            ],
          },
          {
            category: '🧬 Deep Paste & Relational ID Re-Mapping',
            items: [
              {
                title: 'Topological Order Creation',
                description:
                  'Instantiates parent records first before creating dependent child records in strict relational order.',
              },
              {
                title: 'Automatic Lookup Re-Mapping',
                description:
                  'Rewrites foreign key lookup references so child records link seamlessly to newly created parents in the target org.',
              },
              {
                title: 'Cross-Org Org-to-Org Migration',
                description:
                  'Migrate full Accounts + Contacts + Opportunities + Custom Objects across environments in seconds.',
              },
            ],
          },
          {
            category: '📋 Smart Single Record Copy & Paste',
            items: [
              {
                title: 'Cmd+Shift+K Record Capture',
                description:
                  'Grabs standard and custom fields into clean JSON with field search, filtering, and JSON merging.',
              },
              {
                title: 'Cmd+Shift+V Paste & Validation',
                description:
                  'Pastes JSON into new records with automatic read-only field stripping and schema validation error retries.',
              },
            ],
          },
          {
            category: '💎 Social Profile & LinkedIn Enrichment',
            items: [
              {
                title: 'Side-by-Side Discrepancy Spotting',
                description:
                  'Visually compares CRM records against live LinkedIn profile data to highlight outdated titles and companies.',
              },
              {
                title: '1-Click Lead & Contact Creation',
                description:
                  'Converts social data into clean, structured Salesforce records with prefilled details.',
              },
            ],
          },
          {
            category: '🤖 Bring Your Own AI & Cmd+K Palette',
            items: [
              {
                title: 'In-Context CRM AI Assistant',
                description:
                  'Connect OpenAI, Claude, or Gemini to write SOQL, debug validation rules, and summarize account histories.',
              },
              {
                title: 'Global Command Palette (Cmd+K)',
                description:
                  'Keyboard-driven hub for lightning-fast metadata searches, deep copy operations, and cross-org actions.',
              },
            ],
          },
        ],
        securityAndPrivacy: [
          'Zero Third-Party Servers: Pure client-side tool with direct HTTPS communication between browser and Salesforce servers',
          'Local-Only Keychain: Encrypted OAuth tokens and org instance URLs stay strictly inside Chrome secure storage',
          'Ephemeral Record In-Transit: Record data is fetched, transferred, and immediately cleared from memory—never stored on disk or cloud',
          'Zero Telemetry & Tracking: No analytics, no personal info, no browsing history, and zero usage telemetry collected',
          'GDPR & CCPA Compliant: 1-click org disconnect, complete local data wipe on demand, and automatic purge on uninstall',
        ],
        systemHighlights: [
          '5-Level Deep Recursive Engine: Clones entire complex data models with hundreds of related records in seconds.',
          'Intelligent Foreign Key Re-Mapping: Preserves relational tree integrity across differing Salesforce orgs.',
          'Pipe-Only Architecture: Data flows directly between your Salesforce orgs without ever touching vendor infrastructure.',
        ],
      },
    },
    {
      title: 'Radius Runner',
      type: 'Android App',
      dateOrNumber: 'Android Mobile',
      description:
        'Privacy-first off-grid communication and Bluetooth safety app built with React Native (Expo) and custom BLE modules. Features X25519/Ed25519 encrypted P2P messaging, nearby radar with RSSI distance estimation, anti-stalking tracker detection, decentralized local polls, and radio-enforced GDPR privacy.',
      tags: ['React Native (Expo)', 'Offline BLE Transport', 'X25519 & Ed25519', 'Anti-Stalker Radar'],
      details: {
        tagline: 'Off-Grid Proximity Chat & Bluetooth Tracker Safety',
        architecture: '100% Serverless BLE Mesh & GATT Peer-to-Peer Network',
        techStack: [
          'React Native (Expo SDK 52)',
          'Custom Native Android BLE Module (NearsafeBleAdvertiserModule)',
          'react-native-ble-plx',
          '@noble Cryptography (Ed25519 / X25519 / ChaCha20)',
          'AsyncStorage Local Ledger',
        ],
        coreFeatures: [
          {
            title: 'Off-Grid P2P Encrypted Messaging',
            description:
              'Direct device-to-device chat via BLE GATT connections. Custom transport protocol handles packet chunking, fragmentation, and MTU reassembly without cellular data or Wi-Fi.',
          },
          {
            title: 'Nearby Radar & RSSI Distance Decay',
            description:
              'Real-time scanning and discovery of nearby peers with physical distance estimation (in meters) calculated using logarithmic signal decay models.',
          },
          {
            title: 'Safety Sentinel (Tracker Detection)',
            description:
              'Monitors unknown BLE beacons broadcasting nearby across separate encounters to alert users to rogue tracking devices (AirTags/unknown beacons) with zero GPS usage.',
          },
          {
            title: 'Decentralized Local Polls',
            description:
              'Create and broadcast localized polls to peers within physical range over BLE with host-controlled cryptographic tally reveals.',
          },
          {
            title: 'Radio-Enforced GDPR & Business Mode',
            description:
              'Users broadcast distinct advertising UUIDs only upon explicit opt-in. Unconsenting users remain physically invisible to commercial store scanners.',
          },
        ],
        securityAndPrivacy: [
          'End-to-End Cryptography: X25519 key exchange + Ed25519 signature verification + ChaCha20-Poly1305 AEAD',
          'Zero Cloud / Zero Server: 100% on-device data, no central servers, no telemetry, no tracking databases',
          'Ephemeral Memory: Automatically purges conversation buffers and peer caches when devices move out of range',
          'No Location Permissions: BLE scan configured with neverForLocation on Android 12+',
        ],
        systemHighlights: [
          'Dual-Role BLE Engine: Operates simultaneously as Central and Peripheral GATT server without pairing requirements.',
          'Custom Transport Protocol: Handles chunked MTU payloads with automatic sequence validation and retry mechanisms.',
        ],
      },
    },
    {
      title: 'JanusOne',
      type: 'Android App',
      dateOrNumber: 'Android Mobile',
      description:
        'Inspired by Janus—the two-headed deity looking both ways—to vigilantly monitor incoming and outgoing network traffic simultaneously. Built in Kotlin & Jetpack Compose with an on-device non-root firewall (VPN DNS loop), anti-stalker BLE radar, WTMP intruder journal, and anti-AI voice-clone defense with 100% on-device privacy.',
      tags: ['Kotlin & Compose', 'Dual-Direction Firewall', 'BLE Radar & Stalkerware', 'Anti-Voice Clone AI'],
      details: {
        tagline: 'Dual-Direction Traffic Sentinel & On-Device Counter-Surveillance Toolkit',
        architecture: 'Kotlin Clean Architecture + Jetpack Compose + Local Android VpnService',
        techStack: [
          'Kotlin 2.0+',
          'Jetpack Compose (Material 3)',
          'Hilt Dependency Injection',
          'Android VpnService (Local Non-Root Firewall)',
          'EncryptedSharedPreferences (AES-GCM)',
          'Room Database & Coroutines',
        ],
        coreFeatures: [
          {
            title: 'Local Non-Root Firewall (JanusVpnService)',
            description:
              'On-device DNS capture loop on port 53 (IPv4/IPv6). Attributes every query to the exact app UID via getConnectionOwnerUid() and enforces blocklists and per-app network controls.',
          },
          {
            title: 'WTMP Intruder Journal',
            description:
              'Silent motion and screen-wake triggers capture front-camera photos, background ambient audio, GPS, Wi-Fi BSSID, and active app logs when unauthorized physical access is detected.',
          },
          {
            title: 'Voice Guard Anti-Voice Clone Engine',
            description:
              '4-layer defense against AI vishing: MFCC vector-quantized voiceprints, acoustic micro-instability analysis (jitter, shimmer, pitch roughness, HNR), and replay-proof challenge safewords.',
          },
          {
            title: 'Wi-Fi & Subnet Analyzer',
            description:
              'Grades Wi-Fi encryption (WPA3 down to Open), detects Evil Twin access point cloning, and probes /24 subnets (ports 22, 53, 80, 139, 443, 445) for rogue LAN devices.',
          },
          {
            title: 'BLE Tracker Radar',
            description:
              'Scans nearby BLE beacons, calculates distance via path-loss models, and maintains a multi-location movement ledger to detect AirTags or covert trackers following you.',
          },
          {
            title: 'App Security & Stalkerware Auditor',
            description:
              'Evaluates 0–100 threat scores by identifying high-risk permission clusters (Accessibility + SMS reading + Overlays) and sideloaded binaries.',
          },
        ],
        featureCategories: [
          {
            category: '🚨 Emergency & Device Lockdown',
            items: [
              {
                title: 'Panic Lockdown',
                description:
                  'One-tap instant screen locking via Device Admin, enforcing PIN over biometrics, and wiping app cache/clipboard via quick-settings tile, widget, or button.',
              },
              {
                title: 'Security Armour',
                description:
                  'Consolidated dashboard showing the status of app locks, background monitoring, and screen/hardware protections.',
              },
            ],
          },
          {
            category: '🌐 Network, Firewall & Signal Defense',
            items: [
              {
                title: 'Network Monitor & Firewall',
                description:
                  'Local non-root VPN filtering DNS queries (UDP 53 IPv4/IPv6), attributing requests per-app via getConnectionOwnerUid(), with domain blocklists, SNI host matching, and Zero-Trust scheduled lockdown windows.',
              },
              {
                title: 'WiFi Analyzer',
                description:
                  'Network encryption grading (WPA3 down to Open), router security checklist, and Evil Twin BSSID spoofing/downgrade alert engine.',
              },
              {
                title: 'Subnet Host Scanner',
                description:
                  'Sweeps the local /24 Wi-Fi network for active hosts using ICMP and TCP probes (ports 22, 53, 80, 139, 443, 445), mapping MAC addresses, OUI vendors, and host sighting history.',
              },
              {
                title: 'Cellular Signal Analyzer',
                description:
                  'Reads modem Cell ID, TAC/LAC, RSRP/RSRQ/SNR, timing advance distance (~78m per step), and plots a 24-hour tower handover timeline graph.',
              },
            ],
          },
          {
            category: '📡 Radio & Hardware Surveillance Sweeps',
            items: [
              {
                title: 'Bluetooth LE Tracker Radar',
                description:
                  'Live BLE scanner estimating distance via RSSI, detecting AirTag/Tile/beacon trackers, and flagging devices that follow you across multiple days and locations.',
              },
              {
                title: 'EMF & Radiation Exposure Meter',
                description:
                  'Live magnetometer magnetic field reader (in µT) and RF source density estimator for nearby cell, Wi-Fi, and Bluetooth transmitters.',
              },
              {
                title: 'USB Guardian',
                description:
                  'Logs all USB connection events and alerts if a public charger attempts data extraction (juice-jacking).',
              },
              {
                title: 'NFC Inspector',
                description:
                  'Scans NFC stickers, tags, and cards to inspect raw NDEF payloads and URLs before your phone executes them.',
              },
            ],
          },
          {
            category: '🛡️ App Security, Stalkerware & Privacy Auditing',
            items: [
              {
                title: 'App Auditor & Risk Scorer',
                description:
                  'Calculates 0–100 risk scores based on dangerous permission clusters (e.g. Accessibility + SMS + Screen overlay), identifying sideloaded apps and device admins.',
              },
              {
                title: 'Stalkerware Scanner',
                description:
                  'Signature-based detector for covert keyloggers, hidden location trackers, call recorders, and secret SMS monitors.',
              },
              {
                title: 'Counter Surveillance Sweep',
                description:
                  'All-in-one diagnostic combining hardware logs, sensor access, network anomalies, and suspicious app signatures into a single risk verdict.',
              },
              {
                title: 'Breach Checker',
                description:
                  'Password leak inspector using SHA-1 k-anonymity prefix matching (passwords never leave your device).',
              },
            ],
          },
          {
            category: '👁️ Real-Time Monitoring & Physical Intrusion Log',
            items: [
              {
                title: 'Live Activity Monitor',
                description:
                  'Real-time event stream tracking camera, microphone, location, clipboard, screenshot, and sensor access, flagging background app abuse.',
              },
              {
                title: 'Intruder Journal (WTMP)',
                description:
                  'Motion and screen-wake detector that captures front-camera photos, continuous background audio, active apps, GPS, Wi-Fi BSSID, and light/proximity sensor data when unauthorized physical access occurs.',
              },
              {
                title: 'Hardware Log (Tamper Diary)',
                description:
                  'Event journal logging charger connections, screen wakes, light/proximity changes, and physical movement while the phone is locked.',
              },
              {
                title: 'Charger History',
                description:
                  'Session-by-session charging log tracking start/end times, battery health %, voltage, current (mA), and unauthorized charging sessions.',
              },
              {
                title: 'Guest Sharing / Guardian',
                description:
                  'MediaProjection session recorder for lended phones with screenshot capture, web-cut toggles, and App-Lock gating.',
              },
            ],
          },
          {
            category: '🎙️ Anti Voice-Clone & Anti-Scam Protection',
            items: [
              {
                title: 'Voice Guard (Anti Voice-Clone Engine)',
                description:
                  '4-layer defense against AI voice-clone (vishing) scams: Multi-sample VQ-codebook voiceprints (MFCC + Δ-MFCC), acoustic micro-instability analysis (jitter, shimmer, HNR, pitch roughness), replay-proof challenge, and salted hash safeword vault.',
              },
              {
                title: 'Link Safety & Phishing Protection',
                description:
                  'Expands shortened URLs, flags phishing domain patterns, and monitors the clipboard for crypto wallet address tampering.',
              },
              {
                title: 'Notification History & Trust Center',
                description:
                  'Searchable archive of incoming and self-deleting notifications, zero-trust link interceptor, and notification risk scoring.',
              },
            ],
          },
          {
            category: '🔐 System Tools, AI & Utilities',
            items: [
              {
                title: 'Authenticator Vault (2FA)',
                description:
                  'Built-in TOTP 6-digit 2FA code generator encrypted on-device via Android Keystore AES-GCM, with password-protected backup export/import.',
              },
              {
                title: '✦ AI Security Assistant',
                description:
                  'Gemini AI security Q&A with on-device caching and an offline built-in guide fallback (FeatureDocs.kt).',
              },
              {
                title: 'Device Hygiene Check',
                description:
                  'System health auditor checking root status, Play Protect availability, storage pressure, duplicate files, and extra user profiles.',
              },
              {
                title: 'Device Watchlist & Bookmarks',
                description:
                  'Centralized store (BookmarkStore) to bookmark known Bluetooth trackers and Wi-Fi devices, suppressing false follow alarms.',
              },
              {
                title: 'Capture Surroundings',
                description:
                  'On-demand evidence capture tool taking timestamped photos, audio clips, and location logs saved to encrypted local storage.',
              },
              {
                title: 'Activity & Security Achievements',
                description:
                  'Gamified security habits awarding scores, streaks, and badges for maintaining active protections and performing regular scans.',
              },
            ],
          },
        ],
        securityAndPrivacy: [
          '100% On-Device Processing: All firewall packet filtering and biometric analytics run locally without remote servers',
          'Hardware-Backed Keystore: Authenticator 2FA TOTP vault encrypted using Android Keystore AES-GCM keys',
          'USB Juice-Jacking Guardian & NFC Tag Inspector: Guards physical ports and validates payloads before execution',
          'Cellular Tower Handover Monitor: Reads cell tower identity and timing advance distance (~78m per step) to detect rogue base stations',
        ],
        systemHighlights: [
          'Single-Activity Navigation: State-machine Compose architecture rendering Dashboard, Network, Apps, and Surveillance Sweep screens.',
          'Gemini AI Explanations + Local Fallback: Generates contextual threat explanations with automatic offline documentation fallback.',
        ],
      },
    },
    {
      title: 'BeforeYouSpeak',
      type: 'Android App',
      dateOrNumber: 'Android Mobile',
      description:
        'Mindful telephony HUD and impulse-control companion built in Kotlin & Jetpack Compose. Injects an interactive pre-call floating HUD with a 4-7-8 breathing ring, adaptive persona prompts (Corporate Diplomat, Savage Bestie, Paranoid Lawyer), anti-spoof scrutiny, and room privacy monitoring.',
      tags: ['Kotlin & Compose', 'Floating Call HUD', 'Persona Engine', 'Mindful Telephony'],
      details: {
        tagline: 'Pre-Call Reality Check & Mindful Telephony Heads-Up Display',
        architecture: 'Native Android Service + WindowManager Floating HUD + Clean Architecture',
        techStack: [
          'Kotlin 2.0+',
          'Jetpack Compose',
          'Material 3 Theming',
          'Android WindowManager Overlay',
          'Room Database',
          'Android Telephony & CallScreeningService',
        ],
        coreFeatures: [
          {
            title: 'Pre-Call Floating HUD & 4-7-8 Breathing Ring',
            description:
              'Injects an animated breathing pause and mindfulness reality check over incoming/outgoing phone calls before the user answers or speaks.',
          },
          {
            title: 'Adaptive Persona Prompt Engine',
            description:
              'Context-aware tactical prompts tailored to caller relationships: Corporate Diplomat, Savage Bestie ("Do not call them an MF***!"), Paranoid Lawyer, Stoic Zen Master, and PR Shield.',
          },
          {
            title: 'Smart Behavioral Heuristics',
            description:
              'Categorizes contacts (Family, Boss, Police, Media, Toxic/Ex) via regex and automatically flags late-night calls (22:00–06:00) as high-risk interactions.',
          },
          {
            title: 'Anti-Spoof & Fraud Sentinel',
            description:
              'Algorithmic scrutiny that identifies neighbor spoofing patterns and suspicious carrier caller IDs in real time.',
          },
          {
            title: 'Room Privacy Sentinel',
            description:
              'LiveListenSentinelService detects ambient acoustic privacy risks and alerts users when taking sensitive calls in public areas or cabs.',
          },
          {
            title: 'Zen Analytics & Streaks',
            description:
              'One-tap post-call emotional composure rating, karma tracking, and caller volatility analytics stored locally.',
          },
        ],
        securityAndPrivacy: [
          'Zero Cloud Uploads: 100% on-device heuristic evaluation and call metadata processing',
          'Private Local Database: Call logs, composure ratings, and streak history encrypted on device with Room DB',
          'Non-Intrusive Overlay: WindowManager HUD automatically dismisses upon call termination with zero persistent background drain',
        ],
        systemHighlights: [
          'Telephony Integration: Real-time hooks into TelephonyManager and CallScreeningService for instant HUD deployment.',
          'Custom Material 3 Theming: Dynamic color palettes matched to emotional arousal states and caller categories.',
        ],
      },
    },
  ],
  experiences: [
    {
      title: 'SalesforceOne',
      company: 'LTM',
      client: 'Confidential',
      role: 'Salesforce Industries Senior Architect',
      period: 'Jun 2025 – Present',
      location: 'India',
      teamSize: '30 members',
      tech: ['Salesforce Service Cloud', 'Sales Cloud', 'Media Cloud', 'Apex', 'LWC'],
      responsibilities: [
        'Communicate with business stakeholders, Business Analysts (BAs), Technical Architects (TAs), and Solution Architects (SAs).',
        'Work within agile sprints to support team leads and developers in understanding complex architecture and functional requirements.',
        'Design and build Proofs of Concept (POCs) to assess feasibility of modern technologies and integration patterns.',
        'Actively guide sprint deliverables, code reviews, and enterprise media cloud solution architecture.',
      ],
    },
    {
      title: 'Customer Service Digital IT',
      company: 'SAS Airlines',
      client: 'SAS Airlines',
      role: 'Salesforce Industries Architect and Lead Developer',
      period: 'Nov 2023 – May 2025',
      location: 'Sweden',
      teamSize: '10 members',
      tech: ['Salesforce Service Cloud', 'Apex', 'LWC', 'Amazon Connect', 'AWS', 'Mulesoft IDP', 'Enhanced SMS Integration'],
      responsibilities: [
        'Communicated directly with business stakeholders, BAs, and Enterprise Tech Architects to modernize airline customer service.',
        'Engineered cloud telephony and omnichannel contact center solutions connecting Salesforce with Amazon Connect & AWS.',
        'Integrated MuleSoft IDP and Enhanced SMS systems for mission-critical airline customer notifications and case workflows.',
        'Developed robust POCs to validate new architectural capabilities and contributed actively to sprint delivery.',
      ],
    },
    {
      title: 'Telefónica Germany Digital Transformation',
      company: 'Wipro',
      client: 'Telefónica Germany',
      role: 'Salesforce Industries Architect and Technical Lead',
      period: 'Jun 2021 – Nov 2023',
      location: 'Sweden',
      teamSize: '12 members',
      tech: ['Omnistudio', 'CPQ API', 'Salesforce', 'Apex', 'LWC'],
      responsibilities: [
        'Served as Technical Team Lead and Architect, steering multi-stream enterprise telecom sales and CPQ delivery.',
        'Communicated closely with BAs, solution architects, and client leaders to define end-to-end technical specifications.',
        'Mentored team members, conducted architecture reviews, and enforced best development practices across OmniStudio and Apex layers.',
        'Delivered scalable CPQ API and LWC components ensuring high performance during peak telecom transaction volumes.',
      ],
    },
    {
      title: 'Mass Customization Online',
      company: 'Capgemini',
      client: 'Telia Company, Sweden',
      role: 'Salesforce Industries Architect and Technical Lead',
      period: 'Apr 2020 – May 2021',
      location: 'Sweden',
      teamSize: '25 members',
      tech: ['Vlocity Digital Platform', 'Digital Commerce API', 'CPQ API', 'Salesforce', 'Apex', 'APIGEE', 'Swagger'],
      responsibilities: [
        'Led architecture and development for Vlocity Digital Commerce and CPQ across Telia B2C/B2B online channels.',
        'Gathered requirements directly with client product owners and converted them into technical user stories with precise sizing.',
        'Conducted POCs for all major EPICs, verifying API contracts with APIGEE and Swagger integrations.',
        'Orchestrated large cross-functional sprint deliveries across India and Sweden teams.',
      ],
    },
    {
      title: 'Mass Customization B2B',
      company: 'Capgemini',
      client: 'Telia Company, Sweden',
      role: 'Salesforce Industries Architect and Technical Lead',
      period: 'Jan 2020 – Mar 2020',
      location: 'Sweden',
      teamSize: '30 members',
      tech: ['Vlocity Digital Platform', 'Vlocity CP', 'Salesforce', 'Apex', 'Lightning'],
      responsibilities: [
        'Architected and implemented enterprise OmniStudio flows, Vlocity Cards, and CPQ engines for B2B product catalogs.',
        'Broke down high-level business goals into granular developer tasks and provided architectural estimates.',
        'Collaborated with Scandinavian enterprise clients to establish robust deployment pipelines.',
      ],
    },
    {
      title: 'CRM Fiber B2B',
      company: 'Capgemini',
      client: 'Telia Company, Sweden',
      role: 'Salesforce Industries Technical Lead',
      period: 'Apr 2019 – Dec 2019',
      location: 'India & Sweden',
      teamSize: '10 members',
      tech: ['Vlocity', 'Salesforce', 'Apex', 'Lightning', 'CPQ'],
      responsibilities: [
        'Served as Lead Developer for Salesforce, Vlocity OmniScripts, and CPQ product configuration for fiber infrastructure rollouts.',
        'Gathered requirements, translated business logic into declarative/programmatic components, and verified user stories.',
        'Conducted knowledge transfer and technical demos for client stakeholders.',
      ],
    },
    {
      title: 'British American Tobacco B2B',
      company: 'ITC Infotech',
      client: 'British American Tobacco',
      role: 'Salesforce Lead Developer',
      period: 'Sep 2018 – Apr 2019',
      location: 'India',
      teamSize: '20 members',
      tech: ['Salesforce', 'Community Cloud', 'Lightning Bolt', 'Apex'],
      responsibilities: [
        'Managed development and multi-tenant deployment for different European End Markets.',
        'Gathered requirements from European client teams and managed developer resource allocations.',
        'Built custom Community Cloud portals with Lightning Bolt templates, ensuring tight security and regional compliance.',
      ],
    },
    {
      title: 'Verizon Business Market B2C',
      company: 'Accenture',
      client: 'Verizon',
      role: 'Salesforce Vlocity Developer & App Analyst',
      period: 'Sep 2017 – Sep 2018',
      location: 'India',
      teamSize: '60 members',
      tech: ['Vlocity', 'Salesforce', 'Apex', 'Lightning', 'Community Builder'],
      responsibilities: [
        'Designed and developed complex OmniScripts, DataRaptors, and custom Lightning Components for telecom customer onboarding.',
        'Configured Apex classes, Visualforce pages, workflow rules, profiles, and granular permission sets.',
        'Participated in end-to-end integration testing with external rating and billing engines.',
      ],
    },
    {
      title: 'Comcast B2B',
      company: 'Accenture',
      client: 'Comcast',
      role: 'Salesforce Developer & App Analyst',
      period: 'Oct 2015 – Aug 2017',
      location: 'India',
      teamSize: '50 members',
      tech: ['Salesforce', 'Visualforce', 'jQuery', 'JavaScript', 'SOAP', 'REST', 'CPQ Tool'],
      responsibilities: [
        'Engineered core sales modules used daily by Comcast Business sales representatives nationwide.',
        'Automated Opportunity creation, Account hierarchy mapping, and automated quote generation using CPQ toolsets.',
        'Built Order Submission workflows through workbench and developed custom survey generation tools.',
      ],
    },
  ],
  companies: [
    {
      name: 'LTM',
      role: 'Salesforce Industries Senior Architect',
      period: 'Jun 2025 – Present',
      badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
    },
    {
      name: 'SAS Airlines',
      role: 'Salesforce Industries Architect & Lead Dev',
      period: 'Nov 2023 – May 2025',
      badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200',
    },
    {
      name: 'Wipro',
      role: 'Industries Architect & Tech Lead',
      period: 'Jun 2021 – Nov 2023',
      badgeColor: 'bg-red-50 text-red-700 border-red-200',
    },
    {
      name: 'Capgemini',
      role: 'Industries Architect & Tech Lead',
      period: 'May 2019 – May 2021',
      badgeColor: 'bg-purple-50 text-purple-700 border-purple-200',
    },
    {
      name: 'ITC Infotech',
      role: 'Salesforce Lead Developer',
      period: 'Sep 2018 – Apr 2019',
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    },
    {
      name: 'Accenture',
      role: 'App Development Analyst',
      period: 'Oct 2015 – Sep 2018',
      badgeColor: 'bg-rose-50 text-rose-700 border-rose-200',
    },
  ],
  trainingAndFreelance: {
    trainedCount: '110+ Trained',
    trainedDesc:
      'Successfully trained over 110 software engineers and professionals from scratch to expert level in Salesforce development, OmniStudio, and enterprise architecture.',
    freelanceCount: '25+ Projects',
    freelanceDesc:
      'Delivered 25+ freelance projects globally, helping enterprise clients optimize CRM workflows, configure CPQ solutions, and automate digital processes.',
    industryCount: '12+ Projects',
    industryDesc:
      'Delivered 12+ high-scale enterprise industry client implementations across telecom, airlines, and media sectors.',
    totalProjects: '37+ Projects',
  },
};
