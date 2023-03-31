import Image from 'next/image';
import SectionHeading from '../../../../components/SectionHeading/SectionHeading';
import techImg from '../../../../assets/images/company/tech-complex.webp';

const AppFactor = () => {
  return (
    <section className="p-[80px_0]">
      <div className="container">
        <div className="container p-0">
          <div className="row text-center mb-[1.5rem]">
            <div className="col-md-12">
              <h2 className="section-heading text-[36px]">
                <SectionHeading highlightText="ALL SOFTWARE" /> PROJECTS ARE NOT
                EQUAL
              </h2>
              <p className="sub-content !font-bold">
                Factors Impacting Bespoke Software Development Costs
              </p>
              <p className="text-[18px] leading-[30px] mb-[1rem]">
                Just like everything else in life, all custom software projects
                are not equal either. They differ based on not only individual
                software development companies but also the following high-level
                characteristics:
              </p>
            </div>
          </div>

          <div className="row min-h-[auto] rounded-[20px] p-[3rem]">
            <div className="col-md-5 md:order-1">
              <Image src={techImg} alt="" />
            </div>
            <div className="col-md-7 md:order-2">
              <h3 className="text-[27px] pb-[20px] font-semibold mb-[0.5rem] leading-[1.2]">
                Technical Complexity
              </h3>
              <p className="text-[16px] leading-[30px] mb-[1rem]">
                If your software projects are scientifically complex, it would
                add a lot to your software cost. Complexity could be a real-time
                collaboration between users of the app, video functionality with
                no lag, process flows with a lot of dependencies etc.
              </p>
              <div className="mt-[30px]">
                <span className="inline-flex items-center max-w-[230px] w-full text-[16px] text-[#858789]">
                  <div className={`bg-[url('/assets/images/company/pricing-factor.webp')] w-[42px] h-[43px]`}></div>
                  <p className="align-middle w-[calc(100%_-_65px)] inline-block ml-[10px] text-[#303234]">
                    Platform <br /> Choice
                  </p>
                </span>
                <span className="inline-flex items-center max-w-[230px] w-full text-[16px] text-[#858789]"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppFactor;