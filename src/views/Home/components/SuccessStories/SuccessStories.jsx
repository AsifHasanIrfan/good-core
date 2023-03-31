import Slider from 'react-slick';
import Button from '../../../../components/Button/Button';
import SectionHeading from '../../../../components/SectionHeading/SectionHeading';
import SliderNextButton from "../../../../components/SliderButton/SliderNextButton";
import SliderPrevButton from "../../../../components/SliderButton/SliderPrevButton";
import StoryImage from './StoryImage';

const SuccessStories = () => {
  // slider config settings
  const settings = {
    className:
      "row !flex mb-[30px] success-story-slider",
    dotsClass: "slick-dots !bottom-[-5px]",
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
    <section className="bg-[#f5f9fc] p-[80px_0] block">
      <div className="container p-0">
        <div className="row text-center">
          <div className="col-md-12">
            <h2 className="section-heading">
              <SectionHeading highlightText="success" /> STORIES
            </h2>
          </div>
        </div>

        {/* slider */}
        <Slider {...settings}>
          {[...Array(10)].map((_, i) => (
            <StoryImage key={i} />
          ))}
        </Slider>

        <div className="row mt-[3rem]">
          <div className="col-md-12 text-center">
            <Button
              href=""
              className="text-[#1f92f4] hover:bg-[#1f92f4] hover:text-white hover:shadow-[0_0_15px_#1f92f4] w-full lg:w-auto"
            >
              View All Case Studies
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;