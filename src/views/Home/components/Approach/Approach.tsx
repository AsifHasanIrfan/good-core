import SectionHeading from "@/components/SectionHeading/SectionHeading";
import { approaches } from "../../constant";
import ApproachCard from "./components/ApproachCard/ApproachCard";

const Approach = () => {
  return (
    <section className="overflow-hidden relative bg-[#f5f9fc] md:p-[80px_0] p-[40px_0]">
      <div className="container text-center xlg:p-0 p-[0_15px]">
        <div className="row">
          <div className="col-md-12">
            <h2 className="section-heading">
              our <SectionHeading highlightText="approach" />
            </h2>
          </div>
        </div>

        <div className="row mt-[1.5rem]">
          {approaches.map((approach) => (
            <ApproachCard key={approach.title} approach={approach} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Approach;
