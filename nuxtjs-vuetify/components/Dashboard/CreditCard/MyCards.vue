<template>
  <v-card
    class="my-cards-card trezo-card mb-25 border-radius d-block bg-white border-0 shadow-none"
    :style="{ 'background-image': `url(${debitCardBg})` }"
  >
    <div class="v-card-header">
      <h5 class="mb-0">My Cards</h5>

      <DashboardCreditCardAddNewCard />
    </div>

    <div class="trezo-card-content">
      <div class="row">
        <div class="col-sm-6">
          <div
            class="card-item border-radius bg-primary"
            :style="{ 'background-image': `url(${debitCard1})` }"
          >
            <div class="d-flex justify-content-between">
              <div class="title">
                <div class="d-block text-white text-xs">Credit Card</div>
                <v-img src="@/assets/images/board-1.png" alt="board" />
              </div>
              <div class="icon lh-1 text-white">
                <i class="ri-visa-fill"></i>
              </div>
            </div>
            <h5 class="text-white fw-semibold">**** **** **** 1784</h5>
            <div class="d-flex justify-content-between align-items-center">
              <span class="d-block lh-1 text-white"> Russell McCray </span>
              <span class="d-block lh-1 text-white text-xs"> EXP : 12/30 </span>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div
            class="card-item border-radius bg-primary"
            :style="{ 'background-image': `url(${debitCard2})` }"
          >
            <div class="d-flex justify-content-between">
              <div class="title">
                <div class="d-block text-white text-xs">Credit Card</div>
                <v-img src="@/assets/images/board-1.png" alt="board" />
              </div>
              <div class="icon lh-1 text-white">
                <i class="ri-mastercard-fill"></i>
              </div>
            </div>
            <h5 class="text-white fw-semibold">**** **** **** 1794</h5>
            <div class="d-flex justify-content-between align-items-center">
              <span class="d-block lh-1 text-white"> Russell McCray </span>
              <span class="d-block lh-1 text-white text-xs"> EXP : 12/30 </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import debitCardBg from "@/assets/images/debit-card-bg.jpg";
import debitCard1 from "@/assets/images/debit-card-2.jpg";
import debitCard2 from "@/assets/images/debit-card-3.jpg";

export default defineComponent({
  name: "MyCards",
  setup() {
    return {
      debitCardBg,
      debitCard1,
      debitCard2,
    };
  },
});
</script>

<style scoped lang="scss">
.my-cards-card {
  background: {
    position: center center;
    repeat: no-repeat;
    size: cover;
  }
  .trezo-card-content {
    .card-item {
      padding: 25px;
      background: {
        position: center center;
        repeat: no-repeat;
        size: cover;
      }
      .title {
        .v-img {
          margin-top: 12px;
        }
      }
      .icon {
        font-size: 35px;
      }
      h5 {
        margin: {
          bottom: 12px;
          top: 40px;
        }
      }
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .my-cards-card {
    padding-bottom: 0 !important;

    .trezo-card-content {
      .card-item {
        margin-bottom: 17px;
        padding: 20px;
      }
    }
  }
}

/* Min width 576px to Max width 767px */
@media only screen and (min-width: 576px) and (max-width: 767px) {
  .my-cards-card {
    padding-bottom: 20px !important;

    .trezo-card-content {
      .card-item {
        margin-bottom: 0;
      }
    }
  }
}
</style>
