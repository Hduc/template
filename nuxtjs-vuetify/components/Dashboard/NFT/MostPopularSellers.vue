<template>
  <v-card
    class="most-popular-sellers-card trezo-card border-radius d-block border-0 shadow-none"
  >
    <div class="v-card-header mb-4">
      <h5 class="mb-0">Most Popular Sellers</h5>
      <div class="d-flex align-items-center">
        <v-menu>
          <template v-slot:activator="{ props }">
            <button
              type="button"
              v-bind="props"
              class="card-header-menu d-inline-block border-radius"
            >
              Monthly
            </button>
          </template>
          <v-list class="menu-content">
            <button type="button" class="bg-transparent border-none">
              Monthly
            </button>
            <button type="button" class="bg-transparent border-none">
              Yearly
            </button>
          </v-list>
        </v-menu>
      </div>
    </div>

    <div class="default-table-area style-two campaigns-table">
      <div class="table-responsive">
        <table
          class="table align-middle border-0"
          border="0"
          cellspacing="0"
          cellpadding="0"
        >
          <thead>
            <tr>
              <th class="bg-transparent border-bottom text-body fw-medium">
                <span class="fs-12">SELLERS</span>
              </th>
              <th class="bg-transparent border-bottom text-body fw-medium">
                <span class="fs-12">DELIVERIES</span>
              </th>
              <th class="bg-transparent border-bottom text-body fw-medium">
                <span class="fs-12">EARNINGS</span>
              </th>
              <th class="bg-transparent border-bottom text-body fw-medium">
                <span class="fs-12">RATINGS</span>
              </th>
              <th
                class="text-end bg-transparent border-bottom text-body fw-medium"
              >
                <span class="fs-12">VIEW</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border-bottom">
                <div class="d-flex align-items-center">
                  <div class="flex-shrink-0">
                    <v-img
                      src="@/assets/images/user-81.png"
                      class="rounded-circle"
                      style="width: 40px; height: 40px"
                      alt="nft"
                    />
                  </div>
                  <div class="flex-grow-1 ms-2">
                    <h4 class="fs-14 fw-semibold mb-1">Christmas Eve</h4>
                    <span class="fs-12 text-body">Queensland</span>
                  </div>
                </div>
              </td>
              <td class="border-bottom fs-12 fw-semibold text-body">6240</td>
              <td class="border-bottom fs-12 fw-semibold text-body">624 ETH</td>
              <td class="border-bottom">
                <div class="d-flex ga-1">
                  <i class="ri-star-fill text-warning"></i>
                  <i class="ri-star-fill text-warning"></i>
                  <i class="ri-star-fill text-warning"></i>
                  <i class="ri-star-fill text-warning"></i>
                  <i class="ri-star-fill text-warning"></i>
                  <span class="text-body">5.0</span>
                </div>
              </td>
              <td class="border-bottom text-end">
                <a
                  href="#"
                  class="rounded-circle d-inline-block text-center fs-18 hover-bg for-dark-read"
                  style="
                    background-color: #eceef2;
                    width: 30px;
                    height: 30px;
                    line-height: 30px;
                  "
                >
                  <i class="ri-arrow-right-line text-body"></i>
                </a>
              </td>
            </tr>
            <tr>
              <td class="border-bottom">
                <div class="d-flex align-items-center">
                  <div class="flex-shrink-0">
                    <v-img
                      src="@/assets/images/user-80.png"
                      class="rounded-circle"
                      style="width: 40px; height: 40px"
                      alt="nft"
                    />
                  </div>
                  <div class="flex-grow-1 ms-2">
                    <h4 class="fs-14 fw-semibold mb-1">Skyler White</h4>
                    <span class="fs-12 text-body">Neverdies</span>
                  </div>
                </div>
              </td>
              <td class="border-bottom fs-12 fw-semibold text-body">5135</td>
              <td class="border-bottom fs-12 fw-semibold text-body">597 ETH</td>
              <td class="border-bottom">
                <div class="d-flex ga-1">
                  <i class="ri-star-fill text-warning"></i>
                  <i class="ri-star-fill text-warning"></i>
                  <i class="ri-star-fill text-warning"></i>
                  <i class="ri-star-fill text-warning"></i>
                  <i class="ri-star-half-fill text-warning"></i>
                  <span class="text-body">4.9</span>
                </div>
              </td>
              <td class="border-bottom text-end">
                <a
                  href="#"
                  class="rounded-circle d-inline-block text-center fs-18 hover-bg for-dark-read"
                  style="
                    background-color: #eceef2;
                    width: 30px;
                    height: 30px;
                    line-height: 30px;
                  "
                >
                  <i class="ri-arrow-right-line text-body"></i>
                </a>
              </td>
            </tr>
            <tr>
              <td class="border-bottom">
                <div class="d-flex align-items-center">
                  <div class="flex-shrink-0">
                    <v-img
                      src="@/assets/images/user-82.png"
                      class="rounded-circle"
                      style="width: 40px; height: 40px"
                      alt="nft"
                    />
                  </div>
                  <div class="flex-grow-1 ms-2">
                    <h4 class="fs-14 fw-semibold mb-1">Jonathon Watson</h4>
                    <span class="fs-12 text-body">Emoticons</span>
                  </div>
                </div>
              </td>
              <td class="border-bottom fs-12 fw-semibold text-body">4321</td>
              <td class="border-bottom fs-12 fw-semibold text-body">413 ETH</td>
              <td class="border-bottom">
                <div class="d-flex ga-1">
                  <i class="ri-star-fill text-warning"></i>
                  <i class="ri-star-fill text-warning"></i>
                  <i class="ri-star-fill text-warning"></i>
                  <i class="ri-star-fill text-warning"></i>
                  <i class="ri-star-half-fill text-warning"></i>
                  <span class="text-body">4.8</span>
                </div>
              </td>
              <td class="border-bottom text-end">
                <a
                  href="#"
                  class="rounded-circle d-inline-block text-center fs-18 hover-bg for-dark-read"
                  style="
                    background-color: #eceef2;
                    width: 30px;
                    height: 30px;
                    line-height: 30px;
                  "
                >
                  <i class="ri-arrow-right-line text-body"></i>
                </a>
              </td>
            </tr>
            <tr>
              <td class="border-bottom">
                <div class="d-flex align-items-center">
                  <div class="flex-shrink-0">
                    <v-img
                      src="@/assets/images/user-83.png"
                      class="rounded-circle"
                      style="width: 40px; height: 40px"
                      alt="nft"
                    />
                  </div>
                  <div class="flex-grow-1 ms-2">
                    <h4 class="fs-14 fw-semibold mb-1">Walter White</h4>
                    <span class="fs-12 text-body">Puzzleworld</span>
                  </div>
                </div>
              </td>
              <td class="border-bottom fs-12 fw-semibold text-body">3124</td>
              <td class="border-bottom fs-12 fw-semibold text-body">321 ETH</td>
              <td class="border-bottom">
                <div class="d-flex ga-1">
                  <i class="ri-star-fill text-warning"></i>
                  <i class="ri-star-fill text-warning"></i>
                  <i class="ri-star-fill text-warning"></i>
                  <i class="ri-star-fill text-warning"></i>
                  <i class="ri-star-half-fill text-warning"></i>
                  <span class="text-body">4.0</span>
                </div>
              </td>
              <td class="border-bottom text-end">
                <a
                  href="#"
                  class="rounded-circle d-inline-block text-center fs-18 hover-bg for-dark-read"
                  style="
                    background-color: #eceef2;
                    width: 30px;
                    height: 30px;
                    line-height: 30px;
                  "
                >
                  <i class="ri-arrow-right-line text-body"></i>
                </a>
              </td>
            </tr>
            <tr>
              <td class="border-bottom">
                <div class="d-flex align-items-center">
                  <div class="flex-shrink-0">
                    <v-img
                      src="@/assets/images/user-84.png"
                      class="rounded-circle"
                      style="width: 40px; height: 40px"
                      alt="nft"
                    />
                  </div>
                  <div class="flex-grow-1 ms-2">
                    <h4 class="fs-14 fw-semibold mb-1">David Carlen</h4>
                    <span class="fs-12 text-body">Liveslong</span>
                  </div>
                </div>
              </td>
              <td class="border-bottom fs-12 fw-semibold text-body">2137</td>
              <td class="border-bottom fs-12 fw-semibold text-body">246 ETH</td>
              <td class="border-bottom">
                <div class="d-flex ga-1">
                  <i class="ri-star-fill text-warning"></i>
                  <i class="ri-star-fill text-warning"></i>
                  <i class="ri-star-fill text-warning"></i>
                  <i class="ri-star-fill text-warning"></i>
                  <i class="ri-star-half-fill text-warning"></i>
                  <span class="text-body">4.5</span>
                </div>
              </td>
              <td class="border-bottom text-end">
                <a
                  href="#"
                  class="rounded-circle d-inline-block text-center fs-18 hover-bg for-dark-read"
                  style="
                    background-color: #eceef2;
                    width: 30px;
                    height: 30px;
                    line-height: 30px;
                  "
                >
                  <i class="ri-arrow-right-line text-body"></i>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <PaginationTwo items="05" total="30" class="pb-0 border-none" />
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PaginationTwo from "../../Common/PaginationTwo.vue";

export default defineComponent({
  name: "MostPopularSellers",
  components: {
    PaginationTwo,
  },
});
</script>
