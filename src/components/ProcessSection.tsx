
import { MessagesSquare, FileEdit, FileCheck, ThumbsUp } from 'lucide-react';

const steps = [
  {
    icon: MessagesSquare,
    title: "Discuss Requirements",
    description: "Share your project details, requirements, and expectations with us."
  },
  {
    icon: FileEdit,
    title: "Research & Writing",
    description: "Our expert writers conduct thorough research and prepare your document."
  },
  {
    icon: FileCheck,
    title: "Quality Check",
    description: "The document undergoes multiple quality and plagiarism checks."
  },
  {
    icon: ThumbsUp,
    title: "Delivery & Feedback",
    description: "Receive your document and request revisions if needed."
  }
];

const ProcessSection = () => {
  return (
    <div className="py-16 md:py-24 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
          <p className="text-white/80 text-lg">
            A simple, transparent process designed to deliver exceptional results every time.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col items-center text-center">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-1/2 right-0 h-0.5 bg-white/30 -z-10"></div>
              )}
              
              {/* Step Number */}
              <div className="h-20 w-20 bg-white/10 rounded-full flex items-center justify-center mb-6 relative z-10 border-2 border-white/30">
                <step.icon className="h-10 w-10" strokeWidth={1.5} />
              </div>
              
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-white/80">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProcessSection;
