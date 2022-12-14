import React from "react";
import ExperienceCard from "./Cards/ExperienceCard";

function Experience() {
  return (
    <div className="bg-gray-200 flex flex-col py-4" id="about">
      <div className="font-bold self-center text-2xl mb-3">Experience</div>
      <div className="px-2">
        <ExperienceCard />
      </div>
    </div>
  );
}

export default Experience;
