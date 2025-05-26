import Cta from "@/components/Common/Cta";
import DashboardShowcase from "@/components/Common/DashboardShowcase";
import ItsBuiltFor from "@/components/Common/ItsBuiltFor";
import Testimonials from "@/components/Common/Testimonials";
import FeatureList from "@/components/Features/FeatureList";

export default function Page() {
  return (
    <>
      <FeatureList />

      <DashboardShowcase />

      <ItsBuiltFor />

      <Testimonials />

      <Cta />
    </>
  );
}
