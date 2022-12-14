import React from "react";
import { skills, skills_learning } from "../data/skills";

function Skills() {
  return (
    <div className="bg-gray-300 flex flex-col py-10" id="about">
      <div className="font-bold self-center text-3xl mb-1">Skills</div>

      <hr className="mb-3  self-center bg-black  w-16 border-b-black border-black border-2" />

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

      <h2 className="self-center mt-5 mb-2">
        Things I am <span className="font-semibold">learning</span> at present
      </h2>
      <div className="flex flex-wrap justify-center w-8/12 self-center gap-y-2 gap-x-1">
        {skills_learning.map((elem) => {
          return (
            <div
              className="bg-zinc-400 px-1 font-semibold rounded-sm"
              key={elem}
            >
              {elem}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
