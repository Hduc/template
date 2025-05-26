import DashboardShowcase from "@/components/Common/DashboardShowcase";
import Faq from "@/components/Common/Faq";
import PricingTable from "@/components/Pricing/PricingTable";

export default function Page() {
  return (
    <>
      <PricingTable />

      <DashboardShowcase />

      <Faq />
    </>
  );
}
