import SectionHeading from "../../../../components/SectionHeading/SectionHeading";
import { engagementOptions } from "../../constant";
import EngageCard from "./components/EngageCard/EngageCard";

const Engagement = () => {
  return (
    <section className="bg-gray-100 md:p-[80px_0] p-[40px_0]">
      <div className="container">
        <div className="row text-center">
          <div className="col-md-12">
            <h2 className="section-heading m-0"> TYPES OF <SectionHeading highlightText="ENGAGEMENT OPTIONS" /> We Offer </h2>
            <p className="sub-content !mb-[1.5rem]"> We offer multiple contract types for our offshore software development services, in line with the requirement you have. </p>
          </div>
        </div>

        <div className="row">
          {engagementOptions.map(item => <EngageCard key={item.title} data={item} />)}         
        </div>
      </div>
    </section>
  );
};

export default Engagement;