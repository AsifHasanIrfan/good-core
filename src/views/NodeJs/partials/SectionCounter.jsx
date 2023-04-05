import React from "react";
import SingleCount from "./SingleCount";

const SectionCounter = () => {
  return (
    <div className="before:absolute before:w-full before:h-full before:bg-gray-20 before:top-auto before:left-0 before:opacity-[.7] p-0">
      <div className="row">
        <SingleCount
          url="/assets/images/technologies/project-delivered.webp"
          width={44}
          height={44}
          heading="60%"
          body="of our projects are Node.js"
        />

        <SingleCount
          url="/assets/images/technologies/yrs-of-exp.webp"
          width={44}
          height={42}
          heading="16+"
          body="Years of industry experience"
        />

        <SingleCount
          url="/assets/images/technologies/clutch-review.webp"
          width={39}
          height={43}
          heading="5"
          body="Clutch Reviews"
        />

        <SingleCount
          url="/assets/images/technologies/location-based.webp"
          width={27}
          height={41}
          heading="4"
          body="UK-based & Offshore Development Centres"
        />
      </div>
    </div>
  );
};

export default SectionCounter;
