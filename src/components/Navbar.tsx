import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            {/* <img
              src="/logo.png"
              alt="Zaheer Contracts"
              className="h-10 w-auto"
            /> */} Logo
          </div>

          {/* Nav Links */}
          <div className="hidden sm:flex font-bold text-[#09005D] hover:text-navy items-center gap-8">
            <a
              href="#home"
              className="text-sm transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-sm transition-colors"
            >
              About Us
            </a>
            <a
              href="#contact"
              className="text-sm transition-colors"
            >
              Contact
            </a>
          </div>

          {/* CTA Button */}
          <Button
            className="bg-[#023265CC] hover:bg-[#09005D] text-[#E8C86E] text-xs px-5 py-2 font-bold tracking-wide uppercase"
          >
            Book Now
          </Button>
        </div>
      </div>
    </nav>
  );
}
