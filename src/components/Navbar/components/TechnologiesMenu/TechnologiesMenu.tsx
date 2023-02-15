import MegaMenuItem from '../MegaMenuItem/MegaMenuItem';

interface TechnologiesMenuProps {
  activeMenu: string;
  setActiveMenu: (activeMenu: string) => void;
  subMenu: any;
};

const TechnologiesMenu: React.FC<TechnologiesMenuProps> = ({ activeMenu, setActiveMenu, subMenu }) => {

  return (
    <div
      onMouseOver={() => setActiveMenu("Technologies")}
      onMouseLeave={() => setActiveMenu("")}
      className={`z-[8] absolute bg-white w-[90%] mx-auto left-0 right-0 m-0 border-t border-[rgba(31,146,244,.12)] shadow-[0px_6px_4px_-2px_rgb(31_146_244/12%)] p-[10px_30px] ${
        activeMenu === "Technologies"
          ? "translate-y-[0px] visible"
          : "translate-y-[-9999px] invisible"
      }`}
    >
      <div className="container">
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
    </div>
  );
};

export default TechnologiesMenu;