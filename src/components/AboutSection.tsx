
import { GraduationCap, Award, CheckCircle, Clock } from "lucide-react";

const AboutSection = () => {
  return (
    <div className="py-16 md:py-24 bg-background-light">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">About Writosphere</h2>
          <p className="text-text-dark/80 text-lg">
            We are a team of experienced academic writers, researchers, and professors dedicated to helping students and scholars achieve academic excellence.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Icon Box 1 */}
          <div className="flex flex-col items-center text-center p-6 rounded-lg bg-white shadow-md hover:shadow-lg transition-all">
            <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <GraduationCap className="h-8 w-8 text-primary" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Expert Writers</h3>
            <p className="text-text-dark/70">
              Our team consists of PhD holders and subject matter experts with years of academic experience.
            </p>
          </div>
          
          {/* Icon Box 2 */}
          <div className="flex flex-col items-center text-center p-6 rounded-lg bg-white shadow-md hover:shadow-lg transition-all">
            <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Award className="h-8 w-8 text-primary" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Quality Focused</h3>
            <p className="text-text-dark/70">
              We pride ourselves on delivering thoroughly researched and professionally written content.
            </p>
          </div>
          
          {/* Icon Box 3 */}
          <div className="flex flex-col items-center text-center p-6 rounded-lg bg-white shadow-md hover:shadow-lg transition-all">
            <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <CheckCircle className="h-8 w-8 text-primary" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Plagiarism Free</h3>
            <p className="text-text-dark/70">
              All our work is 100% original, thoroughly cited and passes the strictest plagiarism checks.
            </p>
          </div>
          
          {/* Icon Box 4 */}
          <div className="flex flex-col items-center text-center p-6 rounded-lg bg-white shadow-md hover:shadow-lg transition-all">
            <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Clock className="h-8 w-8 text-primary" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-semibold mb-2">On-Time Delivery</h3>
            <p className="text-text-dark/70">
              We understand deadlines are crucial. We ensure your work is delivered ahead of schedule.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
