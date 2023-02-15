import Link from 'next/link';
import React from 'react';

interface ServiceProps {
  service: {
    icon: React.ReactNode;
    title: string;
    description: string;
  };
};

const ServiceCard: React.FC<ServiceProps> = ({ service }) => {
  return (
    <div className="col-md-4">
      <div className="border-2 p-[50px_22px] rounded-[15px] border-[#f1f1f1] text-center cursor-pointer transition-all duration-[0.5s] md:hover:bg-[#0b5492] sm:hover:shadow-[0px_0px_20px_0px_#9ed2ff] md:m-0 m-[10px_20px] sm:hover:text-white group service-box">
        <Link href="">
          <div className="relative inline-block min-h-[65px] service-icon">
            {service.icon}
          </div>
          <h3 className="font-semibold text-[#303234] md:text-[18px] text-[16px] md:m-[30px_0_20px] m-[10px_0_10px] leading-[1.2] sm:group-hover:text-white">
            {service.title}
          </h3>
          <p className="tracking-[0.5px] mt-0 mb-[1rem] sm:group-hover:text-white md:text-[1rem] text-[14px]">
            {service.description}
          </p>
          <span className="text-[#78bdf8] uppercase mt-[20px] text-[16px] sm:group-hover:text-white">
            MORE &gt;&gt;
          </span>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;