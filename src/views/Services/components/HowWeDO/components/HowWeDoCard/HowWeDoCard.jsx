import parse from 'html-react-parser';

const HowWeDoCard = ({iconCss, title, children}) => {
  return (
    <div className="col-md-4">
      <div className="relative bg-white mb-[25px] p-[50px_30px] min-h-[200px] text-center transition-all duration-[.5s] ease-in-out group">
        <div className="relative inline-block min-h-[65px]">
          <div
            className={`${iconCss} w-[59px] h-[59px] inline-block m-auto bg-no-repeat bg-[url('/assets/images/services-icons.webp')]`}
          ></div>
        </div>
        <h4 className="font-semibold text-[#303234] text-[18px] m-[30px_0_20px] leading-[1.2]">
          {parse(title)}
        </h4>
        <p className="flex justify-center items-center absolute opacity-0 top-0 left-0 leading-[26px] bottom-0 text-white m-0 p-[30px_25px] transition-all duration-[0.5s] ease-in-out bg-[#0b5492] z-[9] tracking-[.5px] group-hover:opacity-[.99] group-hover:shadow-[0px_0px_20px_0px_#9ed2ff]">
          <span>{children}</span>
        </p>
      </div>
    </div>
  );
};

export default HowWeDoCard;