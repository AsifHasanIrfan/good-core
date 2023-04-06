import { useState } from "react";
import { indicativePricing } from "../../constant";
import PricingTabContent from "../PricingTabContent/PricingTabContent";
import PricingTabItem from "../PricingTabItem/PricingTabItem";

const PricingTabs = () => {
  const [pricingTab, setPricingTab] = useState("small");

  return (
    <div className="row">
      <div className="col-12">
        <ul className="bg-no-repeat bg-[center_bottom] m-[15px_auto] flex flex-wrap">
          {indicativePricing.map((item) => (
            <PricingTabItem
              key={item.type}
              item={item}
              pricingTab={pricingTab}
              setPricingTab={setPricingTab}
            />
          ))}
        </ul>
        <div>
          <PricingTabContent />
        </div>
      </div>
    </div>
  );
};

export default PricingTabs;
