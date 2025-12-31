import { 
  BarChart3, 
  Database, 
  LineChart, 
  FileSpreadsheet, 
  Cpu,
  ArrowRight
} from 'lucide-react';

const services = [
  {
    title: 'Data Analysis & Reporting',
    description: 'Transforming raw data into meaningful insights with comprehensive reports and actionable recommendations.',
    icon: BarChart3,
  },
  {
    title: 'SQL Database Analysis',
    description: 'Query optimization, structured data exploration, and database design for efficient data management.',
    icon: Database,
  },
  {
    title: 'Power BI Dashboards',
    description: 'Interactive visual dashboards for business intelligence, enabling data-driven decision making.',
    icon: LineChart,
  },
  {
    title: 'Excel-Based Analytics',
    description: 'Advanced Excel reporting, pivot tables, VLOOKUPs, and complex data analysis solutions.',
    icon: FileSpreadsheet,
  },
  {
    title: 'AI-Assisted Data Insights',
    description: 'Leveraging AI tools to enhance analytical workflows and uncover deeper patterns in data.',
    icon: Cpu,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 md:py-28 bg-secondary/30">
      <div className="section-container">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
              What I Offer
            </span>
            <h2 className="section-title mb-0">
              Services & <span className="gradient-text">Expertise</span>
            </h2>
          </div>
          <p className="section-subtitle md:text-right max-w-md">
            Comprehensive data solutions tailored to your business needs
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="group bg-card p-8 rounded-2xl border border-border card-hover"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-6 group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                <service.icon size={28} />
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
              
              <div className="mt-6 flex items-center gap-2 text-accent font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                <span>Learn More</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
