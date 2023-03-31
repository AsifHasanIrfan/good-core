import Link from 'next/link';

const LinkItem = ({ link }) => {
  return (
    <Link
      href={link.href}
      className="text-[#5e6a74] w-full text-[14px] uppercase bg-transparent flex items-center hover:text-[#1f92f4] hover:font-bold mega-menu-item"
    >
      {link.name}
    </Link>
  );
};

export default LinkItem;