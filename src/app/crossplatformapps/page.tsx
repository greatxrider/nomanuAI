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
  CalendarIcon,
} from "@/components/icons/PremiumIcons";

export const metadata: Metadata = {
  title: "Cross-Platform App Development | NomanuAI",
  description:
    "Build for iOS and Android simultaneously with React Native and Flutter. One codebase, two platforms, native performance, and faster time to market.",
  keywords: [
    "cross-platform development",
    "React Native development",
    "Flutter development",
    "cross-platform apps",
    "hybrid app development",
    "iOS and Android development",
    "shared codebase",
    "mobile app development",
    "multi-platform apps",
    "NomanuAI",
  ],
  openGraph: {
    title: "Cross-Platform App Development | NomanuAI",
    description:
      "Build for iOS and Android simultaneously with React Native and Flutter. One codebase, two platforms, native performance, and faster time to market.",
    url: "https://www.nomanuai.com/crossplatformapps",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cross-Platform App Development | NomanuAI",
    description:
      "Build for iOS and Android simultaneously with React Native and Flutter. One codebase, two platforms, native performance, and faster time to market.",
  },
  alternates: {
    canonical: "/crossplatformapps",
  },
};

const pageData: ServicePageData = {
  badge: "Cross-Platform Services",
  heroIcon: LayersIcon,
  title: "Cross-Platform App Development",
  subtitle: "One codebase. Two platforms. Native feel on both.",
  description:
    "We build cross-platform mobile apps using React Native and Flutter that share up to 90% of their code between iOS and Android while still delivering the smooth animations, fast startup, and platform-native interactions your users expect. You get to market faster, spend less, and maintain one codebase instead of two.",
  statistic: {
    value: "42%",
    label: "of mobile developers now use cross-platform frameworks, up from 28% three years ago",
    source: "Statista Developer Survey, 2024",
  },
  benefits: [
    {
      title: "Ship to both platforms in one build cycle",
      desc: "Instead of running parallel iOS and Android teams, a single cross-platform team delivers both apps simultaneously, cutting your development timeline by 30-40%.",
    },
    {
      title: "One codebase to maintain long-term",
      desc: "Bug fixes, feature updates, and design changes happen once and deploy everywhere. Your ongoing maintenance cost drops by half compared to two native codebases.",
    },
    {
      title: "Native performance where it matters",
      desc: "React Native's bridge and Flutter's compiled Dart deliver 60fps animations and sub-second startup. For performance-critical features, we drop to native code seamlessly.",
    },
    {
      title: "Consistent UX across platforms",
      desc: "Your brand experience stays unified on iOS and Android while still respecting platform conventions like navigation patterns, gestures, and system UI elements.",
    },
    {
      title: "Hot reload accelerates iteration",
      desc: "Both React Native and Flutter support hot reload, which means UI changes appear instantly during development. We iterate faster and you see progress in real time.",
    },
    {
      title: "Shared backend and business logic",
      desc: "API calls, state management, authentication, and business rules live in one place. No more syncing logic between two separate mobile codebases.",
    },
  ],
  benefitsIntro:
    "Cross-platform does not mean compromise. Modern frameworks have closed the gap with native development, and for most apps the tradeoffs are minimal while the savings in time and budget are significant.",
  personas: [
    {
      label: "Startups with Limited Runway",
      icon: RocketIcon,
      copy: "You need an MVP on both app stores but cannot afford two native teams. Cross-platform gets you there in one sprint with one budget.",
      size: "Pre-seed to Series A",
    },
    {
      label: "Product Companies",
      icon: TargetIcon,
      copy: "You have a web app and want to add mobile. React Native shares code with your React web frontend, reducing total engineering effort across all platforms.",
      size: "10-200 employees",
    },
    {
      label: "Marketplaces & Platforms",
      icon: UsersIcon,
      copy: "You need apps for buyers and sellers, drivers and riders, or providers and customers. Cross-platform lets you build multiple apps from shared component libraries.",
      size: "$1M-$50M revenue",
    },
    {
      label: "Enterprise Innovation Teams",
      icon: BriefcaseIcon,
      copy: "You are rolling out internal tools across mixed device fleets. One codebase means one team to manage, one deploy pipeline, and consistent behavior on every device.",
      size: "50-5,000+ employees",
    },
  ],
  personasIntro:
    "Cross-platform development is the right choice when reaching both platforms quickly matters more than squeezing out the last 5% of native performance. Here is who benefits most.",
  features: [
    {
      title: "React Native development",
      description:
        "JavaScript/TypeScript codebase with native modules, Reanimated for animations, and a massive ecosystem of community packages. Ideal if your team already knows React.",
      icon: CodeIcon,
    },
    {
      title: "Flutter development",
      description:
        "Dart-based framework with a custom rendering engine that delivers pixel-identical UI on both platforms. Excellent for design-heavy apps with complex animations.",
      icon: LayersIcon,
    },
    {
      title: "Native module bridges",
      description:
        "When a feature needs direct platform access, such as Bluetooth, camera, or ARKit, we write native Swift or Kotlin modules and bridge them into the shared codebase.",
      icon: NetworkIcon,
    },
    {
      title: "Shared CI/CD for both platforms",
      description:
        "One pipeline that builds, tests, and deploys to both the App Store and Play Store. We use EAS Build, Codemagic, or GitHub Actions depending on your stack.",
      icon: SettingsIcon,
    },
    {
      title: "State management & offline sync",
      description:
        "Redux, Zustand, or Riverpod for predictable state, combined with local storage and background sync so the app works reliably with spotty connectivity.",
      icon: ZapIcon,
    },
    {
      title: "Over-the-air updates",
      description:
        "Push JavaScript bundle updates to users instantly without waiting for app store review. Critical bug fixes reach your entire user base in minutes, not days.",
      icon: RocketIcon,
    },
  ],
  featuresIntro:
    "We choose the framework that fits your project, not the one we are most comfortable with. Here is what we deliver regardless of whether you go with React Native or Flutter.",
  packages: [
    {
      label: "START HERE",
      title: "Platform & Framework Assessment",
      price: "$797",
      description:
        "We analyze your requirements, evaluate React Native vs. Flutter vs. native for your specific use case, and deliver a recommendation with architecture plan, timeline, and cost comparison. No guesswork.",
    },
    {
      label: "MOST POPULAR",
      title: "Full Cross-Platform Build",
      price: "Starting at $12,000",
      description:
        "End-to-end design and development of your cross-platform app for iOS and Android. Includes UI/UX design, shared codebase development, native module integration, testing on 20+ device configurations, and store submissions for both platforms.",
      popular: true,
    },
    {
      label: "ONGOING",
      title: "Cross-Platform Retainer",
      price: "$2,000/mo",
      description:
        "Monthly development hours for new features, dependency updates, framework upgrades, and performance optimization across both platforms. Includes priority bug fixes and biweekly sprint planning.",
    },
  ],
  packagesIntro:
    "Not sure whether cross-platform is right for your app? Start with the assessment. Already decided? Jump straight to the build. Need ongoing velocity? The retainer keeps your app moving forward.",
  relatedServices: [
    {
      title: "iOS Development",
      description:
        "When your app demands maximum iOS performance or deep Apple ecosystem integration, a native Swift build is the right call.",
      icon: SmartphoneIcon,
      features: [
        "Native Swift & SwiftUI",
        "Full Apple ecosystem access",
        "App Store optimization",
      ],
      href: "/iosdevelopment",
    },
    {
      title: "Android Development",
      description:
        "For apps that need to push Android hardware limits or integrate deeply with Google services, native Kotlin is the way to go.",
      icon: SmartphoneIcon,
      features: [
        "Native Kotlin & Jetpack Compose",
        "Play Store optimization",
        "Offline-first architecture",
      ],
      href: "/androiddevelopment",
    },
    {
      title: "App Maintenance",
      description:
        "After launch, keep both platforms running smoothly with coordinated updates, dependency management, and cross-platform bug fixes.",
      icon: WrenchIcon,
      features: [
        "Coordinated iOS & Android updates",
        "Framework version upgrades",
        "Performance monitoring across devices",
      ],
      href: "/appmaintenance",
    },
  ],
  ctaTitle: "Ready to ship on both platforms?",
  ctaDescription:
    "Book a free 30-minute call to discuss your app idea, compare framework options, and get a realistic timeline for launching on iOS and Android simultaneously.",
};

export default function CrossPlatformAppsPage() {
  return <ServicePageTemplate data={pageData} />;
}
