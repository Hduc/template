<template>
  <v-card
    class="trezo-card border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header">
      <form class="search-box position-relative">
        <input
          type="text"
          class="input-search d-block"
          placeholder="Search here....."
          v-model="searchQuery"
          @input="filterProperties"
        />
        <button type="submit">
          <i class="material-symbols-outlined">search</i>
        </button>
      </form>

      <AddNewProperty />
    </div>

    <div class="trezo-card-content">
      <div class="basic-table table-responsive">
        <table class="table mb-0" border="0" cellspacing="0" cellpadding="0">
          <thead>
            <tr>
              <th scope="col" class="fw-medium">
                <div class="d-flex align-items-center gap-5">
                  <div class="form-check mb-0">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      v-model="selectAll"
                      @change="toggleSelectAll"
                    />
                  </div>
                  Code
                </div>
              </th>
              <th scope="col" class="fw-medium">Property</th>
              <th scope="col" class="fw-medium">Address</th>
              <th scope="col" class="fw-medium">Views</th>
              <th scope="col" class="fw-medium">Date</th>
              <th scope="col" class="fw-medium">Status</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="property in paginatedProperties" :key="property.id">
              <td>
                <div class="d-flex align-items-center gap-5">
                  <div class="form-check mb-0">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      :value="property.id"
                      v-model="selectedProperties"
                    />
                  </div>
                  {{ property.code }}
                </div>
              </td>
              <td>
                <div class="product-info d-flex align-items-center">
                  <div class="image">
                    <v-img
                      :src="property.imageUrl || getDefaultImageUrl()"
                      alt="property-image"
                    />
                  </div>
                  <div class="info">
                    <span class="d-block text-body">
                      {{ property.type }}
                    </span>
                    <RouterLink
                      to="/real-estate-agent/properties"
                      class="fw-medium d-inline-block"
                    >
                      {{ property.name }}
                    </RouterLink>
                  </div>
                </div>
              </td>
              <td>
                {{ property.address }}
              </td>
              <td>
                {{ property.views.toLocaleString() }}
              </td>
              <td>
                {{ formatDate(property.date) }}
              </td>
              <td>
                <span
                  :class="{
                    'trezo-badge with-border border-radius py-0': true,
                    finished: property.status === 'Active',
                    rejected: property.status === 'Inactive',
                  }"
                >
                  {{ property.status }}
                </span>
              </td>
              <td>
                <div class="action-buttons d-flex align-items-center">
                  <RouterLink
                    to="/real-estate-agent/properties"
                    class="p-0 bg-transparent d-inline-block lh-1 border-0"
                  >
                    <i class="material-symbols-outlined"> visibility </i>
                  </RouterLink>
                  <button
                    type="button"
                    class="p-0 bg-transparent d-inline-block lh-1 border-0"
                  >
                    <i class="material-symbols-outlined"> edit </i>
                  </button>
                  <button
                    type="button"
                    class="p-0 bg-transparent d-inline-block lh-1 border-0"
                    @click="confirmDelete(property.id)"
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
          {{ filteredProperties.length }} Results
        </span>

        <nav aria-label="Page navigation example">
          <ul class="pagination mb-0 justify-content-center">
            <li class="page-item">
              <button
                class="page-link icon"
                aria-label="Previous"
                :disabled="currentPage === 1"
                @click="changePage(currentPage - 1)"
              >
                <i class="material-symbols-outlined">keyboard_arrow_left</i>
              </button>
            </li>
            <li class="page-item" v-for="page in totalPages" :key="page">
              <button
                class="page-link"
                :class="{ active: currentPage === page }"
                @click="changePage(page)"
              >
                {{ page }}
              </button>
            </li>
            <li class="page-item">
              <button
                class="page-link icon"
                aria-label="Next"
                :disabled="currentPage === totalPages"
                @click="changePage(currentPage + 1)"
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
import AddNewProperty from "./AddNewProperty.vue";

interface Property {
  id: number;
  code: string;
  type: string;
  name: string;
  image: string;
  imageUrl: string;
  address: string;
  views: number;
  date: string;
  status: "Active" | "Inactive";
}

interface CustomFormData {
  id: number;
  code: string;
  type: string;
  name: string;
  image: string;
  imageUrl: string;
  address: string;
  views: number;
  date: string;
  status: string;
  imagePreview: string;
  imageFile: File | null;
}

import image1 from "@/assets/images/property-17.jpg";
import image2 from "@/assets/images/property-18.jpg";
import image3 from "@/assets/images/property-19.jpg";
import image4 from "@/assets/images/property-20.jpg";
import image5 from "@/assets/images/property-21.jpg";
import image6 from "@/assets/images/property-22.jpg";
import image7 from "@/assets/images/property-23.jpg";
import image8 from "@/assets/images/property-24.jpg";
import image9 from "@/assets/images/property-25.jpg";
import image10 from "@/assets/images/property-26.jpg";

export default defineComponent({
  name: "Properties",
  components: {
    AddNewProperty,
  },
  setup() {
    const properties = ref<Property[]>([
      {
        id: 1,
        code: "TRZ-32",
        type: "Luxury Apartment",
        name: "The Golden Haven",
        image: "property-17.jpg",
        imageUrl: image1,
        address: "123 Sunshine Boulevard, Vancouver, BC",
        views: 1450,
        date: "2025-11-12",
        status: "Active",
      },
      {
        id: 2,
        code: "TRZ-35",
        type: "High-End Villa",
        name: "Tranquil Meadows",
        image: "property-18.jpg",
        imageUrl: image2,
        address: "456 Whispering Pines Lane, Toronto, ON",
        views: 1890,
        date: "2025-11-10",
        status: "Active",
      },
      {
        id: 3,
        code: "TRZ-36",
        type: "Beachfront House",
        name: "Aurora Heights",
        image: "property-19.jpg",
        imageUrl: image3,
        address: "789 Northern Lights Drive, Calgary, AB",
        views: 1320,
        date: "2025-11-08",
        status: "Active",
      },
      {
        id: 4,
        code: "TRZ-37",
        type: "Mountain Cabin",
        name: "Crystal Cove Villas",
        image: "property-20.jpg",
        imageUrl: image4,
        address: "234 Seaside Avenue, Halifax, NS",
        views: 1124,
        date: "2025-11-10",
        status: "Inactive",
      },
      {
        id: 5,
        code: "TRZ-39",
        type: "Business Center",
        name: "Verdant Valley Estates",
        image: "property-21.jpg",
        imageUrl: image5,
        address: "567 Greenfield Circle, Winnipeg, MB",
        views: 1532,
        date: "2025-10-18",
        status: "Active",
      },
      {
        id: 6,
        code: "TRZ-42",
        type: "Conference & Event Venue",
        name: "Summit Business Hub",
        image: "property-22.jpg",
        imageUrl: image6,
        address: "890 Innovation Street, Ottawa, ON",
        views: 7721,
        date: "2025-10-17",
        status: "Active",
      },
      {
        id: 7,
        code: "TRZ-46",
        type: "Luxury Resort",
        name: "Pinnacle Plaza",
        image: "property-23.jpg",
        imageUrl: image7,
        address: "345 Cityscape Road, Edmonton, AB",
        views: 5214,
        date: "2025-10-13",
        status: "Inactive",
      },
      {
        id: 8,
        code: "TRZ-47",
        type: "Beachfront Resort",
        name: "The Nexus Tower",
        image: "property-24.jpg",
        imageUrl: image8,
        address: "123 Sunshine Boulevard, Vancouver, BC",
        views: 1450,
        date: "2025-11-12",
        status: "Active",
      },
      {
        id: 9,
        code: "TRZ-48",
        type: "Eco-Friendly Hotel",
        name: "Golden Sands Lodge",
        image: "property-25.jpg",
        imageUrl: image9,
        address: "456 Whispering Pines Lane, Toronto, ON",
        views: 1890,
        date: "2025-11-10",
        status: "Active",
      },
      {
        id: 10,
        code: "TRZ-49",
        type: "Boutique Hotel",
        name: "Azure Bay Inn",
        image: "property-26.jpg",
        imageUrl: image10,
        address: "789 Northern Lights Drive, Calgary, AB",
        views: 1320,
        date: "2025-11-08",
        status: "Active",
      },
    ]);

    const formData = ref<CustomFormData>({
      id: 0,
      code: "",
      type: "",
      name: "",
      image: "",
      imageUrl: "",
      address: "",
      views: 0,
      date: "",
      status: "Active",
      imagePreview: "",
      imageFile: null,
    });

    const isEditing = ref(false);
    const searchQuery = ref("");
    const selectedProperties = ref<number[]>([]);
    const selectAll = ref(false);
    const currentPage = ref(1);
    const itemsPerPage = 8;
    const propertyToDelete = ref<number | null>(null);
    const isSubmitting = ref(false);
    const isDeleting = ref(false);

    const filteredProperties = computed(() => {
      if (!searchQuery.value.trim()) return properties.value;

      const query = searchQuery.value.toLowerCase().trim();
      return properties.value.filter(
        (property: {
          code: string;
          name: string;
          type: string;
          address: string;
          status: string;
        }) =>
          property.code.toLowerCase().includes(query) ||
          property.name.toLowerCase().includes(query) ||
          property.type.toLowerCase().includes(query) ||
          property.address.toLowerCase().includes(query) ||
          property.status.toLowerCase().includes(query)
      );
    });

    const totalPages = computed(() =>
      Math.ceil(filteredProperties.value.length / itemsPerPage)
    );

    const paginatedProperties = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage;
      const end = start + itemsPerPage;
      return filteredProperties.value.slice(start, end);
    });

    const showingStart = computed(
      () => (currentPage.value - 1) * itemsPerPage + 1
    );

    const showingEnd = computed(() => {
      const end = currentPage.value * itemsPerPage;
      return Math.min(end, filteredProperties.value.length);
    });

    const getImageUrl = (imageName: string): string => {
      const imageMap: Record<string, string> = {
        "property-17.jpg": image1,
        "property-18.jpg": image2,
        "property-19.jpg": image3,
        "property-20.jpg": image4,
        "property-21.jpg": image5,
        "property-22.jpg": image6,
        "property-23.jpg": image7,
        "property-24.jpg": image8,
        "property-25.jpg": image9,
        "property-26.jpg": image10,
      };

      return imageMap[imageName] || image1;
    };

    const getDefaultImageUrl = (): string => {
      return image1; // Replace with your desired default image URL
    };

    const handleImageError = (event: Event) => {
      const img = event.target as HTMLImageElement;
      img.src = image1;
    };

    const handleFileUpload = (event: Event) => {
      const input = event.target as HTMLInputElement;
      if (!input.files || !input.files[0]) return;

      const file = input.files[0];

      if (!file.type.startsWith("image/")) {
        alert("Please select an image file (JPEG, PNG, etc.)");
        return;
      }

      if (file.size > 2 * 1024 * 1024) {
        alert("Image must be less than 2MB");
        return;
      }

      formData.value.imageFile = file;
      formData.value.image = file.name;

      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result) {
          formData.value.imagePreview = e.target.result as string;
          formData.value.imageUrl = e.target.result as string;
        }
      };
      reader.readAsDataURL(file);
    };

    const formatDate = (dateString: string): string => {
      const options: Intl.DateTimeFormatOptions = {
        day: "numeric",
        month: "short",
        year: "numeric",
      };
      return new Date(dateString).toLocaleDateString("en-US", options);
    };

    const filterProperties = () => {
      currentPage.value = 1;
      selectedProperties.value = [];
      selectAll.value = false;
    };

    const changePage = (page: number) => {
      if (page >= 1 && page <= totalPages.value) {
        currentPage.value = page;
      }
    };

    const toggleSelectAll = () => {
      if (selectAll.value) {
        selectedProperties.value = paginatedProperties.value.map(
          (property: { id: any }) => property.id
        );
      } else {
        selectedProperties.value = [];
      }
    };

    const removeImage = () => {
      formData.value.imagePreview = "";
      formData.value.imageFile = null;
      formData.value.image = "";
      formData.value.imageUrl = "";
    };

    const resetForm = () => {
      formData.value = {
        id: 0,
        code: "",
        type: "",
        name: "",
        image: "",
        imageUrl: "",
        address: "",
        views: 0,
        date: "",
        status: "Active",
        imagePreview: "",
        imageFile: null,
      };
      isEditing.value = false;
      isEditing;
      isSubmitting.value = false;

      const fileInput = document.getElementById(
        "file-upload"
      ) as HTMLInputElement;
      if (fileInput) {
        fileInput.value = "";
      }
    };

    const submitForm = () => {
      if (isEditing.value) {
        updateProperty();
      } else {
        addProperty();
      }
    };

    const addProperty = async () => {
      isSubmitting.value = true;

      try {
        const newId =
          properties.value.length > 0
            ? Math.max(...properties.value.map((p: { id: any }) => p.id)) + 1
            : 1;

        const newProperty: Property = {
          id: newId,
          code: formData.value.code,
          type: formData.value.type,
          name: formData.value.name,
          image: formData.value.imageFile?.name || `property-${newId}.jpg`,
          imageUrl:
            formData.value.imagePreview || getImageUrl(`property-${newId}.jpg`),
          address: formData.value.address,
          views: formData.value.views,
          date: formData.value.date,
          status: formData.value.status as "Active" | "Inactive",
        };

        properties.value.unshift(newProperty);
        resetForm();
      } catch (error) {
        console.error("Error adding property:", error);
        alert("Failed to add property. Please try again.");
      } finally {
        isSubmitting.value = false;
      }
    };

    const updateProperty = async () => {
      isSubmitting.value = true;

      try {
        const index = properties.value.findIndex(
          (p: { id: any }) => p.id === formData.value.id
        );

        if (index !== -1) {
          const updatedProperty = {
            ...properties.value[index],
            code: formData.value.code,
            type: formData.value.type,
            name: formData.value.name,
            image:
              formData.value.imageFile?.name || properties.value[index].image,
            imageUrl:
              formData.value.imagePreview || properties.value[index].imageUrl,
            address: formData.value.address,
            views: formData.value.views,
            date: formData.value.date,
            status: formData.value.status as "Active" | "Inactive",
          };

          properties.value[index] = updatedProperty;
        }

        resetForm();
      } catch (error) {
        console.error("Error updating property:", error);
        alert("Failed to update property. Please try again.");
      } finally {
        isSubmitting.value = false;
      }
    };

    const editProperty = (property: Property) => {
      isEditing.value = true;
      formData.value = {
        id: property.id,
        code: property.code,
        type: property.type,
        name: property.name,
        image: property.image,
        imageUrl: property.imageUrl,
        address: property.address,
        views: property.views,
        date: property.date,
        status: property.status,
        imagePreview: property.imageUrl,
        imageFile: null,
      };
    };

    const confirmDelete = (id: number) => {
      propertyToDelete.value = id;
    };

    const deleteProperty = async () => {
      if (propertyToDelete.value === null) return;

      isDeleting.value = true;

      try {
        // Create a new array without the deleted property
        properties.value = properties.value.filter(
          (p: { id: any }) => p.id !== propertyToDelete.value
        );

        // Reset selection if the deleted property was selected
        selectedProperties.value = selectedProperties.value.filter(
          (id: any) => id !== propertyToDelete.value
        );

        // Adjust pagination if needed
        if (paginatedProperties.value.length === 0 && currentPage.value > 1) {
          currentPage.value = Math.max(1, currentPage.value - 1);
        }

        // Reset the delete target
        propertyToDelete.value = null;
      } catch (error) {
        console.error("Error deleting property:", error);
        alert("Failed to delete property. Please try again.");
      } finally {
        isDeleting.value = false;
      }
    };

    const viewProperty = (property: Property) => {
      console.log("Viewing property:", property);
      // In a real app, you would navigate to a detailed view
      // Example: router.push(`/properties/${property.id}`);
    };

    return {
      properties,
      formData,
      isEditing,
      searchQuery,
      selectedProperties,
      selectAll,
      currentPage,
      filteredProperties,
      paginatedProperties,
      totalPages,
      showingStart,
      showingEnd,
      isSubmitting,
      isDeleting,
      getImageUrl,
      getDefaultImageUrl,
      formatDate,
      filterProperties,
      changePage,
      toggleSelectAll,
      handleFileUpload,
      removeImage,
      resetForm,
      handleImageError,
      submitForm,
      addProperty,
      editProperty,
      updateProperty,
      confirmDelete,
      deleteProperty,
      viewProperty,
    };
  },
});
</script>

<style scoped lang="scss">
.trezo-card {
  .trezo-card-content {
    .basic-table {
      table,
      .table {
        thead {
          tr {
            th {
              text-align: left;
              .form-check {
                .form-check-input {
                  margin-top: 5px;
                }
              }
              .gap-5 {
                gap: 5px !important;
              }
            }
          }
        }
        tbody {
          tr {
            td {
              .form-check {
                .form-check-input {
                  margin-top: 5px;
                }
              }
              .gap-5 {
                gap: 5px !important;
              }
              .product-info {
                .image {
                  .v-img {
                    width: 60px;
                  }
                }
                .info {
                  span {
                    margin-bottom: 3px;
                  }
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
