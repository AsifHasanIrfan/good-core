import Image from "next/image";
import React from "react";
import Button from "../../../../components/Button/Button";
import SectionHeading from "../../../../components/SectionHeading/SectionHeading";
import { phpHeroTechArray } from "../../constant";

const Hero = () => {
  return (
    <section className="bg-gray-bg pt-[80px] relative overflow-hidden w-full px-[15px] mx-auto before:absolute before:left-0 before:bottom-0 before:bg-[url('/assets/images/bg-header-left.webp')] before:w-[280px] before:h-[360px] before:bg-no-repeat">
      <div className="container">
        <div className="row text-center mb-[3rem]">
          <div className="col-md-12">
            <h1 className="section-heading tracking-normal text-[64px] mt-0 mb-[0.5rem]">
              <SectionHeading highlightText="PHP" /> DEVELOPMENT COMPANY
            </h1>
            <p className="sub-heading !text-[#999] inline-block">
              We offer end-to-end PHP development services to create business
              solutions that are fast, flexible, and modern, using Laravel, Yii,
              Zend, and Symfony frameworks.{" "}
            </p>
            <Button
              href=""
              className="!mt-[12px] !text-[18px] !p-[20px_40px]"
              variant="fill"
            >
              Get Started
            </Button>
          </div>

          {/* bottom tech  */}
          <div className="col-md-12">
            <ul className="mt-[70px] p-0">
              {phpHeroTechArray?.map((item, i) => (
                <li key={i} className="p-[10px_14px] inline-block">
                  <div>
                    <Image
                      src={item.imgUrl}
                      alt={item.title}
                      width={item.width}
                      height={item.height}
                      className={`grayscale mx-auto md:w-auto md:h-[50px] w-[30px] h-[30px]`}
                    />
                  </div>
                  <span className="md:text-[16px] text-[11px] text-gray-30 font-semibold pt-[20px] block">
                    {item.title}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
