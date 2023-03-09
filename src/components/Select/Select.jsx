const Select = ({ label }) => {
  return (
    <div className="md:mt-[30px] mt-[10px] relative z-[1] mb-[1rem] custom-select">
      <select className="text-[#18191b] border-b-[2px] border-[#dbdee8] min-h-[50px] block w-full h-[calc(1.5em_+_.75rem_+_2px)] text-[1rem]">
        <option value="" selected disabled="disabled"></option>
        <option value="Not Sure">Not Sure</option>
        <option value="£25,000 - £50,000">£25,000 - £50,000</option>
        <option value="£50,000-£100,000">£50,000-£100,000</option>
      </select>
      <label className="text-[#999] absolute md:top-[15px] top-[4px] md:text-[1rem] text-[14px] inline-block mb-[0.5rem]">{label}</label>
    </div>
  );
};

export default Select;
