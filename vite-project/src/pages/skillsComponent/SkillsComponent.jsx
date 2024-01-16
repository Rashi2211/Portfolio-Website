import React from "react";

import Skills from "../../components/Skills";
import "./skills.css";

const SkillsComponent = () => {
  return (
    <>
      <section id="skills-section" className="skills section container">
        <h2 className="section__title">
          My <span>Skills</span>
        </h2>
        <div className="skills__container grid">
          <Skills />
        </div>
      </section>
      <div className="separator"></div>
    </>
  );
};

export default SkillsComponent;
