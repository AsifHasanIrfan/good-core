import Slider from "react-slick";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import SliderNextButton from "../../components/SliderButton/SliderNextButton";
import SliderPrevButton from "../../components/SliderButton/SliderPrevButton";
import TestimonialCard from './TestimonialCard';

const Testimonial = () => {
  // slider config settings
  const settings = {
    className: "row !flex p-[30px_25px] justify-center mb-[30px] testimonial-slider",
    dotsClass: "slick-dots !bottom-[-5px]",
    draggable: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: false,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <SliderNextButton />,
    nextArrow: <SliderPrevButton />,
  };

  return (
    <section className="relative bg-[#f5f9fc] xlg:p-[80px_0] p-[30px_15px] block">
      <div className="container p-0">
        <div className="row">
          <div className="col-md-12 text-center">
            <h2 className="section-heading">
              WHAT <SectionHeading highlightText="OUR CLIENTS" /> SAY
            </h2>
          </div>
        </div>
        
        <Slider {...settings}>
          {[...Array(10)].map((_, i) => (
              <TestimonialCard key={i} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonial;