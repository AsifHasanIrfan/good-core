import Image from "next/image";
import Link from "next/link";

const TechList = ({item}) => {
  return (
    <li className="inline-block p-[10px_14px]">
      {item.isLink ? <Link href={item.link} className="group">
        <div>
          <Image
            src={item.icon}
            alt="tech-list-img"
            className="grayscale group-hover:grayscale-0"
          />
        </div>
        <span className="text-[#999] font-semibold pt-[20px] block group-hover:text-primary">
          {item.title}
        </span>
      </Link> : <><div>
          <Image
            src={item.icon}
            alt="tech-list-img"
            className="grayscale"
          />
        </div>
        <span className="text-[#999] font-semibold pt-[20px] block">
          {item.title}
        </span></>}
      
    </li>
  );
};

export default TechList;