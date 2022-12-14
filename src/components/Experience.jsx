import React from "react";
import { experience } from "../data/experience";
import ExperienceCard from "./Cards/ExperienceCard";

function Experience() {
  return (
    <div className="bg-gray-200 flex flex-col py-4" id="experience">
      <div className="font-bold self-center text-3xl mb-2">Experience</div>
      <hr className="mb-3  self-center bg-black  w-16 border-b-black border-black border-2" />
      <div className="px-5 flex flex-col gap-y-8">
        {experience.map((elem) => (
          <ExperienceCard
            key={elem.from}
            from={elem.from}
            to={elem.to}
            duration={elem.duration}
            company={elem.company}
            designation={elem.designation}
            team={elem.team}
            work={elem.work}
            tech_stack={elem.tech_stack}
          />
        ))}
      </div>
    </div>
  );
}

export default Experience;
