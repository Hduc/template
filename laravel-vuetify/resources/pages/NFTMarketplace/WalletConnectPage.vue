<template>
    <PageTitle pageTitle="Wallet Connect" subTitle="NFT Marketplace" />

    <WalletConnect />
</template>

<script>
import { defineComponent } from "vue";
import PageTitle from "../../components/Common/PageTitle.vue";
import WalletConnect from "../../components/Pages/NFTMarketplace/WalletConnect/index.vue";

export default defineComponent({
    name: "WalletConnectPage",
    components: {
        PageTitle,
        WalletConnect,
    },
});
</script>
