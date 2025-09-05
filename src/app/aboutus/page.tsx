import About from "@/components/About";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | NomanuAI - AI Automation Experts",
  description:
    "Learn about NomanuAI's mission to transform businesses through intelligent automation. Meet our expert team and discover how we're revolutionizing business processes with AI-powered solutions.",
  keywords: [
    "about NomanuAI",
    "AI automation company",
    "automation experts",
    "business transformation",
    "AI team",
    "automation mission",
    "company history",
  ],
  openGraph: {
    title: "About Us | NomanuAI - AI Automation Experts",
    description:
      "Learn about NomanuAI's mission to transform businesses through intelligent automation. Meet our expert team and discover our story.",
    url: "https://www.nomanuai.com/aboutus",
    images: [
      {
        url: "/assets/mission-vision.jpg",
        width: 1200,
        height: 630,
        alt: "About NomanuAI - AI Automation Experts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | NomanuAI - AI Automation Experts",
    description:
      "Learn about NomanuAI's mission to transform businesses through intelligent automation. Meet our expert team.",
    images: ["/assets/mission-vision.jpg"],
  },
  alternates: {
    canonical: "/aboutus",
  },
};

export default function AboutUsPage() {
  return (
    <>
      <main>
        <About />
      </main>
      <Footer />
    </>
  );
}
