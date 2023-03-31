
const AgilePrinciplesCard = ({ children, iconCss }) => {
  return (
    <div className="w-[18%] bg-white m-[10px_auto] shadow-[0px_0px_7px_0px_#c4dcf1] p-[20px_15px] text-center transition-all duration-[.5s] ease-in-out">
      <div className="relative inline-block min-h-[50px] mb-[1.5rem]">
        <div
          className={`h-[41px] bg-[url('/assets/images/company/agile-principles.webp')] ${iconCss}`}
        ></div>
      </div>
      <p className="text-[14px] tracking-[0.5px] text-[#303234]">{children}</p>
    </div>
  );
};

export default AgilePrinciplesCard;