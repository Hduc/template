import Cta from "@/components/Common/Cta"; 
import DashboardShowcase from "@/components/Common/DashboardShowcase";
import ItsBuiltFor from "@/components/Common/ItsBuiltFor";
import PricingPlans from "@/components/Common/PricingPlans";
import Testimonials from "@/components/Common/Testimonials";

export default function Page() {
  return (
    <>
      <PricingPlans />

      <DashboardShowcase />

      <ItsBuiltFor />

      <Testimonials />

      <Cta />
    </>
  );
}
