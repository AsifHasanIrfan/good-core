import React from 'react';
import MegaMenuItem from './MegaMenuItem';

interface ServicesMenuProps {
  activeMenu: string;
  setActiveMenu: (activeMenu: string) => void;
};

const ServicesMenu: React.FC<ServicesMenuProps> = ({ activeMenu, setActiveMenu }) => {
  return (
    <div
      onMouseEnter={() => setActiveMenu("Services")}
      onMouseLeave={() => setActiveMenu("")}
      className={`z-[8] absolute bg-white w-[90%] mx-auto left-0 right-0 m-0 border-t border-[rgba(31,146,244,.12)] shadow-[0px_6px_4px_-2px_rgb(31_146_244/12%)] p-[10px_30px] ${
        activeMenu === "Services"
          ? "translate-y-[0px] visible"
          : "translate-y-[-484px] invisible"
      }`}
    >
      <div className="container">
        <div className="row">
          <div className="p-[0_5px] md:flex-[0_0_33.3333333333%] md:max-w-[33.3333333333%] relative w-full">
            <div
              className={`${
                activeMenu === "Services"
                  ? "opacity-100 duration-[1s] transition-all"
                  : "opacity-0"
              }`}
            >
              <MegaMenuItem />
            </div>
            <div
              className={`${
                activeMenu === "Services"
                  ? "opacity-100 duration-[1s] transition-all"
                  : "opacity-0"
              }`}
            >
              <MegaMenuItem />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesMenu;