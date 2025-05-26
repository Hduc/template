<template>
  <v-dialog max-width="550">
    <template v-slot:activator="{ props: activatorProps }">
      <button v-bind="activatorProps" class="add-new-btn">
        <i class="material-symbols-outlined">add</i>
        Add Wallet
      </button>
    </template>

    <template v-slot:default="{ isActive }">
      <div
        class="create-dialog-box border-radius d-block bg-white border-0 shadow-none"
      >
        <div class="title d-flex align-items-center justify-space-between">
          <h5 class="mb-0">Add New Wallet</h5>
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
                  Wallet Name
                </v-label>
                <v-text-field
                  label="Enter Wallet Name"
                  placeholder="Wallet Name"
                  required
                ></v-text-field>
              </div>
            </div>
            <div class="col-md-6">
              <div class="trezo-form-group">
                <v-label class="d-block fw-medium text-black">
                  Wallet Address
                </v-label>
                <v-text-field
                  label="Enter Wallet Address"
                  placeholder="Wallet Address"
                  required
                ></v-text-field>
              </div>
            </div>
            <div class="col-md-6">
              <div class="trezo-form-group">
                <v-label class="d-block fw-medium text-black">
                  Crypto Asset
                </v-label>
                <v-text-field
                  label="Enter Crypto Asset"
                  placeholder="Crypto Asset"
                  required
                ></v-text-field>
              </div>
            </div>
            <div class="col-md-6">
              <div class="trezo-form-group">
                <v-label class="d-block fw-medium text-black">
                  Balance
                </v-label>
                <v-text-field
                  label="Enter Balance"
                  placeholder="Balance"
                  required
                ></v-text-field>
              </div>
            </div>
            <div class="col-md-6">
              <div class="trezo-form-group">
                <v-label class="d-block fw-medium text-black">
                  Last Transaction Date
                </v-label>
                <v-text-field
                  label="Enter Last Transaction Date"
                  placeholder="Last Transaction Date"
                  required
                ></v-text-field>
              </div>
            </div>
            <div class="col-md-6">
              <div class="trezo-form-group">
                <v-label class="d-block fw-medium text-black"> Status </v-label>
                <v-select label="Select" :items="['Active', 'Inactive']">
                </v-select>
              </div>
            </div>
          </div>
          <div class="btn-box">
            <button @click="isActive.value = false" class="warn">Cancel</button>
            <button @click="isActive.value = false" class="primary">
              <i class="material-symbols-outlined"> add </i>
              Create
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
  name: "AddWallet",
});
</script>

<style lang="scss" scoped>
.add-new-btn {
  height: auto;
  min-width: auto;
  font-weight: 500;
  padding: 6px 13px 6px 35px;
  position: relative;
  border-radius: 7px;
  display: inline-block;
  color: var(--primaryColor);
  border: 1px solid var(--primaryColor);

  i {
    top: 50%;
    left: 8px;
    font-size: 22px;
    position: absolute;
    transform: translateY(-50%);
  }
}
</style>
