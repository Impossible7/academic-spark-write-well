
import { Link } from 'react-router-dom';
import { FileText, Book, Award, FileSearch, GraduationCap, Feather } from 'lucide-react';

const services = [
  {
    id: 'research-paper',
    title: 'Research Paper Writing',
    description: 'Professionally crafted research papers tailored to your requirements with thorough research and citations.',
    icon: FileText,
    path: '/services/research-paper'
  },
  {
    id: 'dissertation',
    title: 'Dissertation Writing',
    description: 'Comprehensive support for dissertation projects at all academic levels, from proposal to final submission.',
    icon: Book,
    path: '/services/dissertation'
  },
  {
    id: 'moot-memorial',
    title: 'Moot Memorial Preparation',
    description: 'Expert assistance in crafting compelling moot court memorials with comprehensive legal research.',
    icon: Award,
    path: '/services/moot-memorial'
  },
  {
    id: 'internship-report',
    title: 'Internship Report Writing',
    description: 'Professional guidance for structuring and writing impressive internship reports that stand out.',
    icon: FileSearch,
    path: '/services/internship-report'
  },
  {
    id: 'phd-thesis',
    title: 'PhD Thesis Support',
    description: 'Comprehensive assistance for PhD candidates at every stage of the thesis writing process.',
    icon: GraduationCap,
    path: '/services/phd-thesis'
  }
];

interface ServicesProps {
  showAll?: boolean;
}

const ServicesSection = ({ showAll = false }: { showAll?: boolean }) => {
  const displayedServices = showAll ? services : services;
  
  return (
    <div className="py-16 md:py-24 bg-amber-50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 rotate-12">
          <Feather className="h-32 w-32 text-amber-600" />
        </div>
        <div className="absolute bottom-10 right-10 -rotate-12">
          <Book className="h-40 w-40 text-amber-600" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {!showAll && (
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="flex justify-center mb-6">
              <div className="bg-amber-600/10 rounded-full p-4">
                <Feather className="h-12 w-12 text-amber-800" />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-amber-900 mb-6">
              Our Literary Services
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-orange-500 mx-auto mb-6"></div>
            <p className="text-amber-800/80 text-lg font-crimson leading-relaxed">
              We offer a comprehensive range of academic writing services tailored to meet the specific needs 
              of law students, scholars, and professionals who seek excellence in every word.
            </p>
          </div>
        )}
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedServices.map((service, index) => (
            <Link 
              to={`/services/${service.id}`} 
              key={service.id} 
              className="service-card group block"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="relative overflow-hidden">
                {/* Book spine effect */}
                <div className="absolute left-0 top-0 bottom-0 w-2 book-spine"></div>
                
                <div className="flex items-start p-8 pl-10">
                  <div className="h-16 w-16 bg-gradient-to-br from-amber-600 to-orange-500 rounded-lg flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <service.icon className="h-8 w-8 text-white" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-playfair font-semibold mb-3 text-amber-900 group-hover:text-amber-700 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-amber-800/70 font-crimson leading-relaxed text-sm">
                      {service.description}
                    </p>
                    
                    {/* Decorative quill */}
                    <div className="flex items-center mt-4 text-amber-600 group-hover:text-amber-500 transition-colors">
                      <Feather className="h-4 w-4 mr-2" />
                      <span className="text-sm font-medium">Learn More</span>
                    </div>
                  </div>
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-amber-100/0 via-amber-100/20 to-amber-100/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </Link>
          ))}
        </div>
        
        {!showAll && (
          <div className="text-center mt-16">
            <Link 
              to="/services" 
              className="inline-flex items-center px-8 py-4 border-2 border-amber-800 text-amber-800 hover:bg-amber-800 hover:text-white rounded-lg transition-all duration-300 font-medium shadow-lg hover:shadow-xl"
            >
              <Book className="h-5 w-5 mr-2" />
              Explore All Services
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServicesSection;
