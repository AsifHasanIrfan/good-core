import SectionHeading from '@/components/SectionHeading/SectionHeading';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const AboutUs = () => {
  return (
    <section className="md:p-[80px_0] p-[40px_0]">
      <div className="container xlg:p-0 p-[0_15px]">
        <div className="row text-center">
          <div className="col-md-12">
            <h2 className="section-heading">
              <SectionHeading highlightText="About" /> GoodCore
            </h2>
            <p className="sub-heading">
              Based in London, GoodCore offers cutting-edge bespoke software
              development services to clients in the UK and worldwide.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4">
            <Image
              width={350}
              height={571}
              src="/assets/images/about-goodcore.webp"
              alt="img"
              className="block m-auto"
            />
          </div>
          <div className="col-lg-8">
            <h3 className="xlg:text-[22px] text-[18px] font-normal xlg:leading-[35px] leading-[28px] md:mt-0 my-[1rem] md:block hidden">
              Since 2005, GoodCore has worked closely with clients to bring
              their ideas to life in the form of powerful software.
            </h3>
            <div className="row">
              <div className="col-lg-6">
                <Image
                  width={350}
                  height={478}
                  src="/assets/images/about-2.webp"
                  alt="img"
                  className="block m-auto mt-[7px]"
                />
              </div>
              <div className="col-lg-6">
                <h3 className="xlg:text-[22px] text-[18px] font-normal xlg:leading-[35px] text-center leading-[28px] md:mt-0 my-[1rem] md:hidden block">
                  Since 2005, GoodCore has worked closely with clients to bring
                  their ideas to life in the form of powerful software.
                </h3>
                <p className="leading-[30px] tracking-[.5px] text-[18px] mb-[1rem] md:text-left text-center">
                  Our team is able to work well with startups and established
                  businesses alike. With access to the absolute top-end
                  technical talent in our team, we are able to take on
                  challenging and complex software development projects. These
                  applications take the form of feature-rich web and mobile apps
                  and often make use of bleeding-edge development technologies.
                  <br />
                  <br />
                  We are honoured by the positive feedback we receive from our
                  clients. This is what helps our software development company
                  grow.
                </p>
                <Link
                  href=""
                  className="underline p-[5px_15px] text-[#007bff] bg-transparent hover:bg-[#c0d8f3] flex md:justify-start justify-center hover:no-underline hover:rounded-[20px] md:text-[1rem] text-[14px] w-max"
                >
                  More About Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;