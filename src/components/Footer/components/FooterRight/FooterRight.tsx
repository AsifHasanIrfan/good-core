import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const FooterRight = () => {
  return (
    <div className="col-md-5 md:ml-[33.3333333333%]">
      <div>
        <h3 className="text-[18px] uppercase xlg:mb-[30px] mb-[10px] xlg:p-0 p-[10px_0] font-normal leading-[1.2]">
          Contact Us
        </h3>
        <div className="mb-[5px]">
          <Link
            href="mailto:contact@goodcore.co.uk"
            className="mb-[10px] inline-block xlg:text-[26px] text-[20px] text-white w-full"
          >
            <Image
              width={20}
              height={17}
              src="/assets/images/ico-email.webp"
              alt=""
              className="align-middle inline-block"
            />{" "}
            contact@goodcore.co.uk
          </Link>
          <Link
            href="tel:contact@goodcore.co.uk"
            className="mb-[10px] inline-block xlg:text-[26px] text-[20px] text-white w-full"
          >
            <Image
              width={20}
              height={20}
              src="/assets/images/ico-mobile.webp"
              alt=""
              className="align-middle inline-block"
            />{" "}
            020 8781 6903
          </Link>
        </div>
        <div className="text-[#97aabf] text-[13px] leading-[25px] tracking-[1px] xlg:p-0 p-[10px_0]">
          GoodCore Software Ltd.
          <br />
          Airport House, Purley Way, Croydon CR0 0XZ
          <br />
          Registered in England and Wales
          <br />
          Company No. 11461678, VAT Reg. No. 303 2679 24
          <br />
          <br />
          Based out of the UK. Providing software development services and
          support to clients all over the world.
          <br />
          <br />
        </div>
        <Link href="" className="block w-max">
          <Image
            width={121}
            height={24}
            src="/assets/images/dmca_protected_sml_120m.webp"
            alt="dmca_protected"
            className="align-middle"
          />
        </Link>
        <br />
        {/* <br /> */}
      </div>
    </div>
  );
};

export default FooterRight;