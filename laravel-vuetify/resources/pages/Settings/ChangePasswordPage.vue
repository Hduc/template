<template>
    <PageTitle pageTitle="Change Password" subTitle="Settings" />

    <ChangePassword />
</template>

<script>
import { defineComponent } from "vue";
import PageTitle from "../../components/Common/PageTitle.vue";
import ChangePassword from "../../components/Others/Settings/ChangePassword/index.vue";

export default defineComponent({
    name: "ChangePasswordPage",
    components: {
        PageTitle,
        ChangePassword,
    },
});
</script>
