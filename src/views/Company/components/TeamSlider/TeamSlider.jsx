import Slider from "react-slick";
import SliderNextButton from "../../../../components/SliderButton/SliderNextButton";
import SliderPrevButton from "../../../../components/SliderButton/SliderPrevButton";
import TeamProfileCard from "../TeamProfileCard/TeamProfileCard";

const TeamSlider = () => {
  // slider config settings
  const settings = {
    className: "row !flex p-[30px_25px] justify-center",
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
    <Slider {...settings}>
      <TeamProfileCard />
      <TeamProfileCard />
      <TeamProfileCard />
      <TeamProfileCard />
      <TeamProfileCard />
    </Slider>
  );
};

export default TeamSlider;
