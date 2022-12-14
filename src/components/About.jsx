import React from "react";

function About() {
  return (
    <div className="bg-gray-300 flex flex-col py-10" id="about">
      <div className="font-bold self-center text-3xl">About Me</div>
      <hr className="mb-3  self-center bg-black  w-16 border-b-black border-black border-2" />

      <div className="self-center text-center lg:w-7/12">
        Hello! My name is Niranjan Pandit. I am a full stack developer currently
        living in Pune,India. <br />I love creating things for the internet that
        are visually appealing and are performant in execution. I have a
        professional experience of 1.5 years working with React, TypeScript, C++
        and backend technologies such as Node.js and MongoDB.
        <br />
        In my spare time I also love to play and develop games 🎮.
        <br />
        Check more about me below👇
        {/* <div className="flex justify-around">
          <Card title={"My Skills"} />
          <Card title={"Projects"} />
          <Card title={"Experience"} />
        </div> */}
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
