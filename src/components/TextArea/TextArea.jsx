
const TextArea = () => {
  return (
    <div className="md:mt-[30px] mt-[10px] relative z-[1] mb-[1rem] custom-textarea">
      <textarea className="pr-[35px] pl-0 md:min-h-[86px] min-h-[77px] overflow-auto h-auto border-b-[2px] border-[#dbdee8] text-[#18191b] block w-full p-[0.375rem_0.75rem] md:text-[1rem] text-[14px] resize-y" placeholder="Do you need help with an existing app or build one from scratch? Tell us about your project: A general list of requirements and features, and any design sketches you may have."></textarea>
      <label className="top-[-30px] scale-[1] text-[#999] absolute z-[-1] md:text-[1rem] text-[14px]"> Your Message </label>
    </div>
  );
};

export default TextArea;