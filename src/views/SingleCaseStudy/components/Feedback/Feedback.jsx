import SectionHeading from '../../../../components/SectionHeading/SectionHeading';
import Image from 'next/image';
import feedbackImg from '../../../../assets/images/cases/clutch-review-BS.webp';
import reviewBtn from '../../../../assets/images/cases/review-btn.png';
import Link from 'next/link';

const Feedback = () => {
  return (
    <section className="p-[80px_0]">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h2 className="section-heading">
              CLIENT’S <SectionHeading highlightText="FEEDBACK" />
            </h2>
            <Image
              className="inline-block"
              src={feedbackImg}
              alt="feedback-img"
            />
            <br />
            <br />
            <div className="text-center">
              <Link className="w-max inline-block" href="#">
                <Image className="mx-auto" src={reviewBtn} alt="review-btn" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feedback;