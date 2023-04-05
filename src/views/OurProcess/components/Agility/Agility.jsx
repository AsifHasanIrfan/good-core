import Image from 'next/image';
import React from 'react';
import SectionHeading from '../../../../components/SectionHeading/SectionHeading';

const Agility = () => {
  return (
    <section className="md:p-[80px_0] p-[40px_0] w-full px-[15px] mx-auto">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h1 className="section-heading">
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
              src={"/assets/images/company/Agility.webp"}
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
