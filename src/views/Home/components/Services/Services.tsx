import Button from "@/components/Button/Button";
import SectionHeading from "@/components/SectionHeading/SectionHeading";
import Link from "next/link";
import { services } from "../../constant";
import ServiceCard from "../ServiceCard/ServiceCard";

const Services = () => {
  return (
    <section className="md:p-[80px_0] p-[40px_0]">
      <div className="container text-center xlg:!p-0 !p-[0_15px]">
        <div className="row">
          <div className="md:flex-[0_0_100%] md:max-w-[100%] relative w-full px-[15px]">
            <h2 className="section-heading">
              our <SectionHeading highlightText="services" />
            </h2>
            <p className="sub-content">
              GoodCore is a leading bespoke software development company based
              in Croydon, UK. We build robust software for startups and
              established businesses. <br /> Since 2005.
            </p>
          </div>
        </div>

        <div className="row xlg:mt-[3rem] mt-[20px]">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        <div className="row">
          <div className="text-center xlg:mt-[3rem] mt-[20px] md:flex-[0_0_100%] md:max-w-full relative w-full px-[15px]">
            <Button
              href=""
              className="text-[#1f92f4] hover:bg-[#1f92f4] hover:text-white hover:shadow-[0_0_15px_#1f92f4] w-full lg:w-auto"
            >
              View All Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
