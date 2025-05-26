import BlogPost from "@/components/Common/BlogPost";
import Cta from "@/components/Common/Cta";
import DashboardShowcase from "@/components/Common/DashboardShowcase";
import ItsBuiltFor from "@/components/Common/ItsBuiltFor";
import Partners from "@/components/Common/Partners";
import PricingPlans from "@/components/Common/PricingPlans";
import Testimonials from "@/components/Common/Testimonials";
import TopFeatures from "@/components/Common/TopFeatures";
import WhyChooseUs from "@/components/Common/WhyChooseUs";
import HeroBanner from "@/components/Home/HeroBanner"; 

export default function Home() {
  return (
    <>
      <HeroBanner />

      <Partners />

      <WhyChooseUs />

      <TopFeatures />

      <DashboardShowcase />

      <ItsBuiltFor />

      <Testimonials />

      <PricingPlans />

      <BlogPost />

      <Cta /> 
    </>
  );
}
