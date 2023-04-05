import Slider from "react-slick";
import Button from "../../components/Button/Button";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import SliderNextButton from "../../components/SliderButton/SliderNextButton";
import SliderPrevButton from "../../components/SliderButton/SliderPrevButton";
import AwardCard from "./components/AwardCard/AwardCard";

const Awards = ({ showButton }) => {
  // slider config settings
  const settings = {
    className: "row !flex",
    draggable: true,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <SliderNextButton />,
    nextArrow: <SliderPrevButton />,
  };

  return (
    <section className="md:p-[80px_0] p-[40px_0] pb-0">
      <div className="container">
        <div className="text-center mb-[3rem]">
          <h2 className="section-heading tracking-[2px] mb-[0.25rem]">
            <SectionHeading highlightText="Awards & Recognition" />
          </h2>
          <p className="sub-heading">
            As a leading software development company in the UK, we have won a
            number of prestigious business awards for our work and excellence.
          </p>
        </div>

        <Slider {...settings}>
          {[...Array(10)].map((_, i) => (
            <AwardCard key={i} />
          ))}
        </Slider>

        {showButton ? (
          <div className="row">
            <div className="col-md-12 text-center mt-[3rem]">
              <Button
                href=""
                className="text-[#1f92f4] hover:bg-[#1f92f4] hover:text-white hover:shadow-[0_0_15px_#1f92f4] w-full lg:w-auto"
              >
                View All Awards
              </Button>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default Awards;
