<template>
    <div class="privacy-policy-card">
        <h5>Security :</h5>
        <span class="title fw-semibold text-black d-block">
            Two-factor Authentication
        </span>
        <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of.
        </p>
        <span class="title fw-semibold text-black d-block">
            Secondary Verification
        </span>
        <p>
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets
            containing.
        </p>
        <span class="title fw-semibold text-black d-block"> Backup Codes </span>
        <p>
            Lorem Ipsum passages, and more recently with desktop publishing
            software like Aldus PageMaker including versions of lorem ipsum.
        </p>
        <span class="title fw-semibold text-black d-block">
            Desktop, Email, Chat, Purchase Notifications
        </span>
        <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters.
        </p>
        <span class="title fw-semibold text-black d-block">
            Delete This Account :
        </span>
        <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
        </p>
        <div class="form-btn-box">
            <button type="button" class="warn">Cancel</button>
            <button type="button" class="primary">
                <i class="material-symbols-outlined"> close </i>
                Close & Delete This Account
            </button>
        </div>
    </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Content",
});
</script>

<style lang="scss" scoped>
.privacy-policy-card {
    h5 {
        margin-bottom: 22px;
    }
    .title {
        margin-bottom: 10px;

        &:not(:first-child) {
            margin-top: 22px;
        }
    }
    .form-btn-box {
        margin-top: 20px;
    }
}
</style>
