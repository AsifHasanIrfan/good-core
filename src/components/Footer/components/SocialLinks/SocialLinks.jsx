import Image from "next/image";
import Link from "next/link";
import { socialLinks } from "../../../../constant";

const SocialLinks = () => {
  return (
    <ul className="m-[20px_0] inline-block p-0">
      {socialLinks.map((link) => (
        <li key={link.name} className="inline-block">
          <Link href="" className="mr-[14px] flex">
            <i
              className={`${link.iconClass} rounded-[50%] bg-[#1b2939] w-[45px] h-[45px] leading-[45px] text-white text-[24px] text-center hover:bg-transparent hover:shadow-[0_0_15px_#1f92f4] hover:transition-all hover:duration-[.5s]`}
            >
              {link.iconImg ? (
                <Image
                  width={20}
                  height={18}
                  src={link.iconImg}
                  alt={link.name}
                  className="!inline-block align-middle"
                />
              ) : null}
            </i>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SocialLinks;
