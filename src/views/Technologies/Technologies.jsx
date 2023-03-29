import React from "react";
import CloutPlatform from "./components/CloudPlatform/CloutPlatform";
import Hero from "./components/Hero/Hero";
import MobileAppDev from "./components/MobileAppDev/MobileAppDev";
import WebAppDevelopment from "./components/WebAppDevelopment/WebAppDevelopment";
import Breadcrumb from "./partials/Breadcrumb";

const Technologies = () => {
  return (
    <>
      <Hero />
      <Breadcrumb />
      <WebAppDevelopment />
      <MobileAppDev />
      <CloutPlatform />
    </>
  );
};

export default Technologies;
