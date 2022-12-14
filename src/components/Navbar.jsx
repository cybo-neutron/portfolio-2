import React from "react";

function Navbar() {
  return (
    <div className="bg-zinc-200 flex flex-col  items-center pt-2  md:flex-row justify-between px-8">
      <div>
        <img src="nlogo.png" alt="" className="h-5" />
      </div>

      <div className="flex flex-col md:flex-row gap-x-3 justify-center items-center text-lg [&>*]:border-b-2 [&>*]:border-b-transparent ">
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
    </div>
  );
}

export default Navbar;
