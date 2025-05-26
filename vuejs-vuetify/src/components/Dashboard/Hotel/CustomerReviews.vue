<template>
  <v-card
    class="customer-reviews-card trezo-card border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0">Customer Reviews</h5>
      <v-menu>
        <template v-slot:activator="{ props }">
          <button
            type="button"
            v-bind="props"
            class="card-header-menu d-inline-block border-radius border-0 bg-gray"
          >
            {{ selectedRatingFilter || "Top Rated" }}
          </button>
        </template>
        <v-list class="menu-content">
          <button
            type="button"
            class="bg-transparent border-none"
            @click="filterByRating(5)"
          >
            5 Star
          </button>
          <button
            type="button"
            class="bg-transparent border-none"
            @click="filterByRating(4)"
          >
            4 Star
          </button>
          <button
            type="button"
            class="bg-transparent border-none"
            @click="filterByRating(3)"
          >
            3 Star
          </button>
          <button
            type="button"
            class="bg-transparent border-none"
            @click="filterByRating(2)"
          >
            2 Star
          </button>
          <button
            type="button"
            class="bg-transparent border-none"
            @click="filterByRating(1)"
          >
            1 Star
          </button>
          <button
            type="button"
            class="bg-transparent border-none"
            @click="clearRatingFilter"
          >
            Clear Filter
          </button>
        </v-list>
      </v-menu>
    </div>

    <div class="trezo-card-content">
      <div class="basic-table table-responsive">
        <table class="table mb-0">
          <thead>
            <tr>
              <th scope="col" class="fw-bold">User ID</th>
              <th scope="col" class="fw-bold">Customer Name</th>
              <th scope="col" class="fw-bold">Ratings</th>
              <th scope="col" class="fw-bold">Reviews</th>
              <th scope="col" class="fw-bold">Date</th>
              <th scope="col" class="fw-bold"></th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="review in paginatedReviews" :key="review.id">
              <td class="fw-semibold text-body">
                #{{ review.id.toString().padStart(3, "0") }}
              </td>
              <td>
                <div class="employee-info d-flex align-items-center">
                  <div class="img rounded-circle">
                    <v-img
                      :src="review.avatar"
                      class="rounded-circle"
                      alt="user-image"
                    />
                  </div>
                  <div>
                    <span class="d-block fw-semibold">
                      {{ review.name }}
                    </span>
                  </div>
                </div>
              </td>
              <td class="fw-semibold text-body">
                <div class="ratings lh-1">
                  <i class="ri-star-fill"></i>
                  <span class="d-inline-block lh-1 text-xs text-body">
                    {{ review.rating.toFixed(1) }}
                  </span>
                </div>
              </td>
              <td class="reviews">
                <div class="reviews">
                  <span class="d-block fw-semibold">
                    {{ review.title }}
                  </span>
                  <p>
                    {{ review.content }}
                  </p>
                </div>
              </td>
              <td class="fw-semibold text-body">
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
        class="d-flex justify-content-center justify-content-between align-items-center text-center flex-wrap gap-2 showing-wrap pt-3"
      >
        <span class="fs-12 fw-medium">
          Showing {{ showingRange }} of {{ filteredReviews.length }} Results
        </span>

        <nav aria-label="Page navigation example">
          <ul class="pagination mb-0 justify-content-center">
            <li class="page-item" :class="{ disabled: currentPage === 1 }">
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
            <li class="page-item">
              <button
                class="page-link icon"
                aria-label="Next"
                :disabled="currentPage === totalPages"
                @click="nextPage"
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
import { defineComponent, ref, computed } from "vue";

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
  name: "CustomerReviews",
  setup() {
    const reviews = ref<Review[]>([
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
          "The bar area at Trezo is fantastic. The mixologist created custom cocktails based on our preferences, and they were all amazing. The small plates we ordered were perfect for sharing. Will definitely return for happy hour!",
        date: new Date(2025, 10, 15),
      },
      {
        id: 5,
        name: "Michael Brown",
        avatar: require("@/assets/images/user-170.png"),
        rating: 3.5,
        title: "Decent but Overpriced",
        content:
          "The food quality was good but not exceptional enough to justify the high prices. Service was attentive but the portions were smaller than expected for the price point. Might give it another try for their lunch specials.",
        date: new Date(2025, 10, 11),
      },
      {
        id: 6,
        name: "Emily Davis",
        avatar: require("@/assets/images/user-171.png"),
        rating: 5.0,
        title: "Perfect Anniversary Dinner",
        content:
          "Trezo made our anniversary special. They decorated our table with rose petals and gave us complimentary champagne. The steak was cooked to perfection and the chocolate soufflé was divine. Worth every penny!",
        date: new Date(2025, 10, 16),
      },
      {
        id: 7,
        name: "David Wilson",
        avatar: require("@/assets/images/user-172.png"),
        rating: 2.0,
        title: "Disappointing Experience",
        content:
          "Our reservation was lost, and we had to wait 45 minutes for a table. When we finally got seated, two of our ordered dishes were unavailable. The manager did comp our drinks, but the overall experience was frustrating.",
        date: new Date(2025, 10, 10),
      },
    ]);

    const selectedRatingFilter = ref<number | null>(null);
    const itemsPerPage = ref(3);
    const currentPage = ref(1);

    const filteredReviews = computed(() => {
      if (selectedRatingFilter.value === null) {
        return [...reviews.value].sort((a, b) => b.rating - a.rating);
      }
      return reviews.value
        .filter(
          (review: { rating: number }) =>
            Math.floor(review.rating) === selectedRatingFilter.value
        )
        .sort(
          (a: { rating: number }, b: { rating: number }) => b.rating - a.rating
        );
    });

    const totalPages = computed(() => {
      return Math.ceil(filteredReviews.value.length / itemsPerPage.value);
    });

    const paginatedReviews = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage.value;
      const end = start + itemsPerPage.value;
      return filteredReviews.value.slice(start, end);
    });

    const showingRange = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage.value + 1;
      const end = Math.min(
        currentPage.value * itemsPerPage.value,
        filteredReviews.value.length
      );
      return `${start}-${end}`;
    });

    const filterByRating = (rating: number) => {
      selectedRatingFilter.value = rating;
      currentPage.value = 1;
    };

    const clearRatingFilter = () => {
      selectedRatingFilter.value = null;
      currentPage.value = 1;
    };

    const formatDate = (date: Date): string => {
      const options: Intl.DateTimeFormatOptions = {
        day: "numeric",
        month: "short",
        year: "2-digit",
      };
      return date.toLocaleDateString("en-US", options);
    };

    const viewReview = (review: Review) => {
      alert(
        `Viewing review by ${review.name}\nRating: ${review.rating}\nTitle: ${review.title}`
      );
    };

    const editReview = (review: Review) => {
      alert(`Editing review by ${review.name}`);
    };

    const deleteReview = (id: number) => {
      if (confirm("Are you sure you want to delete this review?")) {
        reviews.value = reviews.value.filter(
          (review: { id: number }) => review.id !== id
        );
      }
    };

    const goToPage = (page: number) => {
      currentPage.value = page;
    };

    const prevPage = () => {
      if (currentPage.value > 1) {
        currentPage.value--;
      }
    };

    const nextPage = () => {
      if (currentPage.value < totalPages.value) {
        currentPage.value++;
      }
    };

    return {
      reviews,
      selectedRatingFilter,
      itemsPerPage,
      currentPage,
      filteredReviews,
      totalPages,
      paginatedReviews,
      showingRange,
      filterByRating,
      clearRatingFilter,
      formatDate,
      viewReview,
      editReview,
      deleteReview,
      goToPage,
      prevPage,
      nextPage,
    };
  },
});
</script>

<style scoped lang="scss">
.customer-reviews-card {
  .trezo-card-content {
    .basic-table {
      table,
      .table {
        thead {
          tr {
            background-color: transparent !important;
            th {
              font-size: 10px;
              letter-spacing: 1px;
              color: var(--bodyColor);
              text-transform: uppercase;
              background-color: transparent;
              text-align: left;
              padding: {
                bottom: 15px;
                top: 0;
              }
              &:first-child {
                padding-left: 0 !important;
              }
              &:last-child {
                padding-right: 0 !important;
              }
            }
          }
        }
        tbody {
          tr {
            td {
              vertical-align: top;
              font-size: 12px;
              padding: {
                top: 15px;
                bottom: 15px;
              }
              border: {
                left-width: 0;
                right-width: 0;
              }
              .employee-info {
                gap: 10px;

                .img {
                  .v-img {
                    width: 30px;
                  }
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
              &:first-child {
                padding-left: 0;
              }
              &:last-child {
                padding-right: 0;
              }
            }
          }
        }
      }
    }
    .trezo-card-pagination {
      border-width: 0;
      border-radius: 0;
      padding: {
        left: 0;
        right: 0;
        bottom: 0;
        top: 15px;
      }
      p {
        font: {
          size: 12px;
          weight: 500;
        }
      }
    }
  }
}
</style>
