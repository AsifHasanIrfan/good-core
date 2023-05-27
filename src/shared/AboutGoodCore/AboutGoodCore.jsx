import parse from "html-react-parser";

const AboutGoodCore = ({ heading, factLists }) => {
  return (
    <section className="bg-[#EDF2F7] p-[80px_0] pb-0">
      <div className="container">
        <div className="row">
          <div className="col-md-9">
            <div className="bg-white text-[#333] p-[60px_50px] rounded-tr-[30px] before:content-[''] before:bg-white before:h-full before:absolute before:left-[calc(16px_-_100%)] before:w-full before:top-0">
              <h4 className="sub-heading">{heading}</h4>
              <ul className="mb-[1rem]">
                {factLists.map((fact, i) => (
                  <li
                    key={i + "fact"}
                    className="p-[5px_0] leading-[30px] text-[18px]"
                  >
                    {parse(fact)}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="col-md-3 md:pt-[3rem] md:pl-[1.5rem]">
            <div className="pl-[10px] mb-[30px]">
              <h4 className="text-[56px] font-bold text-primary leading-[40px] mb-[0.5rem]">
                16+
              </h4>
              <p className="text-[20px] uppercase text-[#212529] mb-[1rem]">
                years on the market
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutGoodCore;
