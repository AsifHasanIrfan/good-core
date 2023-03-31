import React from 'react';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import CTA from '../../shared/CTA/CTA';
import FAQ from '../../shared/FAQ/FAQ';
import NewsAndEvents from '../../shared/News&Events/News&Events';
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
      <CTA
        title="Want to kickstart your project?"
        description="We offer end-to-end software development services – from discovery to deployment – and work with clients every step of the way to develop competitive software solutions. Do you have a project to discuss?"
      />
      <Role />
      <FAQ faqs={FAQData} />
      <NewsAndEvents
        sectionTitle={
          <>
            SOFTWARE DEVELOPMENT PROCESS{" "}
            <SectionHeading highlightText="INSIGHTS" />
          </>
        }
      />
    </>
  );
};

export default OurProcess;
