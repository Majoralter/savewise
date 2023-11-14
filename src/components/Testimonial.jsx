import { useState } from "react";

const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const handlePrev = () =>{
    setActiveIndex(prevIndex => prevIndex === 0 ? 4 : prevIndex - 1)
  }

  const handleNext = () =>{
    setActiveIndex(prevIndex => prevIndex === 4 ? 0 : prevIndex + 1)
  }

  const userDetails = [
    {
      name: "Aisha K.",
      body: '"I always dreamed of traveling the world, but I never thought it was financially possible. Savewise not only showed me how to save for my dream vacation but made it a reality."',
      imagePath: "testimonial-01",
    },
    {
      name: "Sophie R.",
      body: '"I appreciate the transparency Savewise offers. No hidden fees, no complicated jargon. The user-friendly interface made it easy for me to navigate and understand my financial status."',
      imagePath: "testimonial-02",
    },
    {
      name: "Alex H.",
      body: '"Savewise is not just a savings platform; it is a complete financial companion. The tools for tracking spending, and the investment options have taken my financial planning to a whole new level."',
      imagePath: "testimonial-03",
    },
    {
      name: "John M.",
      body: '"Savewise made me realize that managing my finances does not have to be complicated. The personalized saving plans and insights helped me take control of my money."',
      imagePath: "testimonial-04",
    },
    {
      name: "David L.",
      body: '"Security was my top concern when choosing a savings platform, and Savewise exceeded my expectations. The encryption they have in place gave me the push I needed to entrust them with my funds."',
      imagePath: "testimonial-05",
    },
  ];
  const users = userDetails.map((item, index) => {
    return (
      <div
        className={activeIndex === index && "active"}
        key={index}
        onMouseEnter={() => setActiveIndex(index)}
        style={{
          // width: activeIndex === index ? "50%" : "12.5%",
          backgroundImage: `url(/images/${item.imagePath}.jpg)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          filter: activeIndex === index ? "grayscale(0%)" : "grayscale(100%)",
        }}
      >
        <div
          className="details"
          style={{
            transform:
              activeIndex === index ? "translateY(0)" : "translateY(100%)",
          }}
        >
          <h3>{item.name}</h3>
          <p>{item.body}</p>
        </div>
      </div>
    );
  });

  return (
    <section className="testimonial__section">
      <div className="content--controls">
        <div className="content">
          <h4>tesimonials</h4>
          <h2>What Our Users are Saying</h2>
        </div>

        <div className="controls">
          <small>{activeIndex + 1}/5</small>
          <button onClick={handlePrev}>
            <span class="material-symbols-outlined">arrow_left_alt</span>
          </button>
          <button onClick={handleNext}>
            <span class="material-symbols-outlined">arrow_right_alt</span>
          </button>
        </div>
      </div>

      <div className="users">{users}</div>
    </section>
  );
};

export default Testimonial;
