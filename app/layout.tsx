import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.your-saas-domain.com"),
  title: {
    default: "Manageable | Construction Data Structured, Reports Automated",
    template: "%s | Manageable"
  },
  description:
    "Manageable helps construction teams capture site data once and generate decision-ready reports automatically.",
  keywords: [
    "construction management software",
    "construction reporting",
    "site data management",
    "construction SaaS Malaysia",
    "project progress tracking"
  ],
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Manageable | Construction Data Structured, Reports Automated",
    description:
      "From site records to management reports, automatically. Built for contractors, developers, and project teams.",
    url: "https://manageable.my",
    siteName: "Manageable",
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Manageable | Construction Data Structured, Reports Automated",
    description:
      "Capture site data once. Track progress across projects. Give management real-time visibility."
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

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
