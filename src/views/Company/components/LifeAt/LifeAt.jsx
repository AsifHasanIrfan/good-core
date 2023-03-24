import Image from "next/image";
import Link from "next/link";
import SectionHeading from "../../../../components/SectionHeading/SectionHeading";
import big1 from "../../../../assets/images/company/big-1.webp";

const LifeAt = () => {
  return (
    <section className="p-[80px_0]">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading tracking-[2px]"><SectionHeading highlightText="Life" /> At GoodCore</h2>
        </div>

        <div className="row flex items-center">
          <div className="col-md-5">
            <h3 className="text-[27px] p-[0_0_20px_0] font-semibold mb-[0.5rem] leading-[1.2]">Professional Development</h3>
            <p className="sub-content !text-[16px] !leading-[26px]">
              We foster an environment that is conducive to the professional development of every team member. There are always things to learn from our clients and other team members, and we actively look for opportunities to inspire such learnings.
              <br />
              <br />
               GoodCore offers multiple 
               <Link href="#" className="text-[#007bff]"> career tracks </Link>
                and, over the years, our team members have discovered and pursued new passions, branched out in terms of their role, and grown tremendously as professionals. 
            </p>
          </div>
          <div className="col-md-7">
            <Image src={big1} className="grayscale hover:grayscale-0 transition-all duration-[.6s]" alt="img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LifeAt;