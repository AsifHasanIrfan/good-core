
const Input = ({ name, type, label, required, ...rest }) => {
  return (
    <div className="md:mt-[30px] relative mt-[10px] z-[1] mb-[1rem]">
      <input
        className="border-b-[2px] border-[#dbdee8] text-[#18191b] md:min-h-[50px] min-h-[35px] pl-0 bg-transparent block w-full h-[calc(1.5em_+_0.75em_+_2px)] p-[0.375rem_0.75rem] md:text-[1rem] text-[14px] custom-input"
        name={name}
        type={type}
        {...rest}
        required={required}
      />
      <label className="text-[#999] absolute md:top-[15px] top-[4px] z-[-1] inline-block mb-[0.5rem] md:text-[1rem] text-[14px]">
        { label } {required ? <span>*</span> : null}
      </label>
    </div>
  );
};

export default Input;
