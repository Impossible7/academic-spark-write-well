import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import { FileText, Download, Eye, Star, Calendar, User } from 'lucide-react';

const sampleWorks = [
  {
    id: 1,
    title: "Constitutional Law Analysis: Freedom of Speech in Digital Age",
    subject: "Law",
    type: "Research Paper",
    pages: 25,
    level: "Masters",
    rating: 5,
    author: "Dr. Sarah Johnson",
    date: "2024-01-15",
    description: "A comprehensive analysis of how constitutional freedom of speech principles apply to modern digital platforms and social media.",
    preview: "This research paper examines the evolving interpretation of the First Amendment in the context of digital communication...",
    downloadUrl: "#"
  },
  {
    id: 2,
    title: "Strategic Management in Post-Pandemic Business Environment",
    subject: "Management",
    type: "Case Study",
    pages: 18,
    level: "MBA",
    rating: 5,
    author: "Prof. Michael Chen",
    date: "2024-01-10",
    description: "Analysis of strategic management approaches adopted by Fortune 500 companies during and after the COVID-19 pandemic.",
    preview: "The COVID-19 pandemic has fundamentally altered the business landscape, forcing organizations to rapidly adapt their strategic approaches...",
    downloadUrl: "#"
  },
  {
    id: 3,
    title: "Machine Learning Applications in Healthcare Diagnostics",
    subject: "Computer Science",
    type: "Thesis Chapter",
    pages: 45,
    level: "PhD",
    rating: 5,
    author: "Dr. Emily Williams",
    date: "2024-01-08",
    description: "Exploration of machine learning algorithms and their applications in medical diagnosis and patient care optimization.",
    preview: "The integration of machine learning technologies in healthcare has shown remarkable potential for improving diagnostic accuracy...",
    downloadUrl: "#"
  },
  {
    id: 4,
    title: "Sustainable Finance and Green Investment Strategies",
    subject: "Finance",
    type: "Research Paper",
    pages: 22,
    level: "Masters",
    rating: 4,
    author: "Prof. David Kumar",
    date: "2024-01-05",
    description: "Comprehensive study of sustainable finance principles and their impact on modern investment decision-making.",
    preview: "Environmental, Social, and Governance (ESG) criteria have become increasingly important in investment decisions...",
    downloadUrl: "#"
  },
  {
    id: 5,
    title: "Quantum Computing: Theoretical Foundations and Practical Applications",
    subject: "Physics",
    type: "Literature Review",
    pages: 35,
    level: "PhD",
    rating: 5,
    author: "Dr. Lisa Park",
    date: "2024-01-03",
    description: "Comprehensive review of quantum computing principles, current developments, and future applications across industries.",
    preview: "Quantum computing represents a paradigm shift in computational capability, promising to solve complex problems...",
    downloadUrl: "#"
  },
  {
    id: 6,
    title: "Behavioral Psychology in Consumer Decision Making",
    subject: "Psychology",
    type: "Research Paper",
    pages: 20,
    level: "Masters",
    rating: 4,
    author: "Dr. James Wilson",
    date: "2024-01-01",
    description: "Investigation into psychological factors that influence consumer behavior and purchasing decisions in digital marketplaces.",
    preview: "Consumer behavior in the digital age is influenced by a complex interplay of psychological, social, and technological factors...",
    downloadUrl: "#"
  }
];

const subjects = ["All", "Law", "Management", "Computer Science", "Finance", "Physics", "Psychology"];
const types = ["All", "Research Paper", "Case Study", "Thesis Chapter", "Literature Review"];

const Samples = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <div className="bg-primary text-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <FileText className="h-16 w-16 mx-auto mb-6 opacity-80" />
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Sample Works</h1>
              <p className="text-xl opacity-90 mb-8">
                Explore our collection of high-quality academic samples across various disciplines
              </p>
            </div>
          </div>
        </div>

        {/* Filters Section */}
        <div className="py-8 bg-background-light border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="flex flex-wrap gap-2">
                <span className="text-sm font-medium text-text-dark">Subject:</span>
                {subjects.map((subject) => (
                  <button
                    key={subject}
                    className="px-3 py-1 text-sm rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition-colors"
                  >
                    {subject}
                  </button>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="text-sm font-medium text-text-dark">Type:</span>
                {types.map((type) => (
                  <button
                    key={type}
                    className="px-3 py-1 text-sm rounded-full border border-secondary text-secondary hover:bg-secondary hover:text-white transition-colors"
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Samples Grid */}
        <div className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sampleWorks.map((sample) => (
                <div key={sample.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  {/* Header */}
                  <div className="p-6 border-b">
                    <div className="flex items-start justify-between mb-3">
                      <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium">
                        {sample.subject}
                      </span>
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < sample.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-text-dark mb-2 line-clamp-2">
                      {sample.title}
                    </h3>
                    <p className="text-text-dark/70 text-sm mb-4 line-clamp-2">
                      {sample.description}
                    </p>
                  </div>

                  {/* Content Preview */}
                  <div className="p-6 border-b">
                    <p className="text-text-dark/80 text-sm italic line-clamp-3">
                      "{sample.preview}"
                    </p>
                  </div>

                  {/* Details */}
                  <div className="p-6 space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-text-dark/60">Type:</span>
                      <span className="font-medium">{sample.type}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-text-dark/60">Level:</span>
                      <span className="font-medium">{sample.level}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-text-dark/60">Pages:</span>
                      <span className="font-medium">{sample.pages}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-1">
                        <User className="h-4 w-4 text-text-dark/60" />
                        <span className="text-text-dark/60">{sample.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4 text-text-dark/60" />
                        <span className="text-text-dark/60">{sample.date}</span>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="p-6 pt-0">
                    <div className="flex space-x-3">
                      <button className="flex-1 bg-primary text-white px-4 py-2 rounded-lg font-medium hover:bg-primary-dark transition-colors flex items-center justify-center space-x-2">
                        <Eye className="h-4 w-4" />
                        <span>Preview</span>
                      </button>
                      <button className="flex-1 bg-secondary text-white px-4 py-2 rounded-lg font-medium hover:bg-secondary-dark transition-colors flex items-center justify-center space-x-2">
                        <Download className="h-4 w-4" />
                        <span>Download</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="mt-16 bg-background-light p-8 rounded-xl text-center">
              <h3 className="text-2xl font-bold text-primary mb-4">Need Custom Academic Writing?</h3>
              <p className="text-text-dark/80 mb-6 max-w-2xl mx-auto">
                These samples represent the quality and expertise we bring to every project. Ready to get started on your custom academic work?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
                >
                  Get Quote
                </a>
                <a 
                  href="/services" 
                  className="bg-secondary text-white px-6 py-3 rounded-lg font-semibold hover:bg-secondary-dark transition-colors"
                >
                  View Services
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Samples;