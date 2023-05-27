import React from "react";
import Button from "../../../../components/Button/Button";

const CaseClutch = () => {
  return (
    <section className="bg-[url('/assets/images/company/blue-bg-web.webp')] bg-cover p-[80px_0]">
      <div className="container max-w-[960px]">
        <div className="row text-center my-[3rem]">
          <h2 className="section-heading text-white mb-[1rem]">
            ARE YOU LOOKING FOR A SOFTWARE PARTNER TO HELP YOU DEVELOP AND
            LAUNCH A SAAS PLATFORM? GET IN TOUCH!
          </h2>
        </div>

        <div className="row text-center">
          <div className="col-md-12">
            <Button href="#" variant="fill">Contact Us</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseClutch;
