import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/lib/theme-context";
import Chatbot from "@/components/Chatbot";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.nomanuai.com"),
  title: {
    default: "NomanuAI - AI Automation Solutions | Transform Your Business",
    template: "%s | NomanuAI",
  },
  description:
    "Transform your business with intelligent automation solutions. NomanuAI specializes in AI-powered process automation, CRM integration, and custom solutions. Get started today!",
  keywords: [
    "AI automation",
    "business automation",
    "workflow automation",
    "CRM integration",
    "process automation",
    "NomanuAI",
    "automation services",
    "AI solutions",
    "business transformation",
    "automation consulting",
  ],
  authors: [{ name: "NomanuAI" }],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    url: "https://www.nomanuai.com/",
    title: "NomanuAI - AI Automation Solutions | Transform Your Business",
    description:
      "Transform your business with intelligent automation solutions. NomanuAI specializes in AI-powered process automation, CRM integration, and custom solutions.",
    siteName: "NomanuAI",
    images: [
      {
        url: "/assets/ai-automation.jpg",
        width: 1200,
        height: 630,
        alt: "NomanuAI - AI Automation Solutions",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@nomanuai98",
    creator: "@nomanuai98",
    title: "NomanuAI - AI Automation Solutions | Transform Your Business",
    description:
      "Transform your business with intelligent automation solutions. NomanuAI specializes in AI-powered process automation, CRM integration, and custom solutions.",
    images: ["/assets/ai-automation.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover, user-scalable=no" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/assets/nomanuai-logo.png"
        />
        <link rel="apple-touch-icon" href="/assets/nomanuai-logo.png" />
        <meta name="theme-color" content="#E56518" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="format-detection" content="telephone=no" />
        <meta
          name="google-site-verification"
          content="your-verification-code"
        />
        <meta name="security" content="trusted" />
        <meta
          property="og:logo"
          content="https://www.nomanuai.com/assets/nomanuai-logo.png"
        />
        <meta
          name="twitter:logo"
          content="https://www.nomanuai.com/assets/nomanuai-logo.png"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "NomanuAI",
              url: "https://www.nomanuai.com/",
              logo: {
                "@type": "ImageObject",
                url: "https://www.nomanuai.com/assets/nomanuai-logo.png",
                width: 300,
                height: 100,
              },
              image: "https://www.nomanuai.com/assets/nomanuai-logo.png",
              sameAs: [
                "https://x.com/nomanuai98",
                "https://www.instagram.com/nomanuai/",
                "https://www.facebook.com/people/NomanuAi/61578373473028/",
                "https://www.linkedin.com/company/107854474/",
              ],
              description:
                "AI-powered automation services for CRM, onboarding, billing, project management, and social media.",
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer service",
                url: "https://www.nomanuai.com/faq",
              },
              address: {
                "@type": "PostalAddress",
                addressCountry: "US",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${inter.className} antialiased transition-colors duration-300`}
        suppressHydrationWarning
      >
        <ThemeProvider>
          <ScrollToTop />
          <Header />
          {children}
          <Chatbot />
        </ThemeProvider>
      </body>
    </html>
  );
}
