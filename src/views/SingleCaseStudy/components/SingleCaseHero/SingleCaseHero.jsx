import Image from "next/image";
import SectionHeading from "../../../../components/SectionHeading/SectionHeading";
import laptopBs from "../../../../assets/images/cases/Laptop-bs.webp";
import alarm from "../../../../assets/images/cases/alarm.png";
import web from "../../../../assets/images/cases/webicon.png";
import team from "../../../../assets/images/cases/teamicon.png";
import Industry from "../../../../assets/images/cases/industry.png";

const SingleCaseHero = () => {
  return (
    <section className="bg-[#f7fafd] p-[60px_0] w-full mx-auto">
      <div className="container max-w-[1170px] p-0">
        <div className="row md:items-center">
          <div className="col-md-6 !p-0">
            <h1 className="text-[50px] font-bold text-[#212125] uppercase mb-[0.5rem] leading-[1.2]">
              <SectionHeading highlightText="Briefing" /> Management Platform
            </h1>
            <p className="sub-heading !p-[25px_0]">
              A Silicon Valley startup captures the market by offering a
              state-of-the-art software platform for managing briefing programs
              and events for Fortune 100 companies.
            </p>
            <div className="mt-[1rem]">
              <span className="max-w-[230px] w-full inline-block text-[16px] text-[#858789]">
                <Image
                  src={alarm}
                  className="inline-block max-w-[50px]"
                  alt=""
                />
                <p className="w-[calc(100%_-_65px)] align-middle inline-block ml-[14px] text-[#303234]">
                  <strong className="text-[#303234] text-[18px] font-semibold">
                    Time:
                  </strong>
                  <br />
                  2012 – Present
                </p>
              </span>
              <span className="max-w-[230px] w-full inline-block text-[16px] text-[#858789]">
                <Image src={web} className="inline-block max-w-[50px]" alt="" />
                <p className="w-[calc(100%_-_65px)] align-middle inline-block ml-[14px] text-[#303234]">
                  <strong className="text-[#303234] text-[18px] font-semibold">
                    Platforms:
                  </strong>
                  <br />
                  Web
                </p>
              </span>
            </div>
            <div className="mt-[1rem]">
              <span className="max-w-[230px] w-full inline-block text-[16px] text-[#858789]">
                <Image
                  src={team}
                  className="inline-block max-w-[50px]"
                  alt=""
                />
                <p className="w-[calc(100%_-_65px)] align-middle inline-block ml-[14px] text-[#303234]">
                  <strong className="text-[#303234] text-[18px] font-semibold">
                    Team:
                  </strong>
                  <br />3 - 10 Members
                </p>
              </span>
              <span className="max-w-[230px] w-full inline-block text-[16px] text-[#858789]">
                <Image
                  src={Industry}
                  className="inline-block max-w-[50px]"
                  alt=""
                />
                <p className="w-[calc(100%_-_65px)] align-middle inline-block ml-[14px] text-[#303234]">
                  <strong className="text-[#303234] text-[18px] font-semibold">
                    Industry:
                  </strong>
                  <br />
                  Technology
                </p>
              </span>
            </div>
          </div>
          <div className="col-md-6 !p-0">
            <Image src={laptopBs} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleCaseHero;
