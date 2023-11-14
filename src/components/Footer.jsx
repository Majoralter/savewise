const Footer = () => {
  return (
    <footer>
      <h2>Savewise</h2>

      <div className="footer--links">
        <div className="newsletter">
          <h3>Sign Up for Our Newsletter</h3>
          <p>Stay updated with news and offers from us.</p>

          <form onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Enter your email address" />
            <button type="submit">Subscribe</button>
          </form>
        </div>

        <div className="links">
          <div>
            <h4>Company</h4>
            <a href="#">Products</a>
            <a href="#">Careers</a>
            <a href="#">About Us</a>
            <a href="#">Contact Us</a>
            <a href="#">Newsletter</a>
          </div>
          <div>
            <h4>Site Map</h4>
            <a href="#">Home</a>
            <a href="#">Features</a>
            <a href="#">Savings Calculator</a>
            <a href="#">Testimonials</a>
            <a href="#">FAQs</a>
            <a href="#">Download the App</a>
          </div>
          <div>
            <h4>Socials</h4>
            <a href="#">Twitter</a>
            <a href="#">Linkedin</a>
            <a href="#">Instagram</a>
            <a href="#">Facebook</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
