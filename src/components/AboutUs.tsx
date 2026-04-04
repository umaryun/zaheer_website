import { Triangle } from "lucide-react";

export function AboutUs() {
  return (
    <section id="about" className="border py-16 px-6 sm:px-10 lg:px-16 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Image */}
        <div className="flex justify-center">
          <img
            src="/aboutimage.png"
            alt="Cleaning supplies"
            className="w-92 sm:w-90 object-cover" 
          />
        </div>

        {/* Right: Content */}
        <div> 
          <h2 className="pl-1 text-2xl sm:text-3xl font-bold text-[#09005D] mb-1">
            About Us
          </h2>
          <div className="h-[2px]  w-40 mb-2 bg-[#E8C86E]"/>
          <p className="text-sm leading-relaxed mb-6">
            Zaher Contracts is a professional cleaning and facility management
            company specializing in healthcare, corporate and institutional
            cleaning services.
          </p>

          {/* Mission Card */}
          <div className="border border-[#D9D9D9] shadow bg-[#AAAAAA4D] rounded-lg p-4 mb-4">
            <h3 className="text-md font-bold text-[#09005D] flex items-center gap-1 mb-1">
              <span className="text-[#09005D] rotate-90"><Triangle size={8} fill="#09005D"/></span> Our Mission
            </h3>
            <p className="text-black text-sm leading-relaxed">
              To deliver world-class environmental hygiene services with
              professionalism, integrity, and excellence.
            </p>
          </div>

          {/* Vision Card */}
          <div className="border border-[#D9D9D9] shadow bg-[#AAAAAA4D] rounded-lg p-4">
            <h3 className="text-md font-bold text-[#09005D] flex items-center gap-1 mb-1">
              <span className="text-[#09005D] rotate-90"><Triangle size={8} fill="#09005D"/></span> Our Vision
            </h3>
            <p className="text-sm leading-relaxed">
              To become a leading hospital cleaning and facility management
              provider in Nigeria.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
