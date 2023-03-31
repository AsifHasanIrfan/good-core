
const SliderNextButton = ({ onClick, className }) => {
  
  return (
    <span onClick={onClick} className={`xlg:inline-block hidden cursor-pointer leading-[0] absolute left-[-25px] top-[50%] w-[20px] h-[20px] p-0 text-transparent bg-transparent translate-y-[-50%] before:content-[''] before:h-[30px] before:w-[30px] before:absolute before:left-[-14px] before:top-0 before:border-b-[2px] before:border-l-[2px] before:border-black rotate-[45deg] prevBtn ${className.includes('slick-disabled') ? '!hidden' : ''}`}></span>
  );
};

export default SliderNextButton;