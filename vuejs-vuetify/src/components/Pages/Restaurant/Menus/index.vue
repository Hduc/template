<template>
  <v-card
    class="menus-card trezo-card trezo-card bg-white border-radius d-block border-0 shadow-none"
  >
    <div class="v-card-header">
      <form class="search-box position-relative" @submit.prevent>
        <input
          type="text"
          class="input-search d-block"
          placeholder="Search here.."
        />
        <button type="submit">
          <i class="material-symbols-outlined">search</i>
        </button>
      </form>

      <AddNewDish />
    </div>

    <div class="trezo-card-content">
      <div class="trezo-table basic-table table-responsive">
        <table class="table mb-0">
          <thead>
            <tr>
              <th scope="col">
                <div class="form-check mb-0">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    @change="toggleAllCheckboxes"
                    :checked="allItemsSelected"
                  />
                </div>
              </th>
              <th scope="col" class="fw-bold">Code</th>
              <th scope="col" class="fw-bold">Item</th>
              <th scope="col" class="fw-bold">Price</th>
              <th scope="col" class="fw-bold">Ingredients</th>
              <th scope="col" class="fw-bold">Action</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="menu in paginatedMenus" :key="menu.id">
              <td>
                <div class="form-check mb-0">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    v-model="selectedItems"
                    :value="menu.id"
                  />
                </div>
              </td>
              <td class="fw-semibold text-body">
                {{ menu.code }}
              </td>
              <td>
                <div class="employee-info d-flex align-items-center">
                  <div class="img">
                    <v-img :alt="menu.name" :src="menu.image" />
                  </div>
                  <div>
                    <RouterLink
                      to="/restaurant/dish-details"
                      class="d-block fw-semibold"
                    >
                      {{ menu.name }}
                    </RouterLink>
                  </div>
                </div>
              </td>
              <td class="fw-semibold text-body">
                {{ formatPrice(menu.price) }}
              </td>
              <td class="fw-semibold text-body">
                {{ menu.ingredients }}
              </td>
              <td>
                <div class="action-buttons d-flex align-items-center">
                  <button type="button">
                    <i class="material-symbols-outlined"> visibility </i>
                  </button>
                  <EditDish />
                  <button type="button" @click="deleteMenu(menu.id)">
                    <i class="material-symbols-outlined"> delete </i>
                  </button>
                </div>
              </td>
            </tr>
            <tr v-if="filteredMenus.length === 0">
              <td colspan="6" class="text-center py-4">
                No menu items found matching your search.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div
        class="d-flex justify-content-center justify-content-between align-items-center text-center flex-wrap gap-2 showing-wrap pt-3"
      >
        <span class="fs-12 fw-medium">
          Showing {{ startIndex + 1 }} to {{ endIndex }} of
          {{ filteredMenus.length }} Results
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
                :class="{ active: page === currentPage }"
                @click="goToPage(page)"
              >
                {{ page }}
              </button>
            </li>
            <li class="page-item">
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
import { defineComponent, ref, computed } from "vue";
import AddNewDish from "./AddNewDish.vue";
import EditDish from "./EditDish.vue";

interface MenuItem {
  id: number;
  code: string;
  name: string;
  price: number;
  ingredients: string;
  image: string;
  // Add other fields that match your form
  calorie?: string;
  carbs?: string;
  protein?: string;
  fibres?: string;
  fat?: string;
  vitamins?: string;
  sugar?: string;
  minerals?: string;
  orderInQueue?: string;
}

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Menus",
  components: {
    AddNewDish,
    EditDish,
  },
  setup() {
    const menus = ref<MenuItem[]>([
      {
        id: 1,
        code: "#001",
        name: "Buffalo Chicken",
        price: 16.0,
        ingredients: "pan-seared chicken, lemon zest, garlic butter, parsley",
        image: require("@/assets/images/restaurant/menu1.png"),
      },
      {
        id: 2,
        code: "#002",
        name: "Chicken Carbonara Spaghetti",
        price: 15.5,
        ingredients: "grilled chicken, honey mustard glaze, spinach, garlic",
        image: require("@/assets/images/restaurant/menu2.png"),
      },
      {
        id: 3,
        code: "#003",
        name: "Chicken Piccata Spaghetti",
        price: 14.5,
        ingredients: "shredded chicken, buffalo sauce, ranch dressing",
        image: require("@/assets/images/restaurant/menu3.png"),
      },
      {
        id: 4,
        code: "#004",
        name: "Thai Peanut Chicken Spaghetti",
        price: 13.99,
        ingredients:
          "spaghetti, chicken, crispy bacon, egg yolk, Parmesan, cream",
        image: require("@/assets/images/restaurant/menu4.png"),
      },
      {
        id: 5,
        code: "#005",
        name: "Chicken Bolognese Spaghetti",
        price: 14.75,
        ingredients: "pan-fried chicken, capers, white wine sauce, lemon",
        image: require("@/assets/images/restaurant/menu5.png"),
      },
      {
        id: 6,
        code: "#006",
        name: "Mediterranean Chicken Spaghetti",
        price: 15.99,
        ingredients: "grilled chicken, olives, sun-dried tomatoes, feta",
        image: require("@/assets/images/restaurant/menu6.png"),
      },
      {
        id: 7,
        code: "#007",
        name: "Chicken Parmesan Spaghetti",
        price: 16.5,
        ingredients: "Breaded chicken cutlets, marinara sauce, spaghetti",
        image: require("@/assets/images/restaurant/menu7.png"),
      },
      {
        id: 8,
        code: "#008",
        name: "Chicken and Mushroom Spaghetti",
        price: 12.99,
        ingredients: "Spaghetti, chicken slices, sautéed mushrooms, garlic",
        image: require("@/assets/images/restaurant/menu8.png"),
      },
      {
        id: 9,
        code: "#009",
        name: "Teriyaki Chicken Spaghetti Stir-Fry",
        price: 13.5,
        ingredients:
          "chicken strips, teriyaki sauce, bell peppers, sesame seeds",
        image: require("@/assets/images/restaurant/menu9.png"),
      },
      {
        id: 10,
        code: "#010",
        name: "Chicken Fajita Spaghetti",
        price: 15.25,
        ingredients: "chicken, fajita seasoning, bell peppers",
        image: require("@/assets/images/restaurant/menu10.png"),
      },
      {
        id: 11,
        code: "#011",
        name: "Spicy Arrabbiata Spaghetti",
        price: 12.5,
        ingredients: "tomato sauce, chili flakes, garlic, parsley",
        image: require("@/assets/images/restaurant/menu1.png"),
      },
      {
        id: 12,
        code: "#012",
        name: "Creamy Garlic Mushroom Spaghetti",
        price: 13.75,
        ingredients: "mushrooms, garlic, cream sauce, Parmesan",
        image: require("@/assets/images/restaurant/menu2.png"),
      },
    ]);

    // Search functionality
    const searchQuery = ref("");
    const filteredMenus = ref<MenuItem[]>(menus.value);

    const filterMenus = () => {
      if (!searchQuery.value) {
        filteredMenus.value = menus.value;
        return;
      }

      const query = searchQuery.value.toLowerCase();
      filteredMenus.value = menus.value.filter(
        (menu) =>
          menu.name.toLowerCase().includes(query) ||
          menu.ingredients.toLowerCase().includes(query) ||
          menu.code.toLowerCase().includes(query)
      );

      // Reset to first page when searching
      currentPage.value = 1;
    };

    // Pagination
    const currentPage = ref(1);
    const itemsPerPage = ref(10);
    const selectedItems = ref<number[]>([]);

    const showAddPopup = ref(false);
    const showEditPopup = ref(false);
    const currentMenuItem = ref<MenuItem | null>(null);
    const newMenuItem = ref<MenuItem>({
      id: 0,
      code: "",
      name: "",
      price: 0,
      ingredients: "",
      image: "",
      // Initialize other fields
      calorie: "",
      carbs: "",
      protein: "",
      fibres: "",
      fat: "",
      vitamins: "",
      sugar: "",
      minerals: "",
      orderInQueue: "",
    });

    // Toggle methods
    const toggleAddPopup = () => {
      showAddPopup.value = !showAddPopup.value;
      if (showAddPopup.value) {
        // Reset form when opening
        newMenuItem.value = {
          id: 0,
          code: "",
          name: "",
          price: 0,
          ingredients: "",
          image: "",
          // Reset other fields
          calorie: "",
          carbs: "",
          protein: "",
          fibres: "",
          fat: "",
          vitamins: "",
          sugar: "",
          minerals: "",
          orderInQueue: "",
        };
      }
    };

    const toggleEditPopup = () => {
      showEditPopup.value = !showEditPopup.value;
    };

    // Edit method
    const editMenu = (menu: MenuItem) => {
      currentMenuItem.value = { ...menu };
      showEditPopup.value = true;
    };

    // Update menu item
    const updateMenuItem = () => {
      if (!currentMenuItem.value) return;

      const index = menus.value.findIndex(
        (m) => m.id === currentMenuItem.value?.id
      );
      if (index !== -1) {
        menus.value[index] = { ...currentMenuItem.value };
        filterMenus(); // Refresh the list
        toggleEditPopup(); // Close the popup
      }
    };

    // Delete method (updated to use ref)
    const deleteMenu = (id: number) => {
      if (confirm("Are you sure you want to delete this menu item?")) {
        menus.value = menus.value.filter((menu) => menu.id !== id);
        filterMenus(); // Refresh filtered list
      }
    };

    const totalPages = computed(() =>
      Math.ceil(filteredMenus.value.length / itemsPerPage.value)
    );

    const paginatedMenus = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage.value;
      const end = start + itemsPerPage.value;
      return filteredMenus.value.slice(start, end);
    });

    const startIndex = computed(
      () => (currentPage.value - 1) * itemsPerPage.value
    );

    const endIndex = computed(() =>
      Math.min(
        currentPage.value * itemsPerPage.value,
        filteredMenus.value.length
      )
    );

    const goToPage = (page: number) => {
      currentPage.value = page;
    };

    const nextPage = () => {
      if (currentPage.value < totalPages.value) {
        currentPage.value++;
      }
    };

    const prevPage = () => {
      if (currentPage.value > 1) {
        currentPage.value--;
      }
    };

    // Checkbox functionality
    const allItemsSelected = computed(() => {
      if (paginatedMenus.value.length === 0) return false;
      return paginatedMenus.value.every((menu) =>
        selectedItems.value.includes(menu.id)
      );
    });

    const toggleAllCheckboxes = (event: Event) => {
      const target = event.target as HTMLInputElement;
      if (target.checked) {
        // Add all visible items to selection
        paginatedMenus.value.forEach((menu) => {
          if (!selectedItems.value.includes(menu.id)) {
            selectedItems.value.push(menu.id);
          }
        });
      } else {
        // Remove all visible items from selection
        selectedItems.value = selectedItems.value.filter(
          (id) => !paginatedMenus.value.some((menu) => menu.id === id)
        );
      }
    };

    // Format price with currency
    const formatPrice = (price: number) => {
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 2,
      }).format(price);
    };

    return {
      menus,
      searchQuery,
      filteredMenus,
      filterMenus,
      paginatedMenus,
      currentPage,
      totalPages,
      startIndex,
      endIndex,
      goToPage,
      nextPage,
      prevPage,
      selectedItems,
      allItemsSelected,
      toggleAllCheckboxes,
      showAddPopup,
      showEditPopup,
      formatPrice,
      editMenu,
      deleteMenu,
      updateMenuItem,
      toggleEditPopup,
      toggleAddPopup,
    };
  },
});
</script>

<style lang="scss" scoped>
.menus-card {
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
              text-align: start;
              padding: {
                bottom: 13px !important;
                top: 0 !important;
              }
              .form-check {
                min-height: auto;
                font-size: 12px;
              }
              &:first-child {
                padding-left: 0 !important;
              }
              &:last-child {
                padding-right: 0 !important;
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

                .v-img {
                  width: 30px;
                }
                a {
                  font-size: var(--fontSize);
                }
              }
              .action-buttons {
                justify-content: end;
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
      }
    }
  }
}
</style>
