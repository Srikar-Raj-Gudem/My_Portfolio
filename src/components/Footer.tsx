import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a href="#home" className="text-2xl font-bold mb-2 inline-block">
              Srikar<span className="text-accent">.</span>
            </a>
            <p className="text-primary-foreground/70 text-sm">
              © {new Date().getFullYear()} Srikar Raj Gudem. All rights reserved.
            </p>
          </div>
          
          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#home" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              Home
            </a>
            <a href="#about" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              About
            </a>
            <a href="#skills" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              Skills
            </a>
            <a href="#projects" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              Projects
            </a>
            <a href="#contact" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              Contact
            </a>
          </nav>
          
          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-accent-foreground hover:bg-accent/90 transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
        
        {/* Divider */}
        <div className="border-t border-primary-foreground/10 mt-8 pt-8">
          <p className="text-center text-primary-foreground/50 text-sm flex items-center justify-center gap-1">
            Made with <Heart size={14} className="text-accent fill-accent" /> for Data-Driven Excellence
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
