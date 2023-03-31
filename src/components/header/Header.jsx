import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me.png";

import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h1>Hello I'm</h1>
        <h2>Software Developer</h2>
        <p
          class="lead mt-2 mb-4"
          className="text-light"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          I am Saba Khalid, And I craft high-performing and delightful
          experiences tailored and conversion-focused
        </p>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
