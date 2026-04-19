import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { AboutUs } from "@/components/AboutUs";
import { Services } from "@/components/Services";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { ContactUs } from "@/components/ContactUs";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="bg-[linear-gradient(180deg,_rgba(255,255,255,1)_25%,_rgba(90,95,100,1)_96%)]">
        <AboutUs />
        <Services />
        <WhyChooseUs />  
      </div>
      <ContactUs />
    </>
  );
}

export default App;
