"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Footer from "@/components/Footer";
import { DarkHoneycombBackground } from "@/components/ui/SectionBackgrounds";
import {
  UsersIcon,
  UserIcon,
  ProjectIcon,
  BillingIcon,
  SocialIcon,
  DiscoveryIcon,
  ProcessorIcon,
  NetworkIcon,
  ArrowRightIcon,
  ZapIcon,
  ShieldIcon,
  TrendingUpIcon,
  SettingsIcon,
  ClockIcon,
  TargetIcon,
  HexagonIcon,
  AutomationIcon,
  CodeIcon,
  GlobeIcon,
  SmartphoneIcon,
  ShoppingCartIcon,
  BotIcon,
  PhoneIcon,
  CalendarIcon,
  HeadphonesIcon,
  LayersIcon,
  WrenchIcon,
  PaletteIcon,
  ShareIcon,
  EyeIcon,
  MessageIcon,
} from "@/components/icons/PremiumIcons";

type ServiceCategory = "automation" | "websoftware" | "mobileapps" | "aireceptionists";

const categoryTabs: { key: ServiceCategory; label: string; icon: typeof AutomationIcon }[] = [
  { key: "automation", label: "Automation Services", icon: AutomationIcon },
  { key: "websoftware", label: "Web / Software", icon: CodeIcon },
  { key: "mobileapps", label: "Mobile Apps", icon: SmartphoneIcon },
  { key: "aireceptionists", label: "AI Receptionists", icon: BotIcon },
];

const automationServices = [
  {
    id: 1,
    title: "Sales CRM Management",
    description:
      "Keep your leads, conversations, and follow-ups organized without lifting a finger. Your sales team always knows the next step to move deals forward.",
    icon: UsersIcon,
    features: [
      "Automated lead tracking and qualification",
      "Smart follow-up reminders and sequences",
      "Pipeline management and deal progression",
    ],
    idealFor: ["Sales Teams", "Real Estate Agents", "Insurance Agencies", "B2B Companies", "Consultants"],
    href: "/salescrmmanagement",
    lottieUrl: "https://lottie.host/embed/1908348d-e5e9-48d0-8c47-e3d0b9684236/6yg38oV1w0.lottie",
  },
  {
    id: 2,
    title: "Client Intake & Onboarding",
    description:
      "Welcome new clients with a smooth, consistent process every time. From booking to first delivery, everything flows without delays or missed details.",
    icon: UserIcon,
    features: [
      "Automated intake forms and scheduling",
      "Welcome email sequences and onboarding",
      "Document collection and e-signatures",
    ],
    idealFor: ["Service Businesses", "Agencies", "Coaches", "Real Estate Firms", "Healthcare Providers"],
    href: "/clientintake",
  },
  {
    id: 3,
    title: "Project Management",
    description:
      "Track tasks, deadlines, and progress automatically across your tools. Everyone stays aligned, and projects move from start to finish with less effort.",
    icon: ProjectIcon,
    features: [
      "Automated task creation and assignment",
      "Progress tracking and milestone management",
      "Team communication and updates",
    ],
    idealFor: ["Project Managers", "Agencies", "Development Teams", "Construction Firms", "Event Planners"],
    href: "/projectmanagement",
  },
  {
    id: 4,
    title: "Billing & Payment",
    description:
      "Send invoices, follow up on payments, and keep records up to date automatically. You maintain healthy cash flow without chasing after clients.",
    icon: BillingIcon,
    features: [
      "Automated invoice generation and sending",
      "Payment reminders and follow-ups",
      "Expense tracking and reporting",
    ],
    idealFor: ["Freelancers", "Small Businesses", "Consultants", "Service Providers", "Agencies"],
    href: "/billingpayment",
    lottieUrl: "https://lottie.host/embed/54f3962f-6105-4bd1-a7b2-e3669d81ce09/GWrW6epXID.lottie",
  },
  {
    id: 5,
    title: "Social Media Content",
    description:
      "Plan your content once and let it publish on schedule across all your channels. Stay visible online without the daily posting grind.",
    icon: SocialIcon,
    features: [
      "Content planning and scheduling",
      "Multi-platform publishing automation",
      "Performance tracking and analytics",
    ],
    idealFor: ["Social Media Managers", "Content Creators", "Brands", "Influencers", "Marketing Agencies"],
    href: "/socialmedia",
    lottieUrl: "https://lottie.host/embed/86945951-c9a6-4c44-ab90-4a8cafd1adf7/3qazEaYoVx.lottie",
  },
];

const webSoftwareServices = [
  {
    id: 6, title: "Web Applications", description: "Custom web applications built for performance, scalability, and user experience.",
    icon: GlobeIcon, features: ["Responsive & accessible design", "Real-time data & dashboards", "Cloud-hosted & scalable"], idealFor: ["Startups", "SaaS Companies", "Enterprises", "Agencies"], href: "/webapplications",
  },
  {
    id: 7, title: "SaaS Development", description: "End-to-end SaaS product development from MVP to scale with multi-tenancy and billing.",
    icon: ProcessorIcon, features: ["Multi-tenant architecture", "Subscription & billing integration", "Analytics & user management"], idealFor: ["Founders", "Product Teams", "B2B Companies", "Startups"], href: "/saasdevelopment",
  },
  {
    id: 8, title: "Custom Software", description: "Tailor-made software designed around your unique business processes.",
    icon: CodeIcon, features: ["Requirements analysis & architecture", "Custom business logic & workflows", "System integration"], idealFor: ["Enterprises", "Operations Teams", "Healthcare", "Finance"], href: "/customsoftware",
  },
  {
    id: 9, title: "E-Commerce Solutions", description: "Online stores and marketplaces that convert visitors into customers.",
    icon: ShoppingCartIcon, features: ["Product catalog & inventory", "Secure payment processing", "Order fulfillment automation"], idealFor: ["Retailers", "D2C Brands", "Marketplaces", "Wholesalers"], href: "/ecommercesolutions",
  },
  {
    id: 10, title: "API Development", description: "Robust, well-documented APIs that connect your systems and power integrations.",
    icon: NetworkIcon, features: ["RESTful & GraphQL API design", "Third-party connectors", "Authentication & rate limiting"], idealFor: ["Platform Companies", "Dev Teams", "SaaS Products", "Enterprises"], href: "/apidevelopment",
  },
];

const mobileAppServices = [
  {
    id: 11, title: "iOS Development", description: "Native iOS apps built with Swift for optimal iPhone and iPad performance.",
    icon: SmartphoneIcon, features: ["Native Swift development", "App Store optimization", "Push notifications & in-app purchases"], idealFor: ["Startups", "Enterprises", "Healthcare", "Fintech"], href: "/iosdevelopment",
  },
  {
    id: 12, title: "Android Development", description: "Native Android apps using Kotlin for the entire Android ecosystem.",
    icon: SmartphoneIcon, features: ["Native Kotlin development", "Material Design UI", "Google Play deployment"], idealFor: ["Startups", "Enterprises", "E-Commerce", "Media"], href: "/androiddevelopment",
  },
  {
    id: 13, title: "Cross-Platform Apps", description: "One codebase for iOS and Android with React Native or Flutter.",
    icon: LayersIcon, features: ["React Native & Flutter", "Shared codebase", "Native-level performance"], idealFor: ["Budget-conscious startups", "MVPs", "Small teams", "Agencies"], href: "/crossplatformapps",
  },
  {
    id: 14, title: "App Maintenance & Support", description: "Keep your apps running smoothly with ongoing updates and optimization.",
    icon: WrenchIcon, features: ["Bug fixes & performance tuning", "OS compatibility updates", "Feature enhancements"], idealFor: ["App Owners", "Startups", "Enterprises", "Agencies"], href: "/appmaintenance",
  },
  {
    id: 15, title: "UI/UX Design", description: "Beautiful, intuitive interfaces designed with research-backed methodology.",
    icon: PaletteIcon, features: ["User research & wireframing", "Prototyping & usability testing", "Design systems"], idealFor: ["Product Teams", "Startups", "Enterprises", "Agencies"], href: "/uiuxdesign",
  },
];

const aiReceptionistServices = [
  {
    id: 16, title: "AI Virtual Receptionist", description: "AI-powered receptionist that answers calls 24/7 without breaks or sick days.",
    icon: BotIcon, features: ["Natural language understanding", "Custom voice & personality", "Multi-language support"], idealFor: ["Medical Offices", "Law Firms", "Real Estate", "Service Businesses"], href: "/virtualreceptionist",
  },
  {
    id: 17, title: "Intelligent Call Routing", description: "Smart call distribution that sends callers to the right person instantly.",
    icon: PhoneIcon, features: ["AI-powered intent detection", "Dynamic routing rules", "After-hours handling"], idealFor: ["Call Centers", "Multi-location Businesses", "Enterprises", "Healthcare"], href: "/callrouting",
  },
  {
    id: 18, title: "AI Appointment Scheduling", description: "Let AI handle booking through natural conversation, synced to your calendar.",
    icon: CalendarIcon, features: ["Calendar integration", "Automated reminders", "No-show follow-up"], idealFor: ["Medical Practices", "Salons", "Consultants", "Service Providers"], href: "/appointmentscheduling",
  },
  {
    id: 19, title: "AI Lead Qualification", description: "Qualify inbound leads automatically with intelligent scoring and routing.",
    icon: TargetIcon, features: ["Custom qualification criteria", "Real-time lead scoring", "CRM integration"], idealFor: ["Sales Teams", "Real Estate", "Insurance", "B2B Companies"], href: "/leadqualification",
  },
  {
    id: 20, title: "24/7 Customer Support", description: "AI support that resolves issues instantly and escalates complex ones.",
    icon: HeadphonesIcon, features: ["Knowledge base automation", "Ticket creation & escalation", "Sentiment analysis"], idealFor: ["E-Commerce", "SaaS Companies", "Service Businesses", "Agencies"], href: "/customersupport247",
  },
];

type ServiceItem = {
  id: number;
  title: string;
  description: string;
  icon: typeof UsersIcon;
  features: string[];
  idealFor: string[];
  href: string;
  lottieUrl?: string;
};

const servicesByCategory: Record<ServiceCategory, ServiceItem[]> = {
  automation: automationServices,
  websoftware: webSoftwareServices,
  mobileapps: mobileAppServices,
  aireceptionists: aiReceptionistServices,
};

const features = [
  {
    icon: TargetIcon,
    title: "Expert-led Strategy",
    description:
      "Business Automation Consulting — discovery workshops and strategic roadmaps that identify high-impact automation opportunities and forecast ROI.",
  },
  {
    icon: ZapIcon,
    title: "Seamless Integrations",
    description:
      "Web App Integration & Workflow Automation — connect your SaaS stack to remove data silos, automate handoffs, and eliminate manual entry.",
  },
  {
    icon: ShieldIcon,
    title: "Audit & Optimization",
    description:
      "Business Automation Audits — full process mapping to surface bottlenecks, redundancy, and prioritized automation quick-wins.",
  },
  {
    icon: ProcessorIcon,
    title: "AI-enabled Workflows",
    description:
      "AI-Powered Automation — add smart capabilities (text generation, classification, summarization, decision logic) to your workflows.",
  },
];

const ServicesPage = () => {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>("automation");
  const activeServices = servicesByCategory[activeCategory];
  const showLottie = activeCategory === "automation";

  return (
    <main className="min-h-screen">
      {/* Main Header */}
      <section className="relative py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 opacity-50 dark:opacity-30" style={{ backgroundImage: "url('/assets/beeInspiration/5303586.jpg')", backgroundSize: "cover", backgroundPosition: "center" }} />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 via-white/40 to-gray-100/50 dark:from-gray-950/70 dark:via-gray-900/60 dark:to-gray-950/70" />
        </div>

        <div className="container-width relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="badge-glass mb-6">
              <HexagonIcon size={14} className="mr-2 text-brand" />
              <span className="font-display tracking-wide text-xs uppercase font-bold">SERVICES</span>
            </div>

            <h1 className="heading-display mb-6">
              Automate Everything or{" "}
              <span className="text-gradient">Don&apos;t Pay</span>
            </h1>
            <p className="text-body-lg mb-8 max-w-3xl mx-auto">
              We will automate your manual processes or you don&apos;t pay. Transform
              your business with AI-powered automation solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Features Introduction */}
      <section className="relative py-16 bg-paper dark:bg-gray-950 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 divider-honeycomb" />
        <div className="absolute bottom-0 left-0 right-0 divider-honeycomb" />
        <div className="container-width relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="mb-8">
                <div className="badge mb-6">
                  <ProcessorIcon size={16} className="mr-2 text-brand" />
                  <span>STRATEGY · BUILD · SCALE</span>
                </div>
                <h2 className="heading-lg mb-4">
                  <span className="text-gradient">
                    Automation & Integration
                  </span>
                  <br />
                  <span className="text-ink dark:text-white">Services</span>
                </h2>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {features.map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <div key={index} className="card-honeycomb p-6 group">
                      <div className="flex flex-col items-start">
                        <div className="icon-hex w-10 h-10 mb-3">
                          <IconComponent size={20} className="text-white" />
                        </div>
                        <h3 className="text-lg font-bold text-ink dark:text-white mb-2 group-hover:text-brand transition-colors duration-300">
                          {feature.title}
                        </h3>
                        <p className="text-body-sm text-ink-secondary dark:text-gray-400">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="relative h-full">
              <div className="relative w-full h-full hex-cut bg-gradient-to-br from-gray-900 to-gray-800 border border-ink/5 dark:border-white/5 overflow-hidden sticky top-8">
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
      <section className="relative py-16 bg-paper dark:bg-gray-950 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 opacity-[0.25] dark:opacity-15" style={{ backgroundImage: "url('/assets/beeInspiration/5303586.jpg')", backgroundSize: "cover", backgroundPosition: "center" }} />
          <div className="absolute inset-0 bg-paper/60 dark:bg-gray-950/80" />
          <DarkHoneycombBackground patternId="services-grid-honeycomb" />
        </div>

        <div className="container-width relative z-10">
          {/* Section Header */}
          <div className="text-center mb-10">
            <div className="badge mb-6 mx-auto">
              <ProcessorIcon size={16} className="mr-2 text-brand" />
              <span>Our AI Services</span>
            </div>

            <h2 className="heading-lg mb-4">
              Complete{" "}
              <span className="text-gradient">Automation Solutions</span>
            </h2>
            <p className="text-body-lg max-w-3xl mx-auto mb-8">
              From sales to social media, we automate every aspect of your
              business operations.
            </p>
          </div>

          {/* Category Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categoryTabs.map(({ key, label, icon: Icon }) => (
              <button
                type="button"
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`inline-flex items-center gap-2 px-5 py-2.5 hex-cut-sm text-[14px] font-semibold
                  transition-all duration-300 hover:-translate-y-0.5
                  ${
                    activeCategory === key
                      ? "bg-brand text-white shadow-brand"
                      : "bg-ink/5 dark:bg-white/5 text-ink dark:text-white hover:bg-brand/10 dark:hover:bg-brand/10"
                  }`}
              >
                <Icon size={16} />
                <span>{label}</span>
              </button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {activeServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.id}
                  className="card-honeycomb group p-6 flex flex-col transition-all duration-500 hover:scale-105"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Service Image */}
                  <div className="relative w-full h-48 mb-4 hex-cut-sm overflow-hidden bg-white dark:bg-gray-800">
                    {showLottie && service.lottieUrl ? (
                      <iframe
                        src={service.lottieUrl}
                        title={service.title}
                        className="w-full h-full"
                        allowFullScreen
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-brand/5 via-brand/10 to-brand/5 dark:from-brand/10 dark:via-brand/20 dark:to-brand/10">
                        <IconComponent size={48} className="text-brand/30 dark:text-brand/40" />
                      </div>
                    )}
                  </div>

                  {/* Icon */}
                  <div className="icon-hex w-14 h-14 mb-4 shadow-brand group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <IconComponent size={24} className="text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-ink dark:text-white mb-3 group-hover:text-brand transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-body text-ink-secondary dark:text-gray-400 mb-4">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-6 flex-grow">
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center text-sm text-ink-tertiary dark:text-gray-400"
                      >
                        <div className="w-2 h-2 bg-brand clip-hex mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <div className="mt-auto pt-4">
                    <Link
                      href={service.href}
                      className="btn-primary w-full text-center text-[14px]"
                    >
                      <span>Learn More</span>
                    </Link>
                  </div>
                </div>
              );
            })}

            {/* Special Discovery Card - only on Automation tab */}
            {activeCategory === "automation" && (
              <div className="card-glass group p-6 flex flex-col border-brand/20 dark:border-brand/30 transition-all duration-500 hover:scale-105">
                <div className="absolute top-4 right-4 z-20">
                  <div className="bg-success text-white text-xs font-bold px-3 py-1 clip-hex shadow-lg">
                    FREE
                  </div>
                </div>

                <div className="icon-hex w-14 h-14 mb-4 shadow-brand group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  <DiscoveryIcon size={24} className="text-white" />
                </div>

                <h3 className="text-xl font-bold text-ink dark:text-white mb-3 group-hover:text-brand transition-colors duration-300">
                  Not Sure What to Automate?
                </h3>

                <p className="text-body text-ink-secondary dark:text-gray-400 mb-4">
                  We&apos;ll analyze your current systems, software, and workflows to
                  identify hidden automation opportunities you might have missed.
                </p>

                <div className="space-y-2 mb-6 flex-grow">
                  {[
                    "AI-powered workflow analysis",
                    "Custom automation roadmap",
                    "ROI projections for each opportunity",
                  ].map((benefit, benefitIndex) => (
                    <div
                      key={benefitIndex}
                      className="flex items-center text-sm text-ink-tertiary dark:text-gray-400"
                    >
                      <div className="w-2 h-2 bg-brand clip-hex mr-2 flex-shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-auto">
                  <Link
                    href="https://calendar.app.google/hTHhAJ1rCRTQMgheA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full text-center text-[14px]"
                  >
                    <span>Book a Call</span>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-brand">
        <div className="container-width">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">
              Let&apos;s discuss how automation can transform your business processes
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Ready to take your business to the next level? Schedule a free
              consultation to explore automation opportunities.
            </p>
            <Link
              href="https://calendar.app.google/hTHhAJ1rCRTQMgheA"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center gap-2"
            >
              <span>Schedule a Free Consultation</span>
              <ArrowRightIcon size={18} />
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default ServicesPage;
