import DashboardShowcase from "@/components/Common/DashboardShowcase";
import Faq from "@/components/Common/Faq";
import FeaturesList from "@/components/Features/FeaturesList";

 

export default function Page() {
  return (
    <>
      <FeaturesList />

      <DashboardShowcase />

      <Faq />
    </>
  );
}
