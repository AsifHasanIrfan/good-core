import React from 'react';
import SectionHeading from '../../../../components/SectionHeading/SectionHeading';
import Image from 'next/image';
import caseTeam from '../../../../assets/images/cases/team.png';

const Team = () => {
  return (
    <section className="bg-[#f5f9fc] w-full px-[15px] mx-auto p-[80px_0]">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h2 className="section-heading">
              <SectionHeading highlightText="Team" />
            </h2>
          </div>
        </div>

        <div className="row items-center">
          <div className="col-md-4">
            <Image src={caseTeam} alt="case-team" />
          </div>
          <div className="col-md-8 md:order-2">
            <p className="text-[18px] leading-[30px] mb-[1rem] mt-[1rem]">
              We started working on this briefing program manager in 2012 with a
              team of three senior-level developers that grew and evolved over
              time in response to our client’s changing needs. Today, the team
              consists of 10 members, comprising of project leads, developers,
              QA engineers, and designers who are wholly committed to the latest
              version of the software in the works.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;