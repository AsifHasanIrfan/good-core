import Image from 'next/image';
import SectionHeading from '../../../../components/SectionHeading/SectionHeading';
import journeyTimelineImg from '../../../../../public/assets/images/company/our-journey.webp';
import journeyTimelineMobileImg from '../../../../../public/assets/images/company/our-journey-mobile.webp';

const OurJourney = () => {
  return (
    <section className="p-[80px_0]">
      <div className="container">
        {/* Section Heading */}
        <div className="row text-center">
          <div className="col-md-12">
            <h2 className="section-heading mb-[0.5rem]"> Our <SectionHeading highlightText="Journey" /></h2>
            <p className="sub-content !font-bold"> 16 successful years in bespoke software development</p>
          </div>
        </div>

        {/* Journey timeline */}
        <div className="row">
          <div className="col-12 mt-[3rem]">
            <Image src={journeyTimelineImg} alt="img" className="md:block hidden m-auto" />
            <Image src={journeyTimelineMobileImg} alt="img" className="md:hidden mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurJourney;