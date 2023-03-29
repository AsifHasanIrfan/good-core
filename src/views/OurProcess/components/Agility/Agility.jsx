import Image from 'next/image';
import React from 'react';
import SectionHeading from '../../../../components/SectionHeading/SectionHeading';

const Agility = () => {
  return (
    <section className="md:py-[80px] py-[40px]">
      <div className="container">
        <div className="row text-center">
          <div className="col-md-12">
            <h1 className="section-heading md:py-[30px] mb-[0.5rem] md:text-[50px] text-[26px]">
              <SectionHeading highlightText=" OUR" /> PHILOSOPHY OF AGILITY
            </h1>
          </div>
        </div>

        <div className="row items-center mt-4">
          <div className="col-md-8">
            <p className="md:text-[18px] text-[15px] leading-[30px] mt-4 md:text-left text-center">
              <strong>
                Bespoke software development requires a custom approach for each
                system that we develop but agility is at the heart of our
                software development process.
              </strong>
              <br /> Agile does not just refer to a certain practice or the use
              of specific tools and technologies; it is a way of thinking that
              has completely changed our perspective of traditional software
              development. We prioritise customer satisfaction, effective
              communication, and continuous attention to technical and design
              excellence throughout the various stages of software development.
              Following the agile philosophy allows the project to evolve as we
              move forward. It has made our development process quicker and more
              flexible to adapting changing requirements.
            </p>
          </div>
          <div className="col-md-4 text-center  msa-2 align-self-start">
            <Image
              src={'/assets/images/company/Agility.webp'}
              width={382}
              height={329}
              alt="Agility"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Agility;
