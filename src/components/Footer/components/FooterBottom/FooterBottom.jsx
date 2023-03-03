import Image from "next/image";
import Link from "next/link";
import SocialLinks from "../SocialLinks/SocialLinks";

const FooterBottom = () => {
  return (
    <div className="footer-bottom border-y-2 border-[#0d2035] lg:p-0 p-[20px_0]">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="inline-block">
              <div>
                <Link
                  href="/"
                  className="opacity-[.95] inline-block align-middle mr-[54px]"
                >
                  <Image
                    src="/assets/images/logo-white.webp"
                    width={170}
                    height={28}
                    alt="logo-white"
                    className="max-[170px] align-middle"
                  />
                </Link>
                <div className="mr-[25px] w-[202px] inline-block align-middle">
                  <iframe
                    id="iframe-0.42673085967069335"
                    width="100%"
                    src="https://widget.clutch.co/widgets/get/2/darkbg?ref_domain=www.goodcore.co.uk&amp;uid=531037&amp;ref_path=/"
                    height="50px"
                    style={{ border: "none", display: "block" }}
                  ></iframe>
                </div>
                <SocialLinks />
              </div>
            </div>

            <div className="max-w-[355px] w-[360px] lg:m-[0_0_15px] relative text-[13px] align-super inline-block">
              <div>
                <form className="subscription_form">
                  <div className="">
                    <label>
                      <input
                        className="p-[0_10px] w-full leading-[45px] text-[13px] rounded-[30px] border-none outline-none overflow-visible"
                        type="email"
                        name="sub-email"
                        placeholder="Your Email Address"
                        required
                      />
                    </label>
                  </div>
                  <input
                    className="absolute right-0 top-0 leading-[45px] text-white bg-[#1f92f4] hover:bg-[#1b2939] p-[0_30px] rounded-[30px] border-none outline-none"
                    type="submit"
                    name="submit"
                    value="Subscribe"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
