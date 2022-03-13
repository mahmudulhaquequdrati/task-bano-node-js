import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import useFireabse from "../../hooks/useFirebase";

const Login = () => {
  const { loginUser } = useFireabse();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    loginUser(data.email, data.password);
    reset();
  };
  return (
    <div>
      <h2 className="font-blod text-xl text-center mt-12">Please Login</h2>
      <div className="w-[95%] md:w-[70%] lg:w-[50%] mx-auto mt-6">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("email")}
            className="w-[70%] mx-auto px-4  block border-2 h-12 rounded-md mb-2"
            type="email"
            name="email"
            placeholder="Type Your Email"
          />
          <input
            {...register("password")}
            className="w-[70%] mx-auto px-4  block border-2 h-12 rounded-md mb-2"
            type="password"
            name="password"
            placeholder="Type Your Password"
          />
          <Link to="/forgotpassword">
            <button className="text-red-500 my-3 font-medium w-[58%] md:w-[51%] lg:w-[50%] mx-auto ">
              forgot password?
            </button>
          </Link>
          <input
            className="w-[70%] mx-auto px-4 bg-blue-400 text-white block border h-12 rounded-md mb-2 cursor-pointer"
            type="submit"
            value="Login"
          />
        </form>
      </div>
      <p className="text-center text-blue-600 text-md">
        New User? <Link to="/register">Register here</Link>
      </p>
    </div>
  );
};

export default Login;
