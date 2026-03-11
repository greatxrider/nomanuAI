import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import type { ServicePageData } from "@/components/ServicePageTemplate";
import {
  NetworkIcon,
  GlobeIcon,
  ProcessorIcon,
  CodeIcon,
  ShoppingCartIcon,
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
  ScaleIcon,
  LandmarkIcon,
  SmartphoneIcon,
} from "@/components/icons/PremiumIcons";

export const metadata: Metadata = {
  title: "API Development & Integration Services | NomanuAI",
  description:
    "Design and build REST APIs, GraphQL endpoints, microservices, and third-party integrations that connect your systems and power your products. Reliable, documented, and built to scale.",
  keywords: [
    "API development",
    "REST API",
    "GraphQL development",
    "microservices",
    "API integration",
    "system integration",
    "webhook development",
    "NomanuAI",
  ],
  openGraph: {
    title: "API Development & Integration Services | NomanuAI",
    description:
      "Design and build REST APIs, GraphQL endpoints, microservices, and third-party integrations that connect your systems and power your products.",
    url: "https://www.nomanuai.com/apidevelopment",
  },
  twitter: {
    card: "summary_large_image",
    title: "API Development & Integration Services | NomanuAI",
    description:
      "Design and build REST APIs, GraphQL endpoints, microservices, and third-party integrations that connect your systems and power your products.",
  },
  alternates: {
    canonical: "/apidevelopment",
  },
};

const pageData: ServicePageData = {
  badge: "API Development Services",
  heroIcon: NetworkIcon,
  title: "API Development",
  subtitle: "The connective tissue between your systems, products, and partners",
  description:
    "APIs are the backbone of modern software. We design and build REST and GraphQL APIs, microservices architectures, webhook systems, and third-party integrations that let your applications talk to each other reliably. Whether you need an internal data layer or a public developer platform, we deliver APIs that are fast, well-documented, and built for the long term.",
  statistic: {
    value: "90%",
    label: "of high-performing companies describe themselves as API-first",
    source:
      "Postman's State of the API Report found that organizations adopting API-first development strategies ship faster, integrate more easily, and scale their platforms more efficiently. Companies with well-designed APIs report 3x faster time-to-market for new features and integrations.",
  },
  benefits: [
    {
      title: "Clean, consistent API design",
      desc: "RESTful resource modeling, consistent naming conventions, proper HTTP semantics, and versioning strategies that make your API predictable and easy to consume.",
    },
    {
      title: "Comprehensive documentation",
      desc: "Auto-generated OpenAPI specs, interactive sandboxes, code samples in multiple languages, and getting-started guides that reduce integration time from days to hours.",
    },
    {
      title: "Authentication & rate limiting",
      desc: "API keys, OAuth 2.0, JWT tokens, and granular rate limiting that protect your resources while giving legitimate consumers reliable access.",
    },
    {
      title: "Real-time event systems",
      desc: "Webhooks, server-sent events, and WebSocket connections that push data to consumers the moment something changes instead of requiring polling.",
    },
    {
      title: "Monitoring & observability",
      desc: "Request logging, error tracking, latency monitoring, and usage analytics that tell you exactly how your API is being used and where issues arise.",
    },
    {
      title: "Backwards compatibility & versioning",
      desc: "Deprecation strategies, version negotiation, and migration guides that let you evolve your API without breaking existing integrations.",
    },
  ],
  benefitsIntro:
    "A well-designed API is an asset that compounds in value. We build APIs that developers enjoy using, ops teams can monitor easily, and businesses can extend for years.",
  personas: [
    {
      label: "SaaS Companies",
      icon: ProcessorIcon,
      copy: "Offer your customers a public API and webhook system that turns your product into a platform and unlocks integration-driven growth.",
      size: "Products with 100+ customers",
    },
    {
      label: "Enterprise IT Teams",
      icon: LandmarkIcon,
      copy: "Connect legacy systems, ERPs, and departmental tools through a unified API layer that eliminates data silos and manual data transfers.",
      size: "Multi-system environments",
    },
    {
      label: "Mobile App Companies",
      icon: SmartphoneIcon,
      copy: "Build performant backend APIs that serve iOS, Android, and web clients from a single source of truth with optimized payloads for each platform.",
      size: "Apps with 10K+ users",
    },
    {
      label: "Marketplace & Platform Businesses",
      icon: ScaleIcon,
      copy: "Enable third-party sellers, service providers, and developers to build on your platform through well-documented, reliable APIs.",
      size: "Two-sided platforms",
    },
  ],
  personasIntro:
    "API development is critical for any business that needs systems to communicate, whether that means connecting internal tools, powering mobile apps, or enabling an ecosystem of third-party integrations.",
  features: [
    {
      title: "REST API design & development",
      description:
        "Resource-oriented APIs with proper HTTP methods, status codes, pagination, filtering, and error handling that follow industry best practices and are intuitive for consumers.",
      icon: CodeIcon,
    },
    {
      title: "GraphQL API development",
      description:
        "Flexible query APIs that let frontend teams request exactly the data they need in a single request. Includes schema design, resolvers, subscriptions, and performance optimization.",
      icon: LayersIcon,
    },
    {
      title: "Microservices architecture",
      description:
        "Decompose monolithic applications into independently deployable services with clear boundaries, message queues, and service discovery for resilient, scalable systems.",
      icon: SettingsIcon,
    },
    {
      title: "Third-party API integration",
      description:
        "Connect to payment processors, CRMs, shipping carriers, communication platforms, and any external service. We handle authentication, error handling, retry logic, and data mapping.",
      icon: NetworkIcon,
    },
    {
      title: "Webhook & event-driven systems",
      description:
        "Build reliable webhook delivery with retry policies, signature verification, event filtering, and delivery logs so consumers never miss critical updates.",
      icon: ZapIcon,
    },
    {
      title: "API gateway & management",
      description:
        "Centralized request routing, authentication, rate limiting, caching, and analytics through API gateway configuration that simplifies operations and improves security.",
      icon: ShieldIcon,
    },
  ],
  featuresIntro:
    "From simple CRUD endpoints to complex event-driven architectures, we build APIs at every level of complexity. Here are the most common capabilities our clients need.",
  packages: [
    {
      label: "START HERE",
      title: "API Architecture Assessment",
      price: "$497",
      description:
        "We review your current systems, map data flows between services, and deliver an API architecture blueprint with endpoint specifications, data models, and integration recommendations.",
    },
    {
      label: "MOST POPULAR",
      title: "Full API Development",
      price: "Starting at $5,500",
      popular: true,
      description:
        "End-to-end API design and development including endpoint implementation, authentication, documentation, testing, deployment, and integration with your existing systems. Includes 30 days of post-launch support.",
    },
    {
      label: "ONGOING",
      title: "API Maintenance & Scaling",
      price: "$1,500/mo",
      description:
        "Continuous API development, performance optimization, new endpoint creation, and integration maintenance. Includes uptime monitoring, usage analytics reviews, and up to 30 hours of engineering time.",
    },
  ],
  packagesIntro:
    "Start with an architecture assessment to define your API strategy, move into a full build, and keep your integrations healthy with ongoing maintenance.",
  relatedServices: [
    {
      title: "Web Applications",
      description:
        "Build the frontend experiences that consume your APIs. Dashboards, portals, and interactive tools powered by the data your APIs expose.",
      icon: GlobeIcon,
      features: [
        "API-powered dashboards",
        "Real-time data visualization",
        "Interactive client portals",
      ],
      href: "/webapplications",
    },
    {
      title: "SaaS Development",
      description:
        "APIs are the foundation of every SaaS product. We build the full platform including multi-tenancy, billing, and the API layer that powers it all.",
      icon: ProcessorIcon,
      features: [
        "Public developer APIs",
        "Webhook event systems",
        "Multi-tenant data isolation",
      ],
      href: "/saasdevelopment",
    },
    {
      title: "E-Commerce Solutions",
      description:
        "Connect your store to inventory systems, shipping carriers, and marketing platforms through reliable commerce API integrations.",
      icon: ShoppingCartIcon,
      features: [
        "Payment gateway integration",
        "Inventory sync across channels",
        "Order management APIs",
      ],
      href: "/ecommercesolutions",
    },
  ],
  ctaTitle: "Ready to connect your systems with reliable APIs?",
  ctaDescription:
    "Book a free 30-minute call to discuss your integration needs, current architecture, and how well-designed APIs can accelerate your product development.",
};

export default function ApiDevelopmentPage() {
  return <ServicePageTemplate data={pageData} />;
}
