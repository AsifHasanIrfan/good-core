import Image from 'next/image';

const PricingTabItem = ({ item, pricingTab, setPricingTab }) => {

  return (
    <li
      onClick={() => setPricingTab(item.type)}
      className="w-[33.33%] text-center mb-[-1px]"
    >
      <div className="text-[#222] font-bold w-full inline-block p-[12px] rounded-tl rounded-tr">
        <div
          className={`${
            pricingTab === item.type
              ? "border-[#bbe0f9] pricing-tab-active"
              : "border-transparent"
          } m-[12px_0] p-[30px_16px] border-[7px] relative rounded-[10px] ${
            item.type === "small" ? "bg-[#e9f4fb]" : ""
          } ${item.type === "medium" ? "bg-[#e7f8f3]" : ""} ${
            item.type === "large" ? "bg-[#f6f5ee]" : ""
          } cursor-pointer`}
        >
          <Image
            src={item.icon}
            alt="icon"
            className="inline-block mb-[20px]"
          />
          <h4 className="text-[20px] relative m-[40px_auto] font-bold uppercase leading-[1.2] after:bg-[#1f92f4] after:w-[55px] after:h-[4px] after:rounded-[15px] after:content-[''] after:absolute after:bottom-[-20px] after:m-auto after:left-0 after:right-0">
            Small <br className="sm:block xl:hidden" /> project
          </h4>
          <h3 className="text-[26px] mt-[25px] font-bold mb-[0.5rem] leading-[1.2]">
            {item.price_range}
          </h3>
        </div>
      </div>
    </li>
  );
};

export default PricingTabItem;