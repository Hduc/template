import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Footer from "./components/Layout/Footer";
import Navbar from "./components/Layout/Navbar";
import SidebarSettings from "./components/Layout/SidebarSettings";
import GoTop from "./components/Layout/GoTop";

// Pages
import Home from "./pages/Home";
import WhyChooseUs from "./pages/WhyChooseUs";
import Courses from "./pages/Courses";
import CourseDetails from "./pages/Courses/CourseDetails";
import HowItWorks from "./pages/HowItWorks";
import Pricing from "./pages/Pricing";
import Checkout from "./pages/Checkout";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/why-choose-us" element={<WhyChooseUs />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/details" element={<CourseDetails />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />

        <SidebarSettings />

        <GoTop />
      </Router>
    </>
  );
}

export default App;
