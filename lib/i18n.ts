export const locales = ["en", "zh-CN"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export function isValidLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getLocaleLabel(locale: Locale): string {
  return locale === "en" ? "English" : "简体中文";
}

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
    joinNow: string;
    bookDemo: string;
    explorePlatform: string;
    privacyPolicy: string;
    contact: string;
    continue: string;
    closePrivacyPolicy: string;
    beforeContinue: string;
    bookDemoCard: string;
    appointmentCalendar: string;
    bookDemoCalendarAria: string;
    formName: string;
    formEmail: string;
    formCompany: string;
    sendEmail: string;
    contactUsAt: string;
    backToHome: string;
  };
  hero: {
    line1: string;
    line2: string;
    line3: string;
    lead: string;
  };
  pains: {
    eyebrow: string;
    title: string;
    lead: string;
    items: Array<{
      tag: string;
      title: string;
      detail: string;
      impact: string;
    }>;
  };
  capabilities: {
    eyebrow: string;
    title: string;
    featurePositionAriaLabel: string;
    railAriaLabel: string;
    features: Array<{
      eyebrow: string;
      title: string;
      description: string;
      support: string;
      iconLabel: string;
    }>;
  };
  workflowCarousel: {
    containerAriaLabel: string;
    kicker: string;
    controlsAriaLabel: string;
    previousAriaLabel: string;
    nextAriaLabel: string;
    workflowSlides: Array<{ title: string; description: string }>;
    projectSlides: Array<{ title: string; description: string }>;
  };
  automatedReports: {
    containerAriaLabel: string;
    tabsAriaLabel: string;
    controlsAriaLabel: string;
    previousAriaLabel: string;
    nextAriaLabel: string;
    insightLabel: string;
    insightText: string;
    slides: Array<{ tab: string; title: string; subtitle: string }>;
  };
  managementDashboard: {
    containerAriaLabel: string;
    tabsAriaLabel: string;
    controlsAriaLabel: string;
    previousAriaLabel: string;
    nextAriaLabel: string;
    slides: Array<{ tab: string; title: string; subtitle: string }>;
  };
  customizedForms: {
    containerAriaLabel: string;
    kicker: string;
    controlsAriaLabel: string;
    previousAriaLabel: string;
    nextAriaLabel: string;
    statusPreviewAriaLabel: string;
    fieldsPreviewAriaLabel: string;
    statusPreviewAlt: string;
    fieldsPreviewAlt: string;
    slides: Array<{ title: string; description: string }>;
  };
  authority: {
    eyebrow: string;
    pill: string;
    title: string;
    lead: string;
    cards: Array<{ title: string; detail: string }>;
    offer: string;
  };
  cta: {
    title: string;
    subtitle: string;
    lead: string;
    messagePrompt: string;
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
    homeTitle: "Manageable | Construction Data Structured, Reports Automated",
    homeDescription:
      "Manageable helps construction teams capture site data once and generate decision-ready reports automatically.",
    privacyTitle: "Privacy Policy",
    privacyDescription:
      "Privacy Policy for DTB DATABYTES SOFTWARE SERVICES and Manageable website enquiries, demo bookings, and communications."
  },
  ui: {
    homeAriaLabel: "Manageable homepage",
    login: "Log in",
    joinNow: "Join now",
    bookDemo: "Book a demo",
    explorePlatform: "Explore the platform",
    privacyPolicy: "Privacy Policy",
    contact: "Contact",
    continue: "Continue",
    closePrivacyPolicy: "Close privacy policy",
    beforeContinue: "Before you continue",
    bookDemoCard: "Book a Demo",
    appointmentCalendar: "Appointment Calendar",
    bookDemoCalendarAria: "Appointment calendar",
    formName: "Name",
    formEmail: "Work Email",
    formCompany: "Company",
    sendEmail: "Send Email",
    contactUsAt: "Or, contact us at:",
    backToHome: "Back to home"
  },
  hero: {
    line1: "From Site Records to",
    line2: "Management Reports",
    line3: "Automatically.",
    lead: "Built for G7 Main Contractors, Developers, and Project Teams managing complex sites."
  },
  pains: {
    eyebrow: "Still managing in old fashion?",
    title: "If this looks familiar, reporting risk is already compounding.",
    lead: "Small delays in field reporting quickly become costly blind spots for management decisions.",
    items: [
      {
        tag: "Track 1 · Data Fragmentation",
        title: "Site records spread across multiple tools and departments",
        detail:
          "Daily updates live in disconnected channels, which makes audit trails weak and handovers inconsistent.",
        impact: "Leads to reporting blind spots"
      },
      {
        tag: "Track 2 · Reporting Delay",
        title: "Reports compiled manually every month",
        detail:
          "Your team spends end-of-month cycles stitching files instead of improving site execution and controls.",
        impact: "Creates recurring reporting backlog"
      },
      {
        tag: "Track 3 · Decision Risk",
        title: "Decisions made using outdated information",
        detail:
          "Management decisions rely on stale summaries, so risks are often visible only after cost and schedule impact.",
        impact: "Delays intervention on critical issues"
      }
    ]
  },
  capabilities: {
    eyebrow: "What your teams can do with Manageable",
    title: "Simple execution flow for construction teams that need clarity now.",
    featurePositionAriaLabel: "Feature position",
    railAriaLabel: "Manageable platform features",
    features: [
      {
        eyebrow: "Data Capture",
        title: "Capture site data once in one guided flow.",
        description:
          "Customized field entries keep daily logs, QA records, and approvals clean before they move downstream.",
        support: "A guided form flow reduces missing details and gives teams one place to start every record.",
        iconLabel: "Data capture"
      },
      {
        eyebrow: "Auto-generated reports",
        title: "Turn field activity into reports without the month-end scramble.",
        description:
          "The same records can feed daily site reports and progress claim summaries without rebuilding the data manually.",
        support: "Teams enter once, and management gets structured outputs that are easier to review and share.",
        iconLabel: "Reports"
      },
      {
        eyebrow: "Cross-project tracking",
        title: "Track momentum across projects from a single view.",
        description:
          "Heatmaps, activity streams, and workflow visibility make it easier to spot bottlenecks before they spread.",
        support: "Project leads can see what is moving, what is stalled, and where follow-up is needed next.",
        iconLabel: "Projects"
      },
      {
        eyebrow: "Management visibility",
        title: "Give decision-makers a clearer real-time operating picture.",
        description:
          "Financial status, expenditure curves, and quotation views help leadership review progress with less guesswork.",
        support: "The dashboard layer turns site updates into a management view that is easier to act on quickly.",
        iconLabel: "Dashboards"
      },
      {
        eyebrow: "Fully customized forms",
        title: "Tailor every form and workflow to the way your team already works.",
        description:
          "Adjust statuses, transitions, and field structures so each document reflects your real approval flow and site process.",
        support:
          "You are not locked into one template. Forms can evolve with the way your projects and departments operate.",
        iconLabel: "Customization"
      }
    ]
  },
  workflowCarousel: {
    containerAriaLabel: "Manageable workflow preview",
    kicker: "Document Preview",
    controlsAriaLabel: "Preview navigation",
    previousAriaLabel: "Previous preview",
    nextAriaLabel: "Next preview",
    workflowSlides: [
      {
        title: "Create document in one guided flow",
        description: "Customized form inputs keep daily site data complete before it reaches management."
      },
      {
        title: "Review structured records instantly",
        description: "Field entries become readable site diary records with cleaner handover and QA visibility."
      }
    ],
    projectSlides: [
      {
        title: "See project movement across the year",
        description: "Timeline, heatmap, and recent activity keep multiple sites visible in one glance."
      },
      {
        title: "Track workflow approvals and reversions",
        description: "Status actions and log history make process bottlenecks obvious before they snowball."
      },
      {
        title: "Map execution flows clearly",
        description: "Visual workflow mapping shows where records move, stall, or complete across teams."
      }
    ]
  },
  automatedReports: {
    containerAriaLabel: "Automated report preview",
    tabsAriaLabel: "Generated report types",
    controlsAriaLabel: "Report navigation",
    previousAriaLabel: "Previous report",
    nextAriaLabel: "Next report",
    insightLabel: "Auto-Generated",
    insightText:
      "Site teams capture once, and Manageable structures the output into operational and financial report formats.",
    slides: [
      {
        tab: "Daily Site Report",
        title: "Laporan Harian Tapak Bina",
        subtitle: "Structured from daily site diary records"
      },
      {
        tab: "Monthly Claim",
        title: "Summary of Monthly Progress Claim",
        subtitle: "Compiled from progress and certified amounts"
      }
    ]
  },
  managementDashboard: {
    containerAriaLabel: "Management dashboard preview",
    tabsAriaLabel: "Dashboard sections",
    controlsAriaLabel: "Dashboard navigation",
    previousAriaLabel: "Previous dashboard",
    nextAriaLabel: "Next dashboard",
    slides: [
      {
        tab: "Financial Status",
        title: "Financial Status",
        subtitle: "as at Feb 2026"
      },
      {
        tab: "Expenditure Curve",
        title: "Expenditure Curve",
        subtitle: "monthly bars + cumulative line"
      },
      {
        tab: "Quotation",
        title: "CE Quotation Status",
        subtitle: "pie + table preview"
      }
    ]
  },
  customizedForms: {
    containerAriaLabel: "Customized forms preview",
    kicker: "Form Builder",
    controlsAriaLabel: "Form builder navigation",
    previousAriaLabel: "Previous form builder preview",
    nextAriaLabel: "Next form builder preview",
    statusPreviewAriaLabel: "Workflow status customization preview",
    fieldsPreviewAriaLabel: "Document field customization preview",
    statusPreviewAlt: "Workflow status editor showing customizable document statuses and transitions",
    fieldsPreviewAlt: "Workflow form editor showing customizable document fields and settings",
    slides: [
      {
        title: "Customize statuses for every workflow step",
        description: "Define the document states, actions, and handoff logic that match your real operating process."
      },
      {
        title: "Edit any document field without rebuilding the system",
        description:
          "Add, rename, reorder, or remove fields so each form fits the exact data your team needs to capture."
      }
    ]
  },
  authority: {
    eyebrow: "Why Manageable",
    pill: "Software + Service Execution",
    title: "We do not just sell software. We help run the digitization with you.",
    lead:
      "Manageable combines platform + execution support so your team gets adoption, working workflows, and measurable operational improvements faster.",
    cards: [
      {
        title: "Software + Service Team",
        detail: "Hands-on support labour to implement, configure, and stabilize reporting operations end-to-end."
      },
      {
        title: "Customised to Your Operations",
        detail: "We tailor workflows to your current project execution model, not a generic template."
      },
      {
        title: "Founders Program Bargain",
        detail: "Early partners get founder-stage pricing with high-value rollout scope while slots remain open."
      },
      {
        title: "Digitize and Operate Continuously",
        detail: "We keep improving your digital operations after go-live so the system keeps compounding value."
      }
    ],
    offer: "Founders Program: limited onboarding slots with priority support."
  },
  cta: {
    title: "More than a tool, take control of your construction data.",
    subtitle: "Ready to run reporting with less friction?",
    lead: "Book an appointment or send us an email for a demo.",
    messagePrompt: "What do you want to digitize first?",
    disclaimer:
      "By contacting us, you agree that we may use your details to respond to your enquiry and arrange a demo."
  },
  footer: {
    lead: "Manageable helps construction teams structure site data and automate reporting workflows.",
    rights: "All rights reserved."
  },
  privacyModal: {
    title: "Privacy Policy",
    lead: "Please review how we handle your contact details before booking a demo or sending us a message."
  },
  privacyPolicy: {
    eyebrow: "Legal",
    title: "Privacy Policy",
    updatedLabel: "Last updated:",
    lead:
      "This Privacy Policy explains how DTB DATABYTES SOFTWARE SERVICES, the company behind Manageable, collects, uses, and protects personal information submitted through this website.",
    sections: [
      {
        title: "1. Information we collect",
        intro: "When you contact us or book a demo, we may collect:",
        items: [
          "Your name",
          "Your work email address",
          "Your company name",
          "The message or project details you submit",
          "Any information you choose to share through email, WhatsApp, or calendar booking"
        ]
      },
      {
        title: "2. How we use your information",
        intro: "We use this information to:",
        items: [
          "Respond to your enquiries",
          "Schedule and provide demos",
          "Understand your operational needs and evaluate fit for our services",
          "Follow up on requested information about Manageable and related services from DTB DATABYTES SOFTWARE SERVICES",
          "Improve our website and business communications"
        ]
      },
      {
        title: "3. Third-party services",
        intro:
          "This website may use third-party services such as Zoho Calendar booking links, email providers, and WhatsApp to help us communicate with you. When you use those services, your information may also be processed according to their privacy practices."
      },
      {
        title: "4. Data sharing",
        intro:
          "We do not sell your personal information. We may share information with service providers only when needed to operate our website, manage communications, or support demo scheduling."
      },
      {
        title: "5. Data retention",
        intro:
          "We keep enquiry and demo-related information for as long as reasonably necessary to respond to you, maintain business records, and support ongoing discussions, unless a longer retention period is required by law."
      },
      {
        title: "6. Your choices",
        intro:
          "You may request access to, correction of, or deletion of the personal information you have shared with us, subject to any legal or operational obligations we may have to retain certain records."
      },
      {
        title: "7. Contact",
        intro:
          "For privacy-related questions or requests regarding DTB DATABYTES SOFTWARE SERVICES or Manageable, contact us at",
        isContact: true
      },
      {
        title: "8. Changes to this policy",
        intro:
          "We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date."
      }
    ]
  }
};

const zhCN: Dictionary = {
  metadata: {
    homeTitle: "Manageable | 施工数据结构化，管理报告自动化",
    homeDescription: "Manageable 帮助建筑团队一次录入现场数据，并自动生成可用于决策的管理报告。",
    privacyTitle: "隐私政策",
    privacyDescription: "适用于 DTB DATABYTES SOFTWARE SERVICES 与 Manageable 网站咨询、演示预约及沟通的隐私政策。"
  },
  ui: {
    homeAriaLabel: "Manageable 首页",
    login: "登录",
    joinNow: "立即加入",
    bookDemo: "预约演示",
    explorePlatform: "了解平台",
    privacyPolicy: "隐私政策",
    contact: "联系我们",
    continue: "继续",
    closePrivacyPolicy: "关闭隐私政策",
    beforeContinue: "继续之前",
    bookDemoCard: "预约演示",
    appointmentCalendar: "预约日历",
    bookDemoCalendarAria: "预约日历",
    formName: "姓名",
    formEmail: "工作邮箱",
    formCompany: "公司",
    sendEmail: "发送邮件",
    contactUsAt: "或者，通过以下方式联系我们：",
    backToHome: "返回首页"
  },
  hero: {
    line1: "从现场记录",
    line2: "到管理报告",
    line3: "全程自动化。",
    lead: "为 G7 总承包商、开发商以及管理复杂工地的项目团队而打造。"
  },
  pains: {
    eyebrow: "还在用传统方式管理？",
    title: "这些情况熟悉吗？风险已在累积。",
    lead: "现场汇报的每一个小延迟，都会很快变成管理决策上的高成本盲区。",
    items: [
      {
        tag: "问题 1 · 数据分散",
        title: "现场记录分散在多个工具和部门之间",
        detail: "日常更新散落在不同渠道中，导致审计轨迹薄弱、交接也不一致。",
        impact: "造成报告盲点"
      },
      {
        tag: "问题 2 · 报告延迟",
        title: "每月仍靠人工整理报告",
        detail: "团队在月末花大量时间拼接文件，而不是优化现场执行和管控。",
        impact: "形成持续性的报告积压"
      },
      {
        tag: "问题 3 · 决策风险",
        title: "管理层依据过时信息做决策",
        detail: "管理决策依赖滞后的汇总数据，风险往往要在成本和工期受影响后才被看到。",
        impact: "延误关键问题介入"
      }
    ]
  },
  capabilities: {
    eyebrow: "Manageable 能为团队做到什么",
    title: "给建筑团队更清晰的执行流程。",
    featurePositionAriaLabel: "功能位置",
    railAriaLabel: "Manageable 平台功能",
    features: [
      {
        eyebrow: "数据采集",
        title: "通过一条引导式流程，一次完成现场数据录入。",
        description: "可自定义字段让每日记录、QA 记录和审批在进入下游前保持整洁一致。",
        support: "引导式表单可减少遗漏，并为团队提供统一的记录入口。",
        iconLabel: "数据采集"
      },
      {
        eyebrow: "自动生成报告",
        title: "把现场活动直接转成报告，不再月末临时赶工。",
        description: "同一份记录可直接生成每日日报和进度索赔摘要，无需重复手动整理数据。",
        support: "团队录入一次，管理层就能拿到更易审核和共享的结构化输出。",
        iconLabel: "报告"
      },
      {
        eyebrow: "跨项目追踪",
        title: "在单一视图中掌握多个项目的推进节奏。",
        description: "热力图、活动流和流程可视化，让团队更早发现瓶颈，避免问题扩散。",
        support: "项目负责人可以快速看见哪里在推进、哪里停滞，以及下一步该跟进哪里。",
        iconLabel: "项目"
      },
      {
        eyebrow: "管理可视化",
        title: "让决策者获得更清晰的实时运营全貌。",
        description: "财务状态、支出曲线和报价视图，帮助管理层以更少猜测来审视项目进度。",
        support: "仪表盘把现场更新转成管理层更容易快速采取行动的视图。",
        iconLabel: "仪表盘"
      },
      {
        eyebrow: "完全可定制表单",
        title: "让每张表单和流程都贴合你团队原本的工作方式。",
        description: "可调整状态、流转和字段结构，让每份文档都真实反映你的审批流程与现场作业。",
        support: "你不会被锁定在单一模板中，表单可随着项目和部门运作方式持续演进。",
        iconLabel: "自定义"
      }
    ]
  },
  workflowCarousel: {
    containerAriaLabel: "Manageable 工作流预览",
    kicker: "文档预览",
    controlsAriaLabel: "预览导航",
    previousAriaLabel: "上一项预览",
    nextAriaLabel: "下一项预览",
    workflowSlides: [
      {
        title: "通过引导式流程创建文档",
        description: "自定义表单输入让每日现场数据在传递给管理层前保持完整。"
      },
      {
        title: "即时查看结构化记录",
        description: "现场录入会变成更易阅读的施工日记记录，交接和 QA 可视性也更清晰。"
      }
    ],
    projectSlides: [
      {
        title: "全年查看项目动态",
        description: "时间轴、热力图和近期活动让多个工地的变化一目了然。"
      },
      {
        title: "追踪审批与回退流程",
        description: "状态动作与日志历史让流程瓶颈在扩大之前就能被发现。"
      },
      {
        title: "清楚映射执行流程",
        description: "可视化工作流展示记录如何在团队间流转、停滞或完成。"
      }
    ]
  },
  automatedReports: {
    containerAriaLabel: "自动报告预览",
    tabsAriaLabel: "生成的报告类型",
    controlsAriaLabel: "报告导航",
    previousAriaLabel: "上一份报告",
    nextAriaLabel: "下一份报告",
    insightLabel: "自动生成",
    insightText: "现场团队只需录入一次，Manageable 就能把输出整理成运营与财务报告格式。",
    slides: [
      {
        tab: "每日日报",
        title: "Laporan Harian Tapak Bina",
        subtitle: "根据每日日记式现场记录自动结构化生成"
      },
      {
        tab: "月度索赔",
        title: "Summary of Monthly Progress Claim",
        subtitle: "根据进度和已认证金额汇总生成"
      }
    ]
  },
  managementDashboard: {
    containerAriaLabel: "管理仪表盘预览",
    tabsAriaLabel: "仪表盘分区",
    controlsAriaLabel: "仪表盘导航",
    previousAriaLabel: "上一个仪表盘",
    nextAriaLabel: "下一个仪表盘",
    slides: [
      {
        tab: "财务状态",
        title: "财务状态",
        subtitle: "截至 2026 年 2 月"
      },
      {
        tab: "支出曲线",
        title: "支出曲线",
        subtitle: "月度柱状图 + 累积曲线"
      },
      {
        tab: "报价",
        title: "CE 报价状态",
        subtitle: "饼图 + 表格预览"
      }
    ]
  },
  customizedForms: {
    containerAriaLabel: "自定义表单预览",
    kicker: "表单构建器",
    controlsAriaLabel: "表单构建器导航",
    previousAriaLabel: "上一个表单构建器预览",
    nextAriaLabel: "下一个表单构建器预览",
    statusPreviewAriaLabel: "工作流状态自定义预览",
    fieldsPreviewAriaLabel: "文档字段自定义预览",
    statusPreviewAlt: "展示可自定义文档状态和流转的工作流状态编辑器",
    fieldsPreviewAlt: "展示可自定义文档字段与设置的工作流表单编辑器",
    slides: [
      {
        title: "为每个流程步骤自定义状态",
        description: "定义与真实运营流程一致的文档状态、动作和交接逻辑。"
      },
      {
        title: "无需重建系统即可编辑任意文档字段",
        description: "新增、重命名、排序或移除字段，让每张表单都贴合团队真正需要采集的数据。"
      }
    ]
  },
  authority: {
    eyebrow: "为什么选择 Manageable",
    pill: "软件 + 落地执行服务",
    title: "我们不只是卖软件，也会和你一起把数字化真正跑起来。",
    lead: "Manageable 将平台与执行支持结合，让团队更快实现采用、跑通流程，并看到可衡量的运营改善。",
    cards: [
      {
        title: "软件 + 服务团队",
        detail: "提供亲手落地的支持，帮助实施、配置并稳定端到端的报告运营流程。"
      },
      {
        title: "按你的运营模式定制",
        detail: "我们会根据你现有的项目执行模式来定制流程，而不是套用通用模板。"
      },
      {
        title: "创始合作计划优惠",
        detail: "早期合作伙伴可在名额开放期间获得创始阶段价格和更高价值的落地范围。"
      },
      {
        title: "持续数字化，持续运营",
        detail: "系统上线后我们也会持续优化你的数字化运营，让价值不断累积。"
      }
    ],
    offer: "创始合作计划：限量 onboarding 名额，享有优先支持。"
  },
  cta: {
    title: "不只是一个工具，而是帮你真正掌控施工数据。",
    subtitle: "准备好用更少阻力跑好报告流程了吗？",
    lead: "预约时间，或直接发邮件联系我们了解演示。",
    messagePrompt: "你最想先数字化什么流程？",
    disclaimer: "当你联系我们时，即表示你同意我们使用你的资料来回复咨询并安排演示。"
  },
  footer: {
    lead: "Manageable 帮助建筑团队把现场数据结构化，并自动化报告流程。",
    rights: "版权所有。"
  },
  privacyModal: {
    title: "隐私政策",
    lead: "在预约演示或向我们发送消息前，请先了解我们如何处理你的联系资料。"
  },
  privacyPolicy: {
    eyebrow: "法律信息",
    title: "隐私政策",
    updatedLabel: "最后更新：",
    lead: "本隐私政策说明 Manageable 背后的公司 DTB DATABYTES SOFTWARE SERVICES 如何收集、使用并保护你通过本网站提交的个人信息。",
    sections: [
      {
        title: "1. 我们收集的信息",
        intro: "当你联系我们或预约演示时，我们可能会收集：",
        items: ["你的姓名", "你的工作邮箱地址", "你的公司名称", "你提交的信息或项目细节", "你选择通过电子邮件、WhatsApp 或日历预约分享的任何信息"]
      },
      {
        title: "2. 我们如何使用你的信息",
        intro: "我们会将这些信息用于：",
        items: ["回复你的咨询", "安排并提供演示", "了解你的运营需求并评估我们的服务是否适合你", "跟进你对 Manageable 及 DTB DATABYTES SOFTWARE SERVICES 相关服务所请求的信息", "改进我们的网站和业务沟通"]
      },
      {
        title: "3. 第三方服务",
        intro: "本网站可能会使用 Zoho Calendar 预约链接、电子邮件服务商和 WhatsApp 等第三方服务来帮助我们与你沟通。当你使用这些服务时，你的信息也可能按照它们各自的隐私做法被处理。"
      },
      {
        title: "4. 数据共享",
        intro: "我们不会出售你的个人信息。只有在运营网站、管理沟通或支持演示预约确有需要时，我们才可能与服务提供商共享相关信息。"
      },
      {
        title: "5. 数据保留",
        intro: "除非法律要求更长的保留期限，否则我们会在合理所需时间内保留与你的咨询和演示相关的信息，以便回复你、维护业务记录并支持后续沟通。"
      },
      {
        title: "6. 你的选择",
        intro: "在遵守我们依法或出于运营需要保留某些记录的前提下，你可以要求访问、更正或删除你与我们共享的个人信息。"
      },
      {
        title: "7. 联系方式",
        intro: "如果你对 DTB DATABYTES SOFTWARE SERVICES 或 Manageable 的隐私事宜有任何问题或请求，请通过以下邮箱联系我们：",
        isContact: true
      },
      {
        title: "8. 本政策的变更",
        intro: "我们可能会不时更新本隐私政策。任何变更都会连同更新后的生效日期发布在本页面。"
      }
    ]
  }
};

export function getDictionary(locale: Locale): Dictionary {
  return locale === "zh-CN" ? zhCN : en;
}
