import Link from "next/link";

const ServicesContactInfo = () => {
  return (
    <div
      style={{
        backgroundImage: "linear-gradient(180deg, #ff9653 0%, #f13c31 100%)",
      }}
      className="w-full min-h-[120px] overflow-hidden flex justify-between relative flex-wrap flex-col p-[20px_30px] text-white before:bg-[url('/assets/images/discovery-workshop-menu-bg.webp')] before:bg-no-repeat before:bg-center before:bg-cover before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:z-0 before:opacity-[0.1]"
    >
      <div className="flex items-center justify-between z-[9] ">
        <div className="w-[75%]">
          <h3 className="text-[20px] tracking-[-0.5px] leading-[26px] font-extrabold text-white">
            Discovery Workshop
          </h3>
          <p className="text-[14px] tracking-[0] leading-[20px] font-normal p-[6px_0_0_0]">
            Define functional scope of your project to plan project budget and
            timeline.
          </p>
        </div>
        <Link
          href=""
          className="overflow-hidden bg-white border-[2px] border-white rounded-[80px] text-[14px] text-[#f13c31] tracking-[0] text-center font-semibold min-w-[110px] inline-block h-[32px] leading-[28px] m-[16px_0_0] z-10 relative"
        >
          View More
        </Link>
      </div>
    </div>
  );
};

export default ServicesContactInfo;
