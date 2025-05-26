<template>
  <v-card
    class="quick-transfer-card trezo-card mb-25 border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0">Quick Transfer</h5>
    </div>

    <div class="trezo-card-content">
      <form>
        <div class="form-group">
          <label class="form-label text-xs"> Card Number </label>
          <input
            type="text"
            class="form-control border bg-white fw-semibold"
            value="**** **** **** 1580"
          />
        </div>
        <div class="form-group position-relative">
          <label class="form-label text-xs"> Transfer Amount </label>
          <input
            type="text"
            class="form-control border bg-white fw-semibold"
            value="$1,580"
          />
          <button
            type="button"
            class="send-btn p-0 transition d-flex align-items-center justify-content-center border-0 border-radius"
          >
            <i class="material-symbols-outlined"> send_money </i>
          </button>
        </div>
      </form>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "QuickTransfer",
});
</script>

<style lang="scss" scoped>
.quick-transfer-card {
  .trezo-card-content {
    form {
      .form-group {
        margin-bottom: 20px;

        label {
          margin-bottom: 8px;
          display: block;
        }
        .form-control {
          font-size: 16px;
          height: 51px;
          width: 100%;
          padding: 0.375rem 0.75rem;
        }
        .send-btn {
          right: 0;
          bottom: 0;
          width: 51px;
          height: 51px;
          position: absolute;
          color: var(--whiteColor);
          background-color: var(--primaryColor);

          i {
            font-size: 20px;
          }
          &:hover {
            background-color: var(--secondaryColor);
          }
        }
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .quick-transfer-card {
    .trezo-card-content {
      form {
        .form-group {
          margin-bottom: 17px;
        }
      }
    }
  }
}
</style>
