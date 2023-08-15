import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./Contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_uc2dw9l', 'template_j15xex4', form.current, 'mUa4Az0EvVIGFa0S1')
      .then((result) => {
          console.log(result.text);
          alert("Message Sent!!");
      }, (error) => {
          console.log(error.text);
          alert("Error")
      });
  };
  return (
    <section className="contact container section" id="contact">
      <h2 className="section__title">Get In Touch</h2>
      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">Let's talk about everything!</h3>
          <p className="contact__details">
            Don't like forms? Send me an email. 🤝
          </p>
        </div>
        <form className="contact__form" ref={form} onSubmit={sendEmail}>
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input
                type="text"
                className="contact__form-input"
                placeholder="Insert Your Name"
                name="user_name"
              />
            </div>
            <div className="contact__form-div">
              <input
                type="email"
                className="contact__form-input"
                placeholder="Insert Your Email"
                name="user_email"
              />
            </div>
          </div>
          <div className="contact__form-div">
            <input
              type="text"
              className="contact__form-input"
              placeholder="Insert Your subject"
              name="user_subject"
            />
          </div>
          <div className="contact__form-div contact__form-area">
            <textarea
              name="message"
              cols="30"
              rows="10"
              className="contact__form-input"
              placeholder="Write Your Message"
            ></textarea>
          </div>
          <button className="btn" type='submit' value="Send">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
