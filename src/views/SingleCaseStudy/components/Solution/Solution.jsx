import Image from 'next/image';
import solutionImg from '../../../../assets/images/cases/thesolution.png';

const Solution = () => {
  return (
    <section className="w-full px-[15px] mx-auto p-[80px_0] pt-0">
      <div className="container">
        <div className="row items-center">
          <div className="col-md-5">
            <Image src={solutionImg} alt="solution-img" />
          </div>
          <div className="col-md-7 md:order-2">
            <h3 className="text-[27px] p-[20px_0] font-bold mb-[1rem] leading-[1.2]">
              The Solution
            </h3>
            <p className="content text-[18px] leading-[30px]">
              Our team worked extensively with our client to acquire the
              necessary understanding of the complex operational requirements of
              the target audience and architected a white label multi-tenant
              SaaS-based platform from the ground up.
              <br />
              <br />
              Briefing managers now have the necessary tools at their disposal
              to manage all aspects of the operations – managing agendas,
              speaker schedules and invitations, catering, and everything else –
              for these high-visibility briefing events.
              <br />
              <br />
              The system design of the corporate meeting software offers the
              scalability and flexibility to cater for substantial differences
              in organizational needs across our client’s customer base and
              helps them automate their operations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;