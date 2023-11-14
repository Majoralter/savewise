import "./Sass/App.scss";

import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Mission from "./components/Mission";
import Calculator from "./components/Calculator";
import Testimonial from "./components/Testimonial";
import FAQ from "./components/FAQ";
import Cta from "./components/Cta";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Features />
      <Mission />
      <Calculator />
      <Testimonial />
      <FAQ />
      <Cta />
      <Footer />
    </>
  );
}

export default App;
