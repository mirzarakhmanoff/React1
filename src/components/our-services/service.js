import React from "react";
import "./service.css";
import service from "../assets/service.svg";
import service1 from "../assets/service1.svg";
import service2 from "../assets/service2.svg";

function Service() {
  return (
    <div className="container">
      <div className="services">
        <span>WHAT WE DO</span>
        <h3>Our Service</h3>

        <div className="service__wrapper">
          <div className="service">
            <div className="service__item">
              <div className="service__img">
                <img src={service} alt="" />
              </div>
              <div className="service__desc">
                <h5>Interior Design</h5>
                <p>
                  Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod
                  tempor incididunt ut labore.
                </p>
              </div>
            </div>
          </div>
          <div className="service">
            <div className="service__item orange">
              <div className="service__img">
                <img src={service1} alt="" />
              </div>
              <div className="service__desc">
                <h5>Interior Design</h5>
                <p>
                  Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod
                  tempor incididunt ut labore.
                </p>
              </div>
            </div>
          </div>
          <div className="service">
            <div className="service__item">
              <div className="service__img">
                <img src={service2} alt="" />
              </div>
              <div className="service__desc">
                <h5>Interior Design</h5>
                <p>
                  Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod
                  tempor incididunt ut labore.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Service;
