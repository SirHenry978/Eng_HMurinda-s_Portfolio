import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border bg-card/50">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold gradient-text">HNM</span>
            <span className="text-muted-foreground">|</span>
            <span className="text-sm text-muted-foreground">Software Engineer</span>
          </div>

          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Built with <Heart size={14} className="text-primary" /> by Henry Nyasha Murinda
          </p>

          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
