import Piggy from "/images/Piggy.png";
import Invest from "/images/Invest.png";
import gsap from "gsap";
import Marquee from "react-fast-marquee";

const MarqueeSlider = () => {
  const slides = [...Array(3)].map((_, index) => {
    return (
      <div className="slide" key={index}>
        <span>INVEST</span>
        <img src={Piggy} alt="" />
        <span>BUDGET</span>
        <img src={Invest} alt="" />
        <span>PLAN</span>
        <img src={Piggy} alt="" />
        <span>SAVE</span>
        <img src={Invest} alt="" />
      </div>
    );
  });

  return (
    <div className="marquee__container">
      <Marquee direction="right" pauseOnHover={true}>
        <div className="marquee__slider">{slides}</div>
      </Marquee>
    </div>
  );
};

export default MarqueeSlider;
