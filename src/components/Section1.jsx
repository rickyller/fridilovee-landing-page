import React from "react";
import "../styles/Section1.scss";
import Strings from "../assets/Strings";

const Section1 = () => {
  return (
    <section className="section section1">
      <div className="section1__content">
        <div className="section1__left">
          <h1 className="section1__title">{Strings.hero.title}</h1>
          <p className="section1__subtitle">{Strings.hero.subtitle}</p>
        </div>
        <div className="section1__right">
          <img
            src="/fridilovee-landing-page/fridilovee_images/fridilovee_accesories.jpg"
            alt="Registro de fútbol"
            className="section1__image"
          />
        </div>
      </div>
    </section>
  );
};

export default Section1;
