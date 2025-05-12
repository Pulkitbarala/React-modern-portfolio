
import { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Home, User, Settings, BookOpen, Briefcase, Mail, Menu, X } from "lucide-react";

interface NavLink {
  name: string;
  href: string;
  icon: React.ReactNode;
}

const navLinks: NavLink[] = [
  {
    name: 'Home',
    href: '#home',
    icon: <Home className="h-4 w-4" />
  },
  {
    name: 'About',
    href: '#about',
    icon: <User className="h-4 w-4" />
  },
  {
    name: 'Skills',
    href: '#skills',
    icon: <Settings className="h-4 w-4" />
  },
  {
    name: 'Education',
    href: '#education',
    icon: <BookOpen className="h-4 w-4" />
  },
  {
    name: 'Projects',
    href: '#projects',
    icon: <Briefcase className="h-4 w-4" />
  },
  {
    name: 'Contact',
    href: '#contact',
    icon: <Mail className="h-4 w-4" />
  }
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Update active section based on scroll position
      const sections = document.querySelectorAll('section[id]');
      sections.forEach(section => {
        const sectionId = section.getAttribute('id') || '';
        // Use getBoundingClientRect() for more reliable positioning info
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top + window.scrollY - 100;
        const sectionHeight = rect.height;

        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const scrollToSection = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        isScrolled ? 'bg-background/90 backdrop-blur-md border-b py-3' : 'py-5'
      )}
    >
      <div className="container mx-auto flex justify-between items-center">
        <a 
          href="#home" 
          className="font-bold text-xl text-primary"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('#home');
          }}
        >
          Portfolio
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.href);
              }}
              className={cn(
                "px-4 py-2 rounded-md flex items-center space-x-1 transition-all",
                activeSection === link.href.substring(1)
                  ? "text-primary font-medium"
                  : "text-muted-foreground hover:text-primary"
              )}
            >
              {link.icon}
              <span className="ml-1">{link.name}</span>
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b md:hidden">
            <nav className="flex flex-col py-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className={cn(
                    "px-6 py-3 flex items-center space-x-2",
                    activeSection === link.href.substring(1)
                      ? "text-primary font-medium"
                      : "text-muted-foreground"
                  )}
                >
                  {link.icon}
                  <span>{link.name}</span>
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
