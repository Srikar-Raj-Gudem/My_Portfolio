import { ExternalLink, Database, BarChart, ArrowRight } from 'lucide-react';
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
    color: 'from-accent to-cyan-500',
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
    color: 'from-amber-500 to-orange-500',
    comingSoon: true,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 md:py-28 bg-background">
      <div className="section-container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
            Portfolio
          </span>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Real-world data analysis projects demonstrating problem-solving skills and technical expertise
          </p>
        </div>
        
        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="group bg-card rounded-2xl border border-border overflow-hidden card-hover"
            >
              {/* Project Header */}
              <div className={`h-48 bg-gradient-to-br ${project.color} p-6 flex flex-col justify-between relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/10" />
                <div className="relative z-10">
                  <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-medium">
                    {project.category}
                  </span>
                </div>
                <div className="relative z-10 flex items-end justify-between">
                  <project.icon className="text-white/90" size={48} />
                  {project.comingSoon && (
                    <span className="px-3 py-1 bg-white/90 text-foreground rounded-full text-xs font-semibold">
                      Coming Soon
                    </span>
                  )}
                </div>
              </div>
              
              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                
                {/* Highlights */}
                <ul className="space-y-2 mb-6">
                  {project.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <ArrowRight size={14} className="text-accent" />
                      {highlight}
                    </li>
                  ))}
                </ul>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-3 py-1 bg-secondary text-sm rounded-full text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* More Projects CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            More projects and dashboards coming soon!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
