import mission from "/images/mission.jpg"

const Mission = () => {
  return (
    <section className="mission__section">
      <h4>Mission statement</h4>
      <h2>Join Us on Your Journey</h2>
      <p>
        Savewise is more than a platform; it's a partner on your path to
        financial success. We <br /> invite you to join us, embrace financial
        empowerment, and embark on a journey where <br /> your dreams become achievable
        milestones. At Savewise, your financial freedom is not <br /> just a goal—it's
        our mission.
      </p>

      <img src={mission} alt="" />
    </section>
  );
};

export default Mission;
