<template>
    <PageTitle pageTitle="Explore All" subTitle="NFT Marketplace" />

    <PriceFilter />
    <ExploreAll />
</template>

<script>
import { defineComponent } from "vue";
import PageTitle from "../../components/Common/PageTitle.vue";
import PriceFilter from "../../components/Pages/NFTMarketplace/ExploreAll/PriceFilter.vue";
import ExploreAll from "../../components/Pages/NFTMarketplace/ExploreAll/index.vue";

export default defineComponent({
    name: "ExploreAllPage",
    components: {
        PageTitle,
        PriceFilter,
        ExploreAll,
    },
});
</script>
