import Button from "../../components/Button/Button";

const CTA = ({ title, description }) => {
  return (
    <section className="md:p-[100px_0] p-[50px_0] bg-[url('/assets/images/Call-To-Action-bg.webp')] bg-cover bg-center text-white items-center flex">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h3 className="md:text-[50px] text-[30px] md:text-left text-center md:pr-[50px] font-bold mt-[20px] mb-[0.5rem] leading-[1.2]">
              {title}
            </h3>
          </div>
          <div className="col-md-6">
            <p className="md:text-[24px] text-[16px] md:pr-[80px] md:text-left text-center leading-[36px] mb-[1rem]">
              {description}
            </p>
            <Button
              href="/"
              className="bg-white hover:bg-transparent text-[#0a6ebd] hover:text-white hover:border-white hover:shadow-[0_0_15px_rgb(255_255_255_/_33%)] lg:w-auto w-full md:text-left text-center"
            >
              Get a free quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;