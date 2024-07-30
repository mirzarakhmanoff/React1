import React from "react";
import "./header.css";
import logo from "../assets/logo.svg";

function Header() {
  return (
    <div className="container">
      <header>
        <div className="header__nav">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="items">
            <div className="tabs">
              <ul>
                <li>
                  <a href="#">HOME</a>
                </li>
                <li>
                  <a href="#">PROJECT</a>
                </li>
                <li>
                  <a href="#">SERVICES</a>
                </li>
                <li>
                  <a href="#">ABOUT</a>
                </li>
                <li>
                  <a href="#">BLOG</a>
                </li>
                <li>
                  <a href="#">SHOP</a>
                </li>
                <li>
                  <a href="#">CONTACT</a>
                </li>
              </ul>
            </div>
            <div className="signup__btn">
              <a href="#">Sign Up</a>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
export default Header;
