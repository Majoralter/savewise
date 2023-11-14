import "./Sass/App.scss";

import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Mission from "./components/Mission";
import Calculator from "./components/Calculator";
import Testimonial from "./components/Testimonial";
import FAQ from "./components/FAQ";

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
    </>
  );
}

export default App;
