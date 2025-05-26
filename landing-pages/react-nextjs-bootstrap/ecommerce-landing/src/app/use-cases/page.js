import Cta from "@/components/Common/Cta";
import DashboardShowcase from "@/components/Common/DashboardShowcase";
import ItsBuiltFor from "@/components/Common/ItsBuiltFor";
import Partners from "@/components/Common/Partners";

export default function Page() {
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
}
