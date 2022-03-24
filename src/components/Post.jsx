import React from "react";
import "../styleSheet/post.css";

const Post = ({ image, categogy, title, post_desc, post_date }) => {
  return (
    <div className="post">
      <img className="post__img" src={image} alt="" />
      <div className="post__info">
        <div className="post__cats">
          <div className="post__cat">{categogy}</div>
        </div>
        <span className="post__title">{title}</span>
        <hr />
        <span className="post__date">{post_date}</span>
      </div>
      <p className="post__desc">{post_desc}</p>
    </div>
  );
};

export default Post;
