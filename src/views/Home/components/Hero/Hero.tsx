import AwardsBanner from '@/components/AwardsBanner/AwardsBanner';
import Image from 'next/image';
import React from 'react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[#ebeef6] w-full px-[15px] mx-auto md:p-[80px_0] p-[40px_0] !pb-0 block before:content-[''] before:absolute before:w-full before:h-full before:bottom-0 before:left-0 before:bg-[url('/assets/images/bg-home-lines.webp')]">
      <div className="container">
        <div className="mb-[1rem] row">
          {/* Hero left area */}
          <div className="col-lg-6">
            <h1 className="md:text-[64px] text-[27px] md:text-left text-center font-bold leading-[1.1] text-[#212125] uppercase mb-[0.5rem]">
              BESPOKE SOFTWARE DEVELOPMENT COMPANY
            </h1>
            <p className="md:text-[34px] text-[16px] md:text-left text-center text-[#5e5f64] lg:p-[0_0_50px_0] p-[0_0_20px_0] m-0">
              Software development that is <br /> Good to the Core!
            </p>
          </div>

          {/* Hero right area */}
          <div className="col-lg-6">
            <div className="bg-[#175387] rounded-[40px] overflow-hidden">
              <div className="row">
                <div className="col-12">
                  <div
                    data-toggle="modal"
                    className="inline-block relative cursor-pointer rounded-[40px] overflow-hidden h-full"
                  >
                    <Image
                      width={792}
                      height={454}
                      src="/assets/images/peter.webp"
                      alt="modal-img"
                      className="h-full max-w-full align-middle"
                    />
                    <div className="absolute z-[2] lg:w-[100px] w-[60px] lg:h-[100px] h-[60px] bg-[url('/assets/images/video-play-button.webp')] bg-cover rounded-[100%] top-0 bottom-0 left-0 right-0 m-auto flex justify-center items-center transition-[all_0.3s_ease] cursor-pointer"></div>
                  </div>
                </div>
              </div>
              <div className="row p-[1.5rem] items-center flex">
                <div className="col-md-12">
                  <p className="text-white mb-0 md:text-[20px] text-[13px] md:text-left text-center font-semibold">
                    Hear what our clients have to say!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Awards highlights banner  */}
        <AwardsBanner />
      </div>
    </section>
  );
};

export default Hero;