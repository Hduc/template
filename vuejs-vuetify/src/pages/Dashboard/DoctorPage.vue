<template>
  <DoctorWelcome />

  <div class="doctor-content">
    <Stats />

    <v-row>
      <v-col lg="8">
        <v-row>
          <v-col lg="6" md="6">
            <PatientRetentionChart />
          </v-col>
          <v-col lg="6" md="6">
            <PatientDistributionChart />
          </v-col>
          <v-col lg="12">
            <UpgradePlan />

            <IncomeExpenseChart />
          </v-col>
        </v-row>
      </v-col>
      <v-col lg="4">
        <TodaySchedule />
      </v-col>
      <v-col lg="9">
        <MyRecentPatients />
      </v-col>
      <v-col lg="3">
        <RecentLabReports />
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DoctorWelcome from "@/components/Dashboard/Doctor/DoctorWelcome.vue";
import Stats from "@/components/Dashboard/Doctor/Stats/index.vue";
import PatientRetentionChart from "@/components/Dashboard/Doctor/PatientRetentionChart.vue";
import PatientDistributionChart from "@/components/Dashboard/Doctor/PatientDistributionChart.vue";
import UpgradePlan from "@/components/Dashboard/Doctor/UpgradePlan.vue";
import IncomeExpenseChart from "@/components/Dashboard/Doctor/IncomeExpenseChart.vue";
import TodaySchedule from "@/components/Dashboard/Doctor/TodaySchedule.vue";
import MyRecentPatients from "@/components/Dashboard/Doctor/MyRecentPatients.vue";
import RecentLabReports from "@/components/Dashboard/Doctor/RecentLabReports.vue";

export default defineComponent({
  name: "DoctorPage",
  components: {
    DoctorWelcome,
    Stats,
    PatientRetentionChart,
    PatientDistributionChart,
    UpgradePlan,
    IncomeExpenseChart,
    TodaySchedule,
    MyRecentPatients,
    RecentLabReports,
  },
});
</script>

<style lang="scss" scoped>
.doctor-content {
  padding: {
    left: 30px;
    right: 30px;
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .doctor-content {
    padding: {
      left: 0;
      right: 0;
    }
  }
}

/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .doctor-content {
    padding: {
      left: 0;
      right: 0;
    }
  }
}

/* Min width 992px to Max width 1199px */
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .doctor-content {
    padding: {
      left: 0;
      right: 0;
    }
  }
}

/* Min width 1200px to Max width 1399px */
@media only screen and (min-width: 1200px) and (max-width: 1399px) {
  .doctor-content {
    padding: {
      left: 0;
      right: 0;
    }
  }
}

/* Min width 1600px */
@media only screen and (min-width: 1600px) {
  .doctor-content {
    padding: {
      left: 80px;
      right: 80px;
    }
  }
}
</style>
