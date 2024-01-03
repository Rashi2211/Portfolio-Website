import React from "react";
import Profile from "../../assets/home.jpg";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./home.css";

const Home = () => {
  return (
    <section className="home section grid">
      <img src={Profile} alt="" className="home__img" />

      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title">
            <span>I am Rashi Tiwari. </span>
            Full Stack Developer
          </h1>
          <p className="home__description">
            I am a passionate developer who loves to code and solve problems
            using my skills. I am a quick learner and always ready to learn new
            technologies.
          </p>
          <Link to="/about" className="button">
            To know more about me {""}
            <span className="button__icon">
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>

      <div className="color__block"></div>
    </section>
  );
};

export default Home;
