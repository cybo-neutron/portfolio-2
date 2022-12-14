import React from "react";

function ExperienceCard(props) {
  return (
    <div>
      <p className="text-[0.7em] text-zinc-700">
        {props.from} - {props.to} ({props.duration})
      </p>
      <h1 className="text-xl font-bold">{props.company}</h1>
      <h2 className="font-semibold">{props.designation}</h2>
      <div className="flex gap-x-2">
        <h3>{props.team}</h3>
      </div>
      {/* Description  */}
      <div className="">
        {props.work.map((elem, index) => (
          <p key={index}>👾 {elem}</p>
        ))}
      </div>

      {/* Tech Stack  */}
      <div className="flex gap-x-3 text-sm mt-2 flex-wrap">
        {props.tech_stack.map((elem, index) => {
          return (
            <p key={index} className="bg-zinc-300 px-1 rounded-sm">
              {elem}
            </p>
          );
        })}
      </div>
    </div>
  );
}

export default ExperienceCard;
