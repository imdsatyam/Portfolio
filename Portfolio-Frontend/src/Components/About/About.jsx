import React from "react";
import "./About.css";
import img from "../../Assets/avatar-2.svg";
import AboutBox from "./AboutBox";

const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me</h2>
      <div className="about__container grid">
        <img src={img} alt="Profile" className="about__img" />
        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              Hi, I'm Kumar Satyam, a dedicated Front-End Developer based in Noida, India.
              I specialize in React.js, web design, and development, with a strong focus on delivering high-quality user experiences.
              Holding a Bachelor's degree in Computer Science and Engineering, I am passionate about creating intuitive user interfaces,
              integrating robust APIs, and optimizing websites for performance and scalability.
              My experience spans both internal tools and client-facing platforms, where I strive to bridge the gap between design and functionality,
              ensuring seamless and impactful digital solutions.
            </p>
            <a
              href="https://drive.google.com/file/d/1HAwxxdIYgK1UfJCEfwhT37F5qm4XixN1/view?usp=drivesdk"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Download CV
            </a>
          </div>
          <div className="about__skills">
            <div className="skills__data">
              <div className="skills__name">React.js</div>
              <div className="skills__bar">
                <div className="skills__percentage development">
                  <span className="tooltip">Frontend</span>
                </div>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__name">Next.js</div>
              <div className="skills__bar">
                <div className="skills__percentage development">
                  <span className="tooltip">Frontend</span>
                </div>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__name">HTML</div>
              <div className="skills__bar">
                <div className="skills__percentage development">
                  <span className="tooltip">Frontend</span>
                </div>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__name">CSS</div>
              <div className="skills__bar">
                <div className="skills__percentage development">
                  <span className="tooltip">Frontend</span>
                </div>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__name">Tailwind CSS</div>
              <div className="skills__bar">
                <div className="skills__percentage ui_design">
                  <span className="tooltip">UI Design</span>
                </div>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__name">Bootstrap</div>
              <div className="skills__bar">
                <div className="skills__percentage ui_design">
                  <span className="tooltip">UI Design</span>
                </div>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__name">Node.js</div>
              <div className="skills__bar">
                <div className="skills__percentage backend_end">
                  <span className="tooltip">Backend</span>
                </div>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__name">Express.js</div>
              <div className="skills__bar">
                <div className="skills__percentage backend_end">
                  <span className="tooltip">Backend</span>
                </div>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__name">MongoDB</div>
              <div className="skills__bar">
                <div className="skills__percentage backend_end">
                  <span className="tooltip">Backend</span>
                </div>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__name">SQL</div>
              <div className="skills__bar">
                <div className="skills__percentage backend_end">
                  <span className="tooltip">Backend</span>
                </div>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__name">Git</div>
              <div className="skills__bar">
                <div className="skills__percentage full_stack">
                  <span className="tooltip">Full Stack</span>
                </div>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__name">Jira</div>
              <div className="skills__bar">
                <div className="skills__percentage full_stack">
                  <span className="tooltip">Full Stack</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AboutBox />
    </section>
  );
};

export default About;
