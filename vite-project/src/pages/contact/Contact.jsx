import React from "react";
import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaFacebookF,
} from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import "./contact.css";

const Contact = () => {
  return (
    <section className="contact section">
      <h2 className="section__title">
        Let&apos;s <span>Connect</span>
      </h2>
      <div className="contact__container container grid">
        <div className="contact__data">
          <h3 className="contact__title">Feel free to connect!</h3>
          <p className="contact__description">
            Feel free to get in touch with me. I am always open for new
            suggestions.
          </p>
          <div className="contact__info">
            <div className="info__item">
              <FaEnvelopeOpen className="info__icon" />
              <div>
                <span className="info__title">Mail: </span>
                <h4 className="info__desc">tiwarirashi22@gmail.com</h4>
              </div>
            </div>

            <div className="info__item">
              <FaPhoneSquareAlt className="info__icon" />
              <div>
                <span className="info__title">Call: </span>
                <h4 className="info__desc">+1 (647) 671-1601</h4>
              </div>
            </div>
          </div>

          <div className="contact__socials">
            <a href="https://facebook.com" className="contact__social-link">
              <FaFacebookF />
            </a>
            <a href="https://linkedIn.com" className="contact__social-link">
              <FaLinkedinIn />
            </a>
            <a href="https://twitter.com" className="contact__social-link">
              <FaTwitter />
            </a>
            <a href="https://youtube.com" className="contact__social-link">
              <FaYoutube />
            </a>
          </div>
        </div>
        <form className="contact__form">
          <div className="form__input-group">
            <div className="form__input-div">
              <input
                type="text"
                placeholder="Your Name"
                className="form__control"
              />
            </div>
            <div className="form__input-div">
              <input
                type="email"
                placeholder="Your Email"
                className="form__control"
              />
            </div>

            <div className="form__input-div">
              <input
                type="text"
                placeholder="Your Area of Expertise"
                className="form__control"
              />
            </div>
          </div>
          <div className="form__input-div">
            <textarea
              placeholder="Your Message"
              className="form__control textarea"
            ></textarea>
          </div>
          <button className="button">
            Send Message
            <span className="button__icon contact__button-icon">
              <FiSend />
            </span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
