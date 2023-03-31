import React from 'react';
import SectionHeading from '../../../../components/SectionHeading/SectionHeading';
import AgilePrinciplesCard from '../../partials/AgilePrinciplesCard';

const Principles = () => {
  return (
    <section className="md:p-[80px_0] p-[40px_0]">
      <div className="container text-center p-0">
        <div className="row">
          <div className="col-md-12">
            <h1 className="section-heading">
              <SectionHeading highlightText=" OUR" /> PRINCIPLES OF AGILE
              SOFTWARE DEVELOPMENT
            </h1>
          </div>
        </div>
        <div className="mt-[1.5rem] justify-around flex flex-wrap text-center">
          <AgilePrinciplesCard iconCss="bg-[0_0] w-[40px] h-[41px]">
            Customer <br />
            Satisfaction
          </AgilePrinciplesCard>
          <AgilePrinciplesCard iconCss="bg-[0_-51px] w-[40px] h-[40px]">
            Timely <br />
            Deliverables
          </AgilePrinciplesCard>
          <AgilePrinciplesCard iconCss="bg-[0_-101px] w-[42px] h-[44px]">
            Managing Changing Requirements
          </AgilePrinciplesCard>
          <AgilePrinciplesCard iconCss="bg-[0_-155px] w-[40px] h-[40px]">
            Customer <br />
            Collaboration
          </AgilePrinciplesCard>
          <AgilePrinciplesCard iconCss="bg-[0_-205px] w-[39px] h-[40px]">
            Steady Pace of Development
          </AgilePrinciplesCard>
        </div>
      </div>
    </section>
  );
};

export default Principles;
