import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/lib/theme-context";
import CookieConsent from "@/components/CookieConsent";
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
  icons: {
    icon: "/favicon.ico",
  },
  other: {
    "msapplication-TileColor": "#f97316",
    "theme-color": "#f97316",
  },
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
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body
        className={`${inter.className} antialiased transition-colors duration-300`}
      >
        <ThemeProvider>
          {children}
          <CookieConsent />
        </ThemeProvider>
      </body>
    </html>
  );
}
