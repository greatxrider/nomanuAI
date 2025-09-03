"use client";

import Image from "next/image";
import Link from "next/link";
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
} from "lucide-react";

const Services = () => {
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

  // Special discovery card for clients who don't know what to automate
  const discoveryCard = {
    id: 6,
    title: "Not Sure What to Automate?",
    subtitle: "Let Us Discover Your Automation Opportunities",
    description:
      "We'll analyze your current systems, software, and workflows to identify hidden automation opportunities you might have missed.",
    icon: Search,
    benefits: [
      "AI-powered workflow analysis",
      "Custom automation roadmap",
      "ROI projections for each opportunity",
    ],
    cta: {
      text: "Book Discovery Call",
      description:
        "Free 30-minute consultation to uncover automation potential",
    },
  };

  return (
    <section
      id="services"
      className="relative section-padding bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 overflow-hidden"
    >
      {/* Glowing Orange Gradient Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large Glowing Orange Gradient Orbs - Brighter Edges */}
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

        {/* Additional Floating Orange Particles - Brighter */}
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
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-brand-orange/10 border border-brand-orange/30 rounded-full backdrop-blur-sm mb-6">
            <Cpu className="w-5 h-5 text-brand-orange mr-2 animate-pulse" />
            <span className="text-brand-orange font-semibold">
              Our AI Services
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Automate Everything or{" "}
            <span className="text-brand-orange">Don't Pay</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            We will automate your manual processes or you don't pay.
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
              {discoveryCard.title}
            </h3>

            {/* Description */}
            <p className="text-base text-gray-600 dark:text-gray-300 mb-4 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
              {discoveryCard.description}
            </p>

            {/* Features */}
            <div className="space-y-2 mb-6 flex-grow">
              {discoveryCard.benefits.map((benefit, benefitIndex) => (
                <div
                  key={benefitIndex}
                  className="flex items-center text-sm text-gray-500 dark:text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors duration-300"
                >
                  <div className="w-3 h-3 bg-brand-orange rounded-full mr-2 flex-shrink-0 shadow-sm shadow-brand-orange/25" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>

            {/* Book a Call Button - Always at bottom */}
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

        {/* Tools & Apps Marquee */}
        <div className="mb-16">
          {/* Marquee Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-6 py-3 bg-brand-orange/10 border border-brand-orange/30 rounded-full backdrop-blur-sm mb-6">
              <Network className="w-5 h-5 text-brand-orange mr-3 animate-pulse" />
              <span className="text-brand-orange font-semibold">
                Integration Ecosystem
              </span>
              <div className="w-2 h-2 bg-brand-orange rounded-full ml-3 animate-pulse" />
            </div>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Plug AI into your{" "}
              <span className="text-brand-orange">existing data</span>
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We connect AI to your existing systems — from CRMs to project
              management tools — to automate repetitive work, streamline
              communication, and turn your data into actionable insights.
            </p>
          </div>

          {/* First Marquee - Left Direction */}
          <div className="relative overflow-hidden bg-gray-900/20 dark:bg-gray-800/20 backdrop-blur-sm rounded-2xl border border-gray-200/20 dark:border-gray-700/20">
            {/* Left Shadow Fade */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-900/20 via-gray-900/10 to-transparent dark:from-gray-800/20 dark:via-gray-800/10 z-10 pointer-events-none" />

            {/* Right Shadow Fade */}
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-900/20 via-gray-900/10 to-transparent dark:from-gray-800/20 dark:via-gray-800/10 z-10 pointer-events-none" />

            {/* Marquee Track - Left Direction */}
            <div className="flex animate-marquee">
              {/* First Row */}
              <div className="flex items-center space-x-6 py-8 px-8 min-w-max">
                {/* App Logos */}
                <div className="flex items-center justify-center w-16 h-16 bg-white rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:border-brand-orange/50 transition-all duration-300 hover:scale-105 group shadow-sm">
                  <Image
                    src="/appLogos/66f4d7cdeb6560b7c1ec0f6a_asana_svg_55712e4bc0.svg"
                    alt="Asana"
                    width={40}
                    height={40}
                    className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <div className="flex items-center justify-center w-16 h-16 bg-white rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:border-brand-orange/50 transition-all duration-300 hover:scale-105 group shadow-sm">
                  <Image
                    src="/appLogos/66f4d7cdeb6560b7c1ec0fc4_airtable_svg_3260e9a572.svg"
                    alt="Airtable"
                    width={40}
                    height={40}
                    className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <div className="flex items-center justify-center w-16 h-16 bg-white rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:border-brand-orange/50 transition-all duration-300 hover:scale-105 group shadow-sm">
                  <Image
                    src="/appLogos/66f6a68fbe0cbedc9ca2ddb3_mailchimp_svg_574c2a4641.svg"
                    alt="Mailchimp"
                    width={40}
                    height={40}
                    className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <div className="flex items-center justify-center w-16 h-16 bg-white rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:border-brand-orange/50 transition-all duration-300 hover:scale-105 group shadow-sm">
                  <Image
                    src="/appLogos/66e3d729fbb7d09521916b34_microsoft_Outlook_svg_baf4ee4ddf.svg"
                    alt="Microsoft Outlook"
                    width={40}
                    height={40}
                    className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <div className="flex items-center justify-center w-16 h-16 bg-white rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:border-brand-orange/50 transition-all duration-300 hover:scale-105 group shadow-sm">
                  <Image
                    src="/appLogos/66f4d7ccbfc12ceb1fe6ae68_active_Campaign_svg_35c109a2eb.svg"
                    alt="ActiveCampaign"
                    width={40}
                    height={40}
                    className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <div className="flex items-center justify-center w-16 h-16 bg-white rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:border-brand-orange/50 transition-all duration-300 hover:scale-105 group shadow-sm">
                  <Image
                    src="/appLogos/66f4d7cd19ed90bc689462b3_autopilot_svg_b9a6db3526.svg"
                    alt="Autopilot"
                    width={40}
                    height={40}
                    className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <div className="flex items-center justify-center w-16 h-16 bg-white rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:border-brand-orange/50 transition-all duration-300 hover:scale-105 group shadow-sm">
                  <Image
                    src="/appLogos/66f4d7ce9b227a3194696e89_automizy_png_6c4c2ae7c0.svg"
                    alt="Automizy"
                    width={40}
                    height={40}
                    className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <div className="flex items-center justify-center w-16 h-16 bg-white rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:border-brand-orange/50 transition-all duration-300 hover:scale-105 group shadow-sm">
                  <Image
                    src="/appLogos/66f4d7cc8fbc5fb41664b4ba_aggregate_svg_920d36c8b1.svg"
                    alt="Aggregate"
                    width={40}
                    height={40}
                    className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <div className="flex items-center justify-center w-16 h-16 bg-white rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:border-brand-orange/50 transition-all duration-300 hover:scale-105 group shadow-sm">
                  <Image
                    src="/appLogos/66f4d7cc51d72b9903df9fde_amqp_svg_ebc4c3b32a.svg"
                    alt="AMQP"
                    width={40}
                    height={40}
                    className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <div className="flex items-center justify-center w-16 h-16 bg-white rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:border-brand-orange/50 transition-all duration-300 hover:scale-105 group shadow-sm">
                  <Image
                    src="/appLogos/66f4d7cc7710ca11e9ff79c3_affinity_svg_bfb77106bf.svg"
                    alt="Affinity"
                    width={40}
                    height={40}
                    className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <div className="flex items-center justify-center w-16 h-16 bg-white rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:border-brand-orange/50 transition-all duration-300 hover:scale-105 group shadow-sm">
                  <Image
                    src="/appLogos/66f4d7cdc905e0766217414a_ai_Transform_svg_295de265a2.svg"
                    alt="AI Transform"
                    width={40}
                    height={40}
                    className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <div className="flex items-center justify-center w-16 h-16 bg-white rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:border-brand-orange/50 transition-all duration-300 hover:scale-105 group shadow-sm">
                  <Image
                    src="/appLogos/66f6a68f9befbce885cd4c83_marketstack_svg_a3eb7798e5.svg"
                    alt="Marketstack"
                    width={40}
                    height={40}
                    className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <div className="flex items-center justify-center w-16 h-16 bg-white rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:border-brand-orange/50 transition-all duration-300 hover:scale-105 group shadow-sm">
                  <Image
                    src="/appLogos/66f4d7cd45de65d9d01bbec5_agile_Crm_png_ab0a6823a4.svg"
                    alt="Agile CRM"
                    width={40}
                    height={40}
                    className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <div className="flex items-center justify-center w-16 h-16 bg-white rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:border-brand-orange/50 transition-all duration-300 hover:scale-105 group shadow-sm">
                  <Image
                    src="/appLogos/66e3d729644e57ad4c4882db_d3bf3a_svg_679a3f62f0.svg"
                    alt="Database"
                    width={40}
                    height={40}
                    className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <div className="flex items-center justify-center w-16 h-16 bg-white rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:border-brand-orange/50 transition-all duration-300 hover:scale-105 group shadow-sm">
                  <Image
                    src="/appLogos/66e3d729c77b48f5c03da73d_Group_2_58ad425d58.svg"
                    alt="Integration"
                    width={40}
                    height={40}
                    className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <div className="flex items-center justify-center w-16 h-16 bg-white rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:border-brand-orange/50 transition-all duration-300 hover:scale-105 group shadow-sm">
                  <Image
                    src="/appLogos/66f4d7cc7d05b082d9860095_Img_1_0efa51a03c.svg"
                    alt="API"
                    width={40}
                    height={40}
                    className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Duplicate for seamless loop */}
              <div className="flex items-center space-x-6 py-8 px-8 min-w-max">
                {/* App Logos - Duplicate Set */}
                <div className="flex items-center justify-center w-16 h-16 bg-white rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:border-brand-orange/50 transition-all duration-300 hover:scale-105 group shadow-sm">
                  <Image
                    src="/appLogos/66f4d7cdeb6560b7c1ec0f6a_asana_svg_55712e4bc0.svg"
                    alt="Asana"
                    width={40}
                    height={40}
                    className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <div className="flex items-center justify-center w-16 h-16 bg-white rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:border-brand-orange/50 transition-all duration-300 hover:scale-105 group shadow-sm">
                  <Image
                    src="/appLogos/66f4d7cdeb6560b7c1ec0fc4_airtable_svg_3260e9a572.svg"
                    alt="Airtable"
                    width={40}
                    height={40}
                    className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <div className="flex items-center justify-center w-16 h-16 bg-white rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:border-brand-orange/50 transition-all duration-300 hover:scale-105 group shadow-sm">
                  <Image
                    src="/appLogos/66f6a68fbe0cbedc9ca2ddb3_mailchimp_svg_574c2a4641.svg"
                    alt="Mailchimp"
                    width={40}
                    height={40}
                    className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <div className="flex items-center justify-center w-16 h-16 bg-white rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:border-brand-orange/50 transition-all duration-300 hover:scale-105 group shadow-sm">
                  <Image
                    src="/appLogos/66e3d729fbb7d09521916b34_microsoft_Outlook_svg_baf4ee4ddf.svg"
                    alt="Microsoft Outlook"
                    width={40}
                    height={40}
                    className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <div className="flex items-center justify-center w-16 h-16 bg-white rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:border-brand-orange/50 transition-all duration-300 hover:scale-105 group shadow-sm">
                  <Image
                    src="/appLogos/66f4d7ccbfc12ceb1fe6ae68_active_Campaign_svg_35c109a2eb.svg"
                    alt="ActiveCampaign"
                    width={40}
                    height={40}
                    className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <div className="flex items-center justify-center w-16 h-16 bg-white rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:border-brand-orange/50 transition-all duration-300 hover:scale-105 group shadow-sm">
                  <Image
                    src="/appLogos/66f4d7cd19ed90bc689462b3_autopilot_svg_b9a6db3526.svg"
                    alt="Autopilot"
                    width={40}
                    height={40}
                    className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <div className="flex items-center justify-center w-16 h-16 bg-white rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:border-brand-orange/50 transition-all duration-300 hover:scale-105 group shadow-sm">
                  <Image
                    src="/appLogos/66f4d7ce9b227a3194696e89_automizy_png_6c4c2ae7c0.svg"
                    alt="Automizy"
                    width={40}
                    height={40}
                    className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <div className="flex items-center justify-center w-16 h-16 bg-white rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:border-brand-orange/50 transition-all duration-300 hover:scale-105 group shadow-sm">
                  <Image
                    src="/appLogos/66f4d7cc8fbc5fb41664b4ba_aggregate_svg_920d36c8b1.svg"
                    alt="Aggregate"
                    width={40}
                    height={40}
                    className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <div className="flex items-center justify-center w-16 h-16 bg-white rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:border-brand-orange/50 transition-all duration-300 hover:scale-105 group shadow-sm">
                  <Image
                    src="/appLogos/66f4d7cc51d72b9903df9fde_amqp_svg_ebc4c3b32a.svg"
                    alt="AMQP"
                    width={40}
                    height={40}
                    className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <div className="flex items-center justify-center w-16 h-16 bg-white rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:border-brand-orange/50 transition-all duration-300 hover:scale-105 group shadow-sm">
                  <Image
                    src="/appLogos/66f4d7cc7710ca11e9ff79c3_affinity_svg_bfb77106bf.svg"
                    alt="Affinity"
                    width={40}
                    height={40}
                    className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <div className="flex items-center justify-center w-16 h-16 bg-white rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:border-brand-orange/50 transition-all duration-300 hover:scale-105 group shadow-sm">
                  <Image
                    src="/appLogos/66f4d7cdc905e0766217414a_ai_Transform_svg_295de265a2.svg"
                    alt="AI Transform"
                    width={40}
                    height={40}
                    className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <div className="flex items-center justify-center w-16 h-16 bg-white rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:border-brand-orange/50 transition-all duration-300 hover:scale-105 group shadow-sm">
                  <Image
                    src="/appLogos/66f6a68f9befbce885cd4c83_marketstack_svg_a3eb7798e5.svg"
                    alt="Marketstack"
                    width={40}
                    height={40}
                    className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Third duplicate for seamless infinite loop */}
              <div className="flex items-center space-x-6 py-8 px-8 min-w-max">
                {/* App Logos - Third Duplicate Set */}
                <div className="flex items-center justify-center w-16 h-16 bg-white rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:border-brand-orange/50 transition-all duration-300 hover:scale-105 group shadow-sm">
                  <Image
                    src="/appLogos/66f4d7cdeb6560b7c1ec0f6a_asana_svg_55712e4bc0.svg"
                    alt="Asana"
                    width={40}
                    height={40}
                    className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <div className="flex items-center justify-center w-16 h-16 bg-white rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:border-brand-orange/50 transition-all duration-300 hover:scale-105 group shadow-sm">
                  <Image
                    src="/appLogos/66f4d7cdeb6560b7c1ec0fc4_airtable_svg_3260e9a572.svg"
                    alt="Airtable"
                    width={40}
                    height={40}
                    className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <div className="flex items-center justify-center w-16 h-16 bg-white rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:border-brand-orange/50 transition-all duration-300 hover:scale-105 group shadow-sm">
                  <Image
                    src="/appLogos/66f6a68fbe0cbedc9ca2ddb3_mailchimp_svg_574c2a4641.svg"
                    alt="Mailchimp"
                    width={40}
                    height={40}
                    className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <div className="flex items-center justify-center w-16 h-16 bg-white rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:border-brand-orange/50 transition-all duration-300 hover:scale-105 group shadow-sm">
                  <Image
                    src="/appLogos/66e3d729fbb7d09521916b34_microsoft_Outlook_svg_baf4ee4ddf.svg"
                    alt="Microsoft Outlook"
                    width={40}
                    height={40}
                    className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <div className="flex items-center justify-center w-16 h-16 bg-white rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:border-brand-orange/50 transition-all duration-300 hover:scale-105 group shadow-sm">
                  <Image
                    src="/appLogos/66f4d7ccbfc12ceb1fe6ae68_active_Campaign_svg_35c109a2eb.svg"
                    alt="ActiveCampaign"
                    width={40}
                    height={40}
                    className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <div className="flex items-center justify-center w-16 h-16 bg-white rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:border-brand-orange/50 transition-all duration-300 hover:scale-105 group shadow-sm">
                  <Image
                    src="/appLogos/66f4d7cd19ed90bc689462b3_autopilot_svg_b9a6db3526.svg"
                    alt="Autopilot"
                    width={40}
                    height={40}
                    className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <div className="flex items-center justify-center w-16 h-16 bg-white rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:border-brand-orange/50 transition-all duration-300 hover:scale-105 group shadow-sm">
                  <Image
                    src="/appLogos/66f4d7ce9b227a3194696e89_automizy_png_6c4c2ae7c0.svg"
                    alt="Automizy"
                    width={40}
                    height={40}
                    className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <div className="flex items-center justify-center w-16 h-16 bg-white rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:border-brand-orange/50 transition-all duration-300 hover:scale-105 group shadow-sm">
                  <Image
                    src="/appLogos/66f4d7cc8fbc5fb41664b4ba_aggregate_svg_920d36c8b1.svg"
                    alt="Aggregate"
                    width={40}
                    height={40}
                    className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <div className="flex items-center justify-center w-16 h-16 bg-white rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:border-brand-orange/50 transition-all duration-300 hover:scale-105 group shadow-sm">
                  <Image
                    src="/appLogos/66f4d7cc51d72b9903df9fde_amqp_svg_ebc4c3b32a.svg"
                    alt="AMQP"
                    width={40}
                    height={40}
                    className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <div className="flex items-center justify-center w-16 h-16 bg-white rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:border-brand-orange/50 transition-all duration-300 hover:scale-105 group shadow-sm">
                  <Image
                    src="/appLogos/66f4d7cc7710ca11e9ff79c3_affinity_svg_bfb77106bf.svg"
                    alt="Affinity"
                    width={40}
                    height={40}
                    className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <div className="flex items-center justify-center w-16 h-16 bg-white rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:border-brand-orange/50 transition-all duration-300 hover:scale-105 group shadow-sm">
                  <Image
                    src="/appLogos/66f4d7cdc905e0766217414a_ai_Transform_svg_295de265a2.svg"
                    alt="AI Transform"
                    width={40}
                    height={40}
                    className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <div className="flex items-center justify-center w-16 h-16 bg-white rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:border-brand-orange/50 transition-all duration-300 hover:scale-105 group shadow-sm">
                  <Image
                    src="/appLogos/66f6a68f9befbce885cd4c83_marketstack_svg_a3eb7798e5.svg"
                    alt="Marketstack"
                    width={40}
                    height={40}
                    className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <div className="flex items-center justify-center w-16 h-16 bg-white rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:border-brand-orange/50 transition-all duration-300 hover:scale-105 group shadow-sm">
                  <Image
                    src="/appLogos/66f4d7cd45de65d9d01bbec5_agile_Crm_png_ab0a6823a4.svg"
                    alt="Agile CRM"
                    width={40}
                    height={40}
                    className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <div className="flex items-center justify-center w-16 h-16 bg-white rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:border-brand-orange/50 transition-all duration-300 hover:scale-105 group shadow-sm">
                  <Image
                    src="/appLogos/66e3d729644e57ad4c4882db_d3bf3a_svg_679a3f62f0.svg"
                    alt="Database"
                    width={40}
                    height={40}
                    className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <div className="flex items-center justify-center w-16 h-16 bg-white rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:border-brand-orange/50 transition-all duration-300 hover:scale-105 group shadow-sm">
                  <Image
                    src="/appLogos/66e3d729c77b48f5c03da73d_Group_2_58ad425d58.svg"
                    alt="Integration"
                    width={40}
                    height={40}
                    className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <div className="flex items-center justify-center w-16 h-16 bg-white rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:border-brand-orange/50 transition-all duration-300 hover:scale-105 group shadow-sm">
                  <Image
                    src="/appLogos/66f4d7cc7d05b082d9860095_Img_1_0efa51a03c.svg"
                    alt="API"
                    width={40}
                    height={40}
                    className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Second Marquee - Right Direction */}
          <div className="relative overflow-hidden bg-gray-900/20 dark:bg-gray-800/20 backdrop-blur-sm rounded-2xl border border-gray-200/20 dark:border-gray-700/20 mt-8">
            {/* Left Shadow Fade */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-900/20 via-gray-900/10 to-transparent dark:from-gray-800/20 dark:via-gray-800/10 z-10 pointer-events-none" />

            {/* Right Shadow Fade */}
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-900/20 via-gray-900/10 to-transparent dark:from-gray-800/20 dark:via-gray-800/10 z-10 pointer-events-none" />

            {/* Marquee Track - Right Direction */}
            <div className="flex animate-marquee-reverse">
              {/* First Row */}
              <div className="flex items-center space-x-6 py-8 px-8 min-w-max">
                {/* App Logos */}
                <div className="flex items-center justify-center w-16 h-16 bg-white rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:border-brand-orange/50 transition-all duration-300 hover:scale-105 group shadow-sm">
                  <Image
                    src="/appLogos/66f4d7cdeb6560b7c1ec0f6a_asana_svg_55712e4bc0.svg"
                    alt="Asana"
                    width={40}
                    height={40}
                    className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <div className="flex items-center justify-center w-16 h-16 bg-white rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:border-brand-orange/50 transition-all duration-300 hover:scale-105 group shadow-sm">
                  <Image
                    src="/appLogos/66f4d7cdeb6560b7c1ec0fc4_airtable_svg_3260e9a572.svg"
                    alt="Airtable"
                    width={40}
                    height={40}
                    className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <div className="flex items-center justify-center w-16 h-16 bg-white rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:border-brand-orange/50 transition-all duration-300 hover:scale-105 group shadow-sm">
                  <Image
                    src="/appLogos/66f6a68fbe0cbedc9ca2ddb3_mailchimp_svg_574c2a4641.svg"
                    alt="Mailchimp"
                    width={40}
                    height={40}
                    className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <div className="flex items-center justify-center w-16 h-16 bg-white rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:border-brand-orange/50 transition-all duration-300 hover:scale-105 group shadow-sm">
                  <Image
                    src="/appLogos/66e3d729fbb7d09521916b34_microsoft_Outlook_svg_baf4ee4ddf.svg"
                    alt="Microsoft Outlook"
                    width={40}
                    height={40}
                    className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <div className="flex items-center justify-center w-16 h-16 bg-white rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:border-brand-orange/50 transition-all duration-300 hover:scale-105 group shadow-sm">
                  <Image
                    src="/appLogos/66f4d7ccbfc12ceb1fe6ae68_active_Campaign_svg_35c109a2eb.svg"
                    alt="ActiveCampaign"
                    width={40}
                    height={40}
                    className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <div className="flex items-center justify-center w-16 h-16 bg-white rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:border-brand-orange/50 transition-all duration-300 hover:scale-105 group shadow-sm">
                  <Image
                    src="/appLogos/66f4d7cd19ed90bc689462b3_autopilot_svg_b9a6db3526.svg"
                    alt="Autopilot"
                    width={40}
                    height={40}
                    className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <div className="flex items-center justify-center w-16 h-16 bg-white rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:border-brand-orange/50 transition-all duration-300 hover:scale-105 group shadow-sm">
                  <Image
                    src="/appLogos/66f4d7ce9b227a3194696e89_automizy_png_6c4c2ae7c0.svg"
                    alt="Automizy"
                    width={40}
                    height={40}
                    className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <div className="flex items-center justify-center w-16 h-16 bg-white rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:border-brand-orange/50 transition-all duration-300 hover:scale-105 group shadow-sm">
                  <Image
                    src="/appLogos/66f4d7cc8fbc5fb41664b4ba_aggregate_svg_920d36c8b1.svg"
                    alt="Aggregate"
                    width={40}
                    height={40}
                    className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <div className="flex items-center justify-center w-16 h-16 bg-white rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:border-brand-orange/50 transition-all duration-300 hover:scale-105 group shadow-sm">
                  <Image
                    src="/appLogos/66f4d7cc51d72b9903df9fde_amqp_svg_ebc4c3b32a.svg"
                    alt="AMQP"
                    width={40}
                    height={40}
                    className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <div className="flex items-center justify-center w-16 h-16 bg-white rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:border-brand-orange/50 transition-all duration-300 hover:scale-105 group shadow-sm">
                  <Image
                    src="/appLogos/66f4d7cc7710ca11e9ff79c3_affinity_svg_bfb77106bf.svg"
                    alt="Affinity"
                    width={40}
                    height={40}
                    className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <div className="flex items-center justify-center w-16 h-16 bg-white rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:border-brand-orange/50 transition-all duration-300 hover:scale-105 group shadow-sm">
                  <Image
                    src="/appLogos/66f4d7cdc905e0766217414a_ai_Transform_svg_295de265a2.svg"
                    alt="AI Transform"
                    width={40}
                    height={40}
                    className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <div className="flex items-center justify-center w-16 h-16 bg-white rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:border-brand-orange/50 transition-all duration-300 hover:scale-105 group shadow-sm">
                  <Image
                    src="/appLogos/66f6a68f9befbce885cd4c83_marketstack_svg_a3eb7798e5.svg"
                    alt="Marketstack"
                    width={40}
                    height={40}
                    className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Duplicate for seamless loop */}
              <div className="flex items-center space-x-6 py-8 px-8 min-w-max">
                {/* App Logos - Duplicate Set */}
                <div className="flex items-center justify-center w-16 h-16 bg-white rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:border-brand-orange/50 transition-all duration-300 hover:scale-105 group shadow-sm">
                  <Image
                    src="/appLogos/66f4d7cdeb6560b7c1ec0f6a_asana_svg_55712e4bc0.svg"
                    alt="Asana"
                    width={40}
                    height={40}
                    className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <div className="flex items-center justify-center w-16 h-16 bg-white rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:border-brand-orange/50 transition-all duration-300 hover:scale-105 group shadow-sm">
                  <Image
                    src="/appLogos/66f4d7cdeb6560b7c1ec0fc4_airtable_svg_3260e9a572.svg"
                    alt="Airtable"
                    width={40}
                    height={40}
                    className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <div className="flex items-center justify-center w-16 h-16 bg-white rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:border-brand-orange/50 transition-all duration-300 hover:scale-105 group shadow-sm">
                  <Image
                    src="/appLogos/66f6a68fbe0cbedc9ca2ddb3_mailchimp_svg_574c2a4641.svg"
                    alt="Mailchimp"
                    width={40}
                    height={40}
                    className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <div className="flex items-center justify-center w-16 h-16 bg-white rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:border-brand-orange/50 transition-all duration-300 hover:scale-105 group shadow-sm">
                  <Image
                    src="/appLogos/66e3d729fbb7d09521916b34_microsoft_Outlook_svg_baf4ee4ddf.svg"
                    alt="Microsoft Outlook"
                    width={40}
                    height={40}
                    className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <div className="flex items-center justify-center w-16 h-16 bg-white rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:border-brand-orange/50 transition-all duration-300 hover:scale-105 group shadow-sm">
                  <Image
                    src="/appLogos/66f4d7ccbfc12ceb1fe6ae68_active_Campaign_svg_35c109a2eb.svg"
                    alt="ActiveCampaign"
                    width={40}
                    height={40}
                    className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <div className="flex items-center justify-center w-16 h-16 bg-white rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:border-brand-orange/50 transition-all duration-300 hover:scale-105 group shadow-sm">
                  <Image
                    src="/appLogos/66f4d7cd19ed90bc689462b3_autopilot_svg_b9a6db3526.svg"
                    alt="Autopilot"
                    width={40}
                    height={40}
                    className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <div className="flex items-center justify-center w-16 h-16 bg-white rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:border-brand-orange/50 transition-all duration-300 hover:scale-105 group shadow-sm">
                  <Image
                    src="/appLogos/66f4d7ce9b227a3194696e89_automizy_png_6c4c2ae7c0.svg"
                    alt="Automizy"
                    width={40}
                    height={40}
                    className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <div className="flex items-center justify-center w-16 h-16 bg-white rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:border-brand-orange/50 transition-all duration-300 hover:scale-105 group shadow-sm">
                  <Image
                    src="/appLogos/66f4d7cc8fbc5fb41664b4ba_aggregate_svg_920d36c8b1.svg"
                    alt="Aggregate"
                    width={40}
                    height={40}
                    className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <div className="flex items-center justify-center w-16 h-16 bg-white rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:border-brand-orange/50 transition-all duration-300 hover:scale-105 group shadow-sm">
                  <Image
                    src="/appLogos/66f4d7cc51d72b9903df9fde_amqp_svg_ebc4c3b32a.svg"
                    alt="AMQP"
                    width={40}
                    height={40}
                    className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <div className="flex items-center justify-center w-16 h-16 bg-white rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:border-brand-orange/50 transition-all duration-300 hover:scale-105 group shadow-sm">
                  <Image
                    src="/appLogos/66f4d7cc7710ca11e9ff79c3_affinity_svg_bfb77106bf.svg"
                    alt="Affinity"
                    width={40}
                    height={40}
                    className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <div className="flex items-center justify-center w-16 h-16 bg-white rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:border-brand-orange/50 transition-all duration-300 hover:scale-105 group shadow-sm">
                  <Image
                    src="/appLogos/66f4d7cdc905e0766217414a_ai_Transform_svg_295de265a2.svg"
                    alt="AI Transform"
                    width={40}
                    height={40}
                    className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <div className="flex items-center justify-center w-16 h-16 bg-white rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:border-brand-orange/50 transition-all duration-300 hover:scale-105 group shadow-sm">
                  <Image
                    src="/appLogos/66f6a68f9befbce885cd4c83_marketstack_svg_a3eb7798e5.svg"
                    alt="Marketstack"
                    width={40}
                    height={40}
                    className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Integration Buttons */}
          <div className="text-center mt-8">
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
              Explore Integrations
            </h4>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://n8n.io/integrations/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FF6B6B] hover:bg-[#FF5252] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-[#FF6B6B] focus:ring-opacity-50 text-sm inline-flex items-center space-x-2"
              >
                <Network className="w-4 h-4" />
                <span>n8n Integrations</span>
              </a>
              <a
                href="https://www.make.com/en/integrations?community=1&verified=1"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#8B5CF6] hover:bg-[#7C3AED] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] focus:ring-opacity-50 text-sm inline-flex items-center space-x-2"
              >
                <Network className="w-4 h-4" />
                <span>Make Integrations</span>
              </a>
              <a
                href="https://zapier.com/apps"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FF4A00] hover:bg-[#E64200] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-[#FF4A00] focus:ring-opacity-50 text-sm inline-flex items-center space-x-2"
              >
                <Network className="w-4 h-4" />
                <span>Zapier Integrations</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
