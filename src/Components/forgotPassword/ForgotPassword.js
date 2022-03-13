import React, { useState } from "react";
import { Link } from "react-router-dom";
import useFireabse from "../../hooks/useFirebase";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const { resetPassword } = useFireabse();
  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };
  const handleReset = (e) => {
    e.preventDefault();
    resetPassword(email);
  };
  return (
    <div className="w-[30%] mx-auto mt-16">
      <p className="my-8 text-xl font-semibold text-center">
        {" "}
        Forgot Password?
      </p>
      <form onSubmit={handleReset}>
        <input
          onBlur={handleOnBlur}
          className="w-full py-2 px-3 border-2 rounded-md mb-2"
          type="email"
          placeholder="Type Your Registered Email"
        />
        <input
          className="w-full py-3 rounded-md mb-2 bg-blue-500 text-white"
          type="submit"
          value="Reset Password"
        />
      </form>
      <Link to="/">
        <p className=" my-4 text-blue-700 text-center">Home</p>
      </Link>
    </div>
  );
};

export default ForgotPassword;
