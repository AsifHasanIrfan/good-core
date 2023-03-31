import Link from "next/link";
import React from "react";
import SectionHeading from "../../../../components/SectionHeading/SectionHeading";
import { priceAdvices } from "../../constant";

const PhasedApproach = () => {
  return (
    <section className="p-[80px_0]">
      <div className="max-w-[1070px] p-[0_15px] m-auto">
        <div className="row">
          <div className="col-md-12 text-center">
            <h2 className="section-heading mb-[1rem]">
              <SectionHeading highlightText="Advice:" /> Phased Approach{" "}
            </h2>
            <p className="text-[18px] leading-[30px] mb-[1rem] p-[0.25rem]">
              Most software development companies follow an iterative process –
              you don’t have to do it all in one go. Our advice for you is to
              choose a phased development approach for your custom software.
            </p>
            <p className="text-[18px] leading-[30px] mb-[1rem]">
              You can start out with an{" "}
              <Link href="#" className="text-[#007bff]">
                MVP (Minimum Viable Product)
              </Link>{" "}
              that features all the things that absolutely must be in the
              application to test the market out. Follow that with Phase 1,
              which adds more important features based on users’ input.
              Additional phases can be added as and when needed.
            </p>
          </div>
        </div>

        <div className="row mt-[1rem] items-center">
          <div className="col-md-6">
            <div className="row hidden md:flex">
              <div className="col-md-6">
                <div className="mt-[80px] relative inline-block w-[160px] h-[160px] m-[12px_0] float-right p-[30px] shadow-[0_0_10px_rgba(131,_156,_187,_.5)] bg-white min-h-[200px] text-center transition-all duration-500 ease-in-out">
                  <div className="relative inline-block min-h-[65px]">
                    <div className="bg-[0_0] w-[50px] bg-[url('/assets/images/company/advice-icons.webp')] bg-no-repeat h-[50px]"></div>
                  </div>
                  <h3 className="font-semibold text-[#303234] text-[18px] m-0 leading-[1.2]">
                    Prioritise <br /> <br />
                  </h3>
                  <span className="absolute top-[14px] left-[14px] text-[20px]">
                    2
                  </span>
                </div>
                <div className="relative inline-block w-[160px] h-[160px] m-[12px_0] float-right p-[30px] shadow-[0_0_10px_rgba(131,_156,_187,_.5)] bg-white min-h-[200px] text-center transition-all duration-500 ease-in-out">
                  <div className="relative inline-block min-h-[65px]">
                    <div className="bg-[0_-60px] w-[50px] bg-[url('/assets/images/company/advice-icons.webp')] bg-no-repeat h-[50px]"></div>
                  </div>
                  <h3 className="font-semibold text-[#303234] text-[18px] m-0 leading-[1.2]">
                    Budget <br /> <br />
                  </h3>
                  <span className="absolute top-[14px] left-[14px] text-[20px]">
                    4
                  </span>
                </div>
              </div>

              <div className="col-md-6">
                <div className="float-left mt-[12px] relative inline-block w-[160px] h-[160px] m-[12px_0] p-[30px] shadow-[0_0_10px_rgba(131,_156,_187,_.5)] bg-white min-h-[200px] text-center transition-all duration-500 ease-in-out">
                  <div className="relative inline-block min-h-[65px]">
                    <div className="bg-[0_-120px] w-[50px] bg-[url('/assets/images/company/advice-icons.webp')] bg-no-repeat h-[50px]"></div>
                  </div>
                  <h3 className="font-semibold text-[#303234] text-[18px] m-0 leading-[1.2]">
                    Rethink <br /> <br />
                  </h3>
                  <span className="absolute top-[14px] left-[14px] text-[20px]">
                    1
                  </span>
                </div>
                <div className="float-left mt-[12px] relative inline-block w-[160px] h-[160px] m-[12px_0] p-[30px] shadow-[0_0_10px_rgba(131,_156,_187,_.5)] bg-white min-h-[200px] text-center transition-all duration-500 ease-in-out">
                  <div className="relative inline-block min-h-[65px]">
                    <div className="bg-[0_-180px] w-[50px] bg-[url('/assets/images/company/advice-icons.webp')] bg-no-repeat h-[50px]"></div>
                  </div>
                  <h3 className="font-semibold text-[#303234] text-[18px] m-0 leading-[1.2]">
                    Adjust <br /> <br />
                  </h3>
                  <span className="absolute top-[14px] left-[14px] text-[20px]">
                    3
                  </span>
                </div>

                <div className="float-left mt-[12px] relative inline-block w-[160px] h-[160px] m-[12px_0] p-[30px] shadow-[0_0_10px_rgba(131,_156,_187,_.5)] bg-white min-h-[200px] text-center transition-all duration-500 ease-in-out">
                  <div className="relative inline-block min-h-[65px]">
                    <div className="bg-[0_-239px] w-[50px] bg-[url('/assets/images/company/advice-icons.webp')] bg-no-repeat h-[50px]"></div>
                  </div>
                  <h3 className="font-semibold text-[#303234] text-[18px] m-0 leading-[1.2]">
                    Incorporate <br /> Feedback
                  </h3>
                  <span className="absolute top-[14px] left-[14px] text-[20px]">
                    5
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <ul className="mb-[1rem]">
              {priceAdvices.map((advices, i) => (
                <li
                  key={i + "advice"}
                  className="p-[5px_0] leading-[30px] text-[18px] before:text-[#1f92f4] before:content-['•'] before:text-[34px] before:leading-[1] before:pr-[15px] before:align-middle before:absolute before:ml-[-30px]"
                >
                  {advices}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhasedApproach;
