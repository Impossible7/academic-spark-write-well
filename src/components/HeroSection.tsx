
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { FileText, PenTool, BookOpen, Feather, Palette, Edit3 } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative gradient-bg pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Floating professional elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="floating-element absolute top-20 left-10 opacity-20">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-full p-4 shadow-lg">
            <PenTool className="h-12 w-12 text-white" />
          </div>
        </div>
        <div className="floating-element absolute top-40 right-20 opacity-15">
          <div className="bg-gradient-to-r from-slate-600 to-slate-700 rounded-full p-4 shadow-lg">
            <BookOpen className="h-16 w-16 text-white" />
          </div>
        </div>
        <div className="floating-element absolute bottom-32 left-1/4 opacity-20">
          <div className="bg-gradient-to-r from-blue-700 to-slate-700 rounded-full p-4 shadow-lg">
            <Edit3 className="h-10 w-10 text-white" />
          </div>
        </div>
        <div className="floating-element absolute top-1/2 right-10 opacity-10">
          <div className="bg-gradient-to-r from-amber-600 to-amber-700 rounded-full p-6 shadow-lg">
            <Feather className="h-20 w-20 text-white" />
          </div>
        </div>
        <div className="floating-element absolute bottom-40 right-1/3 opacity-15">
          <div className="bg-gradient-to-r from-slate-500 to-slate-600 rounded-full p-3 shadow-lg">
            <Palette className="h-8 w-8 text-white" />
          </div>
        </div>
      </div>

      {/* Subtle paper texture overlay */}
      <div className="absolute inset-0 paper-texture opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6 handwriting-animation">
              <span className="professional-text handwriting-effect text-white">
                Professional Academic Writing Services
              </span>
              <br />
              <span className="text-slate-100 font-academic text-2xl md:text-3xl">
                Excellence in Research & Scholarly Communication
              </span>
            </h1>
          </div>
          
          <p className="text-white/90 text-lg md:text-xl mb-8 max-w-3xl mx-auto font-sans leading-relaxed">
            Where academic excellence meets professional standards. We deliver high-quality writing services 
            with meticulous attention to detail and scholarly precision for your success.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
            <Button className="btn-accent text-lg px-8 py-4 relative group font-sans font-semibold">
              <PenTool className="h-5 w-5 mr-2 group-hover:animate-pulse" />
              Start Your Project
            </Button>
            <Button variant="outline" className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-4 font-sans font-semibold rounded-lg">
              <BookOpen className="h-5 w-5 mr-2" />
              Explore Our Services
            </Button>
          </div>

          {/* Professional stats with refined styling */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center transform hover:scale-105 transition-all duration-300">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-4 w-20 h-20 mx-auto mb-3 flex items-center justify-center shadow-lg animate-gentle-bounce">
                <FileText className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-serif-bold text-white mb-1">5,000+</div>
              <div className="text-white/80 text-sm font-sans">Papers Delivered</div>
            </div>
            <div className="text-center transform hover:scale-105 transition-all duration-300">
              <div className="bg-gradient-to-r from-slate-600 to-slate-700 rounded-xl p-4 w-20 h-20 mx-auto mb-3 flex items-center justify-center shadow-lg animate-gentle-bounce" style={{animationDelay: '1s'}}>
                <PenTool className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-serif-bold text-white mb-1">250+</div>
              <div className="text-white/80 text-sm font-sans">Expert Writers</div>
            </div>
            <div className="text-center transform hover:scale-105 transition-all duration-300">
              <div className="bg-gradient-to-r from-amber-600 to-amber-700 rounded-xl p-4 w-20 h-20 mx-auto mb-3 flex items-center justify-center shadow-lg animate-gentle-bounce" style={{animationDelay: '2s'}}>
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-serif-bold text-white mb-1">10+</div>
              <div className="text-white/80 text-sm font-sans">Years Excellence</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Professional wave SVG */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden transform translate-y-1">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f8fafc" />
              <stop offset="25%" stopColor="#f1f5f9" />
              <stop offset="50%" stopColor="#e2e8f0" />
              <stop offset="75%" stopColor="#cbd5e1" />
              <stop offset="100%" stopColor="#94a3b8" />
            </linearGradient>
          </defs>
          <path
            fill="url(#waveGradient)"
            fillOpacity="1"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,138.7C960,139,1056,117,1152,112C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;
