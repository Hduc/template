<template>
  <div class="row justify-content-center">
    <div class="col-xl-4 col-lg-3 col-md-4">
      <AppsEmailSidebar />
    </div>

    <div class="col-xl-8 col-lg-9 col-md-8">
      <div class="card bg-white border-0 rounded-3 mb-4">
        <div class="card-body p-4">
          <div
            class="d-flex justify-content-center justify-content-sm-between align-items-center text-center flex-wrap gap-2 showing-wrap pb-4 border-bottom"
          >
            <div class="d-flex position-relative top-3">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <div class="form-check-label">
                  <div class="btn-group">
                    <button
                      type="button"
                      class="btn btn-danger dropdown-toggle p-0 border-0 ps-0 bg-transparent"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    ></button>

                    <ul
                      class="dropdown-menu bg-white box-shadow"
                      style="border: 1px solid #f6f7f9"
                    >
                      <li><a class="dropdown-item fs-13" href="#">All</a></li>
                      <li><a class="dropdown-item fs-13" href="#">None</a></li>
                      <li><a class="dropdown-item fs-13" href="#">Read</a></li>
                      <li>
                        <a class="dropdown-item fs-13" href="#">Unread</a>
                      </li>
                      <li>
                        <a class="dropdown-item fs-13" href="#">Starred</a>
                      </li>
                      <li>
                        <a class="dropdown-item fs-13" href="#">Untarred</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <button
                class="pe-0 border-0 bg-transparent ms-4 ps-2"
                v-b-tooltip.hover.top="'Archive'"
              >
                <i class="material-symbols-outlined fs-20 text-body hover">
                  archive
                </i>
              </button>
              <button
                class="pe-0 border-0 bg-transparent ms-2"
                v-b-tooltip.hover.top="'Help'"
              >
                <i class="material-symbols-outlined fs-20 text-body hover">
                  help_clinic
                </i>
              </button>
              <button
                class="pe-0 border-0 bg-transparent ms-2"
                v-b-tooltip.hover.top="'Trash'"
              >
                <i class="material-symbols-outlined fs-20 text-body hover">
                  delete
                </i>
              </button>

              <div
                class="dropdown action-opt ms-2 position-relative top-3"
                v-b-tooltip.hover.top="'More_Option'"
              >
                <button
                  class="p-0 border-0 bg-transparent"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i class="material-symbols-outlined fs-20 text-body hover">
                    more_vert
                  </i>
                </button>

                <ul
                  class="dropdown-menu dropdown-menu-end bg-white border box-shadow"
                >
                  <li>
                    <a class="dropdown-item" href="javascript:;">
                      <EyeIcon class="eye"></EyeIcon>
                      View All
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="javascript:;">
                      <Trash2Icon class="trash-2"></Trash2Icon>
                      Delete One
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="javascript:;">
                      <LockIcon class="lock"></LockIcon>
                      Block
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="d-flex align-items-center">
              <div class="d-flex align-items-center">
                <span class="fs-12 fw-medium me-2">1 - 5 of 12</span>
                <nav aria-label="Page navigation example">
                  <ul class="pagination mb-0 justify-content-center">
                    <li class="page-item">
                      <a class="page-link icon" href="#" aria-label="Previous">
                        <i class="material-symbols-outlined">
                          keyboard_arrow_left
                        </i>
                      </a>
                    </li>
                    <li class="page-item">
                      <a class="page-link icon" href="#" aria-label="Next">
                        <i class="material-symbols-outlined">
                          keyboard_arrow_right
                        </i>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>

          <div class="default-table-area email-list">
            <div class="table-responsive">
              <table class="table align-middle">
                <tbody>
                  <tr>
                    <td class="ps-0">
                      <div class="d-flex align-items-center">
                        <div class="form-check me-4">
                          <input
                            class="form-check-input wh-20"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault2"
                          />
                        </div>
                        <i
                          class="material-symbols-outlined fs-20 text-body position-relative top-1"
                        >
                          alarm
                        </i>
                      </div>
                    </td>
                    <td>
                      <span class="fs-14 fw-medium">Google</span>
                    </td>
                    <td>
                      <NuxtLink
                        to="/apps/email/read-email"
                        class="w-330 d-inline-block text-truncate text-secondary"
                      >
                        2-Step Verification Turn Off
                        <span class="text-body">
                          - Integer nec arcu ac nisi...
                        </span>
                      </NuxtLink>
                    </td>
                    <td class="text-end pe-0 fs-12">
                      <span>20 JULY 2024</span>
                    </td>
                  </tr>
                  <tr>
                    <td class="ps-0">
                      <div class="d-flex align-items-center">
                        <div class="form-check me-4">
                          <input
                            class="form-check-input wh-20"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault3"
                          />
                        </div>
                        <i
                          class="material-symbols-outlined fs-20 text-body position-relative"
                        >
                          alarm
                        </i>
                      </div>
                    </td>
                    <td>
                      <span class="fs-14 fw-medium">Facebook</span>
                    </td>
                    <td>
                      <NuxtLink
                        to="/apps/email/read-email"
                        class="w-330 d-inline-block text-truncate text-secondary"
                      >
                        Friend Request
                        <span class="text-body">
                          - Sed in libero eget lorem fermentum...
                        </span>
                      </NuxtLink>
                    </td>
                    <td class="text-end pe-0 fs-12">
                      <span>21 JULY 2024</span>
                    </td>
                  </tr>
                  <tr>
                    <td class="ps-0">
                      <div class="d-flex align-items-center">
                        <div class="form-check me-4">
                          <input
                            class="form-check-input wh-20"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault4"
                          />
                        </div>
                        <i
                          class="material-symbols-outlined fs-20 text-body position-relative"
                        >
                          alarm
                        </i>
                      </div>
                    </td>
                    <td>
                      <span class="fs-14 fw-medium">Linkedin</span>
                    </td>
                    <td>
                      <NuxtLink
                        to="/apps/email/read-email"
                        class="w-330 d-inline-block text-truncate text-secondary"
                      >
                        Travel Information
                        <span class="text-body">
                          - Vivamus vestibulum ligula in mauris...
                        </span>
                      </NuxtLink>
                    </td>
                    <td class="text-end pe-0 fs-12">
                      <span>22 JULY 2024</span>
                    </td>
                  </tr>
                  <tr>
                    <td class="ps-0">
                      <div class="d-flex align-items-center">
                        <div class="form-check me-4">
                          <input
                            class="form-check-input wh-20"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault5"
                          />
                        </div>
                        <i
                          class="material-symbols-outlined fs-20 text-body position-relative"
                        >
                          alarm
                        </i>
                      </div>
                    </td>
                    <td>
                      <span class="fs-14 fw-medium">Ethan Parker</span>
                    </td>
                    <td>
                      <NuxtLink
                        to="/apps/email/read-email"
                        class="w-330 d-inline-block text-truncate text-secondary"
                      >
                        Leave Application
                        <span class="text-body">
                          - Integer nec arcu ac nisi...
                        </span>
                      </NuxtLink>
                    </td>
                    <td class="text-end pe-0 fs-12">
                      <span>23 JULY 2024</span>
                    </td>
                  </tr>
                  <tr>
                    <td class="ps-0">
                      <div class="d-flex align-items-center">
                        <div class="form-check me-4">
                          <input
                            class="form-check-input wh-20"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault6"
                          />
                        </div>
                        <i
                          class="material-symbols-outlined fs-20 text-body position-relative"
                        >
                          alarm
                        </i>
                      </div>
                    </td>
                    <td>
                      <span class="fs-14 fw-medium">Dribbble</span>
                    </td>
                    <td>
                      <NuxtLink
                        to="/apps/email/read-email"
                        class="w-330 d-inline-block text-truncate text-secondary"
                      >
                        Design Inspiration
                        <span class="text-body">
                          - Sed in libero eget lorem fermentum...
                        </span>
                      </NuxtLink>
                    </td>
                    <td class="text-end pe-0 fs-12">
                      <span>24 JULY 2024</span>
                    </td>
                  </tr>
                  <tr>
                    <td class="ps-0">
                      <div class="d-flex align-items-center">
                        <div class="form-check me-4">
                          <input
                            class="form-check-input wh-20"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault7"
                          />
                        </div>
                        <i
                          class="material-symbols-outlined fs-20 text-body position-relative"
                        >
                          alarm
                        </i>
                      </div>
                    </td>
                    <td>
                      <span class="fs-14 fw-medium">Instagram</span>
                    </td>
                    <td>
                      <NuxtLink
                        to="/apps/email/read-email"
                        class="w-330 d-inline-block text-truncate text-secondary"
                      >
                        Training Schedule
                        <span class="text-body">
                          - Vivamus vestibulum ligula in mauris...
                        </span>
                      </NuxtLink>
                    </td>
                    <td class="text-end pe-0 fs-12">
                      <span>25 JULY 2024</span>
                    </td>
                  </tr>
                  <tr>
                    <td class="ps-0">
                      <div class="d-flex align-items-center">
                        <div class="form-check me-4">
                          <input
                            class="form-check-input wh-20"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault8"
                          />
                        </div>
                        <i
                          class="material-symbols-outlined fs-20 text-body position-relative"
                        >
                          alarm
                        </i>
                      </div>
                    </td>
                    <td>
                      <span class="fs-14 fw-medium">Isabella Cooper</span>
                    </td>
                    <td>
                      <NuxtLink
                        to="/apps/email/read-email"
                        class="w-330 d-inline-block text-truncate text-secondary"
                      >
                        Internal Auditor
                        <span class="text-body">
                          - Sed in libero eget lorem fermentum...
                        </span>
                      </NuxtLink>
                    </td>
                    <td class="text-end pe-0 fs-12">
                      <span>26 JULY 2024</span>
                    </td>
                  </tr>
                  <tr>
                    <td class="ps-0">
                      <div class="d-flex align-items-center">
                        <div class="form-check me-4">
                          <input
                            class="form-check-input wh-20"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault9"
                          />
                        </div>
                        <i
                          class="material-symbols-outlined fs-20 text-body position-relative"
                        >
                          alarm
                        </i>
                      </div>
                    </td>
                    <td>
                      <span class="fs-14 fw-medium">Google</span>
                    </td>
                    <td>
                      <NuxtLink
                        to="/apps/email/read-email"
                        class="w-330 d-inline-block text-truncate text-secondary"
                      >
                        Password Changed
                        <span class="text-body">
                          - Integer nec arcu ac nisi...
                        </span>
                      </NuxtLink>
                    </td>
                    <td class="text-end pe-0 fs-12">
                      <span>27 JULY 2024</span>
                    </td>
                  </tr>
                  <tr>
                    <td class="ps-0">
                      <div class="d-flex align-items-center">
                        <div class="form-check me-4">
                          <input
                            class="form-check-input wh-20"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault10"
                          />
                        </div>
                        <i
                          class="material-symbols-outlined fs-20 text-body position-relative"
                        >
                          alarm
                        </i>
                      </div>
                    </td>
                    <td>
                      <span class="fs-14 fw-medium">Olivia Rodriguez</span>
                    </td>
                    <td>
                      <NuxtLink
                        to="/apps/email/read-email"
                        class="w-330 d-inline-block text-truncate text-secondary"
                      >
                        Virtual Training
                        <span class="text-body">
                          - Vivamus vestibulum ligula in mauris...
                        </span>
                      </NuxtLink>
                    </td>
                    <td class="text-end pe-0 fs-12">
                      <span>28 JULY 2024</span>
                    </td>
                  </tr>
                  <tr>
                    <td class="ps-0">
                      <div class="d-flex align-items-center">
                        <div class="form-check me-4">
                          <input
                            class="form-check-input wh-20"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault11"
                          />
                        </div>
                        <i
                          class="material-symbols-outlined fs-20 text-body position-relative"
                        >
                          alarm
                        </i>
                      </div>
                    </td>
                    <td>
                      <span class="fs-14 fw-medium">YouTube</span>
                    </td>
                    <td>
                      <NuxtLink
                        to="/apps/email/read-email"
                        class="w-330 d-inline-block text-truncate text-secondary"
                      >
                        New Subscriber
                        <span class="text-body">
                          - Sed in libero eget lorem fermentum...
                        </span>
                      </NuxtLink>
                    </td>
                    <td class="text-end pe-0 fs-12">
                      <span>29 JULY 2024</span>
                    </td>
                  </tr>
                  <tr>
                    <td class="ps-0">
                      <div class="d-flex align-items-center">
                        <div class="form-check me-4">
                          <input
                            class="form-check-input wh-20"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault12"
                          />
                        </div>
                        <i
                          class="material-symbols-outlined fs-20 text-body position-relative"
                        >
                          alarm
                        </i>
                      </div>
                    </td>
                    <td>
                      <span class="fs-14 fw-medium">Google</span>
                    </td>
                    <td>
                      <NuxtLink
                        to="/apps/email/read-email"
                        class="w-330 d-inline-block text-truncate text-secondary"
                      >
                        Security Alert
                        <span class="text-body">
                          - Vivamus vestibulum ligula in mauris...
                        </span>
                      </NuxtLink>
                    </td>
                    <td class="text-end pe-0 fs-12">
                      <span>30 JULY 2024</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Snooozed",
});
</script>
