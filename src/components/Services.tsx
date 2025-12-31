import { 
  BarChart3, 
  Database, 
  LineChart, 
  FileSpreadsheet, 
  Cpu,
  ArrowUpRight,
  Sparkles
} from 'lucide-react';

const services = [
  {
    title: 'Data Analysis & Reporting',
    description: 'Transforming raw data into meaningful insights with comprehensive reports and actionable recommendations.',
    icon: BarChart3,
    color: 'from-accent to-cyan-500',
  },
  {
    title: 'SQL Database Analysis',
    description: 'Query optimization, structured data exploration, and database design for efficient data management.',
    icon: Database,
    color: 'from-violet-500 to-purple-500',
  },
  {
    title: 'Power BI Dashboards',
    description: 'Interactive visual dashboards for business intelligence, enabling data-driven decision making.',
    icon: LineChart,
    color: 'from-amber-500 to-orange-500',
  },
  {
    title: 'Excel-Based Analytics',
    description: 'Advanced Excel reporting, pivot tables, VLOOKUPs, and complex data analysis solutions.',
    icon: FileSpreadsheet,
    color: 'from-green-500 to-emerald-500',
  },
  {
    title: 'AI-Assisted Insights',
    description: 'Leveraging AI tools to enhance analytical workflows and uncover deeper patterns in data.',
    icon: Cpu,
    color: 'from-pink-500 to-rose-500',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,hsl(var(--accent)/0.03),transparent_60%)]" />
      
      <div className="section-container relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20">
            <Sparkles className="inline-block mr-2" size={14} />
            What I Offer
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Services & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive data solutions tailored to your business needs
          </p>
        </div>
        
        {/* Services Grid - Bento style */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className={`group relative bg-card rounded-3xl border border-border overflow-hidden card-hover ${
                index === 0 ? 'lg:col-span-2 lg:row-span-1' : ''
              }`}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              <div className={`p-8 ${index === 0 ? 'lg:flex lg:items-center lg:gap-8' : ''}`}>
                <div className={`mb-6 ${index === 0 ? 'lg:mb-0' : ''}`}>
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon size={28} />
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                      {service.title}
                    </h3>
                    <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-muted-foreground group-hover:bg-accent group-hover:text-accent-foreground transition-all opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0">
                      <ArrowUpRight size={16} />
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
              
              {/* Bottom accent line */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
