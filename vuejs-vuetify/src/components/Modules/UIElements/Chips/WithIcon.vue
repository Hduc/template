<template>
  <v-card class="trezo-card">
    <div class="v-card-header mb-4">
      <h5 class="mb-0">Chips with Icon</h5>
    </div>
    <div class="text-center">
      <v-chip
        class="ma-2"
        color="indigo"
        text-color="white"
        prepend-icon="mdi-account-circle"
      >
        Mike
      </v-chip>

      <v-chip
        class="ma-2"
        color="orange"
        text-color="white"
        append-icon="mdi-star"
      >
        Premium
      </v-chip>

      <v-chip
        class="ma-2"
        color="primary"
        text-color="white"
        append-icon="mdi-cake-variant"
      >
        1 Year
      </v-chip>

      <v-chip class="ma-2" color="green" text-color="white">
        <template v-slot:prepend>
          <v-avatar class="green-darken-4"> 1 </v-avatar>
        </template>
        Years
      </v-chip>

      <v-chip
        class="ma-2"
        closable
        color="teal"
        text-color="white"
        prepend-icon="mdi-checkbox-marked-circle"
        :model-value="true"
      >
        Confirmed
      </v-chip>

      <v-chip
        class="ma-2"
        closable
        color="teal"
        text-color="white"
        close-icon="mdi-delete"
        prepend-icon="mdi-checkbox-marked-circle"
        :model-value="true"
      >
        Confirmed
      </v-chip>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "WithIcon",
};
</script>
