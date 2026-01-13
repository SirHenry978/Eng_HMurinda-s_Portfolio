import { Building2, GraduationCap, Scale, MessageSquare, Zap, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Real Estate Management System",
    description: "A full-stack system for managing properties, tenants, rent payments, and financial reports. Built with modern web technologies for seamless property management.",
    icon: Building2,
    tags: ["Laravel", "Vue.js", "MySQL", "REST API"],
    color: "from-cyan-500/20 to-blue-500/20",
  },
  {
    title: "School Management System",
    description: "Comprehensive system handling student enrollment, fees, class records, attendance, and academic reports. Streamlines educational institution operations.",
    icon: GraduationCap,
    tags: ["PHP", "React", "PostgreSQL", "Reports"],
    color: "from-blue-500/20 to-indigo-500/20",
  },
  {
    title: "Legal Management System",
    description: "Tracks clients, legal cases, billing, documents, and case timelines. Designed for law firms to manage their practice efficiently.",
    icon: Scale,
    tags: ["Django", "Python", "SQL", "Documents"],
    color: "from-indigo-500/20 to-purple-500/20",
  },
  {
    title: "QuickList Chatbot",
    description: "An AI-powered chatbot that automates customer support and business inquiries. Reduces response time and improves customer satisfaction.",
    icon: MessageSquare,
    tags: ["Python", "AI/ML", "NLP", "API"],
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "QuickTap Chatbot",
    description: "A conversational AI system designed for fast customer engagement and lead generation. Intelligent automation for business growth.",
    icon: Zap,
    tags: ["React", "Node.js", "AI", "Automation"],
    color: "from-pink-500/20 to-cyan-500/20",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding bg-card/30">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-primary font-mono text-sm mb-2">My work</p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Featured <span className="gradient-text">Projects</span>
            </h2>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="group relative rounded-xl bg-card border border-border overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                <div className="relative z-10 p-6">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <project.icon className="text-primary" size={24} />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs font-mono rounded bg-secondary/80 text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4 pt-4 border-t border-border/50">
                    <button className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors">
                      <Github size={16} />
                      <span>Code</span>
                    </button>
                    <button className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors">
                      <ExternalLink size={16} />
                      <span>Demo</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
