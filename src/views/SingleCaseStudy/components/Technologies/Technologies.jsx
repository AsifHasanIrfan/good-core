import React from 'react';
import SectionHeading from '../../../../components/SectionHeading/SectionHeading';
import Image from 'next/image';
import phpIcon from '../../../../assets/images/cases/php.png'

const Technologies = () => {
  return (
    <section className="bg-[#f5f9fc] text-center p-[80px_0] pt-0">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h2 className="section-heading">
              <SectionHeading highlightText="TECHNOLOGIES" />
            </h2>
          </div>
        </div>

        <div className="my-[3rem]">
          {[...Array(6)].map((_, i) => (
            <span key={`dfklsd_${i}`} className="text-center m-auto inline-block">
              <Image
                className="inline-block m-[10px_30px] align-middle"
                src={phpIcon}
                alt="tech-icon"
              />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;