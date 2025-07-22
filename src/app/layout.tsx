import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "NomanuAI - AI Automation Agency | Transform Your Business with AI",
  description:
    "Leading AI automation agency specializing in lead generation, CRM integration, and business process optimization. Transform your business with cutting-edge AI solutions.",
  keywords:
    "AI automation, lead generation, CRM integration, business automation, AI agency, process optimization",
  authors: [{ name: "NomanuAI" }],
  creator: "NomanuAI",
  publisher: "NomanuAI",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nomanuai.com",
    title: "NomanuAI - AI Automation Agency",
    description:
      "Transform your business with cutting-edge AI automation solutions",
    siteName: "NomanuAI",
  },
  twitter: {
    card: "summary_large_image",
    title: "NomanuAI - AI Automation Agency",
    description:
      "Transform your business with cutting-edge AI automation solutions",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f97316",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
