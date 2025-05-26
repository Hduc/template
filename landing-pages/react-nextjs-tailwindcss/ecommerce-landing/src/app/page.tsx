import Cta from "@/components/Common/Cta";
import DashboardShowcase from "@/components/Common/DashboardShowcase";
import ItsBuiltFor from "@/components/Common/ItsBuiltFor";
import LatestBlog from "@/components/Common/LatestBlog";
import Partners from "@/components/Common/Partners";
import PricingPlans from "@/components/Common/PricingPlans";
import Testimonials from "@/components/Common/Testimonials";
import TopFeatures from "@/components/Common/TopFeatures";
import HeroBanner from "@/components/Home/HeroBanner";
import WhyTrezo from "@/components/Home/WhyTrezo";

export default function Home() {
  return (
    <>
      <HeroBanner />

      <Partners />

      <WhyTrezo />

      <TopFeatures />

      <DashboardShowcase />

      <ItsBuiltFor />

      <Testimonials />

      <PricingPlans />

      <LatestBlog />

      <Cta />
    </>
  );
}
