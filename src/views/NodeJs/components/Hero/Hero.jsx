import React from "react";
import Button from "../../../../components/Button/Button";
import SectionHeading from "../../../../components/SectionHeading/SectionHeading";
import SectionCounter from "../../partials/SectionCounter";

const Hero = () => {
  return (
    <section className="bg-gray-bg pt-[80px] relative overflow-hidden w-full px-[15px] mx-auto before:absolute before:left-0 before:bottom-0 before:bg-[url('/assets/images/bg-header-left.webp')] before:w-[280px] before:h-[360px] before:bg-no-repeat">
      <div className="container">
        <div className="row text-center mb-[3rem]">
          <div className="col-md-12">
            <h1 className="section-heading tracking-normal text-[64px] mt-0 mb-[0.5rem]">
              <SectionHeading highlightText="NODE.JS" /> DEVELOPMENT COMPANY
            </h1>
            <p className="sub-heading !text-[#999] inline-block">
              We use Node.js to build exceptional backend solutions for web and
              mobile apps that are modern, robust, and scalable. Hire our
              Node.js developers and kickstart your project in 2 weeks.{" "}
            </p>
            <Button
              href=""
              className="!mt-[12px] !text-[18px] !p-[20px_40px]"
              variant="fill"
            >
              Get Started
            </Button>
          </div>
        </div>

        <SectionCounter />
      </div>
    </section>
  );
};

export default Hero;
