import React from 'react';
import SectionHeading from '../../../../components/SectionHeading/SectionHeading';

const Hero = () => {
  return (
    <section className="bg-[url('/assets/images/company/banner.webp')] bg-cover w-full px-[15px] mx-auto p-[80px_0]">
      <div className="container">
        <div className="row text-center">
          <div className="col-md-12">
            <h1 className="section-heading mt-[40px] mb-[0.5rem] text-[50px]"><SectionHeading highlightText="Engagement Models" /></h1>
            <p className="sub-heading max-w-[950px] inline-block !pb-[30px]">GoodCore is a software development company that designs, develops, and supports bespoke software solutions, and works with clients having varying preferences, business needs, and organizational cultures. </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;