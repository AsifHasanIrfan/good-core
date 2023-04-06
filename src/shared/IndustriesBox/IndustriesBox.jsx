import Image from "next/image";
import Link from "next/link";
import React from "react";

const IndustriesBox = ({ item }) => {
  return (
    <div className="col-md-4 group">
      <Link
        href=""
        className="flex w-full items-center bg-gray-10 group-hover:bg-primary group-hover:shadow-[0_0_15px_#1f92f4] rounded-[15px] p-[30px] h-[108px] mb-[25px] relative transition-all duration-[.5s] ease-in-out"
      >
        <div className="inline-flex items-center">
          <div
            style={{ backgroundImage: `url('${item.image}')` }}
            className={` bg-no-repeat bg-[top_left] w-[50px] h-[48px] group-hover:bg-[0_-58px]`}
          ></div>
        </div>

        <div className="inline-block w-[calc(100%-50px)] p-[12px_0] pl-[15px]">
          <h3 className="text-[20px] mb-0 text-gray-95 group-hover:text-white font-bold  transition-all duration-[.5s] ease-in-out">
            {item?.title} <br /> {item?.subTitle && item?.subTitle}
          </h3>
          <span className="text-[13px] text-white hidden group-hover:block   transition-all duration-[.5s] ease-in-out">
            View our work
          </span>
          <Image
            src="/assets/images/technologies/nodejs/next-white.webp"
            alt="arrow"
            width={28}
            height={20}
            className="absolute right-[16px] top-1/2 -translate-y-1/2 max-w-full h-auto hidden group-hover:block transition-all duration-[.5s] ease-in-out"
          />
        </div>
      </Link>
    </div>
  );
};

export default IndustriesBox;
