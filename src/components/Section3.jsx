import React from "react";
import "../styles/Section3.scss";
import Strings from "../assets/Strings";

const Section3 = () => {
  return (
    <section className="section section3">
      <div className="section3__content">
        <div className="section3__left">
          <a href="https://www.instagram.com/fridilovee">
            <img
              src="/fridilovee-landing-page/fridilovee_images/fridilovee_heart.jpg"
              alt="QR Code para Descargar"
              className="section3__qr"
            />
          </a>
        </div>

        <div className="section3__right">
          <h2 className="section3__title">{Strings.download.title}</h2>

          <ul className="section3__list">
            {Strings.download.steps.map((step, index) => (
              <li key={index} className="section3__list-item">
                {step}
              </li>
            ))}
          </ul>

          <p className="section3__final-note">{Strings.download.finalNote}</p>
        </div>
      </div>
    </section>
  );
};

export default Section3;
