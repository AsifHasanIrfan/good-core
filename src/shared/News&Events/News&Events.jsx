import Slider from "react-slick";
import SliderNextButton from "../../components/SliderButton/SliderNextButton";
import SliderPrevButton from "../../components/SliderButton/SliderPrevButton";
import NewsEventsCard from './components/News&EventsCard/News&EventsCard';

const NewsAndEvents = ({ sectionTitle }) => {
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
    <section className="pb-[30px]">
      <div className="container">
        <div className="mb-[50px] text-center">
          <h2 className="section-heading">
            {sectionTitle}
          </h2>
        </div>

        <Slider {...settings}>
          {[...Array(10)].map((_, i) => (
            <NewsEventsCard key={i} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default NewsAndEvents;