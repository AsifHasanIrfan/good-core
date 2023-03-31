import { useState } from 'react';

const PricingTabContent = () => {


  return (
    <div className="pricing-tab-content">
      <div className="row">
        <div className="col-12 text-center py-[0.5rem]">
          <p className="text-[18px] leading-[30px] mb-[1rem]"> Here are some recent small projects we delivered for our clients. </p>
        </div>
      </div>

      <div className="row">
        <div className="bg-[#e9f4fb] rounded-[5px] p-[25px] m-[10px_1%] flex flex-col items-stretch basis-0 grow max-w-full">
          <h3 className="text-[22px] font-bold flex mb-[0.5rem] leading-[1.2]">Conversion of Excel-Based to Web-Based System</h3>
          <p className="text-[14px] flex flex-[1_1_auto] leading-[30px] mb-[1rem]">Transformation of an Excel-based database into an online web application with powerful search tools, simple workflow, and multiple user roles.</p>
          <ul className="pl-0 flex flex-col justify-end mb-[1rem]">
            <li className="text-[16px] p-[5px_0] leading-[30px]">
              <span className="w-[120px] inline-block">Price Range:</span>
              <strong className="pl-0 inline-block">£25,000-£50,000</strong>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PricingTabContent;