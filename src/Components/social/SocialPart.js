import React, { useEffect, useState } from "react";
import SocialDisplay from "./SocialDisplay";
import SocialPost from "./SocialPost";

const SocialPart = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/post")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);
  return (
    <div>
      <SocialPost posts={posts} setPosts={setPosts} />
      <hr className="w-[40%] mx-auto mt-6 bg-gray-500" />
      <SocialDisplay posts={posts} setPosts={setPosts} />
    </div>
  );
};

export default SocialPart;
