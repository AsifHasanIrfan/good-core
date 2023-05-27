import Image from "next/image";
import challengeImg from "../../../../assets/images/cases/thechallenge.png";

const Challenge = () => {
  return (
    <section className="w-full px-[15px] mx-auto p-[80px_0]">
      <div className="container">
        <div className="row items-center">
          <div className="col-md-5 text-right md:order-2">
            <Image src={challengeImg} alt="challenge-img" />
          </div>
          <div className="col-md-7 md:order-1">
            <h3 className="text-[27px] p-[20px_0] font-bold mb-[1rem] leading-[1.2]">
              The Challenge
            </h3>
            <p className="content text-[18px] leading-[30px]">
              Our client reached out to us to develop a smart SaaS-based
              solution that can be offered to their customers to efficiently
              manage their corporate events and meetings. After working with
              other vendors who failed to understand their complex software
              design requirements and delivered an unstable and faulty beta
              version, our client chose to partner with GoodCore to stabilize
              their existing platform and rebuild it to bring their product
              vision to life.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Challenge;
