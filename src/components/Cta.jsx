import Mockup from "/images/phone-mockup.jpg";

const Cta = () => {
  return (
    <section className="cta__section">
      <div className="content">
        <h2>
          Achieve your Financial <br /> Dreams Today
        </h2>
        <p>
          Ready to take control of your finances anytime, anywhere? Download the{" "}
          <br /> Savewise app now and unlock a world of financial empowerment in
          the palm <br /> of your hand.
        </p>
        <a href="#">Download the App</a>
      </div>
      <div className="image--wrapper">
        <img src={Mockup} alt="" />
      </div>
    </section>
  );
};

export default Cta;
