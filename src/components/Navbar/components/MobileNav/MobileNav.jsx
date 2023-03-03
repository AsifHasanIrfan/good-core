import Link from "next/link";
import { useState } from "react";
import { mainNavLinks, mobileNavLinks } from "../../../../constant";
import MobileNavSubMenu from "../MobileNavSubMenu/MobileNavSubMenu";

const MobileNav = ({ menuOpen }) => {
  const [subMenuOpen, setSubMenuOpen] = useState('');
  
  // sub menu open handler
  const handleSubMenuOpen = (item) => {
    if (item.isSubMenu) {
      if (subMenuOpen === item.title) {
        setSubMenuOpen("");
      } else {
        setSubMenuOpen(item.title);
      }
    }
  };

  return (
    <div className="lg:hidden relative z-[9] container">
      <div>
        <ul
          className={`p-0 max-h-0 h-auto absolute overflow-hidden transition-all duration-[.5s] ease-in-out bg-white left-0 right-0 max-w-full text-center m-0 ${
            menuOpen
              ? "min-h-[100svh] border-b-[1px] border-[#f1f1f1] shadow-[0_20px_20px_-2px_rgb(0_0_0_/_75%)] overflow-y-scroll"
              : null
          }`}
        >
          {mainNavLinks.map((link) => (
            <li key={link.id} className="border-b-2 border-[#eee]">
              <span
                className={`leading-[55px] w-full text-[#333] text-[16px] font-bold block relative cursor-pointer ${
                  link.isSubMenu && "menu-item-has-children"
                } `}
                onClick={() => handleSubMenuOpen(link)}
              >
                {link.title}
              </span>
              {link.isSubMenu ? (
                <MobileNavSubMenu
                  subMenuOpen={subMenuOpen}
                  subLinks={mobileNavLinks[link.title]}
                />
              ) : null}
            </li>
          ))}

          <li className="mx-[15px]">
            <Link
              href=""
              className="leading-[55px] text-[16px] font-medium text-white rounded-[25px] p-[10px_15px] border border-[#1f92f4] bg-[#1f92f4] mt-[12px] text-center w-full block relative"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
      {/* <span className="absolute top-[-60px] block w-[35px] h-[38px] m-[30px_auto_10px] right-[15px]"></span> */}
    </div>
  );
};

export default MobileNav;
