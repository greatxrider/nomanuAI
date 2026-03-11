import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import type { ServicePageData } from "@/components/ServicePageTemplate";
import {
  GlobeIcon,
  ProcessorIcon,
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
  SmartphoneIcon,
  SettingsIcon,
  ShoppingCartIcon,
  EyeIcon,
  LandmarkIcon,
  WrenchIcon,
} from "@/components/icons/PremiumIcons";

export const metadata: Metadata = {
  title: "Custom Web Application Development | NomanuAI",
  description:
    "Build powerful web applications, dashboards, portals, and real-time platforms tailored to your business. From internal tools to customer-facing products, we deliver performant, scalable web apps.",
  keywords: [
    "web application development",
    "custom web apps",
    "business dashboards",
    "client portals",
    "real-time web platforms",
    "progressive web apps",
    "NomanuAI",
  ],
  openGraph: {
    title: "Custom Web Application Development | NomanuAI",
    description:
      "Build powerful web applications, dashboards, portals, and real-time platforms tailored to your business workflows.",
    url: "https://www.nomanuai.com/webapplications",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Web Application Development | NomanuAI",
    description:
      "Build powerful web applications, dashboards, portals, and real-time platforms tailored to your business workflows.",
  },
  alternates: {
    canonical: "/webapplications",
  },
};

const pageData: ServicePageData = {
  badge: "Web Application Services",
  heroIcon: GlobeIcon,
  title: "Web Applications",
  subtitle: "Dashboards, portals, and platforms that run your business",
  description:
    "We design and build custom web applications that replace spreadsheets, manual processes, and disconnected tools. Whether you need a client portal, internal dashboard, or real-time collaboration platform, we deliver production-ready apps that your team actually wants to use.",
  statistic: {
    value: "83%",
    label: "of enterprises report higher productivity after deploying custom web applications",
    source:
      "According to Forrester Research, organizations that replace manual workflows with purpose-built web applications see measurable gains in team output, data accuracy, and decision-making speed within the first quarter of deployment.",
  },
  benefits: [
    {
      title: "Real-time dashboards & analytics",
      desc: "Monitor KPIs, track operations, and surface insights with live data visualizations that update as your business moves.",
    },
    {
      title: "Client & partner portals",
      desc: "Give stakeholders self-service access to documents, status updates, and communication channels without clogging your inbox.",
    },
    {
      title: "Workflow automation built in",
      desc: "Approvals, notifications, task routing, and status transitions happen automatically based on your business rules.",
    },
    {
      title: "Responsive across every device",
      desc: "Your app works flawlessly on desktop, tablet, and mobile so your team can operate from anywhere without a separate mobile build.",
    },
    {
      title: "Role-based access control",
      desc: "Admins, managers, and end-users each see exactly what they need. Permissions are granular and easy to manage.",
    },
    {
      title: "Third-party integrations",
      desc: "Connect your web app to CRMs, payment processors, email platforms, and any API-enabled service your business already uses.",
    },
  ],
  benefitsIntro:
    "We build web applications that solve specific business problems. Every feature is designed around your workflows, not generic templates that force you to adapt.",
  personas: [
    {
      label: "Operations Teams",
      icon: SettingsIcon,
      copy: "Replace spreadsheet chaos with centralized dashboards that track orders, inventory, and fulfillment in real time.",
      size: "10-200 employees",
    },
    {
      label: "Professional Services",
      icon: BriefcaseIcon,
      copy: "Deliver client portals with project tracking, document sharing, and billing visibility that elevate your service quality.",
      size: "Agencies & consultancies",
    },
    {
      label: "Growing Startups",
      icon: RocketIcon,
      copy: "Ship your MVP fast with a production-quality web app that scales from 100 to 100,000 users without a rewrite.",
      size: "Pre-seed to Series B",
    },
    {
      label: "Enterprise Departments",
      icon: LandmarkIcon,
      copy: "Build internal tools that IT approves and employees love, replacing legacy systems without the multi-year timeline.",
      size: "200+ employees",
    },
  ],
  personasIntro:
    "Our web application services fit teams that have outgrown off-the-shelf tools and need something purpose-built for how they actually work.",
  features: [
    {
      title: "Interactive data dashboards",
      description:
        "Drag-and-drop widgets, filterable charts, and exportable reports that turn raw data into decisions. Built with real-time WebSocket connections for live updates.",
      icon: LineChartIcon,
    },
    {
      title: "Multi-tenant architecture",
      description:
        "Serve multiple clients or departments from a single codebase with isolated data, custom branding, and tenant-specific configurations.",
      icon: LayersIcon,
    },
    {
      title: "Progressive Web App capabilities",
      description:
        "Offline support, push notifications, and installable experiences that blur the line between web and native without App Store overhead.",
      icon: SmartphoneIcon,
    },
    {
      title: "Authentication & authorization",
      description:
        "SSO, OAuth, multi-factor authentication, and fine-grained permission systems that keep data secure without frustrating legitimate users.",
      icon: ShieldIcon,
    },
    {
      title: "File management & document workflows",
      description:
        "Upload, preview, annotate, and route documents through approval chains with version control and audit trails.",
      icon: EyeIcon,
    },
    {
      title: "Performance optimization",
      description:
        "Server-side rendering, edge caching, code splitting, and lazy loading ensure sub-second load times even with complex data sets.",
      icon: ZapIcon,
    },
  ],
  featuresIntro:
    "These are capabilities we have built into recent client projects. Every web application is different, so we scope features around your specific requirements.",
  packages: [
    {
      label: "START HERE",
      title: "Web App Discovery & Prototype",
      price: "$997",
      description:
        "We map your workflows, define the feature set, create wireframes, and deliver a clickable prototype so you can validate the concept before committing to a full build. Includes technical architecture recommendations.",
    },
    {
      label: "MOST POPULAR",
      title: "Full Web Application Build",
      price: "Starting at $8,500",
      popular: true,
      description:
        "End-to-end development of your custom web application from design through deployment. Includes UI/UX design, frontend and backend development, database architecture, testing, and 30 days of post-launch support.",
    },
    {
      label: "ONGOING",
      title: "Web App Retainer & Evolution",
      price: "$2,200/mo",
      description:
        "Continuous feature development, performance monitoring, security patches, and user feedback implementation. Includes priority support, monthly roadmap sessions, and up to 40 hours of development.",
    },
  ],
  packagesIntro:
    "We offer three engagement models depending on where you are in the process. Most clients start with discovery and move to a full build once the scope is validated.",
  relatedServices: [
    {
      title: "SaaS Development",
      description:
        "Turn your web application into a subscription product with multi-tenant architecture, billing integration, and self-service onboarding.",
      icon: ProcessorIcon,
      features: [
        "Subscription billing & plan management",
        "Multi-tenant data isolation",
        "Usage analytics & feature gating",
      ],
      href: "/saasdevelopment",
    },
    {
      title: "Custom Software",
      description:
        "Need something beyond a web app? We build desktop tools, background processing systems, and bespoke platforms for complex requirements.",
      icon: CodeIcon,
      features: [
        "Process-specific business logic",
        "Legacy system modernization",
        "Complex data transformation pipelines",
      ],
      href: "/customsoftware",
    },
    {
      title: "API Development",
      description:
        "Power your web application with robust APIs that connect your frontend to databases, third-party services, and microservices architectures.",
      icon: NetworkIcon,
      features: [
        "REST & GraphQL API design",
        "Third-party service integration",
        "Microservices architecture",
      ],
      href: "/apidevelopment",
    },
  ],
  ctaTitle: "Ready to replace spreadsheets with a real web app?",
  ctaDescription:
    "Book a free 30-minute call to walk through your current workflow and explore what a custom web application could look like for your team.",
};

export default function WebApplicationsPage() {
  return <ServicePageTemplate data={pageData} />;
}
