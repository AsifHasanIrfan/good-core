
const CustomCard = ({data}) => {
  return (
    <div className="sm:flex-[0_0_25%] sm:max-w-[25%] flex-[0_0_100%] max-w-full relative w-full px-[15px]">
      <div className="text-center transition-all duration-[.5s] ease-in-out p-0">
        <div></div>
        <h4 className="font-semibold text-[#303234] text-[18px] m-[30px_0_20px] leading-[1.2]">{data.title}</h4>
        <p className="flex justify-center items-center tracking-[.5px] text-[#303234] mb-[1rem]">{data.content}</p>
      </div>
    </div>
  );
};

export default CustomCard;