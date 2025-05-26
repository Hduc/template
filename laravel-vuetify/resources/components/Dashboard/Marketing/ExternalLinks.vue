<template>
    <v-card
        class="external-links-card trezo-card border-radius d-block border-0 shadow-none"
    >
        <div class="v-card-header">
            <h5 class="mb-0">External Links</h5>
        </div>

        <ul class="ps-0 mb-0 list-unstyled">
            <li
                class="d-flex justify-content-between align-items-center border-bottom pb-4 mb-4"
            >
                <div class="d-flex justify-content-between align-items-center">
                    <v-img
                        src="/images/google3.svg"
                        style="width: 18px"
                        alt="google3"
                    />
                    <span class="text-primary fw-medium ms-2"
                        >Google Ad Analytics</span
                    >
                </div>
                <a href="#" class="text-decoration-none text-body">
                    <i class="ri-external-link-line fs-20"></i>
                </a>
            </li>
            <li
                class="d-flex justify-content-between align-items-center border-bottom pb-4 mb-4"
            >
                <div class="d-flex justify-content-between align-items-center">
                    <v-img
                        src="/images/instagram2.svg"
                        style="width: 18px"
                        alt="google3"
                    />
                    <span class="text-primary fw-medium ms-2"
                        >Instagram Ads</span
                    >
                </div>
                <a href="#" class="text-decoration-none text-body">
                    <i class="ri-external-link-line fs-20"></i>
                </a>
            </li>
            <li class="d-flex justify-content-between align-items-center">
                <div class="d-flex justify-content-between align-items-center">
                    <v-img
                        src="/images/facebook4.svg"
                        style="width: 18px"
                        alt="google3"
                    />
                    <span class="text-primary fw-medium ms-2"
                        >Facebook Ads</span
                    >
                </div>
                <a href="#" class="text-decoration-none text-body">
                    <i class="ri-external-link-line fs-20"></i>
                </a>
            </li>
        </ul>
    </v-card>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
    name: "ExternalLinks",
});
</script>
