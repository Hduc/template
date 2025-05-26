<template>
    <PageTitle pageTitle="Events List" subTitle="Events" />

    <EventsList />
</template>

<script>
import { defineComponent } from "vue";
import PageTitle from "../../components/Common/PageTitle.vue";
import EventsList from "../../components/Pages/Events/EventsList/index.vue";

export default defineComponent({
    name: "EventsPage",
    components: {
        PageTitle,
        EventsList,
    },
});
</script>
