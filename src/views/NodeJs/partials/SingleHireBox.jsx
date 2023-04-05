import Image from "next/image";
import React from "react";

const SingleHireBox = ({ url, heading, body }) => {
  return (
    <div className="col-md-12">
      <div className="border-b-[7px] border-gray-bg mb-[26px]">
        <div className="mb-[26px] inline-block w-full align-top">
          <div className="inline-block">
            <Image src={url} alt="number" width={96} height={96} />
          </div>
          <div className="inline-block w-[calc(100%-119px)] ml-[15px] align-top">
            <h3 className="md:text-[26px] text-[16px] font-bold mb-[1.5rem]">
              {heading}
            </h3>
            <p className="mb-[1rem] md:text-[16px] text-[14px]">{body}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleHireBox;
