<template>
  <div class="primary-emails-table trezo-table-content">
    <div class="trezo-table">
      <v-table>
        <tbody>
          <tr v-for="(item, index) in items" :key="index">
            <td>
              <div class="d-flex align-items-center">
                <v-checkbox color="primary"></v-checkbox>
                <div class="icon">
                  <i class="material-symbols-outlined"> star_rate </i>
                </div>
              </div>
            </td>
            <td>
              <NuxtLink to="/apps/email/read" class="fw-medium">
                {{ item.title }}
              </NuxtLink>
            </td>
            <td>
              <NuxtLink to="/apps/email/read" class="fw-medium">
                {{ item.description.title }}
                <span class="text-body">
                  {{ item.description.subtitle }}
                </span>
              </NuxtLink>
            </td>
            <td class="text-body text-end">
              <NuxtLink to="/apps/email/read" class="fw-medium">
                {{ item.date }}
              </NuxtLink>
            </td>
          </tr>
        </tbody>
      </v-table>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "PromotionsEmails",
  setup() {
    const items = ref([
      {
        title: "Facebook",
        description: {
          title: "Friend Request",
          subtitle: "- Sed in libero eget lorem fermentum...",
        },
        date: "9:25 AM",
      },
      {
        title: "Google",
        description: {
          title: "2-Step Verification Turn Off",
          subtitle: "- Integer nec arcu ac nisi...",
        },
        date: "3:36 PM",
      },
      {
        title: "Ethan Parker",
        description: {
          title: "Leave Application",
          subtitle: "- Integer nec arcu ac nisi...",
        },
        date: "Jun 22",
      },
      {
        title: "LinkedIn",
        description: {
          title: "Travel Information",
          subtitle: "- Vivamus vestibulum ligula in mauris...",
        },
        date: "Jun 25",
      },
      {
        title: "Instagram",
        description: {
          title: "Training Schedule",
          subtitle: "- Vivamus vestibulum ligula in mauris...",
        },
        date: "Jun 21",
      },
      {
        title: "Isabella Cooper",
        description: {
          title: "Internal Auditor",
          subtitle: "- Sed in libero eget lorem fermentum...",
        },
        date: "Jun 19",
      },
      {
        title: "Dribbble",
        description: {
          title: "Design Inspiration",
          subtitle: "- Sed in libero eget lorem fermentum...",
        },
        date: "Jun 21",
      },
      {
        title: "Google",
        description: {
          title: "Password Changed",
          subtitle: "- Integer nec arcu ac nisi...",
        },
        date: "Jun 17",
      },
      {
        title: "Olivia Rodriguez",
        description: {
          title: "Virtual Training",
          subtitle: "- Vivamus vestibulum ligula in mauris...",
        },
        date: "Jun 15",
      },
      {
        title: "YouTube",
        description: {
          title: "New Subscriber",
          subtitle: "- Sed in libero eget lorem fermentum...",
        },
        date: "Jun 12",
      },
      {
        title: "Google",
        description: {
          title: "Security Alert",
          subtitle: "- Vivamus vestibulum ligula in mauris...",
        },
        date: "Jun 10",
      },
    ]);

    return {
      items,
    };
  },
});
</script>

<style lang="scss" scoped>
.primary-emails-table {
  &.trezo-table-content {
    .trezo-table {
      table {
        tbody {
          tr {
            td {
              border-bottom: 1px solid #eceef2;
              padding: {
                top: 7px !important;
                bottom: 7px !important;
              }
              .icon {
                line-height: 1;
                margin-left: 35px;

                i {
                  font-size: 18px;
                }
              }
              &:first-child {
                border-left-width: 0 !important;
                padding: {
                  left: 0 !important;
                  right: 0 !important;
                }
              }
              &:last-child {
                border-right-width: 0 !important;
                padding-right: 0 !important;
                font-size: 13px !important;
              }
              .v-checkbox.v-input {
                margin: -10px -30px -32px -10px;
              }
              .v-input__details {
                display: none !important;
              }
              .v-selection-control__input {
                width: 0 !important;
                height: 0 !important;
              }
            }
            &:last-child {
              td {
                border-bottom: 1px solid #eceef2;
              }
            }
            &:first-child {
              td {
                border-top-width: 0;
              }
            }
          }
        }
      }
    }
  }
}
</style>
