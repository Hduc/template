<template>
  <div class="row">
    <div class="col-xxl-8 col-lg-7">
      <PagesEcommerceCreateOrderBillingInformation />
    </div>

    <div class="col-xxl-4 col-lg-5">
      <PagesEcommerceCreateOrderYourOrder />

      <PagesEcommerceCreateOrderPaymentMethod />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CreateOrder",
});
</script>
