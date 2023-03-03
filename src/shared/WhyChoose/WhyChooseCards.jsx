import { whyUs } from "../../views/Home/constant";
import WhyUsCard from "./WhyChooseCard";

const WhyChooseCards = () => {
  return (
    <div className="row text-left xlg:mt-[3rem] mt-[20px]">
      {whyUs.map((item) => (
        <WhyUsCard
          key={item.firstTitle}
          firstTitle={item.firstTitle}
          secondTitle={item.secondTitle}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default WhyChooseCards;