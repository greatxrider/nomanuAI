import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ClientMarquee from "@/components/ClientMarquee";
import Services from "@/components/Services";
import WhyAutomate from "@/components/WhyAutomate";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header />
      <Hero />
      <ClientMarquee />
      <Testimonials />
      <Services />
      <WhyAutomate />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
