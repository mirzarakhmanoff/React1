import React from "react";
import "./hero.css";

function Hero() {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="left">
          <span>MODERN INTERIOR</span>
          <h1>Create Your Interior Design.</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation.
          </p>
          <a href="#" className="contact__btn">
            CONTACT
          </a>
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
}
export default Hero;
