import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import type { ServicePageData } from "@/components/ServicePageTemplate";
import {
  SmartphoneIcon,
  ShieldIcon,
  ZapIcon,
  RocketIcon,
  TargetIcon,
  LineChartIcon,
  CodeIcon,
  BriefcaseIcon,
  UsersIcon,
  ShoppingCartIcon,
  LayersIcon,
  WrenchIcon,
  PaletteIcon,
  EyeIcon,
  UserIcon,
  MessageIcon,
} from "@/components/icons/PremiumIcons";

export const metadata: Metadata = {
  title: "UI/UX Design Services | NomanuAI",
  description:
    "Mobile-first UI/UX design with user research, wireframing, prototyping, and design systems. We design apps people actually want to use, backed by data and tested with real users.",
  keywords: [
    "UI UX design",
    "mobile app design",
    "user experience design",
    "user interface design",
    "app prototyping",
    "design systems",
    "user research",
    "wireframing",
    "Figma design",
    "NomanuAI",
  ],
  openGraph: {
    title: "UI/UX Design Services | NomanuAI",
    description:
      "Mobile-first UI/UX design with user research, wireframing, prototyping, and design systems. We design apps people actually want to use, backed by data and tested with real users.",
    url: "https://www.nomanuai.com/uiuxdesign",
  },
  twitter: {
    card: "summary_large_image",
    title: "UI/UX Design Services | NomanuAI",
    description:
      "Mobile-first UI/UX design with user research, wireframing, prototyping, and design systems. We design apps people actually want to use, backed by data and tested with real users.",
  },
  alternates: {
    canonical: "/uiuxdesign",
  },
};

const pageData: ServicePageData = {
  badge: "UI/UX Design Services",
  heroIcon: PaletteIcon,
  title: "UI/UX Design",
  subtitle: "Design that works for your users, not just looks good in a portfolio",
  description:
    "We design mobile and web experiences grounded in real user research, not assumptions. From initial discovery through interactive prototypes and production-ready design systems, every screen we deliver has been validated against actual user behavior. The result is apps that feel intuitive on first use, convert better, and generate fewer support requests.",
  statistic: {
    value: "$100:$1",
    label: "Every $1 invested in UX design returns $100 in business value through reduced development rework and higher user satisfaction",
    source: "Forrester Research, UX ROI Study",
  },
  benefits: [
    {
      title: "Reduce development rework by 50%",
      desc: "When you validate designs with real users before writing code, you catch usability problems early. Fixing a wireframe takes hours. Fixing a shipped feature takes weeks.",
    },
    {
      title: "Increase conversion rates measurably",
      desc: "Every friction point in your user flow costs conversions. We identify and eliminate those friction points through task analysis and usability testing.",
    },
    {
      title: "Ship faster with a design system",
      desc: "A component library with documented patterns means your developers stop reinventing UI for every screen. New features go from design to code in half the time.",
    },
    {
      title: "Lower support costs through clarity",
      desc: "When users understand how your app works without reading documentation, your support ticket volume drops. Good UX is your cheapest support agent.",
    },
    {
      title: "Accessible design by default",
      desc: "WCAG-compliant color contrast, touch target sizes, screen reader labels, and keyboard navigation built into every design, not patched in after an audit.",
    },
    {
      title: "Data-informed, not opinion-driven",
      desc: "We use heatmaps, session recordings, and A/B test results to guide design decisions. When stakeholders disagree, the data decides.",
    },
  ],
  benefitsIntro:
    "Good design is not subjective. It is measurable in conversion rates, task completion times, support ticket volume, and user retention. We design for those metrics, not for awards.",
  personas: [
    {
      label: "Startups Pre-Development",
      icon: RocketIcon,
      copy: "You have an idea but no designs. We create validated prototypes you can test with users and present to investors before spending a dollar on development.",
      size: "Pre-seed to Seed stage",
    },
    {
      label: "Product Teams Redesigning",
      icon: TargetIcon,
      copy: "Your existing app works but users complain about specific flows. We audit, redesign, and test problem areas while maintaining consistency with the rest of your product.",
      size: "10-100 employees",
    },
    {
      label: "Enterprise UX Modernization",
      icon: BriefcaseIcon,
      copy: "Legacy internal tools with poor adoption rates. We redesign complex workflows into intuitive interfaces that employees actually want to use, reducing training costs.",
      size: "500-10,000+ employees",
    },
    {
      label: "E-Commerce Optimization",
      icon: ShoppingCartIcon,
      copy: "Your checkout flow has a 70% abandonment rate. We map the entire purchase journey, identify drop-off points, and redesign for measurable conversion improvement.",
      size: "$1M-$100M revenue",
    },
  ],
  personasIntro:
    "Design is not just for new products. Whether you are starting from zero or optimizing an existing experience, here is who gets the most from working with our design team.",
  features: [
    {
      title: "User research & interviews",
      description:
        "Structured interviews, contextual inquiry, and survey design to understand your users' actual needs, behaviors, and pain points, not what you assume they want.",
      icon: UserIcon,
    },
    {
      title: "Wireframing & information architecture",
      description:
        "Low-fidelity wireframes and site maps that nail the structure, navigation, and content hierarchy before visual design begins. Fast to iterate, cheap to change.",
      icon: LayersIcon,
    },
    {
      title: "Interactive Figma prototypes",
      description:
        "High-fidelity, clickable prototypes that look and feel like the real app. Test with users, demo to stakeholders, and hand directly to developers with inspect-ready specs.",
      icon: EyeIcon,
    },
    {
      title: "Usability testing & iteration",
      description:
        "Moderated and unmoderated testing sessions with 5-8 users per round. We record task completion rates, time-on-task, and qualitative feedback, then iterate based on findings.",
      icon: MessageIcon,
    },
    {
      title: "Design system & component library",
      description:
        "A documented Figma component library with tokens, spacing scales, typography, and interaction patterns that keeps your product visually consistent as it grows.",
      icon: PaletteIcon,
    },
    {
      title: "Developer handoff & QA",
      description:
        "Pixel-perfect specs, redlines, responsive breakpoints, and interaction annotations delivered in Figma with developer-friendly naming conventions and asset exports.",
      icon: CodeIcon,
    },
  ],
  featuresIntro:
    "Our design process is structured but not rigid. Every project includes these capabilities, and we adjust the depth based on your timeline, budget, and how much you already know about your users.",
  packages: [
    {
      label: "START HERE",
      title: "UX Audit & Roadmap",
      price: "$997",
      description:
        "A two-week expert review of your existing app or website covering usability heuristics, accessibility compliance, conversion funnel analysis, and competitive benchmarking. Deliverables include an annotated audit report and prioritized redesign roadmap.",
    },
    {
      label: "MOST POPULAR",
      title: "Full Design Sprint",
      price: "Starting at $8,000",
      description:
        "Complete UX/UI design from research through production-ready prototypes. Includes user interviews, wireframes, high-fidelity Figma designs, interactive prototype, one round of usability testing, design system foundation, and developer handoff documentation.",
      popular: true,
    },
    {
      label: "ONGOING",
      title: "Design Retainer",
      price: "$3,000/mo",
      description:
        "Embedded design support for your product team. Monthly hours for new feature design, usability testing, design system maintenance, and design QA during development. Includes weekly design reviews and quarterly UX audits.",
    },
  ],
  packagesIntro:
    "Whether you need a quick expert opinion on what is broken or a full design engagement, we have a starting point. Every engagement begins with understanding your users.",
  relatedServices: [
    {
      title: "iOS Development",
      description:
        "Turn your validated designs into a native iOS app. Our developers work directly from your Figma files and design system for pixel-perfect implementation.",
      icon: SmartphoneIcon,
      features: [
        "Design-to-code with SwiftUI",
        "Human Interface Guidelines alignment",
        "Interactive prototype to production",
      ],
      href: "/iosdevelopment",
    },
    {
      title: "Android Development",
      description:
        "Implement your designs as a native Android app with Material Design 3 components that match your design system and brand identity.",
      icon: SmartphoneIcon,
      features: [
        "Material Design 3 implementation",
        "Jetpack Compose from Figma specs",
        "Adaptive layouts for all screen sizes",
      ],
      href: "/androiddevelopment",
    },
    {
      title: "Cross-Platform Apps",
      description:
        "Ship your designs to both iOS and Android simultaneously with a shared codebase that implements your design system consistently across platforms.",
      icon: LayersIcon,
      features: [
        "Shared component library implementation",
        "Platform-adaptive design patterns",
        "Design system to code automation",
      ],
      href: "/crossplatformapps",
    },
  ],
  ctaTitle: "Ready to design an app people actually want to use?",
  ctaDescription:
    "Book a free 30-minute call to discuss your design challenges, review your current user experience, and see how research-driven design can improve your product metrics.",
};

export default function UIUXDesignPage() {
  return <ServicePageTemplate data={pageData} />;
}
