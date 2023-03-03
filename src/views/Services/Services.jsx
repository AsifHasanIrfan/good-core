import Link from 'next/link';
import FAQ from '../../shared/FAQ/FAQ';
import Testimonial from '../../shared/Testimonial/Testimonial';
import AwardsAndRec from './components/Awards&Recognition/AwardsAndRec';
import AwardWinning from './components/AwardWinning/AwardWinning';
import DevelopmentServices from './components/DevelopmentServices/DevelopmentServices';
import HowWeDoIt from './components/HowWeDO/HowWeDoIt';
import OurAchievement from './components/OurAchievement/OurAchievement';
import ServicesCta from './components/ServicesCta/ServicesCta';
import ServicesHero from './components/ServicesHero/ServicesHero';
import ServicesInsight from './components/ServicesInsight/ServicesInsight';
import SuccessStories from './components/SuccessStories/SuccessStories';
import Technologies from './components/Technologies/Technologies';
import WhyChoose from './components/WhyChoose/WhyChoose';

const Services = () => {
  return (
    <>
      <ServicesHero />
      <div className="text-center w-full mt-[15px] mb-[-40px]">
        <p className="mb-[1rem]">
          <span>
            <span className="text-[16px]">
              <Link href="/" className="text-[#999] p-[0_10px]">Home</Link> &gt; <span className="text-[16px] text-[#111] p-[0_10px]">Services</span>
            </span>
          </span>
        </p>
      </div>
      <AwardWinning />
      <DevelopmentServices />
      <AwardsAndRec />
      <Testimonial />
      <OurAchievement />
      <WhyChoose />
      <SuccessStories />
      <ServicesCta />
      <HowWeDoIt />
      <Technologies />
      <ServicesInsight />
      <FAQ />
    </>
  );
};

export default Services;