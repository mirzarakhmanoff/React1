import React from "react";
import "./footer.css";
import logo from "../assets/logo.svg";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="container">
      <footer>
        <div className="footer__item">
          <img src={logo} alt="" />
          <p>
            But i must explain to you all this mistaken idea of dencouncing
            pleasure.
          </p>
        </div>
        <div className="footer__item">
          <h6>Quick Links</h6>
          <a href="#">About Our Company</a>
          <a href="#">Services WE provide</a>
          <a href="#">Career & Opportunity</a>
          <a href="#">Privacy & policy</a>
          <a href="#">Contact US</a>
        </div>
        <div className="footer__item">
          <h6>Company</h6>
          <a href="#">About Company</a>
          <a href="#">Our Testimonials</a>
          <a href="#">Latest News</a>
          <a href="#">Our misson</a>
          <a href="#">Get a free Quot</a>
        </div>
        <div className="footer__item">
          <h6>Contact us</h6>
          <a href="#">Sagrada Familia, Herba</a>
          <a href="#">Street Front USA</a>
          <a href="#">brandoxide@gmail.com</a>
          <a href="#">002-568423591</a>
        </div>
        <div className="footer__item">
          <h6>Follow Us</h6>
          <div className="socials">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedinIn />
          </div>
        </div>
      </footer>
      <div className="next__footer">
        <p>Copyright @ 2020 Brandoxide.all right reserved.</p>
      </div>
    </div>
  );
}
export default Footer;
