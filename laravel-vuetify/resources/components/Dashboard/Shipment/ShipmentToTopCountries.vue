<template>
    <v-card
        class="shipment-to-top-countries-card trezo-card border-radius d-block border-0 shadow-none bg-primary"
    >
        <h5
            class="text-white mx-auto mb-4 text-center"
            style="max-width: 230px; line-height: 1.5"
        >
            Shipment to top countries around the world
        </h5>

        <div class="image" style="margin: 30px 0">
            <v-img src="/images/map.svg" alt="map" />
        </div>

        <div class="row">
            <div class="col-sm-6">
                <div class="d-flex align-items-center mt-3">
                    <v-img
                        src="/images/united-states-2.png"
                        class="rounded-circle"
                        style="width: 16px"
                        alt="united-states"
                    />
                    <span class="text-white ms-2">United States 85%</span>
                </div>
            </div>
            <div class="col-sm-6">
                <div class="d-flex align-items-center mt-3">
                    <v-img
                        src="/images/germany-2.png"
                        class="rounded-circle"
                        style="width: 16px"
                        alt="germany"
                    />
                    <span class="text-white ms-2">Germany 75%</span>
                </div>
            </div>
            <div class="col-sm-6">
                <div class="d-flex align-items-center mt-3">
                    <v-img
                        src="/images/united-kingdom-2.png"
                        class="rounded-circle"
                        style="width: 16px"
                        alt="united-kingdom"
                    />
                    <span class="text-white ms-2">United Kingdom 40%</span>
                </div>
            </div>
            <div class="col-sm-6">
                <div class="d-flex align-items-center mt-3">
                    <v-img
                        src="/images/canada-2.png"
                        class="rounded-circle"
                        style="width: 16px"
                        alt="canada"
                    />
                    <span class="text-white ms-2">Canada 10%</span>
                </div>
            </div>
            <div class="col-sm-6">
                <div class="d-flex align-items-center mt-3">
                    <v-img
                        src="/images/portugal.svg"
                        class="rounded-circle"
                        style="width: 16px"
                        alt="portugal"
                    />
                    <span class="text-white ms-2">Portugal 05%</span>
                </div>
            </div>
            <div class="col-sm-6">
                <div class="d-flex align-items-center mt-3">
                    <v-img
                        src="/images/spain.svg"
                        class="rounded-circle"
                        style="width: 16px"
                        alt="spain"
                    />
                    <span class="text-white ms-2">Spain 15%</span>
                </div>
            </div>
            <div class="col-sm-6">
                <div class="d-flex align-items-center mt-3">
                    <v-img
                        src="/images/france.svg"
                        class="rounded-circle"
                        style="width: 16px"
                        alt="france"
                    />
                    <span class="text-white ms-2">France 25%</span>
                </div>
            </div>
            <div class="col-sm-6">
                <div class="d-flex align-items-center mt-3">
                    <v-img
                        src="/images/australia.png"
                        class="rounded-circle"
                        style="width: 16px"
                        alt="australia"
                    />
                    <span class="text-white ms-2">Australia 55%</span>
                </div>
            </div>
        </div>
    </v-card>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
    name: "ShipmentToTopCountries",
});
</script>

<style lang="scss" scoped>
.shipment-to-top-countries-card {
    .image {
        .v-responsive {
            justify-content: center;
        }
    }
    &.bg-primary {
        background-color: var(--primaryColor) !important;
    }
}
</style>
