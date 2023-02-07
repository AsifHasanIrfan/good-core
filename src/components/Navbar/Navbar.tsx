import { mainNavLinks } from "@/constant";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import ServicesMenu from "./ServicesMenu";
import TopNav from "./TopNav";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState('');

  return (
    <header className="min-h-[93px] w-full">
      <div className="shadow-[0_6px_4px_-2px_rgb(31_146_244/12%)] relative">
        <TopNav />

        {/* Main navigation container */}
        <div className="container p-0">
          <div className="row">
            <nav className="w-full z-[9] bg-white p-0 lg:flex-row lg:flex-nowrap lg:justify-start relative flex flex-wrap items-center justify-between">
              <div className="text-[rgba(0,0,0,0.9)] inline-block py-[0.3125rem] mr-[1rem] text-[1.25rem] leading-[inherit] whitespace-nowrap">
                <Link href="/">
                  <Image
                    width={240}
                    height={40}
                    src="/assets/images/logo.webp"
                    alt="logo"
                    style={{ maxWidth: "240px", height: "36px" }}
                  />
                </Link>
              </div>

              <div className="lg:!flex lg:basis-[auto] !justify-end grow items-center">
                <ul
                  id="main-menu"
                  className="lg:flex-row flex flex-col pl-0 mb-0 list-none"
                >
                  {mainNavLinks.map((link) => (
                    <li
                      key={link.id}
                      onMouseEnter={() => {
                        if(link.isSubMenu) {
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
                        {link.title}
                        {link.isSubMenu ? <AiFillCaretDown className="text-[10px] inline-block" /> : null}
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
            </nav>
          </div>
        </div>

        <ServicesMenu activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      </div>
    </header>
  );
};

export default Navbar;
