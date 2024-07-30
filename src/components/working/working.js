import React from "react";
import "./working.css";
import twenty from "../assets/Снимок экрана 2024-07-30 в 19.00.15.png";

function Working() {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="left__work">
          <img src={twenty} alt="" />
          <h1>Years Of Successful Working The Market</h1>

          <a href="#" className="contact__btn">
            Read MORE
          </a>
        </div>
        <div className=" work__img"></div>
      </div>
    </div>
  );
}
export default Working;
