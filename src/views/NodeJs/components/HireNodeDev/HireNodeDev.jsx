import React from "react";
import SectionHeading from "../../../../components/SectionHeading/SectionHeading";
import SingleHireBox from "../../partials/SingleHireBox";

const HireNodeDev = () => {
  return (
    <section className="md:p-[80px_0] p-[40px_0]">
      <div className="container">
        <div className="row text-center">
          <div className="col-md-12">
            <h2 className="section-heading !tracking-[2px]">
              <SectionHeading highlightText="WHY" /> INDUSTRY-BEST BUSINESSES
              HIRE NODE.JS DEVELOPERS WITH GOODCORE{" "}
            </h2>
          </div>
        </div>

        <div className="row mt-[3rem]">
          <SingleHireBox
            url="/assets/images/technologies/1.webp"
            heading="Full-Stack Developers"
            body="We have a strong decade-long experience in using MERN, MEAN and
              MEVN stacks to build user-friendly, scalable, and cloud-compatible
              Node.js applications. Leave it to our top-notch full-stack
              developers to expertly utilise the single-thread architecture of
              Node.js to build fast-processing application backends paired up
              with easy-to-use frontends."
          />
          <SingleHireBox
            url="/assets/images/technologies/2.webp"
            heading="Cost-Effective Solutions"
            body="We offer flexible and cost-effective solutions to our clients based on their project requirements, budget, and choice of collaboration option. Keep your project strictly within budget with our fixed-scope fixed-price model or opt for a flexible time-and-materials model. Hire Node.js developers to add to your existing development team or build a dedicated Node.js development team from our pool of skilled resources."
          />
          <SingleHireBox
            url="/assets/images/technologies/3.webp"
            heading="Top-Class Talents"
            body="We work with the best-of-breed developers hired after a rigorous 3-step interview process. Our Node.js developers have profound expertise in full-stack development with 5 years of industry experience on average. Through training and certifications, we make sure that the skills of our Node.js engineers always stay sharp and relevant."
          />
          <SingleHireBox
            url="/assets/images/technologies/4.webp"
            heading="Industry-Wide Expertise"
            body="We have delivered successful Node.js solutions to businesses of varying sizes across industries. Our clientele includes Silicon Valley technology giants, tech startups, SMEs, and large enterprises. Our proven track record as a Node.js development company and perfect client reviews on Clutch are a testament to our quality of work."
          />
        </div>
      </div>
    </section>
  );
};

export default HireNodeDev;
