import { mainNavLinks, navLinks } from "@/constant";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import CompanyMenu from "./components/CompanyMenu/CompanyMenu";
import IndustriesMenu from "./components/IndustriesMenu/IndustriesMenu";
import MobileNav from "./components/MobileNav/MobileNav";
import ServicesMenu from "./components/ServicesMenu/ServicesMenu";
import TechnologiesMenu from "./components/TechnologiesMenu/TechnologiesMenu";
import TopNav from "./components/TopNav/TopNav";
import { Fade as Hamburger } from "hamburger-react";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState("");
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <header className="md:min-h-[93px] min-h-[60px] w-full">
      <div className="shadow-[0_6px_4px_-2px_rgb(31_146_244/12%)] relative">
        <TopNav />

        {/* Main navigation container */}
        <div className="container xlg:p-0 p-[0_15px]">
          <div className="row lg:mx-[-15px] mx-0">
            <nav className="w-full z-[9] bg-white p-0 lg:flex-row lg:flex-nowrap lg:justify-start relative flex flex-wrap items-center justify-between">
              <div className="text-[rgba(0,0,0,0.9)] inline-block py-[0.3125rem] mr-[1rem] text-[1.25rem] leading-[inherit] whitespace-nowrap">
                <Link href="/">
                  <Image
                    width={240}
                    height={36}
                    src="/assets/images/logo.webp"
                    alt="logo"
                    style={{ maxWidth: "240px", height: "36px" }}
                  />
                </Link>
              </div>

              <div className="lg:!flex lg:basis-[auto] !justify-end grow items-center hidden">
                <ul
                  id="main-menu"
                  className="lg:flex-row flex flex-col pl-0 mb-0 list-none"
                >
                  {mainNavLinks.map((link) => (
                    <li
                      key={link.id}
                      onMouseEnter={() => {
                        if (link.isSubMenu) {
                          setActiveMenu(link.title);
                        }
                      }}
                      onMouseLeave={() => setActiveMenu("")}
                      className="group"
                    >
                      <Link
                        title={link.title}
                        href={link.link}
                        className="!p-[21px_12px] text-[14px] text-[#303234] uppercase border-b-2 border-transparent block group-hover:bg-[#f4f4ff] group-hover:text-[#1f92f4] group-hover:border-b-2 group-hover:border-[#1f92f4]"
                      >
                        {link.title}{" "}
                        {link.isSubMenu ? (
                          <i className="fa fa-caret-down text-[12px] inline-block"></i>
                        ) : null}
                      </Link>
                    </li>
                  ))}

                  <li>
                    <Link
                      href="/"
                      title="Get in Touch"
                      className="text-[12px] font-normal text-white rounded-[25px] p-[10px_15px] border border-[#1f92f4] bg-[#1f92f4] mt-[12px] uppercase block hover:opacity-[0.7] hover:bg-white hover:!text-[#1f92f4] hover:!border-b-2 hove!r:border-[#1f92f4]"
                    >
                      Get in Touch
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="my-[4px] lg:hidden">
                <Hamburger
                  toggled={mobileNavOpen}
                  toggle={setMobileNavOpen}
                  color="#185286"
                />
              </div>
            </nav>
          </div>
        </div>

        {/* Mobile navigation */}
        {mobileNavOpen && <MobileNav menuOpen={mobileNavOpen} />}

        <ServicesMenu
          activeMenu={activeMenu}
          setActiveMenu={setActiveMenu}
          subMenu={navLinks["services"]}
        />
        <TechnologiesMenu
          activeMenu={activeMenu}
          setActiveMenu={setActiveMenu}
          subMenu={navLinks["technologies"]}
        />
        <CompanyMenu
          activeMenu={activeMenu}
          setActiveMenu={setActiveMenu}
          subMenu={navLinks["company"]}
        />
        <IndustriesMenu
          activeMenu={activeMenu}
          setActiveMenu={setActiveMenu}
          subMenu={navLinks["industries"]}
        />
      </div>
    </header>
  );
};

export default Navbar;
