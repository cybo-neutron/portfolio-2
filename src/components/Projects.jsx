import React from "react";
import { projectsData } from "../data/projectsData";
import ProjectCard from "./Cards/ProjectCard";

function Projects() {
  return (
    <div className="bg-gray-200 flex flex-col py-10 lg:px-8" id="projects">
      <div className="font-bold self-center text-3xl mb-2">Projects</div>
      <hr className="mb-10  self-center bg-black  w-16 border-b-black border-black border-2" />
      <div className="flex flex-col items-center gap-y-2 sm:grid > grid-cols-2 > px-3 lg:grid-cols-3 ">
        {projectsData.map((props) => (
          <ProjectCard {...props} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
