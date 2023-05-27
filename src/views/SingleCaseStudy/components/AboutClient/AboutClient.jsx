import React from 'react';
import SectionHeading from '../../../../components/SectionHeading/SectionHeading';

const AboutClient = () => {
  return (
    <section className="bg-[url('/assets/images/cases/circle-pattren.png')] bg-[#f5f9fc] bg-cover text-[#303234] text-left w-full px-[15px] mx-auto p-[80px_0]">
      <div className="container">
        <div className="row text-center">
          <div className="col-md-12">
            <h2 className="section-heading">
              <SectionHeading highlightText="ABOUT" /> CLIENT
            </h2>
            <p className="sub-heading !text-[18px] !p-[20px_0] !px-[70px]">
              Our client - a Silicon Valley startup - is passionate about
              offering an automated and efficient solution to Fortune 100
              companies to streamline and manage their briefing programs,
              corporate events, and meetings.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutClient;