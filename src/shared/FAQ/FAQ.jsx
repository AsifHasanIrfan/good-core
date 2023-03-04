import AccordionCard from './components/AccordionCard/AccordionCard';

const FAQ = ({ faqs }) => {
  return (
    <section className="bg-[#f5f9fc] p-[80px_0]">
      <div id="accordion_faq" className="faq-accordion">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-12">
              <h2 className="section-heading !mb-[3rem] !mt-0">
                Frequently Asked Questions
              </h2>
            </div>
          </div>

          <div className="row">
            {faqs.map((faq, i) => (
              <div key={i} className="col-md-6">
                {faq.map((item) => (
                  <AccordionCard key={item.question} data={item} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;