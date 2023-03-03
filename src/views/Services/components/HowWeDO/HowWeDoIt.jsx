import SectionHeading from "../../../../components/SectionHeading/SectionHeading";
import HowWeDoCard from "./components/HowWeDoCard/HowWeDoCard";

const HowWeDoIt = () => {
  return (
    <section className="bg-gray-100 p-[80px_0]">
      <div className="container text-center p-0">
        {/* Section Heading and content */}
        <div className="row text-center p-0">
          <div className="col-md-12">
            <h2 className="section-heading"><SectionHeading highlightText="How" /> we do it</h2>
            <p className="text-[18px] leading-[30px] mb-[1rem]">GoodCore works with you from the initial concept stage of your software requirement. Utilising industry best practices, our team can help you visualise and fine-tune your software application early on. We then take it through world-class design and development, leading to a carefully planned roll-out and backed by highly reliable ongoing technical support. Our custom software development services cater to a variety of organisation sizes, types, and business needs. <br /> <br /> No matter what software development service you opt for, we work with you closely at every step of the bespoke software development process. </p>
          </div>
        </div>

        {/* How we do cards */}
        <div className="row mt-[1.5rem]">
          <HowWeDoCard />
        </div>
      </div>
    </section>
  );
};

export default HowWeDoIt;