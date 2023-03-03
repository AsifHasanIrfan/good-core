import SectionHeading from "../../../../components/SectionHeading/SectionHeading";
import { objectives } from "../../constant";
import ObjectiveBox from "./components/ObjectiveBox/ObjectiveBox";

const Objective = () => {
  return (
    <section className="xlg:p-[80px_0] p-[30px_15px] bg-[#f5f9fc] relative">
      <div className="container p-0">
        <div className="row">
          <div className="col-md-12 text-center">
            <h2 className="section-heading">
              SOFTWARE FOR{" "}
              <SectionHeading highlightText="YOUR BUSINESS OBJECTIVES" />
            </h2>
            <p className="sub-content">
              Operating as a leading bespoke custom software development company
              in the UK for 17 years, our clientele ranges from startups to
              small, medium, and large enterprises. Our team works exceptionally
              well to adapt to the varying working styles and business needs of
              our clients.
            </p>
          </div>
        </div>

        <div className="row xlg:mt-[3rem] mt-[20px]">
          {objectives.map((objective) => (
            <ObjectiveBox key={objective.title} objective={objective} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Objective;
