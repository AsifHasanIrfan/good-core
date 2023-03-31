import SectionHeading from '../../../../components/SectionHeading/SectionHeading';

const HeroBanner = () => {
  return (
    <section className="bg-[url('/assets/images/company/serivce-banner-bg.webp')] w-full px-[15px] mx-auto md:p-[80px_0] p-[40px_0]">
      <div className="container">
        <div className="row text-center">
          <div className="col-md-12">
            <h1 className="section-heading xlg:mt-[40px] mt-0 mb-[0.5rem] md:text-[50px] text-[23px] tracking-normal"> Frequently asked <SectionHeading highlightText="questions" /></h1>
            <p className='mb-[1rem]'><br /></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;