import { CheckCircle } from "lucide-react";

const reasons = [
  "Infection Control Trained Staff",
  "Hospital-Specific Cleaning Protocol",
  "Structured Supervision Model",
  "Compliance with Nigerian Healthcare standards",
  "24/7 Availability",
];

export function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Left: Content */}
        <div className="bg-gradient-to-br from-navy via-navy-dark to-navy-light py-14 px-8 sm:px-12 lg:px-16 flex flex-col justify-center">
          <h2 className="text-xl sm:text-2xl font-bold text-gold mb-8">
            Why Choose Us?
          </h2>
          <ul className="space-y-4">
            {reasons.map((reason) => (
              <li
                key={reason}
                className="flex items-center gap-3 text-white text-sm"
              >
                <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                <span>{reason}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Image */}
        <div className="relative min-h-[300px] md:min-h-0">
          <img
            src="/professional-cleaner.png"
            alt="Professional cleaner"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/30 to-transparent" />
        </div>
      </div>
    </section>
  );
}
