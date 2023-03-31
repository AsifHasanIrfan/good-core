import React from 'react';
import SectionHeading from '../../../../components/SectionHeading/SectionHeading';

const Hero = () => {
  return (
    <section className="bg-[url('/assets/images/company/serivce-banner-bg.webp')] bg-cover w-full px-[15px] mx-auto md:py-[80px] py-10">
      <div className="container">
        <div className="row text-center">
          <div className="col-md-12">
            <h1 className="section-heading md:mt-[40px] mb-[0.5rem] md:text-[50px] text-[23px]">
              SOFTWARE DEVELOPMENT <SectionHeading highlightText="PROCESS" />
            </h1>

            <p className="sub-heading max-w-[950px] inline-block md:!pb-[30px]">
              Our six-stage software development process assesses your needs and
              meets your demands. From discovery to delivery, we have perfected
              every step of our process to develop software solutions
              efficiently and on time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
