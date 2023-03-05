import SectionHeading from "../../../../components/SectionHeading/SectionHeading";
import { servicesAwardsData } from "../../constant";
import AwardSingleCard from "./components/AwardSingleCard/AwardSingleCard";


const AwardsAndRec = () => {
  return (
    <section className="md:p-[80px_0] p-[40px_0]">
      <div className="container">
        {/* Section Heading */}
        <div className="text-center mb-[3rem]">
          <h2 className="section-heading !tracking-[2px] mb-[0.25rem]"><SectionHeading highlightText="Awards & Recognition" /></h2>
          <p className="sub-heading">GoodCore has been recognised for its 16+ years of exceptional B2B services in the UK industry and worldwide. We have a proven track record of building high-quality software solutions for our client businesses.</p>
        </div>

        {/* Award and registration cards */}
        <div className="row text-center justify-center">
          {servicesAwardsData.map((item, i) => <AwardSingleCard key={i + "awards"} item={item} />)}
        </div>
      </div>
    </section>
  );
};

export default AwardsAndRec;