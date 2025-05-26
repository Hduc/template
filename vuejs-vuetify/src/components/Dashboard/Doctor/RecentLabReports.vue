<template>
  <v-card
    class="recent-lab-reports-card trezo-card border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0">Recent Lab Reports</h5>
    </div>

    <div class="trezo-card-content">
      <div class="trezo-table basic-table table-responsive">
        <table class="table mb-0">
          <tbody>
            <tr v-for="(report, index) in labReports" :key="index">
              <td>
                <div class="employee-info d-flex">
                  <div class="img">
                    <v-img :src="getIcon(report.type)" alt="user-image" />
                  </div>
                  <div>
                    <span class="d-block fw-semibold text-black">
                      {{ report.name }}
                    </span>
                    <span class="d-block text-body">
                      submitted by
                      <strong class="fw-normal text-black">
                        {{ report.submittedBy }}
                      </strong>
                    </span>
                  </div>
                </div>
              </td>
              <td>
                <button
                  type="button"
                  class="download-btn d-inline-block border-0 bg-transparent p-0"
                >
                  <i class="ri-download-2-line"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "RecentLabReports",
  data() {
    return {
      labReports: [
        { name: "Blood Report.pdf", type: "pdf", submittedBy: "Andrew" },
        { name: "X-ray Report.jpg", type: "jpg", submittedBy: "Joanna" },
        { name: "Creatinine Report.pdf", type: "pdf", submittedBy: "David" },
        { name: "Blood Report.pdf", type: "pdf", submittedBy: "Zinia" },
        { name: "ECG Report.doc", type: "doc", submittedBy: "Bella" },
        { name: "Blood Report.pdf", type: "pdf", submittedBy: "Jonathon" },
      ],
    };
  },
  methods: {
    getIcon(type: string) {
      return require(`@/assets/images/icons/${type}.png`);
    },
  },
});
</script>

<style lang="scss" scoped>
.recent-lab-reports-card {
  .trezo-card-content {
    margin-bottom: -14px;

    .basic-table {
      table,
      .table {
        thead {
          tr {
            th {
              font-size: 10px;
              letter-spacing: 1px;
              color: var(--bodyColor);
              text-transform: uppercase;
              background-color: transparent;
              padding: {
                bottom: 14px;
                top: 0;
              }
              &:first-child {
                padding-left: 0;
              }
              &:last-child {
                padding-right: 0;
                text-align: end;
              }
            }
          }
        }
        tbody {
          tr {
            td {
              font-size: 12px;
              padding: {
                top: 13px !important;
                bottom: 13px !important;
              }
              border: {
                left-width: 0;
                right-width: 0;
              }
              .employee-info {
                gap: 10px;

                .img {
                  width: 28px;
                }
                span {
                  &:nth-child(1) {
                    font-size: var(--fontSize);
                    margin: {
                      bottom: 5px;
                      top: -2px;
                    }
                  }
                }
              }
              .download-btn {
                i {
                  font-size: 20px;
                  color: var(--primaryColor);
                }
              }
              &:first-child {
                padding-left: 0 !important;
              }
              &:last-child {
                padding-right: 0 !important;
                text-align: end;
              }
            }
            &:first-child {
              td {
                border-top-width: 0;
                padding-top: 0 !important;
              }
            }
            &:last-child {
              td {
                border-bottom-width: 0;
              }
            }
          }
        }
      }
    }
  }
}
</style>
