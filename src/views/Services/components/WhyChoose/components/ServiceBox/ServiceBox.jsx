import Image from "next/image";

const ServiceBox = ({data}) => {
  return (
    <div className="col-md-6">
      <div className="rounded-[10px] bg-white text-left m-[15px_auto] shadow-[0px_0px_7px_0px_#c4dcf1] p-[30px_22px] transition-all duration-500 ease-in-out">
        <div className="float-right relative inline-block min-h-[65px]">
          <Image src={data.icon} alt="service-img" />
        </div>
        <h2 className="font-bold text-primary mb-0 leading-[35px] text-left text-[38px]">{data.percent}</h2>
        <h3 className="float-none m-0 max-w-[70%] font-semibold text-[#303234] text-[18px] leading-[1.2]">{data.title}</h3>
      </div>       
    </div>
  );
};

export default ServiceBox;