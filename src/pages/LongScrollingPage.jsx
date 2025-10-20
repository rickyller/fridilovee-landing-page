import React from "react";
import Section1 from "../components/Section1";
import Section2 from "../components/Section2";
import Section3 from "../components/Section3";
import Section4 from "../components/Section4";
import Section5 from "../components/Section5";
import Section6 from "../components/Section6";
import "../styles/LongScrollingPage.scss";

const LongScrollingPage = () => {
  return (
    <div className="long-scrolling-page">
      <section id="section1">
        <Section1 />
      </section>
      <section id="section2">
        <Section2 />
      </section>
      <section id="section3">
        <Section3 />
      </section>
      <section id="section6">
        <Section6 />
      </section>
    </div>
  );
};

export default LongScrollingPage;
