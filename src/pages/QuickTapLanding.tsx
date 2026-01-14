import { Zap, Users, TrendingUp, BarChart3, ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const QuickTapLanding = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-cyan-500/5 to-transparent" />
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <Zap size={20} />
              <span className="text-sm font-medium">Lead Generation AI</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">QuickTap</span> Chatbot
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              A conversational AI system designed for fast customer engagement and lead generation. 
              Intelligent automation that drives business growth and captures opportunities 24/7.
            </p>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="p-6 rounded-xl bg-card border border-border">
              <Users className="text-primary mb-4" size={32} />
              <h3 className="text-lg font-semibold mb-2">Lead Capture</h3>
              <p className="text-muted-foreground text-sm">
                Automatically qualify and capture leads with intelligent conversation flows.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-card border border-border">
              <TrendingUp className="text-primary mb-4" size={32} />
              <h3 className="text-lg font-semibold mb-2">Growth Automation</h3>
              <p className="text-muted-foreground text-sm">
                Scale your outreach without increasing headcount or costs.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-card border border-border">
              <BarChart3 className="text-primary mb-4" size={32} />
              <h3 className="text-lg font-semibold mb-2">Analytics Dashboard</h3>
              <p className="text-muted-foreground text-sm">
                Track conversions, engagement metrics, and ROI in real-time.
              </p>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="text-center mb-12">
            <p className="text-sm text-muted-foreground mb-4">Built with</p>
            <div className="flex flex-wrap justify-center gap-3">
              {["React.js", "Node.js", "Python", "Django", "REST API", "AI Automation"].map((tech) => (
                <span key={tech} className="px-3 py-1 rounded-full bg-secondary text-sm font-mono">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Login Portal */}
          <div className="max-w-md mx-auto">
            <div className="p-8 rounded-2xl bg-card border border-border shadow-xl">
              <h2 className="text-2xl font-bold text-center mb-6">Access Portal</h2>
              <div className="space-y-4">
                <Button 
                  className="w-full gap-2" 
                  size="lg"
                  onClick={() => window.open('https://melsoftzim.co.zw/quicktap/login', '_blank')}
                >
                  <ExternalLink size={18} />
                  Admin Login
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full gap-2" 
                  size="lg"
                  onClick={() => window.open('https://melsoftzim.co.zw/quicktap/user', '_blank')}
                >
                  <ArrowRight size={18} />
                  User Portal
                </Button>
              </div>
              <p className="text-center text-xs text-muted-foreground mt-6">
                Contact admin for demo credentials
              </p>
            </div>
          </div>

          {/* Back Link */}
          <div className="text-center mt-12">
            <a href="/#projects" className="text-primary hover:underline inline-flex items-center gap-1">
              ← Back to Portfolio
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QuickTapLanding;
