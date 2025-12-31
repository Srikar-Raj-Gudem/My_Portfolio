import { GraduationCap, BookOpen } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-background">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* About Content */}
          <div>
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
              About Me
            </span>
            <h2 className="section-title mb-6">
              Passionate About <span className="gradient-text">Data-Driven</span> Solutions
            </h2>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                I'm <strong className="text-foreground">Srikar Raj Gudem</strong>, an aspiring Data Analyst with a B.Tech in Computer Science and Engineering. I am passionate about converting complex datasets into meaningful insights that help businesses understand customers, optimize revenue, and manage inventory effectively.
              </p>
              <p>
                With hands-on experience in database design, SQL querying, and analytical problem-solving, I enjoy tackling real-world business challenges using data-driven approaches.
              </p>
              <p>
                I'm continuously upskilling through certifications and practical projects, and I'm actively seeking opportunities in data analysis and business intelligence.
              </p>
            </div>
          </div>
          
          {/* Education Timeline */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
              <GraduationCap className="text-accent" size={28} />
              Education
            </h3>
            
            <div className="space-y-6">
              {/* B.Tech */}
              <div className="relative pl-8 border-l-2 border-accent/30 pb-6">
                <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] bg-accent rounded-full" />
                <div className="bg-secondary/50 rounded-xl p-6 card-hover">
                  <span className="text-accent text-sm font-semibold">2021 – 2025</span>
                  <h4 className="text-lg font-bold text-foreground mt-1">
                    B.Tech – Computer Science & Engineering
                  </h4>
                  <p className="text-muted-foreground mt-1">
                    Vignana Bharathi Institute of Technology
                  </p>
                </div>
              </div>
              
              {/* Intermediate */}
              <div className="relative pl-8 border-l-2 border-accent/30 pb-6">
                <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] bg-accent/70 rounded-full" />
                <div className="bg-secondary/50 rounded-xl p-6 card-hover">
                  <span className="text-accent text-sm font-semibold">2019 – 2021</span>
                  <h4 className="text-lg font-bold text-foreground mt-1">
                    Intermediate (MPC)
                  </h4>
                  <p className="text-muted-foreground mt-1">
                    Sri Chaitanya College of Education
                  </p>
                </div>
              </div>
              
              {/* SSC */}
              <div className="relative pl-8 border-l-2 border-transparent">
                <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] bg-accent/50 rounded-full" />
                <div className="bg-secondary/50 rounded-xl p-6 card-hover">
                  <span className="text-accent text-sm font-semibold">2018 – 2019</span>
                  <h4 className="text-lg font-bold text-foreground mt-1">
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
