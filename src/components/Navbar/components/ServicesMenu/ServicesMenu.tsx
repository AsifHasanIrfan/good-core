import { servicesSimpleMenu } from "@/constant";
import React from "react";
import LinkItem from "../LinkItem/LinkItem";
import MegaMenuItem from "../MegaMenuItem/MegaMenuItem";

interface ServicesMenuProps {
  activeMenu: string;
  setActiveMenu: (activeMenu: string) => void;
  subMenu: any;
}

const ServicesMenu: React.FC<ServicesMenuProps> = ({
  activeMenu,
  setActiveMenu,
  subMenu,
}) => {
  return (
    <div
      onMouseEnter={() => setActiveMenu("Services")}
      onMouseLeave={() => setActiveMenu("")}
      className={`z-[8] absolute bg-white w-[90%] mx-auto left-0 right-0 m-0 border-t border-[rgba(31,146,244,.12)] shadow-[0px_6px_4px_-2px_rgb(31_146_244/12%)] p-[10px_30px] ${
        activeMenu === "Services"
          ? "translate-y-[0px] visible"
          : "translate-y-[-9999px] invisible"
      }`}
    >
      <div className="container">
        <div className="row">
          {subMenu.subMenu.map((item: any, i: number) => (
            <div key={i} className="col-md-4 !p-[0_5px]">
              <div
                className={`${
                  activeMenu === "Services"
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

          <div className="col-md-4 !p-[23px_28px]">
            <h3 className="text-[16px] font-semibold uppercase mb-[0.5rem leading-[1.2]]">
              Professional Services
            </h3>
            <ul className="mb-[1rem]">
              {servicesSimpleMenu.map((item) => (
                <li key={item.name} className="leading-[45px]">
                  <LinkItem link={item} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesMenu;
