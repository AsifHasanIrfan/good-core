import React, { useState } from 'react';
import Dropdown from '../../../../components/Dropdown/Dropdown';

const filterCategory = [
  {
    icon: "fa-apple",
    name: "iOS",
  },
  {
    icon: "fa-android",
    name: "Android",
  },
  {
    icon: "fa-globe",
    name: "Web",
  },
  {
    icon: "fa-desktop",
    name: "Desktop",
  },
  // {
  //   icon: "fa-television",
  //   name: " Cross-platform",
  // },
  {
    icon: "fa-th",
    name: "All",
  },
];

const CasesFilter = () => {
  const [openIndustries, setOpenIndustries] = useState(false);
  const [openServices, setOpenServices] = useState(false);
  const [openTechnologies, setOpenTechnologies] = useState(false);

  return (
    <section className="min-h-[60px] z-[2] bg-white m-[10px_0_0_0] relative py-[1.5rem]">
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <Dropdown
              openDropdown={openIndustries}
              setOpenDropdown={setOpenIndustries}
              name="Industries"
            />
            <Dropdown
              openDropdown={openServices}
              setOpenDropdown={setOpenServices}
              name="Services"
            />
            <Dropdown
              openDropdown={openTechnologies}
              setOpenDropdown={setOpenTechnologies}
              name="Technologies"
            />
          </div>
          <div className="col-md-5">
            <div className="md:text-right text-center">
              <ul>
                {filterCategory.map((item, i) => (
                  <li key={`category_${i}`} className="inline-block">
                    <button className="p-[10px] md:text-[14px] text-[12px] font-semibold text-[#333] hover:text-[#1476f2] border-b-[2px] hover:border-b-[2px] hover:border-[#1476f2] border-transparent group">
                      <i
                        className={`fa ${item.icon} font-[17px] text-[#ccc] mr-[5px] align-middle group-hover:text-[#1476f2]`}
                      ></i>{" "}
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CasesFilter;