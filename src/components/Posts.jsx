import React from "react";
import Post from "./Post";
import "../styleSheet/posts.css";
//nhận dữ liệu fake
import fireProducts from "../dataBlog";

const Posts = () => {
  return (
    <div className="posts">
      {fireProducts &&
        fireProducts.map((product, key) => {
          return (
            <Post
              key={key}
              image={product.image}
              category={product.category}
              title={product.title}
              post_desc={product.post_desc}
              post_date={product.post__date}
            />
          );
        })}
    </div>
  );
};

export default Posts;
