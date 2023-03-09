
const Upload = () => {
  return (
    <div className="image-upload">
      <label for="file" className="absolute bottom-[16px] md:right-[26px] right-[20px] z-[1] text-[#999] inline-block mb-[0.5rem]"></label>
      <div className="relative top-[-40px] mt-0 z-[1] hidden">
        <input id="file" type="file" name="image-file" />
      </div>
    </div>
  );
};

export default Upload;