import Cta from "@/components/Common/Cta";
import HowItWorks from "@/components/Common/HowItWorks";
import PageBanner from "@/components/Common/PageBanner";
import Partners from "@/components/Common/Partners";

export default function Page() {
  return (
    <>
      <PageBanner
        pageTitle="How It Works"
        homePageUrl="/"
        homePageText="Home"
      />

      <Cta />

      <Partners />

      <HowItWorks />
    </>
  );
}
