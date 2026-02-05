import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = ({ mood = null }) => {
  const navigate = useNavigate();

  return (
    <nav className="w-full sticky top-0 z-50">
      <div className="flex flex-row justify-between items-center py-4 px-6 max-w-7xl mx-auto">
        <div>
          <button
            onClick={() => navigate("/")}
            className="text-3xl font-bold text-blue-600 hover:text-blue-700 transition-colors cursor-pointer"
          >
            MindSpace
          </button>
        </div>
        <div className="flex gap-6">
          <button
            onClick={() => navigate("/login")}
            className="px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium"
          >
            Log in
          </button>
          <button
            onClick={() => navigate("/register")}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors font-medium"
          >
            Register
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
