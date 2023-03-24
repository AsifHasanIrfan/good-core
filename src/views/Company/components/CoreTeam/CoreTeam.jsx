import React from 'react';
import SectionHeading from '../../../../components/SectionHeading/SectionHeading';
import TeamSlider from '../TeamSlider/TeamSlider';

const CoreTeam = () => {
  return (
    <section className="bg-gray-100 p-[80px_0]">
      <div className="container">
        {/* Section Heading */}
        <div className="row text-center">
          <div className="col-md-12">
            <h2 className="section-heading !mb-[0.5rem]"> Meet Our <SectionHeading highlightText="Core Team" /></h2>
            <p className="sub-content">Super programmers. Worldclass business analysts. Creative designers and problem solvers. There&apos;s hardly a software app development challenge that our team cannot tackle. </p>
          </div>
        </div>

        <TeamSlider />
      </div>
    </section>
  );
};

export default CoreTeam;