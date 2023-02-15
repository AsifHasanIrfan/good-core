import SectionHeading from '@/components/SectionHeading/SectionHeading';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Navigation } from "swiper";
import SliderPrevButton from '@/components/SliderButton/SliderPrevButton';
import SliderNextButton from '@/components/SliderButton/SliderNextButton';
import Button from '@/components/Button/Button';
import AwardCard from './components/AwardCard/AwardCard';

const Awards = () => {
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

        <div className="row bg-transparent p-0 text-center justify-center relative box-border">
          <Swiper
            slidesPerView={1}
            spaceBetween={11}
            navigation={{
              nextEl: ".nextBtn",
              prevEl: ".prevBtn",
              disabledClass: "hidden",
            }}
            breakpoints={{
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
            modules={[Navigation, Autoplay]}
            className=""
          >
            {[...Array(10)].map((_, i) => (
              <SwiperSlide key={i}>
                <AwardCard />
              </SwiperSlide>
            ))}
          </Swiper>
          <SliderPrevButton />
          <SliderNextButton />
        </div>

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
      </div>
    </section>
  );
};

export default Awards;