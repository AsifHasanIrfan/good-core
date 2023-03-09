import Input from "../../../../components/Input/Input";
import SectionHeading from "../../../../components/SectionHeading/SectionHeading";
import Select from "../../../../components/Select/Select";
import TextArea from "../../../../components/TextArea/TextArea";
import Upload from "../../../../components/Upload/Upload";
import { blockInvalidChar } from "../../../../utils/blockInValidChar";

const ContactBanner = () => {
  return (
    <section className="w-full px-[15px] mx-auto md:p-[80px_0] p-[40px_0] md:text-left text-center">
      <div className="container">
        <div className="row">
          <div className="col-md-5 pt-[0.5rem]">
            <h2 className="section-heading xlg:!mt-[3rem] !mt-[20px]">
              {" "}
              Tell us about <br /> your{" "}
              <SectionHeading highlightText="project" />
            </h2>
            <p className="sub-content !text-[20px] max-w-[1050px]">
              We&apos;ll contact you within one business day to discuss your
              requirements.
            </p>
            <div className="mt-[1.5rem] hidden md:block">
              <iframe
                id="iframe-0.8270999469662204"
                width="100%"
                src="https://widget.clutch.co/widgets/get/2?ref_domain=www.goodcore.co.uk&amp;uid=531037&amp;ref_path=/contact/"
                height="50px"
                className="border-none block"
                title="GoodCore Software Clutch Review Widget 2"
              ></iframe>
            </div>
          </div>
          <div className="col-md-7">
            <div className="max-w-[700px] m-[0_0_10px_0] p-[0_0_10px_0] text-left">
              <form>
                <Input
                  name="name"
                  type="text"
                  required={true}
                  label="Full Name"
                />
                <div className="row">
                  <div className="col-md-6">
                    <Input
                      name="email"
                      type="email"
                      required={true}
                      label="Your Email"
                    />
                  </div>
                  <div className="col-md-6">
                    <Input
                      name="phone"
                      type="number"
                      // onKeyDown={(e) => blockInvalidChar(e)}
                      required={true}
                      label="Your Phone"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <Select label=" What is your budget? " />
                  </div>
                </div>
                <div className="row xlg:mt-[1.5rem] mt-[20px]">
                  <div className="col-md-12">
                    <TextArea label=" What is your budget? " />
                    <Upload />
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-9">
                    <div className="relative z-[1] mb-[1rem]">
                      <div className="custom-checkbox">
                        <label className="xlg:top-[5px] top-[0] text-[#999] absolute z-[-1] inline-block mb-[0.5rem] select-none md:text-[1rem] text-[14px]">
                          <input
                            className="w-[15px] h-[15px] align-middle mr-[10px] p-0"
                            name="NDA"
                            type="checkbox"
                            value="Request NDA"
                          />
                          Request NDA
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row mt-[3rem]">
                  <div className="col-12">
                    <div className="mt-[30px] relative z-[1] mb-[1rem]">
                      <div>
                        <input className="cursor-pointer text-[15px] font-semibold bg-primary rounded-[55px] p-[20px_75px] border-[2px] border-primary uppercase transition-all duration-[.5s] ease-in-out inline-block text-white text-center hover:text-primary hover:bg-transparent hover:shadow-[0_0_15px_#1f92f4] hover:transition-all hover:duration-[.5s] hover:ease hover:border-[2px] hover:border-primary lg:w-auto w-full" type="submit" value="Send Request" />
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactBanner;
