import SectionHeading from "../../../../components/SectionHeading/SectionHeading";
import SliderPrevButton from "../../../../components/SliderButton/SliderPrevButton";
import SliderNextButton from "../../../../components/SliderButton/SliderNextButton";
import Image from "next/image";
import successImg from "../../../../assets/images/services/loan-management-system.webp";
import Button from "../../../../components/Button/Button";
import Slider from "react-slick";

const SuccessStories = () => {
  // slider config settings
  const settings = {
    className:
      "col-md-12 bg-white p-[40px_60px] rounded-[30px] shadow-[0px_0px_36px_#afc5e0] mb-[30px] py-[1rem]",
    draggable: true,
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <SliderNextButton />,
    nextArrow: <SliderPrevButton />,
  };

  return (
    <section className="bg-gray-100 p-[80px_0]">
      <div className="container">
        {/* section heading */}
        <div className="row text-center">
          <div className="col-md-12">
            <h2 className="section-heading mt-0">
              <SectionHeading highlightText="Success" /> Stories
            </h2>
          </div>
        </div>

        {/* Success slider */}
        <div className="row">
          <Slider {...settings}>
            {[...Array(10)].map((_, i) => (
              <div key={i + "sfdf"} className="container p-0 select-none">
                <div className="row items-center">
                  <div className="col-md-6 md:order-2">
                    <Image
                      src={successImg}
                      alt="img"
                      className="block mt-[1.5rem] h-auto"
                    />
                    <div className="w-max mx-auto">
                      <Button
                        href=""
                        variant="fill"
                        className="mt-[50px] m-[15px_auto] max-w-[280px] !p-[15px_40px]"
                      >
                        See Full Case Study
                      </Button>
                    </div>
                  </div>
                  <div className="col-md-6 md:order-1">
                    <span className="text-primary border-t-[3px] border-primary text-[12px] font-semibold inline-block uppercase">
                      Loan Management System
                    </span>
                    <h3 className="text-[27px] p-[20px_0] font-semibold mb-[0.5rem] leading-[1.2]">
                      {" "}
                      Custom-built web-based loan management system{" "}
                    </h3>
                    <p className="mb-[1rem]">
                      {" "}
                      We built a fully bespoke software platform to facilitate
                      loan application and disbursement for local businesses
                      impacted by COVID-19 under the UK government’s Bounce Back
                      Loan Scheme (BBLS).
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
