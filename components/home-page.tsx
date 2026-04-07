import Image from "next/image";
import Link from "next/link";

import heroScreenshot from "@/assets/desktop+mobile_cropped-Photoroom.png";
import excelLogo from "@/assets/excel_logo.png";
import googleDriveLogo from "@/assets/google_drive_logo.png";
import whatsAppLogo from "@/assets/WhatsApp_Logo_green.svg";
import CapabilitiesShowcase from "@/components/capabilities-showcase";
import LanguageSwitcher from "@/components/language-switcher";
import PrivacyPolicyModal from "@/components/privacy-policy-modal";
import { getDictionary, type Locale } from "@/lib/i18n";

const calendarLocaleMap: Record<Locale, string> = {
  en: "en",
  "zh-CN": "zh"
};

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
    priceCurrency: "USD"
  }
};

export default function HomePage({ locale }: { locale: Locale }) {
  const currentYear = new Date().getFullYear();
  const dictionary = getDictionary(locale);
  const pageClassName = locale === "zh-CN" ? "page page-zh" : "page";

  return (
    <main className={pageClassName}>
      <PrivacyPolicyModal locale={locale} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />

      <section className="hero">
        <div className="hero-wave" aria-hidden="true" />
        <div className="hero-shell">
          <header className="hero-nav">
            <a href="#top" className="brand" id="top" aria-label={dictionary.ui.homeAriaLabel}>
              manageable<span>.</span>
            </a>
            <div className="hero-actions">
              <LanguageSwitcher currentLocale={locale} />
              <a className="btn nav-btn" href="https://app.manageable.my">
                {dictionary.ui.login}
              </a>
            </div>
          </header>

          <div className="hero-grid">
            <div className="hero-copy">
              <h1 className="hero-title">
                <span className="hero-line hero-line-1">{dictionary.hero.line1}</span>
                <span className="hero-line hero-line-2">{dictionary.hero.line2}</span>
                <span className="hero-line hero-line-3">{dictionary.hero.line3}</span>
              </h1>
              <p className="lead">{dictionary.hero.lead}</p>
              <div className="cta-row">
                <a className="btn primary" href="#book-demo">
                  {dictionary.ui.bookDemo}
                </a>
                <a className="btn ghost" href="#explore">
                  {dictionary.ui.explorePlatform}
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
      </section>

      <section className="pain">
        <p className="eyebrow">{dictionary.pains.eyebrow}</p>
        <h2>{dictionary.pains.title}</h2>
        <p className="pain-lead">{dictionary.pains.lead}</p>
        <ul className="pain-grid">
          {dictionary.pains.items.map((item, index) => (
            <li key={item.title} className={`pain-card pain-card-${index + 1}`}>
              <span className="pain-tag">{item.tag}</span>
              <h3>{item.title}?</h3>
              <p>{item.detail}</p>
              {index === 0 ? (
                <div className="pain-figure pain-figure-logos" aria-hidden="true">
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
                <div className="pain-figure pain-figure-logos" aria-hidden="true">
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
              ) : (
                <div className="pain-figure pain-figure-risk" aria-hidden="true">
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
              )}
              <small>{item.impact}</small>
            </li>
          ))}
        </ul>
      </section>

      <section className="capabilities" id="explore">
        <div className="section-head">
          <p className="eyebrow">{dictionary.capabilities.eyebrow}</p>
          <h2>{dictionary.capabilities.title}</h2>
        </div>
        <CapabilitiesShowcase locale={locale} />
      </section>

      <section className="authority">
        <div className="authority-inner">
          <div className="authority-copy">
            <p className="eyebrow">{dictionary.authority.eyebrow}</p>
            <span className="authority-pill">{dictionary.authority.pill}</span>
            <h2>{dictionary.authority.title}</h2>
            <p>{dictionary.authority.lead}</p>
          </div>
          <div className="authority-grid">
            {dictionary.authority.cards.map((card, index) => (
              <article key={card.title} className={`authority-card card-${index + 1}`}>
                <h3>{card.title}</h3>
                <p>{card.detail}</p>
                <div className="authority-icons authority-icons-centered" aria-hidden="true">
                  <div
                    className={
                      index === 0
                        ? "authority-icon authority-icon-team"
                        : index === 1
                          ? "authority-icon authority-icon-brain"
                          : index === 2
                            ? "authority-icon authority-icon-money"
                            : "authority-icon authority-icon-trend"
                    }
                  >
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        d={
                          index === 0
                            ? "M16 11c1.66 0 3-1.57 3-3.5S17.66 4 16 4s-3 1.57-3 3.5 1.34 3.5 3 3.5Zm-8 0c1.66 0 3-1.57 3-3.5S9.66 4 8 4 5 5.57 5 7.5 6.34 11 8 11Zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5C15 14.17 10.33 13 8 13Zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.95 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5Z"
                            : index === 1
                              ? "M9.5 4.5A3.5 3.5 0 0 0 6 8c0 .4.07.78.2 1.14A3.75 3.75 0 0 0 7 16.5V18a1.5 1.5 0 0 0 1.5 1.5H11V14H9.5v-1.5H11v-2H9.5V9H11V4.5H9.5Zm5 0H13v5h1.5v1.5H13v2h1.5V14H13v5.5h2.5A1.5 1.5 0 0 0 17 18v-1.5a3.75 3.75 0 0 0 .8-7.36c.13-.36.2-.74.2-1.14a3.5 3.5 0 0 0-3.5-3.5Z"
                              : index === 2
                                ? "M11 3h2v2.1c1.72.24 3 1.24 3 3.02h-2.2c0-.74-.64-1.22-1.67-1.22-1.05 0-1.73.44-1.73 1.15 0 .61.43.95 1.96 1.33 2.32.58 3.87 1.3 3.87 3.5 0 1.85-1.37 3.02-3.23 3.28V19h-2v-2.1c-2.02-.25-3.48-1.47-3.48-3.45h2.24c0 .92.82 1.48 1.97 1.48 1.12 0 1.9-.45 1.9-1.22 0-.74-.62-1.06-2.23-1.47-2.14-.54-3.56-1.28-3.56-3.35 0-1.76 1.35-2.93 3.16-3.2V3Z"
                                : "M5 18.5h14v1.5H3V5h2v13.5Zm2-3.25 3.5-3.5 2.5 2.5L18 9.25V12h2V6h-6v2h2.75l-3.75 3.75-2.5-2.5L5.5 13.5 7 15.25Z"
                        }
                      />
                    </svg>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="authority-offer">{dictionary.authority.offer}</div>
        </div>
      </section>

      <section className="strong-cta" id="book-demo">
        <div className="strong-cta-head">
          <h2>{dictionary.cta.title}</h2>
          <h3>{dictionary.cta.subtitle}</h3>
          <p className="cta-subhead">{dictionary.cta.lead}</p>
        </div>

        <div className="strong-cta-layout">
          <article className="calendar-embed" aria-label={dictionary.ui.bookDemoCalendarAria}>
            <header>
              <span>{dictionary.ui.bookDemoCard}</span>
              <small>{dictionary.ui.appointmentCalendar}</small>
            </header>

            <iframe
              src={`https://calendar.zoho.com/eventreqForm/zz080112303a6922b3089c7fbabd12a5fada684c7dc71285226381e6eaae31d7516e6195a9fedd04c8fc76efca74c3747e89264e0a?theme=0&l=${calendarLocaleMap[locale]}&tz=Asia%2FSingapore`}
              title="bentleyteh"
              height="500"
              width="350"
            ></iframe>
          </article>

          <form className="contact-form" action="mailto:2001bentleyteh@gmail.com" method="post" encType="text/plain">
            <label htmlFor="name">{dictionary.ui.formName}</label>
            <input id="name" name="name" type="text" required />

            <label htmlFor="email">{dictionary.ui.formEmail}</label>
            <input id="email" name="email" type="email" required />

            <label htmlFor="company">{dictionary.ui.formCompany}</label>
            <input id="company" name="company" type="text" />

            <label htmlFor="message">{dictionary.cta.messagePrompt}</label>
            <textarea id="message" name="message" rows={4} required />

            <button className="btn primary" type="submit">
              {dictionary.ui.sendEmail}
            </button>

            <p className="form-disclaimer">
              {dictionary.cta.disclaimer}
              <Link href={`/${locale}/privacy-policy`}> {dictionary.ui.privacyPolicy}</Link>.
            </p>

            <p className="contact-number">
              <span className="contact-number-label">{dictionary.ui.contactUsAt}</span>
              <a href="https://wa.me/60126867119" target="_blank" rel="noreferrer">
                <Image className="whatsapp-icon" src={whatsAppLogo} alt="" />
                +6012-6867-119
              </a>
            </p>
          </form>
        </div>
      </section>

      <footer className="site-footer">
        <div className="site-footer-copy">
          <p>{dictionary.footer.lead}</p>
          <p>
            © {currentYear} DTB DATABYTES SOFTWARE SERVICES. {dictionary.footer.rights}
          </p>
        </div>
        <nav className="site-footer-links" aria-label="Legal and support links">
          <Link href={`/${locale}/privacy-policy`}>{dictionary.ui.privacyPolicy}</Link>
          <a href="mailto:2001bentleyteh@gmail.com">{dictionary.ui.contact}</a>
          <a href="https://app.manageable.my">{dictionary.ui.login}</a>
        </nav>
      </footer>
    </main>
  );
}
