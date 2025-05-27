
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";
import { Feather, Send, MessageCircle } from "lucide-react";

const CtaSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    description: ""
  });
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.phone || !formData.description) {
      toast.error("Please fill in all fields");
      return;
    }

    // Format the WhatsApp message
    const message = `🎓 New Quote Request from Academic Spark Website:

📝 Name: ${formData.name}
📧 Email: ${formData.email}
📱 Phone: ${formData.phone}

📋 Project Description:
${formData.description}

---
Sent from Academic Spark Website`;
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/1234567890?text=${encodedMessage}`; // Replace with your WhatsApp number
    
    // Show success message
    toast.success("Redirecting to WhatsApp...");
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      description: ""
    });
    
    // Close dialog
    setIsOpen(false);
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="py-16 md:py-24 bg-gradient-to-br from-amber-900 via-orange-800 to-yellow-900 relative overflow-hidden">
      {/* Background paper texture */}
      <div className="absolute inset-0 paper-texture opacity-20"></div>
      
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="floating-paper absolute top-10 left-10 opacity-10">
          <Feather className="h-16 w-16 text-amber-200" />
        </div>
        <div className="floating-paper absolute bottom-10 right-10 opacity-10" style={{animationDelay: '3s'}}>
          <MessageCircle className="h-20 w-20 text-amber-200" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 text-center text-white border border-white/20 shadow-2xl">
          <div className="flex justify-center mb-6">
            <div className="bg-amber-200/20 rounded-full p-4">
              <Feather className="h-12 w-12 text-amber-200" />
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold mb-6">
            Ready to Transform Your Ideas Into
            <span className="bg-gradient-to-r from-amber-200 to-yellow-200 bg-clip-text text-transparent block">
              Literary Masterpieces?
            </span>
          </h2>
          
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8 font-crimson leading-relaxed">
            Let our team of literary craftsmen help you achieve academic excellence. 
            Every word carefully chosen, every sentence expertly crafted, every paper a work of art.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
              <DialogTrigger asChild>
                <Button className="btn-accent text-lg px-8 py-4 relative group">
                  <Feather className="h-5 w-5 mr-2 group-hover:animate-pulse" />
                  Start Your Literary Journey
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[500px] bg-amber-50 border-amber-200">
                <DialogHeader>
                  <div className="flex items-center justify-center mb-4">
                    <div className="bg-amber-600/10 rounded-full p-3">
                      <Feather className="h-8 w-8 text-amber-700" />
                    </div>
                  </div>
                  <DialogTitle className="text-2xl font-playfair font-bold text-amber-900 text-center">
                    Begin Your Project
                  </DialogTitle>
                  <p className="text-amber-700/80 text-center font-crimson">
                    Share your vision with us and let's craft something extraordinary together
                  </p>
                </DialogHeader>
                
                <form onSubmit={handleSubmit} className="space-y-6 mt-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-amber-800 mb-2">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="bg-white border-amber-200 focus:border-amber-500"
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-amber-800 mb-2">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="bg-white border-amber-200 focus:border-amber-500"
                        placeholder="Your phone number"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-amber-800 mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-white border-amber-200 focus:border-amber-500"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="description" className="block text-sm font-medium text-amber-800 mb-2">
                      Project Description
                    </label>
                    <Textarea
                      id="description"
                      rows={4}
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      className="bg-white border-amber-200 focus:border-amber-500 resize-none"
                      placeholder="Tell us about your project... What type of writing do you need? What's the deadline? Any specific requirements?"
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-amber-700 hover:bg-amber-600 text-white py-3 text-lg font-medium"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Send to WhatsApp
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
            
            <Link to="/contact">
              <Button variant="outline" className="border-2 border-amber-200 text-amber-100 hover:bg-amber-200/10 text-lg px-8 py-4">
                <MessageCircle className="h-5 w-5 mr-2" />
                Contact Our Writers
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CtaSection;
