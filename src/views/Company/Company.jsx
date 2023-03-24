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
    </>
  );
};

export default Company;