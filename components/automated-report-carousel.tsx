"use client";

import { useState } from "react";

const slides = [
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
] as const;

export default function AutomatedReportCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const previousSlide = () => {
    setActiveIndex((current) => (current === 0 ? slides.length - 1 : current - 1));
  };

  const nextSlide = () => {
    setActiveIndex((current) => (current === slides.length - 1 ? 0 : current + 1));
  };

  return (
    <div className="report-preview" aria-label="Automated report preview">
      <div className="report-preview-top">
        <div className="report-tabs" aria-label="Generated report types">
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
        <div className="dashboard-controls" aria-label="Report navigation">
          <button type="button" className="dashboard-arrow" onClick={previousSlide} aria-label="Previous report">
            <span aria-hidden="true">←</span>
          </button>
          <button type="button" className="dashboard-arrow" onClick={nextSlide} aria-label="Next report">
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>

      <div className="report-sheet is-carousel">
        <div className="report-sheet-head">
          <strong>{slides[activeIndex].title}</strong>
          <span>{slides[activeIndex].subtitle}</span>
        </div>

        {activeIndex === 0 ? (
          <div className="report-grid-sheet daily-report-sheet">
            <div className="sheet-meta">
              <span>Isnin</span>
              <span>Lokasi: Bukit Jalil</span>
              <span>Kontraktor: Contractor A</span>
            </div>
            <div className="sheet-weather">
              <div className="weather-pill">Cuaca: Cerah</div>
              <div className="weather-pill is-rain">Hujan: 3 jam</div>
              <div className="weather-pill">Tapak: Basah</div>
            </div>
            <div className="sheet-table">
              <div className="mini-grid-row is-head">
                <span>Jam</span>
                <span>07</span>
                <span>09</span>
                <span>11</span>
                <span>13</span>
              </div>
              <div className="mini-grid-row">
                <span>Cuaca</span>
                <span>Cerah</span>
                <span>Cerah</span>
                <span>Hujan</span>
                <span>-</span>
              </div>
            </div>
            <div className="sheet-columns">
              <div className="sheet-box">
                <strong>Tenaga Kerja</strong>
                <div className="mini-grid-row is-head">
                  <span>Trade</span>
                  <span>M</span>
                  <span>C</span>
                  <span>J</span>
                </div>
                <div className="mini-grid-row">
                  <span>QS</span>
                  <span>0</span>
                  <span>2</span>
                  <span>2</span>
                </div>
                <div className="mini-grid-row">
                  <span>ID</span>
                  <span>1</span>
                  <span>3</span>
                  <span>4</span>
                </div>
              </div>
              <div className="sheet-box">
                <strong>Kerja Dilaksanakan</strong>
                <p>Hari ini kerja plaster ceiling lobby dan corridor berjalan seperti dirancang.</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="report-grid-sheet claim-report-sheet">
            <div className="sheet-meta">
              <span>Claim No: 4</span>
              <span>Month: April</span>
              <span>Prepared By: Benz</span>
            </div>
            <div className="sheet-table">
              <div className="mini-grid-row is-head">
                <span>Description</span>
                <span>Contract</span>
                <span>Current</span>
                <span>Total %</span>
              </div>
              <div className="mini-grid-row">
                <span>Preliminaries</span>
                <span>171k</span>
                <span>10k</span>
                <span>91.23</span>
              </div>
              <div className="mini-grid-row">
                <span>Upper Floor</span>
                <span>197k</span>
                <span>34k</span>
                <span>38.79</span>
              </div>
              <div className="mini-grid-row">
                <span>Works</span>
                <span>470k</span>
                <span>56k</span>
                <span>69.34</span>
              </div>
            </div>
            <div className="sheet-columns">
              <div className="sheet-box">
                <strong>Monthly Claim</strong>
                <p>RM125,323.94</p>
              </div>
              <div className="sheet-box">
                <strong>Total Certified</strong>
                <p>RM5,741,838.79</p>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="report-insight">
        <span className="report-insight-label">Auto-Generated</span>
        <p>Site teams capture once, and Manageable structures the output into operational and financial report formats.</p>
      </div>
    </div>
  );
}
