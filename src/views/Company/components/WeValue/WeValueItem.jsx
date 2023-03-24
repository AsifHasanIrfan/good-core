import Image from "next/image";

const WeValueItem = ({data}) => {
  return (
    <div className="col-md-4">
      <h3 className="text-[27px] p-[0_0_20px_0] font-semibold leading-[1.2] mb-[0.5rem]">
        <Image src={data.icon} className="mr-[15px] inline-block" alt="img" /> {data.name}
      </h3>
      <p className="text-[16px] leading-[30px] mb-[1rem]">
        {data.content}
      </p>
    </div>
  );
};

export default WeValueItem;
