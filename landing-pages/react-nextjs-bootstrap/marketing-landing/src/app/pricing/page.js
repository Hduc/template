import DashboardShowcase from "@/components/Common/DashboardShowcase";
import Faq from "@/components/Common/Faq"; 
import PricingCard from "@/components/Pricing/PricingCard";

export default function Page() {
  return (
    <>
      <PricingCard />

      <DashboardShowcase />

      <Faq />
    </>
  );
}
