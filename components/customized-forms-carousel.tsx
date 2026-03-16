"use client";

import Image from "next/image";
import { useState } from "react";
import editStatusScreenshot from "@/assets/edit status .png";
import editWorkflowFieldsScreenshot from "@/assets/edit workflow fields.png";

const slides = [
  {
    title: "Customize statuses for every workflow step",
    description: "Define the document states, actions, and handoff logic that match your real operating process."
  },
  {
    title: "Edit any document field without rebuilding the system",
    description: "Add, rename, reorder, or remove fields so each form fits the exact data your team needs to capture."
  }
] as const;

export default function CustomizedFormsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const previousSlide = () => {
    setActiveIndex((current) => (current === 0 ? slides.length - 1 : current - 1));
  };

  const nextSlide = () => {
    setActiveIndex((current) => (current === slides.length - 1 ? 0 : current + 1));
  };

  return (
    <div className="custom-forms-preview" aria-label="Customized forms preview">
      <div className="carousel-topbar">
        <div className="carousel-copy">
          <span className="carousel-kicker">Form Builder</span>
          <h3>{slides[activeIndex].title}</h3>
          <p>{slides[activeIndex].description}</p>
        </div>
        <div className="carousel-controls" aria-label="Form builder navigation">
          <button type="button" className="carousel-button" onClick={previousSlide} aria-label="Previous form builder preview">
            <span aria-hidden="true">←</span>
          </button>
          <button type="button" className="carousel-button" onClick={nextSlide} aria-label="Next form builder preview">
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>

      <div className="carousel-stage">
        {activeIndex === 0 ? (
          <div className="carousel-figure builder-figure" aria-label="Workflow status customization preview">
            <div className="builder-screenshot-shell">
              <Image
                src={editStatusScreenshot}
                alt="Workflow status editor showing customizable document statuses and transitions"
                className="builder-screenshot"
                sizes="(max-width: 760px) 88vw, 42vw"
              />
            </div>
          </div>
        ) : (
          <div className="carousel-figure builder-figure" aria-label="Document field customization preview">
            <div className="builder-screenshot-shell">
              <Image
                src={editWorkflowFieldsScreenshot}
                alt="Workflow form editor showing customizable document fields and settings"
                className="builder-screenshot"
                sizes="(max-width: 760px) 88vw, 42vw"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
