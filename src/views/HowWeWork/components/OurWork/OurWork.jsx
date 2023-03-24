import React from 'react';
import Button from '../../../../components/Button/Button';

const OurWork = () => {
  return (
    <section className="bg-[url('/assets/images/company/map-pattern.webp')] bg-[#0f3658] p-[120px_0]">
      <div className="container">
        <div className="row text-center">
          <div className="col-md-12">
            <p className="text-white max-w-[950px] m-auto text-[22px] font-[300] leading-[36px] inline-block tracking-[1px]">We have been providing software development services and offering flexible engagement options to our clients since 2005.</p>
            <Button href="" className="mt-[1.5rem]" variant="fill"> View Our Work </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurWork;