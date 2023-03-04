import SectionHeading from "../../../../components/SectionHeading/SectionHeading";
import { customDevelopment } from "../../constant";
import CustomCard from "./components/CustomCard/CustomCard";

const CustomSoftware = () => {
  return (
    <section className="bg-gray-100 p-[80px_0]">
      <div className="container">
        {/* Section Heading */}
        <div className="row text-center">
          <div className="col-md-12">
            <h2 className="section-heading"><SectionHeading highlightText="Cost" /> of Custom Software Development Services </h2>
            <p className="sub-content">We offer custom software development services at different price levels depending upon the scope and requirements of your software project. </p>
          </div>
        </div>

        <div className="row text-center mt-[3rem]">
          {customDevelopment.map(item => <CustomCard key={item.title} data={item} />)}
        </div>
      </div>
    </section>
  );
};

export default CustomSoftware;