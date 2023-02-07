import Link from "next/link";
import { services } from "../../constant";
import ServiceCard from "../ServiceCard/ServiceCard";

const Services = () => {
  return (
    <section className="p-[80px_0]">
      <div className="container text-center p-0">
        <div className="row">
          <div className="md:flex-[0_0_100%] md:max-w-[100%] relative w-full px-[15px]">
            <h2 className="text-[48px] font-bold text-[#212125] uppercase m-[30px_0] tracking-[1px] leading-[1.2]">
              our{" "}
              <span className="relative z-[1] after:content-[''] after:absolute after:left-0 after:bottom-[10px] after:bg-[#51ffdd] after:w-full after:h-[7px] after:rounded-[25px] after:z-[-1]">
                services
              </span>
            </h2>
            <p className="text-[24px] font-normal leading-[36px] max-w-full inline-block text-[#303234] tracking-[1px] m-[10px_0]">
              GoodCore is a leading bespoke software development company based
              in Croydon, UK. We build robust software for startups and
              established businesses. <br /> Since 2005.
            </p>
          </div>
        </div>

        <div className="row mt-[3rem]">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
            />
          ))}
        </div>

        <div className="row">
          <div className="text-center mt-[3rem] md:flex-[0_0_100%] md:max-w-full relative w-full px-[15px]">
            <Link href="#" className="text-[#1f92f4] border-2 border-[#1f92f4] bg-transparent text-[15px] font-semibold rounded-[55px] p-[20px_75px] mt-[12px] uppercase transition-all duration-[0.5s] inline-block hover:bg-[#1f92f4] hover:text-white hover:shadow-[0_0_15px_#1f92f4] hover:transition-all hover:duration-[0.5s]">View All Services</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
