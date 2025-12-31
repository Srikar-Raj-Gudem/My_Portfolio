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
  Award
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
  { name: 'Business Intelligence', icon: Lightbulb },
  { name: 'Customer Behavior Analysis', icon: Users },
  { name: 'Inventory Management', icon: Package },
  { name: 'Revenue Analysis', icon: DollarSign },
  { name: 'Data-Driven Decision Making', icon: TrendingUp },
];

const certifications = [
  'Freedom with AI Masterclass',
  'SQL Micro Course',
  'Microsoft Excel (Self Learning)',
  'Power BI Micro Course',
  'PostgreSQL',
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 md:py-28 bg-secondary/30">
      <div className="section-container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
            Skills & Expertise
          </span>
          <h2 className="section-title">
            Technical <span className="gradient-text">Proficiencies</span>
          </h2>
          <p className="section-subtitle mx-auto">
            A comprehensive toolkit for transforming data into actionable business insights
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Technical Skills */}
          <div>
            <h3 className="text-xl font-bold text-foreground mb-8">Technical Skills</h3>
            <div className="space-y-6">
              {technicalSkills.map((skill) => (
                <div key={skill.name} className="group">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
                        <skill.icon size={20} />
                      </div>
                      <span className="font-medium text-foreground">{skill.name}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-accent rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Focus Areas & Certifications */}
          <div className="space-y-12">
            {/* Focus Areas */}
            <div>
              <h3 className="text-xl font-bold text-foreground mb-6">Analytical Focus Areas</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {focusAreas.map((area) => (
                  <div 
                    key={area.name} 
                    className="flex items-center gap-3 p-4 bg-background rounded-xl border border-border card-hover"
                  >
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                      <area.icon size={20} />
                    </div>
                    <span className="font-medium text-foreground text-sm">{area.name}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Certifications */}
            <div>
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Award className="text-accent" size={24} />
                Certifications
              </h3>
              <div className="flex flex-wrap gap-3">
                {certifications.map((cert) => (
                  <span 
                    key={cert} 
                    className="skill-badge"
                  >
                    {cert}
                  </span>
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
