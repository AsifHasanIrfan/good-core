import Image from "next/image";
import React from "react";

const TechBanner = () => {
  return (
    <div className="md:p-[80px_0] p-[60px_0]">
      <div className="container p-0">
        <div className="row">
          <div className="col-md-7">
            <Image
              src="/assets/images/technologies/php/PHP-banner-1.webp"
              alt="banner"
              width={635}
              height={470}
              className="max-w-full h-auto"
            />
          </div>
          <div className="col-md-5 !p-0 lg:order-2">
            <h2 className="text-[27px] font-medium text-black-10 leading-[1.2] mb-[.5rem]">
              {" "}
              Hire PHP Developers With Expert PHP Resources{" "}
            </h2>
            <p className="text-black-15">
              GoodCore provides end-to-end PHP development services - from
              requirement analysis to deployment - along with support and
              maintenance services to our clients post-release. With over 45+
              versatile PHP projects up and running, GoodCore programmers are
              proficient at the complete suite of PHP frameworks and CMSs.{" "}
              <br />
              <br />
              In our 16+ years of experience as a PHP development company, we
              have helped businesses leverage the full capacity of PHP and its
              powerful frameworks to achieve growth and competitive advantage.
              We solve complex business challenges through custom PHP-based
              solutions that are scalable and future-proof.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechBanner;
