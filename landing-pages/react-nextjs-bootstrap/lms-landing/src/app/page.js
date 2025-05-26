import Cta from "@/components/Common/Cta";
import Faq from "@/components/Common/Faq";
import HowItWorks from "@/components/Common/HowItWorks";
import Partners from "@/components/Common/Partners";
import PopularCourses from "@/components/Common/PopularCourses";
import PricingPlans from "@/components/Common/PricingPlans";
import Testimonials from "@/components/Common/Testimonials";
import WhyChooseUs from "@/components/Common/WhyChooseUs";
import HeroBanner from "@/components/Home/HeroBanner";

export default function Home() {
  return (
    <>
      <HeroBanner />

      <Partners />

      <WhyChooseUs />

      <PopularCourses />

      <HowItWorks />

      <Testimonials />

      <PricingPlans />

      <Cta />

      <Faq />
    </>
  );
}
