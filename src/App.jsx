import Hero from "./layouts/Hero";
import Navbar from "./layouts/Navbar";
import Why from "./layouts/Why";
import Testimonial from "./layouts/Testimonial";
import Services from "./layouts/Services";
import How from "./layouts/How";
import FAQs from "./layouts/FAQs";
import Footer from "./layouts/Footer";

const App = () => {
  return (
    <>
      <section className="bg">
        <Navbar />
        <Hero />
      </section>
      <section className="space-y-[70px]">
        <Why />
        <Testimonial />
        <Services />
        <How />
        <FAQs />
        <Footer />
      </section>
    </>
  );
};

export default App;
