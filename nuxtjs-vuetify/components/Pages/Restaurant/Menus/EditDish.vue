<template>
  <v-dialog max-width="800">
    <template v-slot:activator="{ props: activatorProps }">
      <button type="button" v-bind="activatorProps">
        <i class="material-symbols-outlined"> edit </i>
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
                <v-text-field
                  placeholder="E.g. #3215"
                  required
                  :model-value="'#3215'"
                ></v-text-field>
              </div>
            </div>
            <div class="col-md-4">
              <div class="trezo-form-group">
                <v-label class="d-block fw-medium text-black"> Name </v-label>
                <v-text-field
                  placeholder="E.g. Parsley Chicken"
                  required
                  :model-value="'Parsley Chicken'"
                ></v-text-field>
              </div>
            </div>
            <div class="col-md-4">
              <div class="trezo-form-group">
                <v-label class="d-block fw-medium text-black"> Price </v-label>
                <v-text-field
                  placeholder="E.g. $12.50"
                  required
                  :model-value="'$12.50'"
                ></v-text-field>
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
                  :model-value="'3215 Kcal'"
                ></v-text-field>
              </div>
            </div>
            <div class="col-md-4">
              <div class="trezo-form-group">
                <v-label class="d-block fw-medium text-black"> Carbs </v-label>
                <v-text-field
                  placeholder="E.g. 525 gm"
                  required
                  :model-value="'525 gm'"
                ></v-text-field>
              </div>
            </div>
            <div class="col-md-4">
              <div class="trezo-form-group">
                <v-label class="d-block fw-medium text-black">
                  Protein
                </v-label>
                <v-text-field
                  placeholder="E.g. 125 gm"
                  required
                  :model-value="'125 gm'"
                ></v-text-field>
              </div>
            </div>
            <div class="col-md-4">
              <div class="trezo-form-group">
                <v-label class="d-block fw-medium text-black"> Fibres </v-label>
                <v-text-field
                  placeholder="E.g. 15 gm"
                  required
                  :model-value="'15 gm'"
                ></v-text-field>
              </div>
            </div>
            <div class="col-md-4">
              <div class="trezo-form-group">
                <v-label class="d-block fw-medium text-black"> Fat </v-label>
                <v-text-field
                  placeholder="E.g. 25 gm"
                  required
                  :model-value="'25 gm'"
                ></v-text-field>
              </div>
            </div>
            <div class="col-md-4">
              <div class="trezo-form-group">
                <v-label class="d-block fw-medium text-black">
                  Vitamins
                </v-label>
                <v-text-field
                  placeholder="E.g. 13 gm"
                  required
                  :model-value="'13 gm'"
                ></v-text-field>
              </div>
            </div>
            <div class="col-md-6">
              <div class="trezo-form-group">
                <v-label class="d-block fw-medium text-black"> Sugar </v-label>
                <v-text-field
                  placeholder="E.g. 214 gm"
                  required
                  :model-value="'214 gm'"
                ></v-text-field>
              </div>
            </div>
            <div class="col-md-6">
              <div class="trezo-form-group">
                <v-label class="d-block fw-medium text-black">
                  Minerals
                </v-label>
                <v-text-field
                  placeholder="E.g. 5 gm"
                  required
                  :model-value="'5 gm'"
                ></v-text-field>
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
                  :model-value="'Parsley, chicken, mozzarella, buffalo sauce'"
                ></v-text-field>
              </div>
            </div>
            <div class="col-md-6">
              <div class="trezo-form-group">
                <v-label class="d-block fw-medium text-black">
                  Order In Queue
                </v-label>
                <v-text-field
                  placeholder="E.g. 17"
                  required
                  :model-value="'17'"
                ></v-text-field>
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
  name: "EditDish",
  components: {
    FileUploader,
  },
});
</script>
