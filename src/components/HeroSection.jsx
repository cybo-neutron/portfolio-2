import React from "react";
import profileImg from "../assets/Profile1.png";
import { motion } from "framer-motion";
import { FaBeer } from "react-icons/fa";

import { AiFillGithub } from "react-icons/ai";
import { BsTwitter, BsLinkedin } from "react-icons/bs";
import { links } from "../data/links";

function HeroSection() {
  return (
    <div className="bg-gray-200 flex flex-col-reverse items-center justify-center md:flex-row py-5">
      <div className="flex flex-col items-center w-11/12 mx-5 md:items-start ">
        <div className="">Hello there,</div>
        <div>
          I am <span className="font-semibold"> Niranjan. </span>
        </div>

        <div className="">Full Stack Developer 🚀| React ⚛️| Node.js</div>

        <div className="flex gap-x-3 h-9 text-xl mt-4">
          <a href="resume.pdf" target="_blank">
            <motion.button className="text-white bg-zinc-900 rounded-sm font-bold px-2">
              Resume
            </motion.button>
          </a>

          <a href={links.linkedIn} target="_blank">
            <motion.button className="text-black font-bold border-2 border-black px-2 rounded-sm flex items-center">
              <BsLinkedin className="mr-2" />
              Connect
            </motion.button>
          </a>
        </div>

        <div className="mt-3 text-2xl flex gap-x-4 [&>*]:hover:cursor-pointer ">
          <a href={links.github} target="_blank">
            <AiFillGithub />
          </a>

          <a href={links.twitter} target="_blank">
            <BsTwitter />
          </a>

          <a href={links.linkedIn} target="_blank">
            <BsLinkedin />
          </a>
        </div>
      </div>

      <div className="w-5/12 border-black rounded-full shadow-xl">
        <img
          src={profileImg}
          alt=""
          className="rounded-full float-right  border-black"
        />
      </div>
    </div>
  );
}

export default HeroSection;
