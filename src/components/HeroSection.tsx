import { ArrowDown, Download, Mail, ExternalLink } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Effects */}
      <div
        className="absolute inset-0 opacity-40"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "-3s" }} />

      <div className="container-custom relative z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Greeting */}
          <p className="text-primary font-mono text-sm md:text-base mb-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Hello, I'm
          </p>

          {/* Profile Picture */}
          <div className="flex justify-center mb-6 animate-fade-in" style={{ animationDelay: "0.25s" }}>
            <div className="relative group cursor-pointer">
              {/* Glowing ring animation */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-primary/50 to-primary animate-spin-slow opacity-75 blur-md scale-110 group-hover:opacity-100 group-hover:scale-125 transition-all duration-300" />
              <div className="absolute inset-0 rounded-full animate-pulse-glow" />
              <Avatar className="relative h-32 w-32 md:h-40 md:w-40 border-4 border-primary/50 shadow-xl shadow-primary/25 transition-transform duration-300 group-hover:scale-110">
                <AvatarImage src={`${import.meta.env.BASE_URL}profile.png`} alt="Henry Nyasha Murinda" className="object-cover scale-110" />
                <AvatarFallback className="bg-primary/20 text-primary text-3xl md:text-4xl font-bold">HNM</AvatarFallback>
              </Avatar>
            </div>
          </div>

          {/* Name */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            Henry Nyasha{" "}
            <span className="gradient-text">Murinda</span>
          </h1>

          {/* Title */}
          <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-muted-foreground mb-6 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            Software Engineer
          </h2>

          {/* Description */}
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in" style={{ animationDelay: "0.5s" }}>
            I am a results-driven software engineer with two years of experience 
            building scalable web and software systems. Passionate about creating 
            elegant solutions to complex problems.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
            >
              View Projects
              <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href={`${import.meta.env.BASE_URL}cv.pdf`}
              download
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-primary text-primary font-medium hover:bg-primary/10 transition-all duration-300"
            >
              Download CV
              <Download size={18} className="group-hover:translate-y-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-medium hover:border-primary hover:text-primary transition-all duration-300"
            >
              Contact Me
              <Mail size={18} />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
