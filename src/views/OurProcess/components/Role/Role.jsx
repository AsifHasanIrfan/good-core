import React from 'react';
import SectionHeading from '../../../../components/SectionHeading/SectionHeading';
import LeftImgProcess from '../../partials/LeftImgProcess';
import RightImgProcess from '../../partials/RightImgProcess';

const Role = () => {
  return (
    <section className="py-[80px] bg-gray-100">
      <div className="container">
        <div className="row text-center">
          <div className="col-md-12">
            <h1 className="section-heading md:py-[30px] py-[10px] mb-[0.5rem] md:text-[48px] text-[26px] ">
              <SectionHeading highlightText="YOUR ROLE" /> THROUGHOUT THE
              DEVELOPMENT PROCESS
            </h1>
          </div>
        </div>
        <LeftImgProcess
          imgSrc={'/assets/images/company/p7.png'}
          noTitle={true}
          content={
            'We go through the six-stage development process to create a fully custom and valuable software solution for you, and effective collaboration is what makes it successful. As the client, you are the most important stakeholder of the software process and we closely collaborate with you to make sure you are fully aware of the progress of the project. This does not mean we overburden you with excessive information, but we keep you in the loop with all important milestones along the way.'
          }
        />
        <RightImgProcess
          imgSrc={'/assets/images/company/p8.png'}
          noTitle={true}
          content={
            <>
              The discovery phase of the software development process is where
              we need maximum input from you. This three- to six-week-long stage
              is where you can expect multiple meetings to discuss your idea and
              requirements. To develop a complete understanding of your project
              and an accurate cost estimation, we need some key information from
              you at this stage. This includes the product idea, a list of
              features, sketches or wireframes, reference of competitors, and
              any technical specifications that you may have. Beyond this stage,
              you can choose the level of involvement you prefer but our team
              will be available at all times via any communication channel of
              your choice.
            </>
          }
        />
      </div>
    </section>
  );
};

export default Role;
