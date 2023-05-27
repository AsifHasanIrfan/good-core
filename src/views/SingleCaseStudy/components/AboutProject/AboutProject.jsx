import Image from 'next/image';
import projectImg from '../../../../assets/images/cases/aboutproduct.webp';

const AboutProject = () => {
  return (
    <section className="w-full px-[15px] mx-auto p-[80px_0]">
      <div className="container">
        <div className="row items-center">
          <h2 className="font-bold text-center mb-[3rem] text-[2rem] leading-[1.2]">
            An all-in-one briefing program manager for our client catering to
            Fortune 100 companies.
          </h2>
          <div className="col-md-6">
            <h3 className="text-[27px] p-[20px_0] font-bold mb-[0.5rem] leading-[1.2]">
              About the Product
            </h3>
            <p className="content text-[18px] leading-[30px]">
              The briefing management system that we developed is a corporate
              meeting software solution to efficiently manage briefing programs,
              trade shows, meetings, and similar corporate events.
              <br />
              <br />
              This white label SaaS-based platform was meticulously developed as
              per the nuances of our client’s industry to easily manage B2B
              events and meetings.
              <br />
              <br />
              Our custom developed software allows briefing managers to rise
              above the mundanity of event management and streamline and
              automate their processes with ease.
            </p>
          </div>
          <div className="col-md-6 text-center">
            <Image src={projectImg} alt="about-project-img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutProject;