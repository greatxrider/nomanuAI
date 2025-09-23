// Converted to a Server Component to allow exporting metadata

import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Automation Services | NomanuAI",
  description:
    "Comprehensive AI automation services including CRM management, client intake, project management, billing, and social media automation. Transform your business with intelligent automation solutions.",
  keywords: [
    "AI automation services",
    "CRM automation",
    "client intake automation",
    "project management automation",
    "billing automation",
    "social media automation",
    "business process automation",
    "workflow automation",
  ],
  openGraph: {
    title: "AI Automation Services | NomanuAI",
    description:
      "Comprehensive AI automation services including CRM management, client intake, project management, billing, and social media automation.",
    url: "https://www.nomanuai.com/services",
    images: [
      {
        url: "/assets/ai-automation.jpg",
        width: 1200,
        height: 630,
        alt: "AI Automation Services by NomanuAI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Automation Services | NomanuAI",
    description:
      "Comprehensive AI automation services including CRM management, client intake, project management, billing, and social media automation.",
    images: ["/assets/ai-automation.jpg"],
  },
  alternates: {
    canonical: "/services",
  },
};

import Footer from "@/components/Footer";
import {
  Users,
  UserCheck,
  CheckSquare,
  CreditCard,
  Share2,
  Search,
  Cpu,
  Network,
  ArrowRight,
  Zap,
  Shield,
  TrendingUp,
  Settings,
  BarChart3,
  Clock,
  Target,
} from "lucide-react";

const ServicesPage = () => {
  const services = [
    {
      id: 1,
      title: "Sales CRM Management",
      description:
        "Keep your leads, conversations, and follow-ups organized without lifting a finger. Your sales team always knows the next step to move deals forward.",
      icon: Users,
      features: [
        "Automated lead tracking and qualification",
        "Smart follow-up reminders and sequences",
        "Pipeline management and deal progression",
      ],
      idealFor: [
        "Sales Teams",
        "Real Estate Agents",
        "Insurance Agencies",
        "B2B Companies",
        "Consultants",
      ],
    },
    {
      id: 2,
      title: "Client Intake & Onboarding",
      description:
        "Welcome new clients with a smooth, consistent process every time. From booking to first delivery, everything flows without delays or missed details.",
      icon: UserCheck,
      features: [
        "Automated intake forms and scheduling",
        "Welcome email sequences and onboarding",
        "Document collection and e-signatures",
      ],
      idealFor: [
        "Service Businesses",
        "Agencies",
        "Coaches",
        "Real Estate Firms",
        "Healthcare Providers",
      ],
    },
    {
      id: 3,
      title: "Project Management",
      description:
        "Track tasks, deadlines, and progress automatically across your tools. Everyone stays aligned, and projects move from start to finish with less effort.",
      icon: CheckSquare,
      features: [
        "Automated task creation and assignment",
        "Progress tracking and milestone management",
        "Team communication and updates",
      ],
      idealFor: [
        "Project Managers",
        "Agencies",
        "Development Teams",
        "Construction Firms",
        "Event Planners",
      ],
    },
    {
      id: 4,
      title: "Billing & Payment",
      description:
        "Send invoices, follow up on payments, and keep records up to date automatically. You maintain healthy cash flow without chasing after clients.",
      icon: CreditCard,
      features: [
        "Automated invoice generation and sending",
        "Payment reminders and follow-ups",
        "Expense tracking and reporting",
      ],
      idealFor: [
        "Freelancers",
        "Small Businesses",
        "Consultants",
        "Service Providers",
        "Agencies",
      ],
    },
    {
      id: 5,
      title: "Social Media Content",
      description:
        "Plan your content once and let it publish on schedule across all your channels. Stay visible online without the daily posting grind.",
      icon: Share2,
      features: [
        "Content planning and scheduling",
        "Multi-platform publishing automation",
        "Performance tracking and analytics",
      ],
      idealFor: [
        "Social Media Managers",
        "Content Creators",
        "Brands",
        "Influencers",
        "Marketing Agencies",
      ],
    },
  ];

  const features = [
    {
      icon: Target,
      title: "Expert-led Strategy",
      description:
        "Business Automation Consulting — discovery workshops and strategic roadmaps that identify high-impact automation opportunities and forecast ROI.",
    },
    {
      icon: Zap,
      title: "Seamless Integrations",
      description:
        "Web App Integration & Workflow Automation — connect your SaaS stack to remove data silos, automate handoffs, and eliminate manual entry.",
    },
    {
      icon: Shield,
      title: "Audit & Optimization",
      description:
        "Business Automation Audits — full process mapping to surface bottlenecks, redundancy, and prioritized automation quick-wins.",
    },
    {
      icon: Cpu,
      title: "AI-enabled Workflows",
      description:
        "AI-Powered Automation — add smart capabilities (text generation, classification, summarization, decision logic) to your workflows.",
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Main Header */}
      <section className="relative py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 overflow-hidden">
        {/* Enhanced AI Background */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Animated Circuit Pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern
                  id="circuit"
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
              <rect width="100%" height="100%" fill="url(#circuit)" />
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
                className="absolute w-2 h-2 bg-brand-orange rounded-full animate-float opacity-30"
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
          <div className="absolute top-1/4 -left-32 w-64 h-64 bg-brand-orange/10 rounded-full filter blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-brand-orange/8 rounded-full filter blur-3xl animate-pulse animation-delay-300" />
        </div>

        <div className="container-width relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-6 py-3 bg-brand-orange/10 border border-brand-orange/30 rounded-full backdrop-blur-sm mb-6">
              <Cpu className="w-5 h-5 text-brand-orange mr-2 animate-pulse" />
              <span className="text-brand-orange font-semibold">SERVICES</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Automate Everything or{" "}
              <span className="text-brand-orange">Don't Pay</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              We will automate your manual processes or you don't pay. Transform
              your business with AI-powered automation solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Features Introduction */}
      <section className="relative py-16 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 overflow-hidden">
        {/* Glowing Orange Gradient Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Large Glowing Orange Gradient Orbs */}
          <div className="absolute top-10 -left-20 w-96 h-96 bg-gradient-to-r from-brand-orange/50 via-orange-400/25 to-brand-orange-light/40 rounded-full blur-3xl animate-pulse opacity-75" />
          <div
            className="absolute bottom-10 -right-20 w-[500px] h-[500px] bg-gradient-to-r from-brand-orange-light/40 via-brand-orange/50 to-orange-500/35 rounded-full blur-3xl animate-pulse opacity-65"
            style={{ animationDelay: "2s" }}
          />

          {/* Central Glowing Effect */}
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-brand-orange/10 via-orange-400/15 to-brand-orange/10 rounded-full blur-3xl animate-pulse opacity-40"
            style={{ animationDelay: "4s" }}
          />

          {/* Additional Floating Orange Particles */}
          <div className="absolute inset-0 opacity-50">
            {[
              { left: "15%", top: "20%", delay: "0s", size: "w-4 h-4" },
              { left: "85%", top: "30%", delay: "1s", size: "w-3 h-3" },
              { left: "25%", top: "70%", delay: "2s", size: "w-5 h-5" },
              { left: "75%", top: "60%", delay: "3s", size: "w-3 h-3" },
              { left: "45%", top: "15%", delay: "4s", size: "w-4 h-4" },
              { left: "65%", top: "80%", delay: "5s", size: "w-3 h-3" },
            ].map((particle, i) => (
              <div
                key={i}
                className={`absolute ${particle.size} bg-gradient-to-r from-brand-orange to-orange-400 rounded-full animate-pulse`}
                style={{
                  left: particle.left,
                  top: particle.top,
                  animationDelay: particle.delay,
                  animationDuration: "3s",
                  filter: "blur(1px)",
                }}
              />
            ))}
          </div>
        </div>

        <div className="container-width relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Header and Cards */}
            <div>
              {/* Header */}
              <div className="mb-8">
                <div className="inline-flex items-center px-6 py-3 bg-brand-orange/10 border border-brand-orange/30 rounded-full backdrop-blur-sm mb-6">
                  <Cpu className="w-5 h-5 text-brand-orange mr-2 animate-pulse" />
                  <span className="text-brand-orange font-semibold">
                    STRATEGY · BUILD · SCALE
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                  <span className="text-brand-orange">
                    Automation & Integration
                  </span>
                  <br />
                  <span className="text-gray-900 dark:text-white">
                    Services
                  </span>
                </h2>
              </div>

              {/* Cards Grid */}
              <div className="grid grid-cols-2 gap-6">
                {features.map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <div
                      key={index}
                      className="group relative bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:border-brand-orange/50 transition-all duration-300 hover:shadow-lg"
                    >
                      <div className="flex flex-col items-start">
                        <div className="w-10 h-10 bg-brand-orange rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-brand-orange transition-colors duration-300">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Column - Image Only */}
            <div className="relative h-full">
              <div className="relative w-full h-full bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden sticky top-8">
                <Image
                  src="https://resize.latenode.com/cdn-cgi/image/width=960,format=auto,fit=scale-down/https://cdn.prod.website-files.com/62c40e4513da320b60f32941/66b5e800bc01a763907a73b9_65ca570035f2906e8044f41f_image11.gif"
                  alt="AI Automation Solutions"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-16 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 overflow-hidden">
        {/* Enhanced AI Background */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Animated Circuit Pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern
                  id="circuit2"
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
              <rect width="100%" height="100%" fill="url(#circuit2)" />
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
                className="absolute w-2 h-2 bg-brand-orange rounded-full animate-float opacity-30"
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
          <div className="absolute top-1/4 -left-32 w-64 h-64 bg-brand-orange/10 rounded-full filter blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-brand-orange/8 rounded-full filter blur-3xl animate-pulse animation-delay-300" />
        </div>

        <div className="container-width relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-brand-orange/10 border border-brand-orange/30 rounded-full backdrop-blur-sm mb-6">
              <Cpu className="w-5 h-5 text-brand-orange mr-2 animate-pulse" />
              <span className="text-brand-orange font-semibold">
                Our AI Services
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Complete{" "}
              <span className="bg-gradient-to-r from-brand-orange via-brand-orange-light to-brand-orange bg-clip-text text-transparent">
                Automation Solutions
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              From sales to social media, we automate every aspect of your
              business operations.
            </p>
          </div>

          {/* AI-Inspired Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.id}
                  className="group relative bg-gray-300/30 dark:bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 hover:border-brand-orange/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-brand-orange/10 overflow-hidden flex flex-col"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* AI Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-brand-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Floating Particles */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-4 right-4 w-2 h-2 bg-brand-orange/40 rounded-full animate-pulse" />
                    <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-brand-orange/30 rounded-full animate-pulse animation-delay-300" />
                    <div className="absolute top-1/2 right-2 w-1 h-1 bg-brand-orange/50 rounded-full animate-pulse animation-delay-600" />
                  </div>

                  {/* Service Image */}
                  <div className="relative w-full h-48 mb-4 rounded-xl overflow-hidden group-hover:scale-105 transition-transform duration-300 bg-white">
                    <iframe
                      src={
                        service.id === 2
                          ? "https://lottie.host/embed/0a219d7c-539c-4100-9066-5124cc46c7ac/Dmrwc1Et7J.lottie"
                          : service.id === 3
                            ? "https://lottie.host/embed/676ba249-78b3-4d76-956d-adf89efb2a76/ygRWOuRKbJ.lottie"
                            : service.id === 4
                              ? "https://lottie.host/embed/54f3962f-6105-4bd1-a7b2-e3669d81ce09/GWrW6epXID.lottie"
                              : service.id === 5
                                ? "https://lottie.host/embed/86945951-c9a6-4c44-ab90-4a8cafd1adf7/3qazEaYoVx.lottie"
                                : "https://lottie.host/embed/1908348d-e5e9-48d0-8c47-e3d0b9684236/6yg38oV1w0.lottie"
                      }
                      title={service.title}
                      className="w-full h-full"
                      allowFullScreen
                    />
                  </div>

                  {/* Icon with Brand Orange Background */}
                  <div className="w-14 h-14 bg-brand-orange rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-brand-orange/25 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-brand-orange transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-base text-gray-600 dark:text-gray-300 mb-4 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-6 flex-grow">
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center text-sm text-gray-500 dark:text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors duration-300"
                      >
                        <div className="w-3 h-3 bg-brand-orange rounded-full mr-2 flex-shrink-0 shadow-sm shadow-brand-orange/25" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <div className="mt-auto pt-4">
                    <Link
                      href={
                        service.id === 1
                          ? "/salescrmmanagement"
                          : service.id === 2
                            ? "/clientintake"
                            : service.id === 3
                              ? "/projectmanagement"
                              : service.id === 4
                                ? "/billingpayment"
                                : service.id === 5
                                  ? "/socialmedia"
                                  : "#contact"
                      }
                      className="group inline-flex items-center px-6 py-3 bg-gradient-to-r from-brand-orange via-orange-500 to-brand-orange hover:from-orange-500 hover:via-brand-orange hover:to-orange-500 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:ring-opacity-50 border border-orange-400/20 hover:border-orange-300/40 relative z-10 pointer-events-auto"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>

                  {/* Hover Glow Border */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-brand-orange/20 transition-all duration-500" />
                </div>
              );
            })}

            {/* Special Discovery Card */}
            <div className="group relative bg-gradient-to-br from-brand-orange/5 via-brand-orange/10 to-brand-orange/5 dark:from-brand-orange/10 dark:via-brand-orange/20 dark:to-brand-orange/10 backdrop-blur-sm rounded-2xl p-6 border-2 border-brand-orange/30 dark:border-brand-orange/40 hover:border-brand-orange/50 dark:hover:border-brand-orange/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-brand-orange/20 overflow-hidden flex flex-col">
              {/* FREE Badge */}
              <div className="absolute top-4 right-4 z-20">
                <div className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                  FREE
                </div>
              </div>
              {/* Enhanced AI Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/10 via-transparent to-brand-orange/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Floating AI Particles */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-4 right-4 w-3 h-3 bg-brand-orange/60 rounded-full animate-pulse" />
                <div className="absolute bottom-4 left-4 w-2 h-2 bg-brand-orange/50 rounded-full animate-pulse animation-delay-300" />
                <div className="absolute top-1/2 right-2 w-1.5 h-1.5 bg-brand-orange/70 rounded-full animate-pulse animation-delay-600" />
              </div>

              {/* Icon with Enhanced Brand Orange Background */}
              <div className="w-14 h-14 bg-brand-orange rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-brand-orange/25 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                <Search className="w-7 h-7 text-white" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-brand-orange transition-colors duration-300">
                Not Sure What to Automate?
              </h3>

              {/* Description */}
              <p className="text-base text-gray-600 dark:text-gray-300 mb-4 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
                We'll analyze your current systems, software, and workflows to
                identify hidden automation opportunities you might have missed.
              </p>

              {/* Features */}
              <div className="space-y-2 mb-6 flex-grow">
                {[
                  "AI-powered workflow analysis",
                  "Custom automation roadmap",
                  "ROI projections for each opportunity",
                ].map((benefit, benefitIndex) => (
                  <div
                    key={benefitIndex}
                    className="flex items-center text-sm text-gray-500 dark:text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors duration-300"
                  >
                    <div className="w-3 h-3 bg-brand-orange rounded-full mr-2 flex-shrink-0 shadow-sm shadow-brand-orange/25" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Book a Call Button */}
              <div className="mt-auto">
                <Link
                  href="#contact"
                  className="group inline-flex items-center px-6 py-3 bg-gradient-to-r from-brand-orange via-orange-500 to-brand-orange hover:from-orange-500 hover:via-brand-orange hover:to-orange-500 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:ring-opacity-50 border border-orange-400/20 hover:border-orange-300/40 relative z-10 pointer-events-auto"
                >
                  <span>Book a Call</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>

              {/* Enhanced Hover Glow Border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-brand-orange/40 transition-all duration-500" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-brand-orange">
        <div className="container-width">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Let's discuss how automation can transform your business processes
            </h2>
            <p className="text-lg text-orange-100 mb-8">
              Ready to take your business to the next level? Schedule a free
              consultation to explore automation opportunities.
            </p>
            <Link
              href="https://calendar.app.google/hTHhAJ1rCRTQMgheA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-white text-brand-orange font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Schedule a Free Consultation
              <svg
                className="w-5 h-5 ml-2"
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
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default ServicesPage;
