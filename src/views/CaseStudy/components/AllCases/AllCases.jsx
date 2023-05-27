import CaseStudyCard from "../CaseStudyCard/CaseStudyCard";

const AllCases = () => {
  return (
    <section className="pt-[1rem] pb-[80px]">
      <div className="container">
        <div className="row">
          {[...Array(9)].map((i) => (
            <CaseStudyCard key={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllCases;
