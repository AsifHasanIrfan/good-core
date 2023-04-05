import Image from 'next/image';
import fixedImg from '../../../../assets/images/company/fixed-img.webp';
import SectionHeading from '../../../../components/SectionHeading/SectionHeading';

const fixedList = [
  "This model is suitable when your software requirements are well-defined and not likely to change over the course of development.",
  "We work with you upfront to define your software specifications in detail.",
  "We then guarantee delivery of the defined set of functionalities within a specific time frame and cost.",
  "It is not suitable for projects where software requirements are likely to change or evolve."
];

const EngagementModel = () => {
  return (
    <section className="p-[80px_0]">
      <div className="container">
        <div className="row text-center">
          <div className="col-md-12">
            <h2 className="section-heading tracking-[2px] mb-[3rem]">
              Our Engagement <SectionHeading highlightText="Models" />
            </h2>
          </div>
        </div>

        <div className="row items-center">
          <div className="col-md-5 text-center md:order-2">
            <Image src={fixedImg} alt="img" />
          </div>
          <div className="col-md-7 md:order-1">
            <h3 className="text-[27px] p-[20px_0] font-semibold uppercase mb-[0.5rem] leading-[1.2]">
              Fixed-Price Fixed-Scope
            </h3>
            <ul className="mb-[1rem] pl-[40px]">
              {fixedList.map((item, i) => (
                <li key={i + "fixed"} className="p-[5px_0] leading-[30px] text-[18px] before:text-[rgb(31,_146,_244)] before:content-['•'] before:text-[34px] before:leading-[1] before:pr-[15px] before:align-middle before:absolute before:ml-[-30px]">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EngagementModel;