import React from 'react';
import SectionHeading from '../../../../components/SectionHeading/SectionHeading';
import Image from 'next/image';
import caseProcess from '../../../../assets/images/cases/ourprocess.png';

const CaseProcess = () => {
  return (
    <section className="w-full px-[15px] mx-auto p-[80px_0]">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h2 className="section-heading">
              <SectionHeading highlightText="Our Process" />
            </h2>
          </div>
        </div>

        <div className="row items-center">
          <div className="col-md-4 order-2">
            <Image src={caseProcess} alt="case-process" />
          </div>
          <div className="col-md-8 md:order-1">
            <p className="text-[18px] leading-[30px] mb-[1rem] mt-[1rem]">
              Our process of app development followed the agile model that began
              with acquiring the necessary knowledge about our client’s customer
              base and their operational requirements. After extensive
              brainstorming sessions with our client, we finalised the
              conceptual and visual design on the software and kickstarted the
              development process.
              <br />
              <br />
              We built a highly-interactive frontend using JQuery and Bootstrap
              and used the PHP Yii framework to implement the MVC architecture
              of the briefing management software. Our focus was to ensure a
              highly-secured application architecture, design, and code
              implementation.
              <br />
              <br />
              To guarantee the best performance and quality, the product
              underwent a rigorous testing process before and after the launch
              that included white-box black-box, and post-launch testing. We
              also provided support and necessary enhancements following the
              launch.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseProcess;