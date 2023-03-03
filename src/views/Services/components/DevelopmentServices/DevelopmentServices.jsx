import Image from 'next/image';
import Button from '../../../../components/Button/Button';
import SectionHeading from '../../../../components/SectionHeading/SectionHeading';
import img from '../../../../assets/images/services/bespoke-software.webp';
import cloudImg from '../../../../assets/images/services/cloud-storage.webp';

const DevelopmentServices = () => {
  return (
    <section className="bg-gray-100 p-[80px_0]">
      <div className="container border-b-[3px] pb-[50px] border-b-gray-border">
        <div className="row text-center">
          <div className="col-md-12">
            <h2 className="section-heading !tracking-[2px]"><SectionHeading highlightText="Our software" /> development Services </h2>
            <p className="sub-heading">Our software development services enable businesses to leverage digital trends, address market needs, and build competitive advantage.</p>
          </div>
        </div>

        <div className="row items-center">
          <div className="col-md-6 text-center">
            <Image src={img} alt="img" />
          </div>
          <div className="col-md-6">
            <h3 className="text-[27px] p-[20px_0] font-semibold mb-[0.5rem] leading-[1.2]">Bespoke Software Applications For Businesses </h3>
            <p className="text-[18px] leading-[30px] mb-[1rem]">We offer a range of custom software application development services that help streamline complex organisational workflows and interface seamlessly with existing software implementations. We build software applications that befit your business practices to deliver enhanced performance, efficiency, customer experience, and profitability for your business. </p>
            <div className="mt-[1.5rem]">
              <span className="max-w-[230px] w-full inline-block text-[16px] text-[#858789] mb-[1rem]">
                <Image src={cloudImg} width={100} height={100} alt="img" className="inline-block max-w-[50px]" />
                <p className="w-[calc(100%-65px)] mb-0 align-middle inline-block ml-[10px] text-[#303234]">Cloud-Based Web Applications</p>
              </span>
            </div>
            <Button href="" variant="fill" className="!p-[8px_20px]">Read More</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevelopmentServices;