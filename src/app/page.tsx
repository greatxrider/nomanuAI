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


export default function Home() {
  const { ref: blogRef, isIntersecting: blogIsIntersecting } =
    useIntersectionObserver({ threshold: 0.1 });

  return (
    <main className="min-h-screen bg-paper dark:bg-gray-950 transition-colors duration-300">
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
        className="relative py-16 bg-paper dark:bg-gray-950 overflow-hidden"
      >
        {/* Pattern B - Clean with honeycomb dividers */}
        <div className="absolute top-0 left-0 right-0 divider-honeycomb" />
        <div className="absolute bottom-0 left-0 right-0 divider-honeycomb" />

        <div className="container-width relative z-10">
          {/* Section Header */}
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              blogIsIntersecting
                ? "animate-fade-in-up opacity-100"
                : "opacity-0 translate-y-8"
            }`}
          >
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
