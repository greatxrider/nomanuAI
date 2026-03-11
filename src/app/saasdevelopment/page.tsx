import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import type { ServicePageData } from "@/components/ServicePageTemplate";
import {
  ProcessorIcon,
  GlobeIcon,
  CodeIcon,
  NetworkIcon,
  ShieldIcon,
  ZapIcon,
  UsersIcon,
  BriefcaseIcon,
  LineChartIcon,
  TargetIcon,
  LayersIcon,
  RocketIcon,
  SettingsIcon,
  ScaleIcon,
  TrendingUpIcon,
  WrenchIcon,
} from "@/components/icons/PremiumIcons";

export const metadata: Metadata = {
  title: "SaaS Development Services | NomanuAI",
  description:
    "Build scalable SaaS products from MVP to enterprise-grade platforms. Multi-tenant architecture, subscription billing, and user management designed to grow with your customer base.",
  keywords: [
    "SaaS development",
    "SaaS product development",
    "multi-tenant software",
    "subscription platform",
    "SaaS MVP",
    "cloud software development",
    "NomanuAI",
  ],
  openGraph: {
    title: "SaaS Development Services | NomanuAI",
    description:
      "Build scalable SaaS products from MVP to enterprise-grade platforms with multi-tenant architecture and subscription billing.",
    url: "https://www.nomanuai.com/saasdevelopment",
  },
  twitter: {
    card: "summary_large_image",
    title: "SaaS Development Services | NomanuAI",
    description:
      "Build scalable SaaS products from MVP to enterprise-grade platforms with multi-tenant architecture and subscription billing.",
  },
  alternates: {
    canonical: "/saasdevelopment",
  },
};

const pageData: ServicePageData = {
  badge: "SaaS Development Services",
  heroIcon: ProcessorIcon,
  title: "SaaS Development",
  subtitle: "From first paying customer to thousands, built to scale",
  description:
    "We build subscription software products that handle multi-tenancy, billing, user management, and growth from day one. Whether you are validating a new idea with an MVP or scaling an existing product to enterprise customers, we architect SaaS platforms that do not break when demand spikes.",
  statistic: {
    value: "$908B",
    label: "projected global SaaS market size by 2030",
    source:
      "Fortune Business Insights reports the SaaS market is growing at a 13.7% CAGR, driven by businesses shifting from licensed software to subscription models. Companies that launch purpose-built SaaS products now are capturing recurring revenue in rapidly expanding verticals.",
  },
  benefits: [
    {
      title: "Multi-tenant architecture",
      desc: "Each customer gets isolated data and configurable settings while you maintain a single codebase. No per-client deployments to manage.",
    },
    {
      title: "Subscription billing & plan management",
      desc: "Stripe, Paddle, or custom billing with trial periods, plan upgrades, proration, usage-based pricing, and automated invoicing out of the box.",
    },
    {
      title: "Self-service onboarding flows",
      desc: "New users sign up, configure their workspace, and start getting value without your team manually provisioning accounts.",
    },
    {
      title: "Feature flags & gating",
      desc: "Roll out features gradually, A/B test new functionality, and gate premium capabilities by plan tier without code deployments.",
    },
    {
      title: "Scalable infrastructure from day one",
      desc: "Auto-scaling cloud architecture, CDN delivery, and database optimization that handles 10 users or 10,000 without re-engineering.",
    },
    {
      title: "Analytics & customer health scoring",
      desc: "Track usage patterns, identify churn risks, and surface expansion opportunities with built-in product analytics dashboards.",
    },
  ],
  benefitsIntro:
    "Building a SaaS product is not the same as building a web app. We handle the platform concerns -- billing, tenancy, permissions, scaling -- so you can focus on the features that differentiate your product.",
  personas: [
    {
      label: "First-Time Founders",
      icon: RocketIcon,
      copy: "Validate your SaaS idea with a focused MVP that attracts paying customers fast, then iterate based on real usage data.",
      size: "Pre-revenue to $50K MRR",
    },
    {
      label: "Funded Startups",
      icon: TrendingUpIcon,
      copy: "Scale from early traction to enterprise readiness with robust architecture, SOC 2 preparation, and team collaboration features.",
      size: "Seed to Series B",
    },
    {
      label: "Agencies Productizing",
      icon: BriefcaseIcon,
      copy: "Turn your repeatable service into a software product. We help agencies transition from custom work to scalable recurring revenue.",
      size: "5-50 person agencies",
    },
    {
      label: "Enterprise Innovators",
      icon: ScaleIcon,
      copy: "Launch internal tools or market-facing products with enterprise security, SSO, audit logging, and compliance features built in.",
      size: "Corporate innovation teams",
    },
  ],
  personasIntro:
    "SaaS development is our specialty whether you are shipping your first product or adding enterprise features to an existing platform. We have helped companies at every stage.",
  features: [
    {
      title: "User management & team workspaces",
      description:
        "Invite flows, role-based permissions, team switching, and organization hierarchies that mirror how your customers actually structure their teams.",
      icon: UsersIcon,
    },
    {
      title: "Subscription & payment processing",
      description:
        "Full billing lifecycle including trials, upgrades, downgrades, cancellations, refunds, and dunning management integrated with Stripe or your preferred processor.",
      icon: LineChartIcon,
    },
    {
      title: "Admin dashboard & customer management",
      description:
        "Internal tooling for your team to manage customers, monitor usage, handle support escalations, and configure platform settings without touching code.",
      icon: SettingsIcon,
    },
    {
      title: "API-first architecture",
      description:
        "Every feature is built API-first so you can support web, mobile, and third-party integrations from the same backend without duplicating logic.",
      icon: NetworkIcon,
    },
    {
      title: "Security & compliance foundations",
      description:
        "Encryption at rest and in transit, audit logging, data retention policies, and infrastructure patterns that align with SOC 2 and GDPR requirements.",
      icon: ShieldIcon,
    },
    {
      title: "Automated testing & CI/CD pipeline",
      description:
        "Comprehensive test coverage with automated deployments so you can ship multiple times per day with confidence and zero downtime.",
      icon: ZapIcon,
    },
  ],
  featuresIntro:
    "Every SaaS product needs these foundational capabilities. We build them right the first time so you are not retrofitting critical infrastructure while trying to grow.",
  packages: [
    {
      label: "START HERE",
      title: "SaaS Product Assessment",
      price: "$997",
      description:
        "We evaluate your product idea or existing codebase, define the technical architecture, map out the data model, and deliver a prioritized development roadmap with cost estimates for each phase.",
    },
    {
      label: "MOST POPULAR",
      title: "SaaS MVP to Launch",
      price: "Starting at $15,000",
      popular: true,
      description:
        "Full product development from concept to live SaaS platform. Includes multi-tenant architecture, billing integration, user management, core features, deployment, and 30 days of post-launch iteration support.",
    },
    {
      label: "ONGOING",
      title: "SaaS Growth Retainer",
      price: "$3,000/mo",
      description:
        "Continuous product development, infrastructure scaling, performance optimization, and feature releases. Includes weekly sprint planning, production monitoring, and up to 60 hours of engineering time.",
    },
  ],
  packagesIntro:
    "Most SaaS founders start with our assessment to validate the architecture, then move into a full build. The growth retainer keeps your product evolving after launch.",
  relatedServices: [
    {
      title: "Web Applications",
      description:
        "Need a powerful internal tool or client portal that does not require subscription billing? Our web app service delivers standalone applications.",
      icon: GlobeIcon,
      features: [
        "Custom dashboards & admin panels",
        "Client-facing portals",
        "Real-time data visualization",
      ],
      href: "/webapplications",
    },
    {
      title: "API Development",
      description:
        "Extend your SaaS platform with public APIs, webhook systems, and third-party integrations that let customers build on top of your product.",
      icon: NetworkIcon,
      features: [
        "Public API design & documentation",
        "Webhook event systems",
        "OAuth provider implementation",
      ],
      href: "/apidevelopment",
    },
    {
      title: "E-Commerce Solutions",
      description:
        "Selling physical or digital products alongside your SaaS? We build integrated commerce experiences with cart, checkout, and fulfillment.",
      icon: TargetIcon,
      features: [
        "Product catalog & inventory",
        "Checkout optimization",
        "Marketplace functionality",
      ],
      href: "/ecommercesolutions",
    },
  ],
  ctaTitle: "Ready to build your SaaS product?",
  ctaDescription:
    "Book a free 30-minute call to discuss your product vision, technical requirements, and the fastest path from idea to paying customers.",
};

export default function SaasDevelopmentPage() {
  return <ServicePageTemplate data={pageData} />;
}
