import { ExternalLink, Database, BarChart, ArrowUpRight, Layers, GitBranch } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'SQL Online Bookstore Database',
    category: 'Database Design',
    description: 'Designed and queried a comprehensive online bookstore database focusing on inventory management, customer behavior analysis, and sales insights.',
    highlights: [
      'Inventory management optimization',
      'Customer behavior analysis',
      'Sales insights & reporting',
      'Query optimization techniques',
    ],
    tags: ['SQL', 'PostgreSQL', 'Database Design', 'Analytics'],
    icon: Database,
    gradient: 'from-accent via-cyan-500 to-teal-400',
    bgPattern: 'radial-gradient(circle at 20% 80%, hsl(var(--accent)/0.3), transparent 40%)',
  },
  {
    title: 'Power BI Sales Dashboard',
    category: 'Business Intelligence',
    description: 'Interactive dashboard showcasing sales performance metrics, trends, and KPIs for executive decision-making.',
    highlights: [
      'Real-time data visualization',
      'Interactive filtering & drill-down',
      'KPI tracking & monitoring',
      'Executive summary reports',
    ],
    tags: ['Power BI', 'Data Visualization', 'DAX', 'ETL'],
    icon: BarChart,
    gradient: 'from-amber-500 via-orange-500 to-red-400',
    bgPattern: 'radial-gradient(circle at 80% 20%, rgba(251,146,60,0.3), transparent 40%)',
    comingSoon: true,
  },
];

const stats = [
  { value: '5+', label: 'Projects Completed' },
  { value: '1000+', label: 'SQL Queries Written' },
  { value: '10+', label: 'Dashboards Built' },
  { value: '100%', label: 'Dedication' },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 md:py-32 bg-secondary/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl" />
      
      <div className="section-container relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div>
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20">
              Portfolio
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Featured <span className="gradient-text">Projects</span>
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-md lg:text-right">
            Real-world data analysis projects demonstrating problem-solving skills
          </p>
        </div>
        
        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {projects.map((project) => (
            <div 
              key={project.title}
              className="group bg-card rounded-3xl border border-border overflow-hidden shadow-soft hover:shadow-card transition-all duration-500"
            >
              {/* Project Header with gradient */}
              <div 
                className="h-56 relative overflow-hidden"
                style={{ background: project.bgPattern }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-90`} />
                
                {/* Decorative elements */}
                <div className="absolute inset-0">
                  <div className="absolute top-4 left-4 w-20 h-20 border border-white/20 rounded-full" />
                  <div className="absolute bottom-8 right-8 w-32 h-32 border border-white/10 rounded-full" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <project.icon className="text-white/30" size={120} strokeWidth={0.5} />
                  </div>
                </div>
                
                <div className="relative z-10 p-6 h-full flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <span className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                      {project.category}
                    </span>
                    {project.comingSoon ? (
                      <span className="px-4 py-1.5 bg-white text-foreground rounded-full text-sm font-semibold">
                        Coming Soon
                      </span>
                    ) : (
                      <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white group-hover:bg-white group-hover:text-foreground transition-colors cursor-pointer">
                        <ArrowUpRight size={20} />
                      </div>
                    )}
                  </div>
                  
                  <div>
                    <project.icon className="text-white mb-3" size={40} />
                  </div>
                </div>
              </div>
              
              {/* Project Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Highlights as a grid */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {project.highlights.map((highlight) => (
                    <div key={highlight} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {highlight}
                    </div>
                  ))}
                </div>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-3 py-1.5 bg-secondary text-sm rounded-lg text-muted-foreground font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <div 
              key={stat.label} 
              className="bg-card rounded-2xl p-6 border border-border text-center card-hover"
            >
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
