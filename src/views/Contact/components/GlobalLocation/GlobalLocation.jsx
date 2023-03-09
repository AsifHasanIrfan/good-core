import SectionHeading from "../../../../components/SectionHeading/SectionHeading";
import { contactGlobalLocation } from "../../../../constant";
import LocationCard from "../LocationCard/LocationCard";

const GlobalLocation = () => {
  return (
    <section className="md:p-[80px_0] p-[40px_0]">
      <div className="container">
        {/* Section Heading */}
        <div className="row text-center">
          <div className="col-md-12">
            <h2 className="section-heading">
              <SectionHeading highlightText="Our Global" /> Locations{" "}
            </h2>
            <p className="sub-content !text-[20px] max-w-[1050px]">
              We’ll contact you within a couple of hours to schedule a meeting
              to discuss your goals.
            </p>
          </div>
        </div>

        {/* Locations */}
        <div className="mx-auto xlg:mt-[3rem] mt-[20px]">
          <div className="row justify-center">
            {contactGlobalLocation.map((location) => (
              <LocationCard key={location.name} location={location} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalLocation;
