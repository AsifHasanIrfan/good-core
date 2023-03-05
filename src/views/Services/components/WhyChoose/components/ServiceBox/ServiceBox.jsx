import Image from "next/image";

const ServiceBox = ({data}) => {
  return (
    <div className="col-md-6">
      <div className="rounded-[10px] bg-white text-left md:m-[15px_auto] m-[10px_20px] shadow-[0px_0px_7px_0px_#c4dcf1] md:p-[30px_22px] p-[20px_10px] transition-all duration-500 ease-in-out">
        <div className="float-right relative inline-block min-h-[65px]">
          <Image src={data.icon} alt="service-img" />
        </div>
        <h2 className="font-bold text-primary mb-0 leading-[35px] text-left md:text-[38px] text-[28px]">{data.percent}</h2>
        <h3 className="float-none m-0 max-w-[70%] font-semibold text-[#303234] md:text-[18px] text-[16px] leading-[1.2]">{data.title}</h3>
      </div>       
    </div>
  );
};

export default ServiceBox;