"use client";

import Hero from "@/components/Hero";
import ClientMarquee from "@/components/ClientMarquee";
import Services from "@/components/Services";
import GetStarted from "@/components/GetStarted";
import WhyAutomate from "@/components/WhyAutomate";
import Projects from "@/components/Projects";
import MissionVision from "@/components/MissionVision";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { useIntersectionObserver } from "@/lib/useIntersectionObserver";

export const metadata: Metadata = {
  title: "NomanuAI - AI Automation Solutions | Transform Your Business",
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
  openGraph: {
    title: "NomanuAI - AI Automation Solutions | Transform Your Business",
    description:
      "Transform your business with intelligent automation solutions. NomanuAI specializes in AI-powered process automation, CRM integration, and custom solutions.",
    url: "https://www.nomanuai.com",
    siteName: "NomanuAI",
    images: [
      {
        url: "https://www.nomanuai.com/assets/ai-automation.jpg",
        width: 1200,
        height: 630,
        alt: "NomanuAI - AI Automation Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NomanuAI - AI Automation Solutions | Transform Your Business",
    description:
      "Transform your business with intelligent automation solutions. NomanuAI specializes in AI-powered process automation, CRM integration, and custom solutions.",
    images: ["https://www.nomanuai.com/assets/ai-automation.jpg"],
  },
  alternates: {
    canonical: "https://www.nomanuai.com",
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
};

export default function Home() {
  const { ref: blogRef, isIntersecting: blogIsIntersecting } =
    useIntersectionObserver({ threshold: 0.1 });

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "NomanuAI",
            url: "https://www.nomanuai.com",
            logo: "https://www.nomanuai.com/assets/nomanuai-logo.png",
            description: "AI-powered automation services for businesses",
            address: {
              "@type": "PostalAddress",
              addressCountry: "PH",
            },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+63-975-948-3289",
              contactType: "customer service",
              email: "consulting@nomanuai.com",
            },
            sameAs: [
              "https://x.com/nomanuai98",
              "https://www.instagram.com/nomanuai/",
              "https://www.facebook.com/people/NomanuAi/61578373473028/",
              "https://www.linkedin.com/company/107854474/",
            ],
            serviceArea: {
              "@type": "Place",
              name: "Worldwide",
            },
          }),
        }}
      />

      <Hero />
      <ClientMarquee />
      <Testimonials />
      <MissionVision />
      <WhyChooseUs />
      <Services />
      <GetStarted />
      <WhyAutomate />
      <Projects />
      <FAQ />

      {/* Stay Updated Section */}
      <section
        ref={blogRef}
        className="relative py-16 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 overflow-hidden"
      >
        {/* Enhanced AI Background - Home Style */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Animated Circuit Pattern */}
          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern
                  id="circuit-stay-updated"
                  x="0"
                  y="0"
                  width="100"
                  height="100"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M20,20 L80,20 L80,80 L20,80 Z"
                    fill="none"
                    stroke="#E56518"
                    strokeWidth="1"
                  />
                  <circle cx="20" cy="20" r="3" fill="#E56518" />
                  <circle cx="80" cy="20" r="3" fill="#E56518" />
                  <circle cx="80" cy="80" r="3" fill="#E56518" />
                  <circle cx="20" cy="80" r="3" fill="#E56518" />
                </pattern>
              </defs>
              <rect
                width="100%"
                height="100%"
                fill="url(#circuit-stay-updated)"
              />
            </svg>
          </div>

          {/* Floating AI Particles */}
          <div className="absolute inset-0">
            {[
              { left: "15%", top: "20%", delay: "0s", duration: "4s" },
              { left: "85%", top: "30%", delay: "0.5s", duration: "3.5s" },
              { left: "25%", top: "70%", delay: "1s", duration: "4.5s" },
              { left: "75%", top: "60%", delay: "1.5s", duration: "3s" },
              { left: "45%", top: "15%", delay: "2s", duration: "4.2s" },
              { left: "65%", top: "80%", delay: "2.5s", duration: "3.8s" },
              { left: "10%", top: "50%", delay: "3s", duration: "4.1s" },
              { left: "90%", top: "45%", delay: "3.5s", duration: "3.7s" },
            ].map((particle, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-brand-orange rounded-full animate-float opacity-60"
                style={{
                  left: particle.left,
                  top: particle.top,
                  animationDelay: particle.delay,
                  animationDuration: particle.duration,
                }}
              />
            ))}
          </div>

          {/* Gradient Orbs */}
          <div className="absolute top-10 -left-20 w-96 h-96 bg-gradient-to-r from-brand-orange/30 via-orange-400/20 to-brand-orange-light/30 rounded-full blur-3xl animate-pulse opacity-40" />
          <div
            className="absolute bottom-10 -right-20 w-[500px] h-[500px] bg-gradient-to-r from-brand-orange-light/30 via-brand-orange/30 to-orange-500/20 rounded-full blur-3xl animate-pulse opacity-30"
            style={{ animationDelay: "2s" }}
          />
        </div>

        <div className="container-width relative z-10">
          {/* Section Header */}
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              blogIsIntersecting
                ? "animate-fade-in-up opacity-100"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="inline-flex items-center px-6 py-3 bg-brand-orange/10 border border-brand-orange/30 rounded-full backdrop-blur-sm mb-6">
              <span className="text-brand-orange font-semibold">
                AI Automation Insights
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Stay Updated with{" "}
              <span className="bg-gradient-to-r from-brand-orange via-brand-orange-light to-brand-orange bg-clip-text text-transparent">
                Latest Insights
              </span>
            </h2>

            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Discover the latest trends, tips, and strategies in business
              automation. Stay ahead of the curve with our expert insights.
            </p>
          </div>

          {/* Blog Posts Grid */}
          <div
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 transition-all duration-1000 delay-200 ${
              blogIsIntersecting
                ? "animate-fade-in-up opacity-100"
                : "opacity-0 translate-y-8"
            }`}
          >
            {[
              {
                title: "Why Automation is the Future of Business",
                excerpt:
                  "Discover how automation is transforming industries and why your business needs to adapt now.",
                image: "/blogImages/future-of-business.jpg",
                href: "/blog/why-automation-is-future-of-business",
                readTime: "5 min read",
              },
              {
                title: "How Automation Saves Money and Time",
                excerpt:
                  "Learn the real cost savings and time benefits that automation brings to your business.",
                image: "/blogImages/social-payroll-automation.jpg",
                href: "/blog/how-automation-saves-money-and-time",
                readTime: "4 min read",
              },
              {
                title: "Automation Best Practices for Success",
                excerpt:
                  "Follow these proven strategies to implement automation successfully in your organization.",
                image: "/blogImages/automation-best-practices.jpeg",
                href: "/blog/automation-best-practices-for-success",
                readTime: "6 min read",
              },
            ].map((post, index) => (
              <article
                key={index}
                className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-200 dark:border-gray-700 hover:border-brand-orange/30"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-3">
                    <span>{post.readTime}</span>
                    <span>•</span>
                    <span>September 1, 2025</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-brand-orange transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <Link
                    href={post.href}
                    className="inline-flex items-center text-brand-orange font-semibold hover:text-brand-orange-dark transition-colors duration-300"
                  >
                    Read More
                    <svg
                      className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <Link href="/blog" className="btn-primary text-lg">
              View All Articles
            </Link>
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </main>
  );
}
