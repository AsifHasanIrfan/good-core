import SectionHeading from "../../../../components/SectionHeading/SectionHeading";
import Image from "next/image";
import briefImg from "../../.../../../../assets/images/cases/briefingprogram.png";

const WeDelivered = () => {
  return (
    <section className="bg-gray-100 w-full px-[15px] mx-auto p-[80px_0]">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h2 className="section-heading">
              <SectionHeading highlightText="What" /> We Delivered
            </h2>
          </div>
        </div>

        <div className="row items-center">
          <div className="col-md-4 text-center">
            <Image src={briefImg} alt="brief-img" />
          </div>
          <div className="col-md-8 md:order-2">
            <h3 className="text-[27px] p-[20px_0] font-bold mb-[1rem] leading-[1.2]">
              Briefing Program Workflow & Agenda Builder
            </h3>
            <p className="content text-[18px] leading-[30px]">
              We developed a workflow management software that offers an
              easy-to-use platform to manage program workflows and build event
              agendas by using simple drag-and-drop and import features.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeDelivered;
