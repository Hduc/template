<template>
    <v-card
        class="sales-by-country-card trezo-card border-radius d-block border-0 shadow-none"
    >
        <div class="v-card-header">
            <h5 class="mb-0">Sales By Country</h5>
            <v-menu>
                <template v-slot:activator="{ props }">
                    <button
                        type="button"
                        v-bind="props"
                        class="position-relative dot-btn p-0 bg-transparent border-none"
                    >
                        <i class="ri-more-fill"></i>
                    </button>
                </template>
                <v-list class="menu-content">
                    <button type="button" class="bg-transparent border-none">
                        This Day
                    </button>
                    <button type="button" class="bg-transparent border-none">
                        This Week
                    </button>
                    <button type="button" class="bg-transparent border-none">
                        This Month
                    </button>
                    <button type="button" class="bg-transparent border-none">
                        This Year
                    </button>
                </v-list>
            </v-menu>
        </div>

        <div class="image" style="margin: 50px 0">
            <v-img src="/images/map.svg" alt="map" />
        </div>

        <ul class="ps-0 mb-0 list-unstyled">
            <li class="mb-4 pb-4 border-bottom">
                <div class="d-flex align-items-center justify-content-between">
                    <div class="flex-shrink-0">
                        <div class="d-flex align-items-center">
                            <v-img
                                src="/images/united-states-3.png"
                                style="width: 24px"
                                alt="facebook"
                            />
                            <div class="ms-3">
                                <h4 class="mb-0 fs-12 fw-semibold lh-1">
                                    United States
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div class="flex-grow-1 ms-3">
                        <div
                            class="d-flex align-items-center justify-content-end"
                        >
                            <div
                                class="progress-responsive"
                                style="width: 120px"
                            >
                                <div
                                    class="progress rounded-pill"
                                    style="
                                        height: 8px;
                                        background-color: #ecf0ff;
                                    "
                                    role="progressbar"
                                    aria-label="Example with label"
                                    aria-valuenow="85"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                >
                                    <div
                                        class="progress-bar rounded-pill"
                                        style="
                                            width: 85%;
                                            height: 8px;
                                            background-color: #757dff;
                                        "
                                    ></div>
                                </div>
                            </div>
                            <span class="count text-body ms-3 fs-14 fw-medium"
                                >85%</span
                            >
                        </div>
                    </div>
                </div>
            </li>
            <li class="mb-4 pb-4 border-bottom">
                <div class="d-flex align-items-center justify-content-between">
                    <div class="flex-shrink-0">
                        <div class="d-flex align-items-center">
                            <v-img
                                src="/images/japan.png"
                                style="width: 24px"
                                alt="japan"
                            />
                            <div class="ms-3">
                                <h4 class="mb-0 fs-12 fw-semibold lh-1">
                                    Japan
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div class="flex-grow-1 ms-3">
                        <div
                            class="d-flex align-items-center justify-content-end"
                        >
                            <div
                                class="progress-responsive"
                                style="width: 120px"
                            >
                                <div
                                    class="progress rounded-pill"
                                    style="
                                        height: 8px;
                                        background-color: #ecf0ff;
                                    "
                                    role="progressbar"
                                    aria-label="Example with label"
                                    aria-valuenow="65"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                >
                                    <div
                                        class="progress-bar rounded-pill"
                                        style="
                                            width: 65%;
                                            height: 8px;
                                            background-color: #0f79f3;
                                        "
                                    ></div>
                                </div>
                            </div>
                            <span class="count text-body ms-3 fs-14 fw-medium"
                                >65%</span
                            >
                        </div>
                    </div>
                </div>
            </li>
            <li class="mb-4 pb-4 border-bottom">
                <div class="d-flex align-items-center justify-content-between">
                    <div class="flex-shrink-0">
                        <div class="d-flex align-items-center">
                            <v-img
                                src="/images/australia-2.png"
                                style="width: 24px"
                                alt="australia"
                            />
                            <div class="ms-3">
                                <h4 class="mb-0 fs-12 fw-semibold lh-1">
                                    Australia
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div class="flex-grow-1 ms-3">
                        <div
                            class="d-flex align-items-center justify-content-end"
                        >
                            <div
                                class="progress-responsive"
                                style="width: 120px"
                            >
                                <div
                                    class="progress rounded-pill"
                                    style="
                                        height: 8px;
                                        background-color: #ecf0ff;
                                    "
                                    role="progressbar"
                                    aria-label="Example with label"
                                    aria-valuenow="45"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                >
                                    <div
                                        class="progress-bar rounded-pill"
                                        style="
                                            width: 45%;
                                            height: 8px;
                                            background-color: #9135e8;
                                        "
                                    ></div>
                                </div>
                            </div>
                            <span class="count text-body ms-3 fs-14 fw-medium"
                                >45%</span
                            >
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div class="d-flex align-items-center justify-content-between">
                    <div class="flex-shrink-0">
                        <div class="d-flex align-items-center">
                            <v-img
                                src="/images/germany-2.png"
                                style="width: 24px"
                                alt="germany"
                            />
                            <div class="ms-3">
                                <h4 class="mb-0 fs-12 fw-semibold lh-1">
                                    Germany
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div class="flex-grow-1 ms-3">
                        <div
                            class="d-flex align-items-center justify-content-end"
                        >
                            <div
                                class="progress-responsive"
                                style="width: 120px"
                            >
                                <div
                                    class="progress rounded-pill"
                                    style="
                                        height: 8px;
                                        background-color: #ecf0ff;
                                    "
                                    role="progressbar"
                                    aria-label="Example with label"
                                    aria-valuenow="75"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                >
                                    <div
                                        class="progress-bar rounded-pill"
                                        style="
                                            width: 75%;
                                            height: 8px;
                                            background-color: #25b003;
                                        "
                                    ></div>
                                </div>
                            </div>
                            <span class="count text-body ms-3 fs-14 fw-medium"
                                >75%</span
                            >
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </v-card>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
    name: "SalesByCountry",
});
</script>

<style lang="scss" scoped>
.sales-by-country-card {
    .image {
        .v-responsive {
            justify-content: center;
        }
    }
}
</style>
