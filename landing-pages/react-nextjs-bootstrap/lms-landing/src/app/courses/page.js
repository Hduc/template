import Cta from "@/components/Common/Cta";
import HowItWorks from "@/components/Common/HowItWorks";
import PageBanner from "@/components/Common/PageBanner";
import PricingPlans from "@/components/Common/PricingPlans";
import CoursesList from "@/components/Courses/CoursesList";

export default function Page() {
  return (
    <>
      <PageBanner pageTitle="Courses" homePageUrl="/" homePageText="Home" />

      <CoursesList />

      <HowItWorks />

      <Cta />

      <PricingPlans />
    </>
  );
}
