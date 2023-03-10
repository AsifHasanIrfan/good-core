import Button from "../../../../components/Button/Button";

const Estimate = () => {
  return (
    <section className="bg-[url('/assets/images/Call-To-Action-bg.webp')] bg-cover bg-center text-white items-center flex md:p-[100px_0] p-[50px_0]">
      <div className="container">
        <div className="row text-center">
          <div className="col-md-12">
            <h3 className="md:text-[50px] text-[30px] md:pr-[50px] font-bold mt-[20px] uppercase mb-[1rem] leading-[1.2]">Get an Estimate Now!</h3>
            <p className="md:text-[24px] text-[16px] leading-[36px] m-auto pr-0">Send us your project details, and we will get back to you with a realistic cost estimate for your project.</p>
          </div>
        </div>

        <div className="row mt-[1rem] text-center">
          <div className="col-md-12">
            <Button href="" className="bg-white border-white text-primary hover:text-white hover:bg-transparent hover:shadow-[0_0_15px_rgb(255_255_255_/_33%)] lg:w-auto w-full">Contact Us</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Estimate;