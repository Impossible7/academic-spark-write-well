
import { Link } from 'react-router-dom';
import { FileText, Book, Award, FileSearch, GraduationCap, PenTool, Palette, Sparkles } from 'lucide-react';

const services = [
  {
    id: 'research-paper',
    title: 'Research Papers',
    description: 'Meticulously researched and professionally written papers that meet the highest academic standards.',
    icon: FileText,
    path: '/services/research-paper',
    gradient: 'from-blue-600 to-blue-700'
  },
  {
    id: 'dissertation',
    title: 'Dissertations',
    description: 'Comprehensive dissertation support with expert guidance through every phase of your research.',
    icon: Book,
    path: '/services/dissertation',
    gradient: 'from-slate-600 to-slate-700'
  },
  {
    id: 'moot-memorial',
    title: 'Moot Memorials',
    description: 'Expertly crafted legal memorials with thorough research and compelling legal arguments.',
    icon: Award,
    path: '/services/moot-memorial',
    gradient: 'from-blue-700 to-slate-700'
  },
  {
    id: 'internship-report',
    title: 'Internship Reports',
    description: 'Professional reports that effectively showcase your internship experience and learning outcomes.',
    icon: FileSearch,
    path: '/services/internship-report',
    gradient: 'from-amber-600 to-amber-700'
  },
  {
    id: 'phd-thesis',
    title: 'PhD Thesis',
    description: 'Advanced thesis support for doctoral candidates with comprehensive research methodology.',
    icon: GraduationCap,
    path: '/services/phd-thesis',
    gradient: 'from-slate-500 to-slate-600'
  }
];

interface ServicesProps {
  showAll?: boolean;
}

const ServicesSection = ({ showAll = false }: { showAll?: boolean }) => {
  const displayedServices = showAll ? services : services;
  
  return (
    <div className="py-16 md:py-24 professional-gradient relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 rotate-12">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-full p-8">
            <PenTool className="h-32 w-32 text-white" />
          </div>
        </div>
        <div className="absolute bottom-10 right-10 -rotate-12">
          <div className="bg-gradient-to-r from-slate-600 to-slate-700 rounded-full p-10">
            <Book className="h-40 w-40 text-white" />
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="bg-gradient-to-r from-amber-600 to-amber-700 rounded-full p-6">
            <Palette className="h-24 w-24 text-white opacity-30" />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {!showAll && (
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-6 shadow-xl animate-gentle-bounce">
                <Sparkles className="h-12 w-12 text-white" />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif mb-6 handwriting-effect text-slate-800">
              <span className="professional-text">
                Our Professional Writing Services
              </span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-600 via-slate-600 to-amber-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-slate-700 text-lg font-sans leading-relaxed max-w-3xl mx-auto">
              We offer comprehensive academic writing services with a focus on quality, precision, and timely delivery. 
              Every project is handled with the utmost professionalism and attention to detail.
            </p>
          </div>
        )}
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedServices.map((service, index) => (
            <Link 
              to={`/services/${service.id}`} 
              key={service.id} 
              className="service-card group block transform hover:rotate-0 transition-all duration-500"
              style={{animationDelay: `${index * 0.15}s`}}
            >
              <div className="relative overflow-hidden h-full">
                {/* Professional border accent */}
                <div className={`absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b ${service.gradient} rounded-l-xl`}></div>
                
                <div className="flex flex-col items-center p-8 pl-10 h-full text-center">
                  <div className={`h-16 w-16 bg-gradient-to-br ${service.gradient} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                    <service.icon className="h-8 w-8 text-white" strokeWidth={2} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-serif-bold mb-4 text-slate-800 group-hover:text-blue-700 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 font-sans leading-relaxed text-sm mb-6">
                      {service.description}
                    </p>
                    
                    {/* Professional call-to-action */}
                    <div className="flex items-center justify-center mt-auto text-blue-700 group-hover:text-blue-800 transition-colors">
                      <PenTool className="h-4 w-4 mr-2" />
                      <span className="text-sm font-semibold font-sans">Learn More</span>
                    </div>
                  </div>
                </div>

                {/* Subtle hover effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-3 transition-opacity duration-300 rounded-xl`}></div>
              </div>
            </Link>
          ))}
        </div>
        
        {!showAll && (
          <div className="text-center mt-16">
            <Link 
              to="/services" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 rounded-lg transition-all duration-300 font-semibold font-sans shadow-md hover:shadow-lg transform hover:scale-105"
            >
              <Book className="h-5 w-5 mr-3" />
              View All Services
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServicesSection;
