import { useState } from "react";

interface AccordingCardProps {
  data: {
    question: string;
    answer: string;
  };
}

const AccordionCard: React.FC<AccordingCardProps> = ({ data }) => {
  const [openAccordion, setOpenAccordion] = useState<string>("");

  return (
    <div className="bg-[#edf2f7] mb-[25px] rounded-[20px] relative flex flex-col min-w-0 break-words bg-clip-border">
      <div className="bg-transparent p-[0px_15px_0px_10px] first:rounded-[calc(0.25rem_-_1px)_calc(0.25rem_-_1px)_0_0] justify-between flex">
        <span
          role="button"
          onClick={() => {
            if (openAccordion === data.question) {
              setOpenAccordion("");
            } else {
              setOpenAccordion(data.question);
            }
          }}
          data-toggle="collapse"
          aria-expanded="false"
          className="collapsed rounded-t-[calc(0.25rem_-_1px)] text-[#324148] bg-transparent pl-[50px] w-full text-left relative min-h-[110px] flex items-center transition-all duration-[.2s] ease-in-out accordion-collapse"
        >
          {data.question}
        </span>
      </div>

      <div
        id="collapse_li"
        className={`collapsing ${
          openAccordion === data.question ? "h-[140px]" : "!h-0"
        }`}
        data-parent="#accordion_faq"
        role="tabpanel"
      >
        <div className="p-[0px_20px_25px_60px] leading-[30px] mt-[-5px] text-[15px] text-black">
          {data.answer}
        </div>
      </div>
    </div>
  );
};

export default AccordionCard;
