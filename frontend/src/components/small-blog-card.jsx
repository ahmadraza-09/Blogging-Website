import React from "react";
import "../css/small-blog-card.css";

const SmallBlogCard = () => {
  return (
    <div className="small-blog-card">
      <img
        src="https://themeger.shop/wordpress/katen/wp-content/uploads/2022/08/grant-ritchie-1154815-unsplash-750x540.jpg"
        alt=""
      />
      <div className="small-blog-card-content">
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
  );
};

export default SmallBlogCard;
