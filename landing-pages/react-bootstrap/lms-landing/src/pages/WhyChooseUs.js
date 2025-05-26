import Faq from "../components/Common/Faq";
import PageBanner from "../components/Common/PageBanner";
import Partners from "../components/Common/Partners";
import Testimonials from "../components/Common/Testimonials";
import WhyChooseUsContent from "../components/Common/WhyChooseUsContent";

const WhyChooseUs = () => {
  return (
    <>
      <PageBanner
        pageTitle="Why Choose Us"
        homePageUrl="/"
        homePageText="Home"
      />

      <Partners />

      <WhyChooseUsContent />

      <Testimonials />

      <Faq />
    </>
  );
};

export default WhyChooseUs;
