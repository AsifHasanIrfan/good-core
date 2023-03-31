import SectionHeading from "../../../../components/SectionHeading/SectionHeading";
import { realisticCostEstimate } from "../../constant";

const RealisticCost = () => {
  return (
    <section className="bg-gray-100 p-[80px_0]">
      <div className="max-w-[1070px] p-[0_15px] m-auto">
        <div className="row">
          <div className="col-md-12 text-center">
            <h2 className="section-heading mb-[1rem]">
              {" "}
              What We Need for A Realistic Cost <br />{" "}
              <SectionHeading highlightText="Estimation" />
            </h2>
            <p className="text-[18px] leading-[30px] p-[0.25rem] mb-[1rem]">
              In order to provide you with an accurate and realistic estimate
              for your project’s development cost, there are a few things we
              need from you.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            {realisticCostEstimate.map((item, i) => (
              <div key={i + 'kdfjsd'} className="bg-white even:bg-[#fafcfe] rounded-[10px] p-[20px] mb-[10px]">
                <div className="bg-[0_0] w-[60px] bg-[url('/assets/images/company/pricing-cost.webp')] h-[60px] inline-block"></div>
                <div className="inline-block w-[calc(100%_-_75px)] pl-[30px] align-top">
                  <h3 className="font-bold text-[26px] mb-[0.5rem] leading-[1.2]">
                    {item.title}
                  </h3>
                  <p className="mb-[1rem]">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RealisticCost;
