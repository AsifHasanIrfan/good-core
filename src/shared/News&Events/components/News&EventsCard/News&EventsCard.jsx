import Image from 'next/image';

const NewsEventsCard = () => {
  return (
    <div className="block cursor-pointer">
      {/* <Link href=""> */}
        <Image width={327} height={187} className="rounded-[10px] w-full block max-w-full h-auto align-middle" src="/assets/images/tech-week.png" alt="" />
        <h3 className="text-[16px] text-[#212529] m-[25px_0_15px_0] font-medium leading-[1.2]">
          GoodCore Software Is Now Part Of Forbes Technology Council
        </h3>
        <span className="text-[13px] text-[#212529] mb-[10px] inline-block">28TH APRIL 2022</span>
      {/* </Link> */}
    </div>
  );
};

export default NewsEventsCard;