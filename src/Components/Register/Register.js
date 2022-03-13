import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import useFireabse from "../../hooks/useFirebase";

const Register = () => {
  const { registerUser } = useFireabse();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    registerUser(data.email, data.password);
    reset();
  };
  return (
    <div>
      <h2 className="font-blod text-xl text-center mt-12">Please Register</h2>
      <div className="w-[95%] md:w-[70%] lg:w-[50%] mx-auto mt-6">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("name")}
            className="w-[70%] mx-auto px-4  block border-2 h-12 rounded-md mb-2"
            type="text"
            name="name"
            placeholder="Type Your Name"
          />
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
          <input
            className="w-[70%] mx-auto px-4 bg-blue-400 text-white block border h-12 rounded-md mb-2 cursor-pointer"
            type="submit"
            value="Register"
          />
        </form>
      </div>
      <p className="text-center text-blue-600 text-md">
        Already resgiterd? <Link to="/login">Login in here</Link>
      </p>
    </div>
  );
};

export default Register;
