import SectionHeading from "../../../../components/SectionHeading/SectionHeading";
import collabLogos from "../../../../assets/images/company/logos.png";
import Image from "next/image";

const collabItems = [
  "Internship Programs",
  "Management Trainee Programs",
  "Sponsoring Programming Competitions",
  "On-Campus Recruitment",
];

const Collaboration = () => {
  return (
    <section className="p-[80px_0]">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading tracking-[2px] mb-[0.25rem]">
            Industry-Academia <SectionHeading highlightText="Collaboration" />
          </h2>
          <p className="sub-heading max-w-[880px] !text-[20px] m-auto">
            Since 2005, GoodCore has maintained strong interaction with the top
            educational institutions. Hiring and training fresh graduates and
            interns has always been part of our HR strategy.{" "}
          </p>
        </div>

        <div className="row mb-[3rem] items-center">
          <div className="col-md-5 md:ml-[8.3333333333%]">
            <ul className="mb-[1rem] pl-[40px] collab-list">
              {collabItems.map((item, i) => (
                <li key={i + 'collab'} className="p-[18px] text-[20px]">{item}</li>
              ))}
            </ul>
          </div>
          <div className="col-md-5">
            <Image
              width={398}
              height={233}
              src={collabLogos}
              alt="collab-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collaboration;
