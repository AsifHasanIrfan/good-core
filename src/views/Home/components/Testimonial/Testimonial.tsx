import SectionHeading from '@/components/SectionHeading/SectionHeading';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper";
import TestimonialCard from './TestimonialCard';
import SliderPrevButton from '@/components/SliderButton/SliderPrevButton';
import SliderNextButton from '@/components/SliderButton/SliderNextButton';

const Testimonial = () => {

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

        <div className="relative p-[30px_15px] row box-border">
          <Swiper
            slidesPerView={1}
            spaceBetween={11}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              stopOnLastSlide: true,
            }}
            navigation={{
              nextEl: ".nextBtn",
              prevEl: ".prevBtn",
              disabledClass: "hidden",
            }}
            breakpoints={{
              576: {
                slidesPerView: 1.5,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 2.5,
              },
              1200: {
                slidesPerView: 3,
              },
            }}
            modules={[Navigation, Pagination, Autoplay]}
            className="!pb-12"
          >
            {[...Array(10)].map((_, i) => (
              <SwiperSlide key={i}>
                <TestimonialCard />
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

export default Testimonial;