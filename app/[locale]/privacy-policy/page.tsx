import type { Metadata } from "next";
import { notFound } from "next/navigation";

import LanguageSwitcher from "@/components/language-switcher";
import PrivacyPolicyContent from "@/components/privacy-policy-content";
import { defaultLocale, getDictionary, isValidLocale, locales } from "@/lib/i18n";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    return {};
  }

  const dictionary = getDictionary(locale);

  return {
    title: dictionary.metadata.privacyTitle,
    description: dictionary.metadata.privacyDescription,
    alternates: {
      canonical: `/${locale}/privacy-policy`,
      languages: {
        en: "/en/privacy-policy",
        "zh-CN": "/zh-CN/privacy-policy",
        "x-default": `/${defaultLocale}/privacy-policy`
      }
    }
  };
}

export default async function LocalizedPrivacyPolicyPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  return (
    <main className="policy-page">
      <div className="policy-shell">
        <div className="policy-language-bar">
          <LanguageSwitcher currentLocale={locale} pathname="/privacy-policy" />
        </div>
        <PrivacyPolicyContent locale={locale} showBackLink />
      </div>
    </main>
  );
}
