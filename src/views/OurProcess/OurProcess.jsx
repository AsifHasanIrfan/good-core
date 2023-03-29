import React from 'react';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import FAQ from '../../shared/FAQ/FAQ';
import NewsAndEvents from '../Home/components/News&Events/News&Events';
import { FAQData } from '../Home/constant';
import Breadcrumb from '../HowWeWork/partials/Breadcrumb/Breadcrumb';
import AgileDevelopment from './components/AgileDevelopment/AgileDevelopment';
import Agility from './components/Agility/Agility';
import Hero from './components/Hero/Hero';
import Principles from './components/Principles/Principles';
import Role from './components/Role/Role';

const OurProcess = () => {
  return (
    <>
      <Hero />
      <Breadcrumb />
      <Agility />
      <Principles />
      <AgileDevelopment />
      <Role />
      <FAQ faqs={FAQData} />
      <NewsAndEvents
        header={
          <>
            SOFTWARE DEVELOPMENT PROCESS{' '}
            <SectionHeading highlightText="INSIGHTS" />
          </>
        }
      />
    </>
  );
};

export default OurProcess;
