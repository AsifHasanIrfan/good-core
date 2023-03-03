import Image from "next/image";
import Button from "../../../../components/Button/Button";
import ctaMobile from "../../../../assets/images/services/cta-mobile.png";

const ServicesCta = () => {
  return (
    <section className="bg-[url('/assets/images/cta-2.webp')] py-0 bg-cover bg-center text-white items-center flex p-[100px_0]">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 py-[3rem]">
            <h3 className="text-[36px] pr-[50px] font-bold mt-[20px] mb-[0.5rem] leading-[1.2]">Power your development journey today!</h3>
            <p className="text-[18px] leading-[26px] pr-[80px] py-[1rem] mb-[1rem]">We offer bespoke services for web, mobile, and desktop application development, with flexible engagement options for businesses across industries.</p>
            <Button href="" className="bg-white text-[#0a6ebd] border-[2px] border-white hover:bg-transparent hover:text-white hover:shadow-[0_0_15px_rgb(255_255_255_/_33%)]">Contact Us</Button>
          </div>

          <div className="col-lg-6 self-end hidden lg:flex">
            <Image src={ctaMobile}alt="cta-mobile" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesCta;