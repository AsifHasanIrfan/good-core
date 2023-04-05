import Image from 'next/image';
import React from 'react';

const LeftImgProcess = ({ imgSrc, title, content, noTitle }) => {
  return (
    <div className="row items-center mt-12 md:text-left text-center">
      <div className="col-md-4 text-center flex items-center justify-center">
        <Image
          src={imgSrc}
          width={260}
          height={260}
          alt="Agile Development process"
        />
      </div>
      <div className="col-md-8 order-md-2   mt-4">
        {!noTitle && (
          <h3 className="font-bold md:text-[27px] text-[19px] md:py-5 py-[10px] mb-4">
            {title}
          </h3>
        )}
        <p className="md:text-[18px] text-[15px] leading-[30px] mt-4">
          {content}
        </p>
      </div>
    </div>
  );
};

export default LeftImgProcess;
