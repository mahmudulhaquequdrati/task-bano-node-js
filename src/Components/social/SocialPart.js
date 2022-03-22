import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import SocialDisplay from "./SocialDisplay";
import SocialPost from "./SocialPost";

const SocialPart = () => {
  const [posts, setPosts] = useState([]);
  const { user, token } = useAuth();

  useEffect(() => {
    fetch(`https://task-internshala-server.herokuapp.com/posts`, {
      headers: {
        email: user.email,
        authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, [token, user.email]);
  return (
    <div>
      <SocialPost posts={posts} setPosts={setPosts} />
      <hr className="w-[40%] mx-auto mt-6 bg-gray-500" />
      <SocialDisplay posts={posts} setPosts={setPosts} />
    </div>
  );
};

export default SocialPart;
