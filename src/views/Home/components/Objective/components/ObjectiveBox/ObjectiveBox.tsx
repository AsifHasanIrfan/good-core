import Image from 'next/image';

interface ObjectiveBoxProps {
  objective: {
    icon: string;
    height: number;
    width: number;
    title: string;
    description: string;
    objectives: string[];
  };
};

const ObjectiveBox: React.FC<ObjectiveBoxProps> = ({ objective }) => {
  return (
    <div className="col-md-4 !p-[0_11px]">
      <div className="bg-transparent p-[30px_25px_30px_44px] rounded-[4px]">
        <h3 className="text-[18px] font-semibold mb-[20px] leading-[1.2]">
          <Image
            src={objective.icon}
            alt="icon"
            width={objective.width}
            height={objective.height}
            className="align-top mr-[14.2px] inline-block"
          />
          <span className="inline-block">
            For <br /> {objective.title}
          </span>
        </h3>
        <p className="mb-[1rem] md:text-[1rem] text-[14px]">{objective.description}</p>
        <ul className="mb-[1rem]">
          {objective.objectives.map((objective) => (
            <li
              key={objective}
              className="md:text-[1rem] text-[14px] pl-[20px] before:inline-block text-[#66686a] leading-[35px] before:content-[''] before:bg-[url('/assets/images/right-arrow.webp')] before:w-[14px] before:h-[11px] before:ml-[-25px] before:mt-[11px] before:absolute before:bg-no-repeat"
            >
              { objective }
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ObjectiveBox;