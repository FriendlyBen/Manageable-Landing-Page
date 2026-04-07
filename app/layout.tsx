import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { defaultLocale, isValidLocale } from "@/lib/i18n";

export const metadata: Metadata = {
  metadataBase: new URL("https://manageable.my"),
  title: {
    default: "Manageable",
    template: "%s | Manageable"
  },
  keywords: [
    "construction management software",
    "construction reporting",
    "site data management",
    "construction SaaS Malaysia",
    "project progress tracking"
  ],
  openGraph: {
    siteName: "Manageable",
    type: "website"
  },
  twitter: {
    card: "summary_large_image"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  }
};

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale?: string }>;
}>) {
  const resolvedParams = await params;
  const locale = isValidLocale(resolvedParams?.locale ?? "") ? resolvedParams.locale : defaultLocale;

  return (
    <html lang={locale}>
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-1GW91T6S7V"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-1GW91T6S7V');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
