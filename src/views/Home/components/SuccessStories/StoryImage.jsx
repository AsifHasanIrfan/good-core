import Image from 'next/image';

const StoryImage = () => {
  return (
    <div className="col-md-12 col-lg-6 !p-[0.5rem]">
      <Image width={529} height={370} src="/assets/images/bs.webp" alt="image" style={{margin: "auto", maxHeight: "370px"}} />
    </div>
  );
};

export default StoryImage;