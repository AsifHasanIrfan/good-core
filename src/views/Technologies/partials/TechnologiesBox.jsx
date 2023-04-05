import React from "react";
import TechItem from "../../../shared/Technology/TechItem/TechItem";

const TechnologiesBox = ({ heading, children, techArray }) => {
  return (
    <>
      <div className="col-md-6 mt-[40px]">
        <h4 className="text-primary-100 text-[26px] font-bold mb-[.5rem] leading-[1.2]">
          {heading && heading}
        </h4>
        {children}
      </div>
      <div className="col-md-6">
        <ul className="mt-[40px] mb-[1rem]">
          {techArray.map((item) => (
            <TechItem key={item.title} data={item} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default TechnologiesBox;
