"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";

import Image from "next/image";
import Link from "next/link";

import heroScreenshot from "@/assets/desktop+mobile_cropped-Photoroom.png";
import editWorkflowFieldsScreenshot from "@/assets/edit workflow fields.png";
import excelLogo from "@/assets/excel_logo.png";
import googleDriveLogo from "@/assets/google_drive_logo.png";
import howToBeginFlower from "@/assets/howToBegin/howToBegin_flower.png";
import whatsAppLogo from "@/assets/WhatsApp_Logo_green.svg";
import workflowMapFirstStep from "@/assets/workflow_map/workflow_map_firstStep.png";
import workflowMapMobilePicture from "@/assets/workflow_map/workflow_map_mobilePicture.png";
import workflowMapStatistics from "@/assets/workflow_map/workflow_map_statistics.png";
import AssessmentCalculator, { type AssessmentFormInputs } from "@/components/assessment-calculator";
import ContactForm from "@/components/contact-form";
import LanguageSwitcher from "@/components/language-switcher";
import PrivacyPolicyModal from "@/components/privacy-policy-modal";
import { getDictionary, type Locale } from "@/lib/i18n";

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Manageable",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "Construction operations software that helps teams structure documentation workflows and reduce reporting friction.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD"
  }
};

const heroFeatureIcons = [
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M7 3.75h7.5l4.5 4.5V19.5A1.5 1.5 0 0 1 17.5 21h-11A1.5 1.5 0 0 1 5 19.5v-14A1.75 1.75 0 0 1 6.75 3.75Zm7 .75v4h4" />
    <path d="M8 12h8M8 15.5h8M8 8.5h3" />
  </svg>,
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="12" r="7.25" />
    <path d="M12 8.25v4.2l2.9 1.7" />
  </svg>,
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M5 18.5h14M7.5 16V10.5M12 16V7.5M16.5 16V12.5" />
    <path d="M6 6.5h12" />
  </svg>,
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 3.75 18.75 6v5.63c0 4.08-2.8 7.85-6.75 8.62-3.95-.77-6.75-4.54-6.75-8.62V6L12 3.75Z" />
    <path d="m9.4 12.2 1.72 1.72 3.48-3.54" />
  </svg>
];

const howItWorksIcons = [
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M7 3.75h7.5l4.5 4.5V19.5A1.5 1.5 0 0 1 17.5 21h-11A1.5 1.5 0 0 1 5 19.5v-14A1.75 1.75 0 0 1 6.75 3.75Zm7 .75v4h4" />
    <path d="M8 12h8M8 15.5h5.5M8 8.5h3" />
  </svg>,
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <rect x="4.75" y="5.25" width="5.5" height="5.5" rx="1.15" />
    <rect x="13.75" y="5.25" width="5.5" height="5.5" rx="1.15" />
    <rect x="9.25" y="13.25" width="5.5" height="5.5" rx="1.15" />
    <path d="M10.25 8h3.5M12 10.75v2.25" />
  </svg>,
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M7 3.75h7.5l4.5 4.5V19.5A1.5 1.5 0 0 1 17.5 21h-11A1.5 1.5 0 0 1 5 19.5v-14A1.75 1.75 0 0 1 6.75 3.75Zm7 .75v4h4" />
    <path d="M8 12h8M8 15.5h8M8 8.5h3" />
    <circle cx="17.4" cy="17.4" r="2.2" />
  </svg>,
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <rect x="7.4" y="3.5" width="9.2" height="17" rx="2.2" />
    <path d="M10 6.8h4M11.15 17.2h1.7" />
  </svg>,
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M6 18.5h12M8.5 16V11M12 16V7.5M15.5 16V9.75" />
    <path d="M5.5 5.5h13" />
  </svg>
];

const pilotStepIcons = [
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M8 3.75h8l3 3v12.75A1.5 1.5 0 0 1 17.5 21h-11A1.5 1.5 0 0 1 5 19.5v-14A1.75 1.75 0 0 1 6.75 3.75H8Z" />
    <path d="M13 3.75v4h4" />
    <path d="M8.5 11h7M8.5 14.5H13M8.5 8h3" />
  </svg>,
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="12" r="6.8" />
    <circle cx="12" cy="12" r="1.9" />
    <path d="M12 3.75v3.1M12 17.15v3.1M3.75 12h3.1M17.15 12h3.1" />
  </svg>,
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M6 16.5 10.4 12l2.8 2.8 5.05-5.05" />
    <path d="M13.75 9.75H19v5.25" />
  </svg>
];

const pilotChecklistIcons = [
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 3.75 18.5 6v5.45c0 3.95-2.6 7.56-6.5 8.3-3.9-.74-6.5-4.35-6.5-8.3V6L12 3.75Z" />
    <path d="m9.3 11.85 1.72 1.7 3.68-3.78" />
  </svg>,
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="9" cy="10" r="2.3" />
    <path d="M5.8 17.2c.68-2.15 2.38-3.45 5.15-3.45 1.83 0 3.17.56 4.15 1.56" />
    <circle cx="16.7" cy="8.4" r="1.65" />
    <path d="M15.2 17h4.8" />
  </svg>,
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="m11.2 3.75-4.5 8.1h4.1L9.95 20.25l7.35-9.45h-4.2l2.05-7.05Z" />
  </svg>,
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M5.75 18.5h12.5M8.5 16V10.9M12 16V7.25M15.5 16v-5.6" />
  </svg>,
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="12" r="7.1" />
    <path d="M12 8v4.4l2.85 1.75" />
  </svg>
];

const contactPointIcons = [
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="9" cy="10" r="2.4" />
    <path d="M4.9 17.15c.7-2.22 2.5-3.55 5.38-3.55 1.95 0 3.38.6 4.43 1.68" />
    <circle cx="16.95" cy="8.35" r="1.75" />
    <path d="M15.55 16.85H20.5" />
  </svg>,
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <rect x="6.2" y="4.8" width="11.6" height="14.4" rx="2" />
    <path d="M9 8.25h6M9 11.6h6M9 14.95h3.3" />
    <path d="m10.2 3.75 1.05 1.1h1.5l1.05-1.1" />
  </svg>,
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 3.75 18.55 6v5.5c0 3.98-2.62 7.62-6.55 8.37-3.93-.75-6.55-4.39-6.55-8.37V6L12 3.75Z" />
    <path d="m9.45 11.9 1.7 1.7 3.4-3.55" />
  </svg>,
];

function renderHowItWorksVisual(index: number, title: string) {
  if (index === 0) {
    return (
      <div className="how-visual-surface how-visual-image how-visual-docs">
        <Image
          src={workflowMapFirstStep}
          alt={`${title} preview`}
          className="how-visual-shot"
          sizes="(max-width: 760px) 92vw, 34vw"
        />
      </div>
    );
  }

  if (index === 1) {
    return (
      <div className="how-visual-surface how-visual-workflow-graphic" aria-hidden="true">
        <div className="workflow-preview-card">
          <span className="workflow-preview-title">Workflow Setup</span>
          <div className="workflow-preview-list">
            {[
              { label: "Draft", tone: "draft" },
              { label: "Submitted", tone: "submitted" },
              { label: "Under Review", tone: "review" },
              { label: "Approved", tone: "approved" },
              { label: "Closed", tone: "closed" }
            ].map((item) => (
              <div key={item.label} className={`workflow-preview-item workflow-preview-${item.tone}`}>
                <span className="workflow-preview-dot" />
                <span className="workflow-preview-line" />
                <strong>{item.label}</strong>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (index === 2) {
    return (
      <div className="how-visual-surface how-visual-image how-visual-form">
        <Image
          src={editWorkflowFieldsScreenshot}
          alt={`${title} preview`}
          className="how-visual-shot"
          sizes="(max-width: 760px) 92vw, 34vw"
        />
      </div>
    );
  }

  if (index === 3) {
    return (
      <div className="how-visual-surface how-visual-image how-visual-mobile-picture">
        <Image
          src={workflowMapMobilePicture}
          alt={`${title} preview`}
          className="how-visual-shot"
          sizes="(max-width: 760px) 92vw, 34vw"
        />
      </div>
    );
  }

  return (
    <div className="how-visual-surface how-visual-image how-visual-statistics">
      <Image
        src={workflowMapStatistics}
        alt={`${title} preview`}
        className="how-visual-shot"
        sizes="(max-width: 760px) 92vw, 34vw"
      />
    </div>
  );
}

export default function HomePage({ locale }: { locale: Locale }) {
  const currentYear = new Date().getFullYear();
  const dictionary = getDictionary(locale);
  const pageClassName = locale === "zh-CN" ? "page page-zh" : "page";
  const heroTitleLine1Parts =
    locale === "zh-CN"
      ? [dictionary.hero.title.line1.replace(/\n/g, "")]
      : dictionary.hero.title.line1.split("\n");
  const heroTitleLine2Parts =
    locale === "zh-CN"
      ? [dictionary.hero.title.line2.replace(/\n/g, "")]
      : dictionary.hero.title.line2.split("\n");
  const [assessmentInputs, setAssessmentInputs] = useState<AssessmentFormInputs>({
    projects: "",
    staff: "",
    hoursPerDay: "",
  });
  const [assessmentContact, setAssessmentContact] = useState({
    email: "",
    phone: "",
  });
  const [assessmentWebsite, setAssessmentWebsite] = useState("");
  const [assessmentContactErrors, setAssessmentContactErrors] = useState<{
    email?: string;
    phone?: string;
  }>({});
  const [assessmentFormState, setAssessmentFormState] = useState<{
    status: "idle" | "sending" | "success" | "error";
    message: string;
  }>({
    status: "idle",
    message: "",
  });
  const assessmentSuccessTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const assessmentStartedAtRef = useRef(Date.now());

  useEffect(() => {
    return () => {
      if (assessmentSuccessTimeoutRef.current) {
        clearTimeout(assessmentSuccessTimeoutRef.current);
      }
    };
  }, []);

  function updateAssessmentContact(field: "email" | "phone", value: string) {
    if (assessmentSuccessTimeoutRef.current) {
      clearTimeout(assessmentSuccessTimeoutRef.current);
      assessmentSuccessTimeoutRef.current = null;
    }

    setAssessmentContact((current) => ({
      ...current,
      [field]: value,
    }));

    setAssessmentContactErrors((current) => {
      if (!current[field]) {
        return current;
      }

      const next = { ...current };
      delete next[field];
      return next;
    });

    if (assessmentFormState.status !== "idle") {
      setAssessmentFormState({
        status: "idle",
        message: "",
      });
    }
  }

  async function submitAssessmentRequest(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const email = assessmentContact.email.trim();
    const phone = assessmentContact.phone.trim();
    const nextErrors: {
      email?: string;
      phone?: string;
    } = {};

    if (!email) {
      nextErrors.email = dictionary.assessment.formRequiredField;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = dictionary.assessment.formInvalidEmail;
    }

    if (!phone) {
      nextErrors.phone = dictionary.assessment.formRequiredField;
    }

    if (Object.keys(nextErrors).length > 0) {
      setAssessmentContactErrors(nextErrors);
      setAssessmentFormState({
        status: "idle",
        message: "",
      });
      return;
    }

    setAssessmentContactErrors({});
    setAssessmentFormState({
      status: "sending",
      message: "",
    });

    try {
      const response = await fetch("/api/workflow-assessment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          phone,
          locale,
          assessmentInputs,
          website: assessmentWebsite,
          startedAt: assessmentStartedAtRef.current,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send workflow assessment");
      }

      setAssessmentFormState({
        status: "success",
        message: dictionary.assessment.formSuccess,
      });
      setAssessmentWebsite("");
      assessmentStartedAtRef.current = Date.now();
      assessmentSuccessTimeoutRef.current = setTimeout(() => {
        setAssessmentFormState({
          status: "idle",
          message: "",
        });
        assessmentSuccessTimeoutRef.current = null;
      }, 5000);
    } catch (error) {
      console.error("Failed to send workflow assessment request", error);
      setAssessmentFormState({
        status: "error",
        message: dictionary.assessment.formError,
      });
    }
  }

  return (
    <main className={pageClassName}>
      <PrivacyPolicyModal locale={locale} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />

      <section className="hero-section" id="top">
        <div className="hero-backdrop" aria-hidden="true" />
        <div className="hero-shell">
          <header className="site-nav">
            <a href="#top" className="brand" aria-label={dictionary.ui.homeAriaLabel}>
              manageable<span>.</span>
            </a>
            <nav className="nav-links" aria-label="Primary">
              {dictionary.nav.map((item) => (
                <a key={item.href} href={item.href}>
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="site-nav-actions">
              <LanguageSwitcher currentLocale={locale} />
              <a className="btn ghost subtle" href="https://app.manageable.my">
                {dictionary.ui.login}
              </a>
            </div>
          </header>

          <div className="hero-grid">
            <div className="hero-copy">
              {/* <p className="eyebrow">{dictionary.hero.eyebrow}</p> */}
              <h1 className="hero-title">
                <span className="hero-title-block hero-title-block-1">
                  {heroTitleLine1Parts.map((part) => (
                    <span key={part} className="hero-title-line hero-title-line-1">
                      {part}
                    </span>
                  ))}
                </span>
                <span className="hero-title-block hero-title-block-2">
                  {heroTitleLine2Parts.map((part) => (
                    <span key={part} className="hero-title-line hero-title-line-2">
                      {part}
                    </span>
                  ))}
                </span>
              </h1>
              {/* <p className="hero-lead">{dictionary.hero.lead}</p> */}
              <div className="hero-feature-row" aria-label="Hero feature highlights">
                {dictionary.hero.featureHighlights.map((item, index) => (
                  <div key={item} className="hero-feature-pill">
                    <span className="hero-feature-icon">{heroFeatureIcons[index]}</span>
                    {item}
                  </div>
                ))}
              </div>
              <div className="cta-row">
                <a className="btn primary" href="#contact-demo">
                  <span>{dictionary.hero.primaryCta}</span>
                  <span className="btn-icon" aria-hidden="true">
                    →
                  </span>
                </a>
                <a className="btn ghost" href="#how-it-works">
                  <span>{dictionary.hero.secondaryCta}</span>
                  <span className="btn-icon" aria-hidden="true">
                    ▶
                  </span>
                </a>
              </div>
              {/* <p className="hero-trust-line">{dictionary.hero.trustLine}</p> */}
            </div>

            <div className="hero-visual">
              <div className="visual-frame">
                <div className="visual-panel visual-panel-top">
                  <span>{dictionary.hero.visualEyebrow}</span>
                  <strong>{dictionary.hero.visualTitle}</strong>
                </div>
                <Image
                  src={heroScreenshot}
                  alt="Manageable dashboard and mobile preview"
                  className="hero-shot"
                  priority
                  sizes="(max-width: 900px) 92vw, 38vw"
                />
                <div className="visual-panel visual-panel-bottom">
                  {dictionary.hero.metrics.map((metric) => (
                    <div key={metric.label} className="metric-chip">
                      <strong>{metric.value}</strong>
                      <h3>{metric.title}</h3>
                      <span>{metric.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pain" id="familiar">
        <p className="eyebrow">{dictionary.familiar.eyebrow}</p>
        <h2>{dictionary.familiar.title}</h2>
        <p className="pain-lead">{dictionary.familiar.lead}</p>
        <ul className="pain-grid">
          {dictionary.familiar.items.map((item, index) => (
            <li key={item.title} className={`pain-card pain-card-${index + 1}`}>
              <span className="pain-tag">{item.tag}</span>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
              {index === 0 ? (
                <div className="pain-figure pain-figure-logos" aria-hidden="true">
                  <div className="pain-logo pain-logo-whatsapp">
                    <Image src={whatsAppLogo} alt="" />
                  </div>
                  <div className="pain-logo pain-logo-excel">
                    <Image src={excelLogo} alt="" />
                  </div>
                  <div className="pain-logo pain-logo-drive">
                    <Image src={googleDriveLogo} alt="" />
                  </div>
                </div>
              ) : index === 1 ? (
                <div className="pain-figure pain-figure-logos" aria-hidden="true">
                  <div className="pain-symbol pain-symbol-sheet">
                    <span className="sheet-line sheet-line-1" />
                    <span className="sheet-line sheet-line-2" />
                    <span className="sheet-line sheet-line-3" />
                  </div>
                  <div className="pain-symbol pain-symbol-clock">
                    <span className="clock-hand clock-hand-hour" />
                    <span className="clock-hand clock-hand-minute" />
                  </div>
                  <div className="pain-symbol pain-symbol-gear">
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M19.14 12.94c.04-.31.06-.63.06-.94s-.02-.63-.06-.94l2.03-1.58a.5.5 0 0 0 .12-.64l-1.92-3.32a.5.5 0 0 0-.6-.22l-2.39.96a7.2 7.2 0 0 0-1.63-.94l-.36-2.54A.5.5 0 0 0 13.9 2h-3.8a.5.5 0 0 0-.49.42l-.36 2.54c-.58.22-1.12.53-1.63.94l-2.39-.96a.5.5 0 0 0-.6.22L2.71 8.48a.5.5 0 0 0 .12.64l2.03 1.58c-.04.31-.06.63-.06.94s.02.63.06.94l-2.03 1.58a.5.5 0 0 0-.12.64l1.92 3.32a.5.5 0 0 0 .6.22l2.39-.96c.5.4 1.05.72 1.63.94l.36 2.54a.5.5 0 0 0 .49.42h3.8a.5.5 0 0 0 .49-.42l.36-2.54c.58-.22 1.13-.54 1.63-.94l2.39.96a.5.5 0 0 0 .6-.22l1.92-3.32a.5.5 0 0 0-.12-.64l-2.03-1.58ZM12 15.5A3.5 3.5 0 1 1 12 8a3.5 3.5 0 0 1 0 7.5Z" />
                    </svg>
                  </div>
                </div>
              ) : (
                <div className="pain-figure pain-figure-risk" aria-hidden="true">
                  <div className="pain-symbol pain-symbol-warning">!</div>
                  <div className="pain-symbol pain-symbol-bars">
                    <span className="chart-bar chart-bar-1" />
                    <span className="chart-bar chart-bar-2" />
                    <span className="chart-bar chart-bar-3" />
                  </div>
                  <div className="pain-symbol pain-symbol-pie">
                    <div className="chart-pie" />
                  </div>
                </div>
              )}
              <small>{item.impact}</small>
            </li>
          ))}
        </ul>
      </section>

      <section className="content-section" id="how-it-works">
        <div className="section-heading how-it-works-heading">
          <p className="eyebrow">{dictionary.howItWorks.eyebrow}</p>
          <h2>{dictionary.howItWorks.title}</h2>
          <p>{dictionary.howItWorks.lead}</p>
        </div>
        <div className="how-workflow">
          <div className="how-workflow-spine" aria-hidden="true" />
          {dictionary.howItWorks.steps.map((step, index) => {
            const isReversed = index % 2 === 1;

            return (
              <article
                key={step.id}
                className={`how-workflow-row${isReversed ? " is-reversed" : ""}`}
              >
                <div className="how-workflow-panel how-workflow-copy">
                  <div className="how-step-meta">
                    <span className="how-step-id">{step.id}</span>
                    <span className="how-step-kicker">{`Step ${index + 1}`}</span>
                  </div>
                  <h3>{step.title}</h3>
                  <ul className="how-step-points" aria-label={`${step.title} highlights`}>
                    {step.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                  <p>{step.detail}</p>
                </div>

                <div className="how-workflow-node" aria-hidden="true">
                  <span className="how-node-icon">{howItWorksIcons[index]}</span>
                </div>

                <div className="how-workflow-panel how-workflow-visual">
                  <div className="how-visual-frame">
                    <span className="how-visual-kicker">Preview</span>
                    {renderHowItWorksVisual(index, step.title)}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* <section className="content-section" id="workflow-examples">
        <div className="section-heading">
          <p className="eyebrow">{dictionary.workflows.eyebrow}</p>
          <h2>{dictionary.workflows.title}</h2>
          <p>{dictionary.workflows.lead}</p>
        </div>
        <div className="card-grid workflows-grid">
          {dictionary.workflows.examples.map((example) => (
            <article key={example.title} className="info-card workflow-card">
              <h3>{example.title}</h3>
              <p>{example.summary}</p>
              <ul className="detail-list">
                {example.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section> */}

      <section className="content-section assessment-section" id="assessment">
        <div className="section-heading">
          <p className="eyebrow">{dictionary.assessment.eyebrow}</p>
          <h2>{dictionary.assessment.title}</h2>
          <p>{dictionary.assessment.lead}</p>
        </div>
        <div className="assessment-layout">
          <AssessmentCalculator
            assessment={dictionary.assessment}
            locale={locale}
            onInputsChange={setAssessmentInputs}
          />

          <article className="assessment-card assessment-form-card">
            <div className="assessment-form-heading">
              <span className="assessment-form-badge" aria-hidden="true">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 4.5 14.25 7H18a1.5 1.5 0 0 1 1.5 1.5V12l-2.25 2.25L12 19.5l-5.25-5.25L4.5 12V8.5A1.5 1.5 0 0 1 6 7h3.75L12 4.5Z" />
                  <path d="M8.5 11.5h7M12 8v7" />
                </svg>
              </span>
              <div>
                <h3>{dictionary.assessment.formTitle}</h3>
                <p>{dictionary.assessment.formLead}</p>
              </div>
            </div>
            <form
              className="assessment-form"
              onSubmit={submitAssessmentRequest}
            >
              <div className="bot-field" aria-hidden="true">
                <label htmlFor="assessment-website">Website</label>
                <input
                  id="assessment-website"
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  value={assessmentWebsite}
                  onChange={(event) => setAssessmentWebsite(event.target.value)}
                />
              </div>
              <label>
                <span>{dictionary.assessment.formFields.email}</span>
                <input
                  type="email"
                  name="assessment_email"
                  placeholder="you@company.com"
                  value={assessmentContact.email}
                  onChange={(event) => updateAssessmentContact("email", event.target.value)}
                  aria-invalid={Boolean(assessmentContactErrors.email)}
                  aria-describedby={assessmentContactErrors.email ? "assessment-email-error" : undefined}
                />
                {assessmentContactErrors.email ? (
                  <small id="assessment-email-error" className="assessment-form-error">
                    {assessmentContactErrors.email}
                  </small>
                ) : null}
              </label>
              <label>
                <span>{dictionary.assessment.formFields.phone}</span>
                <input
                  type="text"
                  name="assessment_phone"
                  placeholder="012-345 6789"
                  value={assessmentContact.phone}
                  onChange={(event) => updateAssessmentContact("phone", event.target.value)}
                  aria-invalid={Boolean(assessmentContactErrors.phone)}
                  aria-describedby={assessmentContactErrors.phone ? "assessment-phone-error" : undefined}
                />
                {assessmentContactErrors.phone ? (
                  <small id="assessment-phone-error" className="assessment-form-error">
                    {assessmentContactErrors.phone}
                  </small>
                ) : null}
              </label>
              <p className="assessment-form-privacy">
                <span aria-hidden="true">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.5 10V7.75A3.5 3.5 0 0 1 12 4.25a3.5 3.5 0 0 1 3.5 3.5V10" />
                    <rect x="6.25" y="10" width="11.5" height="9.75" rx="1.5" />
                  </svg>
                </span>
                {dictionary.assessment.formPrivacy}
              </p>
              {assessmentFormState.status === "success" || assessmentFormState.status === "error" ? (
                <p
                  className={`assessment-form-status assessment-form-status-${assessmentFormState.status}`}
                  role="status"
                >
                  {assessmentFormState.message}
                </p>
              ) : null}
              <button
                className={`btn primary assessment-submit${
                  assessmentFormState.status === "success" ? " assessment-submit-success" : ""
                }`}
                type="submit"
                disabled={assessmentFormState.status === "sending"}
              >
                <span>
                  {assessmentFormState.status === "sending"
                    ? dictionary.assessment.formSending
                    : assessmentFormState.status === "success"
                      ? dictionary.assessment.formSuccessButton
                      : dictionary.assessment.formButton}
                </span>
                <span className="btn-icon" aria-hidden="true">
                  {assessmentFormState.status === "success" ? "✓" : "→"}
                </span>
              </button>
              <p className="assessment-form-disclaimer">{dictionary.assessment.formDisclaimer}</p>
            </form>
          </article>
        </div>
      </section>

      {/* <section className="content-section experience-section" id="experience">
        <div className="section-heading">
          <p className="eyebrow">{dictionary.experience.eyebrow}</p>
          <h2>{dictionary.experience.title}</h2>
          <p>{dictionary.experience.lead}</p>
        </div>
        <div className="card-grid evidence-grid">
          {dictionary.experience.evidence.map((item) => (
            <article key={item.label} className="info-card evidence-card">
              <span className="evidence-value">{item.value}</span>
              <h3>{item.label}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </section> */}

      <section className="content-section pilot-section" id="pilot">
        <p className="eyebrow pilot-section-eyebrow">{dictionary.pilot.eyebrow}</p>
        <div className="pilot-layout">
          <div className="pilot-hero">
            <h2>
              <span className="pilot-title-line">{dictionary.pilot.title}</span>
              <span className="pilot-title-line pilot-title-highlight">
                {dictionary.pilot.highlight}
              </span>
            </h2>
            <p>{dictionary.pilot.lead}</p>
          </div>
          <div className="pilot-steps">
            {dictionary.pilot.points.map((point, index) => (
              <article key={point.title} className="pilot-step-card">
                <span className="pilot-step-icon">{pilotStepIcons[index]}</span>
                <div className="pilot-step-copy">
                  <h3>{`${index + 1}. ${point.title}`}</h3>
                  <p>{point.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="pilot-support">
          <article className="pilot-note-card">
            <div className="pilot-note-visual" aria-hidden="true">
              <Image
                className="pilot-note-flower"
                src={howToBeginFlower}
                alt=""
                sizes="(max-width: 760px) 150px, 132px"
              />
            </div>

            <div className="pilot-note-copy">
              <p className="eyebrow">{dictionary.pilot.note.eyebrow}</p>
              <h3>{dictionary.pilot.note.title}</h3>
              <p>{dictionary.pilot.note.detail}</p>
              <p className="pilot-note-accent">
                {dictionary.pilot.note.accent}
              </p>
              <a className="btn pilot-note-cta" href="#contact-demo">
                <span className="pilot-note-cta-icon" aria-hidden="true">
                  ▶
                </span>
                <span>{dictionary.pilot.note.cta}</span>
              </a>
            </div>
          </article>

          <div className="pilot-checklist">
            {dictionary.pilot.checklist.map((item, index) => (
              <article key={item.title} className="pilot-check-item">
                <span className="pilot-check-icon">{pilotChecklistIcons[index]}</span>
                <div className="pilot-check-copy">
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* <section className="content-section vision-section" id="vision">
        <div className="section-heading">
          <p className="eyebrow">{dictionary.vision.eyebrow}</p>
          <h2>{dictionary.vision.title}</h2>
          <p>{dictionary.vision.lead}</p>
        </div>
        <div className="card-grid vision-grid">
          {dictionary.vision.points.map((point) => (
            <article key={point.title} className="info-card vision-card">
              <h3>{point.title}</h3>
              <p>{point.detail}</p>
            </article>
          ))}
        </div>
      </section> */}

      <section className="contact-section" id="contact-demo">
        <div className="contact-shell">
          <div className="contact-layout">
            <div className="contact-copy">
              <div className="section-heading compact">
                <p className="eyebrow">{dictionary.contactSection.eyebrow}</p>
                <h2>{dictionary.contactSection.title}</h2>
                <p>{dictionary.contactSection.lead}</p>
              </div>
              <div className="contact-points">
                {dictionary.contactSection.points.map((point, index) => (
                  <article key={point.title} className="contact-point">
                    <span className="contact-point-icon" aria-hidden="true">
                      {contactPointIcons[index]}
                    </span>
                    <div className="contact-point-copy">
                      <h3>{point.title}</h3>
                      <p>{point.detail}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <ContactForm
              copy={dictionary.contactSection.form}
              disclaimer={dictionary.contactSection.disclaimer}
            />
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="site-footer-copy">
          <p>{dictionary.footer.lead}</p>
          <p>
            © {currentYear} DTB DATABYTES SOFTWARE SERVICES. {dictionary.footer.rights}
          </p>
        </div>
        <nav className="site-footer-links" aria-label="Legal and support links">
          <Link href={`/${locale}/privacy-policy`}>{dictionary.ui.privacyPolicy}</Link>
          <a href="https://app.manageable.my">{dictionary.ui.login}</a>
        </nav>
      </footer>
    </main>
  );
}
