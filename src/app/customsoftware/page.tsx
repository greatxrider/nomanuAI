import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import type { ServicePageData } from "@/components/ServicePageTemplate";
import {
  CodeIcon,
  GlobeIcon,
  ProcessorIcon,
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
  WrenchIcon,
  LandmarkIcon,
  ScaleIcon,
  ShoppingCartIcon,
} from "@/components/icons/PremiumIcons";

export const metadata: Metadata = {
  title: "Custom Software Development | NomanuAI",
  description:
    "Bespoke software solutions built for your exact business processes. Internal tools, automation systems, data pipelines, and process-specific platforms that off-the-shelf software cannot deliver.",
  keywords: [
    "custom software development",
    "bespoke software",
    "internal tools",
    "business process automation",
    "legacy system modernization",
    "enterprise software",
    "NomanuAI",
  ],
  openGraph: {
    title: "Custom Software Development | NomanuAI",
    description:
      "Bespoke software solutions built for your exact business processes. Internal tools, automation systems, and process-specific platforms.",
    url: "https://www.nomanuai.com/customsoftware",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Software Development | NomanuAI",
    description:
      "Bespoke software solutions built for your exact business processes. Internal tools, automation systems, and process-specific platforms.",
  },
  alternates: {
    canonical: "/customsoftware",
  },
};

const pageData: ServicePageData = {
  badge: "Custom Software Services",
  heroIcon: CodeIcon,
  title: "Custom Software",
  subtitle: "Software that fits your process, not the other way around",
  description:
    "When off-the-shelf tools force workarounds or your team duct-tapes spreadsheets to ERPs, it is time for custom software. We build bespoke systems -- internal tools, data pipelines, process engines, and automation platforms -- engineered around how your business actually operates.",
  statistic: {
    value: "6.2x",
    label: "average ROI on custom software investments within 3 years",
    source:
      "A Nucleus Research study found that organizations investing in custom-built software tailored to their specific processes achieve significantly higher returns than those relying on generic platforms, primarily through eliminated manual work, reduced error rates, and faster throughput.",
  },
  benefits: [
    {
      title: "Built around your workflows",
      desc: "Every screen, automation rule, and data flow mirrors your actual business process. No adapting your team to fit rigid software limitations.",
    },
    {
      title: "Legacy system modernization",
      desc: "Migrate off aging systems incrementally. We wrap, replace, or rebuild legacy software while keeping your operations running without interruption.",
    },
    {
      title: "Data pipeline & ETL automation",
      desc: "Extract, transform, and load data across systems automatically. Eliminate manual data entry and the errors that come with it.",
    },
    {
      title: "Offline & edge capabilities",
      desc: "Software that works in warehouses, field operations, and low-connectivity environments with reliable sync when connections resume.",
    },
    {
      title: "Full ownership & no vendor lock-in",
      desc: "You own the source code, the data, and the deployment. No per-seat licensing fees that scale against you as you grow.",
    },
    {
      title: "Compliance & audit trails",
      desc: "Built-in logging, approval workflows, and data governance patterns that satisfy industry-specific regulatory requirements.",
    },
  ],
  benefitsIntro:
    "Custom software is not about building everything from scratch. It is about building the right things -- the parts that differentiate your operation and cannot be solved with a SaaS subscription.",
  personas: [
    {
      label: "Manufacturing & Logistics",
      icon: SettingsIcon,
      copy: "Track production, manage supply chains, and coordinate fulfillment with systems built for your specific product flow and compliance needs.",
      size: "50-500 employees",
    },
    {
      label: "Financial Services",
      icon: LandmarkIcon,
      copy: "Automate underwriting, reporting, and compliance workflows with software that meets regulatory standards and auditor expectations.",
      size: "Regulated industries",
    },
    {
      label: "Healthcare & Life Sciences",
      icon: ShieldIcon,
      copy: "Patient management, lab workflows, and research data systems that handle HIPAA requirements and complex approval chains.",
      size: "Clinics to research orgs",
    },
    {
      label: "Growing Businesses",
      icon: ScaleIcon,
      copy: "Replace the patchwork of tools and manual processes that worked at 20 employees but breaks at 200 with integrated, purpose-built software.",
      size: "20-200 employees",
    },
  ],
  personasIntro:
    "Custom software makes sense when your processes are too specialized for generic tools, when you are scaling past manual workarounds, or when compliance demands purpose-built systems.",
  features: [
    {
      title: "Process automation engines",
      description:
        "Rule-based workflow engines that route tasks, trigger actions, and enforce business logic automatically. Configurable by your ops team without developer involvement.",
      icon: ZapIcon,
    },
    {
      title: "System integration middleware",
      description:
        "Connect your ERP, CRM, accounting software, and warehouse systems into a unified data layer that eliminates double-entry and keeps every system in sync.",
      icon: NetworkIcon,
    },
    {
      title: "Custom reporting & BI tools",
      description:
        "Domain-specific dashboards and reporting engines that answer the questions your business actually asks, not generic metrics from off-the-shelf BI tools.",
      icon: LineChartIcon,
    },
    {
      title: "Document generation & management",
      description:
        "Automated creation of contracts, invoices, certificates, and compliance documents populated from your data with approval workflows and version control.",
      icon: LayersIcon,
    },
    {
      title: "Mobile field applications",
      description:
        "Inspection tools, inventory scanners, delivery tracking, and field service apps that work offline and sync seamlessly when connectivity returns.",
      icon: TargetIcon,
    },
    {
      title: "Legacy system wrappers & migration",
      description:
        "Modern interfaces on top of legacy databases, incremental data migration, and phased cutover strategies that minimize risk and downtime.",
      icon: WrenchIcon,
    },
  ],
  featuresIntro:
    "These are the kinds of systems we build most frequently. Your project will be scoped and designed around your specific operational requirements and constraints.",
  packages: [
    {
      label: "START HERE",
      title: "Process Audit & Software Blueprint",
      price: "$897",
      description:
        "We document your current workflows, identify automation opportunities, and deliver a technical blueprint with architecture recommendations, feature priorities, and development cost estimates.",
    },
    {
      label: "MOST POPULAR",
      title: "Custom Software Build",
      price: "Starting at $12,000",
      popular: true,
      description:
        "Full design and development of your bespoke software system. Includes requirements gathering, UX design, development, system integrations, testing, deployment, and 30 days of post-launch support.",
    },
    {
      label: "ONGOING",
      title: "Software Maintenance & Evolution",
      price: "$2,400/mo",
      description:
        "Ongoing development, bug fixes, performance tuning, and feature additions. Includes production monitoring, monthly planning sessions, and up to 50 hours of engineering time per month.",
    },
  ],
  packagesIntro:
    "We recommend starting with our process audit to define exactly what needs to be built. This prevents scope creep and ensures every dollar goes toward features that deliver ROI.",
  relatedServices: [
    {
      title: "Web Applications",
      description:
        "If your custom software needs a web-based interface, our web application service handles dashboards, portals, and browser-based tools.",
      icon: GlobeIcon,
      features: [
        "Real-time dashboards",
        "Client & partner portals",
        "Progressive web app capabilities",
      ],
      href: "/webapplications",
    },
    {
      title: "API Development",
      description:
        "Connect your custom software to the outside world with robust APIs, webhook systems, and integration layers.",
      icon: NetworkIcon,
      features: [
        "REST & GraphQL endpoints",
        "Webhook event systems",
        "Microservices communication",
      ],
      href: "/apidevelopment",
    },
    {
      title: "SaaS Development",
      description:
        "Considering turning your internal tool into a product? We can architect multi-tenancy, billing, and self-service onboarding.",
      icon: ProcessorIcon,
      features: [
        "Multi-tenant architecture",
        "Subscription billing",
        "Self-service user management",
      ],
      href: "/saasdevelopment",
    },
  ],
  ctaTitle: "Ready to build software that fits your business?",
  ctaDescription:
    "Book a free 30-minute call to discuss your current processes, pain points, and what purpose-built software could look like for your team.",
};

export default function CustomSoftwarePage() {
  return <ServicePageTemplate data={pageData} />;
}
