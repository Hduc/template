<template>
    <v-form v-model="form" @submit.prevent="onSubmit">
        <v-text-field
            v-model="email"
            :readonly="loading"
            :rules="[required]"
            class="mb-2"
            clearable
            label="Email"
        ></v-text-field>

        <v-text-field
            v-model="password"
            :readonly="loading"
            :rules="[required]"
            clearable
            label="Password"
            placeholder="Enter your password"
        ></v-text-field>

        <br />

        <v-btn
            :disabled="!form"
            :loading="loading"
            block
            color="success"
            size="large"
            type="submit"
            variant="elevated"
        >
            Sign In
        </v-btn>
    </v-form>
</template>

<script>
export default {
    name: "FormsTextField",
    data: () => ({
        form: false,
        email: null,
        password: null,
        loading: false,
    }),

    methods: {
        onSubmit() {
            if (!this.form) return;

            this.loading = true;

            setTimeout(() => (this.loading = false), 2000);
        },
        required(v) {
            return !!v || "Field is required";
        },
    },
};
</script>
