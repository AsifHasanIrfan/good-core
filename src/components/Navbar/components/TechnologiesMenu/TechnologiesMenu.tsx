import Image from "next/image";
import Link from "next/link";
import MegaMenuItem from "../MegaMenuItem/MegaMenuItem";

interface TechnologiesMenuProps {
  activeMenu: string;
  setActiveMenu: (activeMenu: string) => void;
  subMenu: any;
}

const TechnologiesMenu: React.FC<TechnologiesMenuProps> = ({
  activeMenu,
  setActiveMenu,
  subMenu,
}) => {
  return (
    <div
      onMouseOver={() => setActiveMenu("Technologies")}
      onMouseLeave={() => setActiveMenu("")}
      className={`z-[8] absolute bg-white w-max mx-auto left-0 right-0 m-0 border-t border-[rgba(31,146,244,.12)] shadow-[0px_6px_4px_-2px_rgb(31_146_244/12%)] flex ${
        activeMenu === "Technologies"
          ? "translate-y-[0px] visible"
          : "translate-y-[-9999px] invisible"
      }`}
    >
      <div className="container p-[10px_30px]">
        <div className="row">
          {subMenu.subMenu.map((item: any, i: number) => (
            <div key={i} className="col-md-3 !px-[0.5rem]">
              <div
              className={`${
                activeMenu === "Technologies"
                  ? "opacity-100 duration-[1s] transition-all"
                  : "opacity-0"
              }`}
              >
                {item.map((item: any) => (
                  <MegaMenuItem key={item.name} data={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          backgroundImage: "linear-gradient(180deg,#ff9653 0%,#f13c31 100%)",
        }}
        className="min-h-[400px] w-[220px] flex justify-between relative flex-wrap flex-col p-[20px] -order-1 before:bg-[url('/assets/images/comapny-bg-menu.webp')] before:bg-no-repeat before:bg-center before:bg-cover before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:z-0 before:opacity-[0.1]"
      >
        <ul className="relative">
          <li className="text-center">
            <Image
              height={54}
              width={174}
              src="/assets/images/team-people-pic-v1.webp"
              alt="team-people"
            />
          </li>
        </ul>

        <div>
          <div>
            <h3 className="text-[20px] tracking-[-0.5px] leading-[26px] font-extrabold text-white">
              Hire Team
            </h3>
            <p className="text-[14px] tracking-[0] leading-[20px] font-normal p-[6px_0_0_0] text-white">
              Create your own agile squad with experienced members just like
              your local team.
            </p>
          </div>
          <Link
            title="Know more"
            href=""
            className="overflow-hidden bg-white border-[2px] border-white rounded-[80px] text-[14px] text-[#f13c31] tracking-[0] text-center font-semibold min-w-[110px] inline-block h-[32px] leading-[28px] m-[16px_0_0] z-10 relative"
          >
            Know more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TechnologiesMenu;
