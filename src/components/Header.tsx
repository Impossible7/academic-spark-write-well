
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="text-primary font-poppins font-bold text-2xl">Academic<span className="text-secondary">Spark</span></span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-text-dark hover:text-primary transition-colors">Home</Link>
          <Link to="/about" className="text-text-dark hover:text-primary transition-colors">About</Link>
          
          {/* Services Dropdown */}
          <div className="relative group">
            <button 
              className="text-text-dark hover:text-primary transition-colors flex items-center" 
              onClick={() => setIsServicesOpen(!isServicesOpen)}
            >
              Services <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg overflow-hidden z-20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <Link to="/services/research-paper" className="block px-4 py-2 text-sm hover:bg-gray-100">Research Paper Writing</Link>
              <Link to="/services/dissertation" className="block px-4 py-2 text-sm hover:bg-gray-100">Dissertation Writing</Link>
              <Link to="/services/moot-memorial" className="block px-4 py-2 text-sm hover:bg-gray-100">Moot Memorial Preparation</Link>
              <Link to="/services/internship-report" className="block px-4 py-2 text-sm hover:bg-gray-100">Internship Report Writing</Link>
              <Link to="/services/phd-thesis" className="block px-4 py-2 text-sm hover:bg-gray-100">PhD Thesis Support</Link>
            </div>
          </div>
          
          <Link to="/samples" className="text-text-dark hover:text-primary transition-colors">Samples</Link>
          <Link to="/faq" className="text-text-dark hover:text-primary transition-colors">FAQs</Link>
          <Link to="/blog" className="text-text-dark hover:text-primary transition-colors">Blog</Link>
          <Link to="/contact" className="text-text-dark hover:text-primary transition-colors">Contact</Link>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button className="btn-primary">Get Started</Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-text-dark" onClick={toggleMenu}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-white ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="container mx-auto px-4 py-4 space-y-2">
          <Link to="/" className="block py-2 text-text-dark hover:text-primary">Home</Link>
          <Link to="/about" className="block py-2 text-text-dark hover:text-primary">About</Link>
          
          {/* Mobile Services Dropdown */}
          <div>
            <button 
              className="flex items-center justify-between w-full py-2 text-text-dark hover:text-primary"
              onClick={toggleServices}
            >
              Services <ChevronDown className={`h-4 w-4 transform transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isServicesOpen && (
              <div className="pl-4 space-y-2 mt-1">
                <Link to="/services/research-paper" className="block py-1 text-text-dark hover:text-primary">Research Paper Writing</Link>
                <Link to="/services/dissertation" className="block py-1 text-text-dark hover:text-primary">Dissertation Writing</Link>
                <Link to="/services/moot-memorial" className="block py-1 text-text-dark hover:text-primary">Moot Memorial Preparation</Link>
                <Link to="/services/internship-report" className="block py-1 text-text-dark hover:text-primary">Internship Report Writing</Link>
                <Link to="/services/phd-thesis" className="block py-1 text-text-dark hover:text-primary">PhD Thesis Support</Link>
              </div>
            )}
          </div>
          
          <Link to="/samples" className="block py-2 text-text-dark hover:text-primary">Samples</Link>
          <Link to="/faq" className="block py-2 text-text-dark hover:text-primary">FAQs</Link>
          <Link to="/blog" className="block py-2 text-text-dark hover:text-primary">Blog</Link>
          <Link to="/contact" className="block py-2 text-text-dark hover:text-primary">Contact</Link>
          
          <Button className="btn-primary w-full mt-4">Get Started</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
