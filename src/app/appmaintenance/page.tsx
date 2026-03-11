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
  SettingsIcon,
  CalendarIcon,
  HeadphonesIcon,
} from "@/components/icons/PremiumIcons";

export const metadata: Metadata = {
  title: "App Maintenance & Support Services | NomanuAI",
  description:
    "Keep your mobile app running smoothly with ongoing bug fixes, OS updates, performance monitoring, security patches, and feature iteration. Proactive maintenance that prevents problems.",
  keywords: [
    "app maintenance",
    "mobile app support",
    "app bug fixes",
    "iOS app maintenance",
    "Android app maintenance",
    "app performance optimization",
    "app monitoring",
    "mobile app updates",
    "app security patches",
    "NomanuAI",
  ],
  openGraph: {
    title: "App Maintenance & Support Services | NomanuAI",
    description:
      "Keep your mobile app running smoothly with ongoing bug fixes, OS updates, performance monitoring, security patches, and feature iteration. Proactive maintenance that prevents problems.",
    url: "https://www.nomanuai.com/appmaintenance",
  },
  twitter: {
    card: "summary_large_image",
    title: "App Maintenance & Support Services | NomanuAI",
    description:
      "Keep your mobile app running smoothly with ongoing bug fixes, OS updates, performance monitoring, security patches, and feature iteration. Proactive maintenance that prevents problems.",
  },
  alternates: {
    canonical: "/appmaintenance",
  },
};

const pageData: ServicePageData = {
  badge: "App Maintenance Services",
  heroIcon: WrenchIcon,
  title: "App Maintenance & Support",
  subtitle: "Keep your app fast, stable, and up to date without the firefighting",
  description:
    "Launching an app is the beginning, not the end. OS updates break things, user expectations evolve, and technical debt accumulates. We provide proactive maintenance that catches issues before your users do, keeps your app compatible with new devices and OS versions, and continuously improves performance so your ratings stay high.",
  statistic: {
    value: "50%",
    label: "of apps are uninstalled within 30 days due to bugs, crashes, or poor performance",
    source: "AppsFlyer Uninstall Benchmark Report, 2023",
  },
  benefits: [
    {
      title: "Catch crashes before your users report them",
      desc: "Real-time crash monitoring and alerting means we are investigating issues within minutes of the first occurrence, often before a single support ticket is filed.",
    },
    {
      title: "Stay compatible with every OS release",
      desc: "Apple and Google ship major OS updates annually and minor ones monthly. We test and patch your app against beta releases so nothing breaks on update day.",
    },
    {
      title: "Improve performance continuously",
      desc: "We track startup time, frame rates, memory usage, and API response times weekly, then optimize the slowest paths so your app gets faster over time, not slower.",
    },
    {
      title: "Security patches applied promptly",
      desc: "Dependency vulnerabilities, API security fixes, and certificate renewals handled within 48 hours of disclosure so your app and user data stay protected.",
    },
    {
      title: "Protect your App Store ratings",
      desc: "A single bad update can tank your rating. We run regression testing on every release and monitor review sentiment to catch issues before they cascade.",
    },
    {
      title: "Free your team to focus on product",
      desc: "Instead of your developers context-switching between new features and maintenance firefighting, we own the operational health of your app entirely.",
    },
  ],
  benefitsIntro:
    "An unmaintained app is a ticking clock. Every month without updates increases the odds of crashes on new devices, security vulnerabilities, and declining store ratings. We keep that clock from ever going off.",
  personas: [
    {
      label: "Startups Post-Launch",
      icon: RocketIcon,
      copy: "Your dev team shipped the MVP and moved on to the next feature. We take over maintenance so they can focus on growth without the app falling apart behind them.",
      size: "Seed to Series B",
    },
    {
      label: "Agencies & Dev Shops",
      icon: UsersIcon,
      copy: "You built the app for a client but do not want to staff a maintenance team. We white-label ongoing support so your clients stay happy and you stay focused on new projects.",
      size: "Agencies with 5-50+ client apps",
    },
    {
      label: "Enterprise App Portfolios",
      icon: BriefcaseIcon,
      copy: "You have multiple internal and customer-facing apps across iOS and Android. We maintain the entire portfolio under one SLA with consolidated reporting.",
      size: "5-50+ apps in production",
    },
    {
      label: "E-Commerce & SaaS Companies",
      icon: ShoppingCartIcon,
      copy: "Your mobile app drives revenue. Downtime and bugs cost real money. We provide the monitoring and rapid response that keeps your conversion funnel intact.",
      size: "$1M-$100M revenue",
    },
  ],
  personasIntro:
    "App maintenance is not glamorous, but it is what separates apps that thrive from apps that decay. Here is who typically needs a dedicated maintenance partner.",
  features: [
    {
      title: "24/7 crash monitoring & alerting",
      description:
        "Crashlytics, Sentry, or Bugsnag configured with intelligent alerting thresholds so we are notified of new crash patterns immediately and can triage by impact severity.",
      icon: ShieldIcon,
    },
    {
      title: "OS & device compatibility updates",
      description:
        "We test against iOS and Android beta releases months before public launch, then ship compatibility patches so your app works perfectly on day one of every OS update.",
      icon: SmartphoneIcon,
    },
    {
      title: "Performance optimization sprints",
      description:
        "Monthly performance audits covering cold start time, scroll jank, memory leaks, and network efficiency. We identify regressions and optimize the critical paths.",
      icon: ZapIcon,
    },
    {
      title: "Dependency & security updates",
      description:
        "Third-party libraries and SDKs checked weekly for vulnerabilities and breaking changes. We update, test, and deploy patches before they become emergencies.",
      icon: CodeIcon,
    },
    {
      title: "App Store compliance monitoring",
      description:
        "Apple and Google update their policies regularly. We track changes, assess impact on your app, and implement required modifications before enforcement deadlines.",
      icon: TargetIcon,
    },
    {
      title: "Monthly health reports",
      description:
        "Clear, non-technical reports covering crash rates, performance trends, active issues, completed fixes, and recommendations. Your stakeholders stay informed without reading logs.",
      icon: LineChartIcon,
    },
  ],
  featuresIntro:
    "Maintenance is not just fixing bugs when they appear. It is a systematic process of monitoring, preventing, and improving. Here is what our maintenance service includes.",
  packages: [
    {
      label: "START HERE",
      title: "App Health Assessment",
      price: "$497",
      description:
        "A comprehensive audit of your existing app covering crash rates, performance bottlenecks, security vulnerabilities, dependency health, and App Store compliance. You receive a prioritized remediation plan with effort estimates.",
    },
    {
      label: "MOST POPULAR",
      title: "Full Maintenance Plan",
      price: "Starting at $5,000",
      description:
        "Complete setup of monitoring infrastructure, resolution of all critical issues identified in the assessment, and first month of proactive maintenance. Includes crash monitoring, performance baselines, CI/CD improvements, and documentation.",
      popular: true,
    },
    {
      label: "ONGOING",
      title: "Monthly Maintenance Retainer",
      price: "$1,500/mo",
      description:
        "Dedicated maintenance hours each month covering bug fixes, OS compatibility updates, security patches, performance optimization, and App Store compliance. Includes 24/7 crash monitoring and monthly health reports.",
    },
  ],
  packagesIntro:
    "Start with an honest assessment of where your app stands today. From there, we either fix the critical issues or jump straight into ongoing maintenance depending on what we find.",
  relatedServices: [
    {
      title: "iOS Development",
      description:
        "Need new features or a major rebuild for your iOS app? Our development team handles feature work while maintenance keeps the existing app stable.",
      icon: SmartphoneIcon,
      features: [
        "Native Swift feature development",
        "iOS version migration & upgrades",
        "App Store resubmission support",
      ],
      href: "/iosdevelopment",
    },
    {
      title: "Android Development",
      description:
        "Extend your Android app with new capabilities while we ensure the current version stays performant and compatible across the device ecosystem.",
      icon: SmartphoneIcon,
      features: [
        "Native Kotlin feature development",
        "Play Store policy compliance",
        "Multi-device compatibility testing",
      ],
      href: "/androiddevelopment",
    },
    {
      title: "UI/UX Design",
      description:
        "If maintenance audits reveal UX issues driving poor ratings, our design team can redesign problem flows backed by real user data and analytics.",
      icon: PaletteIcon,
      features: [
        "UX audit & usability testing",
        "Redesign of problem screens",
        "Design system updates",
      ],
      href: "/uiuxdesign",
    },
  ],
  ctaTitle: "Ready to stop firefighting your app?",
  ctaDescription:
    "Book a free 30-minute call to discuss your app's current state, review your biggest pain points, and see how proactive maintenance can protect your investment.",
};

export default function AppMaintenancePage() {
  return <ServicePageTemplate data={pageData} />;
}
