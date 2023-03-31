import React from "react";
import "./about.css";
import ME from "../../assets/me.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-img">
            <img src={ME} width="640" height="360" alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h2>Experience</h2>
              <small>1.5+ Years Working</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h2>Education</h2>
              <small></small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h2>Projects</h2>
              <small>20+ </small>
            </article>
          </div>
          <p>• Currently enrolled in web and moblile development.</p>
          <p>• Bachelors in Computer Science</p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
