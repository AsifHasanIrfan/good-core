import Image from 'next/image';
import priceGraph from '../../../../assets/images/company/price-graph.webp';
import SectionHeading from '../../../../components/SectionHeading/SectionHeading';

const ComponentsCost = () => {
  return (
    <section className="bg-[#f5f9fc] p-[80px_0]">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h2 className="section-heading tracking-[2px] mb-[0.25rem]"><SectionHeading highlightText="Components" /> of Software Development Costs </h2>
            <p className="text-[18px] leading-[30px] my-[1rem]">There are 4 major components of custom software development pricing, and each one of them carries a different weight in the total cost. Each one is a critical item and important for a successful product development effort. The following is a rough idea of the cost distribution for these major factors based on fixed-cost projects:</p>
            <Image src={priceGraph} alt="price-graph" className="inline-block mt-[1.5rem]" />
            <p className="text-[18px] leading-[30px] mt-[1.5rem] mb-[1rem]"><span className="text-[#dc3545]">Note:</span> The cost distribution provided above is based on rough estimates. These software development costs vary based on size, complexity, and engagement model (i.e. the type of pricing model you choose, e.g. hourly rate, dedicated team etc.).</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComponentsCost;