import Slider from 'react-slick';
import SectionHeading from '../../../../components/SectionHeading/SectionHeading';
import SingleInsight from '../../../../shared/SingleInsight/SingleInsight';

const CostInsight = () => {
  const settings = {
    className: 'row !flex p-[30px_25px] pb-0 cost-insight',
    draggable: true,
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };

  return (
    <section className="p-[80px_0]">
      <div className="container">
        <div className="text-center mb-[50px]">
          <h2 className="section-heading tracking-[2px] mb-[0.25rem]"> Software Development Cost <SectionHeading highlightText="Insights" /></h2>
        </div>

        <Slider {...settings}>
          <SingleInsight />
          <SingleInsight />
          <SingleInsight />
        </Slider>
      </div>
    </section>
  );
};

export default CostInsight;