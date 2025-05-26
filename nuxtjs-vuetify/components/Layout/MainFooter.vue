<template>
  <div class="footer-area text-center mt-25 bg-white border-top-radius">
    <p>
      ©
      <span>Trezo</span>
      is Proudly Owned by
      <a href="https://envytheme.com/" class="fw-semibold" target="_blank">
        EnvyTheme
      </a>
    </p>
  </div>
</template>

<script>
export default {
  name: "MainFooter",
};
</script>

<style lang="scss" scoped>
.footer-area {
  padding: 18.5px 30px;

  span {
    color: #ad63f6;
  }
  a {
    color: var(--primaryColor);
  }
}

/* Max width 991px */
@media only screen and (max-width: 991px) {
  .footer-area {
    p {
      padding: 10px 10px;
    }
  }
}
</style>
