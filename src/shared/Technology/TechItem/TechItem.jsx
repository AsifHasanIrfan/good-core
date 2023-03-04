import Link from "next/link";

const TechItem = ({data}) => {
  return (
    <li className="inline-block m-[10px_5px] border-[2px] border-[#51ffdd] rounded-[10px] p-[12px_20px] font-semibold">
      {data.isLink ? <Link href={data.link} className="text-[#007bff] bg-transparent">{data.title}</Link> : `${data.title}`}
    </li>
  );
};

export default TechItem;