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
        <div className="relative overflow-hidden
         rounded-2xl shadow-xl min-h-[340px] flex">
          <div className="left-0 h-full absolute z-10 w-[55%] bg-[#163557] rounded-r-full flex flex-col items-center justify-center">
            <h2 className="text-xl sm:text-2xl font-bold italic text-gold -ml-20 mb-7">
              Why Choose Us?
            </h2>
            <ul className="space-y-4">
              {reasons.map((reason) => (
                <li
                  key={reason.text}
                  className="flex items-center gap-3 text-white text-sm font-medium"
                >
                  <reason.icon className="w-5 h-5 text-white/80 shrink-0" strokeWidth={2.5} />
                  <span>{reason.text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-[50%] bg-[#163557]">

          </div>
          <div className="w-full">
            <img
              src="/professional-cleaner.png"
              alt="Professional cleaner with supplies"
              className="w-full h-85 object-cover opacity-80"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
