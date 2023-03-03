
const ApproachCard = ({ approach }) => {
  return (
    <div className="col-md-6 xl:flex-[0_0_33.3333333333%] xl:max-w-[33.3333333333%]">
      <div className="pb-0 bg-transparent text-left md:m-[10px_auto] m-[10px_20px] md:p-[30px_22px] p-[20px_10px] transition-all ease-in-out duration-[0.5s]">
        <div className="p-[12px_0] float-left min-h-[75px] relative inline-block">
          {approach.icon}
        </div>
        <h3 className="w-[calc(100%_-_100px)] !ml-[24px] !mt-0 float-left text-left md:text-[28px] text-[19px] font-bold p-[12px_0] text-[#303234] md:m-[30px_0_20px] m-[10px_0_10px] leading-[1.2]">
          {approach.title}
        </h3>
        <p className="md:text-[18px] text-[16px] clear-left tracking-[.5px] text-[#303234] mb-[1rem]">
          {approach.description}
        </p>
      </div>
    </div>
  );
};

export default ApproachCard;