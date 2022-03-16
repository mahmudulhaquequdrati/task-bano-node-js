import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";
import avatar from "../../images/avatar.jpg";

const SocialPost = ({ posts, setPosts }) => {
  const { user } = useAuth();
  const [postText, setPostText] = useState("");
  const [img, setImg] = useState(null);
  // const comment = [];

  const handleForm = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("postText", postText);
    formData.append("img", img);
    formData.append("email", user.email);
    formData.append("name", user.displayName);
    formData.append("photo", user?.photoURL);
    // formData.append("comments", comment);

    fetch("http://localhost:5000/post", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("your post was successfully uploaded!❤️");
          fetch("http://localhost:5000/post")
            .then((res) => res.json())
            .then((data) => setPosts(data));
          const field = document.getElementById("postField");
          field.value = "";
        }
      });
  };
  return (
    <div className="flex justify-center items-start flex-row gap-2">
      {user?.photoURL ? (
        <img
          width="50px"
          className="rounded-full"
          src={user?.photoURL}
          alt=""
        />
      ) : (
        <img width="50px" className="rounded-full" src={avatar} alt="" />
      )}

      <form
        className="basis-3/4 sm:basis-1/2 md:basis-1/3 lg:basis-1/3"
        onSubmit={handleForm}
      >
        <textarea
          id="postField"
          required
          className="rounded-lg px-3 py-2 border border-gray-500 w-full outline-none"
          type="text"
          placeholder="Start a post"
          onChange={(e) => setPostText(e.target.value)}
        />
        <div className="flex justify-between mt-4 px-2">
          <input
            id="files"
            type="file"
            className=""
            onChange={(e) => setImg(e.target.files[0])}
          />
          <input
            type="submit"
            value="Post"
            className=" rounded-full py-1 px-6 text-white font-semibold bg-blue-500 cursor-pointer"
          />
        </div>
      </form>
      {/* {postText} */}
    </div>
  );
};

export default SocialPost;
