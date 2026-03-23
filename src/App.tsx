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
      <AboutUs />
      <Services />
      <WhyChooseUs />
      <ContactUs />
    </>
  );
}

export default App;
