import React from "react";

import SinglePost from "./SinglePost";

const SocialDisplay = ({ posts, setPosts }) => {
  return (
    <div className="w-[90%] md:w-[40%] lg:w-[40%] mx-auto mt-12 mb-96">
      <div>
        {posts
          .slice(0)
          .reverse()
          .map((post) => (
            <SinglePost
              key={post._id}
              post={post}
              setPosts={setPosts}
            ></SinglePost>
          ))}
        {/* */}
      </div>
    </div>
  );
};

export default SocialDisplay;
