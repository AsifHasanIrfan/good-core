import Image from "next/image";
import Link from "next/link";
import SectionHeading from "../../../../components/SectionHeading/SectionHeading";
import { contactDetails } from "../../../../constant";

const ContactDetails = () => {
  return (
    <section className="bg-gray-100 md:p-[80px_0] p-[40px_0]">
      <div className="container">
        {/* Section Heading */}
        <div className="row text-center">
          <div className="col-md-12">
            <h2 className="section-heading">
              {" "}
              Get in touch with <SectionHeading highlightText="Our Team" />
            </h2>
            <p className="sub-content !text-[20px] max-w-[1050px]">
              Have a question or want to discuss your project and ideas? Our
              team is here to help.
            </p>
          </div>
        </div>

        <div className="row xlg:mt-[3rem] mt-[20px]">
          {contactDetails.map((detail) => (
            <div key={detail.title} className="col-md-6">
              <div className="text-center">
                <Image src={detail.icon} alt="contact-img" className="inline-block" />
                <h3 className="text-[24px] font-semibold m-[20px_auto_10px] leading-[1.2]">
                  {detail.title}
                </h3>
                <Link
                  href={detail.link}
                  className="font-semibold text-[24px] text-primary"
                >
                  {detail.linkText}
                </Link>
                <br />
                <p className="m-[15px_auto] max-w-[60%] leading-[1.8] md:text-[1rem] text-[14px]">
                  {detail.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactDetails;
