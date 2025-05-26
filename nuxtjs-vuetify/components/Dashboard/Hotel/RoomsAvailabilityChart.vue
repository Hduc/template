<template>
  <v-card
    class="rooms-availability-card trezo-card mb-25 border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0">Rooms Availabiliity</h5>
      <v-menu>
        <template v-slot:activator="{ props }">
          <button
            type="button"
            v-bind="props"
            class="card-header-menu d-inline-block border-radius border-0 bg-gray z-1"
          >
            {{ selectedPeriod }}
          </button>
        </template>
        <v-list class="menu-content">
          <v-list-item
            v-for="period in periods"
            :key="period"
            @click="changePeriod(period)"
          >
            <v-list-item-title>{{ period }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>

    <div class="trezo-card-content">
      <div class="chart">
        <apexchart
          v-if="isClient"
          type="radialBar"
          height="380"
          :options="roomsAvailability"
          :series="rooms"
        ></apexchart>
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "RoomsAvailabilityChart",
  setup() {
    const isClient = ref(false);
    const selectedPeriod = ref("Daily");
    const periods = ref(["Daily", "Weekly", "Monthly", "Yearly"]);
    const rooms = ref([72.5]); // Default value

    // Sample data for different periods
    const periodData = {
      Daily: [72.5],
      Weekly: [65.3],
      Monthly: [58.7],
      Yearly: [81.2],
    };

    const roomsAvailability = ref({
      chart: {
        height: 380,
        type: "radialBar",
      },
      plotOptions: {
        radialBar: {
          startAngle: -135,
          endAngle: 135,
          dataLabels: {
            name: {
              offsetY: -10,
              fontSize: "14px",
              fontFamily: "Inter",
              color: "#64748B",
              fontWeight: "400",
            },
            value: {
              fontSize: "36px",
              fontFamily: "Inter",
              color: "#3A4252",
              fontWeight: "700",
              formatter: function (val: string) {
                return val + "%";
              },
            },
          },
          track: {
            background: "#EEFFE5",
          },
        },
      },
      colors: ["#37D80A"],
      labels: ["Total Booked"],
      stroke: {
        dashArray: 7,
      },
    });

    const changePeriod = (period: string) => {
      selectedPeriod.value = period;
      // Update chart data based on selected period
      rooms.value = periodData[period as keyof typeof periodData];

      // You could also update other chart options if needed
      // roomsAvailability.value = {...}
    };

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      rooms,
      roomsAvailability,
      selectedPeriod,
      periods,
      changePeriod,
    };
  },
});
</script>

<style scoped lang="scss">
.rooms-availability-card {
  .trezo-card-content {
    margin: {
      left: -25px;
      right: -25px;
    }
    .chart {
      margin-top: -40px;
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .rooms-availability-card {
    .trezo-card-content {
      margin: {
        left: -17px;
        right: -17px;
      }
      .chart {
        margin-top: -30px;
      }
    }
  }
}

/* Min width 576px to Max width 767px */
@media only screen and (min-width: 576px) and (max-width: 767px) {
  .rooms-availability-card {
    .trezo-card-content {
      margin: {
        left: -20px;
        right: -20px;
      }
    }
  }
}
</style>
