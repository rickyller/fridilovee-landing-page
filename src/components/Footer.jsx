import React from "react";
import "../styles/Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__left">
          <p className="footer__text">© 2025 Fridilovee</p>
        </div>

        <div className="footer__center">
          <img
              src="/fridilovee-landing-page/fridilovee_logo_purple.jpg"
            alt=""
            className="footer__logo"
          />
        </div>

        <div className="footer__right">
          <a href="" target="_blank" rel="noopener noreferrer">
            <img
              src="/fridilovee-landing-page/fridilovee_images/Facebook.svg"
              alt="Facebook"
            />
          </a>
          <a
            href="https://www.instagram.com/fridilovee"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/fridilovee-landing-page/fridilovee_images/Instagram.png"
              alt="Instagram"
            />
          </a>
        </div>
      </div>

      <div className="footer__bottom">
        <a
          href="/docs/Aviso-de-Privacidad-Integral_WhistleTime.pdf"
          download
          className="footer__link"
        >
          Aviso de Privacidad
        </a>
        <a
          href="/docs/Términos-y-Condiciones-de-Uso_WhistleTime.pdf"
          download
          className="footer__link"
        >
          Términos y Condiciones
        </a>
      </div>
    </footer>
  );
};

export default Footer;
