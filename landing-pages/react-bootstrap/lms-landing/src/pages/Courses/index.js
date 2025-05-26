import Cta from "../../components/Common/Cta";
import HowItWorksContent from "../../components/Common/HowItWorksContent";
import PageBanner from "../../components/Common/PageBanner";
import PricingPlans from "../../components/Common/PricingPlans";
import CoursesList from "../../components/Courses/CoursesList";

const Courses = () => {
  return (
    <>
      <PageBanner pageTitle="Courses" homePageUrl="/" homePageText="Home" />

      <CoursesList />

      <HowItWorksContent />

      <Cta />

      <PricingPlans />
    </>
  );
};

export default Courses;
