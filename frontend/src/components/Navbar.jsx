import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full backdrop-blur-md shadow-sm sticky top-0 z-50 mb-8">
      <div className="flex flex-row justify-between items-center py-4 max-w-7xl mx-auto">
        <div>
          <h1 className="text-3xl font-bold text-blue-600">MindSpace</h1>
        </div>
        <div className="flex gap-6">
          <button className="px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium">
            Log in
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors font-medium">
            Register
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
