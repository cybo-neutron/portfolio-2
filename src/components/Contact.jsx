import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { BsTwitter, BsLinkedin } from "react-icons/bs";
import { RiBookletLine } from "react-icons/ri";
import { MdMail } from "react-icons/md";

import { links } from "../data/links";

function Contact() {
  return (
    <div
      id="contact"
      className="flex justify-center bg-zinc-300 pb-64 flex-col items-center"
    >
      <h1 className="text-2xl font-bold pt-10">Contact Me</h1>
      <div>
        <p>Feel free to contact me</p>
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
  );
}

export default Contact;
