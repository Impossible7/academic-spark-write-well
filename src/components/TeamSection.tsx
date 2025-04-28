
import { GraduationCap, Award } from "lucide-react";

const teamMembers = [
  {
    name: "Dr. Sarah Johnson",
    role: "Chief Academic Officer",
    bio: "Ph.D in Law from Harvard University with over 15 years of experience in academic research and writing.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
  },
  {
    name: "Prof. Michael Chen",
    role: "Head of Research",
    bio: "Former university professor with expertise in legal research methodologies and dissertation supervision.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
  },
  {
    name: "Dr. Emily Williams",
    role: "Quality Assurance Director",
    bio: "Specializes in ensuring academic integrity and excellence across all delivered projects.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
  },
  {
    name: "Prof. David Kumar",
    role: "Senior Writing Expert",
    bio: "Constitutional law expert with experience in moot court competitions and legal publication.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
  }
];

const TeamSection = () => {
  return (
    <div className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Meet Our Expert Team</h2>
          <p className="text-text-dark/80 text-lg">
            Our team consists of experienced academics, researchers, and industry professionals dedicated to academic excellence.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-background-light rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all">
              <div className="aspect-w-1 aspect-h-1 bg-gray-200">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 object-cover object-center" 
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-1">{member.name}</h3>
                <p className="text-secondary font-medium mb-3">{member.role}</p>
                <p className="text-text-dark/70">{member.bio}</p>
                <div className="flex items-center mt-4">
                  <GraduationCap className="h-5 w-5 text-primary mr-2" />
                  <span className="text-sm text-text-dark/60">Academic Expert</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-background-light rounded-lg p-8 text-center">
          <Award className="h-12 w-12 text-primary mx-auto mb-4" />
          <h3 className="text-2xl font-semibold mb-3">Join Our Team</h3>
          <p className="text-text-dark/80 max-w-2xl mx-auto mb-6">
            Are you an experienced academic writer or researcher? We're always looking for talented individuals to join our team of experts.
          </p>
          <a href="/contact" className="btn-primary inline-block">Apply Now</a>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
