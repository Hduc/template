<template>
    <SignIn />
</template>

<script>
import { defineComponent } from "vue";
import SignIn from "../../components/Modules/Authentication/SignIn/index.vue";

export default defineComponent({
    name: "SignInPage",
    components: {
        SignIn,
    },
});
</script>
