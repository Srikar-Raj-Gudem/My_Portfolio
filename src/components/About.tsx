import { GraduationCap, Briefcase, MapPin, Calendar } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-secondary/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl" />
      
      <div className="section-container relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Passionate About <span className="gradient-text">Data-Driven</span> Solutions
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* About Content */}
          <div className="space-y-6">
            <div className="bg-card rounded-2xl p-8 border border-border shadow-soft">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                  <Briefcase size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Who I Am</h3>
                  <p className="text-muted-foreground text-sm">Aspiring Data Analyst</p>
                </div>
              </div>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm <strong className="text-foreground">Srikar Raj Gudem</strong>, an aspiring Data Analyst with a B.Tech in Computer Science and Engineering. I am passionate about converting complex datasets into meaningful insights.
                </p>
                <p>
                  With hands-on experience in database design, SQL querying, and analytical problem-solving, I help businesses understand customers, optimize revenue, and manage inventory effectively.
                </p>
                <p>
                  I'm continuously upskilling through certifications and practical projects, actively seeking opportunities in data analysis and business intelligence.
                </p>
              </div>
            </div>
            
            {/* Location card */}
            <div className="flex items-center gap-4 bg-card rounded-xl p-5 border border-border">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                <MapPin size={22} />
              </div>
              <div>
                <p className="font-semibold text-foreground">Based in Hyderabad, India</p>
                <p className="text-sm text-muted-foreground">Open to remote opportunities worldwide</p>
              </div>
            </div>
          </div>
          
          {/* Education Timeline */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                <GraduationCap size={24} />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Education Journey</h3>
            </div>
            
            <div className="space-y-4">
              {/* B.Tech */}
              <div className="relative pl-8 border-l-2 border-accent pb-8">
                <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] bg-accent rounded-full ring-4 ring-accent/20" />
                <div className="bg-card rounded-xl p-6 border border-border shadow-soft card-hover">
                  <div className="flex items-center gap-2 text-accent text-sm font-semibold mb-2">
                    <Calendar size={14} />
                    <span>2021 – 2025</span>
                  </div>
                  <h4 className="text-lg font-bold text-foreground">
                    B.Tech – Computer Science & Engineering
                  </h4>
                  <p className="text-muted-foreground mt-1">
                    Vignana Bharathi Institute of Technology
                  </p>
                </div>
              </div>
              
              {/* Intermediate */}
              <div className="relative pl-8 border-l-2 border-accent/50 pb-8">
                <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] bg-accent/70 rounded-full ring-4 ring-accent/10" />
                <div className="bg-card rounded-xl p-6 border border-border shadow-soft card-hover">
                  <div className="flex items-center gap-2 text-accent text-sm font-semibold mb-2">
                    <Calendar size={14} />
                    <span>2019 – 2021</span>
                  </div>
                  <h4 className="text-lg font-bold text-foreground">
                    Intermediate (MPC)
                  </h4>
                  <p className="text-muted-foreground mt-1">
                    Sri Chaitanya College of Education
                  </p>
                </div>
              </div>
              
              {/* SSC */}
              <div className="relative pl-8">
                <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] bg-accent/40 rounded-full ring-4 ring-accent/5" />
                <div className="bg-card rounded-xl p-6 border border-border shadow-soft card-hover">
                  <div className="flex items-center gap-2 text-accent text-sm font-semibold mb-2">
                    <Calendar size={14} />
                    <span>2018 – 2019</span>
                  </div>
                  <h4 className="text-lg font-bold text-foreground">
                    SSC (Secondary Education)
                  </h4>
                  <p className="text-muted-foreground mt-1">
                    Gowtham Model School
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
