<template>
  <div class="footers-area pb-125 position-relative z-2">
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-sm-6">
          <div class="footer-single-item mb-4">
            <a href="#" class="footer-logo d-inline-block mb-4">
              <img src="@/assets/images/landing/logo.svg" alt="logo" />
            </a>
            <p class="mb-4 pb-lg-2">
              With customizable dashboards tailored to your needs, collaborate
              effortlessly with your team and stay ahead with real-time updates.
            </p>

            <ul class="ps-0 mb-0 list-unstyled d-flex flex-wrap gap-3">
              <li>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  class="text-decoration-none fs-20 text-primary"
                >
                  <i class="ri-facebook-fill"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.twitter.com/"
                  target="_blank"
                  class="text-decoration-none fs-20 text-primary"
                >
                  <i class="ri-twitter-x-line"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  class="text-decoration-none fs-20 text-primary"
                >
                  <i class="ri-linkedin-fill"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.dribbble.com/"
                  target="_blank"
                  class="text-decoration-none fs-20 text-primary"
                >
                  <i class="ri-dribbble-line"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-3 col-sm-6">
          <div class="footer-single-item mb-4 ms-lg-5 ps-lg-5">
            <h3 class="mb-md-4 mb-3 fw-semibold">Our Products</h3>
            <ul class="ps-0 mb-0 list-unstyled">
              <li class="mb-2 pb-1">
                <a href="#" class="text-decoration-none">Trezo Dashboard</a>
              </li>
              <li class="mb-2 pb-1">
                <a href="#" class="text-decoration-none">Tagus Admin</a>
              </li>
              <li class="mb-2 pb-1">
                <a href="#" class="text-decoration-none">eCademy LMS</a>
              </li>
              <li class="mb-0">
                <a href="#" class="text-decoration-none">Admash Template</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-3 col-sm-6">
          <div class="footer-single-item mb-4 ms-lg-5 ps-lg-4">
            <h3 class="mb-md-4 mb-3 fw-semibold">Quick Links</h3>
            <ul class="ps-0 mb-0 list-unstyled">
              <li class="mb-2 pb-1">
                <RouterLink to="/" class="text-decoration-none">
                  Home
                </RouterLink>
              </li>
              <li class="mb-2 pb-1">
                <RouterLink to="/features" class="text-decoration-none">
                  Features
                </RouterLink>
              </li>
              <li class="mb-2 pb-1">
                <RouterLink to="/faq" class="text-decoration-none">
                  FAQ
                </RouterLink>
              </li>
              <li class="mb-0">
                <RouterLink to="/our-team" class="text-decoration-none">
                  Our Team
                </RouterLink>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-3 col-sm-6">
          <div class="footer-single-item mb-4">
            <h3 class="mb-md-4 mb-3 fw-semibold">Privacy Policy</h3>
            <ul class="ps-0 mb-0 list-unstyled">
              <li class="mb-2 pb-1">
                <a href="#" class="text-decoration-none">Terms & Conditions</a>
              </li>
              <li class="mb-2 pb-1">
                <a href="#" class="text-decoration-none">Cookie Policy</a>
              </li>
              <li class="mb-2 pb-1">
                <a href="#" class="text-decoration-none">
                  Notice at Collection
                </a>
              </li>
              <li class="mb-0">
                <a href="#" class="text-decoration-none">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Footer",
});
</script>
