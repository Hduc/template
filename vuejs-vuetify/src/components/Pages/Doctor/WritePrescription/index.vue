<template>
  <v-card
    class="write-prescription-card trezo-card bg-white border-radius d-block border-0 shadow-none"
  >
    <div class="trezo-card-content">
      <div class="doctor-info d-md-flex justify-content-between">
        <div>
          <h4 class="fw-semibold">Dr. Walter White</h4>
          <span class="d-block"> MBBS, MD, MS (Reg No: 321456) </span>
          <span class="d-block text-black"> Mobile No: +321 4567 5643 </span>
        </div>
        <div>
          <v-img src="@/assets/images/logo.svg" class="logo" alt="logo" />
          <v-img
            src="@/assets/images/white-logo.svg"
            class="logo d-none"
            alt="logo"
          />
          <span class="d-block"> S. Arrowhead Court Branford9 </span>
          <span class="d-block"> +1 444 266 5599 </span>
        </div>
      </div>

      <form>
        <div class="row">
          <div class="col-sm-12">
            <div class="trezo-form-group">
              <v-label class="d-block fw-medium text-black">
                Select Date
              </v-label>

              <v-text-field type="date" class="date-input"> </v-text-field>
            </div>
          </div>
          <div class="col-sm-12">
            <div class="trezo-form-group">
              <v-label class="d-block fw-medium text-black">
                Patient ID
              </v-label>
              <v-text-field
                label="Enter patient ID"
                placeholder="Patient ID"
                required
              ></v-text-field>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="trezo-form-group">
              <v-label class="d-block fw-medium text-black">
                Patient First Name
              </v-label>
              <v-text-field
                label="Enter patient first name"
                placeholder="Patient First Name"
                required
              ></v-text-field>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="trezo-form-group">
              <v-label class="d-block fw-medium text-black">
                Patient Last Name
              </v-label>
              <v-text-field
                label="Enter patient last name"
                placeholder="Patient Last Name"
                required
              ></v-text-field>
            </div>
          </div>
          <div class="col-sm-12">
            <div class="trezo-form-group">
              <v-label class="d-block fw-medium text-black">
                Patient Address
              </v-label>
              <v-text-field
                label="Enter patient address"
                placeholder="Patient Address"
                required
              ></v-text-field>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="trezo-form-group">
              <v-label class="d-block fw-medium text-black">
                Temperature (Farenhite)
              </v-label>
              <v-text-field
                label="Enter temperature (farenhite)"
                placeholder="Temperature (Farenhite)"
                required
              ></v-text-field>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="trezo-form-group">
              <v-label class="d-block fw-medium text-black">
                Blood Pressure
              </v-label>
              <v-text-field
                label="Enter blood pressure"
                placeholder="Blood Pressure"
                required
              ></v-text-field>
            </div>
          </div>
        </div>
        <div class="trezo-table basic-table table-responsive">
          <table class="table mb-0">
            <thead>
              <tr>
                <th
                  scope="col"
                  class="fw-normal text-body position-relative z-1"
                  style="width: 33%"
                >
                  Medicine Name
                </th>
                <th
                  scope="col"
                  class="fw-normal text-body position-relative z-1"
                  style="width: 33%"
                >
                  Dosage
                </th>
                <th
                  scope="col"
                  class="fw-normal text-body position-relative z-1"
                  style="width: 33%"
                >
                  Duration
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div class="trezo-form-group">
                    <v-text-field
                      placeholder="Enter Medicine Name"
                      required
                    ></v-text-field>
                  </div>
                </td>
                <td>
                  <div class="trezo-form-group">
                    <v-text-field
                      placeholder="Morning: 01 Tablet"
                      required
                    ></v-text-field>
                  </div>
                  <div class="trezo-form-group">
                    <v-text-field
                      placeholder="Night: 01 Tablet"
                      required
                    ></v-text-field>
                  </div>
                </td>
                <td>
                  <div class="trezo-form-group">
                    <v-text-field
                      placeholder="Enter Total Days"
                      required
                    ></v-text-field>
                  </div>
                  <div class="trezo-form-group">
                    <v-text-field
                      placeholder="Enter Total Tablets"
                      required
                    ></v-text-field>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="btn-box">
                    <button type="button" class="primary">
                      <i class="material-symbols-outlined"> add </i>
                      Add More Medicine
                    </button>
                  </div>
                </td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="row">
          <div class="col-sm-12">
            <div class="trezo-form-group">
              <v-label class="d-block fw-medium text-black"> Advice </v-label>
              <v-textarea placeholder="It makes me feel..."></v-textarea>
            </div>
          </div>
          <div class="col-sm-12">
            <div class="trezo-form-group">
              <v-label class="d-block fw-medium text-black">
                Upload Signature
              </v-label>

              <FileUploader />
            </div>
          </div>
        </div>

        <div class="btn-box form-btn-box">
          <button type="button" class="warn">Cancel</button>
          <button type="button" class="primary">
            <i class="material-symbols-outlined"> add </i>
            Create Product
          </button>
        </div>
      </form>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FileUploader from "@/components/Common/FileUploader.vue";

export default defineComponent({
  name: "WritePrescription",
  components: {
    FileUploader,
  },
});
</script>

<style lang="scss" scoped>
.write-prescription-card {
  .trezo-card-content {
    .doctor-info {
      border-bottom: 1px solid var(--borderColor);
      padding: {
        left: 25px;
        right: 25px;
        bottom: 23px;
      }
      margin: {
        left: -25px;
        right: -25px;
        bottom: 34px;
      }
      h4 {
        font-size: 20px;
        margin-bottom: 8px;
      }
      span {
        font-size: 16px;
        margin-top: 5px;
      }
      .logo {
        margin-bottom: 5px;
      }
    }
    .basic-table {
      margin: {
        left: -25px;
        right: -25px;
        bottom: 25px;
      }
      .table {
        thead {
          tr {
            background-color: transparent !important;
            th {
              border-radius: 0;
              background-color: transparent;
              text-align: left;
              border: {
                top: 1px solid var(--borderColor);
                bottom: 1px solid var(--borderColor);
              }
              padding: {
                top: 14px;
                bottom: 14px;
              }
              &::before {
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                z-index: -1;
                content: "";
                position: absolute;
                background-color: #f6f7f9;
                margin: {
                  top: 4px;
                  bottom: 4px;
                }
              }
              &:first-child {
                padding-left: 25px !important;
              }
              &:last-child {
                padding-right: 25px !important;
              }
            }
          }
        }
        tbody {
          tr {
            td {
              border-width: 0;
              vertical-align: top;
              border-bottom-width: 1px;

              .trezo-form-group {
                margin-bottom: 10px;

                &:last-child {
                  margin-bottom: 0;
                }
              }
              &:first-child {
                padding-left: 25px !important;
              }
              &:last-child {
                padding-right: 25px !important;
              }
            }
          }
        }
      }
    }
    .form-btn-box {
      text-align: end;
    }
  }
}
.btn-box {
  button {
    height: auto;
    min-width: auto;
    font-weight: 500;
    margin-right: 15px;
    border-radius: 7px;
    padding: 15px 26.5px;
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

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .write-prescription-card {
    .trezo-card-content {
      .doctor-info {
        padding: {
          left: 17px;
          right: 17px;
          bottom: 17px;
        }
        margin: {
          left: -17px;
          right: -17px;
          bottom: 17px;
        }
        h4 {
          font-size: 20px;
          margin-bottom: 5px;
        }
        span {
          font-size: 14px;
          margin-top: 4px;
        }
        .logo {
          margin-top: 17px;
        }
      }
      .basic-table {
        margin: {
          left: -17px;
          right: -17px;
          bottom: 17px;
        }
        .table {
          thead {
            tr {
              th {
                padding: {
                  top: 12px;
                  bottom: 12px;
                }
                &::before {
                  margin: {
                    top: 2px;
                    bottom: 2px;
                  }
                }
                &:first-child {
                  padding-left: 17px !important;
                }
                &:last-child {
                  padding-right: 17px !important;
                }
              }
            }
          }
          tbody {
            tr {
              td {
                .trezo-form-group {
                  width: 200px;
                }
                &:first-child {
                  padding-left: 17px !important;
                }
                &:last-child {
                  padding-right: 17px !important;
                }
              }
            }
          }
        }
      }
    }
  }
}

/* Min width 576px to Max width 767px */
@media only screen and (min-width: 576px) and (max-width: 767px) {
  .write-prescription-card {
    .trezo-card-content {
      .doctor-info {
        padding: {
          left: 20px;
          right: 20px;
          bottom: 20px;
        }
        margin: {
          left: -20px;
          right: -20px;
          bottom: 20px;
        }
        .logo {
          margin-top: 20px;
        }
      }
      .basic-table {
        margin: {
          left: -20px;
          right: -20px;
          bottom: 20px;
        }
        .table {
          thead {
            tr {
              th {
                &:first-child {
                  padding-left: 20px !important;
                }
                &:last-child {
                  padding-right: 20px !important;
                }
              }
            }
          }
          tbody {
            tr {
              td {
                &:first-child {
                  padding-left: 20px !important;
                }
                &:last-child {
                  padding-right: 20px !important;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
