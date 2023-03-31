import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import SectionHeading from '../../../../components/SectionHeading/SectionHeading';
import LeftImgProcess from '../../partials/LeftImgProcess';
import RightImgProcess from '../../partials/RightImgProcess';

const AgileDevelopment = () => {
  return (
    <section className="md:py-[80px] py-[40px] bg-gray-100">
      <div className="container">
        <div className="row text-center">
          <div className="col-md-12">
            <h1 className="section-heading md:py-[30px] mb-[0.5rem] md:text-[50px] text-[26px]">
              <SectionHeading highlightText=" OUR" /> PRINCIPLES OF AGILE
              SOFTWARE DEVELOPMENT
            </h1>
            <p class="sub-content">
              A streamlined six-stage process to develop valuable software for
              you.
            </p>
          </div>
        </div>

        <div className="row items-center text-center mx-auto  mt-7 mb-7">
          <div className="col-md-12 text-center ">
            <Image
              src={'/assets/images/company/our-development-process.webp'}
              width={920}
              height={514}
              alt="dv process"
            />
          </div>
        </div>

        <LeftImgProcess
          imgSrc={'/assets/images/company/p1.png'}
          title={'1. Discovery Phase'}
          content={
            <>
              {` When developing a bespoke software system, we kickstart the
              development process with comprehensive planning and analysis. We
              work closely with the client to define and document the
              requirements of the software system. This stage also consists of
              the ‘discovery’ part of the software process – a three- to
              six-week phase that helps visualise your idea and creates a
              well-defined scope of work. Find out more about `}

              <Link
                href={'#'}
                className="text-primary hover:underline transition-all duration-200"
              >
                software discovery.
              </Link>
            </>
          }
        />

        <RightImgProcess
          title={'2. UI/UX Design'}
          imgSrc={'/assets/images/company/p2.png'}
          content={
            <>
              Our team of UI/UX experts work out a well-suited design blueprint
              for your software that is not only aesthetically pleasing but
              functional and user-friendly. We put thought into every small
              detail of your software, from layout, navigation, buttons to all
              the other UI elements. The goal of our{' '}
              <Link
                href="#"
                className="text-primary hover:underline transition-all duration-200"
              >
                UI/UX design
              </Link>{' '}
              process is to specifically tailor an impactful, intuitive, and
              easy-to-interact design for your software that meets your
              requirements. <br />
              <br /> At this stage of the software development process, we
              finalise the internal and external design for the software and
              present you with mockup screens, workflow structure, and
              high-fidelity wireframes for your software. This gives you a sneak
              peek into the look and feel of the finished software product.
            </>
          }
        />

        <LeftImgProcess
          title={'3. Development'}
          content={
            <>
              This is the phase of the development process where your software
              starts being written. Our highly skilled team of developers turn
              your vision into a working piece of software by closely following
              the requirements and specifications compiled at the discovery and
              requirements gathering stage. <br />
              <br /> The development and implementation stage is a major part of
              the software development cycle and takes up most of the time. This
              stage can vary for different software projects depending on the
              development methodology. For instance, with agile methodology, the
              development is divided into smaller short-term deliveries called
              sprints, whereas with a traditional model, the complete software
              is developed in one go after a thorough research and design
              process.
            </>
          }
          imgSrc={'/assets/images/company/p3.png'}
        />

        <RightImgProcess
          title={'4. Testing and Quality Assurance'}
          imgSrc={'/assets/images/company/p4.png'}
          content={
            <>
              {' '}
              This is the stage of the development process where the team makes
              sure that the software is of the highest quality and it conforms
              to the requirements specified by the customer. Our QA engineers
              thoroughly test the software solution during and after the
              development process to guarantee that the software performs
              smoothly and any development oversight is rectified. <br /> We use
              various manual and automated testing methods to verify every
              aspect of the software until the quality of the solution meets the
              original requirements. Only when the software has passed all
              quality checks do we proceed to release it to the end-users. Find
              out more about{' '}
              <Link
                href="#"
                className="text-primary hover:underline transition-all duration-200"
              >
                testing and quality assurance
              </Link>
              .{' '}
            </>
          }
        />

        <LeftImgProcess
          title={'5. Deployment'}
          content={
            <>
              After successful testing and a final go-ahead from the QA and
              testing team, the software is prepared for deployment. This stage
              marks the end of the development phase and the beginning of the
              process of handing over the software to you. <br />
              <br /> With mobile application development, we ensure that apps
              are successfully launched to the app store(s) and available to
              users. Our team is also experienced with planning the roll-out of
              complex software systems and we work closely with you to make sure
              that the deployment process is swift and streamlined.{' '}
            </>
          }
          imgSrc={'/assets/images/company/p5.png'}
        />

        <RightImgProcess
          title={'6. Maintenance and Support'}
          imgSrc={'/assets/images/company/p6.png'}
          content={
            <>
              Our job does not end after the release of the software. It is our
              responsibility to make sure your software is up and running. For
              this, we offer post-deployment technical support to maintain your
              software. Our team addresses any problems with the software that
              you may encounter after deployment and solve them in a timely
              manner. <br />
              <br /> We also offer varying levels of support plans that you can
              choose from to avail our all-inclusive application and maintenance
              services for an extended amount of time.
            </>
          }
        />
      </div>
    </section>
  );
};

export default AgileDevelopment;
