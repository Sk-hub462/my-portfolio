import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.webp";
import IMG2 from "../../assets/portfolio2.webp";
import IMG3 from "../../assets/portfolio3.webp";
import IMG4 from "../../assets/portfolio4.webp";
import IMG5 from "../../assets/portfolio5.webp";
import IMG6 from "../../assets/portfolio6.webp";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Web Development Dashboard",
    github: "https://github.com",
    demo: "http://triosdevelopers.com/~S.Khalid/Web%20Fundamentals/Final%20Project/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Mobile Development Dashboard",
    github: "https://github.com",
    demo: "http://triosdevelopers.com/~S.Khalid/WebMob_Development/Final_Project/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Adobe Photoshop Dashboard",
    github: "https://github.com",
    demo: "http://triosdevelopers.com/~S.Khalid",
  },
  {
    id: 4,
    image: IMG4,
    title: "Python Development with django",
    github: "https://github.com",
    demo: "http://triosdevelopers.com/~S.Khalid/Python%20Development(Django)/",
  },
  {
    id: 5,
    image: IMG5,
    title: "Adobe Illustrator Dashboard",
    github: "https://github.com",
    demo: "http://triosdevelopers.com/~S.Khalid",
  },
  {
    id: 6,
    image: IMG6,
    title: "Iphone Development",
    github: "https://github.com",
    demo: "http://triosdevelopers.com/~S.Khalid/iPhone%20Development%20using%20Swift/Power%20Point/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article className="portfolio__item">
              <div className="portfolio__item-img">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target={"_blank"}>
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target={"_blank"}>
                  Live
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
