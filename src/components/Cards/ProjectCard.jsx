import React from "react";
import image from "../../assets/pcard.jpg";

import { AiFillGithub, AiFillChrome, AiFillYoutube } from "react-icons/ai";

function ProjectCard(props) {
  const {
    image,
    title,
    description,
    tech_stack,
    githubLink,
    githubLink2,
    website,
    videoLink,
  } = props;
  return (
    <div className="bg-zinc-100 w-11/12 group cursor-pointer hover:shadow-2xl rounded-md flex flex-col">
      <img
        src={image}
        alt=""
        className="grayscale group-hover:grayscale-0 rounded-t-md"
      />
      <h1 className="font-bold text-xl self-center">{title}</h1>
      <div>
        <div className="flex flex-wrap gap-x-2 gap-y-1 justify-center text-sm">
          {tech_stack.map((elem) => (
            <p className="bg-zinc-300 px-1 rounded-sm">{elem}</p>
          ))}
        </div>
      </div>

      <div className="text-sm px-2 text-center">{description}</div>

      {/* Links  */}
      <div className="flex gap-x-2 justify-center mb-2 flex-wrap">
        {githubLink && (
          <a href={githubLink} target="_blank">
            <button className="bg-gray-900 text-gray-100 px-1 flex justify-center items-center rounded-sm hover:bg-emerald-800">
              <AiFillGithub className="mr-1" />
              Github
            </button>
          </a>
        )}

        {githubLink2 && (
          <a href={githubLink} target="_blank">
            <button className="bg-gray-900 text-gray-100 px-1 flex justify-center items-center rounded-sm hover:bg-lime-800">
              <AiFillGithub className="mr-1" />
              Backend
            </button>
          </a>
        )}

        {website && (
          <a href={website} target="_blank">
            <button className="bg-gray-900 text-gray-100 px-1 flex justify-center items-center rounded-sm hover:bg-blue-800 ">
              <AiFillChrome className="mr-1" />
              Website
            </button>
          </a>
        )}

        {videoLink && (
          <a href={videoLink} target="_blank">
            <button className="bg-gray-900 text-gray-100 px-1 flex justify-center items-center rounded-sm hover:bg-red-800">
              <AiFillYoutube className="mr-1" />
              Video
            </button>
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
