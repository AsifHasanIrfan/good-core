import React from "react";
import SectionHeading from "../../../../components/SectionHeading/SectionHeading";
import { CloudPlatformTechArray } from "../../constant";
import TechnologiesBox from "../../partials/TechnologiesBox";

const CloutPlatform = () => {
  return (
    <section className="bg-gray-100 md:p-[80px_0] p-[40px_0]">
      <div className="container p-0 !max-w-[1070px]">
        <div className="row text-center">
          <div className="col-12">
            <h2 className="section-heading">
              <SectionHeading highlightText="CLOUD PLATFORMS" />
            </h2>
          </div>
        </div>

        <div className="row">
          <TechnologiesBox techArray={CloudPlatformTechArray}>
            <p className="text-[18px] leading-[1.8] p-[0_50px_0_0] mb-[1rem]">
              Our team has specialised skills to develop cloud-native
              applications for the three most popular cloud computing platforms.
              This ensures that your application is able to scale well beyond
              the original version.
            </p>
          </TechnologiesBox>
        </div>
      </div>
    </section>
  );
};

export default CloutPlatform;
