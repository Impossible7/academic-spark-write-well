
import { Link } from 'react-router-dom';
import { FileText, Book, Award, FileSearch, GraduationCap, PenTool, Palette, Sparkles } from 'lucide-react';

const services = [
  {
    id: 'research-paper',
    title: '📄 Research Papers',
    description: 'Beautifully crafted research papers that sparkle with originality and academic excellence! ✨',
    icon: FileText,
    path: '/services/research-paper',
    gradient: 'from-blue-400 to-purple-600'
  },
  {
    id: 'dissertation',
    title: '📚 Dissertations',
    description: 'Comprehensive dissertation support that turns your ideas into academic masterpieces! 🎨',
    icon: Book,
    path: '/services/dissertation',
    gradient: 'from-purple-400 to-pink-600'
  },
  {
    id: 'moot-memorial',
    title: '🏆 Moot Memorials',
    description: 'Winning moot court memorials crafted with legal precision and creative flair! ⚖️',
    icon: Award,
    path: '/services/moot-memorial',
    gradient: 'from-pink-400 to-red-600'
  },
  {
    id: 'internship-report',
    title: '📋 Internship Reports',
    description: 'Professional reports that showcase your journey and achievements in vibrant detail! 🌟',
    icon: FileSearch,
    path: '/services/internship-report',
    gradient: 'from-green-400 to-blue-600'
  },
  {
    id: 'phd-thesis',
    title: '🎓 PhD Thesis',
    description: 'Doctoral thesis support that transforms complex research into compelling narratives! 🔬',
    icon: GraduationCap,
    path: '/services/phd-thesis',
    gradient: 'from-orange-400 to-yellow-600'
  }
];

interface ServicesProps {
  showAll?: boolean;
}

const ServicesSection = ({ showAll = false }: { showAll?: boolean }) => {
  const displayedServices = showAll ? services : services;
  
  return (
    <div className="py-16 md:py-24 bg-gradient-to-br from-yellow-50 via-pink-50 to-blue-50 relative overflow-hidden">
      {/* Background colorful elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 rotate-12">
          <div className="bg-gradient-to-r from-blue-400 to-purple-500 rounded-full p-8">
            <PenTool className="h-32 w-32 text-white" />
          </div>
        </div>
        <div className="absolute bottom-10 right-10 -rotate-12">
          <div className="bg-gradient-to-r from-pink-400 to-red-500 rounded-full p-10">
            <Book className="h-40 w-40 text-white" />
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="bg-gradient-to-r from-green-400 to-blue-500 rounded-full p-6">
            <Palette className="h-24 w-24 text-white opacity-50" />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {!showAll && (
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-full p-6 shadow-xl animate-colorful-bounce">
                <Sparkles className="h-12 w-12 text-white" />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-handwriting-bold mb-6 handwriting-effect">
              <span className="colorful-text">
                ✨ Our Magical Writing Services 🎨
              </span>
            </h2>
            <div className="w-32 h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-700 text-lg font-notebook leading-relaxed">
              🌈 We offer a rainbow of creative writing services designed to bring your academic dreams to life! 
              Every project is a canvas waiting for our colorful touch! 🎭
            </p>
          </div>
        )}
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedServices.map((service, index) => (
            <Link 
              to={`/services/${service.id}`} 
              key={service.id} 
              className="service-card group block transform hover:rotate-1 transition-all duration-500"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className="relative overflow-hidden h-full">
                {/* Colorful border effect */}
                <div className={`absolute left-0 top-0 bottom-0 w-3 bg-gradient-to-b ${service.gradient} rounded-l-3xl`}></div>
                
                <div className="flex flex-col items-center p-8 pl-12 h-full text-center">
                  <div className={`h-20 w-20 bg-gradient-to-br ${service.gradient} rounded-full flex items-center justify-center mb-6 group-hover:scale-125 transition-transform duration-500 shadow-xl animate-colorful-bounce`}>
                    <service.icon className="h-10 w-10 text-white" strokeWidth={2} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-handwriting-bold mb-4 text-gray-800 group-hover:text-purple-600 transition-colors handwriting-effect">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 font-notebook leading-relaxed text-sm mb-6">
                      {service.description}
                    </p>
                    
                    {/* Decorative pen with colorful trail */}
                    <div className="flex items-center justify-center mt-auto text-purple-600 group-hover:text-pink-500 transition-colors">
                      <PenTool className="h-4 w-4 mr-2 animate-pulse" />
                      <span className="text-sm font-handwriting-bold">✨ Create Magic</span>
                    </div>
                  </div>
                </div>

                {/* Colorful hover effect overlay */}
                <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-3xl`}></div>
              </div>
            </Link>
          ))}
        </div>
        
        {!showAll && (
          <div className="text-center mt-16">
            <Link 
              to="/services" 
              className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-pink-500 hover:to-red-500 rounded-full transition-all duration-300 font-handwriting-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-110"
            >
              <Book className="h-6 w-6 mr-3" />
              🎨 Explore All Our Magic
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServicesSection;
