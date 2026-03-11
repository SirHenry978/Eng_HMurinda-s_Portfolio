import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    role: "Software Developer Graduate Trainee",
    company: "Melsoft Private Limited",
    period: "2024 - Present",
    location: "Zimbabwe",
    description: "Building enterprise-grade web applications and AI-powered solutions.",
    achievements: [
      "Designed and developed web-based management systems using PHP, Laravel, and CodeIgniter",
      "Built and maintained school management modules including student fees, examinations, homework, library, and reporting systems",
      "Implemented financial reporting modules such as Income Statement, Trial Balance, General Ledger, and Balance Sheet",
      "Developed AJAX-powered features to improve system performance and enhance user experience",
      "Created dynamic reporting systems including Age Analysis, Outstanding Fee Reports, and Rent Collection Reports",
      "Integrated database-driven dashboards to display real-time financial and operational data",
      "Designed and optimized MySQL database structures for better performance and data integrity",
      "Developed RESTful APIs and backend services to support modern web applications",
      "Implemented secure authentication systems and role-based access control for different user levels",
      "Deployed and maintained web applications on cPanel hosting environments with HTTPS security",
      "Developed AI chatbots for automated customer support and lead generation",
      "Collaborated with clients to gather requirements and transform them into scalable software solutions",
      "Built enterprise web systems using Laravel, React, Vue.js, Flutter (mobile), and C# (desktop)",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <div className="w-full">
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
            <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent" />

            {experiences.map((exp) => (
              <div
                key={exp.role}
                className="relative pl-10 mb-12"
              >
                {/* Timeline Dot */}
                <div
                  className="absolute left-0 w-4 h-4 rounded-full bg-primary border-4 border-background transform -translate-x-1/2 animate-pulse-glow"
                  style={{ top: "6px" }}
                />

                {/* Content Card */}
                <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300">
                  {/* Header */}
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold text-foreground mb-1">
                      {exp.role}
                    </h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                  </div>

                  {/* Meta */}
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
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
                  <p className="text-muted-foreground mb-4">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
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
