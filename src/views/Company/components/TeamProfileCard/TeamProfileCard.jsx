import Image from "next/image";
import Link from "next/link";
import hassanBasharat from "../../../../assets/images/company/hassan.webp";

const TeamProfileCard = () => {
  return (
    <div className="m-[0_15px] p-0 relative overflow-hidden group">
      <Image width={334} height={348} src={hassanBasharat} alt="team-img" />
      <Link href="#" className="p-[23px_15px] bg-white inline-block w-full">
        <span className="block clear-both text-[#212529] mb-[15px]">
          Hassan Basharat
        </span>
        <span className="block clear-both text-[#83878b] text-[13px]">
          Founder & CEO
        </span>
      </Link>

      <div className="flex justify-center flex-col items-center absolute top-[100%] bg-white p-[15px_30px] text-[18px] text-center leading-[30px] core-team-hover-item group-hover:inset-0 group-hover:bg-[rgba(255,_255,_255,_.8)]">
        <span className="text-[22px] text-[#222] text-center font-bold mb-[10px] before:content-[''] before:block before:w-[50px] before:border-[2.5px] before:border-[#1476f2] before:duration-500 before:m-auto before:mb-[10px]">Hassan Basharat</span>
        <span className="text-[18px] text-center font-bold text-[#666] mb-[10px]">Founder & CEO</span>
         Hassan enjoys working with clients, analysing their requirements and figuring out solutions. In his spare time, he tends to binge-watch The Graham Norton Show. 
      </div>
    </div>
  );
};

export default TeamProfileCard;
