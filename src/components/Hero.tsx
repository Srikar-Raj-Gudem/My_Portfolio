import { ArrowRight, Sparkles, CheckCircle, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profilePhoto from '@/assets/profile-photo.jpg';

const skills = ['SQL', 'Excel', 'Power BI', 'Python', 'AI Tools', 'ETL', 'Statistics', 'PostgreSQL'];
const highlights = ['Data Visualization', 'Business Intelligence', 'Customer Analytics', 'Revenue Optimization'];

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-accent/8 via-cyan-400/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-pink-400/8 via-purple-400/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-r from-accent/3 to-cyan-400/3 rounded-full blur-3xl animate-pulse" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="section-container relative z-10 py-24 md:py-32">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Content - Takes 7 columns */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-8 animate-fade-up">
              <Sparkles size={16} className="animate-pulse" />
              <span>Open to Opportunities</span>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            </div>
            
            {/* Main heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-foreground leading-[1.1] mb-6 animate-fade-up animation-delay-100">
              Hello! I'm{' '}
              <span className="relative inline-block">
                <span className="gradient-text">Srikar Raj</span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                  <path d="M2 10C50 2 150 2 198 10" stroke="hsl(var(--accent))" strokeWidth="3" strokeLinecap="round" className="animate-draw" />
                </svg>
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground font-medium mb-4 animate-fade-up animation-delay-200">
              AI-Powered <span className="text-foreground font-semibold">Data Analyst</span>
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-up animation-delay-300">
              Transforming raw data into strategic business decisions. I help companies understand customers, optimize revenue, and drive growth through data.
            </p>
            
            {/* Highlights */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-10 animate-fade-up animation-delay-300">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle size={16} className="text-accent" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up animation-delay-400">
              <Button variant="hero" size="xl" asChild>
                <a href="#projects">
                  View My Work
                  <ArrowRight size={20} />
                </a>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <a href="#contact">
                  Let's Connect
                </a>
              </Button>
            </div>
          </div>
          
          {/* Image - Takes 5 columns */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end animate-fade-up animation-delay-200">
            <div className="relative">
              {/* Decorative rings */}
              <div className="absolute inset-0 border-2 border-dashed border-accent/20 rounded-full scale-[1.15] animate-spin-slow" style={{ animationDuration: '20s' }} />
              <div className="absolute inset-0 border border-accent/10 rounded-full scale-[1.25]" />
              
              {/* Floating skill badges */}
              <div className="absolute -left-8 top-1/4 bg-background shadow-card px-4 py-2 rounded-xl border border-border animate-float z-20">
                <span className="text-sm font-semibold text-foreground">SQL Expert</span>
              </div>
              <div className="absolute -right-6 top-1/3 bg-background shadow-card px-4 py-2 rounded-xl border border-border animate-float animation-delay-200 z-20">
                <span className="text-sm font-semibold text-foreground">Power BI</span>
              </div>
              <div className="absolute -left-4 bottom-1/4 bg-accent text-accent-foreground shadow-glow px-4 py-2 rounded-xl animate-float animation-delay-300 z-20">
                <span className="text-sm font-semibold">AI Tools</span>
              </div>
              
              {/* Glow effect */}
              <div className="absolute -inset-8 bg-gradient-to-br from-accent/20 via-cyan-400/10 to-pink-400/10 rounded-full blur-2xl" />
              
              {/* Image container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[360px] lg:h-[360px] rounded-full overflow-hidden border-4 border-background shadow-card">
                <img
                  src={profilePhoto}
                  alt="Srikar Raj Gudem - Data Analyst"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Status badge */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-background px-5 py-2.5 rounded-full shadow-card border border-border flex items-center gap-2 z-20">
                <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-semibold text-foreground whitespace-nowrap">Available for Hire</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Skill marquee */}
        <div className="mt-20 md:mt-28 animate-fade-up animation-delay-400">
          <div className="relative overflow-hidden py-4">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
            
            <div className="flex gap-4 animate-marquee">
              {[...skills, ...skills].map((skill, index) => (
                <span 
                  key={`${skill}-${index}`} 
                  className="flex-shrink-0 px-6 py-3 rounded-full border-2 border-border bg-secondary/50 text-foreground font-semibold text-sm hover:border-accent hover:bg-accent/10 transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground animate-bounce">
          <span className="text-xs font-medium uppercase tracking-wider">Scroll</span>
          <ChevronDown size={20} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
