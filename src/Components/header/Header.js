import React from "react";
import useAuth from "../../hooks/useAuth";

const Header = () => {
  const { user, logout } = useAuth();
  return (
    <div className="flex justify-center gap-4 items-center">
      {user?.email && (
        <p className="text-center font-semibold text-xl my-4">
          Welcome : {user?.email}
        </p>
      )}
      {user.email && (
        <button
          onClick={logout}
          className="bg-blue-500 px-3 py-1 rounded pb-1.5 text-white"
        >
          Logout
        </button>
      )}
    </div>
  );
};

export default Header;
