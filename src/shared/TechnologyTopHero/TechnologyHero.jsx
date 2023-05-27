import Image from 'next/image';
import Button from '../../components/Button/Button';
import SectionHeading from '../../components/SectionHeading/SectionHeading';

const TechnologyHero = ({ highlightHeading, heading, subHeading, technologies }) => {
  return (
    <section className="bg-gray-bg p-[80px_0] relative overflow-hidden w-full px-[15px] mx-auto before:content-[''] before:absolute before:left-0 before:bottom-0 before:bg-[url('/assets/images/bg-header-left.webp')] before:w-[280px] before:h-[360px] before:bg-no-repeat after:content-[''] after:absolute after:w-[500px] after:h-full after:top-0 after:right-0 after:bg-no-repeat after:bg-cover after:bg-[url('/assets/images/bg-header-right.webp')]">
      <div className="container">
        <div className="row text-center">
          <div className="col-md-12">
            <h1 className="section-heading tracking-normal text-[64px] mt-0 mb-[0.5rem]">
              <SectionHeading highlightText={highlightHeading} /> {heading}
            </h1>
            <p className="sub-heading !text-[#999] inline-block">
              {subHeading}
            </p>
            <Button
              href=""
              className="!mt-[12px] !text-[18px] !p-[20px_40px]"
              variant="fill"
            >
              Get Started
            </Button>
          </div>

          {/* bottom tech  */}
          <div className="col-12">
            <ul className="mt-[70px] mb-[1rem] p-0">
              {technologies?.map(item => (
                <li key={item.title} className="p-[10px_16px] inline-block">
                  <div>
                    <Image
                      src={item.icon}
                      alt="img"
                      className={`grayscale mx-auto md:w-auto md:h-[50px] w-[30px] h-[30px]`}
                    />
                  </div>
                  <span className="md:text-[16px] text-[11px] text-gray-30 font-semibold pt-[20px] block">
                    {item.title}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyHero;