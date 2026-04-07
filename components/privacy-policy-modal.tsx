"use client";

import { useEffect, useState } from "react";

import PrivacyPolicyContent from "@/components/privacy-policy-content";
import { getDictionary, type Locale } from "@/lib/i18n";

const PRIVACY_MODAL_KEY = "manageable-privacy-policy-seen-v2";

export default function PrivacyPolicyModal({ locale }: { locale: Locale }) {
  const [isVisible, setIsVisible] = useState(false);
  const dictionary = getDictionary(locale);

  useEffect(() => {
    const hasSeenPolicy = window.localStorage.getItem(PRIVACY_MODAL_KEY);

    if (!hasSeenPolicy) {
      setIsVisible(true);
    }
  }, []);

  useEffect(() => {
    if (!isVisible) {
      return;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isVisible]);

  const closeModal = () => {
    window.localStorage.setItem(PRIVACY_MODAL_KEY, "true");
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="privacy-modal" role="dialog" aria-modal="true" aria-labelledby="privacy-modal-title">
      <div className="privacy-modal-backdrop" aria-hidden="true" />
      <div className="privacy-modal-panel">
        <button
          type="button"
          className="privacy-modal-close"
          onClick={closeModal}
          aria-label={dictionary.ui.closePrivacyPolicy}
        >
          X
        </button>
        <div className="privacy-modal-header">
          <p className="privacy-modal-kicker">{dictionary.ui.beforeContinue}</p>
          <h2 id="privacy-modal-title">{dictionary.privacyModal.title}</h2>
          <p className="privacy-modal-lead">{dictionary.privacyModal.lead}</p>
        </div>
        <div className="privacy-modal-body">
          <div className="privacy-modal-scrollbox">
            <div className="privacy-modal-scroll">
              <PrivacyPolicyContent locale={locale} showIntro={false} />
            </div>
          </div>
        </div>
        <div className="privacy-modal-footer">
          <div className="privacy-modal-actions">
            <button type="button" className="btn primary privacy-modal-accept" onClick={closeModal}>
              {dictionary.ui.continue}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
