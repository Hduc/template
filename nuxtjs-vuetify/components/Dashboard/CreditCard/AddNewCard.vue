<template>
  <v-dialog max-width="550px">
    <template v-slot:activator="{ props: activatorProps }">
      <button
        v-bind="activatorProps"
        class="add-btn d-inline-block transition fw-medium border-radius"
      >
        <i class="material-symbols-outlined">add</i>
        Add Card
      </button>
    </template>

    <template v-slot:default="{ isActive }">
      <div
        class="create-dialog-box border-radius d-block bg-white border-0 shadow-none"
      >
        <div class="title d-flex align-items-center justify-space-between">
          <h5 class="mb-0">Add New Card</h5>
          <button
            class="close-btn bg-transparent p-0 border-none"
            @click="isActive.value = false"
          >
            <i class="ri-close-fill"></i>
          </button>
        </div>
        <form>
          <div class="row">
            <div class="col-md-6">
              <div class="trezo-form-group">
                <v-label class="d-block fw-medium text-black">
                  Full Name
                </v-label>
                <v-text-field placeholder="Enter name" required></v-text-field>
              </div>
            </div>
            <div class="col-md-6">
              <div class="trezo-form-group">
                <v-label class="d-block fw-medium text-black">
                  Card Number
                </v-label>
                <v-text-field
                  placeholder="Enter card number"
                  required
                ></v-text-field>
              </div>
            </div>
            <div class="col-md-6">
              <div class="trezo-form-group">
                <v-label class="d-block fw-medium text-black">
                  Expiry Date
                </v-label>
                <v-text-field type="date" required></v-text-field>
              </div>
            </div>
            <div class="col-md-6">
              <div class="trezo-form-group">
                <v-label class="d-block fw-medium text-black"> CVV </v-label>
                <v-text-field placeholder="212" required></v-text-field>
              </div>
            </div>
          </div>

          <div class="btn-box">
            <button @click="isActive.value = false" class="warn">Cancel</button>
            <button @click="isActive.value = false" class="primary">
              <i class="material-symbols-outlined"> add </i>
              Add Card
            </button>
          </div>
        </form>
      </div>
    </template>
  </v-dialog>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AddNewCard",
});
</script>

<style lang="scss" scoped>
.add-new-card-btn {
  height: auto;
  min-width: auto;
  font-weight: 500;
  padding: 10px 13px 10px 35px;
  position: relative;
  border-radius: 7px;
  display: inline-block;
  color: var(--whiteColor);
  border: 1px solid var(--primaryColor);
  background-color: var(--primaryColor);

  i {
    top: 50%;
    left: 8px;
    font-size: 22px;
    position: absolute;
    transform: translateY(-50%);
  }
}
</style>
