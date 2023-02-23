import MegaMenuItem from "../MegaMenuItem/MegaMenuItem";

interface IndustriesMenuProps {
  activeMenu: string;
  setActiveMenu: (activeMenu: string) => void;
  subMenu: any;
}

const IndustriesMenu: React.FC<IndustriesMenuProps> = ({ activeMenu, setActiveMenu, subMenu }) => {
  return (
    <div
      onMouseOver={() => setActiveMenu("Industries")}
      onMouseLeave={() => setActiveMenu("")}
      className={`z-[8] absolute bg-white w-max mx-auto left-0 right-0 m-0 border-t border-[rgba(31,146,244,.12)] shadow-[0px_6px_4px_-2px_rgb(31_146_244/12%)] p-[10px_30px] ${
        activeMenu === "Industries"
          ? "translate-y-[0px] visible"
          : "translate-y-[-9999px] invisible"
      }`}
    >
      <div className="container">
        <div className="row">
          {subMenu.subMenu.map((item: any, i: number) => (
            <div key={i} className="col-md-4 !px-[0.5rem]">
              <div
                className={`${
                  activeMenu === "Industries"
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
    </div>
  );
};

export default IndustriesMenu;
