import AboutGoodCore from '../../shared/AboutGoodCore/AboutGoodCore';
import TechnologyHero from '../../shared/TechnologyTopHero/TechnologyHero';
import TechSkilled from './components/TechSkilled/TechSkilled';
import { hireJavaDeveloperTech, javaFacts } from './constant';

const JavaDevelopers = () => {
  return (
    <>
      <TechnologyHero
        highlightHeading="Hire"
        heading="Java Developers"
        subHeading="Leverage our experience and resources to build your Java-based solution from the ground up, migrate your existing Java app across frameworks and platforms, or supplement your existing team with Java engineers."
        technologies={hireJavaDeveloperTech}
      />
      <TechSkilled />
      <AboutGoodCore
        heading="Choosing a partner to hire Java developers who can bring your app idea to life is not an easy decision. Here are the many reasons why our clients trust us as a reliable Java development company."
        factLists={javaFacts}
      />
    </>
  );
};

export default JavaDevelopers;