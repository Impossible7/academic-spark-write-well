
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { FileText, PenTool, BookOpen, Feather, Palette, Edit3 } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative gradient-bg pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Floating colorful elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="floating-element absolute top-20 left-10 opacity-30">
          <div className="bg-gradient-to-r from-blue-400 to-purple-500 rounded-full p-4 shadow-lg">
            <PenTool className="h-12 w-12 text-white" />
          </div>
        </div>
        <div className="floating-element absolute top-40 right-20 opacity-30">
          <div className="bg-gradient-to-r from-pink-400 to-red-500 rounded-full p-4 shadow-lg">
            <BookOpen className="h-16 w-16 text-white" />
          </div>
        </div>
        <div className="floating-element absolute bottom-32 left-1/4 opacity-30">
          <div className="bg-gradient-to-r from-green-400 to-blue-500 rounded-full p-4 shadow-lg">
            <Edit3 className="h-10 w-10 text-white" />
          </div>
        </div>
        <div className="floating-element absolute top-1/2 right-10 opacity-20">
          <div className="bg-gradient-to-r from-orange-400 to-yellow-500 rounded-full p-6 shadow-lg">
            <Feather className="h-20 w-20 text-white" />
          </div>
        </div>
        <div className="floating-element absolute bottom-40 right-1/3 opacity-25">
          <div className="bg-gradient-to-r from-purple-400 to-pink-500 rounded-full p-3 shadow-lg">
            <Palette className="h-8 w-8 text-white" />
          </div>
        </div>
      </div>

      {/* Notebook paper texture overlay */}
      <div className="absolute inset-0 notebook-paper opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-handwriting-bold text-white mb-6 handwriting-animation">
              <span className="colorful-text handwriting-effect">
                ✨ Crafting Stories
              </span>
              <br />
              <span className="text-yellow-100 font-creative">
                One Beautiful Word at a Time 📝
              </span>
            </h1>
          </div>
          
          <p className="text-white/90 text-lg md:text-xl mb-8 max-w-3xl mx-auto font-notebook leading-relaxed">
            🌈 Where creativity meets excellence! Professional writing services with a splash of color and personality. 
            We turn your ideas into vibrant, engaging content that captures hearts and minds! ✨
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
            <Button className="btn-accent text-lg px-8 py-4 relative group font-handwriting-bold">
              <PenTool className="h-5 w-5 mr-2 group-hover:animate-spin" />
              🎨 Start Creating Magic
            </Button>
            <Button variant="outline" className="border-3 border-white text-white hover:bg-white/10 text-lg px-8 py-4 font-handwriting-bold rounded-full">
              <BookOpen className="h-5 w-5 mr-2" />
              📚 Discover Our Craft
            </Button>
          </div>

          {/* Colorful stats with handwriting style */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center transform hover:scale-110 transition-all duration-300">
              <div className="bg-gradient-to-r from-blue-400 to-purple-500 rounded-full p-4 w-20 h-20 mx-auto mb-3 flex items-center justify-center shadow-lg animate-colorful-bounce">
                <FileText className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-handwriting-bold text-yellow-100 mb-1">5000+ 📄</div>
              <div className="text-white/80 text-sm font-notebook">Magical Papers</div>
            </div>
            <div className="text-center transform hover:scale-110 transition-all duration-300">
              <div className="bg-gradient-to-r from-pink-400 to-red-500 rounded-full p-4 w-20 h-20 mx-auto mb-3 flex items-center justify-center shadow-lg animate-colorful-bounce" style={{animationDelay: '0.5s'}}>
                <PenTool className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-handwriting-bold text-yellow-100 mb-1">250+ ✍️</div>
              <div className="text-white/80 text-sm font-notebook">Creative Writers</div>
            </div>
            <div className="text-center transform hover:scale-110 transition-all duration-300">
              <div className="bg-gradient-to-r from-green-400 to-blue-500 rounded-full p-4 w-20 h-20 mx-auto mb-3 flex items-center justify-center shadow-lg animate-colorful-bounce" style={{animationDelay: '1s'}}>
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-handwriting-bold text-yellow-100 mb-1">10+ 🎉</div>
              <div className="text-white/80 text-sm font-notebook">Years of Magic</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Colorful wave SVG */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden transform translate-y-1">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#fef3c7" />
              <stop offset="25%" stopColor="#fde68a" />
              <stop offset="50%" stopColor="#fcd34d" />
              <stop offset="75%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#d97706" />
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
