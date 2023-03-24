import Image from "next/image";
import SectionHeading from "../../../../components/SectionHeading/SectionHeading";
import locationMap from "../../../../../public/assets/images/company/map.webp";

const CompanyAbout = () => {
  return (
    <section className="p-[80px_0]">
      <div className="container">
        <div className="row">
          {/* Section Heading */}
          <div className="col-12">
            <h2 className="section-heading text-center !tracking-[2px]">
              About <SectionHeading highlightText="Goodcore Software" />
            </h2>
          </div>

          <div className="col-md-6">
            <p className="sub-content !text-[16px] !mt-[1rem]">
              GoodCore is one of the leading software development companies in
              the UK, serving an impressive local and overseas clientele. Our
              team works in an agile manner and is able to engage well with our
              clients across the different stages of their software app
              development projects.
              <br />
              <br />
              Our multiple geographical offices allow us to offer a highly
              efficient hybrid onshore-offshore model to our clients. This model
              ensures local liaison in the UK for project management,
              requirements analysis, and high-level technical design while
              providing exceptional value for money and access to incredible
              tech talent.
              <br />
              <br />
            </p>
          </div>

          <div className="col-md-6">
            <div className="location-map">
              <Image src={locationMap} alt="location-map" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyAbout;
