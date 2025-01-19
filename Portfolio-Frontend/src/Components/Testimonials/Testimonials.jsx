import React from "react";
import "./Testimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Autoplay } from "swiper";
import Image1 from "../../Assets/avatar-1.svg"; 
import Image2 from "../../Assets/avatar-2.svg"; 

const reasons = [
  {
    id: 1,
    image: Image1, 
    title: "Experienced and Efficient",
    subtitle: "Hands-on experience with scalable web applications",
    description:
      "With hands-on experience in building scalable web applications, I bring both speed and quality to every project.",
  },
  {
    id: 2,
    image: Image2, 
    title: "User-Centric Design",
    subtitle: "Prioritize user experience and design",
    description:
      "I prioritize user experience and design, ensuring that every interface is both functional and aesthetically pleasing.",
  },
  {
    id: 3,
    image: Image1, 
    title: "API Integration",
    subtitle: "Expert in seamless API integrations",
    description:
      "I have expertise in seamless API integrations, ensuring smooth communication between the frontend and backend.",
  },
  {
    id: 4,
    image: Image2, 
    title: "Passionate About Learning",
    subtitle: "Always updating myself with new trends",
    description:
      "I constantly keep myself updated with the latest technologies and trends to bring cutting-edge solutions to the table.",
  },
  {
    id: 5,
    image: Image1, 
    title: "Collaborative",
    subtitle: "Clear communication and teamwork",
    description:
      "I believe in clear communication and collaboration. I work closely with clients and team members to ensure project goals are met.",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials container section">
      <h2 className="section__title">Why Choose Me?</h2>
      <Swiper
        className="testimonials__container grid"
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {reasons.map(({ id, image, title, subtitle, description }) => {
          return (
            <SwiperSlide className="testimonial__item" key={id}>
              <div className="thumb">
                <img src={image} alt={title} />
              </div>
              <h3 className="testimonials__title">{title}</h3>
              <span className="subtitle">{subtitle}</span>
              <p className="testimonial__description">{description}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
