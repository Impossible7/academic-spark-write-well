import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { GraduationCap, FileText, BookOpen, Users, Award, CheckCircle, Phone, Mail, Star, ArrowRight, Sparkles } from "lucide-react";

const HeroSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    countryCode: '',
    phone: '',
    country: '',
    service: '',
    socialMedia: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // WhatsApp integration
    const message = `Hello! I'm interested in your services.
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.countryCode} ${formData.phone}
Country: ${formData.country}
Service Required: ${formData.service}
Social Media: ${formData.socialMedia}`;
    
    const whatsappUrl = `https://wa.me/917903210106?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      countryCode: '',
      phone: '',
      country: '',
      service: '',
      socialMedia: ''
    });
  };

  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 py-20 lg:py-32 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-purple-200 rounded-full opacity-30 animate-bounce"></div>
      <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-indigo-200 rounded-full opacity-25 animate-pulse"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-blue-600 font-semibold">
                <Sparkles className="h-5 w-5" />
                <span>Premium Academic Services</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-display font-bold text-gray-900 leading-tight">
                Your Academic Success <span className="text-blue-600 relative">
                  Partner
                  <div className="absolute -bottom-2 left-0 w-full h-3 bg-blue-200 opacity-30 rounded"></div>
                </span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                From assignments to PhD thesis - we provide comprehensive academic solutions tailored to your needs. Join thousands of successful students worldwide.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">5000+</div>
                  <div className="text-sm text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">98%</div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">24/7</div>
                  <div className="text-sm text-gray-600">Support</div>
                </div>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 hover-scale group">
                <Link to="/services">
                  Get Started Now
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold px-8 py-3 hover-scale">
                <Link to="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+91 7903210106</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>support@writosphere.com</span>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="relative animate-fade-in">
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center gap-2 mb-6">
                <Star className="h-6 w-6 text-yellow-400" />
                <h3 className="text-2xl font-bold">Get Free Quote</h3>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white transition-all"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email Address"
                  required
                  className="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white transition-all"
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="countryCode"
                    value={formData.countryCode}
                    onChange={handleInputChange}
                    placeholder="eg: +91"
                    required
                    className="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white transition-all"
                  />
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Phone Number"
                    required
                    className="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white transition-all"
                  />
                </div>
                <select 
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white transition-all"
                >
                  <option value="">-- Select Country --</option>
                  <option value="India">India</option>
                  <option value="United States">United States</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="Canada">Canada</option>
                  <option value="Australia">Australia</option>
                  <option value="Other">Other</option>
                </select>
                <select 
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white transition-all"
                >
                  <option value="">-- Service Required --</option>
                  <option value="Assignment Writing">Assignment Writing</option>
                  <option value="Thesis Writing">Thesis Writing</option>
                  <option value="Research Paper">Research Paper</option>
                  <option value="Publication Support">Publication Support</option>
                  <option value="Editing & Proofreading">Editing & Proofreading</option>
                  <option value="Scopus Publication">Scopus Publication</option>
                  <option value="PhD Support">PhD Support</option>
                </select>
                <input
                  type="url"
                  name="socialMedia"
                  value={formData.socialMedia}
                  onChange={handleInputChange}
                  placeholder="Social Media Profile URL (Optional)"
                  className="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white transition-all"
                />
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover-scale group"
                >
                  Get Free Quote Now
                  <ArrowRight className="ml-2 h-4 w-4 inline group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
            
            {/* Decorative floating elements */}
            <div className="absolute -bottom-8 -left-8 w-48 h-32 bg-white rounded-lg shadow-lg transform rotate-3 opacity-90 animate-float">
              <div className="p-4">
                <div className="w-full h-2 bg-gradient-to-r from-blue-200 to-blue-300 rounded mb-2"></div>
                <div className="w-3/4 h-2 bg-gradient-to-r from-purple-200 to-purple-300 rounded mb-2"></div>
                <div className="w-full h-2 bg-gradient-to-r from-indigo-200 to-indigo-300 rounded mb-2"></div>
                <div className="w-1/2 h-2 bg-gradient-to-r from-pink-200 to-pink-300 rounded"></div>
              </div>
            </div>
            
            {/* Trust indicators */}
            <div className="absolute -top-4 -right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold animate-pulse">
              ✓ Trusted by 5000+ Students
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;