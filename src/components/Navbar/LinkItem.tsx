import Link from 'next/link';
import React from 'react';
import { BsArrowRight } from 'react-icons/bs';

const LinkItem = () => {
  return (
    <Link
      href="#"
      className="text-[#5e6a74] w-full text-[14px] uppercase bg-transparent flex items-center hover:text-[#1f92f4] hover:font-bold"
    >
      <BsArrowRight className="text-[13px] mr-[12px]" />
      B2B Portal Development
    </Link>
  );
};

export default LinkItem;