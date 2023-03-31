import Link from "next/link";
import SectionHeading from "../../../../components/SectionHeading/SectionHeading";
import { careerBoxData } from "../../constant";

const Careers = () => {
  return (
    <section className="bg-[#2d2c31] text-white text-center p-[80px_0]">
      <div className="container">
        <div>
          <h2 className="section-heading text-white tracking-[2px] mb-[0.25rem]">
            <Link href="">
              <SectionHeading highlightText="Careers" />
            </Link>{" "}
            at GoodCore
          </h2>
          <p className="sub-heading max-w-[920px] !text-[#aaa] !text-[20px] font-normal m-auto">
            We strive to hire the absolute best people. As a services
            organisation, we firmly believe that it is the single most important
            reason for all the success the company has achieved to-date. And
            this is really the only way to move forward.
            <br />
            <br />
            The company encourages{" "}
            <Link href="#" className="text-[#007bff]">
              career
            </Link>{" "}
            growth along multiple tracks.
          </p>
        </div>

        <div className="row">
          {careerBoxData.map((item) => (
            <div key={item.name} className="col-md-3 mb-[15px]">
              <div className="bg-white text-[#212529] text-center p-[40px_17px] h-full">
                <span className="inline-block">{item.icon}</span>
                <h3 className="text-center m-[20px_auto] text-[18px] font-medium leading-[1.2]">
                  {item.name}
                </h3>
                <p className="mb-[1rem]">{item.content}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-[50px] mb-[1rem]">
          GoodCore is an equal opportunity employer and strives for inclusion
          and diversity in the workplace.
        </p>
      </div>
    </section>
  );
};

export default Careers;
