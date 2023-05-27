import Link from "next/link";
import { useState } from "react";

const Dropdown = ({ openDropdown, setOpenDropdown, name }) => {
  
  return (
    <>
      <div
        onClick={() => setOpenDropdown(!openDropdown)}
        className={`rounded-[17px] text-[#333] p-[6px_12px] cursor-pointer inline-block transition-all duration-[.5s] font-semibold text-[14px] h-[37px] align-middle w-[200px] border-[2px] mr-[4px] ${
          openDropdown ? "border-[#569bf5]" : "border-[#ccc]"
        }`}
      >
        <span>{name}</span>
        <i
          className={`fa fa-caret-down ml-[13px] text-[14px] float-right mt-[5px] ${
            openDropdown && "rotate-180 text-[#569bf5]"
          }`}
        ></i>
      </div>
      <div
        className={`bg-white absolute rounded-[15px] shadow-[0_1px_10px_1px_rgba(0,_0,_0,_.08)] p-[10px] z-[2] max-w-[500px] max-h-[250px] overflow-y-auto dropdown-menu-wrapper ${
          openDropdown ? "block" : "hidden"
        }`}
      >
        <ul>
          <li className="inline-block relative w-[50%] text-left align-middle">
            <Link
              href="#"
              className="block text-[#888] p-[8px_10px] text-[14px] font-semibold pl-[25px] border-b-[2px] border-transparent before:content-['➔'] before:absolute before:left-[6px] before:top-[10px]"
            >
              Biotechnology
            </Link>
          </li>
          <li className="inline-block relative w-[50%] text-left align-middle">
            <Link
              href="/"
              className="block text-[#888] p-[8px_10px] text-[14px] font-semibold pl-[25px] border-b-[2px] border-transparent before:content-['➔'] before:absolute before:left-[6px] before:top-[10px]"
            >
              Biotechnology
            </Link>
          </li>
          <li className="inline-block relative w-[50%] text-left align-middle">
            <Link
              href="/"
              className="block text-[#888] p-[8px_10px] text-[14px] font-semibold pl-[25px] border-b-[2px] border-transparent before:content-['➔'] before:absolute before:left-[6px] before:top-[10px]"
            >
              Biotechnology
            </Link>
          </li>
          <li className="inline-block relative w-[50%] text-left align-middle">
            <Link
              href="/"
              className="block text-[#888] p-[8px_10px] text-[14px] font-semibold pl-[25px] border-b-[2px] border-transparent before:content-['➔'] before:absolute before:left-[6px] before:top-[10px]"
            >
              Biotechnology
            </Link>
          </li>
          <li className="inline-block relative w-[50%] text-left align-middle">
            <Link
              href="/"
              className="block text-[#888] p-[8px_10px] text-[14px] font-semibold pl-[25px] border-b-[2px] border-transparent before:content-['➔'] before:absolute before:left-[6px] before:top-[10px]"
            >
              Biotechnology
            </Link>
          </li>
          <li className="inline-block relative w-[50%] text-left align-middle">
            <Link
              href="/"
              className="block text-[#888] p-[8px_10px] text-[14px] font-semibold pl-[25px] border-b-[2px] border-transparent before:content-['➔'] before:absolute before:left-[6px] before:top-[10px]"
            >
              Biotechnology
            </Link>
          </li>
          <li className="inline-block relative w-[50%] text-left align-middle">
            <Link
              href="/"
              className="block text-[#888] p-[8px_10px] text-[14px] font-semibold pl-[25px] border-b-[2px] border-transparent before:content-['➔'] before:absolute before:left-[6px] before:top-[10px]"
            >
              Biotechnology
            </Link>
          </li>
          <li className="inline-block relative w-[50%] text-left align-middle">
            <Link
              href="/"
              className="block text-[#888] p-[8px_10px] text-[14px] font-semibold pl-[25px] border-b-[2px] border-transparent before:content-['➔'] before:absolute before:left-[6px] before:top-[10px]"
            >
              Biotechnology
            </Link>
          </li>
          <li className="inline-block relative w-[50%] text-left align-middle">
            <Link
              href="/"
              className="block text-[#888] p-[8px_10px] text-[14px] font-semibold pl-[25px] border-b-[2px] border-transparent before:content-['➔'] before:absolute before:left-[6px] before:top-[10px]"
            >
              Biotechnology
            </Link>
          </li>
          <li className="inline-block relative w-[50%] text-left align-middle">
            <Link
              href="/"
              className="block text-[#888] p-[8px_10px] text-[14px] font-semibold pl-[25px] border-b-[2px] border-transparent before:content-['➔'] before:absolute before:left-[6px] before:top-[10px]"
            >
              Biotechnology
            </Link>
          </li>
          <li className="inline-block relative w-[50%] text-left align-middle">
            <Link
              href="/"
              className="block text-[#888] p-[8px_10px] text-[14px] font-semibold pl-[25px] border-b-[2px] border-transparent before:content-['➔'] before:absolute before:left-[6px] before:top-[10px]"
            >
              Biotechnology
            </Link>
          </li>
          <li className="inline-block relative w-[50%] text-left align-middle">
            <Link
              href="/"
              className="block text-[#888] p-[8px_10px] text-[14px] font-semibold pl-[25px] border-b-[2px] border-transparent before:content-['➔'] before:absolute before:left-[6px] before:top-[10px]"
            >
              Biotechnology
            </Link>
          </li>
          <li className="inline-block relative w-[50%] text-left align-middle">
            <Link
              href="/"
              className="block text-[#888] p-[8px_10px] text-[14px] font-semibold pl-[25px] border-b-[2px] border-transparent before:content-['➔'] before:absolute before:left-[6px] before:top-[10px]"
            >
              Biotechnology
            </Link>
          </li>
          <li className="inline-block relative w-[50%] text-left align-middle">
            <Link
              href="/"
              className="block text-[#888] p-[8px_10px] text-[14px] font-semibold pl-[25px] border-b-[2px] border-transparent before:content-['➔'] before:absolute before:left-[6px] before:top-[10px]"
            >
              Biotechnology
            </Link>
          </li>
          <li className="inline-block relative w-[50%] text-left align-middle">
            <Link
              href="/"
              className="block text-[#888] p-[8px_10px] text-[14px] font-semibold pl-[25px] border-b-[2px] border-transparent before:content-['➔'] before:absolute before:left-[6px] before:top-[10px]"
            >
              Biotechnology
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Dropdown;
