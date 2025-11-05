import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Set active section based on current page route
    if (location.pathname === '/career') {
      setActiveSection('career');
      return;
    }
    
    if (location.pathname.startsWith('/blog')) {
      setActiveSection('blog');
      return;
    }

    if (location.pathname === '/about') {
      setActiveSection('about');
      return;
    }

    // Only observe sections on the home page
    if (location.pathname !== '/') {
      setActiveSection('');
      return;
    }

    // Set initial state to hero when at top of page
    if (window.scrollY < 100) {
      setActiveSection('hero');
    }

    const observerOptions = {
      rootMargin: '-10% 0px -60% 0px',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = ['hero', 'about', 'services', 'work', 'blog', 'contact'];
    
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [location.pathname]);

  const scrollToSection = (id: string, isPage?: boolean) => {
    if (isPage) {
      navigate(`/${id}`);
      return;
    }
    
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { label: 'HOME', id: 'hero' },
    { label: 'ABOUT', id: 'about' },
    { label: 'SERVICES', id: 'services' },
    { label: 'WORK', id: 'work' },
    { label: 'BLOG', id: 'blog' },
    { label: 'CAREER', id: 'career', isPage: true },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        isScrolled ? 'bg-background/95 backdrop-blur-sm border-b border-border' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 lg:px-12 py-6">
        <div className="flex items-center justify-between relative">
          {/* Logo - Left End */}
          <button
            onClick={() => scrollToSection('hero')}
            className="text-xl font-medium tracking-wider z-10"
          >
            KINWITS
          </button>

          {/* Desktop Navigation - Centered */}
          <ul className="hidden md:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => scrollToSection(link.id, link.isPage)}
                  className={`text-xs tracking-widest transition-colors ${
                    activeSection === link.id ? 'text-foreground font-semibold underline underline-offset-4' : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Get in Touch Button - Right End */}
          <Button
            onClick={() => scrollToSection('contact')}
            variant="outline"
            className="hidden md:inline-flex text-xs tracking-widest px-6 z-10"
          >
            GET IN TOUCH
          </Button>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-6 pb-6 animate-fade-in">
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id, link.isPage)}
                    className={`block text-xs tracking-widest transition-colors w-full text-left ${
                      activeSection === link.id ? 'text-foreground font-semibold underline underline-offset-4' : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li>
                <Button
                  onClick={() => scrollToSection('contact')}
                  variant="outline"
                  className="w-full text-xs tracking-widest"
                >
                  GET IN TOUCH
                </Button>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navigation;
