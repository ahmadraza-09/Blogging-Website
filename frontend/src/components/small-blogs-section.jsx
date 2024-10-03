import React from "react";
import "../css/small-blogs-section.css";
import SmallBlogCard from "./small-blog-card";

const SmallBlogSection = () => {
  return (
    <div className="small-blogs-section">
      <SmallBlogCard />
      <SmallBlogCard />
      <SmallBlogCard />
      <SmallBlogCard />
      <SmallBlogCard />
      <SmallBlogCard />
      <SmallBlogCard />
      <SmallBlogCard />
    </div>
  );
};

export default SmallBlogSection;
