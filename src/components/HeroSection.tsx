
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-r from-primary to-primary/90 pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=2070')] bg-cover bg-center opacity-10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            One Destination for All Your Academic Writing Needs
          </h1>
          <p className="text-white/90 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Professional academic writing services tailored for law students, research scholars, and academicians. Excellence delivered on time, every time.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="btn-accent text-lg px-8 py-3">Get a Quote</Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/20 text-lg px-8 py-3">
              View Samples
            </Button>
          </div>
        </div>
      </div>
      
      {/* Background wave SVG */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden transform translate-y-1">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
          <path
            fill="#F8F9FA"
            fillOpacity="1"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,138.7C960,139,1056,117,1152,112C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;
