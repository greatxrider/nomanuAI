"use client";

import Image from "next/image";
import {
  Zap,
  Users,
  CheckCircle,
  MessageCircle,
  TrendingUp,
  Sparkles,
  Cpu,
  Brain,
  Network,
  Star,
  FileText,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Lead Generation & Qualification Automation",
      description:
        "Automatically capture, enrich, and qualify leads — then alert sales instantly.",
      icon: Zap,
      features: [
        "Scrape, collect, and enrich leads via Apify, Clay, or Apollo",
        "Connect lead forms (Facebook Ads, website) to CRMs like GHL or HubSpot",
        "Auto-qualify using AI/scoring and notify sales in real time",
      ],
      idealFor: [
        "Real Estate Agents",
        "SaaS Sales Teams",
        "Digital Agencies",
        "Mortgage Brokers",
        "Coaches",
      ],
    },
    {
      id: 2,
      title: "CRM & Pipeline Automation",
      description:
        "Create and update contacts, deals, and tasks automatically across your CRM stack.",
      icon: Users,
      features: [
        "Auto-create contacts, deals, tasks in HubSpot, GoHighLevel, ClickUp",
        "Trigger reminders, follow-ups, and status updates by stage/behavior",
        "Sync Calendly, Zoom, email, and CRM in one flow",
      ],
      idealFor: [
        "Real Estate",
        "Sales Teams",
        "Insurance Agencies",
        "Coaches",
        "Franchise Operations",
      ],
    },
    {
      id: 3,
      title: "Client Onboarding Workflows",
      description:
        "From intake to welcome — automate emails, calendar setup, and document signing.",
      icon: CheckCircle,
      features: [
        "Automate onboarding: intake → welcome email → scheduling → e-sign",
        "Auto-populate Airtable/ClickUp with client info",
        "Assign internal tasks automatically",
      ],
      idealFor: [
        "Agencies",
        "Service Businesses",
        "Real Estate Firms",
        "E-commerce Brands",
      ],
    },
    {
      id: 4,
      title: "Proposal, Quote, or Report Generation",
      description:
        "Generate personalized proposals/reports from your CRM or Airtable data.",
      icon: FileText,
      features: [
        "Auto-generate docs via Documint or Google Docs",
        "Use CRM/Airtable data to build tailored outputs",
        "Email or send PDFs to clients automatically",
      ],
      idealFor: [
        "Real Estate",
        "Marketing Agencies",
        "Mortgage Brokers",
        "B2B Sales",
        "SEO Agencies",
      ],
    },
    {
      id: 5,
      title: "Content Repurposing & Social Posting Automation",
      description:
        "Turn inputs into on-brand content and schedule across social platforms.",
      icon: Sparkles,
      features: [
        "Pull from forms, Notion, or Slack and format social posts",
        "Auto-post or schedule to LinkedIn, Facebook, Instagram, and more",
        "Use AI to summarize, rewrite, and repurpose long-form content",
      ],
      idealFor: [
        "Social Media Agencies",
        "Content Creators",
        "Coaches",
        "Real Estate Agents",
      ],
    },
    {
      id: 6,
      title: "Task & Team Workflow Automation",
      description:
        "Keep projects moving with automated tasks, updates, reminders, and checks.",
      icon: Cpu,
      features: [
        "Recurring task creation and project updates in ClickUp, Notion, or Trello",
        "Automated reminders and status checks",
        "Slack, email, or SMS updates on changes",
      ],
      idealFor: ["Agencies", "Franchise Ops", "Recruitment Teams", "SEO Firms"],
    },
    {
      id: 7,
      title: "Email & Outreach Sequences",
      description:
        "Enroll leads into targeted sequences and personalize with AI-powered copy.",
      icon: MessageCircle,
      features: [
        "Cold, nurture, and reactivation sequences",
        "Personalize with data enrichment and AI copywriting",
        "Automated timing and escalation logic",
      ],
      idealFor: [
        "B2B Sales Teams",
        "Marketing Agencies",
        "Coaches",
        "Recruiters",
      ],
    },
    {
      id: 8,
      title: "Form-to-Workflow Automation",
      description:
        "Any form can power a backend process — from saving data to triggering onboarding.",
      icon: Network,
      features: [
        "Typeform/GHL/Jotform → Airtable/CRM",
        "Slack/Email team notifications",
        "Trigger onboarding, scheduling, or enrichment",
      ],
      idealFor: ["Real Estate", "Coaches", "Course Creators", "Local Services"],
    },
    {
      id: 9,
      title: "Review & Testimonial Automation",
      description:
        "Collect more 5-star reviews and route feedback to the right team automatically.",
      icon: Star,
      features: [
        "Request Google/Facebook/Trustpilot reviews after milestones",
        "Send positive reviews to marketing",
        "Escalate negative feedback to support",
      ],
      idealFor: ["Local Services", "Real Estate", "E-commerce", "Coaches"],
    },
    {
      id: 10,
      title: "Custom Automation Blueprint",
      description:
        "Don't know what to automate yet? We'll architect what you need — then automate it.",
      icon: Brain,
      features: [
        "Discovery session to surface manual pain points",
        "Blueprint & architecture tailored to your systems",
        "Implementation roadmap to ship fast",
      ],
      idealFor: [
        "Teams seeking clarity",
        "Complex workflows",
        "Custom requirements",
      ],
    },
  ];

  return (
    <section
      id="services"
      className="relative section-padding bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 overflow-hidden"
    >
      {/* Enhanced AI Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Circuit Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="circuit-services"
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
            <rect width="100%" height="100%" fill="url(#circuit-services)" />
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
        {/* AI-Inspired Header */}
        <div className="text-center mb-16">
          {/* AI Processing Badge */}
          <div className="inline-flex items-center px-6 py-3 bg-brand-orange/10 border border-brand-orange/30 rounded-full backdrop-blur-sm mb-8 shadow-lg shadow-brand-orange/10">
            <Cpu className="w-5 h-5 text-brand-orange mr-3 animate-pulse" />
            <span className="text-brand-orange font-medium">
              AI-Powered Solutions
            </span>
            <div className="w-2 h-2 bg-brand-orange rounded-full ml-3 animate-pulse" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our <span className="text-brand-orange">AI Services</span>
          </h2>

          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Streamline your business with cutting-edge AI automation solutions
          </p>

          <p className="text-base md:text-lg text-brand-orange font-semibold max-w-2xl mx-auto mt-4">
            We will automate your manual processes or you don't pay.
          </p>

          {/* AI Flow Indicator */}
          <div className="flex justify-center items-center space-x-4 mt-8">
            <div className="flex items-center space-x-2 px-4 py-2 bg-gray-200/50 dark:bg-gray-800/50 rounded-full border border-gray-300/50 dark:border-gray-700/50 backdrop-blur-sm">
              <Brain className="w-4 h-4 text-brand-orange" />
              <span className="text-sm text-gray-700 dark:text-gray-300">
                Input
              </span>
            </div>
            <div className="w-5 h-5 text-brand-orange animate-pulse">→</div>
            <div className="flex items-center space-x-2 px-4 py-2 bg-brand-orange/20 rounded-full border border-brand-orange/50 backdrop-blur-sm shadow-lg shadow-brand-orange/20">
              <Sparkles className="w-4 h-4 text-brand-orange animate-pulse" />
              <span className="text-sm text-gray-900 dark:text-white font-medium">
                AI Processing
              </span>
            </div>
            <div className="w-5 h-5 text-brand-orange animate-pulse">→</div>
            <div className="flex items-center space-x-2 px-4 py-2 bg-gray-200/50 dark:bg-gray-800/50 rounded-full border border-gray-300/50 dark:border-gray-700/50 backdrop-blur-sm">
              <Zap className="w-4 h-4 text-brand-orange" />
              <span className="text-sm text-gray-700 dark:text-gray-300">
                Output
              </span>
            </div>
          </div>
        </div>

        {/* AI-Inspired Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 hover:border-brand-orange/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-brand-orange/10 overflow-hidden"
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

                {/* Icon with Brand Orange Background */}
                <div
                  className={`w-14 h-14 bg-brand-orange rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-brand-orange/25 group-hover:scale-110 transition-transform duration-300`}
                >
                  <IconComponent className="w-7 h-7 text-white" />
                </div>

                {/* Title with Brand Orange Text */}
                <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-brand-orange transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-gray-600 dark:text-gray-300 mb-4 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
                  {service.description}
                </p>

                {/* Features with Brand Orange Styling */}
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center text-xs text-gray-500 dark:text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors duration-300"
                    >
                      <div className="w-3 h-3 bg-brand-orange rounded-full mr-2 flex-shrink-0 shadow-sm shadow-brand-orange/25" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Ideal for */}
                {service.idealFor && service.idealFor.length > 0 && (
                  <div className="mt-4">
                    <div className="text-[11px] uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-2">
                      Ideal for
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {service.idealFor.map((aud) => (
                        <span
                          key={aud}
                          className="px-2 py-1 bg-white/40 dark:bg-white/10 border border-gray-200/50 dark:border-gray-700/50 text-[11px] rounded-full text-gray-700 dark:text-gray-200"
                        >
                          {aud}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Hover Glow Border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-brand-orange/20 transition-all duration-500" />
              </div>
            );
          })}
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
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Plug AI into your{" "}
              <span className="text-brand-orange">existing data</span>
            </h3>
            <p className="text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
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
