import SectionHeading from "../../../../components/SectionHeading/SectionHeading";
import WhyChooseCards from "../../../../shared/WhyChoose/WhyChooseCards";

const WhyChooseUs = () => {
  return (
    <section className="md:p-[80px_0] p-[40px_0]">
      <div className="container text-center xlg:p-0 p-[0_15px]">
        <div className="row">
          <div className="col-md-12">
            <h2 className="section-heading">
              Why <SectionHeading highlightText="Choose US?" />
            </h2>
            <p className="sub-content">
              Have the peace of mind that you are working with one of the best
              bespoke software development companies in the UK.
            </p>
          </div>
        </div>

        <WhyChooseCards />
      </div>
    </section>
  );
};

export default WhyChooseUs;
