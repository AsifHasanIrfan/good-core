import Image from "next/image";
import Link from "next/link";

const AwardSingleCard = ({item}) => {
  return (
    <div className="sm:flex-[0_0_50%] lg:basis-0 lg:grow lg:max-w-full relative w-full px-[15px] mt-[0.5rem]">
      <span className="block p-[30px_10px] text-center rounded-[5px] text-[14px] text-[#212529] bg-gray-100 h-full">
        <Link href="" className="text-[#212529] flex justify-end items-center flex-col flex-1 p-0 h-full">
          <Image src={item.image} height={item.height} width={item.width} alt="img" className="block m-[0_auto_15px_auto] clear-both max-h-[195px]" />
          <span className="text-[#212529] flex justify-end items-end flex-col flex-1 p-0">{item.content}</span>
        </Link>
      </span>
    </div>
  );
};

export default AwardSingleCard;