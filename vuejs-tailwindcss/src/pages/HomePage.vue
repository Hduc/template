<template>
  <div class="">
    <Navbar />
    <Banner />
    <KeyFeatures />
    <TailorYourDashboard />
    <Testimonials />
    <OurTeam />
    <FAQ />
    <ContactUs />
    <CTA />
    <Footer />
    <LightDarkModeBtn />
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeUnmount, onMounted } from "vue";
import Navbar from "@/components/FrontPages/Common/Navbar.vue";
import Banner from "@/components/FrontPages/Home/Banner.vue";
import KeyFeatures from "@/components/FrontPages/Common/KeyFeatures.vue";
import TailorYourDashboard from "@/components/FrontPages/Home/TailorYourDashboard.vue";
import Testimonials from "@/components/FrontPages/Home/Testimonials.vue";
import OurTeam from "@/components/FrontPages/Common/OurTeam.vue";
import FAQ from "@/components/FrontPages/Common/FAQ.vue";
import ContactUs from "@/components/FrontPages/Common/ContactUs.vue";
import CTA from "@/components/FrontPages/Common/CTA.vue";
import Footer from "@/components/FrontPages/Common/Footer.vue";
import LightDarkModeBtn from "@/components/FrontPages/Common/LightDarkModeBtn.vue";

export default defineComponent({
  name: "HomePage",
  components: {
    Navbar,
    Banner,
    KeyFeatures,
    TailorYourDashboard,
    Testimonials,
    OurTeam,
    FAQ,
    ContactUs,
    CTA,
    Footer,
    LightDarkModeBtn,
  },
  setup() {
    onMounted(() => {
      document.body.classList.add("padding-0");
    });
    onBeforeUnmount(() => {
      document.body.classList.remove("padding-0");
    });
  },
});
</script>
