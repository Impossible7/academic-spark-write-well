
import Header from '../components/Header';
import Footer from '../components/Footer';
import ServicesSection from '../components/ServicesSection';
import CtaSection from '../components/CtaSection';
import WhatsAppButton from '../components/WhatsAppButton';

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <div className="bg-primary text-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Legal Writing Services</h1>
              <p className="text-xl opacity-90 mb-8">
                Comprehensive academic writing solutions tailored specifically for law students, scholars, and professionals
              </p>
            </div>
          </div>
        </div>
        
        {/* All Services Section */}
        <div className="py-16">
          <div className="container mx-auto px-4">
            <ServicesSection showAll={true} />
          </div>
        </div>
        
        <CtaSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Services;
