
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
import { PenTool, Send, MessageCircle, Sparkles, Heart, Star } from "lucide-react";

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
      toast.error("🎨 Please fill in all the colorful fields!");
      return;
    }

    // Format the WhatsApp message
    const message = `🎨 New Creative Quote Request from Academic Spark Website:

✨ Name: ${formData.name}
📧 Email: ${formData.email}
📱 Phone: ${formData.phone}

🌈 Project Description:
${formData.description}

---
✍️ Sent from Academic Spark Website`;
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/1234567890?text=${encodedMessage}`; // Replace with your WhatsApp number
    
    // Show success message
    toast.success("🎉 Redirecting to WhatsApp magic...");
    
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
    <div className="py-16 md:py-24 bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 relative overflow-hidden">
      {/* <div className="container mx-auto px-4 relative z-10">
        <div className="bg-white/20 backdrop-blur-md rounded-3xl p-8 md:p-12 text-center text-white border-2 border-white/30 shadow-2xl notebook-paper">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full p-6 shadow-xl animate-colorful-bounce">
              <Sparkles className="h-12 w-12 text-white" />
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-handwriting-bold mb-6 handwriting-effect">
            🎨 Ready to Paint Your Ideas Into
            <span className="block text-yellow-200 font-creative mt-2">
              ✨ Literary Masterpieces? 📝
            </span>
          </h2>
          
          <p className="text-xl opacity-95 max-w-3xl mx-auto mb-8 font-notebook leading-relaxed">
            🌈 Let our rainbow team of creative wizards transform your thoughts into colorful, 
            engaging stories that dance off the page! Every word is a brushstroke of brilliance! 🎭✨
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
              <DialogTrigger asChild>
                <Button className="btn-accent text-lg px-8 py-4 relative group font-handwriting-bold rounded-full shadow-xl">
                  <PenTool className="h-5 w-5 mr-2 group-hover:animate-spin" />
                  🎨 Start Your Creative Journey
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[500px] bg-gradient-to-br from-yellow-50 to-pink-50 border-2 border-purple-200 rounded-3xl">
                <DialogHeader>
                  <div className="flex items-center justify-center mb-4">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-full p-4 shadow-lg animate-colorful-bounce">
                      <PenTool className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <DialogTitle className="text-2xl font-handwriting-bold text-purple-800 text-center handwriting-effect">
                    ✨ Let's Create Magic Together! 🎨
                  </DialogTitle>
                  <p className="text-purple-600 text-center font-notebook">
                    Share your colorful vision and let's paint something extraordinary! 🌈
                  </p>
                </DialogHeader> */}
                
                <form onSubmit={handleSubmit} className="space-y-6 mt-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-handwriting-bold text-purple-700 mb-2">
                        ✍️ Your Name
                      </label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="bg-white/80 border-2 border-purple-300 focus:border-pink-400 rounded-xl font-notebook"
                        placeholder="Your magical name..."
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-handwriting-bold text-purple-700 mb-2">
                        📱 Phone Number
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="bg-white/80 border-2 border-purple-300 focus:border-pink-400 rounded-xl font-notebook"
                        placeholder="Your contact magic..."
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-handwriting-bold text-purple-700 mb-2">
                      📧 Email Address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-white/80 border-2 border-purple-300 focus:border-pink-400 rounded-xl font-notebook"
                      placeholder="your.email@magic.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="description" className="block text-sm font-handwriting-bold text-purple-700 mb-2">
                      🎨 Project Description
                    </label>
                    <Textarea
                      id="description"
                      rows={4}
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      className="bg-white/80 border-2 border-purple-300 focus:border-pink-400 rounded-xl resize-none font-notebook"
                      placeholder="Tell us about your creative vision... What magical writing do you need? When's your deadline? Any special sparkles you want? ✨"
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-red-500 text-white py-4 text-lg font-handwriting-bold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    🚀 Send to WhatsApp Magic
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
            
            <Link to="/contact">
              <Button variant="outline" className="border-3 border-white text-white hover:bg-white/10 text-lg px-8 py-4 font-handwriting-bold rounded-full shadow-lg">
                <MessageCircle className="h-5 w-5 mr-2" />
                💬 Chat with Our Writers
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CtaSection;
