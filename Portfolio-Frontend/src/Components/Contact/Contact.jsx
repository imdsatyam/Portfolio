import React, { useRef, useState } from 'react';
import AlertToaster from '../../Custom/AlertToaster';
import "./Contact.css";

const Contact = ({ setLoading }) => {
  const form = useRef();
  const [alertState, setalertState] = useState(true);

  const staticAlertTimer = (text, type) => {
    if (alertState === true) {
      if (type === 'success') {
        AlertToaster.success(text);
      } else if (type === 'warn') {
        AlertToaster.warn(text);
      } else if (type === 'error') {
        AlertToaster.error(text);
      }
      setalertState(false);
      setTimeout(() => setalertState(true), 5000);
    }
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(form.current);
    const data = {
      user_name: formData.get('user_name'),
      user_email: formData.get('user_email'),
      user_subject: formData.get('user_subject'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('https://portfolio-najc.onrender.com/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        staticAlertTimer('Message sent successfully!', 'success');
        form.current.reset();
      } else {
        const errorData = await response.json();
        staticAlertTimer(`Failed to send message: ${errorData.error}`, 'error');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      staticAlertTimer('Error sending message.', 'error');
    } finally {
      setLoading(false);
    }
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
                required
              />
            </div>
            <div className="contact__form-div">
              <input
                type="email"
                className="contact__form-input"
                placeholder="Insert Your Email"
                name="user_email"
                required
              />
            </div>
          </div>
          <div className="contact__form-div">
            <input
              type="text"
              className="contact__form-input"
              placeholder="Insert Your Subject"
              name="user_subject"
              required
            />
          </div>
          <div className="contact__form-div contact__form-area">
            <textarea
              name="message"
              cols="30"
              rows="10"
              className="contact__form-input"
              placeholder="Write Your Message"
              required
            ></textarea>
          </div>
          <button className="btn" type="submit" disabled={setLoading}>
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
