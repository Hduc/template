import Cta from "../components/Common/Cta";
import Faq from "../components/Common/Faq";
import PageBanner from "../components/Common/PageBanner";
import PricingPlans from "../components/Common/PricingPlans";

const Pricing = () => {
  return (
    <>
      <PageBanner pageTitle="Pricing" homePageUrl="/" homePageText="Home" />

      <Cta />

      <PricingPlans />

      <Faq />
    </>
  );
};

export default Pricing;
