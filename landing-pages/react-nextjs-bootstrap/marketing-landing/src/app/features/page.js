import DashboardShowcase from "@/components/Common/DashboardShowcase";
import Faq from "@/components/Common/Faq";
import FeatureList from "@/components/Features/FeatureList";

export default function Page() {
  return (
    <>
      <FeatureList />

      <DashboardShowcase />

      <Faq />
    </>
  );
}
