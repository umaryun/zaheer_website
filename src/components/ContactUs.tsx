import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

export function ContactUs() {
  return (
    <section id="contact" className="py-14 px-6 sm:px-10 lg:px-16 bg-gray-50">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-navy text-center mb-10">
          Contact Us Today!
        </h2>

        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
          {/* Phone & Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-semibold text-navy mb-1.5">
                Phone:
              </label>
              <Input
                type="tel"
                placeholder=""
                className="bg-white border-gray-300 focus:border-navy focus:ring-navy rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-navy mb-1.5">
                Email:
              </label>
              <Input
                type="email"
                placeholder=""
                className="bg-white border-gray-300 focus:border-navy focus:ring-navy rounded-md"
              />
            </div>
          </div>

          {/* Address */}
          <div>
            <label className="block text-sm font-semibold text-navy mb-1.5">
              Address:
            </label>
            <Input
              type="text"
              placeholder=""
              className="bg-white border-gray-300 focus:border-navy focus:ring-navy rounded-md"
            />
          </div>

          {/* Message */}
          <div className="relative">
            <label className="block text-sm font-semibold text-navy mb-1.5">
              Send a Message:
            </label>
            <div className="relative">
              <textarea
                rows={3}
                className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:border-navy focus:ring-1 focus:ring-navy focus:outline-none resize-none"
              />
              <button
                type="submit"
                className="absolute bottom-3 right-3 w-10 h-10 rounded-full bg-gold hover:bg-gold/90 flex items-center justify-center text-white shadow-md transition-all hover:scale-105"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </form>

        {/* Book Appointment CTA */}
        <div className="mt-8 flex justify-center">
          <Button className="bg-navy hover:bg-navy-dark text-white text-xs px-8 py-3 rounded font-semibold tracking-wide uppercase">
            Book An Appointment
          </Button>
        </div>
      </div>
    </section>
  );
}
