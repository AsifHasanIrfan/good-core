import SectionHeading from "../../../../components/SectionHeading/SectionHeading";
import HowWeDoCard from "./components/HowWeDoCard/HowWeDoCard";

const HowWeDoIt = () => {
  return (
    <section className="bg-gray-100 p-[80px_0]">
      <div className="container text-center p-0">
        {/* Section Heading and content */}
        <div className="row text-center p-0">
          <div className="col-md-12">
            <h2 className="section-heading">
              <SectionHeading highlightText="How" /> we do it
            </h2>
            <p className="text-[18px] leading-[30px] mb-[1rem]">
              GoodCore works with you from the initial concept stage of your
              software requirement. Utilising industry best practices, our team
              can help you visualise and fine-tune your software application
              early on. We then take it through world-class design and
              development, leading to a carefully planned roll-out and backed by
              highly reliable ongoing technical support. Our custom software
              development services cater to a variety of organisation sizes,
              types, and business needs. <br /> <br /> No matter what software
              development service you opt for, we work with you closely at every
              step of the bespoke software development process.{" "}
            </p>
          </div>
        </div>

        {/* How we do cards */}
        <div className="row justify-center mt-[1.5rem]">
          <HowWeDoCard
            iconCss="bg-[0_-956px]"
            title="Requirement <br /> Analysis"
          >
            We start by talking to our clients to understand what they need,
            sketching out the software they want, and identifying any gaps or
            potential problems along the way.
          </HowWeDoCard>
          <HowWeDoCard
            iconCss="bg-[0_-1025px] w-[64px] h-[61px]"
            title="UI/UX <br /> Design"
          >
            Our in-house creative UI/UX team designs an intuitive interface for
            your software applications keeping the end-users in mind.
          </HowWeDoCard>
          <HowWeDoCard
            iconCss="bg-[0_-1096px] w-[57px] h-[57px]"
            title="Software <br /> Development/Coding"
          >
            We take your idea through our streamlined process of software
            development. Tailoring the product to your exact technical and
            design specifications.
          </HowWeDoCard>
          <HowWeDoCard
            iconCss="bg-[0_-1163px] w-[58px] h-[58px]"
            title="Testing and <br /> Quality Assurance"
          >
            We maintain strict standards of quality to ensure that your software
            is built to spec and offers a failure-free software operation.
          </HowWeDoCard>
          <HowWeDoCard
            iconCss="bg-[0_0] w-[60px] h-[60px]"
            title="Deployment and <br /> Support"
          >
            Our team is experienced with planning the roll-out of complex
            software systems and then providing the technical support to keep
            those systems up and running.
          </HowWeDoCard>
        </div>
      </div>
    </section>
  );
};

export default HowWeDoIt;