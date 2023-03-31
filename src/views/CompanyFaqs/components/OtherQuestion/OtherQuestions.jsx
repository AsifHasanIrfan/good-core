import React from 'react';
import Button from '../../../../components/Button/Button';

const OtherQuestions = () => {
  return (
    <section className="bg-[url('/assets/images/company/blue-bg-web.webp')] md:p-[80px_0] p-[40px_0] bg-cover">
      <div className="container max-w-[960px]">
        <div className="row text-center m-[1rem]">
          <h2 className="sub-heading leading-[1.2] !text-white m-auto"> Have any other questions? Drop us a message and we will help you with all your queries and concerns. </h2>
        </div>
        <div className="row text-center">
          <div className="col-md-12">
            <Button href="#" variant="fill" className="xlg:w-max w-full mt-0">Drop Us a Message</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OtherQuestions;