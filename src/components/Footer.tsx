import { Heart, ArrowUp, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Services', 'Contact'];

  return (
    <footer className="bg-foreground text-background relative overflow-hidden">
      {/* Top wave decoration */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-accent" />
      
      <div className="section-container py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <a href="#home" className="text-3xl font-bold mb-4 inline-block">
              Srikar<span className="text-accent">.</span>
            </a>
            <p className="text-background/60 leading-relaxed mb-6">
              AI-Powered Data Analyst transforming raw data into strategic business decisions.
            </p>
            <div className="flex gap-3">
              <a 
                href="https://www.linkedin.com/in/srikar-raj-gudem" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="mailto:gudemsrikar2405@gmail.com"
                className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <Mail size={18} />
              </a>
              <a 
                href="tel:+919347477610"
                className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <Phone size={18} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <nav className="grid grid-cols-2 gap-3">
              {navLinks.map((link) => (
                <a 
                  key={link}
                  href={`#${link.toLowerCase()}`} 
                  className="text-background/60 hover:text-accent transition-colors"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">Get In Touch</h4>
            <div className="space-y-3 text-background/60">
              <p>Hyderabad, Telangana, India</p>
              <p>gudemsunny2405@gmail.com</p>
              <p>+91 9347477610</p>
            </div>
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-background/50 text-sm">
            © {new Date().getFullYear()} Srikar Raj Gudem. All rights reserved.
          </p>
          
          <p className="text-background/50 text-sm flex items-center gap-1">
            Made with <Heart size={14} className="text-accent fill-accent" /> for Data Excellence
          </p>
          
          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center text-accent-foreground hover:bg-accent/90 transition-colors shadow-glow"
            aria-label="Back to top"
          >
            <ArrowUp size={22} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
