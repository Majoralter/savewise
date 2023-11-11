const Features = () => {
  const features = [
    {
      header: "Tailored Saving Plans",
      body: "We believe your financial goals are as unique as you are. Our personalized saving plans ensure your money works for your dreams.",
      borderColor: "#ff8e0a",
    },
    {
      header: "User-Friendly Experience",
      body: "Saving has never been this simple. Our intuitive interface is designed for financial novices and experts alike.",
      borderColor: "#50ff00",
    },
    {
      header: "Financial Insights",
      body: "Gain a deep understanding of your financial health with our powerful insights. Make informed decisions and stay on track.",
      borderColor: "#fbff00",
    },
    {
      header: "Maximized Savings",
      body: "We're not just about saving; we're about growing. With smart features and investment options, your savings will flourish.",
      borderColor: "#7482ff",
    },
    {
      header: "Ironclad Security",
      body: "Your financial safety is our priority. We employ cutting-edge security measures to safeguard your funds and data.",
      borderColor: "#06E19B",
    },
  ];

  const feature = features.map((item, index) => {
    return (
      <div className="feature" key={index} style={{borderRight: `solid 2px ${item.borderColor}`}}>
        <h3>{item.header}</h3>
        <p>{item.body}</p>
        <a href="#">
          Learn more{" "}
          <span class="material-symbols-outlined">arrow_right_alt</span>
        </a>
      </div>
    );
  });

  return (
    <section className="features__section">
      <div className="features__section--headline">
        <h4>Fetaures</h4>
        <h2>Why Choose Savewise?</h2>
        <p>
          At Savewise, we're not just another savings platform; we're your{" "}
          <br />
          financial ally on the road to success.
        </p>
      </div>

      <div className="features">
        {feature}
      </div>
    </section>
  );
};

export default Features;
