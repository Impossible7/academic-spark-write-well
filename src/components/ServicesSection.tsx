
import { Link } from 'react-router-dom';
import { FileText, Book, Award, FileSearch, GraduationCap } from 'lucide-react';

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

const ServicesSection = () => {
  return (
    <div className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Services</h2>
          <p className="text-text-dark/80 text-lg">
            We offer a comprehensive range of academic writing services tailored to meet the specific needs of law students, scholars, and professionals.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link to={service.path} key={service.id} className="service-card group">
              <div className="flex items-start">
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{service.title}</h3>
                  <p className="text-text-dark/70">{service.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/services" className="btn-outline inline-block">View All Services</Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
