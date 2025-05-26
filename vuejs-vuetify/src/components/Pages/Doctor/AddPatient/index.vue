<template>
  <form>
    <v-card
      class="trezo-card trezo-card mb-25 bg-white border-radius d-block border-0 shadow-none"
    >
      <div class="trezo-card-content">
        <div class="row">
          <div class="col-sm-12">
            <div class="trezo-form-group">
              <v-label class="d-block fw-medium text-black"> ID </v-label>
              <v-text-field
                label="Enter your ID"
                placeholder="Enter ID"
                required
              ></v-text-field>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="trezo-form-group">
              <v-label class="d-block fw-medium text-black">
                First Name
              </v-label>
              <v-text-field
                label="Enter your first name"
                placeholder="First Name"
                required
              ></v-text-field>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="trezo-form-group">
              <v-label class="d-block fw-medium text-black">
                Last Name
              </v-label>
              <v-text-field
                label="Enter your last name"
                placeholder="Last Name"
                required
              ></v-text-field>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="trezo-form-group">
              <v-label class="d-block fw-medium text-black">
                Email Address
              </v-label>
              <v-text-field
                label="Enter your email address"
                placeholder="Email Address"
                type="email"
                required
              ></v-text-field>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="trezo-form-group">
              <v-label class="d-block fw-medium text-black">
                Phone Number
              </v-label>
              <v-text-field
                label="Enter your phone number"
                placeholder="Phone Number"
                required
              ></v-text-field>
            </div>
          </div>
          <div class="col-sm-12">
            <div class="trezo-form-group">
              <v-label class="d-block fw-medium text-black">
                Disease Description
              </v-label>

              <TextEditor />
            </div>
          </div>
          <div class="col-sm-12">
            <div class="trezo-form-group">
              <v-label class="d-block fw-medium text-black">
                Appointment Date
              </v-label>

              <v-text-field type="date" class="date-input"> </v-text-field>
            </div>
          </div>
          <div class="col-sm-12">
            <div class="trezo-form-group mb-0">
              <v-label class="d-block fw-medium text-black">
                Add Avatar
              </v-label>

              <FileUploader />
            </div>
          </div>
        </div>
      </div>
    </v-card>

    <div class="btn-box">
      <button type="button" class="warn">Cancel</button>
      <button type="button" class="primary">
        <i class="material-symbols-outlined"> add </i>
        Create Patient
      </button>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TextEditor from "@/components/Common/TextEditor.vue";
import FileUploader from "@/components/Common/FileUploader.vue";

export default defineComponent({
  name: "AddPatient",
  components: {
    TextEditor,
    FileUploader,
  },
});
</script>

<style lang="scss" scoped>
.btn-box {
  button {
    height: auto;
    min-width: auto;
    font-weight: 500;
    margin-right: 15px;
    border-radius: 7px;
    padding: 10px 26.5px;
    display: inline-block;

    &.warn {
      color: var(--whiteColor);
      background-color: var(--dangerColor);
    }
    &.primary {
      color: var(--whiteColor);
      background-color: var(--primaryColor);
      padding-left: 45px;
      position: relative;

      i {
        left: 20px;
        top: 50%;
        font-size: 20px;
        position: absolute;
        transform: translateY(-50%);
      }
    }
    &:last-child {
      margin-right: 0;
    }
  }
}
</style>
