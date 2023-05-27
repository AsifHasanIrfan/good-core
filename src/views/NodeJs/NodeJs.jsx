import React from "react";
import Hero from "./components/Hero/Hero";
import HireNodeDev from "./components/HireNodeDev/HireNodeDev";
import NodeJsTechnologies from "./components/NodeJsTechnologies/NodeJsTechnologies";
import ServeIndustry from "./components/ServeIndustry/ServeIndustry";
import BreadCrumb from "./partials/BreadCrumb";
import Testimonial from "../../shared/Testimonial/Testimonial";

const NodeJs = () => {
  return (
    <>
      <Hero />
      <BreadCrumb />
      <HireNodeDev />
      <ServeIndustry />
      <NodeJsTechnologies />
      <Testimonial />
    </>
  );
};

export default NodeJs;
