export const locales = ["en", "zh-CN"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export function isValidLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getLocaleLabel(locale: Locale): string {
  return locale === "en" ? "English" : "简体中文";
}

type SectionLink = {
  href: string;
  label: string;
};

type FamiliarItem = {
  tag: string;
  title: string;
  detail: string;
  impact: string;
};

type WorkStep = {
  id: string;
  title: string;
  detail: string;
  points: string[];
};

type WorkflowExample = {
  title: string;
  summary: string;
  points: string[];
};

type AssessmentMetric = {
  label: string;
  placeholder: string;
  note: string;
};

type AssessmentResult = {
  label: string;
  detail: string;
};

type AssessmentGapItem = {
  title: string;
  detail: string;
};

type EvidenceItem = {
  value: string;
  label: string;
  detail: string;
};

type PilotPoint = {
  title: string;
  detail: string;
};

type PilotNote = {
  eyebrow: string;
  title: string;
  detail: string;
  accent: string;
  cta: string;
};

type PilotChecklistItem = {
  title: string;
  detail: string;
};

type VisionPoint = {
  title: string;
  detail: string;
};

export type Dictionary = {
  metadata: {
    homeTitle: string;
    homeDescription: string;
    privacyTitle: string;
    privacyDescription: string;
  };
  ui: {
    homeAriaLabel: string;
    login: string;
    bookDemo: string;
    explorePlatform: string;
    privacyPolicy: string;
    contact: string;
    continue: string;
    closePrivacyPolicy: string;
    beforeContinue: string;
    contactUsAt: string;
    backToHome: string;
    viewPilot: string;
    viewAssessment: string;
  };
  nav: SectionLink[];
  hero: {
    eyebrow: string;
    title: {
      line1: string;
      line2: string;
    };
    lead: string;
    visualEyebrow: string;
    visualTitle: string;
    featureHighlights: string[];
    primaryCta: string;
    secondaryCta: string;
    trustLine: string;
    metrics: Array<{ value: string; title: string; label: string }>;
  };
  familiar: {
    eyebrow: string;
    title: string;
    lead: string;
    items: FamiliarItem[];
  };
  howItWorks: {
    eyebrow: string;
    title: string;
    lead: string;
    steps: WorkStep[];
  };
  workflows: {
    eyebrow: string;
    title: string;
    lead: string;
    examples: WorkflowExample[];
  };
  assessment: {
    eyebrow: string;
    title: string;
    lead: string;
    calculatorTitle: string;
    calculatorLead: string;
    calculatorCtaTitle: string;
    calculatorCtaDetail: string;
    calculatorCtaIdleDetail: string;
    aboutTitle: string;
    aboutDetail: string;
    metrics: AssessmentMetric[];
    impactEyebrow: string;
    impactTitle: string;
    impactDetail: string;
    impactPromptDetail: string;
    results: AssessmentResult[];
    gapTitle: string;
    gapPromptTitle: string;
    gapItems: AssessmentGapItem[];
    meaningLabel: string;
    meaningText: string;
    meaningPromptText: string;
    formTitle: string;
    formLead: string;
    formButton: string;
    formSuccessButton: string;
    formPrivacy: string;
    formDisclaimer: string;
    formSending: string;
    formSuccess: string;
    formError: string;
    formRequiredField: string;
    formInvalidEmail: string;
    formFields: {
      fullName: string;
      company: string;
      email: string;
      phone: string;
    };
  };
  experience: {
    eyebrow: string;
    title: string;
    lead: string;
    evidence: EvidenceItem[];
  };
  pilot: {
    eyebrow: string;
    title: string;
    highlight: string;
    lead: string;
    points: PilotPoint[];
    note: PilotNote;
    checklist: PilotChecklistItem[];
  };
  vision: {
    eyebrow: string;
    title: string;
    lead: string;
    points: VisionPoint[];
  };
  contactSection: {
    eyebrow: string;
    title: string;
    lead: string;
    points: Array<{
      title: string;
      detail: string;
    }>;
    form: {
      company: string;
      companyPlaceholder: string;
      email: string;
      emailPlaceholder: string;
      phone: string;
      phonePlaceholder: string;
      message: string;
      messagePlaceholder: string;
      privacy: string;
      button: string;
      sending: string;
      success: string;
      error: string;
      requiredField: string;
      invalidEmail: string;
    };
    disclaimer: string;
  };
  footer: {
    lead: string;
    rights: string;
  };
  privacyModal: {
    title: string;
    lead: string;
  };
  privacyPolicy: {
    eyebrow: string;
    title: string;
    updatedLabel: string;
    lead: string;
    sections: Array<{
      title: string;
      intro: string;
      items?: string[];
      isContact?: boolean;
    }>;
  };
};

const en: Dictionary = {
  metadata: {
    homeTitle:
      "Manageable | Construction Workflow Management & Site Documentation Software Malaysia",
    homeDescription:
      "Digitize construction workflows, site documentation, inspections, approvals, and reporting. Manageable helps Malaysian contractors improve visibility, reduce manual coordination, and streamline project delivery.",
    privacyTitle: "Privacy Policy",
    privacyDescription:
      "Privacy Policy for DTB DATABYTES SOFTWARE SERVICES and Manageable website enquiries, demo requests, and communications.",
  },
  ui: {
    homeAriaLabel: "Manageable homepage",
    login: "Log in",
    bookDemo: "Request a demo",
    explorePlatform: "See how it works",
    privacyPolicy: "Privacy Policy",
    contact: "Contact",
    continue: "Continue",
    closePrivacyPolicy: "Close privacy policy",
    beforeContinue: "Before you continue",
    contactUsAt: "Direct contact",
    backToHome: "Back to home",
    viewPilot: "See pilot scope",
    viewAssessment: "Preview the assessment",
  },
  nav: [
    { href: "#familiar", label: "Pain Points" },
    { href: "#how-it-works", label: "How It Works" },
    { href: "#assessment", label: "Assessment" },
    { href: "#contact-demo", label: "Contact" },
  ],
  hero: {
    eyebrow: "Construction operations infrastructure",
    title: {
      line1: "Digitize Construction\nWorkflows.",
      line2: "Deliver Projects\nBetter.",
    },
    lead: "Manage site records, automate reports, and gain real-time visibility across your projects - all in one platform.",
    visualEyebrow: "Operational Visibility",
    visualTitle: "Structured records, cleaner reporting",
    featureHighlights: [
      "Standardise Workflows",
      "Automate Reporting",
      "Better Visibility Across Projects",
      "Audit-Ready Records",
    ],
    primaryCta: "Talk to us about your workflow",
    secondaryCta: "How It Works",
    trustLine:
      "Built for contractors and project teams modernising construction operations in Malaysia.",
    metrics: [
      {
        value: "1",
        title: "Connected Workflow Hub",
        label: "Site Records, Payment Documents, Reports.",
      },
      {
        value: "3",
        title: "Operational gains",
        label: "Capture Data, Reuse Data, Improve Visibility.",
      },
      {
        value: "24/7",
        title: "Live visibility",
        label: "Real-time data across projects. Anytime, anywhere.",
      },
    ],
  },
  familiar: {
    eyebrow: "Still managing in old fashion?",
    title: "If this looks familiar, reporting risk is already compounding.",
    lead: "Small delays in field reporting quickly become costly blind spots for management decisions.",
    items: [
      {
        tag: "Track 1 · Data Fragmentation",
        title: "Site records spread across multiple Tools and Departments?",
        detail:
          "Daily updates live in disconnected channels, which makes audit trails weak and handovers inconsistent.",
        impact: "Leads to reporting blind spots",
      },
      {
        tag: "Track 2 · Reporting Delay",
        title: "Reports compiled manually every month?",
        detail:
          "Your team spends end-of-month cycles stitching files instead of improving site execution and controls.",
        impact: "Creates recurring reporting backlog",
      },
      {
        tag: "Track 3 · Decision Risk",
        title: "Decisions made using outdated information?",
        detail:
          "Management decisions rely on stale summaries, so risks are often visible only after cost and schedule impact.",
        impact: "Delays intervention on critical issues",
      },
    ],
  },
  howItWorks: {
    eyebrow: "How Manageable works",
    title:
      "A structured workflow from field activity to management reporting.",
    lead: "We start by understanding your documentation needs, build the right workflows, and turn field activity into structured data.",
    steps: [
      {
        id: "01",
        title: "Assess your documentation",
        detail:
          "We review your existing documents, reports, approvals, and compliance requirements to understand what your project truly needs.",
        points: ["Site Diary", "Inspections", "Approvals", "Claims"],
      },
      {
        id: "02",
        title: "Design your workflows",
        detail:
          "We map the process behind each document and configure workflow statuses, rules, and approval paths that match your operation.",
        points: ["Draft", "Submitted", "Under Review", "Approved", "Closed"],
      },
      {
        id: "03",
        title: "Build digital forms that fit your process",
        detail:
          "We create digital forms using customizable fields so the records capture what your site teams already need to report.",
        points: ["Text", "Photo", "Date", "Signature"],
      },
      {
        id: "04",
        title: "Use on site. Every day.",
        detail:
          "Your team enters records in just a few taps. Information moves through the workflow and gets surfaced to the right approvers.",
        points: ["Quick to enter", "Track every step", "Notify the right people"],
      },
      {
        id: "05",
        title: "Generate reports. Reuse data.",
        detail:
          "Turn completed records into reports, dashboards, and claims so the same information keeps working for your projects.",
        points: ["Reports", "Dashboards", "Claims", "Exports"],
      },
    ],
  },
  workflows: {
    eyebrow: "Construction workflow examples",
    title: "Use cases shaped around how project teams actually operate.",
    lead: "Manageable is meant to support operational workflows that construction teams already recognize, then progressively improve them.",
    examples: [
      {
        title: "Daily site records and progress updates",
        summary:
          "Create a more dependable trail of daily activity without rebuilding the same report every cycle.",
        points: [
          "Guide teams through required fields",
          "Keep updates easier to review and hand over",
          "Reduce reporting clean-up later",
        ],
      },
      {
        title: "Approvals, submissions, and workflow control",
        summary:
          "Make document movement clearer so teams know what is pending, returned, approved, or stalled.",
        points: [
          "Reflect real approval states",
          "Create a cleaner audit trail",
          "Improve follow-up discipline",
        ],
      },
      {
        title: "Management-level status consolidation",
        summary:
          "Bring operational records closer to the dashboards and summaries leadership actually needs.",
        points: [
          "Support multi-project visibility",
          "Reduce lag between site and management",
          "Prepare for better financial and progress reporting",
        ],
      },
    ],
  },
  assessment: {
    eyebrow: "Documentation load assessment",
    title: "A clearer way to quantify the hidden cost of manual reporting.",
    lead: "This calculator helps construction teams estimate the time and cost of manual documentation and shows what becomes possible when workflows are digitised.",
    calculatorTitle: "Assessment input",
    calculatorLead:
      "Start with a simple picture of how much manual reporting your current projects require each day.",
    calculatorCtaTitle: "Calculate",
    calculatorCtaDetail: "See your results",
    calculatorCtaIdleDetail: "Enter all values to calculate",
    aboutTitle: "About this calculator",
    aboutDetail:
      "Estimates are based on typical construction workflows and industry benchmarks. Actual results may vary based on project complexity and reporting requirements.",
    metrics: [
      {
        label: "Projects",
        placeholder: "Number of projects",
        note: "Active projects being reported manually",
      },
      {
        label: "Staff involved",
        placeholder: "Number of staff involved",
        note: "Supervisors, coordinators, and management support",
      },
      {
        label: "Hours per day",
        placeholder: "Hours spent per staff per day",
        note: "Average daily documentation time spent by each involved staff member",
      },
    ],
    impactEyebrow: "Your estimated documentation impact",
    impactTitle: "Here's what we found",
    impactDetail:
      "Your team could be spending significant time and money on manual documentation.",
    impactPromptDetail:
      "Enter your current reporting numbers and click calculate to see the estimated time and cost impact.",
    results: [
      {
        label: "Estimated monthly admin hours",
        detail: "Time lost to manual reporting and paper work",
      },
      {
        label: "Estimated monthly labour cost",
        detail: "Direct cost of time spent on manual documentation",
      },
      {
        label: "Estimated annual labour cost",
        detail: "The true cost of manual reporting over 12 months",
      },
      {
        label: "Potential reporting friction reduced",
        detail: "High impact opportunities to streamline workflows",
      },
    ],
    gapTitle: "And despite that spend, you still may not have:",
    gapPromptTitle: "What manual reporting still does not give you",
    gapItems: [
      {
        title: "Structured digital workflows",
        detail: "Consistent process steps, accountability, and cleaner execution across projects.",
      },
      {
        title: "Automated reports",
        detail: "Faster reporting outputs without chasing files, reformatting updates, or rebuilding summaries.",
      },
      {
        title: "Reusable operational data",
        detail: "Data captured once and reused for dashboards, claims support, compliance, and management visibility.",
      },
    ],
    meaningLabel: "What this means:",
    meaningText:
      "These are people and dollars that could be redirected back to project delivery, quality, safety, and your bottom line.",
    meaningPromptText:
      "Your estimate will show how much time and labour could be redirected back to project delivery, quality, safety, and your bottom line.",
    formTitle: "Get your free workflow assessment",
    formLead:
      "Want to see how these numbers compare to your actual projects? Our team will prepare a personalised workflow assessment with practical recommendations.",
    formButton: "Send me my free assessment",
    formSuccessButton: "Details sent !",
    formPrivacy: "Your information is safe with us. We respect your privacy.",
    formDisclaimer:
      "No obligation. Just valuable insights for your projects.",
    formSending: "Sending...",
    formSuccess: "Your workflow assessment request has been sent.",
    formError: "There was a problem sending your assessment request. Please try again.",
    formRequiredField: "Please enter both email and phone number.",
    formInvalidEmail: "Please enter a valid email address.",
    formFields: {
      fullName: "Full name",
      company: "Company",
      email: "Email",
      phone: "Phone / WhatsApp",
    },
  },
  experience: {
    eyebrow: "Experience behind Manageable",
    title:
      "Built with respect for the realities of construction administration.",
    lead: "Manageable is positioned as more than a software surface. The product direction is grounded in the day-to-day pressure of getting site records, approvals, and management outputs under control.",
    evidence: [
      {
        value: "Ops-first",
        label: "design principle",
        detail:
          "The workflow starts with operational discipline, not abstract product jargon.",
      },
      {
        value: "Configurable",
        label: "for project reality",
        detail:
          "Forms and workflow structures can reflect how your teams already operate.",
      },
      {
        value: "Adoption-aware",
        label: "rollout mindset",
        detail:
          "The long-term goal is usable digitization that site teams can actually maintain.",
      },
    ],
  },
  pilot: {
    eyebrow: "How to begin",
    title:
      "Digitise One Workflow at a Time.",
    highlight: "Transform with Confidence.",
    lead: "Manageable works alongside your existing operations, helping you digitise workflows progressively while your projects and teams continue to run as usual.",
    points: [
      {
        title: "Select one workflow family",
        detail:
          "Begin with a documentation process that is painful enough to matter but contained enough to stabilize.",
      },
      {
        title: "Define success in operational terms",
        detail:
          "Measure reduction in manual compilation, better visibility, and cleaner handover quality.",
      },
      {
        title: "Scale after proving fit",
        detail:
          "Once the team rhythm works, extend the model into additional workflows and reporting layers.",
      },
    ],
    note: {
      eyebrow: "Good to know",
      title: "Progress Over Perfection Always Wins.",
      detail:
        "Digital transformation does not succeed by doing everything at once. It succeeds by making meaningful progress, step by step.",
      accent: "Start small. Learn quickly. Improve continuously.",
      cta: "Start With One Workflow",
    },
    checklist: [
      {
        title: "No disruption to ongoing projects",
        detail: "Your teams can keep working the way they do today.",
      },
      {
        title: "No massive retraining exercise",
        detail: "Familiar processes. Easy adoption. Real usage.",
      },
      {
        title: "No big bang implementation",
        detail: "We introduce new workflows gradually and safely.",
      },
      {
        title: "Value can be demonstrated quickly",
        detail: "Show impact early and build confidence across teams.",
      },
      {
        title: "Expand only when you are ready",
        detail: "You stay in control of the pace and priorities.",
      },
    ],
  },
  vision: {
    eyebrow: "Long-term vision",
    title: "From better documents to a better operating model.",
    lead: "The long-term ambition is not simply faster paperwork. It is a construction operating environment where information is captured once, trusted more, and reused across execution, reporting, and management control.",
    points: [
      {
        title: "Operational memory",
        detail:
          "Project information becomes easier to trace, review, and learn from over time.",
      },
      {
        title: "Management visibility",
        detail:
          "Leadership gets a more reliable pulse on site reality without waiting for heavy manual summaries.",
      },
      {
        title: "Progressive digitization",
        detail:
          "Teams can expand from one stabilized workflow into a broader digital operating stack.",
      },
    ],
  },
  contactSection: {
    eyebrow: "Contact / Demo",
    title:
      "If this resonates with your business, let’s talk workflows.",
    lead: "We can start with your current documentation burden, where the reporting friction is, and which workflow is most suitable for a pilot.",
    points: [
      {
        title: "Focused on your reality",
        detail: "We start with your current challenges and priorities.",
      },
      {
        title: "Practical recommendations",
        detail: "You’ll get clear next steps you can act on.",
      },
      {
        title: "No commitment",
        detail: "A conversation, not a sales pitch.",
      },
    ],
    form: {
      company: "Company",
      companyPlaceholder: "e.g. ABC Construction Sdn Bhd",
      email: "Work email",
      emailPlaceholder: "e.g. john@company.com",
      phone: "Phone number",
      phonePlaceholder: "e.g. 012-345 6789",
      message: "Message (optional)",
      messagePlaceholder: "Tell us a bit about your projects or challenges...",
      privacy: "Your information is safe with us. We respect your privacy.",
      button: "Send my details",
      sending: "Sending...",
      success: "Details sent!",
      error: "Something went wrong while sending your details. Please try again.",
      requiredField: "Please fill in this field.",
      invalidEmail: "Please enter a valid work email.",
    },
    disclaimer:
      "By submitting, you agree that we may contact you to respond to your enquiry and arrange a demo.",
  },
  footer: {
    lead: "Manageable is being shaped for construction teams that want more structure, less reporting friction, and stronger operating visibility.",
    rights: "All rights reserved.",
  },
  privacyModal: {
    title: "Privacy Policy",
    lead: "Please review how we handle your contact details before contacting us or requesting a demo.",
  },
  privacyPolicy: {
    eyebrow: "Legal",
    title: "Privacy Policy",
    updatedLabel: "Last updated:",
    lead: "This Privacy Policy explains how DTB DATABYTES SOFTWARE SERVICES, the company behind Manageable, collects, uses, and protects personal information submitted through this website.",
    sections: [
      {
        title: "1. Information we collect",
        intro: "When you contact us or request a demo, we may collect:",
        items: [
          "Your work email address",
          "Your company name",
          "Your phone number",
          "The message or project details you submit",
          "Any information you choose to share through email, WhatsApp, or future booking tools",
        ],
      },
      {
        title: "2. How we use your information",
        intro: "We use this information to:",
        items: [
          "Respond to your enquiries",
          "Schedule and provide demos",
          "Understand your operational needs and evaluate fit for our services",
          "Follow up on requested information about Manageable and related services from DTB DATABYTES SOFTWARE SERVICES",
          "Improve our website and business communications",
        ],
      },
      {
        title: "3. Third-party services",
        intro:
          "This website may use third-party services such as email providers, WhatsApp, and future booking or analytics tools to help us communicate with you. When you use those services, your information may also be processed according to their privacy practices.",
      },
      {
        title: "4. Data sharing",
        intro:
          "We do not sell your personal information. We may share information with service providers only when needed to operate our website, manage communications, or support demo scheduling.",
      },
      {
        title: "5. Data retention",
        intro:
          "We keep enquiry and demo-related information for as long as reasonably necessary to respond to you, maintain business records, and support ongoing discussions, unless a longer retention period is required by law.",
      },
      {
        title: "6. Your choices",
        intro:
          "You may request access to, correction of, or deletion of the personal information you have shared with us, subject to any legal or operational obligations we may have to retain certain records.",
      },
      {
        title: "7. Contact",
        intro:
          "For privacy-related questions or requests regarding DTB DATABYTES SOFTWARE SERVICES or Manageable, contact us at",
        isContact: true,
      },
      {
        title: "8. Changes to this policy",
        intro:
          "We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.",
      },
    ],
  },
};

const zhCN: Dictionary = {
  metadata: {
    homeTitle: "Manageable | 马来西亚建筑工程流程与现场文件管理软件",
    homeDescription:
      "Manageable 帮助建筑团队把分散的现场资料变成结构化流程，减轻报告负担，并提升管理可视度。",
    privacyTitle: "隐私政策",
    privacyDescription:
      "适用于 DTB DATABYTES SOFTWARE SERVICES 与 Manageable 网站咨询、演示申请及沟通的隐私政策。",
  },
  ui: {
    homeAriaLabel: "Manageable 首页",
    login: "登录",
    bookDemo: "申请演示",
    explorePlatform: "了解流程",
    privacyPolicy: "隐私政策",
    contact: "联系",
    continue: "继续",
    closePrivacyPolicy: "关闭隐私政策",
    beforeContinue: "继续之前",
    contactUsAt: "直接联系",
    backToHome: "返回首页",
    viewPilot: "查看试点方案",
    viewAssessment: "预览评估",
  },
  nav: [
    { href: "#familiar", label: "常见痛点" },
    { href: "#how-it-works", label: "运作方式" },
    { href: "#assessment", label: "负担评估" },
    { href: "#contact-demo", label: "联系我们" },
  ],
  hero: {
    eyebrow: "建筑运营基础设施",
    title: {
      line1: "建筑流程数字化。",
      line2: "让项目管理更有条理。",
    },
    lead: "统一现场记录、自动生成报告，并在同一平台上为项目带来实时可视度。",
    visualEyebrow: "项目一目了然",
    visualTitle: "记录有依据，报告更清晰",
    featureHighlights: [
      "标准化工作流程",
      "节省报告时间",
      "提升决策可视度",
      "更完整的审计记录",
    ],
    primaryCta: "和我们聊聊您的流程",
    secondaryCta: "如何运作",
    trustLine: "为正在推进建筑运营数字化的总包商与项目团队而打造。",
    metrics: [
      {
        value: "1",
        title: "统一连接",
        label: "现场记录、付款文件、报告互相关联。",
      },
      {
        value: "3",
        title: "运营提升",
        label: "采集数据、复用数据、提升可视度。",
      },
      {
        value: "24/7",
        title: "实时可视度",
        label: "跨项目实时数据，随时随地可查看。",
      },
    ],
  },
  familiar: {
    eyebrow: "还在用老方式管理项目？",
    title: "如果这些情况经常发生,项目风险可能早已悄悄累积",
    lead: "资料分散、报告延迟、信息滞后，风险也在悄悄累积。",
    items: [
      {
        tag: "Track 1 · 资料分散",
        title: "现场资料分散，难以追踪？",
        detail:
          "WhatsApp、Excel、云端文件各自独立，资料难以统一管理，查找与交接效率不断下降。",
        impact: "❌ 容易出现资料遗漏与版本混乱",
      },
      {
        tag: "Track 2 · 报告延迟",
        title: "报告整理占用了太多时间？",
        detail: "团队把大量时间花在整理资料与制作报告，而不是推进现场工作与项目管理。",
        impact: "❌ 报告积压，影响决策效率",
      },
      {
        tag: "Track 3 · 决策风险",
        title: "问题总是在事后才被发现？",
        detail:
          "当关键数据无法及时汇总时，风险往往已经扩大，管理团队难以及早介入处理。",
        impact: "❌ 错过关键问题的处理时机",
      },
    ],
  },
  howItWorks: {
    eyebrow: "Manageable 如何运作",
    title: "从现场记录到管理报告，让每一份资料都有价值。",
    lead: "不改变您的工作习惯，而是让流程更清晰、更容易管理。",
    steps: [
      {
        id: "01",
        title: "了解您目前的文件与流程",
        detail:
          "先了解团队目前的记录方式、审批流程与文件需求。",
        points: ["施工日志", "检查表", "审批", "索赔"],
      },
      {
        id: "02",
        title: "设计符合团队习惯的工作流",
        detail:
          "根据现有作业方式，配置状态、审批流程与负责人。",
        points: ["草稿", "已提交", "审核中", "已批准", "已关闭"],
      },
      {
        id: "03",
        title: "建立符合现场需求的数字表单",
        detail: "根据实际需求设计表单，让记录更简单、更统一。",
        points: ["文字", "照片", "日期", "签名"],
      },
      {
        id: "04",
        title: "在现场正式使用",
        detail: "现场填写一次，数据自动流转到相关负责人。",
        points: ["录入更快", "每一步可追踪", "通知相关人员"],
      },
      {
        id: "05",
        title: "一次记录，多次利用",
        detail: "同一份数据可用于报告、仪表板、审批记录与项目分析。",
        points: ["报告", "仪表板", "索赔", "导出"],
      },
    ],
  },
  workflows: {
    eyebrow: "建筑流程示例",
    title: "围绕项目团队真实运作方式来设计的应用场景。",
    lead: "Manageable 的目标，是先支持建筑团队熟悉的运营流程，再逐步把这些流程做得更稳定、更高效。",
    examples: [
      {
        title: "现场日报与进度更新",
        summary:
          "建立更可靠的日常活动记录轨迹，减少每个周期重新整理报告的压力。",
        points: [
          "引导团队填写必要字段",
          "让更新更容易审阅和交接",
          "减少后续报告整理工作",
        ],
      },
      {
        title: "审批、提交流程与状态管控",
        summary: "让文件流转更清楚，团队知道哪些待处理、退回、批准或卡住。",
        points: [
          "贴合真实审批状态",
          "形成更清晰的审计轨迹",
          "提升跟进行动纪律",
        ],
      },
      {
        title: "管理层状态汇总",
        summary: "把运营记录更有效地连接到管理层真正需要的仪表板与汇总视图。",
        points: [
          "支持多项目可视度",
          "缩短现场与管理层之间的时间差",
          "为财务与进度报告打好基础",
        ],
      },
    ],
  },
  assessment: {
    eyebrow: "文档负担评估",
    title: "您花在整理资料上的时间，可能比想象中更多",
    lead: "用简单的数据，估算团队每年花在资料整理上的时间与成本。",
    calculatorTitle: "评估输入",
    calculatorLead: "先从一个简单的现况开始，看看目前项目每天需要多少人工报告工作。",
    calculatorCtaTitle: "开始计算",
    calculatorCtaDetail: "查看结果",
    calculatorCtaIdleDetail: "请先填入所有数值",
    aboutTitle: "关于这个计算器",
    aboutDetail:
      "这些估算基于典型施工流程与行业经验值。实际结果会因项目复杂度与汇报要求而有所不同。",
    metrics: [
      { label: "项目数量", placeholder: "项目数量", note: "目前依靠人工报告的活跃项目" },
      { label: "参与人员", placeholder: "参与人数", note: "包括主管、协调员和管理支援人员" },
      {
        label: "每日耗时",
        placeholder: "每人每日耗时小时数",
        note: "每位参与人员平均每天用于记录、追踪与整理资料的时间",
      },
    ],
    impactEyebrow: "您的文档工作影响估算",
    impactTitle: "根据您的输入估算",
    impactDetail: "您的团队每年可能投入大量时间处理记录、整理资料与制作报告。",
    impactPromptDetail: "输入目前的项目数字并点击计算后，就能看到估算出来的时间与成本影响。",
    results: [
      {
        label: "每月用于资料整理",
        detail: "花在人工报告与纸本整理上的时间",
      },
      {
        label: "每月相关人力成本",
        detail: "人工文档工作的直接人力成本",
      },
      {
        label: "预计每年人工成本",
        detail: "12 个月人工报告的真实成本",
      },
      {
        label: "优化潜力",
        detail: "有很高机会透过流程优化明显改善",
      },
    ],
    gapTitle: "即使投入了这些时间与成本，您可能仍然缺少：",
    gapPromptTitle: "人工报告通常仍然无法带来的能力",
    gapItems: [
      {
        title: "标准化工作流程",
        detail: "让项目执行步骤更一致、责任更清楚、跨项目协作更顺畅。",
      },
      {
        title: "自动生成报告",
        detail: "减少追资料、重整格式与反复整理汇总的时间。",
      },
      {
        title: "可持续利用的数据",
        detail: "同一份数据可继续用于仪表板、索赔支持、合规与管理可视度。",
      },
    ],
    meaningLabel: "这代表什么：",
    meaningText:
      "这些都是可以重新投入到项目交付、质量、安全，以及利润表现上的人力与成本。",
    meaningPromptText: "完成计算后，你会看到有多少时间与人力成本有机会重新投入到项目交付、质量、安全，以及利润表现上。",
    formTitle: "获取免费的流程分析",
    formLead:
      "留下联系方式，我们将根据您的项目情况提供参考建议。",
    formButton: "发送我的免费评估",
    formSuccessButton: "资料已发送！",
    formPrivacy: "你的信息会被妥善保管，我们尊重你的隐私。",
    formDisclaimer: "没有压力，只提供对项目有帮助的洞察。",
    formSending: "发送中...",
    formSuccess: "你的流程评估请求已发送。",
    formError: "发送流程评估请求时出现问题，请稍后再试。",
    formRequiredField: "请输入邮箱和电话号码。",
    formInvalidEmail: "请输入有效的邮箱地址。",
    formFields: {
      fullName: "姓名",
      company: "公司名称",
      email: "邮箱",
      phone: "电话 / WhatsApp",
    },
  },
  experience: {
    eyebrow: "Manageable 背后的经验",
    title: "这套产品方向，建立在对建筑文档管理现实压力的尊重之上。",
    lead: "Manageable 不只是一个软件界面。它的方向，是从如何把现场记录、审批流程与管理输出真正管起来的现实需求出发。",
    evidence: [
      {
        value: "运营优先",
        label: "设计原则",
        detail: "工作流从运营纪律出发，而不是空泛的软件术语。",
      },
      {
        value: "可配置",
        label: "贴近项目现实",
        detail: "表单与流程结构可以反映你团队当前的运作方式。",
      },
      {
        value: "重视落地",
        label: "推广思维",
        detail: "长期目标是让现场团队真正能持续使用的数字化。",
      },
    ],
  },
  pilot: {
    eyebrow: "从哪里开始",
    title: "从一个流程开始。",
    highlight: "逐步实现项目数字化。",
    lead: "无需一次性改变现有做法。Manageable 从您熟悉的流程开始，让团队在项目持续推进的同时，逐步完成数字化。",
    points: [
      {
        title: "先从一个流程开始",
        detail: "从最常用、最容易落地的流程开始。",
      },
      {
        title: "看见实际改善",
        detail: "减少资料整理时间，提升项目可视度与协作效率。",
      },
      {
        title: "验证成效后再扩展",
        detail: "先做好一个流程，再逐步扩展到更多项目流程。",
      },
    ],
    note: {
      eyebrow: "数字化不必一步到位",
      title: "与其等待完美的开始，不如先实现真正的改善。",
      detail: "数字化不是一次完成，而是每一步都带来实际改善。",
      accent: "先从小处开始，快速学习，持续优化。",
      cta: "从一个流程开始",
    },
    checklist: [
      {
        title: "不影响现有项目运作",
        detail: "团队依然可以按今天的方式继续工作。",
      },
      {
        title: "不需要大规模重新培训",
        detail: "流程熟悉，上手更轻，才会真正被使用。",
      },
      {
        title: "不需要一次性全面更换流程",
        detail: "我们会用渐进而安全的方式引入新流程。",
      },
      {
        title: "小范围尝试，更容易看见成果",
        detail: "更早看到成效，也更容易建立团队信心。",
      },
      {
        title: "看到成效后再扩展",
        detail: "节奏和优先级，始终由你来掌握。",
      },
    ],
  },
  vision: {
    eyebrow: "长期愿景",
    title: "从更好的文件管理，走向更好的项目运营模式。",
    lead: "长期目标不只是更快完成文书工作，而是建立一个信息只需录入一次、可信度更高、还能被执行、报告与管理反复复用的建筑运营环境。",
    points: [
      {
        title: "项目运营记忆",
        detail: "项目资料更容易追溯、审查，并在长期中形成组织经验。",
      },
      {
        title: "管理可视度",
        detail: "管理层不必等到厚重的人工汇总，便能更早看到现场真实情况。",
      },
      {
        title: "渐进式数字化",
        detail: "团队可以从一个稳定流程开始，逐步扩展成更完整的数字运营体系。",
      },
    ],
  },
  contactSection: {
    eyebrow: "联系 / 演示",
    title: "先了解您的项目流程，再决定下一步。",
    lead: "我们可以先聊你目前的文档负担、报告摩擦点，以及最适合拿来做试点的流程。",
    points: [
      {
        title: "从您的项目实际情况出发",
        detail: "我们先了解目前的作业方式、挑战与改善目标。",
      },
      {
        title: "给出可执行建议",
        detail: "根据实际情况提供具体且可落地的建议。",
      },
      {
        title: "不急着做决定",
        detail: "先了解是否适合，再决定下一步。",
      },
    ],
    form: {
      company: "公司名称",
      companyPlaceholder: "例如：ABC Construction Sdn Bhd",
      email: "工作邮箱",
      emailPlaceholder: "例如：john@company.com",
      phone: "电话号码",
      phonePlaceholder: "例如：012-345 6789",
      message: "项目情况（选填）",
      messagePlaceholder: "欢迎简单介绍您的项目、目前的流程或遇到的挑战……",
      privacy: "你的资料会被妥善处理，我们尊重你的隐私。",
      button: "获取流程建议",
      sending: "发送中...",
      success: "资料已发送！",
      error: "发送资料时出现问题，请稍后再试。",
      requiredField: "请填写此栏位。",
      invalidEmail: "请输入有效的工作邮箱。",
    },
    disclaimer:
      "提交后，即表示你同意我们可根据你的咨询内容联系你，并安排演示。",
  },
  footer: {
    lead: "Manageable 协助建筑团队建立更清晰的流程、更完整的记录，以及更高效的项目管理方式。",
    rights: "版权所有。",
  },
  privacyModal: {
    title: "隐私政策",
    lead: "在联系或申请演示前，请先了解我们如何处理你的联系资料。",
  },
  privacyPolicy: {
    eyebrow: "法律",
    title: "隐私政策",
    updatedLabel: "最后更新：",
    lead: "本隐私政策说明 Manageable 背后的公司 DTB DATABYTES SOFTWARE SERVICES，如何收集、使用及保护你通过本网站提交的个人信息。",
    sections: [
      {
        title: "1. 我们收集的信息",
        intro: "当你联系我们或申请演示时，我们可能会收集：",
        items: [
          "你的工作邮箱",
          "你的公司名称",
          "你的电话号码",
          "你提交的信息或项目说明",
          "你通过邮件、WhatsApp 或未来预约工具主动提供的任何资料",
        ],
      },
      {
        title: "2. 我们如何使用你的信息",
        intro: "我们会将这些信息用于：",
        items: [
          "回应你的咨询",
          "安排和提供演示",
          "了解你的运营需求并评估服务适配度",
          "跟进你所要求的 Manageable 及 DTB DATABYTES SOFTWARE SERVICES 相关信息",
          "改进我们的网站和业务沟通",
        ],
      },
      {
        title: "3. 第三方服务",
        intro:
          "本网站可能会使用第三方服务，例如邮件服务、WhatsApp，以及未来的预约或分析工具，以协助我们与你沟通。当你使用这些服务时，你的信息也可能按照这些服务各自的隐私政策被处理。",
      },
      {
        title: "4. 数据共享",
        intro:
          "我们不会出售你的个人信息。只有在运营网站、处理沟通或安排演示所需时，我们才可能与服务提供商共享相关信息。",
      },
      {
        title: "5. 数据保留",
        intro:
          "除非法律要求更长保留期，否则我们会在合理必要的期间内保留与你的咨询和演示相关的信息，以便回复你、保存业务记录并支持后续沟通。",
      },
      {
        title: "6. 你的选择",
        intro:
          "你可以要求查阅、更正或删除你提交给我们的个人信息，但需受限于我们在法律或运营上必须保留某些记录的义务。",
      },
      {
        title: "7. 联系方式",
        intro:
          "如有与 DTB DATABYTES SOFTWARE SERVICES 或 Manageable 相关的隐私问题或请求，请通过以下邮箱联系我们",
        isContact: true,
      },
      {
        title: "8. 政策变更",
        intro:
          "我们可能会不时更新本隐私政策。任何更改都会发布在此页面，并附上更新后的生效日期。",
      },
    ],
  },
};

export function getDictionary(locale: Locale): Dictionary {
  return locale === "zh-CN" ? zhCN : en;
}
