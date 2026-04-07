"use client";

import { useState } from "react";
import { getDictionary, type Locale } from "@/lib/i18n";

export default function ManagementDashboardCarousel({ locale }: { locale: Locale }) {
  const dictionary = getDictionary(locale);
  const slides = dictionary.managementDashboard.slides;
  const [activeIndex, setActiveIndex] = useState(0);

  const previousSlide = () => {
    setActiveIndex((current) => (current === 0 ? slides.length - 1 : current - 1));
  };

  const nextSlide = () => {
    setActiveIndex((current) => (current === slides.length - 1 ? 0 : current + 1));
  };

  return (
    <div className="management-preview" aria-label={dictionary.managementDashboard.containerAriaLabel}>
      <div className="report-preview-top">
        <div className="report-tabs" aria-label={dictionary.managementDashboard.tabsAriaLabel}>
          {slides.map((slide, index) => (
            <button
              key={slide.tab}
              type="button"
              className={index === activeIndex ? "report-tab is-active" : "report-tab"}
              onClick={() => setActiveIndex(index)}
              aria-pressed={index === activeIndex}
            >
              {slide.tab}
            </button>
          ))}
        </div>
        <div className="dashboard-controls" aria-label={dictionary.managementDashboard.controlsAriaLabel}>
          <button type="button" className="dashboard-arrow" onClick={previousSlide} aria-label={dictionary.managementDashboard.previousAriaLabel}>
            <span aria-hidden="true">←</span>
          </button>
          <button type="button" className="dashboard-arrow" onClick={nextSlide} aria-label={dictionary.managementDashboard.nextAriaLabel}>
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>

      <div className="management-sheet">
        {activeIndex === 0 ? (
          <div className="finance-panel">
            <div className="finance-head">
              <strong>{slides[0].title}</strong>
              <small>{slides[0].subtitle}</small>
            </div>
            <div className="finance-body">
              <div className="finance-legend">
                <span className="legend-item legend-blue">Original Contract</span>
                <span className="legend-item legend-green">Safety Provision</span>
                <span className="legend-item legend-gold">CEs incl Fee</span>
                <span className="legend-item legend-purple">Tendered Total</span>
              </div>
              <div className="finance-bars" aria-hidden="true">
                <div className="stacked-bar">
                  <span className="seg seg-purple" />
                  <span className="seg seg-gold" />
                  <span className="seg seg-green" />
                  <span className="seg seg-blue" />
                </div>
                <div className="stacked-bar is-tall">
                  <span className="seg seg-purple" />
                  <span className="seg seg-gold" />
                  <span className="seg seg-green" />
                  <span className="seg seg-blue" />
                </div>
              </div>
            </div>
          </div>
        ) : activeIndex === 1 ? (
          <div className="curve-panel">
            <div className="curve-head">
              <strong>{slides[1].title}</strong>
              <small>{slides[1].subtitle}</small>
            </div>
            <div className="curve-chart" aria-hidden="true">
              <div className="curve-bars">
                {Array.from({ length: 16 }).map((_, itemIndex) => (
                  <span
                    key={itemIndex}
                    className="curve-bar"
                    style={{ height: `${28 + ((itemIndex * 11) % 88)}px` }}
                  />
                ))}
              </div>
              <span className="curve-line blue-line" />
              <span className="curve-line red-line" />
            </div>
          </div>
        ) : (
          <div className="quotation-panel">
            <div className="quotation-head">
              <strong>{slides[2].title}</strong>
              <small>{slides[2].subtitle}</small>
            </div>
            <div className="quotation-body">
              <div className="quotation-pie" aria-hidden="true" />
              <div className="quotation-table">
                <div className="report-table-row report-table-head">
                  <span>CE No.</span>
                  <span>Amount</span>
                  <span>Status</span>
                </div>
                <div className="report-table-row">
                  <span>CE-001</span>
                  <span>744k</span>
                  <span>Implemented</span>
                </div>
                <div className="report-table-row">
                  <span>CE-002</span>
                  <span>212k</span>
                  <span>Assessment</span>
                </div>
                <div className="report-table-row">
                  <span>CE-003</span>
                  <span>55k</span>
                  <span>Pending</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
