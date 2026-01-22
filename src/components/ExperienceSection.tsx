import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    role: "Software Engineer",
    company: "Professional Experience",
    period: "2022 - Present",
    location: "Zimbabwe",
    description: "Building enterprise-grade web applications and AI-powered solutions.",
    achievements: [
      "Built enterprise web systems using Laravel, React, and Vue.js",
      "Designed and implemented RESTful APIs for seamless data integration",
      "Integrated and optimized SQL databases for performance and scalability",
      "Developed AI chatbots for automated customer support and lead generation",
      "Managed Git-based version control and collaborative development workflows",
      "Delivered multiple full-stack projects from conception to deployment",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-primary font-mono text-sm mb-2">My journey</p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Work <span className="gradient-text">Experience</span>
            </h2>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent transform md:-translate-x-1/2" />

            {experiences.map((exp, index) => (
              <div
                key={exp.role}
                className={`relative pl-8 md:pl-0 mb-12 ${
                  index % 2 === 0 ? "md:pr-[50%] md:text-right" : "md:pl-[50%]"
                }`}
              >
                {/* Timeline Dot */}
                <div
                  className={`absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background transform md:-translate-x-1/2 animate-pulse-glow`}
                  style={{ top: "6px" }}
                />

                {/* Content Card */}
                <div
                  className={`p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 ${
                    index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                  }`}
                >
                  {/* Header */}
                  <div className={`mb-4 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                    <h3 className="text-xl font-semibold text-foreground mb-1">
                      {exp.role}
                    </h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                  </div>

                  {/* Meta */}
                  <div
                    className={`flex flex-wrap gap-4 text-sm text-muted-foreground mb-4 ${
                      index % 2 === 0 ? "md:justify-end" : ""
                    }`}
                  >
                    <span className="inline-flex items-center gap-1">
                      <Calendar size={14} />
                      {exp.period}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <MapPin size={14} />
                      {exp.location}
                    </span>
                  </div>

                  {/* Description */}
                  <p
                    className={`text-muted-foreground mb-4 ${
                      index % 2 === 0 ? "md:text-right" : ""
                    }`}
                  >
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <ul className={`space-y-2 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                    {exp.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        className={`flex items-start gap-2 text-sm text-muted-foreground ${
                          index % 2 === 0 ? "md:flex-row-reverse" : ""
                        }`}
                      >
                        <Briefcase size={14} className="flex-shrink-0 text-primary mt-0.5" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
