import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"]
});

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
    url: "https://www.your-saas-domain.com",
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
      <body className={roboto.variable}>{children}</body>
    </html>
  );
}
