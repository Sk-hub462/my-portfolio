import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                I craft high-performing and delightful experiences tailored and
                conversion-focused
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Designed website layouts, templates, and unique branded looks
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Worked with clients to gather and define requirements, establish
                scopes and managing project milestones
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Created different ads ranging from Magazine ads and Magazine
                pages. All with the programs of Adobe Photoshop, Illustrator,
                InDesign and Microsoft word custom designing of banners and logo
                design for customers
              </p>
            </li>
          </ul>
        </article>
        {/*End of UI*/}

        <article className="service">
          <div className="service__head">
            <h3>Mobile Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Communicated and worked with clients to discuss and determine
                requirements to implement software solutions that fit their
                business needs.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Developed the android application, Implemented in Android studio
                using the Android SDK interface with native java.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Challenges included integration of the app’s components,
                becoming accommodated with a new development environment, and
                managing conflicting ideas within the team on the vision for the
                final product.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Developed and implemented performance improvement strategies and
                plans to promote continuous improvement.
              </p>
            </li>
          </ul>
        </article>
        {/*End of wEB dEVELOPMENT*/}

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Troubleshot and debugged code ensuring compatibility with
                devices, browsers, and operating systems
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Utilized scripting languages, content creation tools, management
                tools, and digital media to design web sites
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Developed user interfaces with modern JavaScript frameworks,
                HTML, CSS, Bootstrap using Asp .NET, MVC, React and C#
              </p>
            </li>
          </ul>
        </article>
        {/*End of Content Creation*/}
      </div>
    </section>
  );
};

export default Services;
