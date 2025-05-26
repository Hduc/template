import Faq from "@/components/Common/Faq";
import PageBanner from "@/components/Common/PageBanner";
import Partners from "@/components/Common/Partners";
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

      <Partners />

      <WhyChooseUs />

      <Testimonials />

      <Faq />
    </>
  );
}
