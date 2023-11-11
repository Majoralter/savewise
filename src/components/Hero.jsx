import hero from "/images/hero.jpg";
import MarqueeSlider from "./MarqueeSlider";

const Hero = () => {
  return (
    <>
      <section className="hero__section">
        <div className="hero__section--content">
          <h1>
            Savewise: Your Path to <br /> Financial Freedom
          </h1>
          <p>
            At Savewise, we understand that achieving financial freedom is a
            journey, and we're here to <br /> guide you every step of the way.
            Our innovative savings platform is designed to empower <br /> you to
            take control of your financial future, make your money work for you,
            and secure the <br /> life you've always dreamed of.
          </p>
          <a href="#">Download the App</a>
        </div>

        <img
          src={hero}
          alt="Picture of a woman with laptop indoors on a table"
        />
      </section>
      <MarqueeSlider />
    </>
  );
};

export default Hero;
