import Link from "next/link";
import React from "react";
import SectionHeading from "../../../../components/SectionHeading/SectionHeading";
import { CrossPlatformTechArray, NativeTechArray } from "../../constant";
import TechnologiesBox from "../../partials/TechnologiesBox";

const MobileAppDev = () => {
  return (
    <section className="md:p-[80px_0] p-[40px_0]">
      <div className="container">
        <div className="row text-center">
          <div className="col-md-12">
            <h2 className="section-heading !tracking-[2px]">
              <SectionHeading highlightText="MOBILE APP" /> development{" "}
            </h2>
          </div>
        </div>

        <TechnologiesBox
          heading="Native"
          border={true}
          techArray={NativeTechArray}
        >
          <p className="text-[18px] leading-[1.8] p-[0_50px_0_0] mb-[1rem]">
            For native{" "}
            <Link
              href="/technologies"
              className="text-primary-300 hover:underline"
            >
              {" "}
              mobile app development
            </Link>{" "}
            projects, we utilise platform-oriented technologies to build
            user-friendly mobile apps.
          </p>
        </TechnologiesBox>

        <TechnologiesBox
          heading="Cross-Platform"
          techArray={CrossPlatformTechArray}
        >
          <p className="text-[18px] leading-[1.8] p-[0_50px_0_0] mb-[1rem]">
            Our team uses tools and technologies that allow{" "}
            <Link
              href="/technologies"
              className="text-primary-300 hover:underline"
            >
              {" "}
              cross-platform applications
            </Link>{" "}
            to perform efficiently on multiple mobile platforms.
          </p>
        </TechnologiesBox>
      </div>
    </section>
  );
};

export default MobileAppDev;
