import { useState } from "react"

const Nav = () =>{
    const [active, setActive] = useState(false)

    const menuStyle = {
        opacity: !active && "0",
        scale: active ? "1" : "0"
    }

    return (
      <nav>
        <a href="#" className="logo">
          Savewise
        </a>

        <button className="menu__button" onClick={() => setActive(true)}>
          Menu
        </button>

        <ul className="nav__links">
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">Testimonials</a>
          </li>
          <li>
            <a href="#">FAQs</a>
          </li>
          <li className="nav__links--cta">
            <a href="#">Get Started</a>
          </li>
        </ul>

        <div className="menu" style={menuStyle}>
          <button onClick={() => setActive(false)}>Close</button>
          <span>
            <a href="#">Features</a>
          </span>
          <span>
            <a href="#">Testimonials</a>
          </span>
          <span>
            <a href="#">FAQs</a>
          </span>

          <a href="#" className="cta">
            Get Started
          </a>
        </div>
      </nav>
    );
}

export default Nav