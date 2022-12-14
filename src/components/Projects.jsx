import React from "react";
import ProjectCard from "./Cards/ProjectCard";

function Projects() {
  return (
    <div className="bg-gray-200 flex flex-col py-10" id="projects">
      <div className="font-bold self-center text-3xl mb-2">Projects</div>
      <hr className="mb-10  self-center bg-black  w-16 border-b-black border-black border-2" />
      <div className="flex flex-col items-center gap-y-1 sm:grid > grid-cols-2 > px-3 lg:grid-cols-3">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
}

export default Projects;
