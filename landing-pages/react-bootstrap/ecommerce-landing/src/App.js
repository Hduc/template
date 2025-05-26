import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Footer from "./components/Layout/Footer";
import Navbar from "./components/Layout/Navbar";
import SidebarSettings from "./components/Layout/SidebarSettings";
import GoTop from "./components/Layout/GoTop";

// Pages
import Home from "./pages/Home";
import Features from "./pages/Features";
import UseCases from "./pages/UseCases";
import Testimonials from "./pages/Testimonials";
import Pricing from "./pages/Pricing";
import Blogs from "./pages/Blogs";
import BlogDetails from "./pages/Blogs/BlogDetails";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/use-cases" element={<UseCases />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/details" element={<BlogDetails />} />
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
