import Link from 'next/link';
import FaqQuestions from './components/FaqQuestions/FaqQuestions';
import HeroBanner from './components/HeroBanner/HeroBanner';
import OtherQuestions from './components/OtherQuestion/OtherQuestions';

const CompanyFaqs = () => {
  return (
    <>
      <HeroBanner />
      <div className="text-center w-full mt-[15px] mb-[-40px]">
      <p className="mb-[1rem]">
        <span>
          <span className="text-[16px]">
            <Link
              href="/"
              className="text-[#999] p-[0_10px] hover:text-primary hover:underline"
            >
              Home
            </Link>{" "}
            &gt;{" "}
            <Link
              href="/company"
              className="text-[#999] p-[0_10px] hover:text-primary hover:underline"
            >
              Company
            </Link>{" "}
            &gt;{" "}
            <span className="text-[16px] text-[#111] p-[0_10px]">
              FAQs
            </span>
          </span>
        </span>
      </p>
    </div>
    <FaqQuestions />
    <OtherQuestions />
    </>
  );
};

export default CompanyFaqs;