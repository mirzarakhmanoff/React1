import React from "react";
import "./about.css";
import bgImage from "../assets/aboutUs.png";

function About() {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="right__about about__img"></div>
        <div className="left">
          <span>ABOUT US</span>
          <h1>Interioris The Will of An Epoch Mextreo</h1>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form injected humour,
            or randomised words which don't look even slightly believable.If you
            are going to use a passage of Lorem Ipsum, sure there isn't anything
            embarrassing hidden the middleof text. All the Lorem Ipsum
            generators on the Internettend to repeat predefined chunks as
            necessary,making this the first true generator on the Internet.
          </p>
          <a href="#" className="contact__btn">
            LEARN MORE
          </a>
        </div>
      </div>
    </div>
  );
}
export default About;
