
import Header from '../components/Header';
import AboutHero from '../components/AboutHero';
import AboutSection from '../components/AboutSection';
import TeamSection from '../components/TeamSection';
import ProcessSection from '../components/ProcessSection';
import TestimonialsSection from '../components/TestimonialsSection';
import CtaSection from '../components/CtaSection';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20">
        <AboutHero />
        <AboutSection />
        
        <ProcessSection />
        <TestimonialsSection />
        <CtaSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default About;
