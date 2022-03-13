import React from "react";
import { Link } from "react-router-dom";
import Header from "../header/Header";

const Home = () => {
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
      <h2 className="text-center font-semibold my-6 text-2xl">
        Task For Banao NodeJS
      </h2>
      <img
        className="w-[28%] mx-auto"
        src="https://img.freepik.com/free-vector/add-tasks-concept-illustration_114360-4765.jpg?w=740"
        alt=""
      />
    </div>
  );
};

export default Home;
