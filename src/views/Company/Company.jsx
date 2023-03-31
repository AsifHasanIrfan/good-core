import Awards from '../../shared/Awards/Awards';
import NewsAndEvents from '../../shared/News&Events/News&Events';
import Testimonial from '../../shared/Testimonial/Testimonial';
import Careers from './components/Careers/Careers';
import Collaboration from './components/Collaboration/Collaboration';
import CompanyAbout from './components/CompanyAbout/CompanyAbout';
import CompanyBanner from './components/CompanyBanner/CompanyBanner';
import CoreTeam from './components/CoreTeam/CoreTeam';
import LifeAt from './components/LifeAt/LifeAt';
import OurJourney from './components/OurJourney/OurJourney';
import WeValue from './components/WeValue/WeValue';

const Company = () => {
  return (
    <>
      <CompanyBanner />
      <CompanyAbout />
      <CoreTeam />
      <OurJourney />
      <WeValue />
      <LifeAt />
      <Careers />
      <Collaboration />
      <Testimonial />
      <Awards />
      <NewsAndEvents />
    </>
  );
};

export default Company;