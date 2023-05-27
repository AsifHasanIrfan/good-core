import Image from "next/image";
import img from '../../../../assets/images/technology/java-banner.webp';

const TechSkilled = () => {
  return (
    <section className="p-[80px_0]">
      <div className="container p-0">
        <div className="row items-center">
          <div className="col-lg-5">
            <h2 className="text-[27px] font-medium text-black-10 mb-[0.5rem] leading-[1.2]">
              GoodCore is a Java development company with over 16 years of
              experience in bespoke software development. We have built and
              deployed numerous secure, scalable, and cost-effective Java
              applications for web, mobile, and desktop platforms.
            </h2>
            <p className="text-black-15 text-[17px] mb-[1rem]">
              <br />
              If you do not have the required resources or experience for your
              software project, allow us to take over and speed up your digital
              transformation process with our exceptional Java software
              development services. With dedicated Java development services,
              you can assign some or all of your technical responsibilities to
              our team of experts without stretching beyond your budgetary
              confines.
            </p>
          </div>
          <div className="col-lg-7">
            <Image className="" src={img} alt="img" />
          </div>
          <div className="lg:flex-[0_0_100%] lg:max-w-[100%] relative w-full px-[15px] mt-[1.5rem]">
            <p className="text-black-15 text-[17px] mb-[1rem]">
              By working with GoodCore, you can collaborate with highly skilled
              senior Java developers, engineers, designers, and managers.
              Offering new insights and perspectives to your project, our team
              is capable of quickly adapting to your unique requirements. Our
              technical expertise and business knowledge make us the ideal Java
              outsourcing partner for businesses of all sizes, from startups to
              large enterprises.
            </p>
            <Image className="lg:hidden" src="" alt="img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechSkilled;
