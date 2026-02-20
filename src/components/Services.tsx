"use client";

import Image from "next/image";
import Link from "next/link";
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
  HexagonIcon,
} from "@/components/icons/PremiumIcons";
import { DarkHoneycombBackground } from "@/components/ui/SectionBackgrounds";

const Services = () => {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

  const services = [
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
      lottieUrl:
        "https://lottie.host/embed/1908348d-e5e9-48d0-8c47-e3d0b9684236/6yg38oV1w0.lottie",
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
      lottieUrl:
        "https://lottie.host/embed/0a219d7c-539c-4100-9066-5124cc46c7ac/Dmrwc1Et7J.lottie",
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
      lottieUrl:
        "https://lottie.host/embed/676ba249-78b3-4d76-956d-adf89efb2a76/ygRWOuRKbJ.lottie",
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
      lottieUrl:
        "https://lottie.host/embed/54f3962f-6105-4bd1-a7b2-e3669d81ce09/GWrW6epXID.lottie",
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
      lottieUrl:
        "https://lottie.host/embed/86945951-c9a6-4c44-ab90-4a8cafd1adf7/3qazEaYoVx.lottie",
    },
  ];

  const discoveryCard = {
    title: "Not Sure What to Automate?",
    subtitle: "Let Us Discover Your Automation Opportunities",
    description:
      "We'll analyze your current systems, software, and workflows to identify hidden automation opportunities you might have missed.",
    icon: DiscoveryIcon,
    benefits: [
      "AI-powered workflow analysis",
      "Custom automation roadmap",
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
        {/* Section Header - Apple-style */}
        <div
          className={`text-center mb-16 md:mb-20 transition-all duration-1000 ease-out-expo ${
            isIntersecting
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="heading-lg text-ink dark:text-white mb-4 text-balance">
            Complete{" "}
            <span className="text-gradient">Automation Solutions</span>
          </h2>
          <p className="text-body-lg max-w-2xl mx-auto">
            We will automate your manual processes or you don&apos;t pay.
          </p>
        </div>

        {/* Services Grid - Premium cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
          {services.map((service, index) => {
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
                {/* Lottie Animation */}
                <div className="relative w-full h-40 mb-6 hex-cut-sm overflow-hidden bg-paper dark:bg-gray-800">
                  <iframe
                    src={service.lottieUrl}
                    title={service.title}
                    className="w-full h-full border-0"
                    loading="lazy"
                  />
                </div>

                {/* Icon - Hexagonal */}
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

          {/* Discovery Card - Special styling */}
          <div
            className={`card-glass group p-6 md:p-8 flex flex-col border-brand/20 dark:border-brand/30 transition-all duration-700 ease-out-expo ${
              isIntersecting
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
            style={{ transitionDelay: "500ms" }}
          >
            {/* FREE Badge */}
            <div className="absolute top-4 right-4">
              <span className="px-3 py-1 clip-hex text-[12px] font-bold bg-success text-white">
                FREE
              </span>
            </div>

            {/* Icon - Hexagonal */}
            <div className="icon-hex w-12 h-12 mb-5">
              <DiscoveryIcon size={24} className="text-white" />
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold text-ink dark:text-white mb-3 group-hover:text-brand transition-colors duration-300">
              {discoveryCard.title}
            </h3>

            {/* Description */}
            <p className="text-body text-ink-secondary dark:text-gray-400 mb-5 flex-grow">
              {discoveryCard.description}
            </p>

            {/* Benefits */}
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

            {/* CTA Button */}
            <Link
              href="https://calendar.app.google/hTHhAJ1rCRTQMgheA"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full text-center text-[14px]"
            >
              Book Discovery Call
            </Link>
          </div>
        </div>

        {/* Integration Ecosystem */}
        <div
          className={`transition-all duration-1000 ease-out-expo delay-300 ${
            isIntersecting
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          {/* Header */}
          <div className="text-center mb-10">
            <div className="badge mb-4 mx-auto">
              <NetworkIcon size={16} className="mr-2" />
              <span>Integration Ecosystem</span>
            </div>
            <h3 className="heading-md text-ink dark:text-white mb-3">
              Plug AI into your <span className="text-brand">existing data</span>
            </h3>
            <p className="text-body max-w-2xl mx-auto">
              We connect AI to your existing systems — from CRMs to project
              management tools — to automate repetitive work and turn your data
              into actionable insights.
            </p>
          </div>

          {/* Logo Marquee */}
          <div className="relative overflow-hidden hex-cut bg-paper dark:bg-gray-800/50 border border-ink/5 dark:border-white/5 py-8">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-paper dark:from-gray-800/50 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-paper dark:from-gray-800/50 to-transparent z-10 pointer-events-none" />

            {/* Marquee track */}
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

          {/* Integration Platform Buttons */}
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
