import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const TestimonialCard = () => {
  return (
    <div className="w-full min-h-[410px] rounded-[25px] p-[100px_30px_40px] bg-white relative before:content-[''] before:w-[33px] before:h-[29px] before:absolute before:top-[30px] before:left-[25px] before:bg-[url('/assets/images/quotes.webp')] before:inline-block">
      <p className="mb-[1rem]">
        GoodCore developed an order management application (web & mobile app)
        that streamlined several processes in our manufacturing operations.
      </p>
      <div className="m-[35px_0_10px_0]">
        <Image
          width={80}
          height={80}
          src="/assets/images/Perveztufail.webp"
          alt=""
          className="inline-block"
        />
        <div className="inline-block align-middle p-[0_0_0_15px] max-w-[calc(100%-100px)]">
          <h4 className="text-[16px] font-semibold leading-[1.2]">
            {" "}
            Pervez Tufail{" "}
          </h4>
          <h4 className="text-[#ccc] text-[14px] font-medium leading-[1.2]">
            Chief Operating Officer, Tufail Chemical Industries
          </h4>
          <Image
            width={30}
            height={30}
            src="/assets/images/pakistan.webp"
            alt=""
            className="inline-block"
          />
        </div>
      </div>
      <Link
        href=""
        className="absolute top-[35px] right-[25px] block w-full text-right"
      >
        <Image
          width={60}
          height={17}
          src="/assets/images/clutch.svg"
          alt=""
          className="inline-block opacity-[0.4] hover:opacity-100"
        />
      </Link>
    </div>
  );
};

export default TestimonialCard;