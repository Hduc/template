<template>
    <v-card class="mb-25 trezo-card">
        <div class="v-card-header">
            <h5 class="mb-0">Basic Toolbar</h5>
        </div>
        <v-toolbar density="compact" class="pt-10 pb-10">
            <v-app-bar-nav-icon></v-app-bar-nav-icon>

            <v-toolbar-title>Title</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn icon>
                <v-icon>mdi-magnify</v-icon>
            </v-btn>

            <v-btn icon>
                <v-icon>mdi-heart</v-icon>
            </v-btn>

            <v-btn icon>
                <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
        </v-toolbar>
    </v-card>
</template>

<script>
export default {
    name: "BasicToolbar",
};
</script>
