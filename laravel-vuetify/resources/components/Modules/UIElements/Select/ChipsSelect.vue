<template>
    <v-select
        v-model="value"
        :items="items"
        chips
        label="Chips"
        multiple
    ></v-select>
</template>

<script>
export default {
    name: "ChipsSelect",
    data: () => ({
        items: ["foo", "bar", "fizz", "buzz"],
        value: ["foo", "bar", "fizz", "buzz"],
    }),
};
</script>
