import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CtaSection from '../components/CtaSection';
import WhatsAppButton from '../components/WhatsAppButton';
import { FileText, Book, Award, FileSearch, GraduationCap } from 'lucide-react';

// Service data with detailed information
const servicesData = {
  'research-paper': {
    title: 'Research Paper Writing',
    description: 'Professional research paper writing tailored for law students and scholars.',
    icon: FileText,
    longDescription: 'Our research paper writing service provides meticulously crafted papers that adhere to the highest academic standards. Our team of experienced legal writers conducts thorough research, creates original content, and ensures proper citation in the required format (APA, MLA, Chicago, or Harvard).',
    features: [
      'Comprehensive literature review',
      'Original analysis and insights',
      'Professional formatting and citation',
      'Plagiarism-free content',
      'Multiple revisions included'
    ],
    sampleTopics: [
      'Constitutional Law Analysis',
      'Criminal Justice Reform',
      'International Human Rights Legislation',
      'Corporate Law Developments',
      'Environmental Law Compliance'
    ]
  },
  'dissertation': {
    title: 'Dissertation Writing',
    description: 'Comprehensive dissertation support for law students at all academic levels.',
    icon: Book,
    longDescription: 'Our dissertation writing service offers end-to-end support for law students working on this critical academic project. From proposal development to final submission, our specialized writers provide guidance, research assistance, and polished writing to help you achieve excellence.',
    features: [
      'Custom research methodology',
      'Chapter-by-chapter development',
      'Statistical analysis when required',
      'Professional editing and proofreading',
      'Comprehensive bibliography compilation'
    ],
    sampleTopics: [
      'Comparative Legal Systems',
      'Jurisprudential Analysis of Modern Legal Frameworks',
      'Legal Implications of Technology Adoption',
      'Reform in Criminal Sentencing',
      'International Trade Law Developments'
    ]
  },
  'moot-memorial': {
    title: 'Moot Memorial Preparation',
    description: 'Expert assistance for moot court memorials with comprehensive legal research.',
    icon: Award,
    longDescription: 'Our moot memorial preparation service helps law students create compelling arguments for moot court competitions. Our team of experienced legal professionals provides comprehensive research, structured argumentation, and polished writing to help you stand out in competitions.',
    features: [
      'Thorough case law research',
      'Structured legal argumentation',
      'Counter-argument preparation',
      'Professional formatting',
      'Practice question preparation'
    ],
    sampleTopics: [
      'International Humanitarian Law',
      'Intellectual Property Disputes',
      'Commercial Arbitration Cases',
      'Constitutional Interpretation',
      'Environmental Law Challenges'
    ]
  },
  'internship-report': {
    title: 'Internship Report Writing',
    description: 'Professional guidance for crafting impressive internship reports.',
    icon: FileSearch,
    longDescription: 'Our internship report writing service helps law students document their practical experiences professionally. We assist in structuring your report, highlighting relevant legal experiences, and connecting your internship with theoretical knowledge in a way that impresses academic evaluators.',
    features: [
      'Professional report structure',
      'Experience analysis and reflection',
      'Legal theory integration',
      'Skills development documentation',
      'Professional presentation'
    ],
    sampleAreas: [
      'Corporate Law Firm Experience',
      'Judicial Clerkship Documentation',
      'Legal Aid Clinic Work',
      'Government Legal Department Internship',
      'NGO Legal Advocacy Experience'
    ]
  },
  'phd-thesis': {
    title: 'PhD Thesis Support',
    description: 'Comprehensive assistance for PhD candidates during thesis writing.',
    icon: GraduationCap,
    longDescription: 'Our PhD thesis support service provides specialized assistance for doctoral candidates in law. We offer research guidance, writing support, methodological expertise, and editing services to help you produce a thesis that makes a significant contribution to legal scholarship.',
    features: [
      'Advanced research methodology',
      'Literature review development',
      'Theoretical framework articulation',
      'Data analysis and interpretation',
      'Comprehensive editing and formatting'
    ],
    sampleTopics: [
      'Legal Philosophy and Jurisprudence',
      'Transnational Legal Processes',
      'Legal Implications of Emerging Technologies',
      'Reforming Constitutional Frameworks',
      'International Criminal Justice Systems'
    ]
  }
};

const ServiceDetail = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const [service, setService] = useState<any>(null);
  
  useEffect(() => {
    // Check if serviceId exists in servicesData
    if (serviceId && serviceId in servicesData) {
      setService(servicesData[serviceId as keyof typeof servicesData]);
    }
  }, [serviceId]);

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow pt-20 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Service Not Found</h2>
            <p>We couldn't find the service you're looking for.</p>
            <Link to="/services" className="text-primary hover:text-primary/80 mt-4 inline-block">
              View All Services
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const IconComponent = service.icon;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <div className="bg-primary text-white py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-2/3">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{service.title}</h1>
                <p className="text-xl opacity-90 mb-6">{service.description}</p>
                <div className="flex space-x-4">
                  <a href="#contact" className="bg-secondary hover:bg-secondary/90 text-white px-6 py-3 rounded-md transition-colors">
                    Get a Quote
                  </a>
                  <a href="#samples" className="bg-transparent border border-white hover:bg-white/10 text-white px-6 py-3 rounded-md transition-colors">
                    View Samples
                  </a>
                </div>
              </div>
              <div className="md:w-1/3 flex justify-center mt-8 md:mt-0">
                <div className="bg-white/10 rounded-full p-8">
                  <IconComponent className="h-24 w-24" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Description */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-primary">Service Overview</h2>
              <p className="text-lg mb-8 text-text-dark/80">{service.longDescription}</p>
              
              <h3 className="text-2xl font-semibold mb-4 text-primary">Key Features</h3>
              <ul className="list-disc pl-6 mb-12 space-y-2">
                {service.features.map((feature: string, index: number) => (
                  <li key={index} className="text-text-dark/80">{feature}</li>
                ))}
              </ul>
              
              <h3 className="text-2xl font-semibold mb-4 text-primary">
                {service.sampleTopics ? 'Sample Topics' : 'Sample Areas'}
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                {(service.sampleTopics || service.sampleAreas).map((topic: string, index: number) => (
                  <li key={index} className="text-text-dark/80">{topic}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div id="contact" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">Request a Quote</h2>
              <p className="text-text-dark/80">Fill out the form below to get a custom quote for your project</p>
            </div>
            
            <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-sm p-8">
              <form>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input type="text" id="name" className="w-full px-4 py-2 border rounded-md focus:ring-primary focus:border-primary" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input type="email" id="email" className="w-full px-4 py-2 border rounded-md focus:ring-primary focus:border-primary" />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Service</label>
                  <select id="service" className="w-full px-4 py-2 border rounded-md focus:ring-primary focus:border-primary" defaultValue={service.title}>
                    <option>{service.title}</option>
                    {Object.values(servicesData).filter(s => s.title !== service.title).map((s: any, index: number) => (
                      <option key={index}>{s.title}</option>
                    ))}
                  </select>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="deadline" className="block text-sm font-medium text-gray-700 mb-1">Deadline</label>
                  <input type="date" id="deadline" className="w-full px-4 py-2 border rounded-md focus:ring-primary focus:border-primary" />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Project Details</label>
                  <textarea id="message" rows={4} className="w-full px-4 py-2 border rounded-md focus:ring-primary focus:border-primary"></textarea>
                </div>
                
                <button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white py-3 rounded-md transition-colors">
                  Submit Request
                </button>
              </form>
            </div>
          </div>
        </div>

        <CtaSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ServiceDetail;
