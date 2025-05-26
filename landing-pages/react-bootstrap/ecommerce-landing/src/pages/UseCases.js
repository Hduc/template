import Cta from "../components/Common/Cta";
import DashboardShowcase from "../components/Common/DashboardShowcase";
import ItsBuiltFor from "../components/Common/ItsBuiltFor";
import Partners from "../components/Common/Partners";

const UseCases = () => {
  return (
    <>
      <ItsBuiltFor />

      <Partners />

      <div className="pb-180">
        <DashboardShowcase />
      </div>

      <Cta />
    </>
  );
};

export default UseCases;
