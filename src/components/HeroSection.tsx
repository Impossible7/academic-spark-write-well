import { Button } from "@/components/ui/button";
import { GraduationCap, FileText, BookOpen, Users, Award, CheckCircle, Phone, Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-display font-bold text-gray-900 leading-tight">
                Academic Writing & <span className="text-blue-600">Publication</span> Services
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                We offer a comprehensive range of academic services tailored to meet your specific needs from assignments to PhD thesis.
              </p>
              <p className="text-base text-gray-700 font-semibold">
                Writosphere - We Contribute To Ensuring Error-Free, High-Quality Content For Your Academic Excellence!
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3">
                Select Package
              </Button>
              <Button variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold px-8 py-3">
                Customize Package
              </Button>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+91 91507 70317 / +91 93455 34648</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>support@writosphere.com</span>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="relative">
            <div className="bg-blue-600 rounded-2xl p-8 text-white shadow-xl">
              <h3 className="text-2xl font-bold mb-6">Quick Contact</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="eg: +1"
                    className="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                  />
                  <input
                    type="text"
                    placeholder="Phone no."
                    className="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                  />
                </div>
                <select className="w-full px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white">
                  <option>-- Select Country --</option>
                  <option>India</option>
                  <option>United States</option>
                  <option>United Kingdom</option>
                  <option>Canada</option>
                  <option>Australia</option>
                </select>
                <select className="w-full px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white">
                  <option>-- Service Required --</option>
                  <option>Assignment Writing</option>
                  <option>Thesis Writing</option>
                  <option>Research Paper</option>
                  <option>Publication Support</option>
                  <option>Editing & Proofreading</option>
                </select>
                <input
                  type="text"
                  placeholder="Social Media Profile URL (Facebook, Instagram, Twitter, LinkedIn (Any one))"
                  className="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button
                  type="submit"
                  className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                >
                  Submit
                </button>
              </form>
            </div>
            
            {/* Decorative paper with pen image */}
            <div className="absolute -bottom-8 -left-8 w-48 h-32 bg-white rounded-lg shadow-lg transform rotate-3 opacity-90">
              <div className="p-4">
                <div className="w-full h-2 bg-gray-200 rounded mb-2"></div>
                <div className="w-3/4 h-2 bg-gray-200 rounded mb-2"></div>
                <div className="w-full h-2 bg-gray-200 rounded mb-2"></div>
                <div className="w-1/2 h-2 bg-gray-200 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;