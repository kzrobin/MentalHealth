import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 to-slate-100">
      <Navbar />
      <main className="flex-1 flex flex-col w-full">{children}</main>
    </div>
  );
};

export default Layout;
