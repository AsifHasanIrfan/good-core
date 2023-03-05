import Button from "../../../../components/Button/Button";
import SectionHeading from "../../../../components/SectionHeading/SectionHeading";
import { techListData } from "../../constant";
import TechList from "./components/TechList/TechList";

const ServicesHero = () => {
  return (
    <section className="relative overflow-hidden bg-gray-bg w-full px-[15px] mx-auto p-[80px_0] before:content-[''] before:absolute before:w-[280px] before:h-[360px] before:bottom-0 before:left-0 before:bg-[url('/assets/images/bg-header-left.webp')] after:content-[''] after:absolute after:w-[500px] after:h-full after:top-0 after:right-0 after:bg-[url('/assets/images/bg-header-right.webp')] after:bg-no-repeat after:bg-cover">
      <div className="container">
        <div className="row text-center">
          <div className="col-md-12">
            <h1 className="xlg:text-[64px] md:text-[52px] text-[40px] font-bold text-heading uppercase mb-[0.5rem] leading-[1.2]">
              <SectionHeading highlightText="Custom" /> Software DEVELOPMENT
              Services
            </h1>
            <p className="sub-heading !text-[#999]">
              Web applications, mobile apps, integration projects and more.{" "}
              <br /> 110 + projects | Since 2005
            </p>
            <Button
              href=""
              variant="fill"
              className="!text-[18px] !p-[20px_40px] w-full lg:w-auto"
            >
              Talk to our experts today
            </Button>
          </div>
          
          <div className="col-12">
            <ul className="mt-[70px] mb-[1rem] text-center">
              {techListData.map(item => <TechList key={item.title} item={item} />)} 
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;