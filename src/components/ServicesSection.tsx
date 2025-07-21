import { GraduationCap, FileText, BookOpen, Users, Award, CheckCircle, Search, Globe, Star, Edit3, Target, Zap, Shield } from "lucide-react";

interface ServicesProps {
  showAll?: boolean;
}

const ServicesSection = ({ showAll = false }: ServicesProps) => {
  const benefits = [
    {
      icon: Edit3,
      title: "Structure & Flow",
      description: "Editing refines the structure and flow of your content, making it easier to follow and understand."
    },
    {
      icon: Target,
      title: "Clear Communication", 
      description: "Through careful editing, complex ideas can be explained in a more straightforward and accessible manner, improving comprehension."
    },
    {
      icon: Zap,
      title: "Key Information",
      description: "Editing allows for the reorganisation of information, placing key points front and centre for maximum impact and clarity."
    },
    {
      icon: Shield,
      title: "Error Reduction",
      description: "Consistent editing reduces ambiguity and ensures that your message is conveyed precisely and effectively."
    }
  ];

  const services = [
    {
      icon: FileText,
      title: "Assignment Writing",
      description: "Professional assignment writing services across all academic levels and subjects including Management, Science, Law, Computer Science, and more.",
      features: ["100% Original Content", "Expert Subject Writers", "Timely Delivery", "Free Revisions"]
    },
    {
      icon: BookOpen,
      title: "Research Papers",
      description: "Comprehensive research papers with rigorous methodology, in-depth analysis, and proper academic citations.",
      features: ["Original Research", "Peer Review Quality", "Statistical Analysis", "Literature Review"]
    },
    {
      icon: GraduationCap,
      title: "Thesis & Dissertations",
      description: "Complete PhD and Master's thesis support from proposal development to final submission and defense preparation.",
      features: ["Chapter-wise Writing", "Research Methodology", "Data Analysis", "Defense Support"]
    },
    {
      icon: Award,
      title: "Scopus Publications",
      description: "Expert assistance for publishing in Scopus indexed journals with guaranteed acceptance - best rates in the market.",
      features: ["Journal Selection", "Manuscript Preparation", "Submission Support", "Publication Guarantee"]
    },
    {
      icon: Users,
      title: "Editing & Proofreading", 
      description: "Professional editing and proofreading services to enhance quality, clarity, and academic standards of your work.",
      features: ["Grammar & Style", "Structure Improvement", "Format Compliance", "Quality Assurance"]
    },
    {
      icon: CheckCircle,
      title: "Academic Consultation",
      description: "One-on-one academic consultation for research guidance, methodology selection, and academic career planning.",
      features: ["Research Guidance", "Methodology Support", "Career Planning", "Academic Mentoring"]
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Academic Writing Benefits
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We offer a comprehensive range of academic services tailored to meet your specific needs across all disciplines.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Services Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Comprehensive Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From assignments to PhD thesis - your one-stop solution for academic excellence across all disciplines.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <service.icon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Subject Areas */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Multidisciplinary Academic Support
            </h3>
            <p className="text-lg text-gray-600">
              Expert academic services across all major fields and disciplines
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "Law & Legal Studies",
              "Management & Business", 
              "Computer Science & IT",
              "Medical & Health Sciences",
              "Engineering & Technology",
              "Social Sciences",
              "Natural Sciences",
              "Arts & Humanities"
            ].map((subject, index) => (
              <div key={index} className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center hover:bg-blue-100 transition-colors">
                <span className="text-gray-800 font-medium">{subject}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Scopus Special Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 lg:p-12 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
                <Star className="h-10 w-10 text-white" />
              </div>
            </div>
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Scopus Indexed Journal Publications
            </h3>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Get your research published in prestigious Scopus indexed journals with our expert guidance. 
              We offer the most competitive rates in the market with guaranteed publication success.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">100+</div>
                <div className="text-white/80">Journals Network</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">95%</div>
                <div className="text-white/80">Publication Success</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">Best</div>
                <div className="text-white/80">Market Rates</div>
              </div>
            </div>
            <button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg text-lg transition-colors">
              Get Publication Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;