<template>
  <div class="terms-conditions-card">
    <span class="title fw-semibold text-black d-block">
      Desktop, Email, Chat, Purchase Notifications
    </span>
    <p>
      It is a long established fact that a reader will be distracted by the
      readable content of a page when looking at its layout. The point of using
      Lorem Ipsum is that it has a more-or-less normal distribution of letters.
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book.
    </p>
    <span class="title fw-semibold text-black d-block">
      Delete This Account :
    </span>
    <p>
      There are many variations of passages of Lorem Ipsum available, but the
      majority have suffered alteration in some form, by injected humour, or
      randomised words which don't look even slightly believable.
    </p>
    <span class="title fw-semibold text-black d-block">
      Two-factor Authentication
    </span>
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of.
    </p>
    <span class="title fw-semibold text-black d-block">
      Secondary Verification
    </span>
    <p>
      It has survived not only five centuries, but also the leap into electronic
      typesetting, remaining essentially unchanged. It was popularised in the
      1960s with the release of Letraset sheets containing.
    </p>
    <span class="title fw-semibold text-black d-block"> Backup Codes </span>
    <p>
      Lorem ipsum passages, and more recently with desktop publishing software
      like Aldus PageMaker including versions of lorem ipsum. Lorem Ipsum is
      simply dummy text of the printing and typesetting industry. Lorem Ipsum
      has been the industry's standard dummy text ever since the 1500s, when an
      unknown printer took a galley of type and scrambled it to make a type
      specimen book.
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Content",
});
</script>

<style lang="scss" scoped>
.terms-conditions-card {
  .title {
    margin-bottom: 10px;

    &:not(:first-child) {
      margin-top: 22px;
    }
  }
}
</style>
