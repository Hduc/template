import AboutUs from "../components/Common/AboutUs";
import BlogPost from "../components/Common/BlogPost";
import DashboardShowcase from "../components/Common/DashboardShowcase";
import Features from "../components/Common/Features";
import Partners from "../components/Common/Partners";
import Pricing from "../components/Common/Pricing";
import Testimonials from "../components/Common/Testimonials";
import UseCasesIdealUsers from "../components/Common/UseCasesIdealUsers";
import HeroBanner from "../components/Home/HeroBanner";

const Home = () => {
  return (
    <>
      <HeroBanner />

      <Partners />

      <AboutUs />

      <Features />

      <DashboardShowcase />

      <UseCasesIdealUsers />

      <Testimonials />

      <Pricing />

      <BlogPost />
    </>
  );
};

export default Home;
