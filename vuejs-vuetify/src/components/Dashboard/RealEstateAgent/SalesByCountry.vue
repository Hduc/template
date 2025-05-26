<template>
  <v-card
    class="properties-by-country-card trezo-card border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0">Sales By Country</h5>

      <v-menu>
        <template v-slot:activator="{ props }">
          <button
            type="button"
            v-bind="props"
            class="position-relative dot-btn p-0 bg-transparent border-none"
          >
            <i class="ri-more-2-fill"></i>
          </button>
        </template>

        <v-list class="menu-content">
          <button
            type="button"
            class="bg-transparent border-none"
            @click="setTimeRange('day')"
          >
            This Day
          </button>
          <button
            type="button"
            class="bg-transparent border-none"
            @click="setTimeRange('week')"
          >
            This Week
          </button>
          <button
            type="button"
            class="bg-transparent border-none"
            @click="setTimeRange('month')"
          >
            This Month
          </button>
          <button
            type="button"
            class="bg-transparent border-none"
            @click="setTimeRange('year')"
          >
            This Year
          </button>
        </v-list>
      </v-menu>
    </div>

    <div class="trezo-card-content">
      <div class="map-image">
        <v-img src="@/assets/images/map.svg" alt="map" />
      </div>
      <ul class="p-0 mb-0 list-unstyled">
        <li
          class="d-flex align-items-center justify-content-between"
          v-for="country in filteredCountries"
          :key="country.code"
        >
          <div class="flag d-flex align-items-center">
            <v-img :src="getFlagImage(country.code)" :alt="country.name" />
            <span class="d-block fw-medium text-body">
              {{ country.name }}
            </span>
          </div>
          <div class="percentage-progress d-flex align-items-center">
            <div
              class="progress trezo-progress w-100"
              role="progressbar"
              :aria-valuenow="country.percentage"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div
                class="progress-bar"
                :style="`width: ${country.percentage}%;`"
              ></div>
            </div>
            <span class="d-block"> {{ country.percentage }}% </span>
          </div>
        </li>
      </ul>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from "vue";

interface CountryData {
  code: string;
  name: string;
  percentage: number;
  color: string;
  timeRange: string[]; // which time ranges this data applies to
}

export default defineComponent({
  name: "SalesByCountry",
  props: {
    countries: {
      type: Array as () => CountryData[],
      required: false,
      default: () => [
        {
          code: "portugal",
          name: "Portugal",
          percentage: 85,
          color: "#757dff",
          timeRange: ["day", "week", "month", "year"],
        },
        {
          code: "germany",
          name: "Germany",
          percentage: 65,
          color: "#0f79f3",
          timeRange: ["day", "week", "month", "year"],
        },
        {
          code: "spain",
          name: "Spain",
          percentage: 45,
          color: "#9135e8",
          timeRange: ["week", "month", "year"],
        },
        {
          code: "canada",
          name: "Canada",
          percentage: 75,
          color: "#25b003",
          timeRange: ["month", "year"],
        },
        {
          code: "france",
          name: "France",
          percentage: 55,
          color: "#ff6b4a",
          timeRange: ["year"],
        },
      ],
    },
  },
  setup(props) {
    const currentTimeRange = ref<"day" | "week" | "month" | "year">("month");

    const filteredCountries = computed(() => {
      return props.countries
        .filter((country) => country.timeRange.includes(currentTimeRange.value))
        .sort((a, b) => b.percentage - a.percentage);
    });

    const setTimeRange = (range: "day" | "week" | "month" | "year") => {
      currentTimeRange.value = range;
      // You could also emit an event here if parent component needs to know
      // context.emit('time-range-changed', range);
    };

    const getFlagImage = (code: string): string => {
      // Assuming you have flag images named by country code
      return require(`@/assets/images/${code}.svg`);
    };

    return {
      currentTimeRange,
      filteredCountries,
      setTimeRange,
      getFlagImage,
    };
  },
});
</script>

<style lang="scss" scoped>
.properties-by-country-card {
  .trezo-card-content {
    .map-image {
      .v-img {
        justify-content: center;
      }
    }
    ul {
      margin-top: 25px;

      li {
        border-top: 1px solid var(--borderColor);
        padding: {
          top: 12px;
          bottom: 12px;
        }
        .flag {
          gap: 8px;

          .v-img {
            width: 24px;
          }
        }
        .percentage-progress {
          width: 150px;
          gap: 12px;

          .trezo-progress .percentage {
            font-size: 12px;
          }
          .progress,
          .progress-stacked {
            --bs-progress-height: 5px;
          }
        }
        &:last-child {
          border-bottom: 1px solid var(--borderColor);
        }
      }
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .properties-by-country-card {
    .trezo-card-content {
      ul {
        margin-top: 17px;

        li {
          padding: {
            top: 10px;
            bottom: 10px;
          }
          .percentage-progress {
            width: 130px;
          }
        }
      }
    }
  }
}

/* Min width 576px to Max width 767px */
@media only screen and (min-width: 576px) and (max-width: 767px) {
  .properties-by-country-card {
    .trezo-card-content {
      ul {
        margin-top: 20px;
      }
    }
  }
}
</style>
