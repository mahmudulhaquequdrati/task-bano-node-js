import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";
import avatar from "../../images/avatar.jpg";

const SinglePost = ({ post, setPosts }) => {
  const { user } = useAuth();
  const [click, setClick] = useState(true);
  const [handleComment, setHandleComment] = useState(false);
  const [comment, setComment] = useState("");
  const { name, img, postText, _id, comments, photo } = post;

  const handleOnClick = () => {
    setClick(!click);
  };
  const handleCommentClick = () => {
    setHandleComment(!handleComment);
  };
  const handleCommentForm = (e) => {
    e.preventDefault();
    const commentsInfo = {
      comments: comment,
      commentorPhoto: user?.photoURL,
      _id: _id,
    };
    fetch("http://localhost:5000/comments", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(commentsInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          alert("comments added!❤️");
          const field = document.getElementById("comment");
          field.value = "";
          fetch("http://localhost:5000/post")
            .then((res) => res.json())
            .then((data) => setPosts(data));
        }
      });
  };
  return (
    <div className="mt-12">
      <div className="flex gap-2">
        <div className="">
          {photo ? (
            <img
              width="50px"
              className="rounded-full border border-gray-600"
              src={photo}
              alt=""
            />
          ) : (
            <img
              width="50px"
              className="rounded-full border border-gray-600"
              src={avatar}
              alt=""
            />
          )}
        </div>
        <div className="">
          <p className="text-lg">{name}</p>
          <p className="text-sm font-medium">web developer</p>
        </div>
      </div>
      <p className="mt-4 mb-4 px-2">{postText}</p>
      <div className="mb-3">
        <img src={`data:image/*;base64,${img}`} alt="" />
      </div>
      <div className="flex gap-4 justify-between px-8">
        {click && (
          <button className="flex items-center gap-2" onClick={handleOnClick}>
            <i className="fa-solid fa-thumbs-up"></i>
            like
          </button>
        )}
        {!click && (
          <button className="flex items-center gap-2" onClick={handleOnClick}>
            <i className="fa-solid fa-thumbs-down"></i>
            dislike
          </button>
        )}
        <button
          className="flex items-center gap-2"
          onClick={handleCommentClick}
        >
          <i className="fa-solid fa-message"></i>comment
        </button>
      </div>
      {handleComment && (
        <div className="">
          <div className="flex justify-center items-center flex-row gap-2 mt-6 mb-8">
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
            <div className="basis-4/4 sm:basis-1/2 md:basis-2/4 lg:basis-5/6">
              <form onSubmit={handleCommentForm}>
                <div className="flex gap-1">
                  <input
                    id="comment"
                    required
                    className=" rounded-full px-3 py-2 border border-gray-500 w-full outline-none"
                    type="text"
                    onBlur={(e) => setComment(e.target.value)}
                    placeholder="Write your comment"
                  />
                  <input
                    type="submit"
                    value="submit"
                    className="bg-blue-500 text-white px-6 py-2 rounded-full border-0 outline-none cursor-pointer"
                  />
                </div>
              </form>
            </div>
          </div>
          <div className="">
            {comments
              ?.slice(0)
              .reverse()
              .map((comment, i) => (
                <div className="flex gap-4 items-center mb-3" key={i}>
                  {comment.commentorPhoto ? (
                    <img
                      width="50px"
                      className="rounded-full"
                      src={comment.commentorPhoto}
                      alt=""
                    />
                  ) : (
                    <img
                      width="50px"
                      className="rounded-full"
                      src={avatar}
                      alt=""
                    />
                  )}
                  <p>{comment.comment}</p>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SinglePost;
