import { companyFaqs } from "../../../../constant";
import FAQCard from "../FAQCard/FAQCard";

const FaqQuestions = () => {
  
  return (
    <section className="p-[80px_0]">
      <div className="container pb-[3rem]">
        <div className="row text-left">
          <div className="col-md-12">
            <div className="container">
              <hr className="my-[1rem] border-t-[rgba(0,0,0,.1)]" />
              <div className="xlg:mt-[3rem] mt-[20px]">
                {companyFaqs.map((faq) => (
                  <FAQCard key={faq.id} faq={faq} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqQuestions;
