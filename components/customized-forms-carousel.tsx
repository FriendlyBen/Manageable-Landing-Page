"use client";

import Image from "next/image";
import { useState } from "react";
import editStatusScreenshot from "@/assets/edit status .png";
import editWorkflowFieldsScreenshot from "@/assets/edit workflow fields.png";
import { getDictionary, type Locale } from "@/lib/i18n";

export default function CustomizedFormsCarousel({ locale }: { locale: Locale }) {
  const dictionary = getDictionary(locale);
  const slides = dictionary.customizedForms.slides;
  const [activeIndex, setActiveIndex] = useState(0);

  const previousSlide = () => {
    setActiveIndex((current) => (current === 0 ? slides.length - 1 : current - 1));
  };

  const nextSlide = () => {
    setActiveIndex((current) => (current === slides.length - 1 ? 0 : current + 1));
  };

  return (
    <div className="custom-forms-preview" aria-label={dictionary.customizedForms.containerAriaLabel}>
      <div className="carousel-topbar">
        <div className="carousel-copy">
          <span className="carousel-kicker">{dictionary.customizedForms.kicker}</span>
          <h3>{slides[activeIndex].title}</h3>
          <p>{slides[activeIndex].description}</p>
        </div>
        <div className="carousel-controls" aria-label={dictionary.customizedForms.controlsAriaLabel}>
          <button type="button" className="carousel-button" onClick={previousSlide} aria-label={dictionary.customizedForms.previousAriaLabel}>
            <span aria-hidden="true">←</span>
          </button>
          <button type="button" className="carousel-button" onClick={nextSlide} aria-label={dictionary.customizedForms.nextAriaLabel}>
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>

      <div className="carousel-stage">
        {activeIndex === 0 ? (
          <div className="carousel-figure builder-figure" aria-label={dictionary.customizedForms.statusPreviewAriaLabel}>
            <div className="builder-screenshot-shell">
              <Image
                src={editStatusScreenshot}
                alt={dictionary.customizedForms.statusPreviewAlt}
                className="builder-screenshot"
                sizes="(max-width: 760px) 88vw, 42vw"
              />
            </div>
          </div>
        ) : (
          <div className="carousel-figure builder-figure" aria-label={dictionary.customizedForms.fieldsPreviewAriaLabel}>
            <div className="builder-screenshot-shell">
              <Image
                src={editWorkflowFieldsScreenshot}
                alt={dictionary.customizedForms.fieldsPreviewAlt}
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
