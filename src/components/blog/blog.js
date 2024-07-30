import React from "react";
import "./blog.css";
import blog from "../assets/blog.png";
import blog1 from "../assets/blog1.png";

function Blog() {
  return (
    <div className="container">
      <div className="blog__wrapper">
        <span>LETEST NEWS</span>
        <h3>From Our Blog</h3>

        <div className="blog">
          <div className="blog__item">
            <div className="blog__img">
              <img src={blog} alt="" />
            </div>
            <div className="blog__desc">
              <h5>2020 Interior Design Trends</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod incididunt ut labore et dolore magna aliqua.
              </p>
              <a href="#">CONTINUE READING....</a>
            </div>
          </div>
          <div className="blog__item">
            <div className="blog__img">
              <img src={blog1} alt="" />
            </div>
            <div className="blog__desc">
              <h5>2020 Interior Design Trends</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod incididunt ut labore et dolore magna aliqua.
              </p>
              <a href="#">CONTINUE READING....</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
