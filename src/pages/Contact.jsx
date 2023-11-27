import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="bg-blue-600 text-white flex justify-center items-center flex-col h-screen w-full ">
      <h2>Contact Page</h2>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/github">GitHub</Link>
    </div>
  );
};

export default Contact;
