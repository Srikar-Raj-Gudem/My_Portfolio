import { ArrowRight, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profilePhoto from '@/assets/profile-photo.jpg';
const skills = ['SQL', 'Excel', 'Power BI', 'Python', 'AI Tools', 'ETL', 'Statistics', 'PostgreSQL'];
const Hero = () => {
  return <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-secondary/30 via-background to-accent/5">
      {/* Background grid pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-24 md:py-32 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left space-y-6">
            {/* Welcome Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-muted-foreground text-sm font-medium animate-fade-up">
              <span>👋</span>
              <span>Welcome to my portfolio</span>
            </div>
            
            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-black text-foreground leading-[1.1] animate-fade-up animation-delay-100">
              Hi, I'm{' '}
              <span className="text-accent">Srikar Raj</span>
            </h1>
            
            {/* Subheading */}
            <p className="text-xl md:text-2xl text-muted-foreground font-medium animate-fade-up animation-delay-200">
              AI-Powered <span className="text-foreground font-semibold">Data Analyst</span>
            </p>
            
            {/* Description */}
            <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 animate-fade-up animation-delay-200">Transforming raw data into strategic business decisions. I help companies understand customers, optimize revenue, and drive growth through data.</p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up animation-delay-300 pt-2">
              <Button className="group bg-foreground hover:bg-foreground/90 text-background rounded-full px-8 py-6 text-base font-semibold shadow-card hover:shadow-glow transition-all duration-300" asChild>
                <a href="#projects" className="flex items-center gap-2">
                  View My Work
                  <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </Button>
              <Button variant="outline" className="border-2 border-foreground bg-transparent text-foreground hover:bg-foreground hover:text-background rounded-full px-8 py-6 text-base font-semibold transition-all duration-300" asChild>
                <a href="#contact">Let's Connect</a>
              </Button>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start animate-fade-up animation-delay-400 pt-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-secondary hover:bg-accent/10 text-muted-foreground hover:text-accent transition-all duration-300" aria-label="LinkedIn">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-secondary hover:bg-accent/10 text-muted-foreground hover:text-accent transition-all duration-300" aria-label="GitHub">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a href="mailto:srikar@example.com" className="p-3 rounded-full bg-secondary hover:bg-accent/10 text-muted-foreground hover:text-accent transition-all duration-300" aria-label="Email">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Right Column - Profile Image with Badges */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end items-center animate-fade-up animation-delay-200">
            <div className="relative max-w-md lg:max-w-lg">
              {/* Decorative blur background */}
              <div className="absolute -inset-8 bg-gradient-to-br from-accent/20 via-cyan-400/10 to-accent/10 rounded-full blur-3xl" />
              
              {/* Decorative dashed ring */}
              <div className="absolute inset-0 border-2 border-dashed border-accent/30 rounded-full scale-[1.15] animate-spin-slow" style={{
              animationDuration: '25s'
            }} />
              <div className="absolute inset-0 border border-accent/10 rounded-full scale-[1.25]" />
              
              {/* Profile Image */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[360px] lg:h-[360px] rounded-full overflow-hidden border-4 border-background shadow-card mx-auto">
                <img src={profilePhoto} alt="Srikar Raj Gudem - Data Analyst" className="w-full h-full object-cover object-top" />
              </div>
              
              {/* Floating Badge - SQL Expert (Top Left) */}
              <div className="absolute -left-4 sm:left-0 top-1/4 bg-background shadow-badge px-4 py-2 rounded-xl border border-border animate-float z-20">
                <span className="text-sm font-semibold text-foreground">SQL Expert</span>
              </div>
              
              {/* Floating Badge - Power BI (Top Right) */}
              <div className="absolute -right-4 sm:right-0 top-1/3 bg-background shadow-badge px-4 py-2 rounded-xl border border-border animate-float-slow z-20" style={{
              animationDelay: '0.5s'
            }}>
                <span className="text-sm font-semibold text-foreground">Power BI</span>
              </div>
              
              {/* Floating Badge - AI Tools (Bottom Left) */}
              <div className="absolute -left-2 sm:left-4 bottom-1/4 bg-accent text-accent-foreground shadow-glow px-4 py-2 rounded-xl animate-float-delayed z-20" style={{
              animationDelay: '1s'
            }}>
                <span className="text-sm font-semibold">AI Tools</span>
              </div>
              
              {/* Status Badge - Available for Hire (Bottom Center) */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-background px-5 py-2.5 rounded-full shadow-badge border border-border flex items-center gap-2 z-20">
                <div className="relative">
                  <div className="w-2.5 h-2.5 bg-green-500 rounded-full" />
                  <div className="absolute inset-0 w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse-ring" />
                </div>
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
              {[...skills, ...skills].map((skill, index) => <span key={`${skill}-${index}`} className="flex-shrink-0 px-6 py-3 rounded-full border-2 border-border bg-secondary/50 text-foreground font-semibold text-sm hover:border-accent hover:bg-accent/10 transition-colors cursor-default">
                  {skill}
                </span>)}
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground animate-bounce">
          <span className="text-xs font-medium uppercase tracking-wider">Scroll</span>
          <ChevronDown size={20} />
        </div>
      </div>
    </section>;
};
export default Hero;