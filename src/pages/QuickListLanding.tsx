import { Bot, MessageSquare, Zap, Shield, ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const QuickListLanding = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/5 to-transparent" />
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <Bot size={20} />
              <span className="text-sm font-medium">AI-Powered Customer Support</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">QuickList</span> Chatbot
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              An intelligent AI chatbot that automates customer support and business inquiries. 
              Reduce response time and improve customer satisfaction with 24/7 automated assistance.
            </p>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="p-6 rounded-xl bg-card border border-border">
              <MessageSquare className="text-primary mb-4" size={32} />
              <h3 className="text-lg font-semibold mb-2">Smart Conversations</h3>
              <p className="text-muted-foreground text-sm">
                Natural language processing for human-like interactions with customers.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-card border border-border">
              <Zap className="text-primary mb-4" size={32} />
              <h3 className="text-lg font-semibold mb-2">Instant Responses</h3>
              <p className="text-muted-foreground text-sm">
                Lightning-fast response times to keep your customers engaged.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-card border border-border">
              <Shield className="text-primary mb-4" size={32} />
              <h3 className="text-lg font-semibold mb-2">Secure & Reliable</h3>
              <p className="text-muted-foreground text-sm">
                Enterprise-grade security with 99.9% uptime guarantee.
              </p>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="text-center mb-12">
            <p className="text-sm text-muted-foreground mb-4">Built with</p>
            <div className="flex flex-wrap justify-center gap-3">
              {["Python", "Django", "React.js", "REST API", "NLP", "AI/ML"].map((tech) => (
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
                  onClick={() => window.open('https://melsoftzim.co.zw/quicklist/login', '_blank')}
                >
                  <ExternalLink size={18} />
                  Admin Login
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full gap-2" 
                  size="lg"
                  onClick={() => window.open('https://melsoftzim.co.zw/quicklist/user', '_blank')}
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

export default QuickListLanding;
