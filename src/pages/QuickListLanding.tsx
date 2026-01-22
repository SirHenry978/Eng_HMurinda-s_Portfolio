import { MessageSquare, Car, Home, CreditCard, Crown, Users, Shield, ArrowRight, ExternalLink } from "lucide-react";
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
              <MessageSquare size={20} />
              <span className="text-sm font-medium">WhatsApp Marketplace Chatbot</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">QuickList</span> Chatbot
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              A WhatsApp chatbot marketplace for customers, agents, and dealers to buy and sell 
              cars, properties, land, and services. Features in-chat payments, premium subscriptions, 
              and comprehensive admin management.
            </p>
          </div>

          {/* What You Can Trade */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="p-4 rounded-xl bg-card border border-border text-center">
              <Car className="mx-auto text-primary mb-2" size={28} />
              <h4 className="font-medium text-sm">Cars</h4>
            </div>
            <div className="p-4 rounded-xl bg-card border border-border text-center">
              <Home className="mx-auto text-primary mb-2" size={28} />
              <h4 className="font-medium text-sm">Properties</h4>
            </div>
            <div className="p-4 rounded-xl bg-card border border-border text-center">
              <svg className="mx-auto text-primary mb-2" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 21h18M9 8h1M9 12h1M9 16h1M14 8h1M14 12h1M14 16h1M5 21V5a2 2 0 012-2h10a2 2 0 012 2v16"/>
              </svg>
              <h4 className="font-medium text-sm">Land</h4>
            </div>
            <div className="p-4 rounded-xl bg-card border border-border text-center">
              <Shield className="mx-auto text-primary mb-2" size={28} />
              <h4 className="font-medium text-sm">Services</h4>
            </div>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="p-6 rounded-xl bg-card border border-border">
              <CreditCard className="text-primary mb-4" size={32} />
              <h3 className="text-lg font-semibold mb-2">In-Chat Payments</h3>
              <p className="text-muted-foreground text-sm">
                Secure payment processing directly within WhatsApp conversations.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-card border border-border">
              <Crown className="text-primary mb-4" size={32} />
              <h3 className="text-lg font-semibold mb-2">Premium Subscriptions</h3>
              <p className="text-muted-foreground text-sm">
                Unlock premium features with subscription plans for dealers and agents.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-card border border-border">
              <Users className="text-primary mb-4" size={32} />
              <h3 className="text-lg font-semibold mb-2">User Management</h3>
              <p className="text-muted-foreground text-sm">
                Admin dashboard for managing customers, agents, dealers, and listings.
              </p>
            </div>
          </div>

          {/* User Types */}
          <div className="grid md:grid-cols-3 gap-4 mb-12">
            <div className="p-4 rounded-lg bg-secondary/50 text-center">
              <Users className="mx-auto text-primary mb-2" size={24} />
              <h4 className="font-medium">Customers</h4>
              <p className="text-xs text-muted-foreground">Browse & buy listings</p>
            </div>
            <div className="p-4 rounded-lg bg-secondary/50 text-center">
              <Crown className="mx-auto text-primary mb-2" size={24} />
              <h4 className="font-medium">Agents/Dealers</h4>
              <p className="text-xs text-muted-foreground">List & sell items</p>
            </div>
            <div className="p-4 rounded-lg bg-secondary/50 text-center">
              <Shield className="mx-auto text-primary mb-2" size={24} />
              <h4 className="font-medium">Admin</h4>
              <p className="text-xs text-muted-foreground">Manage platform</p>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="text-center mb-12">
            <p className="text-sm text-muted-foreground mb-4">Built with</p>
            <div className="flex flex-wrap justify-center gap-3">
              {["Python", "Django", "React.js", "WhatsApp API", "REST API", "Payment Gateway"].map((tech) => (
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
                  onClick={() => window.open('https://melsoftzim.co.zw/quicklist/admin', '_blank')}
                >
                  <ExternalLink size={18} />
                  Admin Login
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full gap-2" 
                  size="lg"
                  onClick={() => window.open('https://melsoftzim.co.zw/quicklist/dealer', '_blank')}
                >
                  <Crown size={18} />
                  Agent/Dealer Portal
                </Button>
                <Button 
                  variant="secondary" 
                  className="w-full gap-2" 
                  size="lg"
                  onClick={() => window.open('https://melsoftzim.co.zw/quicklist/user', '_blank')}
                >
                  <ArrowRight size={18} />
                  Customer Access
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
