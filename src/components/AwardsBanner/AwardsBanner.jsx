import Image from 'next/image';
import Link from 'next/link';

const AwardsBanner = () => {
  return (
    <div className="pb-[50px] mt-[40px]">
      <div className="row lg:mb-0 mb-[1rem]">
        <div className="flex items-center lg:border-r-2 lg:border-[#d3d8e5] md:px-[1.5rem] md:mt-0 col-lg-3 col-md-6">
          <div className="lg:p-0 inline-flex items-center w-full p-[10px_0] border-b-2 border-[#d3d8e5] lg:border-none">
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
              <p className="lg:text-[16px] text-[14px] font-normal text-[#737989] mb-0 leading-[1.1] whitespace-normal break-words">
                Years of Industry Experience
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center lg:border-r-2 lg:border-[#d3d8e5] lg:px-[1rem] md:mt-0 col-lg-3 col-md-6">
          <div className="lg:p-0 inline-flex items-center w-full p-[10px_0] border-b-2 border-[#d3d8e5] lg:border-none">
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
              <p className="lg:text-[16px] text-[14px] font-normal text-[#737989] mb-0 leading-[1.1] whitespace-normal break-words">
                Successful Software Projects
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center lg:border-r-2 lg:border-[#d3d8e5] md:px-[1.5rem] md:mt-0 col-lg-3 col-md-6">
          <div className="lg:p-0 inline-flex items-center w-full p-[10px_0] border-b-2 border-[#d3d8e5] lg:border-none">
            <div className="inline-block">
              <Image
                width={26}
                height={40}
                alt=""
                src="/assets/images/location-based.webp"
              />
            </div>

            <div className="lg:p-0 lg:pl-[20px] inline-block w-[calc(100%-20px)] p-[12px_0] pl-[20px]">
              <p className="lg:text-[16px] text-[14px] font-normal text-[#737989] mb-0 leading-[1.1] whitespace-normal break-words">
                UK-based with Offshore Development Centres
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center lg:border-r-2 lg:border-[#d3d8e5] md:px-[1.5rem] md:mt-0 col-lg-3 col-md-6">
          <div className="lg:p-0 inline-flex items-center w-full p-[10px_0] border-b-2 border-[#d3d8e5] lg:border-none">
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
  );
};

export default AwardsBanner;