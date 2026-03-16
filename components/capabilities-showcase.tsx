"use client";

import { type CSSProperties, type ReactNode, useEffect, useRef, useState } from "react";

import AutomatedReportCarousel from "@/components/automated-report-carousel";
import CapabilityCarousel from "@/components/capability-carousel";
import CustomizedFormsCarousel from "@/components/customized-forms-carousel";
import ManagementDashboardCarousel from "@/components/management-dashboard-carousel";

type SlideDirection = "forward" | "backward";

type Feature = {
  eyebrow: string;
  title: string;
  description: string;
  support: string;
  iconLabel: string;
  visual: ReactNode;
};

const features: Feature[] = [
  {
    eyebrow: "Data Capture",
    title: "Capture site data once in one guided flow.",
    description:
      "Customized field entries keep daily logs, QA records, and approvals clean before they move downstream.",
    support: "A guided form flow reduces missing details and gives teams one place to start every record.",
    iconLabel: "Data capture",
    visual: <CapabilityCarousel />
  },
  {
    eyebrow: "Auto-generated reports",
    title: "Turn field activity into reports without the month-end scramble.",
    description:
      "The same records can feed daily site reports and progress claim summaries without rebuilding the data manually.",
    support: "Teams enter once, and management gets structured outputs that are easier to review and share.",
    iconLabel: "Reports",
    visual: <AutomatedReportCarousel />
  },
  {
    eyebrow: "Cross-project tracking",
    title: "Track momentum across projects from a single view.",
    description:
      "Heatmaps, activity streams, and workflow visibility make it easier to spot bottlenecks before they spread.",
    support: "Project leads can see what is moving, what is stalled, and where follow-up is needed next.",
    iconLabel: "Projects",
    visual: <CapabilityCarousel mode="projects" />
  },
  {
    eyebrow: "Management visibility",
    title: "Give decision-makers a clearer real-time operating picture.",
    description:
      "Financial status, expenditure curves, and quotation views help leadership review progress with less guesswork.",
    support: "The dashboard layer turns site updates into a management view that is easier to act on quickly.",
    iconLabel: "Dashboards",
    visual: <ManagementDashboardCarousel />
  },
  {
    eyebrow: "Fully customized forms",
    title: "Tailor every form and workflow to the way your team already works.",
    description:
      "Adjust statuses, transitions, and field structures so each document reflects your real approval flow and site process.",
    support: "You are not locked into one template. Forms can evolve with the way your projects and departments operate.",
    iconLabel: "Full Customization",
    visual: <CustomizedFormsCarousel />
  }
];

function FeatureIcon({ index }: { index: number }) {
  if (index === 0) {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 5.75A1.75 1.75 0 0 1 6.75 4h10.5A1.75 1.75 0 0 1 19 5.75v12.5A1.75 1.75 0 0 1 17.25 20H6.75A1.75 1.75 0 0 1 5 18.25Zm2 1.25v2h10V7Zm0 4v2h4v-2Zm0 4v2h10v-2Zm6-4v2h4v-2Z" />
      </svg>
    );
  }

  if (index === 1) {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6.75 4A1.75 1.75 0 0 0 5 5.75v12.5C5 19.22 5.78 20 6.75 20h10.5c.97 0 1.75-.78 1.75-1.75V8.8a1.75 1.75 0 0 0-.5-1.22l-2.08-2.05A1.75 1.75 0 0 0 15.2 5H6.75Zm7.75 1.8 2.7 2.7h-2.2A.5.5 0 0 1 14.5 8Zm-6 5.2h7v1.5h-7Zm0 3h7v1.5h-7Z" />
      </svg>
    );
  }

  if (index === 2) {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 6.75C4 5.78 4.78 5 5.75 5h3.5C10.22 5 11 5.78 11 6.75v3.5C11 11.22 10.22 12 9.25 12h-3.5A1.75 1.75 0 0 1 4 10.25Zm9 0c0-.97.78-1.75 1.75-1.75h3.5C19.22 5 20 5.78 20 6.75v3.5c0 .97-.78 1.75-1.75 1.75h-3.5A1.75 1.75 0 0 1 13 10.25Zm-9 7c0-.97.78-1.75 1.75-1.75h12.5c.97 0 1.75.78 1.75 1.75v3.5c0 .97-.78 1.75-1.75 1.75H5.75A1.75 1.75 0 0 1 4 17.25Z" />
      </svg>
    );
  }

  if (index === 3) {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 18.25V5.75C5 4.78 5.78 4 6.75 4h10.5c.97 0 1.75.78 1.75 1.75v12.5c0 .97-.78 1.75-1.75 1.75H6.75A1.75 1.75 0 0 1 5 18.25Zm3-9.75v8h1.5v-8Zm3.75 3v5h1.5v-5Zm3.75-2v7h1.5v-7Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 4.75A1.75 1.75 0 0 1 8.75 3h6.5A1.75 1.75 0 0 1 17 4.75v2.5H19A1.75 1.75 0 0 1 20.75 9v9A1.75 1.75 0 0 1 19 19.75H5A1.75 1.75 0 0 1 3.25 18V9A1.75 1.75 0 0 1 5 7.25h2Zm1.5 0v2.5h7V4.5h-7ZM7 11h10v1.5H7Zm0 3.5h6v1.5H7Z" />
    </svg>
  );
}

export default function CapabilitiesShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<SlideDirection>("forward");
  const [railIndicatorStyle, setRailIndicatorStyle] = useState<CSSProperties>({
    "--feature-rail-thumb-size": "40%",
    "--feature-rail-thumb-offset": "0%"
  } as CSSProperties);
  const railRef = useRef<HTMLDivElement | null>(null);
  const railButtonRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const activeFeature = features[activeIndex];

  useEffect(() => {
    const rail = railRef.current;

    if (!rail) {
      return;
    }

    const updateRailIndicator = () => {
      const { scrollLeft, scrollWidth, clientWidth } = rail;
      const maxScroll = Math.max(scrollWidth - clientWidth, 1);
      const visibleRatio = scrollWidth > 0 ? Math.min(clientWidth / scrollWidth, 1) : 1;
      const thumbSize = Math.max(22, visibleRatio * 100);
      const maxOffset = Math.max(100 - thumbSize, 0);
      const thumbOffset = maxScroll > 0 ? (scrollLeft / maxScroll) * maxOffset : 0;

      setRailIndicatorStyle({
        "--feature-rail-thumb-size": `${thumbSize}%`,
        "--feature-rail-thumb-offset": `${thumbOffset}%`
      } as CSSProperties);
    };

    updateRailIndicator();
    rail.addEventListener("scroll", updateRailIndicator, { passive: true });
    window.addEventListener("resize", updateRailIndicator);

    return () => {
      rail.removeEventListener("scroll", updateRailIndicator);
      window.removeEventListener("resize", updateRailIndicator);
    };
  }, []);

  useEffect(() => {
    railButtonRefs.current[activeIndex]?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest"
    });
  }, [activeIndex]);

  const showFeature = (index: number) => {
    if (index === activeIndex) {
      return;
    }

    setDirection(index > activeIndex ? "forward" : "backward");
    setActiveIndex(index);
  };

  return (
    <div className="capabilities-showcase">
      <article className="capabilities-stage">
        <div
          key={`copy-${activeIndex}`}
          className={direction === "forward" ? "capabilities-stage-copy is-slide-forward" : "capabilities-stage-copy is-slide-backward"}
        >
          <span className="capabilities-stage-kicker">{activeFeature.eyebrow}</span>
          <h3>{activeFeature.title}</h3>
          <p>{activeFeature.description}</p>
          <p className="capabilities-stage-support">{activeFeature.support}</p>
          <div className="capabilities-stage-meta" aria-label="Feature position">
            <span>
              {String(activeIndex + 1).padStart(2, "0")} / {String(features.length).padStart(2, "0")}
            </span>
          </div>
        </div>

        <div
          key={`visual-${activeIndex}`}
          className={
            direction === "forward" ? "capabilities-stage-visual is-slide-forward" : "capabilities-stage-visual is-slide-backward"
          }
        >
          {activeFeature.visual}
        </div>
      </article>

      <div ref={railRef} className="capabilities-feature-rail" aria-label="Manageable platform features">
        {features.map((feature, index) => {
          const isActive = index === activeIndex;

          return (
            <button
              key={feature.title}
              ref={(element) => {
                railButtonRefs.current[index] = element;
              }}
              type="button"
              className={isActive ? "feature-rail-item is-active" : "feature-rail-item"}
              onClick={() => showFeature(index)}
              aria-pressed={isActive}
            >
              <span className="feature-rail-icon">
                <FeatureIcon index={index} />
              </span>
              <span className="feature-rail-label">{feature.iconLabel}</span>
            </button>
          );
        })}
      </div>

      <div className="feature-rail-swipe-hint" aria-hidden="true">
        <span className="feature-rail-swipe-track" style={railIndicatorStyle}>
          <span className="feature-rail-swipe-thumb" />
        </span>
      </div>
    </div>
  );
}
