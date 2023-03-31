import Image from 'next/image';
import Link from 'next/link';

const AwardCard = () => {
  return (
    <div className="block mt-[0.5rem] lg:max-w-full relative px-[15px]">
      <div className="block p-[30px_10px] text-center rounded-[5px] text-[14px] text-[#212529] bg-[#f5f9fc] h-full">
        <Link
          href=""
          className="text-[#212529] flex justify-end items-center flex-col p-0 h-full"
        >
          <Image
            width={133}
            height={133}
            src="/assets/images/FTC-Badge-Circle-Blue-2022.webp"
            alt=""
            className="block m-[0_auto_15px_auto] clear-both max-h-[195px] max-w-full align-middle"
          />
          <span className="text-[#212529] justify-end flex-col flex-1 items-end flex">
            Forbes Technology Council - Official Member (2022)
          </span>
        </Link>
      </div>
    </div>
  );
};

export default AwardCard;