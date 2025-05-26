import Cta from "@/components/Common/Cta";
import Faq from "@/components/Common/Faq";
import LearnersOrganizations from "@/components/Common/LearnersOrganizations";
import PageBanner from "@/components/Common/PageBanner";
import PricingPlans from "@/components/Common/PricingPlans";

export default function Page() {
  return (
    <>
      <PageBanner pageTitle="Pricing" homePageUrl="/" homePageText="Home" />

      <LearnersOrganizations />

      <PricingPlans />

      <Cta />

      <Faq />
    </>
  );
}
