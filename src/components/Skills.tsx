import { 
  Database, 
  FileSpreadsheet, 
  BarChart3, 
  Code2, 
  Cpu, 
  TrendingUp,
  Users,
  Package,
  DollarSign,
  Lightbulb,
  Award,
  Zap
} from 'lucide-react';

const technicalSkills = [
  { name: 'Data Analysis', icon: TrendingUp, level: 90 },
  { name: 'SQL & PostgreSQL', icon: Database, level: 88 },
  { name: 'Microsoft Excel', icon: FileSpreadsheet, level: 92 },
  { name: 'Power BI', icon: BarChart3, level: 85 },
  { name: 'Python', icon: Code2, level: 75 },
  { name: 'AI Tools', icon: Cpu, level: 80 },
];

const focusAreas = [
  { name: 'Business Intelligence', icon: Lightbulb, description: 'Strategic insights' },
  { name: 'Customer Analytics', icon: Users, description: 'Behavior patterns' },
  { name: 'Inventory Management', icon: Package, description: 'Stock optimization' },
  { name: 'Revenue Analysis', icon: DollarSign, description: 'Growth metrics' },
];

const certifications = [
  { name: 'Freedom with AI Masterclass', issuer: 'AI Academy' },
  { name: 'SQL Micro Course', issuer: 'Online Platform' },
  { name: 'Microsoft Excel', issuer: 'Self Learning' },
  { name: 'Power BI Micro Course', issuer: 'Microsoft' },
  { name: 'PostgreSQL', issuer: 'Database Academy' },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--accent)/0.05),transparent_50%)]" />
      
      <div className="section-container relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20">
            Skills & Expertise
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Technical <span className="gradient-text">Proficiencies</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A comprehensive toolkit for transforming data into actionable business insights
          </p>
        </div>
        
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Technical Skills - 7 columns */}
          <div className="lg:col-span-7">
            <div className="bg-card rounded-2xl p-8 border border-border shadow-soft">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                  <Zap size={20} />
                </div>
                <h3 className="text-xl font-bold text-foreground">Technical Skills</h3>
              </div>
              
              <div className="space-y-6">
                {technicalSkills.map((skill) => (
                  <div key={skill.name} className="group">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
                          <skill.icon size={18} />
                        </div>
                        <span className="font-semibold text-foreground">{skill.name}</span>
                      </div>
                      <span className="text-sm font-bold text-accent">{skill.level}%</span>
                    </div>
                    <div className="h-2.5 bg-secondary rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-accent rounded-full transition-all duration-1000 ease-out relative"
                        style={{ width: `${skill.level}%` }}
                      >
                        <div className="absolute inset-0 bg-white/20 animate-pulse" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Focus Areas & Certifications - 5 columns */}
          <div className="lg:col-span-5 space-y-8">
            {/* Focus Areas */}
            <div className="bg-card rounded-2xl p-8 border border-border shadow-soft">
              <h3 className="text-xl font-bold text-foreground mb-6">Analytical Focus</h3>
              <div className="grid grid-cols-2 gap-4">
                {focusAreas.map((area) => (
                  <div 
                    key={area.name} 
                    className="group p-4 bg-secondary/50 rounded-xl border border-border hover:border-accent hover:bg-accent/5 transition-all duration-300 cursor-default"
                  >
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent mb-3 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                      <area.icon size={20} />
                    </div>
                    <h4 className="font-semibold text-foreground text-sm mb-1">{area.name}</h4>
                    <p className="text-xs text-muted-foreground">{area.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Certifications */}
            <div className="bg-gradient-to-br from-accent/10 via-cyan-400/5 to-transparent rounded-2xl p-8 border border-accent/20">
              <div className="flex items-center gap-3 mb-6">
                <Award className="text-accent" size={24} />
                <h3 className="text-xl font-bold text-foreground">Certifications</h3>
              </div>
              <div className="space-y-3">
                {certifications.map((cert) => (
                  <div 
                    key={cert.name} 
                    className="flex items-center justify-between p-3 bg-background/80 rounded-lg border border-border"
                  >
                    <span className="font-medium text-foreground text-sm">{cert.name}</span>
                    <span className="text-xs text-muted-foreground">{cert.issuer}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
