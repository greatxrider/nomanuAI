import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import type { ServicePageData } from "@/components/ServicePageTemplate";
import {
  ShoppingCartIcon,
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
  SettingsIcon,
  PaletteIcon,
  EyeIcon,
  TrendingUpIcon,
  SmartphoneIcon,
} from "@/components/icons/PremiumIcons";

export const metadata: Metadata = {
  title: "E-Commerce Development Solutions | NomanuAI",
  description:
    "Build high-converting online stores, marketplaces, and commerce platforms. From checkout optimization to inventory management, we deliver e-commerce experiences that drive revenue.",
  keywords: [
    "e-commerce development",
    "online store development",
    "marketplace development",
    "checkout optimization",
    "e-commerce platform",
    "shopping cart development",
    "NomanuAI",
  ],
  openGraph: {
    title: "E-Commerce Development Solutions | NomanuAI",
    description:
      "Build high-converting online stores, marketplaces, and commerce platforms that drive revenue and scale with your business.",
    url: "https://www.nomanuai.com/ecommercesolutions",
  },
  twitter: {
    card: "summary_large_image",
    title: "E-Commerce Development Solutions | NomanuAI",
    description:
      "Build high-converting online stores, marketplaces, and commerce platforms that drive revenue and scale with your business.",
  },
  alternates: {
    canonical: "/ecommercesolutions",
  },
};

const pageData: ServicePageData = {
  badge: "E-Commerce Services",
  heroIcon: ShoppingCartIcon,
  title: "E-Commerce Solutions",
  subtitle: "Online stores and marketplaces that convert browsers into buyers",
  description:
    "We build e-commerce experiences that do more than list products. From one-click checkouts and personalized recommendations to inventory sync and fulfillment automation, we engineer every touchpoint in the buying journey to reduce friction and increase revenue per visitor.",
  statistic: {
    value: "$6.3T",
    label: "in global e-commerce sales expected by 2026",
    source:
      "eMarketer projects that e-commerce will account for over 22% of total global retail sales, with businesses that invest in custom commerce experiences capturing disproportionate share through better conversion rates, higher average order values, and stronger customer retention.",
  },
  benefits: [
    {
      title: "Conversion-optimized checkout",
      desc: "One-page checkout, guest checkout, saved payment methods, and smart form validation that reduce cart abandonment by up to 35%.",
    },
    {
      title: "Product catalog & inventory management",
      desc: "Variants, bundles, subscriptions, and digital products managed from a single admin panel with real-time inventory sync across channels.",
    },
    {
      title: "Multi-channel selling",
      desc: "Sell on your website, social platforms, and marketplaces from one inventory source. Orders flow into a single fulfillment pipeline.",
    },
    {
      title: "Personalization & recommendations",
      desc: "Show relevant products based on browsing history, purchase patterns, and customer segments to increase average order value.",
    },
    {
      title: "Shipping & fulfillment automation",
      desc: "Rate shopping, label generation, tracking notifications, and warehouse integrations that get orders out the door faster.",
    },
    {
      title: "Analytics & revenue tracking",
      desc: "Funnel analysis, cohort reporting, and attribution tracking that tell you exactly where revenue comes from and where it leaks.",
    },
  ],
  benefitsIntro:
    "Every feature we build is measured by its impact on your bottom line. We focus on the metrics that matter: conversion rate, average order value, and customer lifetime value.",
  personas: [
    {
      label: "Direct-to-Consumer Brands",
      icon: RocketIcon,
      copy: "Launch a branded storefront that reflects your identity and gives you full control over the customer experience from first click to unboxing.",
      size: "$100K-$10M revenue",
    },
    {
      label: "Marketplace Operators",
      icon: UsersIcon,
      copy: "Build two-sided platforms where vendors list products and buyers shop with confidence. Includes commission management and vendor dashboards.",
      size: "Multi-vendor platforms",
    },
    {
      label: "B2B Commerce",
      icon: BriefcaseIcon,
      copy: "Quote-based pricing, bulk ordering, net terms, and account hierarchies built for how businesses actually purchase from each other.",
      size: "Wholesale & distribution",
    },
    {
      label: "Subscription Commerce",
      icon: TrendingUpIcon,
      copy: "Recurring delivery boxes, replenishment subscriptions, and membership programs that generate predictable monthly revenue.",
      size: "Subscription box & replenishment",
    },
  ],
  personasIntro:
    "Whether you sell physical products, digital goods, or subscription services, we build commerce platforms tailored to your specific business model and customer expectations.",
  features: [
    {
      title: "Custom storefront design",
      description:
        "Pixel-perfect, brand-aligned storefronts with responsive layouts, fast load times, and intuitive navigation that guide visitors toward purchase.",
      icon: PaletteIcon,
    },
    {
      title: "Payment gateway integration",
      description:
        "Stripe, PayPal, Apple Pay, Google Pay, buy-now-pay-later, and local payment methods configured for maximum checkout completion across geographies.",
      icon: ShieldIcon,
    },
    {
      title: "Search & filtering engine",
      description:
        "Faceted search, predictive suggestions, and smart filters that help customers find products in seconds even in catalogs with thousands of SKUs.",
      icon: EyeIcon,
    },
    {
      title: "Inventory & order management",
      description:
        "Real-time stock tracking across warehouses and channels, low-stock alerts, automatic reorder triggers, and order lifecycle management from placement to delivery.",
      icon: LayersIcon,
    },
    {
      title: "Mobile commerce optimization",
      description:
        "Touch-friendly interfaces, mobile-specific checkout flows, and progressive web app capabilities that capture the 70% of e-commerce traffic coming from phones.",
      icon: SmartphoneIcon,
    },
    {
      title: "Marketing & retention tools",
      description:
        "Abandoned cart recovery, email sequences, loyalty programs, referral systems, and coupon engines that bring customers back and increase lifetime value.",
      icon: TargetIcon,
    },
  ],
  featuresIntro:
    "These are the building blocks of high-performing e-commerce platforms. We select and customize the right combination based on your product catalog, customer behavior, and growth goals.",
  packages: [
    {
      label: "START HERE",
      title: "E-Commerce Audit & Strategy",
      price: "$797",
      description:
        "We analyze your current store performance, identify conversion bottlenecks, benchmark against competitors, and deliver a prioritized improvement roadmap with expected revenue impact for each recommendation.",
    },
    {
      label: "MOST POPULAR",
      title: "Full E-Commerce Build",
      price: "Starting at $7,500",
      popular: true,
      description:
        "Complete online store development including design, product catalog setup, payment integration, shipping configuration, and launch. Includes SEO foundations, analytics setup, and 30 days of post-launch optimization.",
    },
    {
      label: "ONGOING",
      title: "E-Commerce Growth Retainer",
      price: "$1,800/mo",
      description:
        "Continuous conversion optimization, new feature development, seasonal campaign support, and performance monitoring. Includes A/B testing, monthly analytics reviews, and up to 35 hours of development.",
    },
  ],
  packagesIntro:
    "Start with an audit to understand your biggest revenue opportunities, or jump straight into a full build if you know what you need. The growth retainer keeps your store improving after launch.",
  relatedServices: [
    {
      title: "Web Applications",
      description:
        "Need a customer portal, vendor dashboard, or admin tool to support your e-commerce operations? Our web app service builds the tools behind the storefront.",
      icon: GlobeIcon,
      features: [
        "Vendor management dashboards",
        "Customer self-service portals",
        "Inventory management tools",
      ],
      href: "/webapplications",
    },
    {
      title: "API Development",
      description:
        "Connect your store to ERPs, warehouses, shipping carriers, and marketing platforms with robust API integrations.",
      icon: NetworkIcon,
      features: [
        "ERP & warehouse integrations",
        "Shipping carrier APIs",
        "Marketing platform connectors",
      ],
      href: "/apidevelopment",
    },
    {
      title: "Custom Software",
      description:
        "Complex fulfillment logic, custom pricing engines, or specialized inventory systems that go beyond standard e-commerce platform capabilities.",
      icon: CodeIcon,
      features: [
        "Custom pricing & quoting engines",
        "Fulfillment workflow automation",
        "Multi-warehouse orchestration",
      ],
      href: "/customsoftware",
    },
  ],
  ctaTitle: "Ready to build a store that actually converts?",
  ctaDescription:
    "Book a free 30-minute call to discuss your products, target customers, and how we can build an e-commerce experience that drives measurable revenue growth.",
};

export default function EcommerceSolutionsPage() {
  return <ServicePageTemplate data={pageData} />;
}
