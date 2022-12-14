import React from "react";
import profileImg from "../assets/Profile1.png";
import { motion } from "framer-motion";

import { AiFillGithub } from "react-icons/ai";
import { BsTwitter, BsLinkedin } from "react-icons/bs";
import { RiBookletLine } from "react-icons/ri";
import { MdMail } from "react-icons/md";

import { links } from "../data/links";

function HeroSection() {
  return (
    <div className="bg-gray-200 flex flex-col-reverse items-center justify-center md:flex-row py-5 px-8">
      <div className="flex flex-col items-center w-11/12 mx-5 md:items-start ">
        <div className="text-xl">Hello there,</div>
        <div className="text-4xl mb-5">
          I am <span className="font-semibold"> Niranjan. </span>
        </div>

        <div className="text-center md:text-start md:w-7/12">
          A <span className="font-bold text-xl">Full Stack Developer 🚀</span>{" "}
          with a keen interest in developing visually attractive and functially
          accurate web application using{" "}
          <span className="font-bold text-xl">React ⚛️</span> and{" "}
          <span className="font-bold text-xl">Node.js</span>{" "}
        </div>

        <div className="flex gap-x-3 h-9 text-xl mt-4">
          <a href="resume.pdf" target="_blank">
            <motion.button className="text-white bg-zinc-900 rounded-sm font-bold px-2 flex items-center border-2 border-black">
              <RiBookletLine className="mr-2" />
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

          <a href={links.mail} target="_blank">
            <MdMail />
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
