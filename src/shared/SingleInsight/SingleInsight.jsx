import Image from 'next/image';
import Link from 'next/link';
import costImg from '../../assets/images/company/how-much-does-it-cost-to-develop-software-1-350x200.webp';

const SingleInsight = () => {
  return (
    <Link href="#">
      <Image
        src={costImg}
        className="rounded-[10px] w-full block"
        alt="insight-img"
      />
      <h3 className="text-[16px] text-[#212529] m-[25px_0_15px_0]">
        How Much Does It Cost To Develop Custom Software: What Industry Experts
        Say
      </h3>
      <span className="text-[13px] text-[#212529] mb-[10px] inline-block">
        3RD APRIL 2020
      </span>
    </Link>
  );
};

export default SingleInsight;