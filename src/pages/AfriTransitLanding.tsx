import { ArrowLeft, Bus, CalendarClock, ChartNoAxesCombined, ShieldCheck, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import dashboard from "@/assets/afritransit/Screenshot_63-2.png";
import routes from "@/assets/afritransit/Screenshot_64.png";
import customers from "@/assets/afritransit/Screenshot_65.png";
import buses from "@/assets/afritransit/Screenshot_66.png";
import staff from "@/assets/afritransit/Screenshot_67.png";
import addStaff from "@/assets/afritransit/Screenshot_68.png";
import permissions from "@/assets/afritransit/Screenshot_69.png";
import accounting from "@/assets/afritransit/Screenshot_70.png";
import ledger from "@/assets/afritransit/Screenshot_71.png";
import reports from "@/assets/afritransit/Screenshot_76.png";

const gallery = [
  {
    image: dashboard,
    title: "Operations dashboard",
    description: "A clear overview of bookings, revenue, buses, routes, staff and customers.",
  },
  {
    image: routes,
    title: "Routes and timetables",
    description: "Create routes with fares, travel times, intermediate stops and assigned crews.",
  },
  {
    image: customers,
    title: "Customer management",
    description: "Review passenger accounts, booking activity and account status from one place.",
  },
  {
    image: buses,
    title: "Fleet management",
    description: "Register buses, capacity and vehicle details, including an identifying photo.",
  },
  {
    image: staff,
    title: "Staff users",
    description: "Manage employee accounts and assign operational roles to each team member.",
  },
  {
    image: addStaff,
    title: "Staff onboarding",
    description: "Create protected staff accounts for administrators, officers, drivers and conductors.",
  },
  {
    image: permissions,
    title: "Role permissions",
    description: "Control access by role so every staff member sees only the tools they need.",
  },
  {
    image: accounting,
    title: "Accounting overview",
    description: "Track income, expenses, refunds, invoices, receipts and outstanding fares.",
  },
  {
    image: ledger,
    title: "Payments ledger",
    description: "Review unpaid bookings and detailed transaction records for each reporting period.",
  },
  {
    image: reports,
    title: "Reports dashboard",
    description: "A consolidated reports view summarising bookings, customers, staff, buses, routes, invoices and receipts.",
  },
];

const features = [
  { icon: CalendarClock, title: "Booking operations", text: "Routes, timetables, seat bookings and customer records." },
  { icon: ShieldCheck, title: "Role-based access", text: "Separate permissions for admins, booking officers, drivers and conductors." },
  { icon: ChartNoAxesCombined, title: "Finance and reports", text: "Accounting, invoices, receipts, ledgers and operational reporting." },
  { icon: Users, title: "Staff and customers", text: "Central management for employees, passengers and their activity." },
];

const AfriTransitLanding = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
  <main className="min-h-screen bg-background">
    <section className="border-b border-border px-4 py-16 md:py-24">
      <div className="container-custom">
        <Button asChild variant="ghost" className="mb-10 -ml-4 gap-2">
          <Link to="/#projects"><ArrowLeft size={18} />Back to portfolio</Link>
        </Button>

        <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <div className="mb-5 flex items-center gap-3 text-primary">
              <Bus size={28} />
              <span className="font-mono text-sm">Bus booking and operations platform</span>
            </div>
            <h1 className="mb-6 text-4xl font-bold md:text-6xl">AfriTransit Pro</h1>
            <p className="mb-7 text-lg leading-8 text-muted-foreground">
              A complete bus booking system for passengers and transport teams. Customers can register, browse routes and timetables, choose seats and pay online, while staff manage daily operations through a secure portal.
            </p>
            <div className="flex flex-wrap gap-2">
              {["React", "Laravel", "MySQL", "Role Permissions"].map((tech) => (
                <span key={tech} className="rounded bg-secondary px-3 py-2 font-mono text-sm text-secondary-foreground">{tech}</span>
              ))}
            </div>
          </div>

          <figure className="overflow-hidden rounded-lg border border-border bg-card shadow-2xl">
            <img src={dashboard} alt="AfriTransit Pro staff dashboard" className="aspect-[16/9] w-full object-cover object-top" />
          </figure>
        </div>
      </div>
    </section>

    <section className="px-4 py-16 md:py-20">
      <div className="container-custom">
        <div className="mb-14 grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <article key={feature.title} className="bg-card p-6">
              <feature.icon className="mb-4 text-primary" size={28} />
              <h2 className="mb-2 text-lg font-semibold">{feature.title}</h2>
              <p className="text-sm leading-6 text-muted-foreground">{feature.text}</p>
            </article>
          ))}
        </div>

        <div className="mb-10 max-w-2xl">
          <p className="mb-2 font-mono text-sm text-primary">Real project screens</p>
          <h2 className="mb-3 text-3xl font-bold md:text-4xl">Inside the staff portal</h2>
          <p className="leading-7 text-muted-foreground">The platform brings bookings, fleet operations, people, permissions and finance together in one working system.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {gallery.map((item, index) => (
            <figure key={item.title} className={index === 0 ? "md:col-span-2" : ""}>
              <a href={item.image} target="_blank" rel="noreferrer" className="group block overflow-hidden rounded-lg border border-border bg-card">
                <img
                  src={item.image}
                  alt={`${item.title} in AfriTransit Pro`}
                  loading={index > 1 ? "lazy" : "eager"}
                  className="aspect-[16/9] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </a>
              <figcaption className="pt-4">
                <h3 className="mb-1 text-lg font-semibold">{item.title}</h3>
                <p className="text-sm leading-6 text-muted-foreground">{item.description}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  </main>
  );
};

export default AfriTransitLanding;