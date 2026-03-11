import Footer from "@/components/Footer";
import Link from "next/link";
import { DarkHoneycombBackground } from "@/components/ui/SectionBackgrounds";
import {
  ArrowRightIcon,
} from "@/components/icons/PremiumIcons";
import type { ComponentType } from "react";

interface IconProps {
  size?: number;
  className?: string;
}

interface ServiceBenefit {
  title: string;
  desc: string;
}

interface ServicePersona {
  label: string;
  icon: ComponentType<IconProps>;
  copy: string;
  size: string;
}

interface ServiceFeature {
  title: string;
  description: string;
  icon: ComponentType<IconProps>;
}

interface ServicePackage {
  label: string;
  title: string;
  price: string;
  description: string;
  popular?: boolean;
}

interface RelatedService {
  title: string;
  description: string;
  icon: ComponentType<IconProps>;
  features: string[];
  href: string;
}

export interface ServicePageData {
  badge: string;
  heroIcon: ComponentType<IconProps>;
  title: string;
  subtitle: string;
  description: string;
  statistic: {
    value: string;
    label: string;
    source: string;
  };
  benefits: ServiceBenefit[];
  benefitsIntro: string;
  personas: ServicePersona[];
  personasIntro: string;
  features: ServiceFeature[];
  featuresIntro: string;
  packages: ServicePackage[];
  packagesIntro: string;
  relatedServices: RelatedService[];
  ctaTitle: string;
  ctaDescription: string;
}

export default function ServicePageTemplate({ data }: { data: ServicePageData }) {
  const HeroIcon = data.heroIcon;

  return (
    <main className="min-h-screen transition-colors duration-300">
      {/* Hero Section - Pattern A */}
      <section className="relative pt-36 pb-20 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 opacity-50 dark:opacity-30" style={{ backgroundImage: "url('/assets/beeInspiration/5303586.jpg')", backgroundSize: "cover", backgroundPosition: "center" }} />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 via-white/40 to-gray-100/50 dark:from-gray-950/70 dark:via-gray-900/60 dark:to-gray-950/70" />
        </div>

        <div className="container-width relative z-10">
          <div className="max-w-4xl">
            <div className="badge-glass mb-5">
              <HeroIcon size={16} className="mr-2 text-brand" />
              <span className="font-display tracking-wide text-xs uppercase font-bold">
                {data.badge}
              </span>
            </div>
            <h1 className="heading-display mb-3">
              <span className="honey-shimmer">{data.title}</span>
            </h1>
            <p className="text-lg md:text-xl font-semibold text-brand-orange mb-4">
              {data.subtitle}
            </p>
            <p className="text-body-lg mb-8 max-w-3xl">{data.description}</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/#contact" className="btn-primary">
                Book a Call
              </Link>
              <Link href="/#projects" className="btn-secondary">
                See Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof / Statistic - Pattern B */}
      <section className="relative section-padding bg-paper dark:bg-gray-950 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 divider-honeycomb" />
        <div className="absolute bottom-0 left-0 right-0 divider-honeycomb" />

        <div className="container-width relative z-10">
          <div className="card-honeycomb p-8 max-w-3xl mx-auto text-center">
            <div className="text-6xl font-bold text-brand-orange mb-3">{data.statistic.value}</div>
            <p className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {data.statistic.label}
            </p>
            <p className="text-body">{data.statistic.source}</p>
          </div>
        </div>
      </section>

      {/* Benefits Section - Pattern C */}
      <section className="relative section-padding bg-paper dark:bg-gray-950 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 opacity-[0.25] dark:opacity-15" style={{ backgroundImage: "url('/assets/beeInspiration/5303586.jpg')", backgroundSize: "cover", backgroundPosition: "center" }} />
          <div className="absolute inset-0 bg-paper/60 dark:bg-gray-950/80" />
          <DarkHoneycombBackground patternId={`${data.badge.replace(/\s+/g, '-').toLowerCase()}-benefits`} />
        </div>

        <div className="container-width relative z-10">
          <h2 className="heading-lg mb-2">
            <span className="text-gradient">What we deliver</span>
          </h2>
          <div className="hex-accent-line mb-4" />
          <p className="text-body-lg mb-10 max-w-3xl">{data.benefitsIntro}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.benefits.map((item) => (
              <div key={item.title} className="card-honeycomb p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Work With - Pattern A */}
      <section className="relative py-32 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 opacity-50 dark:opacity-30" style={{ backgroundImage: "url('/assets/beeInspiration/5303586.jpg')", backgroundSize: "cover", backgroundPosition: "center" }} />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 via-white/40 to-gray-100/50 dark:from-gray-950/70 dark:via-gray-900/60 dark:to-gray-950/70" />
        </div>

        <div className="container-width relative z-10">
          <h2 className="heading-lg mb-2">
            <span className="text-gradient">Who typically needs this</span>
          </h2>
          <div className="hex-accent-line mb-4" />
          <p className="text-body-lg mb-10 max-w-3xl">{data.personasIntro}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.personas.map(({ label, icon: Icon, copy, size }) => (
              <div key={label} className="card-honeycomb p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="icon-hex w-10 h-10">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <span className="text-gray-900 dark:text-white font-semibold block">
                      {label}
                    </span>
                    <span className="text-xs text-brand-orange">{size}</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  {copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features / Automations - Pattern B */}
      <section className="relative section-padding bg-paper dark:bg-gray-950 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 divider-honeycomb" />
        <div className="absolute bottom-0 left-0 right-0 divider-honeycomb" />

        <div className="container-width relative z-10">
          <h2 className="heading-lg mb-2">
            <span className="text-gradient">What we build</span>
          </h2>
          <div className="hex-accent-line mb-4" />
          <p className="text-body-lg mb-10 max-w-3xl">{data.featuresIntro}</p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {data.features.map(({ title, description, icon: Icon }) => (
              <div key={title} className="card-honeycomb p-6">
                <div className="flex items-start space-x-3 mb-3">
                  <div className="icon-hex w-10 h-10">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {title}
                    </h3>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Packages - Pattern C */}
      <section className="relative py-32 bg-paper dark:bg-gray-950 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 opacity-[0.25] dark:opacity-15" style={{ backgroundImage: "url('/assets/beeInspiration/5303586.jpg')", backgroundSize: "cover", backgroundPosition: "center" }} />
          <div className="absolute inset-0 bg-paper/60 dark:bg-gray-950/80" />
          <DarkHoneycombBackground patternId={`${data.badge.replace(/\s+/g, '-').toLowerCase()}-packages`} />
        </div>

        <div className="container-width relative z-10">
          <h2 className="heading-lg mb-2">
            <span className="text-gradient">How we can help</span>
          </h2>
          <div className="hex-accent-line mb-4" />
          <p className="text-body-lg mb-10 max-w-3xl">{data.packagesIntro}</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.packages.map((pkg) => (
              <div
                key={pkg.title}
                className={`card-honeycomb p-8 ${pkg.popular ? "border-2 border-brand-orange/60 shadow-lg" : ""}`}
              >
                <p className="text-xs uppercase tracking-wider font-semibold text-brand-orange mb-2">
                  {pkg.label}
                </p>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {pkg.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  {pkg.price}
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-6 text-sm leading-relaxed">
                  {pkg.description}
                </p>
                <Link href="/#contact" className="btn-primary w-full text-center">
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services - Pattern A */}
      <section className="relative section-padding bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 opacity-50 dark:opacity-30" style={{ backgroundImage: "url('/assets/beeInspiration/5303586.jpg')", backgroundSize: "cover", backgroundPosition: "center" }} />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 via-white/40 to-gray-100/50 dark:from-gray-950/70 dark:via-gray-900/60 dark:to-gray-950/70" />
        </div>

        <div className="container-width relative z-10">
          <h2 className="heading-lg mb-2">
            <span className="text-gradient">Related services</span>
          </h2>
          <div className="hex-accent-line mb-4" />
          <p className="text-body-lg mb-10 max-w-3xl">
            Explore our other services that complement this solution.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.relatedServices.map((service) => {
              const IconComponent = service.icon;
              return (
                <Link
                  key={service.title}
                  href={service.href}
                  className="group relative card-honeycomb p-6 hover:scale-105 overflow-hidden flex flex-col"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-brand-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="icon-hex w-14 h-14 mb-4 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <IconComponent size={24} className="text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-brand-orange transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-base text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-2 mb-6 flex-grow">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <div className="w-3 h-3 bg-brand-orange clip-hex mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto pt-4">
                    <span className="btn-primary relative z-10 pointer-events-auto">
                      <span>Learn More</span>
                      <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA - Pattern B */}
      <section className="relative py-20 overflow-hidden bg-paper dark:bg-gray-950">
        <div className="absolute top-0 left-0 right-0 divider-honeycomb" />
        <div className="absolute bottom-0 left-0 right-0 divider-honeycomb" />

        <div className="container-width text-center relative">
          <h2 className="heading-lg mb-4">
            <span className="text-gradient">{data.ctaTitle}</span>
          </h2>
          <p className="text-body-lg mb-8 max-w-2xl mx-auto">{data.ctaDescription}</p>
          <div className="flex items-center justify-center gap-3">
            <Link href="/#contact" className="btn-primary">
              Book Free Call
            </Link>
            <Link href="/services" className="btn-secondary">
              All Services
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
