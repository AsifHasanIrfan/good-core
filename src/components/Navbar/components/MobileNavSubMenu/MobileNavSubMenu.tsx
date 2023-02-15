import Link from "next/link";

interface MobileNavSubMenuProps {
  subLinks: any;
  subMenuOpen: string;
};

const MobileNavSubMenu: React.FC<MobileNavSubMenuProps> = ({ subLinks, subMenuOpen }) => {

  return (
    <ul
      className={`max-h-0 h-auto overflow-hidden transition-all duration-[.5s] ease-in-out bg-[#f1f1f1] p-[0_26px] text-left ${
        subMenuOpen === subLinks.name ? "max-h-full" : null
      }`}
    >
      <li>
        <Link
          href={subLinks.link}
          className="text-[16px] font-bold leading-[55px] w-full text-[#333] block relative"
        >
          {subLinks.name === 'Company' ? 'About Us': subLinks.name}
        </Link>
        <ul className="p-[0_26px] pl-[5px] max-h-full">
          {subLinks.subMenu.map((item: any) => (
            <li key={item.name} className="border-b border-[#ccc]">
              <Link href={item.href} className="leading-[42px] text-[14px]">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </li>
    </ul>
  );
};

export default MobileNavSubMenu;
