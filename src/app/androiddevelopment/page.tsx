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
  NetworkIcon,
  UserIcon,
} from "@/components/icons/PremiumIcons";

export const metadata: Metadata = {
  title: "Android Development Services | NomanuAI",
  description:
    "Native Android app development with Kotlin and Jetpack Compose. We build performant, Material Design apps and handle Play Store deployment from start to finish.",
  keywords: [
    "Android development",
    "Android app development",
    "Kotlin development",
    "Jetpack Compose",
    "Play Store deployment",
    "native Android apps",
    "Material Design",
    "Google Play Store",
    "mobile app development",
    "NomanuAI",
  ],
  openGraph: {
    title: "Android Development Services | NomanuAI",
    description:
      "Native Android app development with Kotlin and Jetpack Compose. We build performant, Material Design apps and handle Play Store deployment from start to finish.",
    url: "https://www.nomanuai.com/androiddevelopment",
  },
  twitter: {
    card: "summary_large_image",
    title: "Android Development Services | NomanuAI",
    description:
      "Native Android app development with Kotlin and Jetpack Compose. We build performant, Material Design apps and handle Play Store deployment from start to finish.",
  },
  alternates: {
    canonical: "/androiddevelopment",
  },
};

const pageData: ServicePageData = {
  badge: "Android Development Services",
  heroIcon: SmartphoneIcon,
  title: "Android App Development",
  subtitle: "Native Kotlin apps built for the world's largest mobile platform",
  description:
    "We build native Android applications using Kotlin and Jetpack Compose that run beautifully across thousands of device configurations. From phones and tablets to foldables and Chromebooks, we handle the fragmentation so your users get a consistent, fast experience everywhere.",
  statistic: {
    value: "72%",
    label: "Android holds over 72% of the global mobile operating system market share",
    source: "StatCounter Global Stats, 2024",
  },
  benefits: [
    {
      title: "Reach the majority of mobile users worldwide",
      desc: "With 3+ billion active Android devices globally, your app gains access to the largest mobile audience on the planet, especially in high-growth markets.",
    },
    {
      title: "Modern Kotlin-first architecture",
      desc: "Kotlin coroutines, Flow, and Jetpack Compose let us write less code that does more, which means fewer bugs, faster iteration, and lower long-term maintenance costs.",
    },
    {
      title: "Device fragmentation handled for you",
      desc: "We test across screen sizes, OS versions, and manufacturers so your app works on a Samsung Galaxy, a Pixel, and a budget Xiaomi without separate builds.",
    },
    {
      title: "Material Design 3 that feels native",
      desc: "Dynamic color theming, motion, and components that follow Google's latest design language so your app feels familiar and trustworthy to Android users.",
    },
    {
      title: "Play Store optimization from day one",
      desc: "Store listing experiments, keyword strategy, and staged rollouts configured before launch to maximize visibility and conversion from search to install.",
    },
    {
      title: "Deep Google ecosystem integration",
      desc: "Google Maps, Firebase, ML Kit, Google Pay, and Nearby all integrated cleanly so your app leverages the full power of the Android platform.",
    },
  ],
  benefitsIntro:
    "Android is where most of the world's mobile users are. We build native apps that load fast on mid-range hardware, look polished on every screen size, and convert installs into active users.",
  personas: [
    {
      label: "Global Startups",
      icon: RocketIcon,
      copy: "You are targeting markets where Android dominates, like Southeast Asia, Latin America, or Africa. We build lightweight, offline-capable apps that perform on real-world networks.",
      size: "Pre-seed to Series B",
    },
    {
      label: "Retail & E-Commerce",
      icon: ShoppingCartIcon,
      copy: "Your customers browse on Android. A native app with Google Pay, personalized push notifications, and smooth product browsing outperforms mobile web on conversion rate.",
      size: "$500K-$100M revenue",
    },
    {
      label: "Field Service Companies",
      icon: WrenchIcon,
      copy: "Your team needs rugged, reliable apps that work offline, sync when connected, and capture photos, signatures, and GPS data in the field.",
      size: "10-500 field technicians",
    },
    {
      label: "Enterprise Organizations",
      icon: BriefcaseIcon,
      copy: "Internal apps, kiosk deployments, and customer portals with Android Enterprise compatibility, managed configurations, and integration with your existing backend.",
      size: "100-10,000+ employees",
    },
  ],
  personasIntro:
    "Android development is not one-size-fits-all. The constraints of a startup MVP are different from an enterprise field app. Here is who gets the most value from working with us.",
  features: [
    {
      title: "Kotlin & Jetpack Compose UI",
      description:
        "Declarative UI with Compose, Kotlin coroutines for async work, and Hilt for dependency injection. Clean architecture that your next developer can actually understand.",
      icon: CodeIcon,
    },
    {
      title: "Play Store submission & optimization",
      description:
        "We handle app signing, staged rollouts, store listing experiments, and policy compliance so your app passes review and ranks well in search results.",
      icon: TargetIcon,
    },
    {
      title: "Offline-first architecture",
      description:
        "Room database, WorkManager for background sync, and conflict resolution logic so your app stays functional even with no network connection.",
      icon: NetworkIcon,
    },
    {
      title: "CI/CD with GitHub Actions & Firebase",
      description:
        "Automated build, lint, test, and deploy pipelines. Every pull request is verified, and beta builds reach testers through Firebase App Distribution automatically.",
      icon: SettingsIcon,
    },
    {
      title: "Performance profiling & optimization",
      description:
        "We profile startup time, memory usage, and frame rates using Android Studio Profiler and Perfetto so the app runs smoothly even on budget hardware.",
      icon: ZapIcon,
    },
    {
      title: "Multi-device support",
      description:
        "Adaptive layouts for phones, tablets, foldables, and Chromebooks. We use WindowSizeClass and canonical layouts so one APK works everywhere.",
      icon: LayersIcon,
    },
  ],
  featuresIntro:
    "These are not optional extras. Every Android project we ship includes modern tooling, proper testing, and production-grade infrastructure because cutting corners costs more later.",
  packages: [
    {
      label: "START HERE",
      title: "Android App Discovery",
      price: "$997",
      description:
        "A two-week sprint covering requirements analysis, user flow mapping, technical architecture decisions, and Play Store strategy. Deliverables include a detailed spec document, architecture diagram, and interactive Figma prototype.",
    },
    {
      label: "MOST POPULAR",
      title: "Full Android App Build",
      price: "Starting at $12,000",
      description:
        "Complete design and development of your native Android app. Includes UI/UX design, Kotlin development, automated testing, CI/CD pipeline, Play Store submission, and 30 days of post-launch bug fixes and monitoring.",
      popular: true,
    },
    {
      label: "ONGOING",
      title: "Android App Retainer",
      price: "$2,000/mo",
      description:
        "Monthly development hours for feature work, OS version compatibility updates, performance tuning, and Play Store policy compliance. Includes priority support and quarterly product roadmap sessions.",
    },
  ],
  packagesIntro:
    "Whether you need a quick feasibility check or a full product build, we have a clear path forward. Start where it makes sense for your stage.",
  relatedServices: [
    {
      title: "iOS Development",
      description:
        "Launch on Apple's ecosystem alongside Android with a native Swift app that meets the same quality bar and shares your backend infrastructure.",
      icon: SmartphoneIcon,
      features: [
        "Native Swift & SwiftUI development",
        "App Store optimization & submission",
        "Full Apple ecosystem integration",
      ],
      href: "/iosdevelopment",
    },
    {
      title: "Cross-Platform Apps",
      description:
        "If budget or timeline is tight, a shared React Native or Flutter codebase lets you ship to both platforms faster with one team.",
      icon: LayersIcon,
      features: [
        "React Native & Flutter development",
        "Single codebase for iOS and Android",
        "Native performance where it matters",
      ],
      href: "/crossplatformapps",
    },
    {
      title: "App Maintenance",
      description:
        "Keep your Android app running smoothly with ongoing bug fixes, OS updates, performance monitoring, and feature iteration after launch.",
      icon: WrenchIcon,
      features: [
        "Bug fixes & crash resolution",
        "OS version compatibility updates",
        "Performance monitoring & optimization",
      ],
      href: "/appmaintenance",
    },
  ],
  ctaTitle: "Ready to build your Android app?",
  ctaDescription:
    "Book a free 30-minute call to discuss your project, review technical requirements, and get a realistic estimate for your Android app development.",
};

export default function AndroidDevelopmentPage() {
  return <ServicePageTemplate data={pageData} />;
}
