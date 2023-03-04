
const EngageCard = ({data}) => {
  return (
    <div className="bg-white text-[#111] p-[30px] rounded-[15px] m-[10px] min-w-[300px] shadow-[2px_2px_10px_#eee] basis-0 grow max-w-full relative w-full">
      <h3 className="font-bold mb-[25px] text-[1.75rem] leading-[1.2]">{data.title}</h3>
      <ul className="list-[square] pl-[15px] mb-[1rem]">
        {data.options.map((option, i) => <li key={i + "engage"} className="text-[#666] mb-[10px] marker:text-[#111] marker:text-[20px]">{option}</li>)}
      </ul>
    </div>
  );
};

export default EngageCard;