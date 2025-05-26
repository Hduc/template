<template>
  <v-dialog max-width="800">
    <template v-slot:activator="{ props: activatorProps }">
      <button v-bind="activatorProps" class="add-new-card-btn">
        <i class="material-symbols-outlined">add</i>
        Add New Dish
      </button>
    </template>

    <template v-slot:default="{ isActive }">
      <div
        class="create-dialog-box border-radius d-block bg-white border-0 shadow-none"
      >
        <div class="title d-flex align-items-center justify-space-between">
          <h5 class="mb-0">Add New Dish</h5>
          <button
            class="close-btn bg-transparent p-0 border-none"
            @click="isActive.value = false"
          >
            <i class="ri-close-fill"></i>
          </button>
        </div>
        <form>
          <div class="row">
            <div class="col-md-4">
              <div class="trezo-form-group">
                <v-label class="d-block fw-medium text-black">
                  Dish Code
                </v-label>
                <v-text-field placeholder="E.g. #3215" required></v-text-field>
              </div>
            </div>
            <div class="col-md-4">
              <div class="trezo-form-group">
                <v-label class="d-block fw-medium text-black"> Name </v-label>
                <v-text-field
                  placeholder="E.g. Parsley Chicken"
                  required
                ></v-text-field>
              </div>
            </div>
            <div class="col-md-4">
              <div class="trezo-form-group">
                <v-label class="d-block fw-medium text-black"> Price </v-label>
                <v-text-field placeholder="E.g. $12.50" required></v-text-field>
              </div>
            </div>
            <div class="col-md-4">
              <div class="trezo-form-group">
                <v-label class="d-block fw-medium text-black">
                  Calorie
                </v-label>
                <v-text-field
                  placeholder="E.g. 3215 Kcal"
                  required
                ></v-text-field>
              </div>
            </div>
            <div class="col-md-4">
              <div class="trezo-form-group">
                <v-label class="d-block fw-medium text-black"> Carbs </v-label>
                <v-text-field placeholder="E.g. 525 gm" required></v-text-field>
              </div>
            </div>
            <div class="col-md-4">
              <div class="trezo-form-group">
                <v-label class="d-block fw-medium text-black">
                  Protein
                </v-label>
                <v-text-field placeholder="E.g. 125 gm" required></v-text-field>
              </div>
            </div>
            <div class="col-md-4">
              <div class="trezo-form-group">
                <v-label class="d-block fw-medium text-black"> Fibres </v-label>
                <v-text-field placeholder="E.g. 15 gm" required></v-text-field>
              </div>
            </div>
            <div class="col-md-4">
              <div class="trezo-form-group">
                <v-label class="d-block fw-medium text-black"> Fat </v-label>
                <v-text-field placeholder="E.g. 25 gm" required></v-text-field>
              </div>
            </div>
            <div class="col-md-4">
              <div class="trezo-form-group">
                <v-label class="d-block fw-medium text-black">
                  Vitamins
                </v-label>
                <v-text-field placeholder="E.g. 13 gm" required></v-text-field>
              </div>
            </div>
            <div class="col-md-6">
              <div class="trezo-form-group">
                <v-label class="d-block fw-medium text-black"> Sugar </v-label>
                <v-text-field placeholder="E.g. 214 gm" required></v-text-field>
              </div>
            </div>
            <div class="col-md-6">
              <div class="trezo-form-group">
                <v-label class="d-block fw-medium text-black">
                  Minerals
                </v-label>
                <v-text-field placeholder="E.g. 5 gm" required></v-text-field>
              </div>
            </div>
            <div class="col-md-6">
              <div class="trezo-form-group">
                <v-label class="d-block fw-medium text-black">
                  Ingredients Details
                </v-label>
                <v-text-field
                  placeholder="E.g. Parsley, chicken, mozzarella, buffalo sauce"
                  required
                ></v-text-field>
              </div>
            </div>
            <div class="col-md-6">
              <div class="trezo-form-group">
                <v-label class="d-block fw-medium text-black">
                  Order In Queue
                </v-label>
                <v-text-field placeholder="E.g. 17" required></v-text-field>
              </div>
            </div>

            <div class="col-md-12">
              <div class="trezo-form-group">
                <v-label class="d-block fw-medium text-black">
                  Upload Item Images
                </v-label>

                <FileUploader />
              </div>
            </div>
          </div>

          <div class="btn-box">
            <button @click="isActive.value = false" class="warn">Cancel</button>
            <button @click="isActive.value = false" class="primary">
              <i class="material-symbols-outlined"> add </i>
              Add Schedule
            </button>
          </div>
        </form>
      </div>
    </template>
  </v-dialog>
</template>

<script lang="ts">
import FileUploader from "@/components/Common/FileUploader.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "AddNewDish",
  components: {
    FileUploader,
  },
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
