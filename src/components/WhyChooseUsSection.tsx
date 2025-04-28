
import { Check, Shield, Clock, Users, Bookmark, Award } from 'lucide-react';

const features = [
  {
    icon: Check,
    title: "100% Plagiarism-Free",
    description: "All our work is original and passes through strict plagiarism checks."
  },
  {
    icon: Shield,
    title: "Complete Confidentiality",
    description: "Your personal information and project details remain strictly confidential."
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    description: "We understand the importance of deadlines and ensure on-time delivery, every time."
  },
  {
    icon: Award,
    title: "Experienced Writers",
    description: "Our team consists of highly qualified writers with expertise in various academic fields."
  },
  {
    icon: Users,
    title: "Direct Communication",
    description: "Communicate directly with your assigned writer throughout the process."
  },
  {
    icon: Bookmark,
    title: "Unlimited Revisions",
    description: "We offer free revisions until you are completely satisfied with the delivered work."
  }
];

const WhyChooseUsSection = () => {
  return (
    <div className="py-16 md:py-24 bg-background-light">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Why Choose Academic Spark</h2>
          <p className="text-text-dark/80 text-lg">
            We stand out from the competition with our unwavering commitment to quality, confidentiality, and client satisfaction.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start">
              <div className="mr-4 p-2 bg-primary/10 rounded-full">
                <feature.icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-text-dark/70">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUsSection;
