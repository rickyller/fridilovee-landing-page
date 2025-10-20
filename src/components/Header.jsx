import React, { useState, useEffect, useRef } from "react";
import "../styles/Header.scss";
import logo from "/fridilovee_logo.jpg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScrollToSection = (event, sectionId) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  // Cerrar menú al hacer clic fuera del menú
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="header">
      <div className="header__container">
        <img src={logo} alt="Logo" className="header__logo" />

        <div className="header__menu-icon" onClick={toggleMenu}>
          <div className="menu-line"></div>
          <div className="menu-line"></div>
          <div className="menu-line"></div>
        </div>

        {isOpen && (
          <div className="header__dropdown" ref={menuRef}>
            <a
              href="#section1"
              className="header__link"
              onClick={(e) => handleScrollToSection(e, "section1")}
            >
              Qué es
            </a>
            <a
              href="#section2"
              className="header__link"
              onClick={(e) => handleScrollToSection(e, "section2")}
            >
              Misión y visión
            </a>
            <a
              href="#section5"
              className="header__link"
              onClick={(e) => handleScrollToSection(e, "section3")}
            >

              Sala de prensa
            </a>
            <a
              href="#section6"
              className="header__link"
              onClick={(e) => handleScrollToSection(e, "section6")}
            >
              Contáctanos
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
