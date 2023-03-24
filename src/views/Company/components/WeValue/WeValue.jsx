import SectionHeading from '../../../../components/SectionHeading/SectionHeading';
import { weValueData } from '../../constant';
import WeValueItem from './WeValueItem';

const WeValue = () => {
  return (
    <section className="bg-gray-100 p-[80px_0]">
      <div className="container">
        {/* Section Heading */}
        <div className="row text-center">
          <div className="col-md-12">
            <h2 className="section-heading tracking-[2px] !mb-[0.5rem]">
              We <SectionHeading highlightText="Value" />
            </h2>
          </div>
        </div>

        <div className="row mt-[3rem]">
          {weValueData.map(item => <WeValueItem key={item.name} data={item} />)}
        </div>
      </div>
    </section>
  );
};

export default WeValue;