import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[#ebeef6] pb-0 w-full px-[15px] mx-auto p-[80px_0] block before:content-[''] before:absolute before:w-full before:h-full before:bottom-0 before:left-0 before:bg-[url('/assets/images/bg-home-lines.webp')]">
      <div className="container">
        <div className="mb-[1rem] row">
          {/* Hero left area */}
          <div className="flex-[0_0_50%] max-w-[50%] relative w-full px-[15px]">
            <h1 className="text-[64px] font-bold leading-[1.1] text-[#212125] uppercase mb-[0.5rem]">
              BESPOKE SOFTWARE DEVELOPMENT COMPANY
            </h1>
            <p className="text-[34px] text-[#5e5f64] p-[0_0_50px_0] m-0">
              Software development that is <br /> Good to the Core!
            </p>
          </div>

          {/* Hero right area */}
          <div className="flex-[0_0_50%] max-w-[50%] relative w-full px-[15px]">
            <div className="bg-[#175387] rounded-[40px] overflow-hidden">
              <div className="row">
                <div className="flex-[0_0_100%] max-w-full relative w-full px-[15px]">
                  <div
                    data-toggle="modal"
                    className="relative cursor-pointer rounded-[40px] overflow-hidden"
                  >
                    <Image
                      width={792}
                      height={454}
                      src="/assets/images/peter.webp"
                      alt="modal-img"
                      style={{ height: "310px" }}
                    />
                    <div className="absolute z-[2] w-[100px] h-[100px] bg-[url('/assets/images/video-play-button.webp')] bg-cover rounded-[100%] top-0 bottom-0 left-0 right-0 m-auto flex justify-center items-center transition-[all_0.3s_ease] cursor-pointer"></div>
                  </div>
                </div>
              </div>
              <div className="row p-[1.5rem] items-center flex">
                <div className="md:flex-[0_0_100%] md:max-w-full relative w-full px-[15px]">
                  <p className="text-white mb-0 text-[20px] font-semibold">
                    Hear what our clients have to say!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Awards highlights banner  */}
        <div className="pb-[50px] mt-[40px]">
          <div className="row lg:mb-0 mb-[1rem]">
            <div className="flex items-center border-r-2 border-[#d3d8e5] md:px-[1.5rem] md:mt-0 lg:flex-[0_0_25%] lg:max-w-[25%] md:flex-[0_0_50%] md:max-w-[50%] relative w-full px-[15px]">
              <div className="lg:p-0 inline-flex items-center w-full p-[10px_0]">
                <div className="inline-block">
                  <Image
                    width={40}
                    height={38}
                    alt=""
                    src="/assets/images/yrs-of-exp.webp"
                  />
                </div>

                <div className="lg:p-0 lg:pl-[20px] inline-block w-[calc(100%-20px)] p-[12px_0] pl-[20px]">
                  <h3 className="text-[30px] font-bold text-[#5e6370] mb-0 whitespace-normal break-words leading-[1.2]">
                    17+
                  </h3>
                  <p className="text-[16px] font-normal text-[#737989] mb-0 leading-[1.1] whitespace-normal break-words">
                    Years of Industry Experience
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center border-r-2 border-[#d3d8e5] md:px-[1rem] md:mt-0 lg:flex-[0_0_25%] lg:max-w-[25%] md:flex-[0_0_50%] md:max-w-[50%] relative w-full px-[15px]">
              <div className="lg:p-0 inline-flex items-center w-full p-[10px_0]">
                <div className="inline-block">
                  <Image
                    width={40}
                    height={38}
                    alt=""
                    src="/assets/images/project-delivered.webp"
                  />
                </div>

                <div className="lg:p-0 lg:pl-[20px] inline-block w-[calc(100%-20px)] p-[12px_0] pl-[20px]">
                  <h3 className="text-[30px] font-bold text-[#5e6370] mb-0 whitespace-normal break-words leading-[1.2]">
                    110+
                  </h3>
                  <p className="text-[16px] font-normal text-[#737989] mb-0 leading-[1.1] whitespace-normal break-words">
                    Successful Software Projects
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center border-r-2 border-[#d3d8e5] md:px-[1.5rem] md:mt-0 lg:flex-[0_0_25%] lg:max-w-[25%] md:flex-[0_0_50%] md:max-w-[50%] relative w-full px-[15px]">
              <div className="lg:p-0 inline-flex items-center w-full p-[10px_0]">
                <div className="inline-block">
                  <Image
                    width={26}
                    height={40}
                    alt=""
                    src="/assets/images/location-based.webp"
                  />
                </div>

                <div className="lg:p-0 lg:pl-[20px] inline-block w-[calc(100%-20px)] p-[12px_0] pl-[20px]">
                  <p className="text-[16px] font-normal text-[#737989] mb-0 leading-[1.1] whitespace-normal break-words">
                    UK-based with Offshore Development Centres
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center md:px-[1.5rem] md:mt-0 lg:flex-[0_0_25%] lg:max-w-[25%] md:flex-[0_0_50%] md:max-w-[50%] relative w-full px-[15px]">
              <div className="lg:p-0 inline-flex items-center w-full p-[10px_0]">
                <Link href="">
                  <Image
                    width={182}
                    height={40}
                    alt=""
                    src="/assets/images/Clutch.webp"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;