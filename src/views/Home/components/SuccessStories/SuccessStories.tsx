import Button from '@/components/Button/Button';
import SectionHeading from '@/components/SectionHeading/SectionHeading';
import Slider from '@/components/Slider/Slider';
import { SwiperSlide } from "swiper/react";
import StoryImage from './StoryImage';

const SuccessStories = () => {
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
        <div className="p-[30px_25px]">
          <Slider slidesPerView={1}>
            <SwiperSlide>
              <div className="row items-center mx-0">
                <StoryImage />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src="/assets/images/peter.webp" />
            </SwiperSlide>
            <SwiperSlide>
              <h2 className="section-heading">
                <SectionHeading highlightText="success" /> STORIES
              </h2>
            </SwiperSlide>
            <SwiperSlide>
              <h2 className="section-heading">
                <SectionHeading highlightText="success" /> STORIES
              </h2>
            </SwiperSlide>
          </Slider>
        </div>

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