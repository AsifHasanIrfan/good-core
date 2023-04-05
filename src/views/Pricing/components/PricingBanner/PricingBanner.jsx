import SectionHeading from '../../../../components/SectionHeading/SectionHeading';

const PricingBanner = () => {
  return (
    <section className="p-[80px_0] bg-[url('/assets/images/company/serivce-banner-bg.webp')] w-full px-[15px] mx-auto">
      <div className="container">
        <div className="row text-center">
          <div className="col-md-12">
            <h1 className="section-heading mt-[40px] mb-[0.5rem] text-[50px] tracking-normal"><SectionHeading highlightText="Bespoke" />  Software Development Costs </h1>
            <p className="sub-heading max-w-[950px] inline-block !pb-[30px]"> Money matters! Spend it wisely! We help build bespoke software products on budget and on time, all in a cost-effective manner. </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingBanner;