<template>
    <v-select v-model="value" :items="items" label="Select Item" multiple>
        <template v-slot:selection="{ item, index }">
            <v-chip v-if="index < 2">
                <span>{{ item.title }}</span>
            </v-chip>
            <span
                v-if="index === 2"
                class="text-grey text-caption align-self-center"
            >
                (+{{ value.length - 2 }} others)
            </span>
        </template>
    </v-select>
</template>

<script>
export default {
    name: "SelectionSelect",
    data: () => ({
        items: ["foo", "bar", "fizz", "buzz", "fizzbuzz", "foobar"],
        value: ["foo", "bar", "fizz"],
    }),
};
</script>
