import React from "react";
import "../css/hero-section.css";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-section-left">
        <div className="hero-section-left-blog">
          <img
            src="https://themeger.shop/wordpress/katen/wp-content/uploads/2022/08/grant-ritchie-1154815-unsplash-750x540.jpg"
            alt=""
          />
          <div className="hero-section-left-blog-content">
            <div className="content">
              <div className="category-name">Technology</div>
              <h2>5 Easy Ways You Can Turn Future Into Success.</h2>
              <div className="user-time">
                <div className="user">Ahmad Raza</div>
                &#x2022;
                <div className="time">October 02, 2024</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-section-right">
        <div className="hero-section-right-blog">
          <img
            src="https://themeger.shop/wordpress/katen/wp-content/uploads/2022/08/grant-ritchie-1154815-unsplash-750x540.jpg"
            alt=""
          />
          <div className="hero-section-right-blog-content">
            <div className="content">
              <div className="category-name">Technology</div>
              <h2>5 Easy Ways You Can Turn Future Into Success.</h2>
              <div className="user-time">
                <div className="user">Ahmad Raza</div>
                &#x2022;
                <div className="time">October 02, 2024</div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-section-right-blog">
          <img
            src="https://themeger.shop/wordpress/katen/wp-content/uploads/2022/08/grant-ritchie-1154815-unsplash-750x540.jpg"
            alt=""
          />
          <div className="hero-section-right-blog-content">
            <div className="content">
              <div className="category-name">Technology</div>
              <h2>5 Easy Ways You Can Turn Future Into Success.</h2>
              <div className="user-time">
                <div className="user">Ahmad Raza</div>
                &#x2022;
                <div className="time">October 02, 2024</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
