import SectionHeading from '../../../../components/SectionHeading/SectionHeading';

const HeroBanner = () => {
  return (
    <section className="bg-[url('/assets/images/company/serivce-banner-bg.webp')] w-full px-[15px] mx-auto p-[80px_0]">
      <div className="container">
        <div className="row text-center">
          <div className="col-md-12">
            <h1 className="section-heading mt-[40px] mb-[0.5rem] text-[50px] tracking-normal"> Frequently asked <SectionHeading highlightText="questions" /></h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;