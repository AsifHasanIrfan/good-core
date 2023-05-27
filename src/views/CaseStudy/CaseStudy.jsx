import CasesHeader from './components/CasesHeader/CasesHeader';
import CasesFilter from "./components/CasesFilter/CasesFilter";
import AllCases from './components/AllCases/AllCases';

const CaseStudy = () => {
  return (
    <>
      <CasesHeader />
      <CasesFilter />
      <AllCases />
    </>
  );
};

export default CaseStudy;