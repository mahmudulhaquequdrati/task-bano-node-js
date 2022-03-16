import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Header from "../header/Header";
import SocialPart from "../social/SocialPart";

const Home = () => {
  const { user } = useAuth();
  return (
    <div>
      <div className="flex justify-center items-center mt-6 ">
        <div className="flex gap-4 ">
          <Link className="bg-blue-200  py-1 px-4 rounded" to="/register">
            Register
          </Link>
          <Link className="bg-blue-200  py-1 px-4 rounded" to="/login">
            Login
          </Link>
        </div>
      </div>
      <Header />
      {!user?.email && (
        <h2 className="text-center font-semibold my-6 text-2xl">
          Task 2 For Banao NodeJS
        </h2>
      )}
      {!user?.email && (
        <img
          className="w-[28%] mx-auto"
          src="https://img.freepik.com/free-vector/add-tasks-concept-illustration_114360-4765.jpg?w=740"
          alt=""
        />
      )}
      {user?.email && (
        <div className="">
          <p className="text-center text-lg font-semibold mb-8 mt-4">
            Make a post today
          </p>
          <SocialPart />
        </div>
      )}
    </div>
  );
};

export default Home;
