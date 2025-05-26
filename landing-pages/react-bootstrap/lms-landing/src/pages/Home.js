import Cta from "../components/Common/Cta";
import Faq from "../components/Common/Faq";
import HowItWorksContent from "../components/Common/HowItWorksContent";
import Partners from "../components/Common/Partners";
import PopularCourses from "../components/Common/PopularCourses";
import PricingPlans from "../components/Common/PricingPlans";
import Testimonials from "../components/Common/Testimonials";
import WhyChooseUsContent from "../components/Common/WhyChooseUsContent";
import HeroBanner from "../components/Home/HeroBanner";

const Home = () => {
  return (
    <>
      <HeroBanner />

      <Partners />

      <WhyChooseUsContent />

      <PopularCourses />

      <HowItWorksContent />

      <Testimonials />

      <PricingPlans />

      <Cta />

      <Faq />
    </>
  );
};

export default Home;
