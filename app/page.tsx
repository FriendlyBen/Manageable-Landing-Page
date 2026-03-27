import CapabilitiesShowcase from "@/components/capabilities-showcase";
import PrivacyPolicyModal from "@/components/privacy-policy-modal";
import Image from "next/image";
import Link from "next/link";
import heroScreenshot from "@/assets/desktop+mobile_cropped-Photoroom.png";
import excelLogo from "@/assets/excel_logo.png";
import googleDriveLogo from "@/assets/google_drive_logo.png";
import whatsAppLogo from "@/assets/WhatsApp_Logo_green.svg";

const pains = [
  {
    tag: "Track 1 · Data Fragmentation",
    title: "Site records spread across multiple Tools and Departments",
    detail:
      "Daily updates live in disconnected channels, which makes audit trails weak and handovers inconsistent.",
    impact: "Leads to reporting blind spots",
  },
  {
    tag: "Track 2 · Reporting Delay",
    title: "Reports compiled manually every month",
    detail:
      "Your team spends end-of-month cycles stitching files instead of improving site execution and controls.",
    impact: "Creates recurring reporting backlog",
  },
  {
    tag: "Track 3 · Decision Risk",
    title: "Decisions made using outdated information",
    detail:
      "Management decisions rely on stale summaries, so risks are often visible only after cost and schedule impact.",
    impact: "Delays intervention on critical issues",
  },
];

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Manageable",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "Construction management SaaS that structures site data and automates reporting for contractors and developers.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
};

export default function HomePage() {
  const currentYear = new Date().getFullYear();

  return (
    <main className="page">
      <PrivacyPolicyModal />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />

      <section className="hero">
        <div className="hero-wave" aria-hidden="true" />
        <div className="hero-shell">
          <header className="hero-nav">
            <a
              href="#top"
              className="brand"
              id="top"
              aria-label="Manageable homepage"
            >
              manageable<span>.</span>
            </a>
            <div className="hero-actions">
              <a className="text-link" href="https://app.manageable.my">
                Log in
              </a>
              <a className="btn nav-btn" href="#book-demo">
                Join now
              </a>
            </div>
          </header>

          <div className="hero-grid">
            <div className="hero-copy">
              {/* <p className="eyebrow">Construction Management SaaS</p> */}
              <h1 className="hero-title">
                <span className="hero-line hero-line-1">
                  From Site Records to
                </span>
                <span className="hero-line hero-line-2">
                  Management Reports
                </span>
                <span className="hero-line hero-line-3">— Automatically.</span>
              </h1>
              <p className="lead">
                Built for G7 Main Contractors, Developers, and Project Teams
                managing complex sites.
              </p>
              <div className="cta-row">
                <a className="btn primary" href="#book-demo">
                  Book a demo
                </a>
                <a className="btn ghost" href="#explore">
                  Explore the platform
                </a>
              </div>
            </div>

            <div className="hero-visual" aria-hidden="true">
              <Image
                src={heroScreenshot}
                alt=""
                className="hero-shot"
                priority
                sizes="(max-width: 760px) 92vw, 42vw"
              />
            </div>
          </div>
        </div>
        {/* Area to put clients */}
        {/* <div className="trust-row" aria-label="Trusted by project teams">
          <span>ProjectCore</span>
          <span>BuildSync</span>
          <span>InfraFlow</span>
          <span>SiteSphere</span>
          <span>ConstructIQ</span>
        </div> */}
      </section>

      <section className="pain">
        <p className="eyebrow">Still managing in old fashion?</p>
        <h2>If this looks familiar, reporting risk is already compounding.</h2>
        <p className="pain-lead">
          Small delays in field reporting quickly become costly blind spots for
          management decisions.
        </p>
        <ul className="pain-grid">
          {pains.map((item, index) => (
            <li key={item.title} className={`pain-card pain-card-${index + 1}`}>
              <span className="pain-tag">{item.tag}</span>
              <h3>{item.title}?</h3>
              <p>{item.detail}</p>
              {index === 0 ? (
                <div
                  className="pain-figure pain-figure-logos"
                  aria-hidden="true"
                >
                  <div className="pain-logo pain-logo-whatsapp">
                    <Image src={whatsAppLogo} alt="" />
                  </div>
                  <div className="pain-logo pain-logo-excel">
                    <Image src={excelLogo} alt="" />
                  </div>
                  <div className="pain-logo pain-logo-drive">
                    <Image src={googleDriveLogo} alt="" />
                  </div>
                </div>
              ) : index === 1 ? (
                <div
                  className="pain-figure pain-figure-logos"
                  aria-hidden="true"
                >
                  <div className="pain-symbol pain-symbol-sheet">
                    <span className="sheet-line sheet-line-1" />
                    <span className="sheet-line sheet-line-2" />
                    <span className="sheet-line sheet-line-3" />
                  </div>
                  <div className="pain-symbol pain-symbol-clock">
                    <span className="clock-hand clock-hand-hour" />
                    <span className="clock-hand clock-hand-minute" />
                  </div>
                  <div className="pain-symbol pain-symbol-gear">
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M19.14 12.94c.04-.31.06-.63.06-.94s-.02-.63-.06-.94l2.03-1.58a.5.5 0 0 0 .12-.64l-1.92-3.32a.5.5 0 0 0-.6-.22l-2.39.96a7.2 7.2 0 0 0-1.63-.94l-.36-2.54A.5.5 0 0 0 13.9 2h-3.8a.5.5 0 0 0-.49.42l-.36 2.54c-.58.22-1.12.53-1.63.94l-2.39-.96a.5.5 0 0 0-.6.22L2.71 8.48a.5.5 0 0 0 .12.64l2.03 1.58c-.04.31-.06.63-.06.94s.02.63.06.94l-2.03 1.58a.5.5 0 0 0-.12.64l1.92 3.32a.5.5 0 0 0 .6.22l2.39-.96c.5.4 1.05.72 1.63.94l.36 2.54a.5.5 0 0 0 .49.42h3.8a.5.5 0 0 0 .49-.42l.36-2.54c.58-.22 1.13-.54 1.63-.94l2.39.96a.5.5 0 0 0 .6-.22l1.92-3.32a.5.5 0 0 0-.12-.64l-2.03-1.58ZM12 15.5A3.5 3.5 0 1 1 12 8a3.5 3.5 0 0 1 0 7.5Z" />
                    </svg>
                  </div>
                </div>
              ) : index === 2 ? (
                <div
                  className="pain-figure pain-figure-risk"
                  aria-hidden="true"
                >
                  <div className="pain-symbol pain-symbol-warning">!</div>
                  <div className="pain-symbol pain-symbol-bars">
                    <span className="chart-bar chart-bar-1" />
                    <span className="chart-bar chart-bar-2" />
                    <span className="chart-bar chart-bar-3" />
                  </div>
                  <div className="pain-symbol pain-symbol-pie">
                    <div className="chart-pie" />
                  </div>
                </div>
              ) : (
                <div className="pain-figure" aria-hidden="true" />
              )}
              <small>{item.impact}</small>
            </li>
          ))}
        </ul>
      </section>

      <section className="capabilities" id="explore">
        <div className="section-head">
          <p className="eyebrow">What your teams can do with Manageable</p>
          <h2>
            Simple execution flow for construction teams that need clarity now.
          </h2>
        </div>
        <CapabilitiesShowcase />
      </section>

      <section className="authority">
        <div className="authority-inner">
          <div className="authority-copy">
            <p className="eyebrow">Why Manageable</p>
            <span className="authority-pill">Software + Service Execution</span>
            <h2>
              We do not just sell software. We help run the digitization with
              you.
            </h2>
            <p>
              Manageable combines platform + execution support so your team gets
              adoption, working workflows, and measurable operational
              improvements faster.
            </p>
          </div>
          <div className="authority-grid">
            <article className="authority-card card-1">
              <h3>Software + Service Team</h3>
              <p>
                Hands-on support labour to implement, configure, and stabilize
                reporting operations end-to-end.
              </p>
              <div
                className="authority-icons authority-icons-centered"
                aria-hidden="true"
              >
                <div className="authority-icon authority-icon-team">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M16 11c1.66 0 3-1.57 3-3.5S17.66 4 16 4s-3 1.57-3 3.5 1.34 3.5 3 3.5Zm-8 0c1.66 0 3-1.57 3-3.5S9.66 4 8 4 5 5.57 5 7.5 6.34 11 8 11Zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5C15 14.17 10.33 13 8 13Zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.95 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5Z" />
                  </svg>
                </div>
              </div>
            </article>
            <article className="authority-card card-2">
              <h3>Customised to Your Operations</h3>
              <p>
                We tailor workflows to your current project execution model, not
                a generic template.
              </p>
              <div
                className="authority-icons authority-icons-centered"
                aria-hidden="true"
              >
                <div className="authority-icon authority-icon-brain">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M9.5 4.5A3.5 3.5 0 0 0 6 8c0 .4.07.78.2 1.14A3.75 3.75 0 0 0 7 16.5V18a1.5 1.5 0 0 0 1.5 1.5H11V14H9.5v-1.5H11v-2H9.5V9H11V4.5H9.5Zm5 0H13v5h1.5v1.5H13v2h1.5V14H13v5.5h2.5A1.5 1.5 0 0 0 17 18v-1.5a3.75 3.75 0 0 0 .8-7.36c.13-.36.2-.74.2-1.14a3.5 3.5 0 0 0-3.5-3.5Z" />
                  </svg>
                </div>
              </div>
            </article>
            <article className="authority-card card-3">
              <h3>Founders Program Bargain</h3>
              <p>
                Early partners get founder-stage pricing with high-value rollout
                scope while slots remain open.
              </p>
              <div
                className="authority-icons authority-icons-centered"
                aria-hidden="true"
              >
                <div className="authority-icon authority-icon-money">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M11 3h2v2.1c1.72.24 3 1.24 3 3.02h-2.2c0-.74-.64-1.22-1.67-1.22-1.05 0-1.73.44-1.73 1.15 0 .61.43.95 1.96 1.33 2.32.58 3.87 1.3 3.87 3.5 0 1.85-1.37 3.02-3.23 3.28V19h-2v-2.1c-2.02-.25-3.48-1.47-3.48-3.45h2.24c0 .92.82 1.48 1.97 1.48 1.12 0 1.9-.45 1.9-1.22 0-.74-.62-1.06-2.23-1.47-2.14-.54-3.56-1.28-3.56-3.35 0-1.76 1.35-2.93 3.16-3.2V3Z" />
                  </svg>
                </div>
              </div>
            </article>
            <article className="authority-card card-4">
              <h3>Digitize and Operate Continuously</h3>
              <p>
                We keep improving your digital operations after go-live so the
                system keeps compounding value.
              </p>
              <div
                className="authority-icons authority-icons-centered"
                aria-hidden="true"
              >
                <div className="authority-icon authority-icon-trend">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M5 18.5h14v1.5H3V5h2v13.5Zm2-3.25 3.5-3.5 2.5 2.5L18 9.25V12h2V6h-6v2h2.75l-3.75 3.75-2.5-2.5L5.5 13.5 7 15.25Z" />
                  </svg>
                </div>
              </div>
            </article>
          </div>
          <div className="authority-offer">
            Founders Program: limited onboarding slots with priority support.
          </div>
        </div>
      </section>

      {/* <section className="soft-cta">
        <h2>See how it works before you commit.</h2>
        <p>Review sample reports and understand your future data flow from site to management.</p>
        <a className="btn ghost" href="#explore">
          View sample reports
        </a>
      </section> */}

      {/* <section className="vision">
        <p>We are not adding another tool. We are structuring how construction data works.</p>
      </section> */}

      <section className="strong-cta" id="book-demo">
        <div className="strong-cta-head">
          <h2>More than a tool, take control of your construction data.</h2>
          <h3>Ready to run reporting with less friction?</h3>
          <p className="cta-subhead">
            Book an appointment or send us an email for a demo.
          </p>
        </div>

        <div className="strong-cta-layout">
          <article
            className="calendar-embed"
            aria-label="Google Calendar appointment schedule"
          >
            <header>
              <span>Book A Demo</span>
              <small>Appointment Calendar</small>
            </header>

            <iframe
              src="https://calendar.zoho.com/eventreqForm/zz080112303a6922b3089c7fbabd12a5fada684c7dc71285226381e6eaae31d7516e6195a9fedd04c8fc76efca74c3747e89264e0a?theme=0&l=en&tz=Asia%2FSingapore"
              title="bentleyteh"
              height="500"
              width="350"
            ></iframe>
          </article>

          <form
            className="contact-form"
            action="mailto:2001bentleyteh@gmail.com"
            method="post"
            encType="text/plain"
          >
            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" required />

            <label htmlFor="email">Work Email</label>
            <input id="email" name="email" type="email" required />

            <label htmlFor="company">Company</label>
            <input id="company" name="company" type="text" />

            <label htmlFor="message">What do you want to digitize first?</label>
            <textarea id="message" name="message" rows={4} required />

            <button className="btn primary" type="submit">
              Send Email
            </button>

            <p className="form-disclaimer">
              By contacting us, you agree that we may use your details to
              respond to your enquiry and arrange a demo.
              <Link href="/privacy-policy"> Read our Privacy Policy</Link>.
            </p>

            <p className="contact-number">
              <span className="contact-number-label">Or, contact us at:</span>
              <a
                href="https://wa.me/60126867119"
                target="_blank"
                rel="noreferrer"
              >
                <Image className="whatsapp-icon" src={whatsAppLogo} alt="" />
                +6012-6867-119
              </a>
            </p>
          </form>
        </div>
      </section>

      <footer className="site-footer">
        <div className="site-footer-copy">
          <p>
            Manageable helps construction teams structure site data and automate
            reporting workflows.
          </p>
          <p>
            © {currentYear} DTB DATABYTES SOFTWARE SERVICES. All rights
            reserved.
          </p>
        </div>
        <nav className="site-footer-links" aria-label="Legal and support links">
          <Link href="/privacy-policy">Privacy Policy</Link>
          <a href="mailto:2001bentleyteh@gmail.com">Contact</a>
          <a href="https://app.manageable.my">Log in</a>
        </nav>
      </footer>
    </main>
  );
}
