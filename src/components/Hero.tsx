import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      id="home"
      className="relative w-full min-h-[420px] flex items-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero-bg.png')" }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/90 via-navy/80 to-navy/50" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-16 w-full">
        <div className="p-8 rounded-4xl bg-[#FFFFFF30] max-w-lg">
          <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white leading-tight mb-2">
            Clean Spaces, Safer
            <br />
            Environment,{" "}
            <span className="italic text-[#E8C86E]">
              Higher
              <br />
              Standards.
            </span>
          </h1>
          <p className="text-white text-sm mb-3">
            Setting the Standards in Professional Cleaning
          </p>
          <Button className="bg-[#023265CC] hover:bg-navy text-white text-xs px-6 py-2 rounded-lg font-extrabold ">
            BOOK NOW
          </Button>
        </div>
      </div>
    </section>
  );
}
