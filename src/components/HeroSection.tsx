
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { FileText, Feather, BookOpen, PenTool } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative gradient-bg pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="floating-paper absolute top-20 left-10 opacity-20">
          <FileText className="h-12 w-12 text-amber-200" />
        </div>
        <div className="floating-paper absolute top-40 right-20 opacity-20" style={{animationDelay: '2s'}}>
          <BookOpen className="h-16 w-16 text-amber-200" />
        </div>
        <div className="floating-paper absolute bottom-32 left-1/4 opacity-20" style={{animationDelay: '4s'}}>
          <PenTool className="h-10 w-10 text-amber-200" />
        </div>
        <div className="quill-animation absolute top-1/2 right-10 opacity-10">
          <Feather className="h-20 w-20 text-amber-200" />
        </div>
      </div>

      {/* Paper texture overlay */}
      <div className="absolute inset-0 paper-texture opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-amber-50 mb-6 writing-animation">
              <span className="bg-gradient-to-r from-amber-200 via-yellow-200 to-amber-100 bg-clip-text text-transparent">
                Crafting Excellence
              </span>
              <br />
              <span className="text-amber-100">
                One Word at a Time
              </span>
            </h1>
          </div>
          
          <p className="text-amber-100/90 text-lg md:text-xl mb-8 max-w-3xl mx-auto font-crimson leading-relaxed">
            Where academic excellence meets literary artistry. Professional writing services tailored for law students, 
            research scholars, and academicians who demand nothing less than perfection.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
            <Button className="btn-accent text-lg px-8 py-4 relative group">
              <Feather className="h-5 w-5 mr-2 group-hover:animate-pulse" />
              Begin Your Journey
            </Button>
            <Button variant="outline" className="border-2 border-amber-200 text-amber-100 hover:bg-amber-200/10 text-lg px-8 py-4">
              <BookOpen className="h-5 w-5 mr-2" />
              Explore Our Craft
            </Button>
          </div>

          {/* Writing stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="bg-amber-200/10 rounded-full p-4 w-20 h-20 mx-auto mb-3 flex items-center justify-center">
                <FileText className="h-8 w-8 text-amber-200" />
              </div>
              <div className="text-3xl font-bold text-amber-100 mb-1">5000+</div>
              <div className="text-amber-200/80 text-sm">Papers Crafted</div>
            </div>
            <div className="text-center">
              <div className="bg-amber-200/10 rounded-full p-4 w-20 h-20 mx-auto mb-3 flex items-center justify-center">
                <PenTool className="h-8 w-8 text-amber-200" />
              </div>
              <div className="text-3xl font-bold text-amber-100 mb-1">250+</div>
              <div className="text-amber-200/80 text-sm">Expert Writers</div>
            </div>
            <div className="text-center">
              <div className="bg-amber-200/10 rounded-full p-4 w-20 h-20 mx-auto mb-3 flex items-center justify-center">
                <BookOpen className="h-8 w-8 text-amber-200" />
              </div>
              <div className="text-3xl font-bold text-amber-100 mb-1">10+</div>
              <div className="text-amber-200/80 text-sm">Years of Excellence</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Improved wave SVG */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden transform translate-y-1">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
          <path
            fill="#fef7ed"
            fillOpacity="1"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,138.7C960,139,1056,117,1152,112C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;
