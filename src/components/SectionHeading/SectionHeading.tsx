import React from 'react';

interface SectionHeadingProps {
  highlightText: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ highlightText }) => {
  return (
    <span className="relative z-[1] after:content-[''] after:absolute after:left-0 md:after:bottom-[10px] after:bottom-[2px] after:bg-[#51ffdd] after:w-full md:after:h-[7px] after:h-[5px] after:rounded-[25px] after:z-[-1]">
      {highlightText}
    </span>
  );
};

export default SectionHeading;