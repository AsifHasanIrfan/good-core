import React from 'react';
import Button from '../../../../components/Button/Button';

const ChallengingProject = () => {
  return (
    <section className="bg-[url('/assets/images/company/action-bg.webp')] text-white bg-cover text-center p-[100px_0]">
      <div className="container">
        <div className="row text-center">
          <div className="col-md-12">
            <h3 className="text-[33px] font-bold m-auto leading-[1.2]">GOT A CHALLENGING PROJECT ON YOUR MIND?</h3>
            <p className="text-[24px] pt-[30px] leading-[36px] max-w-full inline-block tracking-[1px] m-auto">Let&apos;s talk! We will provide you with a free consultation and <br className="sm:block hidden" />  precise estimates for software cost. </p>
            <br />
            <Button href="" variant="fill" className="mt-[1rem] bg-white text-[#0a6ebd] hover:text-white hover:border-[2px] hover:border-white hover:shadow-[0_0_15px_rgba(255,_255,_255,_.33)]">Contact Us</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChallengingProject;