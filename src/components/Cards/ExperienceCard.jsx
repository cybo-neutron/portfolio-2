import React from "react";

function ExperienceCard() {
  return (
    <div>
      <p className="text-[0.7em] text-zinc-700">
        {"Aug 2021"} - {"Aug 2022"} (1 yr)
      </p>
      <h1 className="text-xl font-bold">Amazon</h1>
      <h2 className="font-semibold">Software Development Engineer 1</h2>
      <div className="flex gap-x-2">
        <h3>Kindle Devices</h3>|
      </div>

      <div className="text-sm">
        Worked on UI improvement and unit test coverage for 4 new feature
        packages for Kindle E-reader with code coverage over 90%.(Jest for react
        and GoogleTest for C++)
      </div>
    </div>
  );
}

export default ExperienceCard;
