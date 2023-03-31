import React from 'react';
import Button from '../../../../components/Button/Button';
import SectionHeading from '../../../../components/SectionHeading/SectionHeading';
import PricingTabs from '../PricingTabs/PricingTabs';

const IndicativePricing = () => {
  return (
    <section className="p-[80px_0]">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h2 className="section-heading"><SectionHeading highlightText="INDICATIVE PRICING" /> FOR DIFFERENT SOFTWARE SYSTEMS </h2>
            <p className="mb-[1rem]">The actual cost for custom software depends on many factors and can only be scoped after a detailed discovery exercise with you. Take a look at some indicative pricing for different types of software systems based on their scope, complexity, team size, and time duration. On average, the cost of custom software, based on these factors, could fall in the following three ranges.</p>
          </div>
        </div>
        <PricingTabs />
        <div className="row mt-[1rem]">
          <div className="col-md-12 text-center">
            <Button href="" variant="fill">Estimate your Project</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndicativePricing;