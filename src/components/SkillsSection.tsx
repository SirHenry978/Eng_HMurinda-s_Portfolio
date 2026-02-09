import { Server, Layout, Smartphone, Wrench, ShieldCheck, Cloud } from "lucide-react";

const skillCategories = [
  {
    title: "Backend",
    icon: Server,
    skills: ["Laravel", "PHP", "CodeIgniter", "Python", "Django"],
    color: "from-cyan-500 to-blue-600",
  },
  {
    title: "Frontend",
    icon: Layout,
    skills: ["React", "Vue.js", "HTML5", "CSS3", "Tailwind"],
    color: "from-blue-500 to-indigo-600",
  },
  {
    title: "Mobile",
    icon: Smartphone,
    skills: ["React Native", "Cross-Platform", "Mobile UI"],
    color: "from-indigo-500 to-purple-600",
  },
  {
    title: "Tools & Database",
    icon: Wrench,
    skills: ["Git", "GitHub", "SQL", "PostgreSQL", "REST APIs"],
    color: "from-purple-500 to-pink-600",
  },
  {
    title: "Enterprise Security",
    icon: ShieldCheck,
    skills: ["RBAC", "Audit Logs", "Soft Deletes", "Password Hashing", "Session Security"],
    color: "from-emerald-500 to-teal-600",
  },
  {
    title: "Deployment & Env",
    icon: Cloud,
    skills: ["cPanel", "VPS Setup", "HTTPS", "DB Migrations", "Backup Strategy"],
    color: "from-amber-500 to-orange-600",
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-primary font-mono text-sm mb-2">What I work with</p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Technical <span className="gradient-text">Skills</span>
            </h2>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className="group relative p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <category.icon className="text-primary" size={24} />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold mb-4">{category.title}</h3>

                  {/* Skills List */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Skills */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">Also experienced with</p>
            <div className="flex flex-wrap justify-center gap-3">
              {["Version Control", "Agile", "API Integration", "Database Design", "System Architecture", "Problem Solving"].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 text-sm font-medium rounded-lg border border-border text-muted-foreground hover:border-primary hover:text-primary transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
