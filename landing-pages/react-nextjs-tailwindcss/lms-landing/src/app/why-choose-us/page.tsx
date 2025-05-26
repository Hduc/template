import Faq from "@/components/Common/Faq";
import LearnersOrganizations from "@/components/Common/LearnersOrganizations";
import PageBanner from "@/components/Common/PageBanner";
import Testimonials from "@/components/Common/Testimonials";
import WhyChooseUs from "@/components/Common/WhyChooseUs";

export default function Page() {
  return (
    <>
      <PageBanner
        pageTitle="Why Choose Us"
        homePageUrl="/"
        homePageText="Home"
      />

      <LearnersOrganizations />

      <WhyChooseUs />

      <Testimonials />

      <Faq />
    </>
  );
}
