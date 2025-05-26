import Cta from "@/components/Common/Cta";
import DashboardShowcase from "@/components/Common/DashboardShowcase";
import ItsBuiltFor from "@/components/Common/ItsBuiltFor";
import Partners from "@/components/Common/Partners";

export default function Page() {
  return (
    <>
      <ItsBuiltFor />

      <Partners />

      <div className="pb-[70px] md:pb-[90px] lg:pb-[110px] xl:pb-[150px] 2xl:pb-[180px]">
        <DashboardShowcase />
      </div>

      <Cta />
    </>
  );
}
