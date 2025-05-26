import Cta from "@/components/Common/Cta";
import DashboardShowcase from "@/components/Common/DashboardShowcase";
import ItsBuiltFor from "@/components/Common/ItsBuiltFor";
import Testimonials from "@/components/Common/Testimonials";
import TopFeatures from "@/components/Features/TopFeatures";

export default function Page() {
  return (
    <>
      <TopFeatures />

      <DashboardShowcase />

      <ItsBuiltFor />

      <Testimonials />

      <Cta />
    </>
  );
}
