import React from 'react';
import SectionHeading from '../../../../components/SectionHeading/SectionHeading';
import TechItem from '../../../../shared/Technology/TechItem/TechItem';
import { backEndTech, DatabaseTech, frameworksLibraries, frontEndTech } from '../../constant';

const Technologies = () => {
  return (
    <section className="p-[80px_0]">
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
            <h4 className="text-[#2f73ac] font-bold text-[1.5rem] mb-[0.5rem] leading-[1.2]">Front-end</h4>
            <ul className="mb-[1rem]">
              {frontEndTech.map(item => <TechItem key={item.title} data={item} />)}
            </ul>
            <h4 className="text-[#2f73ac] font-bold text-[1.5rem] mb-[0.5rem] leading-[1.2]">Back-end</h4>
            <ul className="mb-[1rem]">
              {backEndTech.map(item => <TechItem key={item.title} data={item} />)}
            </ul>
          </div>
        </div>

        <div className="col-md-6">
          <div className="mt-[40px]">
            <h4 className="text-[#2f73ac] font-bold text-[1.5rem] mb-[0.5rem] leading-[1.2]">Frameworks / Libraries</h4>
            <ul className="mb-[1rem]">
              {frameworksLibraries.map(item => <TechItem key={item.title} data={item} />)}
            </ul>
            <h4 className="text-[#2f73ac] font-bold text-[1.5rem] mb-[0.5rem] leading-[1.2]">Database</h4>
            <ul className="mb-[1rem]">
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