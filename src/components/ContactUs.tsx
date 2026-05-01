import { Send } from "lucide-react";

export function ContactUs() {
  return (
    <section
      id="contact"
      className="relative py-14 px-6 sm:px-10 lg:pr-16 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #d8d0f0 0%, #c7cfe8 30%, #dcd4f2 60%, #e0daf4 100%)",
      }}
    >
      <div className="max-w-full mx-auto">
        

        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8 items-start">
          {/* Left: Sponge hand image */}
          <div className="w-52 lg:w-114 hidden md:flex items-start justify-center bg-transparent">
            <img
              src="/sponge-hand1.png"
              alt="Hand holding cleaning sponge"
              className="absolute -bottom-25 -left-25 bg-transparent w-52 lg:w-170 object-cover rotate-220"
            />
          </div>

          {/* Right: Form */}
          <div className="z-50">
            <h2 className="text-2xl sm:text-3xl font-bold text-navy-dark text-center mb-10">
              Contact Us Today!
            </h2>
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              {/* Phone & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xl font-bold text-[#2C5180] mb-1.5">
                    Phone:
                  </label>
                  <input
                    type="tel"
                    className="w-full h-10 rounded-full border-none bg-white px-4 text-sm focus:ring-2 focus:ring-[#09005D] focus:outline-none shadow-sm"
                  />
                </div>
                <div>
                  <label className="block text-xl font-bold text-[#2C5180] mb-1.5">
                    Email:
                  </label>
                  <input
                    type="email"
                    className="w-full h-10 rounded-full border-none bg-white px-4 text-sm focus:ring-2 focus:ring-[#09005D] focus:outline-none shadow-sm"
                  />
                </div>
              </div>

              {/* Address */}
              <div>
                <label className="block text-xl font-bold text-[#2C5180] mb-1.5">
                  Address:
                </label>
                <input
                  type="text"
                  className="w-full h-10 rounded-full border-none bg-white px-4 text-sm focus:ring-2 focus:ring-[#09005D] focus:outline-none shadow-sm"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-xl font-bold text-[#2C5180] mb-1.5">
                  Send a Message:
                </label>
                <div className="relative">
                  <input
                    type="text"
                    className="w-full h-10 rounded-full border-none bg-white px-4 pr-24 text-sm focus:ring-2 focus:ring-[#09005D] focus:outline-none shadow-sm"
                  />
                  <button
                    type="submit"
                    className="absolute right-1 top-1/2 -translate-y-1/2 h-8 px-5 rounded-full bg-[#2C5280] hover:bg-[#09005D] text-white text-xs font-bold tracking-wider uppercase transition-all hover:scale-105 flex items-center gap-1.5"
                  >
                    SEND
                    <Send className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </form>

            {/* Book Appointment CTA */}
            <div className="mt-8 flex justify-center">
              <button className="bg-[#2C5280] hover:bg-[#09005D] text-white text-xs px-8 py-3 rounded-md font-bold tracking-wider uppercase transition-all hover:scale-105">
                Book An Appointment!
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
