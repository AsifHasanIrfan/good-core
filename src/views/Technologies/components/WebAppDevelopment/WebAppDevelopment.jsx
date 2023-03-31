import Link from "next/link";
import React from "react";
import SectionHeading from "../../../../components/SectionHeading/SectionHeading";
import { BackTechArray, CMSTechArray, FrontendTechArray } from "../../constant";
import TechnologiesBox from "../../partials/TechnologiesBox";

const WebAppDevelopment = () => {
  return (
    <section className="bg-gray-100 md:p-[80px_0] p-[40px_0]">
      <div className="container p-0 !max-w-[1070px]">
        <div className="row text-center">
          <div className="col-12">
            <h2 className="section-heading">
              <SectionHeading highlightText="WEB APPLICATION" /> development{" "}
            </h2>
          </div>
        </div>

        <div className="row border-b-[2px] border-[#dceaf5]">
          <TechnologiesBox heading="Front-end" techArray={FrontendTechArray}>
            <p className="text-[18px] leading-[1.8] p-[0_50px_0_0] mb-[1rem]">
              Our forte lies in developing responsive and dynamic
              user-interfaces for{" "}
              <Link
                href="/technologies"
                className="text-primary-300 hover:underline"
              >
                {" "}
                web applications
              </Link>{" "}
              for smooth user experience.
            </p>
          </TechnologiesBox>
        </div>
        <div className="row border-b-[2px] border-[#dceaf5]">
          <TechnologiesBox heading="Back-end" techArray={BackTechArray}>
            <p className="text-[18px] leading-[1.8] p-[0_50px_0_0] mb-[1rem]">
              A strong backend is vital for any software application to function
              properly, and the technologies our team works with make sure of
              it.
            </p>
          </TechnologiesBox>
        </div>
        <div className="row">
          <TechnologiesBox
            heading="Content Management Systems (CMS)"
            techArray={CMSTechArray}
          >
            <p className="text-[18px] leading-[1.8] p-[0_50px_0_0] mb-[1rem]">
              For projects that require easy and efficient management of website
              content, we offer Content Management System (CMS) integrations for
              the following platforms.
            </p>
          </TechnologiesBox>
        </div>
      </div>
    </section>
  );
};

export default WebAppDevelopment;
