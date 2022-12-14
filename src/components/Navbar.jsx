import React from "react";

function Navbar() {
  return (
    <div className="flex gap-x-2 px-4 py-2 justify-center md:justify-end [&>*]:border-b-2 [&>*]:border-b-transparent  bg-zinc-200">
      <div className={`hover:border-b-black  `}>
        <a href="#about">About Me</a>
      </div>

      <div className={`hover:border-b-black  `}>
        <a href="#projects">Projects</a>
      </div>

      <div className={`hover:border-b-black  `}>
        <a href="#experience">Experience</a>
      </div>

      <div className={`hover:border-b-black  `}>
        <a href="#contact">Contact</a>
      </div>
    </div>
  );
}

export default Navbar;
