import Link from "next/link";

import { getLocaleLabel, locales, type Locale } from "@/lib/i18n";

type LanguageSwitcherProps = {
  currentLocale: Locale;
  pathname?: string;
};

export default function LanguageSwitcher({
  currentLocale,
  pathname = ""
}: LanguageSwitcherProps) {
  return (
    <nav className="language-switcher" aria-label="Language selector">
      {locales.map((locale) => (
        <Link
          key={locale}
          href={`/${locale}${pathname}`}
          hrefLang={locale}
          className={locale === currentLocale ? "language-option is-active" : "language-option"}
        >
          {getLocaleLabel(locale)}
        </Link>
      ))}
    </nav>
  );
}
