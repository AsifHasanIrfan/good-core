import Link from 'next/link';
import { BiEnvelope } from "react-icons/bi";
import { FaMobileAlt } from "react-icons/fa";

const TopNav = () => {
  return (
    <div className="z-10 relative bg-[#0b5492] text-right p-[2px_0]">
      <div className="container">
        <div>
          <Link
            className="mr-[25px] text-white text-[11px] uppercase no-underline bg-transparent"
            href="mailto:contact@goodcore.co.uk"
          >
            <BiEnvelope className="inline-block text-[16px]" />
            contact@goodcore.co.uk
          </Link>
          <Link
            className="text-white text-[11px] uppercase no-underline bg-transparent"
            href="mailto:contact@goodcore.co.uk"
          >
            <FaMobileAlt className="inline-block text-xs" />
            020 8781 6903
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopNav;