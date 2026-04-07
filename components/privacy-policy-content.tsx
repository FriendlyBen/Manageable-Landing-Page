import Link from "next/link";
import { getDictionary, type Locale } from "@/lib/i18n";

type PrivacyPolicyContentProps = {
  locale: Locale;
  showBackLink?: boolean;
  showIntro?: boolean;
};

export default function PrivacyPolicyContent({
  locale,
  showBackLink = false,
  showIntro = true
}: PrivacyPolicyContentProps) {
  const dictionary = getDictionary(locale);
  const lastUpdated = "March 16, 2026";

  return (
    <>
      {showIntro ? (
        <>
          <p className="policy-eyebrow">{dictionary.privacyPolicy.eyebrow}</p>
          <h1>{dictionary.privacyPolicy.title}</h1>
          <p className="policy-updated">
            {dictionary.privacyPolicy.updatedLabel} {lastUpdated}
          </p>
          <p className="policy-lead">{dictionary.privacyPolicy.lead}</p>
        </>
      ) : (
        <p className="policy-updated">
          {dictionary.privacyPolicy.updatedLabel} {lastUpdated}
        </p>
      )}

      {dictionary.privacyPolicy.sections.map((section) => (
        <section key={section.title} className="policy-section">
          <h2>{section.title}</h2>
          <p>
            {section.intro}
            {section.isContact ? (
              <>
                {" "}
                <a href="mailto:2001bentleyteh@gmail.com">2001bentleyteh@gmail.com</a>.
              </>
            ) : null}
          </p>
          {section.items ? (
            <ul>
              {section.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : null}
        </section>
      ))}

      {showBackLink ? (
        <div className="policy-actions">
          <Link href={`/${locale}`}>{dictionary.ui.backToHome}</Link>
        </div>
      ) : null}
    </>
  );
}
