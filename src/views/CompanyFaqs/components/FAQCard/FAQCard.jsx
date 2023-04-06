import { useRef, useState } from "react";

const FAQCard = ({ faq, toggleFaq, setToggleFaq }) => {
  const contentEl = useRef();
  
  return (
    <div className="mb-[20px] border border-[#c1cfdf] rounded-[5px] overflow-hidden relative flex flex-col min-w-0 bg-white">
      <div className="mb-[-1px] rounded-[calc(0.25rem_-_1px)_calc(0.25rem_-_1px)_0_0] p-[0.75rem_1.25rem] bg-[rgba(0,0,0,.03)] border-b border-[rgba(0,0,0,.125)]">
        <h5
          onClick={() => {
            if(toggleFaq === faq.id) {
              setToggleFaq('')
            } else {
              setToggleFaq(faq.id)
            }
          }}
          className="md:text-[22px] text-[18px] leading-[1.2] cursor-pointer flex justify-between"
        >
          {faq.question}
          <i className={`fa fa-angle-down rotate-icon float-right text-[26px] md:static absolute right-[5px] top-[5px] transition-all duration-300 ${toggleFaq === faq.id ? 'rotate-180 text-[#1f92f4]' : ''}`}></i>
        </h5>
      </div>

      <div
        ref={contentEl}
        className="h-0 transition-all duration-300"
        style={
          toggleFaq === faq.id
            ? { height: contentEl.current.scrollHeight }
            : { height: "0px" }
        }
      >
        <div className="md:text-[18px] text-[16px] leading-[1.8] flex-[1_1_auto] p-[1.25rem]">
          {faq.answer}
        </div>
      </div>
    </div>
  );
};

export default FAQCard;
