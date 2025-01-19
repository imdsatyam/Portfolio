import React from "react";
import "./Services.css";
import Image1 from "../../Assets/service-1.svg";
import Image2 from "../../Assets/service-2.svg";
import Image3 from "../../Assets/service-3.svg";

const data = [
  {
    id: 1,
    image: Image1,
    title: "Front End Development",
    description:
      "As a React.js Developer, I specialize in building responsive and interactive front-end applications using React.js and other modern front-end technologies. I focus on creating smooth user experiences and scalable solutions, having worked on projects that integrate APIs and UI enhancements.",
  },
  {
    id: 2,
    image: Image2,
    title: "Back End Development",
    description:
      "My expertise extends to back-end development, where I work on server-side logic, API integrations, and data management. I leverage technologies like Node.js, Express, and databases like MongoDB to ensure seamless connectivity between front-end and back-end systems.",
  },
  {
    id: 3,
    image: Image3,
    title: "Full Stack Development",
    description:
      "With a comprehensive understanding of both front-end and back-end technologies, I develop full-stack applications that are robust and scalable. I combine the power of React.js, Next.js, and back-end tools like Node.js and MongoDB to deliver feature-rich applications.",
  },
];

const Services = () => {
  return (
    <section className="services container section" id="services">
      <h2 className="section__title">Services</h2>
      <div className="services__container grid">
        {data.map(({ id, image, title, description }) => {
          return (
            <div className="services__card" key={id}>
              <img src={image} alt={title} className="services__img" />
              <h3 className="services__title">{title}</h3>
              <p className="services__description">{description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
