import TechnologyHero from "../../shared/TechnologyTopHero/TechnologyHero";
import BreadCrumb from "./components/BreadCrumb/BreadCrumb";
import TechBanner from "./components/TechBanner/TechBanner";
import { phpHeroTechArray } from "./constant";

const PhpDevelopment = () => {
  return (
    <>
      <TechnologyHero
        highlightHeading="PHP"
        heading="Development Company"
        subHeading="We offer end-to-end PHP development services to create business solutions that are fast, flexible, and modern, using Laravel, Yii, Zend, and Symfony frameworks."
        technologies={phpHeroTechArray}
      />
      <BreadCrumb />
      <TechBanner />
    </>
  );
};

export default PhpDevelopment;
