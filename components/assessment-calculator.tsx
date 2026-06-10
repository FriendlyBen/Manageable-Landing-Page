"use client";

import { useEffect, useState } from "react";

import type { Dictionary, Locale } from "@/lib/i18n";

const assessmentResultIcons = [
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="12" r="8" />
    <path d="M12 7.75v4.5l2.85 1.85" />
  </svg>,
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="12" r="8" />
    <path d="M12 8v8M9.2 10.2c0-1.15 1.1-2.2 2.8-2.2 1.55 0 2.8.8 2.8 2.05 0 1.1-.85 1.7-2.45 2.1-1.55.4-2.35.85-2.35 2.05 0 1.25 1.2 2.1 2.95 2.1 1.65 0 2.95-.9 2.95-2.3" />
  </svg>,
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M4.75 16.5 10 11.25l3 3 6.25-7" />
    <path d="M14.5 7.25h4.75V12" />
    <path d="M5 19h14" />
  </svg>,
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M5 18.5h14M7.5 16V10.5M12 16V7.5M16.5 16v-4" />
    <path d="M6 6.5h12" />
  </svg>,
];

const ASSESSMENT_MONTHLY_DAYS = 20;
const ASSESSMENT_MONTHLY_SALARY = 5500;
const ASSESSMENT_DAILY_WORK_HOURS = 8;
const ASSESSMENT_HOURLY_RATE =
  ASSESSMENT_MONTHLY_SALARY / ASSESSMENT_MONTHLY_DAYS / ASSESSMENT_DAILY_WORK_HOURS;

type AssessmentInputs = {
  projects: string;
  staff: string;
  hoursPerDay: string;
};

export type AssessmentFormInputs = AssessmentInputs;

function formatCurrency(value: number, locale: Locale) {
  return new Intl.NumberFormat(locale === "zh-CN" ? "zh-CN" : "en-MY", {
    style: "currency",
    currency: "MYR",
    maximumFractionDigits: 0,
  }).format(value);
}

function getFrictionLevel(monthlyHours: number, staffCount: number, projectCount: number, locale: Locale) {
  const impactScore = monthlyHours + staffCount * 6 + projectCount * 12;

  if (locale === "zh-CN") {
    if (impactScore >= 200) return "高";
    if (impactScore >= 110) return "中";
    return "较低";
  }

  if (impactScore >= 200) return "High";
  if (impactScore >= 110) return "Moderate";
  return "Lower";
}

export default function AssessmentCalculator({
  assessment,
  locale,
  onInputsChange,
}: {
  assessment: Dictionary["assessment"];
  locale: Locale;
  onInputsChange?: (inputs: AssessmentFormInputs) => void;
}) {
  const [assessmentInputs, setAssessmentInputs] = useState<AssessmentInputs>({
    projects: "",
    staff: "",
    hoursPerDay: "",
  });
  const [assessmentResults, setAssessmentResults] = useState<string[] | null>(null);
  const startedAtRef = useState(() => Date.now())[0];

  const numericProjects = Number(assessmentInputs.projects);
  const numericStaff = Number(assessmentInputs.staff);
  const numericHoursPerDay = Number(assessmentInputs.hoursPerDay);
  const hasValidAssessmentInputs =
    numericProjects > 0 && numericStaff > 0 && numericHoursPerDay > 0;

  useEffect(() => {
    onInputsChange?.(assessmentInputs);
  }, [assessmentInputs, onInputsChange]);

  function updateAssessmentInput(field: keyof AssessmentInputs, value: string) {
    setAssessmentInputs((current) => ({
      ...current,
      [field]: value,
    }));
    setAssessmentResults(null);
  }

  async function saveAssessmentInputs() {
    try {
      const response = await fetch("/api/assessment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          projects: numericProjects,
          staff: numericStaff,
          hoursPerDay: numericHoursPerDay,
          locale,
          website: "",
          startedAt: startedAtRef,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to save assessment inputs");
      }
    } catch (error) {
      console.error("Unable to save assessment inputs", error);
    }
  }

  function calculateAssessment() {
    if (!hasValidAssessmentInputs) {
      return;
    }

    const monthlyAdminHours = Math.round(
      numericStaff * numericHoursPerDay * ASSESSMENT_MONTHLY_DAYS
    );
    const hourlyRate = ASSESSMENT_HOURLY_RATE;
    const monthlyLabourCost = Math.round(monthlyAdminHours * hourlyRate);
    const annualLabourCost = monthlyLabourCost * 12;
    const frictionLevel = getFrictionLevel(monthlyAdminHours, numericStaff, numericProjects, locale);

    setAssessmentResults([
      `${new Intl.NumberFormat(locale === "zh-CN" ? "zh-CN" : "en").format(monthlyAdminHours)} ${
        locale === "zh-CN" ? "小时" : "hrs"
      }`,
      formatCurrency(monthlyLabourCost, locale),
      formatCurrency(annualLabourCost, locale),
      frictionLevel,
    ]);

    void saveAssessmentInputs();
  }

  return (
    <>
      <article className="assessment-card assessment-input-card">
        <div className="assessment-card-header">
          <span>{assessment.calculatorTitle}</span>
          <p>{assessment.calculatorLead}</p>
        </div>
        <div className="assessment-metrics">
          {assessment.metrics.map((metric, index) => {
            const fieldName = (
              index === 0 ? "projects" : index === 1 ? "staff" : "hoursPerDay"
            ) as keyof AssessmentInputs;
            const step = fieldName === "hoursPerDay" ? "0.5" : "1";

            return (
              <div key={metric.label} className="assessment-field">
                <label htmlFor={`assessment-${fieldName}`}>{metric.label}</label>
                <input
                  id={`assessment-${fieldName}`}
                  className="assessment-input"
                  type="number"
                  inputMode="decimal"
                  min="0"
                  step={step}
                  placeholder={metric.placeholder}
                  value={assessmentInputs[fieldName]}
                  onChange={(event) => updateAssessmentInput(fieldName, event.target.value)}
                />
                <small>{metric.note}</small>
              </div>
            );
          })}
          <button
            className={`assessment-calc-cta${hasValidAssessmentInputs ? "" : " is-prompting"}`}
            type="button"
            onClick={calculateAssessment}
            disabled={!hasValidAssessmentInputs}
          >
            <span className="assessment-calc-icon">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="6" y="3.75" width="12" height="16.5" rx="2" />
                <path d="M8.8 7.5h6.4M9 11.2h1.5M12.25 11.2h1.5M15.5 11.2H17M9 14.2h1.5M12.25 14.2h1.5M15.5 14.2H17M9 17.2h1.5M12.25 17.2H17" />
              </svg>
            </span>
            <div>
              <strong>{assessment.calculatorCtaTitle}</strong>
              <small>
                {hasValidAssessmentInputs
                  ? assessment.calculatorCtaDetail
                  : assessment.calculatorCtaIdleDetail}
              </small>
            </div>
          </button>
        </div>
      </article>

      <article
        className={`assessment-card assessment-impact-card ${
          assessmentResults ? "has-results" : "is-pending"
        }`}
        aria-live="polite"
      >
        <div className="assessment-impact-banner">
          <span className="assessment-impact-check" aria-hidden="true">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="m7.75 12.15 2.55 2.55 5.95-6.15" />
            </svg>
          </span>
          <div>
            <h3>{assessment.impactTitle}</h3>
            <p>{assessmentResults ? assessment.impactDetail : assessment.impactPromptDetail}</p>
          </div>
        </div>
        <div className="assessment-results-grid">
          {assessment.results.map((result, index) => (
            <div
              key={result.label}
              className={`assessment-result-card ${assessmentResults ? "has-value" : "is-pending"}`}
            >
              <span className="assessment-result-icon" aria-hidden="true">
                {assessmentResultIcons[index]}
              </span>
              <strong>{assessmentResults ? assessmentResults[index] : "--"}</strong>
              <h3>{result.label}</h3>
              <p>{result.detail}</p>
            </div>
          ))}
        </div>
        {assessmentResults ? (
          <div className="assessment-gap-panel has-results">
            <div className="assessment-gap-header">
              <span className="assessment-gap-icon" aria-hidden="true">
                !
              </span>
              <div>
                <h3>{assessment.gapTitle}</h3>
              </div>
            </div>
            <div className="assessment-gap-list">
              {assessment.gapItems.map((item) => (
                <div key={item.title} className="assessment-gap-item">
                  <span className="assessment-gap-bullet" aria-hidden="true">
                    x
                  </span>
                  <div>
                    <strong>{item.title}</strong>
                    <p>{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </article>
    </>
  );
}
