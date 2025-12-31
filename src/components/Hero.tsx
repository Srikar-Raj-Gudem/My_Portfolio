import { ArrowRight, Download, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profilePhoto from '@/assets/profile-photo.jpg';

const skills = ['SQL', 'Excel', 'Power BI', 'Python', 'AI Tools', 'ETL', 'Statistics'];

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-pink-200/30 rounded-full blur-3xl animate-pulse animation-delay-200" />
      
      <div className="section-container py-24 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6 animate-fade-up">
              <Sparkles size={16} />
              <span>AI-Powered Data Analyst</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 animate-fade-up animation-delay-100">
              Hello! I'm{' '}
              <span className="gradient-text">Srikar Raj</span>
              <br />
              <span className="text-3xl md:text-4xl lg:text-5xl text-muted-foreground font-medium">
                Data Analyst
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-up animation-delay-200">
              Turning raw data into actionable business decisions. Specializing in SQL, Power BI, Python, and AI-driven analytics.
            </p>
            
            {/* Skill tags */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-10 animate-fade-up animation-delay-300">
              {skills.map((skill, index) => (
                <span key={skill} className="skill-badge">
                  {skill}
                </span>
              ))}
            </div>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up animation-delay-400">
              <Button variant="hero" size="lg" asChild>
                <a href="#projects">
                  View Portfolio
                  <ArrowRight size={18} />
                </a>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <a href="#contact">
                  Contact Me
                </a>
              </Button>
            </div>
          </div>
          
          {/* Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-up">
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute inset-0 border-2 border-accent/30 rounded-full scale-110 animate-pulse" />
              <div className="absolute -inset-4 bg-gradient-to-br from-accent/20 to-cyan-400/20 rounded-full blur-xl" />
              
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-background shadow-card">
                <img
                  src={profilePhoto}
                  alt="Srikar Raj Gudem - Data Analyst"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating badge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-background px-6 py-3 rounded-full shadow-card flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-foreground">Open to Work</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
