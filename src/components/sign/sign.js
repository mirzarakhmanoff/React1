import React from "react";
import "./sign.css";

function SignUp() {
  return (
    <div className="container">
      <div className="sign">
        <h2>DON’T FORGET TO SIGN UP</h2>
        <p>
          Find out early about all upcoming promotions and new product releases
          with our newsletter.
        </p>
        <form action="">
          <input type="email" placeholder="Enter your email address..." />
          <button type="submit">SUBSCRIBE</button>
        </form>
      </div>
    </div>
  );
}
export default SignUp;
