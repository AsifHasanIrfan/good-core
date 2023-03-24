import React, { useState } from "react";

const FAQCard = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="mb-[20px] border border-[#c1cfdf] rounded-[5px] overflow-hidden relative flex flex-col min-w-0 bg-white">
      <div className="mb-[-1px] rounded-[calc(0.25rem_-_1px)_calc(0.25rem_-_1px)_0_0] p-[0.75rem_1.25rem] bg-[rgba(0,0,0,.03)] border-b border-[rgba(0,0,0,.125)]">
        <h5 onClick={() => setIsOpen(!isOpen)} className="text-[22px] font-medium leading-[1.2] cursor-pointer">
          {" "}
          What kind of customers does GoodCore work with?{" "}
          <i className="fa fa-angle-down rotate-icon float-right text-[26px]"></i>
        </h5>
      </div>

        <div className={`h-0 transition-all duration-500 ${isOpen ? 'h-full' : ''}`}>
          <div className="text-[18px] leading-[1.8] flex-[1_1_auto] p-[1.25rem]">
            We work with startups, small- and medium-sized businesses, large
            organisations, and public sector organisations, belonging to a wide
            range of industries such as finance, education, technology, and
            healthcare.
          </div>
        </div>
    </div>
  );
};

export default FAQCard;
