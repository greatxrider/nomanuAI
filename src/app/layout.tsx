import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/lib/theme-context";
import Chatbot from "@/components/Chatbot";
import ScrollSmootherComponent from "@/components/ScrollSmoother";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.nomanuai.com"),
  title: {
    default: "NomanuAI - AI Automation Solutions",
    template: "%s | NomanuAI",
  },
  description:
    "Transform your business with intelligent automation solutions. NomanuAI specializes in AI-powered process automation, custom solutions, and integration services.",
  keywords: [
    "AI automation",
    "business automation",
    "workflow automation",
    "CRM integration",
    "process automation",
    "NomanuAI",
  ],
  authors: [{ name: "NomanuAI" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://www.nomanuai.com/",
    title: "NomanuAI - AI Automation Solutions",
    description:
      "Transform your business with intelligent automation solutions. NomanuAI specializes in AI-powered process automation, custom solutions, and integration services.",
    siteName: "NomanuAI",
    images: [
      {
        url: "/assets/ai-automation.jpg",
        width: 1200,
        height: 630,
        alt: "NomanuAI - AI Automation Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@nomanuai98",
    creator: "@nomanuai98",
    title: "NomanuAI - AI Automation Solutions",
    description:
      "Transform your business with intelligent automation solutions. NomanuAI specializes in AI-powered process automation, custom solutions, and integration services.",
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
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#000000" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "NomanuAI",
              url: "https://www.nomanuai.com/",
              logo: "https://www.nomanuai.com/assets/nomanuai-logo.png",
              sameAs: [
                "https://x.com/nomanuai98",
                "https://www.instagram.com/nomanuai/",
                "https://www.facebook.com/people/NomanuAi/61578373473028/",
                "https://www.linkedin.com/company/107854474/",
              ],
              description:
                "AI-powered automation services for CRM, onboarding, billing, project management, and social media.",
            }),
          }}
        />
      </head>
      <body
        className={`${inter.className} antialiased transition-colors duration-300`}
        suppressHydrationWarning
      >
        <ThemeProvider>
          <Header />
          <ScrollSmootherComponent>
            {children}
            <Chatbot />
          </ScrollSmootherComponent>
        </ThemeProvider>
      </body>
    </html>
  );
}
