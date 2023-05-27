import Button from '../../../../components/Button/Button';
import Image from 'next/image';
import Link from 'next/link';
import img from '../../../../assets/images/cases/bs_main.webp';
import react from '../../../../assets/images/cases/react.png';

const CaseStudyCard = () => {
  return (
    <div className="col-md-6 mb-[1.5rem]">
      <div className="border border-[#f1f1f1] shadow-[0_0px_20px_0_rgba(137,_170,_198,_.35)] p-[30px_35px] rounded-[20px] h-full flex flex-col md:min-h-[480px] min-h-[420px] md:mb-[30px] mb-[10px] group">
        <Link href="cases/1">
          <div className="max-h-[290px] overflow-hidden">
            <Image
              className="object-contain mb-[5px] group-hover:scale-[1.2] transition-all duration-500"
              src={img}
              alt="case-img"
            />
          </div>
        </Link>

        {/* CaseStudy content */}
        <div className="text-left flex flex-1 justify-start md:min-h-[196px] min-h-[150px] flex-col">
          <p className="text-primary border-t-[3px] border-primary text-[16px] font-semibold m-[20px_0_10px] inline-block uppercase w-fit leading-[1.5] tracking-[.5px]">
            Briefing & Event Management
          </p>
          <div>
            <Link href="cases/1">
              <h3 className="m-[5px_0_22px] mb-[10px] text-[27px] font-bold capitalize text-black-10 leading-[1.2]">
                Briefing Management Platform
              </h3>
            </Link>
            <Link href="cases/1">
              <p className="tracking-[.5px] mb-[22px] text-[17px] text-[#595964] leading-[1.5] min-h-[76px] overflow-hidden text-ellipsis case-desc-text">
                Software platform for a Silicon Valley start-up that offers it
                to Fortune 100 companies for managing briefing programs and
                events.
              </p>
            </Link>
          </div>
          {/* CaseStudy tags */}
          <div className="text-[13px] text-[#595964] font-medium">
            <div className="row mb-[0.5rem]">
              <div className="col-md-4">
                <span className="font-semibold text-[14px] text-[#212125]">
                  Platforms:
                </span>
              </div>
              <div className="col-md-8">
                <span>Web</span>
              </div>
            </div>

            <div className="row">
              <div className="col-md-4">
                <span className="font-semibold text-[14px] text-[#212125]">
                  Provided Services:
                </span>
              </div>
              <div className="col-md-8">
                <p className="min-h-[39px] text-[#666] text-[14px] leading-[1.5] tracking-[.5px]">
                  Custom software development | SaaS app development | Staff
                  augmentation | Project rescue | Support and maintenance
                </p>
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <div className="flex items-center mt-[1rem]">
                  <span>
                    <Image
                      src={react}
                      alt=""
                      className="mr-[12px] max-h-[33px] object-contain"
                    />
                  </span>
                  <span>
                    <Image
                      src={react}
                      alt=""
                      className="mr-[12px] max-h-[33px] object-contain"
                    />
                  </span>
                  <span>
                    <Image
                      src={react}
                      alt=""
                      className="mr-[12px] max-h-[33px] object-contain"
                    />
                  </span>
                  <span>
                    <Image
                      src={react}
                      alt=""
                      className="mr-[12px] max-h-[33px] object-contain"
                    />
                  </span>
                  <span>
                    <Image
                      src={react}
                      alt=""
                      className="mr-[12px] max-h-[33px] object-contain"
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Button
          href=""
          variant="fill"
          className="mt-[20px] w-fit !p-[15px_28px]"
        >
          See Full Case Study
        </Button>
      </div>
    </div>
  );
};

export default CaseStudyCard;