import React from "react";
import "./testimonals.css";

function Testimonals() {
  return (
    <div className="container">
      <div className="test__wrapper">
        <span>TESTIMONIALS</span>
        <h3>Client says about us</h3>
        <div className="comments">
          <div className="comment">
            <h6>
              Louis Saville <span>/CEO at Google inc</span>
            </h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="comment">
            <h6>
              Louis Saville <span>/CEO at Google inc</span>
            </h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonals;
