import SectionHeading from "@/components/SectionHeading/SectionHeading";
import { whyUs } from "../../constant";
import WhyUsCard from "./components/WhyUsCard/WhyUsCard";

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

        <div className="row text-left xlg:mt-[3rem] mt-[20px]">
          {whyUs.map((item) => (
            <WhyUsCard
              key={item.firstTitle}
              firstTitle={item.firstTitle}
              secondTitle={item.secondTitle}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
