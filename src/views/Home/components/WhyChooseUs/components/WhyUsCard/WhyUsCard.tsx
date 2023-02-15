import React from 'react';

interface WhyUsCardProps {
  firstTitle: string;
  secondTitle: string;
  description: string;
};

const WhyUsCard: React.FC<WhyUsCardProps> = ({ firstTitle, secondTitle, description }) => {
  return (
    <div className="col-md-4">
      <div className="bg-transparent border-b-[7px] border-[#edf0f6] mb-[26px]">
        <div className="mb-[26px] inline-block align-top w-full">
          <h3 className="font-bold md:text-[26px] text-[16px] mb-[0.5rem] leading-[1.2]">
            {firstTitle} <br /> {secondTitle}
          </h3>
          <p className="mb-[1rem] md:text-[1rem] text-[14px]">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default WhyUsCard;