<template>
    <PageTitle pageTitle="Creators" subTitle="NFT Marketplace" />

    <FilterContent />
    <Creators />
</template>

<script>
import { defineComponent } from "vue";
import PageTitle from "../../components/Common/PageTitle.vue";
import FilterContent from "../../components/Pages/NFTMarketplace/Creators/FilterContent.vue";
import Creators from "../../components/Pages/NFTMarketplace/Creators/index.vue";

export default defineComponent({
    name: "CreatorsPage",
    components: {
        PageTitle,
        FilterContent,
        Creators,
    },
});
</script>
