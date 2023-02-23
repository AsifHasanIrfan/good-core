import Link from "next/link";
import { useState } from "react";

interface MobileNavSubMenuProps {
  subLinks: any;
  subMenuOpen: string;
}

const MobileNavSubMenu: React.FC<MobileNavSubMenuProps> = ({
  subLinks,
  subMenuOpen,
}) => {
  const [innerSubMenuOpen, setInnerSubMenuOpen] = useState("");

  const handleInnerSubMenuOpen = (item: any) => {
    if (innerSubMenuOpen === item.name) {
      setInnerSubMenuOpen("");
    } else {
      setInnerSubMenuOpen(item.name);
    }
  };

  return (
    <ul
      className={`max-h-0 h-auto overflow-hidden mobile-sub-menu bg-[#f1f1f1] p-[0_26px] text-left ${
        subMenuOpen === subLinks.name ? "max-h-[100svh]" : null
      }`}
    >
      <li>
        <Link
          href={subLinks.link}
          className="text-[16px] font-bold leading-[55px] w-full text-[#333] block relative"
        >
          {subLinks.name === "Company" ? "About Us" : subLinks.name}
        </Link>
        <ul className="p-[0_26px] pl-[5px] max-h-full pb-3">
          {subLinks.subMenu.map((item: any) => (
            <li
              onClick={() => handleInnerSubMenuOpen(item)}
              key={item.name}
              className={`border-b border-[#ccc] ${
                innerSubMenuOpen === item.name ? "!border-0" : ""
              }`}
            >
              <Link
                href={item.href}
                className={`leading-[42px] text-[14px] ${
                  item.links.length > 0 ? "relative sub-menu-has-children" : ""
                }`}
              >
                {item.name}
              </Link>

              {/* Mobile inner sub menu */}
              {item.links.length > 0 && (
                <ul
                  className={`h-0 bg-[#eee] mobile-inner-sub-menu  pl-[5px] overflow-hidden ${
                    innerSubMenuOpen === item.name ? "!h-auto" : "h-0"
                  } `}
                >
                  {item.links.map((link: any) => (
                    <li
                      key={link.name}
                      className="pl-[25px] border-b border-[#ccc]"
                    >
                      <Link
                        href=""
                        className="leading-[40px] text-[14px] font-normal block relative"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </li>
    </ul>
  );
};

export default MobileNavSubMenu;
