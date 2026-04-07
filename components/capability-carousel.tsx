"use client";

import { useState } from "react";

import { getDictionary, type Locale } from "@/lib/i18n";

type CapabilityCarouselProps = {
  compact?: boolean;
  mode?: "workflow" | "projects";
  locale: Locale;
};

export default function CapabilityCarousel({
  compact = false,
  mode = "workflow",
  locale
}: CapabilityCarouselProps) {
  const dictionary = getDictionary(locale);
  const baseSlides = mode === "projects" ? dictionary.workflowCarousel.projectSlides : dictionary.workflowCarousel.workflowSlides;
  const slides = baseSlides.map((slide, index) => ({
    ...slide,
    variant:
      mode === "projects"
        ? index === 0
          ? "overview"
          : index === 1
            ? "status"
            : "diagram"
        : index === 0
          ? "form"
          : "record"
  }));
  const [activeIndex, setActiveIndex] = useState(0);

  const previousSlide = () => {
    setActiveIndex((current) => (current === 0 ? slides.length - 1 : current - 1));
  };

  const nextSlide = () => {
    setActiveIndex((current) => (current === slides.length - 1 ? 0 : current + 1));
  };

  return (
    <div className={compact ? "capability-carousel is-compact" : "capability-carousel"} aria-label={dictionary.workflowCarousel.containerAriaLabel}>
      <div className="carousel-topbar">
        <div className="carousel-copy">
          <span className="carousel-kicker">{dictionary.workflowCarousel.kicker}</span>
          <h3>{slides[activeIndex].title}</h3>
          <p>{slides[activeIndex].description}</p>
        </div>
        <div className="carousel-controls" aria-label={dictionary.workflowCarousel.controlsAriaLabel}>
          <button type="button" className="carousel-button" onClick={previousSlide} aria-label={dictionary.workflowCarousel.previousAriaLabel}>
            <span aria-hidden="true">←</span>
          </button>
          <button type="button" className="carousel-button" onClick={nextSlide} aria-label={dictionary.workflowCarousel.nextAriaLabel}>
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>

      <div className="carousel-stage">
        {activeIndex === 0 ? (
          mode === "workflow" ? (
            <div className="carousel-figure form-figure" aria-label="Create document screen preview">
              <div className="figure-window">
                <div className="figure-window-actions">
                  <button type="button">Cancel</button>
                  <button type="button" className="is-primary">
                    Save
                  </button>
                </div>
                <div className="figure-header">
                  <strong>Create Document</strong>
                  <span>Fill in the details then save to create a new record.</span>
                </div>
                <div className="figure-fields">
                  <div className="field-row field-wide">
                    <label>Title</label>
                    <span>e.g. Safety Assessment</span>
                  </div>
                  <div className="field-grid">
                    <div className="field-row">
                      <label>Day</label>
                      <span>Select...</span>
                    </div>
                    <div className="field-row">
                      <label>Date</label>
                      <span>mm/dd/yyyy --:--</span>
                    </div>
                  </div>
                  <div className="field-row field-wide">
                    <label>Contractor Name</label>
                    <span>Contractor Boy</span>
                  </div>
                  <div className="field-grid">
                    <div className="field-row">
                      <label>Location</label>
                      <span>Bukit Jalil</span>
                    </div>
                    <div className="field-row">
                      <label>Weather</label>
                      <span>Rainy</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="carousel-figure project-overview-figure" aria-label="Project overview preview">
              <div className="overview-panel">
                <div className="overview-split">
                  <div className="heatmap-card">
                    <div className="heatmap-head">
                      <strong>Heatmap</strong>
                    </div>
                    <div className="month-row">
                      <span>Jan</span>
                      <span>Mar</span>
                      <span>May</span>
                      <span>Jul</span>
                      <span>Sep</span>
                      <span>Nov</span>
                    </div>
                    <div className="heatmap-grid" aria-hidden="true">
                      {Array.from({ length: 48 }).map((_, index) => (
                        <span key={index} className={`heat-${(index % 5) + 1}`} />
                      ))}
                    </div>
                  </div>

                  <div className="activity-card">
                    <strong>Recent Activity</strong>
                    <div className="activity-item">
                      <span className="activity-icon doc">D</span>
                      <p>Form submitted by Ali</p>
                    </div>
                    <div className="activity-item">
                      <span className="activity-icon cam">P</span>
                      <p>Photo uploaded by Sarah</p>
                    </div>
                    <div className="activity-item">
                      <span className="activity-icon tick">C</span>
                      <p>Milestone marked complete</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        ) : activeIndex === 1 ? (
          mode === "workflow" ? (
            <div className="carousel-figure record-figure" aria-label="Structured site diary record preview">
              <div className="record-toolbar">
                <span className="workflow-pill">Workflow</span>
                <span className="qs-pill">Pass to QS</span>
              </div>
              <div className="record-sheet">
                <strong>First JKR Site Diary</strong>
                <div className="record-grid">
                  <div className="record-cell">
                    <label>Day</label>
                    <span>Selasa</span>
                  </div>
                  <div className="record-cell">
                    <label>Date</label>
                    <span>2026-01-06T08:51:49.956Z</span>
                  </div>
                  <div className="record-cell">
                    <label>Contractor Name</label>
                    <span>Contractor Boy</span>
                  </div>
                  <div className="record-cell">
                    <label>Location</label>
                    <span>Bukit Jalil</span>
                  </div>
                  <div className="record-cell">
                    <label>Number of Contract</label>
                    <span>5</span>
                  </div>
                  <div className="record-cell">
                    <label>Weather</label>
                    <span>Hujan</span>
                  </div>
                </div>
                <div className="record-table">
                  <div className="record-table-head">Weather Table</div>
                  <div className="record-table-row is-head">
                    <span>#</span>
                    <span>Jam</span>
                    <span>Cuaca</span>
                  </div>
                  <div className="record-table-row">
                    <span>1</span>
                    <span>7</span>
                    <span>Cerah</span>
                  </div>
                  <div className="record-table-row">
                    <span>2</span>
                    <span>8</span>
                    <span>Hujan</span>
                  </div>
                  <div className="record-table-row">
                    <span>3</span>
                    <span>9</span>
                    <span>Hujan</span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="carousel-figure status-figure" aria-label="Workflow approval history preview">
              <div className="status-stack">
                <div className="status-card">
                  <span className="status-label">Status</span>
                  <button type="button" className="status-action approve">
                    Approve Status
                  </button>
                  <button type="button" className="status-action reject">
                    Revert Status
                  </button>
                </div>

                <div className="history-card">
                  <div className="history-head">
                    <span>Log History</span>
                    <small>3 entries</small>
                  </div>
                  <div className="history-list">
                    <div className="history-line is-blue" />
                    <div className="history-item">
                      <span className="history-dot is-blue" />
                      <div className="history-box">
                        <strong>Initial → Pass to QS</strong>
                        <small>Approve · 1/26/2026, 11:45 AM</small>
                      </div>
                    </div>
                    <div className="history-item">
                      <span className="history-dot is-blue" />
                      <div className="history-box">
                        <strong>Pass to QS → Pass to Inspector</strong>
                        <small>Approve · 1/26/2026, 1:13 PM</small>
                      </div>
                    </div>
                    <div className="history-item">
                      <span className="history-dot is-amber" />
                      <div className="history-box">
                        <strong>Pass to Inspector → Pass to QS</strong>
                        <small>Revert · 1/27/2026, 9:18 AM</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        ) : (
          <div className="carousel-figure diagram-figure" aria-label="Workflow map preview">
            <div className="diagram-board">
              <div className="diagram-node diagram-node-start">Start</div>
              <div className="diagram-node diagram-node-mid">Review</div>
              <div className="diagram-node diagram-node-end">Approved</div>
              <span className="diagram-line diagram-line-1" />
              <span className="diagram-line diagram-line-2" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
