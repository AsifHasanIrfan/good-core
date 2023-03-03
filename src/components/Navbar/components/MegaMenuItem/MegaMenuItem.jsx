import Link from "next/link";
import LinkItem from "../LinkItem/LinkItem";

const MegaMenuItem = ({ data }) => {
  return (
    <div className="bg-[#f7fafd] w-full block rounded-[10px] p-[10px_30px] mb-[10px] transition-all duration-[1s] cursor-pointer">
      <Link
        href={data.href}
        className="text-[16px] font-semibold mb-[10px] block relative text-[#000] w-full uppercase before:content-[''] before:h-[30px] before:w-[4px] before:absolute before:top-[-4px] before:left-[-30px] before:bg-[#1f92f4] before:rounded-[15px] hover:text-[#1f92f4]"
      >
        {data.name}
      </Link>
      <p className="text-[13px] text-[#84929d] mb-[5px]">{data.desc}</p>
      {data.links.map((link) => (
        <LinkItem key={link.name} link={link} />
      ))}
    </div>
  );
};

export default MegaMenuItem;
