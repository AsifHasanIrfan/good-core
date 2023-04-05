import Link from "next/link";
import EngagementModel from "./components/EngagementModel/EngagementModel";
import Hero from "./components/Hero/Hero";
import OurWork from "./components/OurWork/OurWork";
import WeOffer from "./components/WeOffer/WeOffer";
import Breadcrumb from "./partials/Breadcrumb/Breadcrumb";

const HowWeWork = () => {
  return (
    <>
      <Hero />
      <Breadcrumb />
      <WeOffer />
      <EngagementModel />
      <OurWork />
    </>
  );
};

export default HowWeWork;
