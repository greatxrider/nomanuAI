"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useIntersectionObserver } from "@/lib/useIntersectionObserver";
import {
  SalesIcon,
  OnboardingIcon,
  ProjectIcon,
  BillingIcon,
  SocialIcon,
  DiscoveryIcon,
  NetworkIcon,
  ArrowRightIcon,
  AutomationIcon,
  CodeIcon,
  GlobeIcon,
  ProcessorIcon,
  SmartphoneIcon,
  ShoppingCartIcon,
  PhoneIcon,
  BotIcon,
  CalendarIcon,
  TargetIcon,
  HeadphonesIcon,
  LayersIcon,
  WrenchIcon,
  PaletteIcon,
} from "@/components/icons/PremiumIcons";
import { DarkHoneycombBackground } from "@/components/ui/SectionBackgrounds";

type ServiceCategory = "automation" | "websoftware" | "mobileapps" | "aireceptionists";

const categories: { key: ServiceCategory; label: string; icon: typeof AutomationIcon }[] = [
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
    icon: SalesIcon,
    features: [
      "Automated lead tracking and qualification",
      "Smart follow-up reminders and sequences",
      "Pipeline management and deal progression",
    ],
    href: "/salescrmmanagement",
    imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 2,
    title: "Client Intake & Onboarding",
    description:
      "Welcome new clients with a smooth, consistent process every time. From booking to first delivery, everything flows without delays or missed details.",
    icon: OnboardingIcon,
    features: [
      "Automated intake forms and scheduling",
      "Welcome email sequences and onboarding",
      "Document collection and e-signatures",
    ],
    href: "/clientintake",
    imageUrl: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=600",
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
    href: "/projectmanagement",
    imageUrl: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=600",
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
    href: "/billingpayment",
    imageUrl: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=600",
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
    href: "/socialmedia",
    imageUrl: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=600",
  },
];

const webSoftwareServices = [
  {
    id: 6,
    title: "Web Applications",
    description:
      "Custom web applications built for performance, scalability, and user experience. From dashboards to full platforms, we bring your vision to life.",
    icon: GlobeIcon,
    features: [
      "Responsive & accessible design",
      "Real-time data & dashboards",
      "Cloud-hosted & scalable architecture",
    ],
    href: "/webapplications",
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 7,
    title: "SaaS Development",
    description:
      "End-to-end SaaS product development from MVP to scale. We build subscription-based platforms with multi-tenancy, billing, and analytics baked in.",
    icon: ProcessorIcon,
    features: [
      "Multi-tenant architecture",
      "Subscription & billing integration",
      "Analytics & user management",
    ],
    href: "/saasdevelopment",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 8,
    title: "Custom Software",
    description:
      "Tailor-made software solutions designed around your unique business processes. No off-the-shelf compromises — just software that fits perfectly.",
    icon: CodeIcon,
    features: [
      "Requirements analysis & architecture",
      "Custom business logic & workflows",
      "Integration with existing systems",
    ],
    href: "/customsoftware",
    imageUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 9,
    title: "E-Commerce Solutions",
    description:
      "Online stores and marketplaces that convert. From product catalogs to checkout flows, we build commerce experiences that drive revenue.",
    icon: ShoppingCartIcon,
    features: [
      "Product catalog & inventory management",
      "Secure payment processing",
      "Order fulfillment & shipping automation",
    ],
    href: "/ecommercesolutions",
    imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 10,
    title: "API Development",
    description:
      "Robust, well-documented APIs that connect your systems and power your integrations. RESTful or GraphQL, built for reliability and speed.",
    icon: NetworkIcon,
    features: [
      "RESTful & GraphQL API design",
      "Third-party integration connectors",
      "Authentication & rate limiting",
    ],
    href: "/apidevelopment",
    imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=600",
  },
];

const mobileAppServices = [
  {
    id: 11,
    title: "iOS Development",
    description:
      "Native iOS apps built with Swift for optimal performance on iPhone and iPad. From concept to App Store, we handle the entire lifecycle.",
    icon: SmartphoneIcon,
    features: [
      "Native Swift development",
      "App Store optimization & submission",
      "Push notifications & in-app purchases",
    ],
    href: "/iosdevelopment",
    imageUrl: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 12,
    title: "Android Development",
    description:
      "Native Android apps using Kotlin for a seamless experience across the Android ecosystem. Built for performance and Play Store success.",
    icon: SmartphoneIcon,
    features: [
      "Native Kotlin development",
      "Material Design UI patterns",
      "Google Play Store deployment",
    ],
    href: "/androiddevelopment",
    imageUrl: "https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 13,
    title: "Cross-Platform Apps",
    description:
      "One codebase, every platform. Build for iOS and Android simultaneously with React Native or Flutter without sacrificing quality.",
    icon: LayersIcon,
    features: [
      "React Native & Flutter expertise",
      "Shared codebase for iOS & Android",
      "Native-level performance",
    ],
    href: "/crossplatformapps",
    imageUrl: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 14,
    title: "App Maintenance & Support",
    description:
      "Keep your apps running smoothly with ongoing updates, bug fixes, and performance optimization. We handle the tech so you focus on growth.",
    icon: WrenchIcon,
    features: [
      "Bug fixes & performance tuning",
      "OS compatibility updates",
      "Feature enhancements & scaling",
    ],
    href: "/appmaintenance",
    imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 15,
    title: "UI/UX Design",
    description:
      "Beautiful, intuitive interfaces that users love. We design mobile experiences with research-backed layouts and pixel-perfect execution.",
    icon: PaletteIcon,
    features: [
      "User research & wireframing",
      "Prototyping & usability testing",
      "Design systems & component libraries",
    ],
    href: "/uiuxdesign",
    imageUrl: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=600",
  },
];

const aiReceptionistServices = [
  {
    id: 16,
    title: "AI Virtual Receptionist",
    description:
      "An AI-powered receptionist that greets callers, answers questions, and routes conversations — available 24/7 without breaks or sick days.",
    icon: BotIcon,
    features: [
      "Natural language understanding",
      "Custom voice & personality",
      "Multi-language support",
    ],
    href: "/virtualreceptionist",
    imageUrl: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 17,
    title: "Intelligent Call Routing",
    description:
      "Smart call distribution that sends callers to the right person or department instantly. No hold music, no transfers, just fast resolution.",
    icon: PhoneIcon,
    features: [
      "AI-powered caller intent detection",
      "Dynamic routing rules",
      "Overflow & after-hours handling",
    ],
    href: "/callrouting",
    imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 18,
    title: "AI Appointment Scheduling",
    description:
      "Let AI handle your booking. Callers schedule, reschedule, and confirm appointments through natural conversation — synced to your calendar.",
    icon: CalendarIcon,
    features: [
      "Calendar integration (Google, Outlook)",
      "Automated reminders & confirmations",
      "No-show follow-up sequences",
    ],
    href: "/appointmentscheduling",
    imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 19,
    title: "AI Lead Qualification",
    description:
      "Qualify inbound leads automatically through intelligent conversation. Score, segment, and route hot leads to your sales team in real time.",
    icon: TargetIcon,
    features: [
      "Custom qualification criteria",
      "Real-time lead scoring",
      "CRM integration & auto-logging",
    ],
    href: "/leadqualification",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 20,
    title: "24/7 Customer Support",
    description:
      "AI-powered support that resolves common issues instantly, escalates complex ones, and never makes a customer wait. Always on, always helpful.",
    icon: HeadphonesIcon,
    features: [
      "FAQ & knowledge base automation",
      "Ticket creation & escalation",
      "Sentiment analysis & priority routing",
    ],
    href: "/customersupport247",
    imageUrl: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=600",
  },
];

type ServiceItem = {
  id: number;
  title: string;
  description: string;
  icon: typeof SalesIcon;
  features: string[];
  href: string;
  lottieUrl?: string;
  imageUrl?: string;
};

const servicesByCategory: Record<ServiceCategory, ServiceItem[]> = {
  automation: automationServices,
  websoftware: webSoftwareServices,
  mobileapps: mobileAppServices,
  aireceptionists: aiReceptionistServices,
};

const discoveryCard = {
  title: "Not Sure Where to Start?",
  subtitle: "Let Us Discover Your Growth Opportunities",
  description:
    "We'll analyze your current systems, software, and workflows to identify the right technology solutions — from automation to custom software to AI integration.",
  icon: DiscoveryIcon,
  benefits: [
    "AI-powered workflow & systems analysis",
    "Custom technology roadmap",
    "ROI projections for each opportunity",
  ],
};

const integrationLogos = [
  { src: "/appLogos/66f4d7cdeb6560b7c1ec0f6a_asana_svg_55712e4bc0.svg", alt: "Asana" },
  { src: "/appLogos/66f4d7cdeb6560b7c1ec0fc4_airtable_svg_3260e9a572.svg", alt: "Airtable" },
  { src: "/appLogos/66f6a68fbe0cbedc9ca2ddb3_mailchimp_svg_574c2a4641.svg", alt: "Mailchimp" },
  { src: "/appLogos/66e3d729fbb7d09521916b34_microsoft_Outlook_svg_baf4ee4ddf.svg", alt: "Outlook" },
  { src: "/appLogos/66f4d7ccbfc12ceb1fe6ae68_active_Campaign_svg_35c109a2eb.svg", alt: "ActiveCampaign" },
  { src: "/appLogos/66f4d7cd19ed90bc689462b3_autopilot_svg_b9a6db3526.svg", alt: "Autopilot" },
  { src: "/appLogos/66f4d7ce9b227a3194696e89_automizy_png_6c4c2ae7c0.svg", alt: "Automizy" },
  { src: "/appLogos/66f4d7cc8fbc5fb41664b4ba_aggregate_svg_920d36c8b1.svg", alt: "Aggregate" },
  { src: "/appLogos/66f4d7cc7710ca11e9ff79c3_affinity_svg_bfb77106bf.svg", alt: "Affinity" },
  { src: "/appLogos/66f4d7cdc905e0766217414a_ai_Transform_svg_295de265a2.svg", alt: "AI Transform" },
  { src: "/appLogos/66f6a68f9befbce885cd4c83_marketstack_svg_a3eb7798e5.svg", alt: "Marketstack" },
  { src: "/appLogos/66f4d7cd45de65d9d01bbec5_agile_Crm_png_ab0a6823a4.svg", alt: "Agile CRM" },
];

const Services = () => {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>("automation");

  const activeServices = servicesByCategory[activeCategory];
  const showLottie = activeCategory === "automation";

  return (
    <section
      ref={ref}
      id="services"
      className="relative section-padding bg-paper dark:bg-gray-950 overflow-hidden"
    >
      {/* Pattern C - Paper with honeycomb background */}
      <img
        src="/assets/beeInspiration/5303586.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover opacity-[0.25] dark:opacity-15"
      />
      <div className="absolute inset-0 bg-paper/60 dark:bg-gray-950/80" />
      <DarkHoneycombBackground patternId="services-honeycomb" />

      <div className="container-width relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-10 md:mb-14 transition-all duration-1000 ease-out-expo ${
            isIntersecting
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="heading-lg text-ink dark:text-white mb-4 text-balance">
            Complete{" "}
            <span className="text-gradient">Technology Solutions</span>
          </h2>
          <p className="text-body-lg max-w-2xl mx-auto">
            Software development, AI automation, mobile apps, and more — tailored to your business.
          </p>
        </div>

        {/* Category Filter Buttons */}
        <div
          className={`flex flex-wrap justify-center gap-3 mb-12 md:mb-16 transition-all duration-1000 ease-out-expo delay-100 ${
            isIntersecting
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          {categories.map(({ key, label, icon: Icon }) => (
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
          {activeServices.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className={`card-honeycomb group p-6 md:p-8 flex flex-col transition-all duration-700 ease-out-expo ${
                  isIntersecting
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Image / Lottie Area */}
                <div className="relative w-full h-40 mb-6 hex-cut-sm overflow-hidden bg-paper dark:bg-gray-800">
                  {showLottie && 'lottieUrl' in service && service.lottieUrl ? (
                    <iframe
                      src={service.lottieUrl}
                      title={service.title}
                      className="w-full h-full border-0"
                      loading="lazy"
                    />
                  ) : service.imageUrl ? (
                    <Image
                      src={service.imageUrl}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100 mix-blend-luminosity hover:mix-blend-normal"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-brand/5 via-brand/10 to-brand/5 dark:from-brand/10 dark:via-brand/20 dark:to-brand/10">
                      <IconComponent size={48} className="text-brand/30 dark:text-brand/40" />
                    </div>
                  )}
                </div>

                {/* Icon */}
                <div className="icon-hex w-12 h-12 mb-5">
                  <IconComponent size={24} className="text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-ink dark:text-white mb-3 group-hover:text-brand transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-body text-ink-secondary dark:text-gray-400 mb-5 flex-grow">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2.5 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-start text-[14px] text-ink-tertiary dark:text-gray-500"
                    >
                      <span className="w-2 h-2 bg-brand clip-hex mt-1.5 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Link
                  href={service.href}
                  className="inline-flex items-center justify-center gap-2 w-full py-3 px-5 hex-cut-sm
                    bg-ink/5 dark:bg-white/5 text-ink dark:text-white font-medium text-[14px]
                    hover:bg-brand hover:text-white
                    transition-all duration-300 ease-out-expo group/btn"
                >
                  <span>Learn More</span>
                  <ArrowRightIcon
                    size={16}
                    className="transition-transform duration-300 group-hover/btn:translate-x-1"
                  />
                </Link>
              </div>
            );
          })}

          {/* Discovery Card - Only show on Automation tab */}
          {activeCategory === "automation" && (
            <div
              className={`card-glass group p-6 md:p-8 flex flex-col border-brand/20 dark:border-brand/30 transition-all duration-700 ease-out-expo ${
                isIntersecting
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: "500ms" }}
            >
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 clip-hex text-[12px] font-bold bg-success text-white">
                  FREE
                </span>
              </div>

              <div className="icon-hex w-12 h-12 mb-5">
                <DiscoveryIcon size={24} className="text-white" />
              </div>

              <h3 className="text-xl font-semibold text-ink dark:text-white mb-3 group-hover:text-brand transition-colors duration-300">
                {discoveryCard.title}
              </h3>

              <p className="text-body text-ink-secondary dark:text-gray-400 mb-5 flex-grow">
                {discoveryCard.description}
              </p>

              <ul className="space-y-2.5 mb-6">
                {discoveryCard.benefits.map((benefit, benefitIndex) => (
                  <li
                    key={benefitIndex}
                    className="flex items-start text-[14px] text-ink-tertiary dark:text-gray-500"
                  >
                    <span className="w-2 h-2 bg-brand clip-hex mt-1.5 mr-3 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="https://calendar.app.google/ydhNfzf6HS7uVcUp7"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full text-center text-[14px]"
              >
                Book Discovery Call
              </Link>
            </div>
          )}
        </div>

        {/* Integration Ecosystem */}
        <div
          className={`transition-all duration-1000 ease-out-expo delay-300 ${
            isIntersecting
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center mb-10">
            <div className="badge mb-4 mx-auto">
              <NetworkIcon size={16} className="mr-2" />
              <span>Integration Ecosystem</span>
            </div>
            <h3 className="heading-md text-ink dark:text-white mb-3">
              Plug AI into your <span className="text-brand">existing data</span>
            </h3>
            <p className="text-body max-w-2xl mx-auto">
              We connect your existing systems — from CRMs to healthcare EMR/EHR platforms
              — to automate workflows, power custom software, and turn your data
              into actionable insights.
            </p>
          </div>

          <div className="relative overflow-hidden hex-cut bg-paper dark:bg-gray-800/50 border border-ink/5 dark:border-white/5 py-8">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-paper dark:from-gray-800/50 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-paper dark:from-gray-800/50 to-transparent z-10 pointer-events-none" />

            <div className="flex animate-marquee">
              {[...integrationLogos, ...integrationLogos, ...integrationLogos].map(
                (logo, i) => (
                  <div
                    key={i}
                    className="flex-shrink-0 mx-4 w-14 h-14 clip-hex bg-white dark:bg-gray-700
                      flex items-center justify-center
                      hover:scale-105 transition-all duration-300"
                  >
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={36}
                      height={36}
                      className="w-9 h-9 object-contain"
                    />
                  </div>
                )
              )}
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a
              href="https://n8n.io/integrations/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 hex-cut-sm
                bg-[#FF6B6B] hover:bg-[#FF5252] text-white text-[14px] font-semibold
                shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
            >
              <NetworkIcon size={16} />
              <span>n8n Integrations</span>
            </a>
            <a
              href="https://www.make.com/en/integrations?community=1&verified=1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 hex-cut-sm
                bg-[#8B5CF6] hover:bg-[#7C3AED] text-white text-[14px] font-semibold
                shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
            >
              <NetworkIcon size={16} />
              <span>Make Integrations</span>
            </a>
            <a
              href="https://zapier.com/apps"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 hex-cut-sm
                bg-[#FF4A00] hover:bg-[#E64200] text-white text-[14px] font-semibold
                shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
            >
              <NetworkIcon size={16} />
              <span>Zapier Integrations</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
