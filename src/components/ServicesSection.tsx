
import { Link } from 'react-router-dom';
import { FileText, Book, Award, FileSearch, GraduationCap, PenTool, Palette, Sparkles, Database, Laptop, TrendingUp, Beaker, Calculator, Globe, BookOpen, Users } from 'lucide-react';

const services = [
  {
    id: 'research-paper',
    title: 'Research Papers',
    description: 'Meticulously researched academic papers across all disciplines with rigorous methodology and analysis.',
    icon: FileText,
    path: '/services/research-paper',
    gradient: 'from-blue-600 to-blue-700',
    category: 'Academic Writing'
  },
  {
    id: 'dissertation',
    title: 'Dissertations & Thesis',
    description: 'Comprehensive dissertation support for Master\'s and PhD candidates across all academic fields.',
    icon: Book,
    path: '/services/dissertation',
    gradient: 'from-slate-600 to-slate-700',
    category: 'Advanced Research'
  },
  {
    id: 'scopus-publication',
    title: 'Scopus Journal Publication',
    description: 'Expert assistance for publishing in Scopus-indexed journals with the highest success rate at competitive prices.',
    icon: Globe,
    path: '/services/scopus-publication',
    gradient: 'from-emerald-600 to-emerald-700',
    category: 'Journal Publication'
  },
  {
    id: 'computer-science',
    title: 'Computer Science Projects',
    description: 'Technical documentation, software development reports, and algorithm analysis for CS students.',
    icon: Laptop,
    path: '/services/computer-science',
    gradient: 'from-purple-600 to-purple-700',
    category: 'Technology'
  },
  {
    id: 'management-studies',
    title: 'Management Studies',
    description: 'Business reports, case studies, strategic analysis, and MBA dissertation support.',
    icon: TrendingUp,
    path: '/services/management-studies',
    gradient: 'from-orange-600 to-orange-700',
    category: 'Business'
  },
  {
    id: 'science-research',
    title: 'Science Research',
    description: 'Laboratory reports, scientific papers, and research documentation for all science disciplines.',
    icon: Beaker,
    path: '/services/science-research',
    gradient: 'from-cyan-600 to-cyan-700',
    category: 'Sciences'
  },
  {
    id: 'law-writing',
    title: 'Legal Writing',
    description: 'Moot memorials, legal research papers, and jurisprudence analysis with expert legal guidance.',
    icon: Award,
    path: '/services/law-writing',
    gradient: 'from-indigo-600 to-indigo-700',
    category: 'Law'
  },
  {
    id: 'internship-report',
    title: 'Internship Reports',
    description: 'Professional internship documentation across all fields with detailed analysis and reflection.',
    icon: FileSearch,
    path: '/services/internship-report',
    gradient: 'from-amber-600 to-amber-700',
    category: 'Professional'
  },
  {
    id: 'mathematics',
    title: 'Mathematics & Statistics',
    description: 'Mathematical proofs, statistical analysis, and quantitative research across all levels.',
    icon: Calculator,
    path: '/services/mathematics',
    gradient: 'from-red-600 to-red-700',
    category: 'Mathematics'
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
              <span className="text-slate-800 font-bold">
                Comprehensive Academic Writing Services
              </span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-600 via-slate-600 to-emerald-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-slate-700 text-lg font-sans leading-relaxed max-w-3xl mx-auto">
              From research papers to Scopus publications, we provide expert writing services across all academic disciplines. 
              Our experienced team ensures quality, originality, and timely delivery for your academic success.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">Law</div>
                <div className="text-sm text-slate-600">Legal Research</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">Tech</div>
                <div className="text-sm text-slate-600">Computer Science</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">Business</div>
                <div className="text-sm text-slate-600">Management</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-600">Sciences</div>
                <div className="text-sm text-slate-600">Research</div>
              </div>
            </div>
          </div>
        )}
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedServices.map((service, index) => (
            <Link 
              to={`/services/${service.id}`} 
              key={service.id} 
              className="service-card group block transform hover:rotate-0 transition-all duration-500"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="relative overflow-hidden h-full bg-white rounded-xl border border-slate-200/60 shadow-sm hover:shadow-lg transition-all duration-300">
                {/* Category badge */}
                <div className="absolute top-4 right-4 z-10">
                  <span className="text-xs font-medium px-2 py-1 bg-slate-100 text-slate-600 rounded-full">
                    {service.category}
                  </span>
                </div>
                
                {/* Professional border accent */}
                <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${service.gradient} rounded-l-xl`}></div>
                
                <div className="flex flex-col items-start p-6 h-full">
                  <div className={`h-14 w-14 bg-gradient-to-br ${service.gradient} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                    <service.icon className="h-7 w-7 text-white" strokeWidth={2} />
                  </div>
                  <div className="flex-1 text-left">
                    <h3 className="text-xl font-semibold mb-3 text-slate-800 group-hover:text-blue-700 transition-colors leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 font-sans leading-relaxed text-sm mb-6">
                      {service.description}
                    </p>
                    
                    {/* Professional call-to-action */}
                    <div className="flex items-center mt-auto text-blue-600 group-hover:text-blue-700 transition-colors">
                      <span className="text-sm font-medium font-sans">Learn More</span>
                      <PenTool className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>

                {/* Subtle hover effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-[0.02] transition-opacity duration-300 rounded-xl`}></div>
              </div>
            </Link>
          ))}
        </div>
        
        {!showAll && (
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-2xl p-8 mb-8 border border-blue-100">
              <h3 className="text-2xl font-semibold text-slate-800 mb-4">Need Scopus Publication Support?</h3>
              <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
                Get expert assistance for publishing in Scopus-indexed journals with our specialized team. 
                We offer the best rates in the market with guaranteed quality and timely delivery.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/services/scopus-publication" 
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white hover:from-emerald-700 hover:to-emerald-800 rounded-lg transition-all duration-300 font-semibold font-sans shadow-md hover:shadow-lg transform hover:scale-105"
                >
                  <Globe className="h-5 w-5 mr-2" />
                  Scopus Publication
                </Link>
                <Link 
                  to="/services" 
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 rounded-lg transition-all duration-300 font-semibold font-sans shadow-md hover:shadow-lg transform hover:scale-105"
                >
                  <Book className="h-5 w-5 mr-2" />
                  View All Services
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServicesSection;
