import Link from 'next/link';

const TopNav = () => {
  const langs = ["English", "Español", "Deutsch", "Français"];
  return (
    <div className="z-10 md:block hidden relative bg-[#0b5492] text-right p-[2px_0]">
      <div className="container">
        <div>
          <div className="inline-block group">
            <select name="lang" className="cursor-pointer focus:outline-none appearance-none lang-select bg-transparent text-white text-[11px] pl-[15px] pr-[29px] text-left">
               {langs.map((lang) => (
                <option key={lang} className="text-black text-[14px] !p-4">
                  {lang}
                </option>
              ))}
            </select>
          </div>
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