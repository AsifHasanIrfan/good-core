import Link from 'next/link';
import { BiEnvelope } from "react-icons/bi";
import { FaMobileAlt } from "react-icons/fa";

const TopNav = () => {
  return (
    <div className="z-10 md:block hidden relative bg-[#0b5492] text-right p-[2px_0]">
      <div className="container">
        <div>
          <Link
            className="mr-[29px] text-white text-[11px] uppercase hover:underline bg-transparent"
            href="mailto:contact@goodcore.co.uk"
          >
            <i className="fa fa-envelope-o text-[12px] inline-block leading-[1]"></i>{" "}
            contact@goodcore.co.uk
          </Link>
          <Link
            className="text-white text-[11px] uppercase hover:underline bg-transparent"
            href="mailto:contact@goodcore.co.uk"
          >
            <i className="fa fa-mobile text-[14px] inline-block leading-[1]"></i>{" "}
            020 8781 6903
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopNav;