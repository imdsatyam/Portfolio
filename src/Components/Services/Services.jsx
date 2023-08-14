import React from "react";
import "./Services.css";
import Image1 from "../../Assets/service-1.svg";
import Image2 from "../../Assets/service-2.svg";
import Image3 from "../../Assets/service-3.svg";

const data = [
  {
    id: 1,
    image: Image1,
    title: "Front End",
    description:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.",
  },
  {
    id: 2,
    image: Image2,
    title: "Back End",
    description:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.",
  },
  {
    id: 3,
    image: Image3,
    title: "Full Stack",
    description:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.",
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
              <img src={image} alt="" className="services__img" />
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
