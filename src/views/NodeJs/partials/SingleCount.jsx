import Image from "next/image";
import React from "react";

const SingleCount = ({ url, width, height, heading, body }) => {
  return (
    <div className="col-md-3 px-[1rem] md:border-r-[2px] border-b-[2px] md:border-b-0 border-gray-25">
      <div className="inline-flex items-center w-full !p-[10px_0]">
        <div className="inline-block">
          <Image src={url} alt="counter" width={width} height={height} />
        </div>

        <div className="inline-block w-[calc(100%-20px)] p-[12px_0] pl-[20px]">
          <h3 className="text-[30px] font-bold text-gray-90 mb-0 whitespace-normal break-words">
            {heading}
            {heading === "5" && (
              <div className="inline-flex align-super">
                <Image
                  src="/assets/images/technologies/clutch-star.webp"
                  alt="star"
                  width={12}
                  height={12}
                />
                <Image
                  src="/assets/images/technologies/clutch-star.webp"
                  alt="star"
                  width={12}
                  height={12}
                />
                <Image
                  src="/assets/images/technologies/clutch-star.webp"
                  alt="star"
                  width={12}
                  height={12}
                />
                <Image
                  src="/assets/images/technologies/clutch-star.webp"
                  alt="star"
                  width={12}
                  height={12}
                />
                <Image
                  src="/assets/images/technologies/clutch-star.webp"
                  alt="star"
                  width={12}
                  height={12}
                />
              </div>
            )}
          </h3>
          <p className="text-[16px] font-medium text-gray-95 leading-[1.1] whitespace-normal">
            {body}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleCount;
