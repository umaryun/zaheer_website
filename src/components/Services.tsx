import {
  ShieldCheck,
  Trash2,
  Sparkles,
  Factory,
  Bug,
} from "lucide-react";

const services = [
  {
    icon: ShieldCheck,
    label: "Hospital Cleaning\n& Disinfection",
    color: "bg-white",
  },
  {
    icon: Trash2,
    label: "Waste\nManagement",
    color: "bg-white",
  },
  {
    icon: Sparkles,
    label: "Janitorial Services",
    color: "bg-gold",
  },
  {
    icon: Factory,
    label: "Factory\nMaintenance",
    color: "bg-white",
  },
  {
    icon: Bug,
    label: "Deep Cleaning &\nFumigation",
    color: "bg-white",
  },
];

export function Services() {
  return (
    <section className="py-12 px-6 sm:px-10 lg:px-16 bg-navy">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-center text-xl font-bold text-white tracking-widest uppercase mb-10">
          Services
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 justify-items-center">
          {services.map((service) => (
            <div
              key={service.label}
              className="flex flex-col items-center gap-3"
            >
              <div
                className={`w-20 h-20 rounded-2xl ${service.color} flex items-center justify-center shadow-lg transition-transform hover:scale-105`}
              >
                <service.icon
                  className={`w-9 h-9 ${
                    service.color === "bg-gold"
                      ? "text-white"
                      : "text-navy"
                  }`}
                  strokeWidth={1.5}
                />
              </div>
              <p className="text-white text-[11px] text-center leading-tight whitespace-pre-line font-medium">
                {service.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
