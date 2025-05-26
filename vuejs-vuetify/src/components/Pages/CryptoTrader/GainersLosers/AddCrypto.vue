<template>
  <v-dialog max-width="550">
    <template v-slot:activator="{ props: activatorProps }">
      <button v-bind="activatorProps" class="add-new-btn mr-5">
        <i class="material-symbols-outlined">add</i>
        Add Crypto
      </button>
    </template>

    <template v-slot:default="{ isActive }">
      <div
        class="create-dialog-box border-radius d-block bg-white border-0 shadow-none"
      >
        <div class="title d-flex align-items-center justify-space-between">
          <h5 class="mb-0">Add New Crypto</h5>
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
                <v-label class="d-block fw-medium text-black"> Name </v-label>
                <v-text-field
                  label="Enter Name"
                  placeholder="Name"
                  required
                ></v-text-field>
              </div>
            </div>
            <div class="col-md-6">
              <div class="trezo-form-group">
                <v-label class="d-block fw-medium text-black"> Price </v-label>
                <v-text-field
                  label="Enter Price"
                  placeholder="Price"
                  required
                ></v-text-field>
              </div>
            </div>
            <div class="col-md-6">
              <div class="trezo-form-group">
                <v-label class="d-block fw-medium text-black"> 1h </v-label>
                <v-text-field
                  label="Enter 1h"
                  placeholder="1h"
                  required
                ></v-text-field>
              </div>
            </div>
            <div class="col-md-6">
              <div class="trezo-form-group">
                <v-label class="d-block fw-medium text-black"> 24h </v-label>
                <v-text-field
                  label="Enter 24h"
                  placeholder="24h"
                  required
                ></v-text-field>
              </div>
            </div>
            <div class="col-md-6">
              <div class="trezo-form-group">
                <v-label class="d-block fw-medium text-black"> 7d </v-label>
                <v-text-field
                  label="Enter 7d"
                  placeholder="7d"
                  required
                ></v-text-field>
              </div>
            </div>
            <div class="col-md-6">
              <div class="trezo-form-group">
                <v-label class="d-block fw-medium text-black">
                  Market Cap
                </v-label>
                <v-text-field
                  label="Enter Market Cap"
                  placeholder="Market Cap"
                  required
                ></v-text-field>
              </div>
            </div>
            <div class="col-md-12">
              <div class="trezo-form-group">
                <v-label class="d-block fw-medium text-black">
                  Volume (24h)
                </v-label>
                <v-text-field
                  label="Enter Volume (24h)"
                  placeholder="Volume (24h)"
                  required
                ></v-text-field>
              </div>
            </div>

            <div class="col-md-12">
              <div class="trezo-form-group">
                <v-label class="d-block fw-medium text-black"> Image </v-label>
                <FileUploader />
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
import FileUploader from "@/components/Common/FileUploader.vue";

export default defineComponent({
  name: "AddCrypto",
  components: {
    FileUploader,
  },
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
