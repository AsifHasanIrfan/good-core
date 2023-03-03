import SectionHeading from "../../../../components/SectionHeading/SectionHeading";

const SuccessStories = () => {
  return (
    <section className="bg-gray-100 p-[80px_0]">
      <div className="container">
        {/* section heading */}
        <div className="row text-center">
          <div className="col-md-12">
            <h2 className="section-heading mt-0">
              <SectionHeading highlightText="Success" />  Stories 
            </h2>
          </div>
        </div>

        {/* Success slider */}
        <div className="row">
          <div className="col-md-12">
            success slider
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;