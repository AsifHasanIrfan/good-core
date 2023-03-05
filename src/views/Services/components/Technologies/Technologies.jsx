import React from 'react';
import SectionHeading from '../../../../components/SectionHeading/SectionHeading';
import TechItem from '../../../../shared/Technology/TechItem/TechItem';
import { backEndTech, DatabaseTech, frameworksLibraries, frontEndTech } from '../../constant';

const Technologies = () => {
  return (
    <section className="md:p-[80px_0] p-[40px_0]">
      <div className="container p-0">
      {/* Section Heading */}
      <div className="row text-center">
        <div className="col-md-12">
          <h2 className="section-heading"><SectionHeading highlightText="Tools & Technologies" /> Our Software Developers Use </h2>
        </div>
      </div>

      {/* Tools and Technologies */}
      <div className="row mt-[1rem]">
        <div className="col-md-6">
          <div className="mt-[40px]">
            <h4 className="text-[#2f73ac] font-bold text-[1.5rem] mb-[0.5rem] leading-[1.2] text-center md:text-left">Front-end</h4>
            <ul className="mb-[1rem] text-center md:text-left">
              {frontEndTech.map(item => <TechItem key={item.title} data={item} />)}
            </ul>
            <h4 className="text-[#2f73ac] font-bold text-[1.5rem] mb-[0.5rem] leading-[1.2] text-center md:text-left">Back-end</h4>
            <ul className="mb-[1rem] text-center md:text-left">
              {backEndTech.map(item => <TechItem key={item.title} data={item} />)}
            </ul>
          </div>
        </div>

        <div className="col-md-6">
          <div className="mt-[40px]">
            <h4 className="text-[#2f73ac] font-bold text-[1.5rem] mb-[0.5rem] leading-[1.2] text-center md:text-left">Frameworks / Libraries</h4>
            <ul className="mb-[1rem] text-center md:text-left">
              {frameworksLibraries.map(item => <TechItem key={item.title} data={item} />)}
            </ul>
            <h4 className="text-[#2f73ac] font-bold text-[1.5rem] mb-[0.5rem] leading-[1.2] text-center md:text-left">Database</h4>
            <ul className="mb-[1rem] text-center md:text-left">
              {DatabaseTech.map(item => <TechItem key={item.title} data={item} />)}
            </ul>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Technologies;