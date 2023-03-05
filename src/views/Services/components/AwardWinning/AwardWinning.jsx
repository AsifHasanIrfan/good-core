import Image from 'next/image';
import servicesClutch from "../../../../assets/images/services/services-clutch.webp"

const AwardWinning = () => {
  return (
    <section className="w-full px-[15px] mx-auto md:p-[80px_0] p-[40px_0]">
      <div className="container md:p-0">
        <div className="row">
          <div className="col-lg-7">
            <h2 className="section-heading md:text-left text-center">Award-winning B2B Software Development Services.</h2>
            <p className="mb-[1rem] md:text-left text-center text-[14px] md:text-[1rem]">We develop custom software solutions that are tailored to meet your business needs and unique challenges. From software discovery and consultation to the end-to-end development of scalable solutions, GoodCore offers top-notch full-cycle software development services that adapt seamlessly to your project requirements and budgetary confines.</p>
          </div>

          <div className="col-lg-5">
            <Image className="lg:block hidden" src={servicesClutch} width={350} height={360} alt="img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardWinning;