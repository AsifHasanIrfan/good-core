import React from 'react';
import SectionHeading from '../../../../components/SectionHeading/SectionHeading';

const AppFactor = () => {
  return (
    <section className="p-[80px_0]">
      <div className="container">
        <div className="container p-0">
          <div className="row text-center mb-[1.5rem]">
            <div className="col-md-12">
              <h2 className="section-heading text-[36px]">
                <SectionHeading highlightText="ALL SOFTWARE" /> PROJECTS ARE NOT
                EQUAL
              </h2>
              <p className="sub-content !font-bold">
                Factors Impacting Bespoke Software Development Costs
              </p>
              <p className="text-[18px] leading-[30px] mb-[1rem]">
                Just like everything else in life, all custom software projects
                are not equal either. They differ based on not only individual
                software development companies but also the following high-level
                characteristics:
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppFactor;