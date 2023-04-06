import React from "react";
import IndustriesBox from "../../../../shared/IndustriesBox/IndustriesBox";
import { serveIndustryArray } from "../../constant";

const ServeIndustry = () => {
  return (
    <section className="md:pb-[80px] pb-[40px]">
      <div className="container">
        <div className="row text-center">
          <div className="col-md-12">
            <h2 className="section-heading !tracking-[2px]">
              INDUSTRIES WE SERVE{" "}
            </h2>
          </div>
        </div>

        <div className="row flex justify-center !mt-[1rem]">
          {serveIndustryArray?.map((item, i) => (
            <IndustriesBox key={i} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServeIndustry;
