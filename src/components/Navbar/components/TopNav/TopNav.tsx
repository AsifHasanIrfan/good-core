import Link from 'next/link';

const TopNav = () => {
  const langs = ["English", "Español", "Deutsch", "Français"];
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
            className="mr-[29px] text-white text-[11px] uppercase hover:underline bg-transparent"
            href="mailto:contact@goodcore.co.uk"
          >
            <i className="fa fa-mobile text-[14px] inline-block leading-[1]"></i>{" "}
            020 8781 6903
          </Link>
          <div className="inline-block relative group">
            <span className="bg-[url('/assets/images/world.webp')] bg-[0_50%] bg-no-repeat bg-[length:16.25px_16.25px] text-white cursor-pointer text-[14px] font-normal leading-[1] pl-[25px] invert"></span>
            <span className="text-white cursor-pointer text-[11px] leading-[1] uppercase">
              en
            </span>

            <ul className="bg-white rounded-md shadow-[0_8px_16px_rgb(0_0_0_/_20%)] hidden group-hover:block left-0 p-[4px] absolute top-full transition-all duration-300">
              {langs.map((lang) => (
                <li key={lang}>
                  <span className="p-[12px_44px_12px_16px] inline-block text-left w-full text-[14px] cursor-pointer">{lang}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;