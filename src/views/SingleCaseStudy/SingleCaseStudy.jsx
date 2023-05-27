import React from 'react';
import SingleCaseHero from './components/SingleCaseHero/SingleCaseHero';
import AboutClient from './components/AboutClient/AboutClient';
import Feedback from './components/Feedback/Feedback';
import Technologies from "./components/Technologies/Technologies";
import Team from './components/Team/Team';
import CaseProcess from './components/CaseProcess/CaseProcess';
import CaseClutch from './components/CaseClutch/CaseClutch';
import Link from 'next/link';
import AboutProject from './components/AboutProject/AboutProject';
import Challenge from './components/Challenge/Challenge';
import Solution from './components/Solution/Solution';
import WeDelivered from './components/WeDelivered/WeDelivered';

const SingleCaseStudy = () => {
  return (
    <>
      <SingleCaseHero />
      <div className="text-center w-full mt-[15px] mb-[-40px]">
        <p className="mb-[1rem]">
          <span>
            <span className="text-[16px]">
              <Link
                href="/"
                className="text-[#999] p-[0_10px] hover:text-primary hover:underline"
              >
                Home
              </Link>{" "}
              &gt;{" "}
              <Link
                href="/cases"
                className="text-[#999] p-[0_10px] hover:text-primary hover:underline"
              >
                Case Studies
              </Link>{" "}
              &gt;{" "}
              <span className="text-[16px] text-[#111] p-[0_10px]">
                Briefing Management Platform
              </span>
            </span>
          </span>
        </p>
      </div>
      <AboutProject />
      <Challenge />
      <Solution />
      <WeDelivered />
      <AboutClient />
      <CaseClutch />
      <CaseProcess />
      <Team />
      <Technologies />
      <Feedback />
    </>
  );
};

export default SingleCaseStudy;