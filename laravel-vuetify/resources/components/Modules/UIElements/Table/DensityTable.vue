<template>
    <v-table density="compact">
        <thead>
            <tr>
                <th class="text-left">Name</th>
                <th class="text-left">Calories</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in desserts" :key="item.name">
                <td>{{ item.name }}</td>
                <td>{{ item.calories }}</td>
            </tr>
        </tbody>
    </v-table>
</template>

<script>
export default {
    name: "DensityTable",
    data() {
        return {
            desserts: [
                {
                    name: "Frozen Yogurt",
                    calories: 159,
                },
                {
                    name: "Ice cream sandwich",
                    calories: 237,
                },
                {
                    name: "Eclair",
                    calories: 262,
                },
                {
                    name: "Cupcake",
                    calories: 305,
                },
                {
                    name: "Gingerbread",
                    calories: 356,
                },
                {
                    name: "Jelly bean",
                    calories: 375,
                },
                {
                    name: "Lollipop",
                    calories: 392,
                },
                {
                    name: "Honeycomb",
                    calories: 408,
                },
                {
                    name: "Donut",
                    calories: 452,
                },
                {
                    name: "KitKat",
                    calories: 518,
                },
            ],
        };
    },
};
</script>

<style lang="scss" scoped>
.v-table > .v-table__wrapper > table > tbody > tr > td {
    height: 40px !important;
}
</style>
