import type { Metadata } from "next";
import { notFound } from "next/navigation";

import HomePage from "@/components/home-page";
import { defaultLocale, getDictionary, isValidLocale, locales } from "@/lib/i18n";

const siteUrl = "https://manageable.my";

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
    title: dictionary.metadata.homeTitle,
    description: dictionary.metadata.homeDescription,
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: "/en",
        "zh-CN": "/zh-CN",
        "x-default": `/${defaultLocale}`
      }
    },
    openGraph: {
      title: dictionary.metadata.homeTitle,
      description: dictionary.metadata.homeDescription,
      url: `${siteUrl}/${locale}`,
      locale: locale === "en" ? "en_US" : "zh_CN"
    },
    twitter: {
      title: dictionary.metadata.homeTitle,
      description: dictionary.metadata.homeDescription
    }
  };
}

export default async function LocalizedHomePage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  return <HomePage locale={locale} />;
}
