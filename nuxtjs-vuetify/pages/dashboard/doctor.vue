<template>
  <DashboardDoctorWelcome />

  <div class="doctor-content">
    <DashboardDoctorStats />

    <v-row>
      <v-col lg="8">
        <v-row>
          <v-col lg="6" md="6">
            <DashboardDoctorPatientRetentionChart />
          </v-col>
          <v-col lg="6" md="6">
            <DashboardDoctorPatientDistributionChart />
          </v-col>
          <v-col lg="12">
            <DashboardDoctorUpgradePlan />

            <DashboardDoctorIncomeExpenseChart />
          </v-col>
        </v-row>
      </v-col>
      <v-col lg="4">
        <DashboardDoctorTodaySchedule />
      </v-col>
      <v-col lg="9">
        <DashboardDoctorMyRecentPatients />
      </v-col>
      <v-col lg="3">
        <DashboardDoctorRecentLabReports />
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "DoctorPage",
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
