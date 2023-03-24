import SectionHeading from '../../../../components/SectionHeading/SectionHeading';

const CompanyBanner = () => {
  return (
    <section className="bg-[url('/assets/images/company/compnay-banner.webp')] bg-[#ac6b28] max-h-[700px] bg-[bottom_left] bg-auto bg-repeat relative p-[300px_0_100px] h-[100vh] text-center text-white">
      <div>
        <div className="container absolute inset-0 max-h-[182px] m-auto text-center">
          <h1 className="text-white text-[50px] font-bold uppercase mb-[0.5rem] leading-[1.2] main-heading">Welcome to <SectionHeading highlightText="GoodCore Software" /></h1>
          <p className="!text-white sub-heading"> A lot goes on behind the scenes when we are building software. <br />  Excitement. Teamwork. Labour of love. A bit of craziness. <br /> This is what makes GoodCore – Good to the Core! </p>
        </div>
      </div>
    </section>
  );
};

export default CompanyBanner;