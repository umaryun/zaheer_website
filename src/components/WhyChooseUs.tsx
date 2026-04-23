import { ShieldCheck, Hospital, Users, Scale, Clock } from "lucide-react";

const reasons = [
  { icon: ShieldCheck, text: "Infection Control Trained Staff" },
  { icon: Hospital, text: "Hospital-Specific Cleaning Protocol" },
  { icon: Users, text: "Structured Supervision Model" },
  { icon: Scale, text: "Compliance with Nigerian Healthcare standards" },
  { icon: Clock, text: "24/7 Availability" },
];

export function WhyChooseUs() {
  return (
    <section className="py-12 px-6 sm:px-10 lg:px-16">
      <div className="max-w-5xl mx-auto">
        {/* Outer rounded container */}
        <div className="relative overflow-hidden rounded-2xl shadow-xl min-h-[340px]">
          {/* Full-width background image */}
          <img
            src="/professional-cleaner.png"
            alt="Professional cleaner with supplies"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-black/10" />

          {/* Navy curved overlay on the left – gentle curve */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 1000 400"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="navyGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#1B2A4A" />
                <stop offset="50%" stopColor="#09005D" />
                <stop offset="100%" stopColor="#023265" />
              </linearGradient>
            </defs>
            <path
              d="M0,0 L520,0 Q600,200 520,400 L0,400 Z"
              fill="url(#navyGrad)"
              opacity="0.92"
            />
          </svg>

          {/* Content */}
          <div className="relative z-10 py-10 px-8 sm:px-12 max-w-[52%]">
            <h2 className="text-xl sm:text-2xl font-bold italic text-gold mb-7">
              Why Choose Us?
            </h2>
            <ul className="space-y-4">
              {reasons.map((reason) => (
                <li
                  key={reason.text}
                  className="flex items-center gap-3 text-white text-sm font-medium"
                >
                  <reason.icon className="w-5 h-5 text-white/80 flex-shrink-0" strokeWidth={1.5} />
                  <span>{reason.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
