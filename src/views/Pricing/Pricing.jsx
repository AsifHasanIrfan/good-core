import Link from "next/link";
import ChallengingProject from "./components/ChallengingProject/ChallengingProject";
import ComponentsCost from "./components/ComponentsCost/ComponentsCost";
import CostInsight from "./components/CostInsight/CostInsight";
import IndicativePricing from "./components/IndicativePricing/IndicativePricing";
import PhasedApproach from "./components/PhasedApproach/PhasedApproach";
import PricingBanner from "./components/PricingBanner/PricingBanner";
import RealisticCost from "./components/RealisticCost/RealisticCost";
import AppFactor from "./components/AppFactor/AppFactor";

const Pricing = () => {
  return (
    <>
      <PricingBanner />
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
                href="/company"
                className="text-[#999] p-[0_10px] hover:text-primary hover:underline"
              >
                Company
              </Link>{" "}
              &gt;{" "}
              <span className="text-[16px] text-[#111] p-[0_10px]">
                Pricing
              </span>
            </span>
          </span>
        </p>
      </div>
      <AppFactor />
      <IndicativePricing />
      <ComponentsCost />
      <ChallengingProject />
      <PhasedApproach />
      <RealisticCost />
      <CostInsight />
    </>
  );
};

export default Pricing;
