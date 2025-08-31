import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ClientMarquee from "@/components/ClientMarquee";
import Services from "@/components/Services";
import GetStarted from "@/components/GetStarted";
import WhyAutomate from "@/components/WhyAutomate";
import Projects from "@/components/Projects";

import MissionVision from "@/components/MissionVision";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header />
      <Hero />
      <ClientMarquee />
      <Testimonials />
      <MissionVision />
      <WhyChooseUs />
      <Services />
      <GetStarted />
      <WhyAutomate />
      <Projects />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
