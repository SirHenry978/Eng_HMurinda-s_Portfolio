import { Building2, GraduationCap, Scale, MessageSquare, Zap, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface ProjectLink {
  label: string;
  url: string;
}

const projects = [
  {
    title: "Real Estate Management System",
    description: "A full-stack system for managing properties, tenants, rent payments, and financial reports. Built with modern web technologies for seamless property management.",
    icon: Building2,
    tags: ["Laravel", "Vue.js", "MySQL", "REST API"],
    color: "from-cyan-500/20 to-blue-500/20",
    demoLinks: [
      { label: "View Demo", url: "https://melsoftzim.co.zw/vaulta/public" }
    ] as ProjectLink[],
    isExternal: true,
  },
  {
    title: "School Management System",
    description: "Comprehensive system handling student enrollment, fees, class records, attendance, and academic reports. Streamlines educational institution operations.",
    icon: GraduationCap,
    tags: ["CodeIgniter", "MySQL", "PHP", "Reports"],
    color: "from-blue-500/20 to-indigo-500/20",
    demoLinks: [
      { label: "Admin Portal", url: "https://melsoftzim.co.zw/mp/site/login" },
      { label: "Student/Parent Portal", url: "https://melsoftzim.co.zw/mp/site/userlogin" }
    ] as ProjectLink[],
    isExternal: true,
  },
  {
    title: "Legal Management System",
    description: "Tracks clients, legal cases, billing, documents, and case timelines. Designed for law firms to manage their practice efficiently.",
    icon: Scale,
    tags: ["Django", "Python", "SQL", "Documents"],
    color: "from-indigo-500/20 to-purple-500/20",
    demoLinks: [
      { label: "View Demo", url: "https://melsoftzim.co.zw/prolex/public" }
    ] as ProjectLink[],
    isExternal: true,
  },
  {
    title: "QuickList Chatbot",
    description: "A WhatsApp chatbot marketplace for customers, agents, and dealers to buy and sell cars, properties, land, and services. Features in-chat payments and premium subscriptions.",
    icon: MessageSquare,
    tags: ["Python", "Django", "WhatsApp API", "Payments"],
    color: "from-purple-500/20 to-pink-500/20",
    demoLinks: [
      { label: "View Project", url: "/quicklist" }
    ] as ProjectLink[],
    isExternal: false,
  },
  {
    title: "QuickTap Chatbot",
    description: "A chatbot for commuter operators, conductors, and passengers enabling in-chat fare payments. Seamless cashless transit solution for public transport.",
    icon: Zap,
    tags: ["React", "Django", "Payments", "REST API"],
    color: "from-pink-500/20 to-cyan-500/20",
    demoLinks: [
      { label: "View Project", url: "/quicktap" }
    ] as ProjectLink[],
    isExternal: false,
  },
];

const ProjectsSection = () => {
  const navigate = useNavigate();

  const handleDemoClick = (link: ProjectLink, isExternal: boolean) => {
    if (isExternal) {
      window.open(link.url, '_blank');
    } else {
      navigate(link.url);
    }
  };

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

                  {/* Demo Links */}
                  <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-border/50">
                    {project.demoLinks.map((link) => (
                      <button
                        key={link.label}
                        onClick={() => handleDemoClick(link, project.isExternal)}
                        className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        <ExternalLink size={16} />
                        <span>{link.label}</span>
                      </button>
                    ))}
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
