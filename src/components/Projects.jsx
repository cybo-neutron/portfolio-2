import React from "react";
import ProjectCard from "./Cards/ProjectCard";

function Projects() {
  return (
    <div className="bg-gray-300 flex flex-col py-2" id="projects">
      <div className="font-bold self-center text-2xl py-3">Projects</div>
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
