import { footerBottomLinks } from "@/constant";
import Link from "next/link";
import { Fragment } from "react";

const FooterBottomLinks = () => {

  return (
    <div className="footer-bottom-links">
      <div className="container text-[12px] mt-[20px] font-[300] text-[#566a80]">
        <div className="row">
          <div className="col-md-9 md:text-left text-center">
            <div className="mb-[5px] inline-block">
              {footerBottomLinks.map((link) => (
                <Fragment key={link.title}>
                  <Link
                    href={link.href}
                    className="m-[5px] inline-block text-[#566a80] text-[12px] hover:text-white hover:underline"
                  >
                    {link.title}
                  </Link>
                  <span className="last:hidden"> | </span>
                </Fragment>
              ))}
            </div>
          </div>
          <div className="col-md-3 text-right">
            <p className="inline-block md:float-right md:text-right text-center md:text-[12px] text-[14px] font-[300] w-full mb-[1rem]">
              © GoodCore Software Ltd {new Date().getFullYear()}.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterBottomLinks;
