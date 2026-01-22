import { Code2, Database, Bot, Briefcase } from "lucide-react";

const highlights = [
  {
    icon: Briefcase,
    label: "Experience",
    value: "2+ Years",
  },
  {
    icon: Code2,
    label: "Specialty",
    value: "Full-Stack",
  },
  {
    icon: Database,
    label: "Certification",
    value: "SQL Certified",
  },
  {
    icon: Bot,
    label: "Focus",
    value: "AI Chatbots",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-card/30">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-primary font-mono text-sm mb-2">Get to know me</p>
            <h2 className="text-3xl md:text-4xl font-bold">
              About <span className="gradient-text">Me</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a <span className="text-primary font-medium">full-stack software engineer</span> specializing 
                in backend systems, web applications, and AI-powered chatbots. With a 
                strong foundation in computer science and hands-on experience building 
                enterprise solutions, I bring both technical expertise and creative 
                problem-solving to every project.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I hold a <span className="text-foreground font-medium">Bachelor of Science in Computer Science</span> with 
                2.1 Class Honors from Midlands State University. My journey in software 
                engineering has equipped me with strong problem-solving abilities and 
                system design skills that I apply to create efficient, scalable solutions.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Whether it's designing robust APIs, building intuitive user interfaces, 
                or implementing intelligent automation systems, I'm passionate about 
                leveraging technology to solve real-world problems and deliver 
                exceptional user experiences.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={item.label}
                  className="group p-6 rounded-xl bg-secondary/50 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="text-primary" size={24} />
                  </div>
                  <p className="text-2xl font-bold text-foreground mb-1">{item.value}</p>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
