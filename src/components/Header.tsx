
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

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

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMenuOpen(false);
  }, [location.pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
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
          <span className="text-primary font-poppins font-bold text-2xl">Write<span className="text-secondary">sphere</span></span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            to="/" 
            className={`transition-colors ${isActive('/') ? 'text-primary font-medium' : 'text-text-dark hover:text-primary'}`}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className={`transition-colors ${isActive('/about') ? 'text-primary font-medium' : 'text-text-dark hover:text-primary'}`}
          >
            About
          </Link>
          
          {/* Services Dropdown */}
          <div className="relative group">
            <button 
              className={`flex items-center transition-colors ${isActive('/services') ? 'text-primary font-medium' : 'text-text-dark hover:text-primary'}`}
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
          
          <Link 
            to="/samples" 
            className={`transition-colors ${isActive('/samples') ? 'text-primary font-medium' : 'text-text-dark hover:text-primary'}`}
          >
            Samples
          </Link>
          <Link 
            to="/faq" 
            className={`transition-colors ${isActive('/faq') ? 'text-primary font-medium' : 'text-text-dark hover:text-primary'}`}
          >
            FAQs
          </Link>
          <Link 
            to="/blog" 
            className={`transition-colors ${isActive('/blog') ? 'text-primary font-medium' : 'text-text-dark hover:text-primary'}`}
          >
            Blog
          </Link>
          <Link 
            to="/contact" 
            className={`transition-colors ${isActive('/contact') ? 'text-primary font-medium' : 'text-text-dark hover:text-primary'}`}
          >
            Contact
          </Link>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button asChild>
            <Link to="/contact">Get Started</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-text-dark" onClick={toggleMenu}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-white ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="container mx-auto px-4 py-4 space-y-2">
          <Link to="/" className={`block py-2 ${isActive('/') ? 'text-primary font-medium' : 'text-text-dark hover:text-primary'}`}>Home</Link>
          <Link to="/about" className={`block py-2 ${isActive('/about') ? 'text-primary font-medium' : 'text-text-dark hover:text-primary'}`}>About</Link>
          
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
          
          <Link to="/samples" className={`block py-2 ${isActive('/samples') ? 'text-primary font-medium' : 'text-text-dark hover:text-primary'}`}>Samples</Link>
          <Link to="/faq" className={`block py-2 ${isActive('/faq') ? 'text-primary font-medium' : 'text-text-dark hover:text-primary'}`}>FAQs</Link>
          <Link to="/blog" className={`block py-2 ${isActive('/blog') ? 'text-primary font-medium' : 'text-text-dark hover:text-primary'}`}>Blog</Link>
          <Link to="/contact" className={`block py-2 ${isActive('/contact') ? 'text-primary font-medium' : 'text-text-dark hover:text-primary'}`}>Contact</Link>
          
          <Button asChild className="w-full mt-4">
            <Link to="/contact">Get Started</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
