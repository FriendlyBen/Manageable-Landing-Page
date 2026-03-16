import Link from "next/link";

type PrivacyPolicyContentProps = {
  showBackLink?: boolean;
  showIntro?: boolean;
};

export default function PrivacyPolicyContent({
  showBackLink = false,
  showIntro = true
}: PrivacyPolicyContentProps) {
  const lastUpdated = "March 16, 2026";

  return (
    <>
      {showIntro ? (
        <>
          <p className="policy-eyebrow">Legal</p>
          <h1>Privacy Policy</h1>
          <p className="policy-updated">Last updated: {lastUpdated}</p>
          <p className="policy-lead">
            This Privacy Policy explains how Manageable collects, uses, and protects personal information submitted through
            this website.
          </p>
        </>
      ) : (
        <p className="policy-updated">Last updated: {lastUpdated}</p>
      )}

      <section className="policy-section">
        <h2>1. Information we collect</h2>
        <p>When you contact us or book a demo, we may collect:</p>
        <ul>
          <li>Your name</li>
          <li>Your work email address</li>
          <li>Your company name</li>
          <li>The message or project details you submit</li>
          <li>Any information you choose to share through email, WhatsApp, or calendar booking</li>
        </ul>
      </section>

      <section className="policy-section">
        <h2>2. How we use your information</h2>
        <p>We use this information to:</p>
        <ul>
          <li>Respond to your enquiries</li>
          <li>Schedule and provide demos</li>
          <li>Understand your operational needs and evaluate fit for our services</li>
          <li>Follow up on requested information about Manageable</li>
          <li>Improve our website and business communications</li>
        </ul>
      </section>

      <section className="policy-section">
        <h2>3. Third-party services</h2>
        <p>
          This website may use third-party services such as Google Calendar booking links, email providers, and WhatsApp
          to help us communicate with you. When you use those services, your information may also be processed according to
          their privacy practices.
        </p>
      </section>

      <section className="policy-section">
        <h2>4. Data sharing</h2>
        <p>
          We do not sell your personal information. We may share information with service providers only when needed to
          operate our website, manage communications, or support demo scheduling.
        </p>
      </section>

      <section className="policy-section">
        <h2>5. Data retention</h2>
        <p>
          We keep enquiry and demo-related information for as long as reasonably necessary to respond to you, maintain
          business records, and support ongoing discussions, unless a longer retention period is required by law.
        </p>
      </section>

      <section className="policy-section">
        <h2>6. Your choices</h2>
        <p>
          You may request access to, correction of, or deletion of the personal information you have shared with us,
          subject to any legal or operational obligations we may have to retain certain records.
        </p>
      </section>

      <section className="policy-section">
        <h2>7. Contact</h2>
        <p>
          For privacy-related questions or requests, contact us at{" "}
          <a href="mailto:2001bentleyteh@gmail.com">2001bentleyteh@gmail.com</a>.
        </p>
      </section>

      <section className="policy-section">
        <h2>8. Changes to this policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated
          effective date.
        </p>
      </section>

      {showBackLink ? (
        <div className="policy-actions">
          <Link href="/">Back to home</Link>
        </div>
      ) : null}
    </>
  );
}
