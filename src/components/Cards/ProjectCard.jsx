import React from "react";
import image from "../../assets/pcard.jpg";

import { AiFillGithub, AiFillChrome, AiFillYoutube } from "react-icons/ai";

function ProjectCard() {
  return (
    <div className="bg-zinc-200 w-11/12 text-center group cursor-pointer hover:shadow-md rounded-md">
      <img
        src={image}
        alt=""
        className="grayscale group-hover:grayscale-0 rounded-t-md"
      />
      <h1 className="font-bold text-xl">Title</h1>
      <div className="text-sm ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quos at
        laudantium esse maiores! Tenetur dolorum incidunt saepe. Ex ipsa beatae
        dolorem qui alias? Voluptates necessitatibus at delectus illo nulla.
        Ipsa, doloremque autem! Magni asperiores adipisci molestiae quaerat
        officiis libero consequuntur ex, dolor et in inventore exercitationem
        ipsa fuga! Debitis.
      </div>
      <div>Tech Stack</div>
      {/* Links  */}
      <div className="flex gap-x-2 justify-center mb-2 flex-wrap">
        <button className="bg-gray-900 text-gray-100 px-1 flex justify-center items-center rounded-sm">
          <AiFillGithub className="mr-1" />
          Github
        </button>
        <button className="bg-gray-900 text-gray-100 px-1 flex justify-center items-center rounded-sm">
          <AiFillChrome className="mr-1" />
          Website
        </button>
        <button className="bg-gray-900 text-gray-100 px-1 flex justify-center items-center rounded-sm">
          <AiFillYoutube className="mr-1" />
          Video
        </button>
      </div>
    </div>
  );
}

export default ProjectCard;
