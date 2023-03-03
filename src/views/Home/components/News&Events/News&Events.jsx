// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Navigation } from "swiper";
import NewsEventsCard from './components/News&EventsCard/News&EventsCard';
import SectionHeading from "../../../../components/SectionHeading/SectionHeading";
import SliderPrevButton from "../../../../components/SliderButton/SliderPrevButton";
import SliderNextButton from "../../../../components/SliderButton/SliderNextButton";

const NewsAndEvents = () => {
  return (
    <section className="pb-[30px]">
      <div className="container">
        <div className="mb-[50px] text-center">
          <h2 className="section-heading">
            Company <SectionHeading highlightText="News & Events" />
          </h2>
        </div>

        <div className="row p-[30px_15px] pb-0 bg-white relative box-border">
          <Swiper
            slidesPerView={1}
            spaceBetween={22}
            navigation={{
              nextEl: ".nextBtn",
              prevEl: ".prevBtn",
              disabledClass: "hidden",
            }}
            breakpoints={{
              768: {
                slidesPerView: 3,
              },
            }}
            modules={[Navigation, Autoplay]}
            className=""
          >
            {[...Array(10)].map((_, i) => (
              <SwiperSlide key={i}>
                <NewsEventsCard />
              </SwiperSlide>
            ))}
          </Swiper>
          <SliderPrevButton />
          <SliderNextButton />
        </div>
      </div>
    </section>
  );
};

export default NewsAndEvents;