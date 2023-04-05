import Slider from 'react-slick';
import SectionHeading from '../../../../components/SectionHeading/SectionHeading';
import SliderNextButton from '../../../../components/SliderButton/SliderNextButton';
import SliderPrevButton from '../../../../components/SliderButton/SliderPrevButton';
import NewsEventsCard from '../../../../shared/News&Events/components/News&EventsCard/News&EventsCard';

const ServicesInsight = () => {
  // slider config settings
  const settings = {
    className: "row !flex p-[30px_25px] pb-0 news-events-slider",
    draggable: true,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <SliderNextButton />,
    nextArrow: <SliderPrevButton />,
  };

  return (
    <section className="p-[80px_0]">
      <div className="container">
        {/* Section Heading */}
        <div className="mb-[50px] text-center">
          <h2 className="section-heading !mb-[0.25rem]">
            {" "}
            Software Development Services{" "}
            <SectionHeading highlightText="Insights" />
          </h2>
        </div>

        {/* Insight slider */}
        <Slider {...settings}>
          {[...Array(10)].map((_, i) => (
            <NewsEventsCard key={i} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ServicesInsight;