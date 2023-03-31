import SectionHeading from "../../../../components/SectionHeading/SectionHeading";

const Hero = () => {
  return (
    <section className="bg-[url('/assets/images/company/banner.webp')] bg-cover w-full px-[15px] mx-auto p-[80px_0]">
      <div className="container">
        <div className="row text-center">
          <div className="col-md-12">
            <h1 className="section-heading mt-[40px] mb-[0.5rem] text-[50px]">
              <SectionHeading highlightText="TECHNOLOGY STACK" />
            </h1>
            <p className="sub-heading max-w-[950px] inline-block !pb-[30px]">
              Leverage the latest development technologies for your project.
              Future-proof your software development initiative.{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
