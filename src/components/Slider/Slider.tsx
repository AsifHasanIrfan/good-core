// Import Swiper React components
import { Swiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper";

interface SliderProps {
  children: React.ReactNode;
  slidesPerView: number;
}

const Slider: React.FC<SliderProps> = ({ children, slidesPerView }) => {
  
  return (
    <Swiper
      slidesPerView={slidesPerView}
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className=""
    >
      {children}
    </Swiper>
  );
};

export default Slider;
