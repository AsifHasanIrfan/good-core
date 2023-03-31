import Image from 'next/image';
import React from 'react';

const RightImgProcess = ({ imgSrc, title, content, noTitle }) => {
  return (
    <div className="row items-center mt-12 md:text-left text-center">
      <div class="col-md-8  mt-4 ">
        {!noTitle && (
          <h3 class="font-bold md:text-[27px] text-[19px] md:py-5 py-[10px] mb-4">
            {title}
          </h3>
        )}
        <p class="md:text-[18px] text-[15px] leading-[30px] mt-4">{content}</p>
      </div>
      <div className="col-md-4 text-center flex items-center justify-center md:order-1 -order-1">
        <Image
          src={imgSrc}
          width={260}
          height={260}
          alt="Agile Development process"
        />
      </div>
    </div>
  );
};

export default RightImgProcess;
