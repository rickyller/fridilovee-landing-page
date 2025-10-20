import React from "react";
import "../styles/Section2.scss";
import Strings from "../assets/Strings";

const Section2 = () => {
  return (
    <section className="section section2">
      <div className="section2__content">
        <div className="reason-card">
          <h3 className="reason-title">{Strings.reasons.precision.title}</h3>
          <p className="reason-description">
            {Strings.reasons.precision.description}
          </p>
          <div className="reason-image">
            <img
            src="/fridilovee-landing-page/fridilovee_images/fridilovee_necklace.jpg"
              alt="Eficiencia"
            />
          </div>
        </div>

        <div className="reason-card">
          <h3 className="reason-title">{Strings.reasons.connection.title}</h3>
          <p className="reason-description">
            {Strings.reasons.connection.description}
          </p>
          <div className="reason-middle-image">
            <img
            src="/fridilovee-landing-page/fridilovee_images/fridilovee_heart.jpg"
              alt="Sincronización"
            />
          </div>
        </div>

        <div className="reason-card">
          <h3 className="reason-title">{Strings.reasons.reports.title}</h3>
          <p className="reason-description">
            {Strings.reasons.reports.description}
          </p>
          <div className="reason-image">
            <img
            src="/fridilovee-landing-page/fridilovee_images/fridilovee_ring.jpg"
              alt="Interfaz"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
