<template>
  <v-card
    class="reviews-card trezo-card border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0">Reviews</h5>
    </div>

    <div class="trezo-card-content">
      <div class="basic-table table-responsive">
        <table class="table mb-0" border="0" cellspacing="0" cellpadding="0">
          <thead>
            <tr>
              <th scope="col" class="fw-medium">User ID</th>
              <th scope="col" class="fw-medium">Customer Name</th>
              <th scope="col" class="fw-medium">Ratings</th>
              <th scope="col" class="fw-medium">Reviews</th>
              <th scope="col" class="fw-medium">Date</th>
              <th scope="col" class="fw-medium"></th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="review in paginatedReviews" :key="review.id">
              <td>#{{ review.id.toString().padStart(3, "0") }}</td>
              <td>
                <div class="employee-info d-flex align-items-center">
                  <div class="img rounded-circle">
                    <v-img
                      :src="review.avatar"
                      class="rounded-circle"
                      alt="user"
                    />
                  </div>
                  <div>
                    <span class="d-block fw-medium">
                      {{ review.name }}
                    </span>
                  </div>
                </div>
              </td>
              <td>
                <div class="ratings lh-1">
                  <i class="ri-star-fill"></i>
                  <span class="d-inline-block lh-1 text-xs text-body">
                    {{ review.rating.toFixed(1) }}
                  </span>
                </div>
              </td>
              <td class="reviews">
                <div class="reviews">
                  <span class="d-block fw-medium">
                    {{ review.title }}
                  </span>
                  <p>
                    {{ review.content }}
                  </p>
                </div>
              </td>
              <td>
                {{ formatDate(review.date) }}
              </td>
              <td>
                <div
                  class="action-buttons d-flex justify-content-end align-items-center"
                >
                  <button
                    type="button"
                    class="p-0 bg-transparent d-inline-block lh-1 border-0"
                  >
                    <i class="material-symbols-outlined"> visibility </i>
                  </button>
                  <button
                    type="button"
                    class="p-0 bg-transparent d-inline-block lh-1 border-0"
                  >
                    <i class="material-symbols-outlined"> edit </i>
                  </button>
                  <button
                    type="button"
                    class="p-0 bg-transparent d-inline-block lh-1 border-0"
                    @click="deleteReview(review.id)"
                  >
                    <i class="material-symbols-outlined"> delete </i>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div
        class="trezo-card-pagination d-flex justify-content-center justify-content-between align-items-center text-center flex-wrap gap-2 showing-wrap border p-3"
      >
        <span class="fs-12 fw-medium">
          Showing {{ showingStart }} to {{ showingEnd }} of
          {{ totalReviews }} Results
        </span>

        <nav aria-label="Page navigation example">
          <ul class="pagination mb-0 justify-content-center">
            <li class="page-item">
              <button
                class="page-link icon"
                aria-label="Previous"
                @click="prevPage"
                :disabled="currentPage === 1"
              >
                <i class="material-symbols-outlined">keyboard_arrow_left</i>
              </button>
            </li>
            <li class="page-item" v-for="page in totalPages" :key="page">
              <button
                class="page-link"
                :class="{ active: currentPage === page }"
                @click="goToPage(page)"
              >
                {{ page }}
              </button>
            </li>
            <li
              class="page-item"
              :class="{ disabled: currentPage === totalPages }"
            >
              <button
                class="page-link icon"
                aria-label="Next"
                @click="nextPage"
                :disabled="currentPage === totalPages"
              >
                <i class="material-symbols-outlined">keyboard_arrow_right</i>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, reactive, computed, toRefs } from "vue";

interface Review {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  title: string;
  content: string;
  date: Date;
}

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Reviews",
  setup() {
    const state = reactive({
      reviews: [
        {
          id: 1,
          name: "Joanna Watson",
          avatar: require("@/assets/images/user-166.png"),
          rating: 5.0,
          title: "Amazing Ambiance and Delicious Food!",
          content:
            "Trezo was a fantastic dining experience. The ambiance is warm and inviting, perfect for a date night or celebration. I ordered the truffle pasta, which was rich and perfectly seasoned. The service was impeccable, and the staff made us feel like family. Highly recommend!",
          date: new Date(2025, 10, 13),
        },
        {
          id: 2,
          name: "Jenelia Anderson",
          avatar: require("@/assets/images/user-167.png"),
          rating: 4.9,
          title: "Best Brunch Spot in Town",
          content:
            "Visited Trezo for brunch with friends, and it exceeded our expectations. The avocado toast was fresh, and their mimosas were spot-on. Our server was attentive without being intrusive. Definitely coming back!",
          date: new Date(2025, 10, 14),
        },
        {
          id: 3,
          name: "Jonathon Ronan",
          avatar: require("@/assets/images/user-168.png"),
          rating: 4.0,
          title: "Good Food, Slow Service",
          content:
            "The food at Trezo was delicious, but the service was a bit slow. We had to wait a while for our appetizers, and our main course was delayed. It's a nice spot, but they could work on speeding up their service.",
          date: new Date(2025, 10, 12),
        },
        {
          id: 4,
          name: "Sarah Johnson",
          avatar: require("@/assets/images/user-169.png"),
          rating: 4.5,
          title: "Great Cocktails and Atmosphere",
          content:
            "The bar area at Trezo is fantastic. Their signature cocktails are creative and well-balanced. The atmosphere is lively but not too loud. Perfect for after-work drinks with colleagues.",
          date: new Date(2025, 10, 15),
        },
        {
          id: 5,
          name: "Michael Brown",
          avatar: require("@/assets/images/user-170.png"),
          rating: 3.5,
          title: "Decent but Overpriced",
          content:
            "The food was good but not exceptional enough to justify the high prices. Portion sizes were a bit small for what you pay. Service was friendly but not particularly attentive.",
          date: new Date(2025, 10, 16),
        },
        {
          id: 6,
          name: "Emily Davis",
          avatar: require("@/assets/images/user-171.png"),
          rating: 5.0,
          title: "Perfect Anniversary Dinner",
          content:
            "Trezo made our anniversary special. They gave us a complimentary dessert and the staff went above and beyond to make our evening memorable. The filet mignon was cooked to perfection!",
          date: new Date(2025, 10, 17),
        },
        {
          id: 7,
          name: "David Wilson",
          avatar: require("@/assets/images/user-172.png"),
          rating: 4.2,
          title: "Excellent Wine Selection",
          content:
            "As a wine enthusiast, I was impressed with their curated wine list. The sommelier was knowledgeable and helped us pick the perfect pairing for our meal. The seafood pasta was outstanding.",
          date: new Date(2025, 10, 18),
        },
      ] as Review[],
      currentPage: 1,
      itemsPerPage: 3,
    });

    const totalReviews = computed(() => state.reviews.length);
    const totalPages = computed(() =>
      Math.ceil(totalReviews.value / state.itemsPerPage)
    );

    const paginatedReviews = computed(() => {
      const start = (state.currentPage - 1) * state.itemsPerPage;
      const end = start + state.itemsPerPage;
      return state.reviews.slice(start, end);
    });

    const showingStart = computed(() => {
      return (state.currentPage - 1) * state.itemsPerPage + 1;
    });

    const showingEnd = computed(() => {
      const end = state.currentPage * state.itemsPerPage;
      return end > totalReviews.value ? totalReviews.value : end;
    });

    const formatDate = (date: Date) => {
      const options: Intl.DateTimeFormatOptions = {
        day: "numeric",
        month: "short",
        year: "2-digit",
      };
      return date.toLocaleDateString("en-US", options);
    };

    const deleteReview = (id: number) => {
      if (confirm("Are you sure you want to delete this review?")) {
        state.reviews = state.reviews.filter(
          (review: { id: number }) => review.id !== id
        );
      }
    };

    const nextPage = () => {
      if (state.currentPage < totalPages.value) {
        state.currentPage++;
      }
    };

    const prevPage = () => {
      if (state.currentPage > 1) {
        state.currentPage--;
      }
    };

    const goToPage = (page: number) => {
      if (page >= 1 && page <= totalPages.value) {
        state.currentPage = page;
      }
    };

    return {
      paginatedReviews,
      totalReviews,
      totalPages,
      showingStart,
      showingEnd,
      formatDate,
      deleteReview,
      nextPage,
      prevPage,
      goToPage,
      ...toRefs(state),
    };
  },
});
</script>

<style scoped lang="scss">
.reviews-card {
  .trezo-card-content {
    .basic-table {
      table,
      .table {
        thead {
          tr {
            th {
              text-align: left;
            }
          }
        }
        tbody {
          tr {
            td {
              vertical-align: top;

              .employee-info {
                gap: 10px;

                .img {
                  width: 30px;
                }
                span {
                  &:nth-child(1) {
                    margin-bottom: 1px;
                    font-size: var(--fontSize);
                  }
                }
              }
              .reviews {
                white-space: normal;
                width: 620px;

                span {
                  margin-bottom: 5px;
                }
              }
            }
          }
        }
      }
    }
    .trezo-card-pagination {
      border-top: 0 !important;
      border-bottom-left-radius: 7px;
      border-bottom-right-radius: 7px;
    }
  }
}
</style>
