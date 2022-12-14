import React from "react";
import { skills } from "../data/skills";

function Skills() {
  return (
    <div className="bg-gray-200 flex flex-col py-4" id="about">
      <div className="font-bold self-center text-2xl mb-3">Skills</div>
      <div className="flex flex-wrap justify-center w-8/12 self-center gap-y-2 gap-x-1">
        {skills.map((elem) => {
          return (
            <div
              className="bg-zinc-400 px-1 font-semibold rounded-sm"
              key={elem.name}
            >
              {elem.name}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
