import Cta from "@/components/Common/Cta";
import HowItWorks from "@/components/Common/HowItWorks";
import PageBanner from "@/components/Common/PageBanner";

export default function Page() {
  return (
    <>
      <PageBanner
        pageTitle="How It Works"
        homePageUrl="/"
        homePageText="Home"
      />

      <Cta />

      <HowItWorks />
    </>
  );
}
