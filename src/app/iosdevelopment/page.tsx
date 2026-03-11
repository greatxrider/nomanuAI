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
  EyeIcon,
  UserIcon,
} from "@/components/icons/PremiumIcons";

export const metadata: Metadata = {
  title: "iOS Development Services | NomanuAI",
  description:
    "Custom native iOS app development with Swift for iPhone and iPad. From concept to App Store deployment, we build fast, polished iOS apps that users love.",
  keywords: [
    "iOS development",
    "iPhone app development",
    "iPad app development",
    "Swift development",
    "App Store deployment",
    "native iOS apps",
    "iOS developer",
    "Apple app development",
    "mobile app development",
    "NomanuAI",
  ],
  openGraph: {
    title: "iOS Development Services | NomanuAI",
    description:
      "Custom native iOS app development with Swift for iPhone and iPad. From concept to App Store deployment, we build fast, polished iOS apps that users love.",
    url: "https://www.nomanuai.com/iosdevelopment",
  },
  twitter: {
    card: "summary_large_image",
    title: "iOS Development Services | NomanuAI",
    description:
      "Custom native iOS app development with Swift for iPhone and iPad. From concept to App Store deployment, we build fast, polished iOS apps that users love.",
  },
  alternates: {
    canonical: "/iosdevelopment",
  },
};

const pageData: ServicePageData = {
  badge: "iOS Development Services",
  heroIcon: SmartphoneIcon,
  title: "iOS App Development",
  subtitle: "Native Swift apps built for iPhone, iPad, and the Apple ecosystem",
  description:
    "We design and develop native iOS applications using Swift and SwiftUI that feel right at home on Apple devices. From first wireframe to App Store approval, we handle architecture, performance tuning, and the notoriously strict review process so your app ships on time and stays live.",
  statistic: {
    value: "$1.1T",
    label: "iOS App Store ecosystem generated over $1.1 trillion in developer billings and sales in 2022",
    source: "Apple App Store Ecosystem Report, 2023",
  },
  benefits: [
    {
      title: "Native performance that users feel",
      desc: "Swift compiles to machine code, which means your app launches faster, scrolls smoother, and drains less battery than hybrid alternatives.",
    },
    {
      title: "Full Apple ecosystem integration",
      desc: "We wire up HealthKit, ARKit, Core ML, Apple Pay, Sign in with Apple, and iCloud sync so your app takes advantage of everything the platform offers.",
    },
    {
      title: "App Store approval on the first submission",
      desc: "Our review-checklist process catches guideline violations before Apple does, avoiding the 2-3 week delays that sink launch timelines.",
    },
    {
      title: "Pixel-perfect Human Interface Guidelines",
      desc: "We follow Apple's HIG closely, which means your app looks and behaves the way iOS users expect, reducing support tickets and boosting ratings.",
    },
    {
      title: "Security and privacy built in",
      desc: "Keychain storage, App Transport Security, biometric auth, and data encryption are part of our baseline architecture, not bolted on later.",
    },
    {
      title: "Universal builds for iPhone and iPad",
      desc: "One codebase that adapts gracefully to every screen size, including iPad multitasking, Split View, and Stage Manager on newer devices.",
    },
  ],
  benefitsIntro:
    "iOS users spend more per app and expect a higher standard of polish. We build native Swift apps that meet those expectations and turn downloads into loyal, paying customers.",
  personas: [
    {
      label: "Funded Startups",
      icon: RocketIcon,
      copy: "You have a validated idea and seed funding. We turn your MVP spec into a production-ready iOS app that impresses investors and early adopters.",
      size: "Pre-seed to Series A",
    },
    {
      label: "E-Commerce Brands",
      icon: ShoppingCartIcon,
      copy: "Your customers are already on iPhones. A native shopping app with Apple Pay, push notifications, and smooth checkout converts better than mobile web.",
      size: "$500K-$50M revenue",
    },
    {
      label: "Healthcare & Wellness",
      icon: ShieldIcon,
      copy: "HIPAA-compliant apps with HealthKit integration, secure data handling, and intuitive patient-facing interfaces that pass regulatory review.",
      size: "Clinics to enterprise health systems",
    },
    {
      label: "Enterprise Teams",
      icon: BriefcaseIcon,
      copy: "Internal tools, field service apps, and customer-facing portals built with MDM compatibility, SSO, and the security your IT team requires.",
      size: "50-5,000+ employees",
    },
  ],
  personasIntro:
    "We build iOS apps for teams that need more than a template. Whether you are launching your first product or extending an enterprise platform, here is who we typically work with.",
  features: [
    {
      title: "Swift & SwiftUI development",
      description:
        "Modern Swift codebases with SwiftUI for declarative interfaces, Combine for reactive data flow, and async/await concurrency for clean, testable code.",
      icon: CodeIcon,
    },
    {
      title: "App Store optimization & submission",
      description:
        "We handle metadata, screenshots, preview videos, keyword research, and the submission process, including responding to App Review feedback.",
      icon: TargetIcon,
    },
    {
      title: "Push notifications & engagement",
      description:
        "Rich push notifications, in-app messaging, and deep linking configured to re-engage users without overwhelming them.",
      icon: ZapIcon,
    },
    {
      title: "CI/CD pipeline & TestFlight",
      description:
        "Automated build, test, and deploy pipelines using Xcode Cloud or Fastlane so every commit is tested and TestFlight builds reach your team in minutes.",
      icon: SettingsIcon,
    },
    {
      title: "Analytics & crash reporting",
      description:
        "Firebase Analytics, Crashlytics, and custom event tracking wired up from day one so you understand user behavior and catch issues before reviews drop.",
      icon: LineChartIcon,
    },
    {
      title: "Accessibility & localization",
      description:
        "VoiceOver support, Dynamic Type, and full localization infrastructure so your app is usable by everyone and ready for international markets.",
      icon: EyeIcon,
    },
  ],
  featuresIntro:
    "Every iOS project we deliver includes these capabilities as standard. We do not treat them as add-ons because they are what separates a good app from one that gets uninstalled.",
  packages: [
    {
      label: "START HERE",
      title: "iOS App Discovery",
      price: "$997",
      description:
        "A two-week deep dive into your requirements, user flows, technical architecture, and App Store strategy. You walk away with a detailed spec, timeline estimate, and clickable Figma prototype, whether you build with us or not.",
    },
    {
      label: "MOST POPULAR",
      title: "Full iOS App Build",
      price: "Starting at $15,000",
      description:
        "End-to-end design and development of your native iOS app, from wireframes through App Store approval. Includes UI/UX design, Swift development, testing, CI/CD setup, and 30 days of post-launch support.",
      popular: true,
    },
    {
      label: "ONGOING",
      title: "iOS App Retainer",
      price: "$2,500/mo",
      description:
        "Dedicated iOS development hours each month for new features, OS compatibility updates, performance optimization, and App Store compliance. Includes priority bug fixes and quarterly roadmap planning.",
    },
  ],
  packagesIntro:
    "Every app is different, but the path is the same: understand, build, and improve. Pick the starting point that fits where you are today.",
  relatedServices: [
    {
      title: "Android Development",
      description:
        "Reach the other half of the market with a native Kotlin Android app built to the same quality standard as your iOS app.",
      icon: SmartphoneIcon,
      features: [
        "Native Kotlin & Jetpack Compose",
        "Play Store optimization & deployment",
        "Material Design 3 implementation",
      ],
      href: "/androiddevelopment",
    },
    {
      title: "Cross-Platform Apps",
      description:
        "Ship to iOS and Android simultaneously with a shared React Native or Flutter codebase when time-to-market matters most.",
      icon: LayersIcon,
      features: [
        "React Native & Flutter development",
        "Single codebase for both platforms",
        "Native module integration when needed",
      ],
      href: "/crossplatformapps",
    },
    {
      title: "UI/UX Design",
      description:
        "User research, wireframing, and high-fidelity prototyping so your app is intuitive before a single line of code is written.",
      icon: PaletteIcon,
      features: [
        "User research & journey mapping",
        "Interactive Figma prototypes",
        "Design system creation",
      ],
      href: "/uiuxdesign",
    },
  ],
  ctaTitle: "Ready to build your iOS app?",
  ctaDescription:
    "Book a free 30-minute call to walk through your idea, discuss technical requirements, and get a realistic timeline and budget range for your iOS project.",
};

export default function IOSDevelopmentPage() {
  return <ServicePageTemplate data={pageData} />;
}
