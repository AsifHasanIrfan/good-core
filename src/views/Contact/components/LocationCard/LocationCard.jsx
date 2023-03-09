import Image from "next/image";
import parse from 'html-react-parser';

const LocationCard = ({location}) => {
  return (
    <div className="relative w-full px-[15px] mb-[20px] md:mb-0 lg:flex-[0_0_25%] lg:max-w-[25%] md:flex-[0_0_33.3333333333%] md:max-w-[33.3333333333%]">
      <Image src={location.image} alt="location-img" className="mx-auto" />
      <div className="lg:text-left text-center mt-[1rem]">
        <span className="block font-semibold text-[16px] text-[#212529] mb-[15px]">{location.name}</span>
        <br className="lg:hidden md:block hidden" />
        <span className="block text-[#6a6a7a] text-[13px]">{parse(location.designation)}</span>
        <hr className="border-b-[3px] border-[#dbdde7] mb-auto mt-[1rem] border-t-[1px_solid_rgba(0,0,0,.1)]" />
      </div>
    </div>
  );
};

export default LocationCard;