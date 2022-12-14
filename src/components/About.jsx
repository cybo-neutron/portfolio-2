import React from "react";

function About() {
  return (
    <div className="bg-gray-300 flex py-3 flex-col md:flex-row" id="about">
      <div className="font-bold self-center text-2xl">About Me</div>
      <div className="text-center">
        I am a full stack developer based out in Pune,India. <br />I have an
        experience of 1.5 years working with C++ and React. I have experience of
        working with backend technologies such as Node.js and MongoDB.
        <div className="flex justify-around">
          <Card title={"My Skills"} />
          <Card title={"Projects"} />
          <Card title={"Experience"} />
        </div>
      </div>
    </div>
  );
}

function Card({ title }) {
  return (
    <div className="bg-black w-fit text-white px-2 cursor-pointer">{title}</div>
  );
}

export default About;
