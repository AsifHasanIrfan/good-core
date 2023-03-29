import React from 'react';
import SectionHeading from '../../../../components/SectionHeading/SectionHeading';

const Principles = () => {
  return (
    <section className="md:py-[80px] py-[40px]">
      <div className="container">
        <div className="row text-center">
          <div className="col-md-12">
            <h1 className="section-heading md:py-[30px] mb-[0.5rem] md:text-[50px] text-[26px]">
              <SectionHeading highlightText=" OUR" />
              PRINCIPLES OF AGILE SOFTWARE DEVELOPMENT
            </h1>
          </div>
        </div>
        <div className="row text-center">
          <div className="col-md-2">
            {/* <LocationCard location={'adflja'} /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Principles;
