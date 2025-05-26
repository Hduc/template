import Cta from "../components/Common/Cta";
import HowItWorksContent from "../components/Common/HowItWorksContent";
import PageBanner from "../components/Common/PageBanner";
import Partners from "../components/Common/Partners";

const HowItWorks = () => {
  return (
    <>
      <PageBanner
        pageTitle="How It Works"
        homePageUrl="/"
        homePageText="Home"
      />

      <Cta />

      <Partners />

      <HowItWorksContent />
    </>
  );
};

export default HowItWorks;
