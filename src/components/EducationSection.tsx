import { GraduationCap, Award, Calendar } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "Midlands State University (MSU)",
    year: "2024",
    grade: "2.1 Class Honors",
    icon: GraduationCap,
  },
];

const certifications = [
  {
    name: "SQL Certificate",
    issuer: "Professional Certification",
    year: "2023",
    icon: Award,
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="section-padding bg-card/30">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-primary font-mono text-sm mb-2">My background</p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Education & <span className="gradient-text">Certifications</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Education */}
            <div>
              <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
                <GraduationCap className="text-primary" size={20} />
                Education
              </h3>
              {education.map((edu) => (
                <div
                  key={edu.degree}
                  className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <edu.icon className="text-primary" size={24} />
                  </div>
                  <h4 className="text-lg font-semibold mb-1">{edu.degree}</h4>
                  <p className="text-primary font-medium mb-2">{edu.institution}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="inline-flex items-center gap-1">
                      <Calendar size={14} />
                      {edu.year}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-primary/10 text-primary text-xs font-medium">
                      {edu.grade}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
                <Award className="text-primary" size={20} />
                Certifications
              </h3>
              {certifications.map((cert) => (
                <div
                  key={cert.name}
                  className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <cert.icon className="text-primary" size={24} />
                  </div>
                  <h4 className="text-lg font-semibold mb-1">{cert.name}</h4>
                  <p className="text-muted-foreground mb-2">{cert.issuer}</p>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Calendar size={14} />
                    {cert.year}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
