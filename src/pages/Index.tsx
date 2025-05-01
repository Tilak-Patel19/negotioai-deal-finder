
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DealFinderForm from "@/components/DealFinderForm";
import HowItWorks from "@/components/HowItWorks";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <DealFinderForm />
        <HowItWorks />
        <Benefits />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
