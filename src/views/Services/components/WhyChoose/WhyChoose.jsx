import Link from "next/link";
import SectionHeading from "../../../../components/SectionHeading/SectionHeading";
import WhyChooseCards from "../../../../shared/WhyChoose/WhyChooseCards";
import { whyChooseServiceBoxData } from "../../constant";
import ServiceBox from "./components/ServiceBox/ServiceBox";

const WhyChoose = () => {
  return (
    <section className="p-[80px_0]">
      <div className="container">
        <div className="container text-center p-0">
          {/* section heading */}
          <div className="row">
            <div className="col-md-12">
              <h2 className="section-heading">Why Choose <SectionHeading highlightText="GoodCore" /></h2>
            </div>
          </div>

          {/* why choose list */}
          <WhyChooseCards />

          {/* customer experience */}
          <div className="row">
            <div className="col-md-12 text-center">
              <p className="sub-content !my-[3rem]">Have the peace of mind that you are working with one of the best bespoke software development companies in the UK. Our offshore software development services cater to small and medium-sized businesses and large enterprises in the UK and worldwide.</p>
            </div>

            <div className="col-md-4">
              <h2 className="text-left leading-[1.2] text-[38px] font-bold mt-[1rem] mb-[0.5rem]">What our customers say about working with us: </h2>
            </div>

            <div className="col-md-8">
              <div className="row">
                {whyChooseServiceBoxData.map(item => <ServiceBox key={item.title} data={item} />)}
                <div className="col-md-4"></div>
                <div className="col-md-8">
                  <p className="text-[13px] text-right my-[1rem]">*Customer survey conducted by a market research firm, <Link href="" target="_blank" rel="noreferrer" className="text-[#007bff] bg-transparent">Clutch</Link></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;