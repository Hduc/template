<template>
  <div class="card bg-white border-0 rounded-3 mb-4">
    <div class="card-body p-4">
      <form>
        <div class="row">
          <div class="col-lg-4 col-sm-6">
            <div class="form-group mb-4">
              <label class="label text-secondary">Event Name</label>
              <input
                type="text"
                class="form-control h-55"
                placeholder="Enter event name"
              />
            </div>
          </div>
          <div class="col-lg-4 col-sm-6">
            <div class="form-group mb-4">
              <label class="label text-secondary">Ticket Type</label>
              <select
                class="form-select form-control h-55"
                aria-label="Default select example"
              >
                <option selected>Select</option>
                <option value="1">Free</option>
                <option value="2">Paid</option>
              </select>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6">
            <div class="form-group mb-4">
              <label class="label text-secondary">Ticket Price</label>
              <input
                type="text"
                class="form-control h-55"
                placeholder="Enter ticket price"
              />
            </div>
          </div>
          <div class="col-lg-4 col-sm-6">
            <div class="form-group mb-4">
              <label class="label text-secondary">Event Type</label>
              <select
                class="form-select form-control h-55"
                aria-label="Default select example"
              >
                <option selected>Select</option>
                <option value="1">Online</option>
                <option value="2">Offline</option>
                <option value="2">Both</option>
              </select>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6">
            <div class="form-group mb-4">
              <label class="label text-secondary">Select Topic</label>
              <select
                class="form-select form-control h-55"
                aria-label="Default select example"
              >
                <option selected>Select</option>
                <option value="1">Pepper Festival</option>
                <option value="2">A Day of Comedy</option>
                <option value="2">Replicate</option>
              </select>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6">
            <div class="form-group mb-4">
              <label class="label text-secondary">Event Vanue</label>
              <input
                type="text"
                class="form-control h-55"
                placeholder="Enter event vanue"
              />
            </div>
          </div>
          <div class="col-lg-4 col-sm-6">
            <div class="form-group mb-4">
              <label class="label text-secondary">Event Country</label>
              <select
                class="form-select form-control h-55"
                aria-label="Default select example"
              >
                <option selected>Select</option>
                <option value="1">Switzerland</option>
                <option value="2">New Zealand</option>
                <option value="2">Germany</option>
              </select>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6">
            <div class="form-group mb-4">
              <label class="label text-secondary">Event State</label>
              <select
                class="form-select form-control h-55"
                aria-label="Default select example"
              >
                <option selected>Select</option>
                <option value="1">Florida</option>
                <option value="2">Wisconsin</option>
                <option value="2">Washington</option>
              </select>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6">
            <div class="form-group mb-4">
              <label class="label text-secondary">Event City</label>
              <select
                class="form-select form-control h-55"
                aria-label="Default select example"
              >
                <option selected>Select</option>
                <option value="1">New York</option>
                <option value="2">Tokyo</option>
                <option value="2">London</option>
              </select>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6">
            <div class="form-group mb-4">
              <label class="label text-secondary">Event Start Date</label>
              <input type="date" class="form-control h-55" />
            </div>
          </div>
          <div class="col-lg-4 col-sm-6">
            <div class="form-group mb-4">
              <label class="label text-secondary">Event End Date</label>
              <input type="date" class="form-control h-55" />
            </div>
          </div>
          <div class="col-lg-4 col-sm-6">
            <div class="form-group mb-4">
              <label class="label text-secondary">Event Time</label>
              <input type="time" class="form-control h-55" />
            </div>
          </div>
          <div class="col-lg-4 col-sm-6">
            <div class="form-group mb-4">
              <label class="label text-secondary">Registration Deadline</label>
              <input type="date" class="form-control h-55" />
            </div>
          </div>
          <div class="col-lg-4 col-sm-6">
            <div class="form-group mb-4">
              <label class="label text-secondary">Event Organizers</label>
              <input
                type="text"
                class="form-control h-55"
                placeholder="Enter event organizers name"
              />
            </div>
          </div>
          <div class="col-lg-4">
            <div class="form-group mb-4">
              <label class="label text-secondary">Event Sponsors</label>
              <input
                type="text"
                class="form-control h-55"
                placeholder="Enter event sponsors name"
              />
            </div>
          </div>
          <div class="col-lg-6">
            <div class="form-group mb-4">
              <label class="label text-secondary">Event Details</label>
              <TextEditor class="text-editor" />
            </div>
          </div>
          <div class="col-lg-6">
            <div class="form-group mb-4">
              <label class="label text-secondary">Event Image</label>
              <div
                class="form-control h-100 text-center position-relative p-4 p-lg-5"
              >
                <div class="product-upload">
                  <label for="file-upload" class="file-upload mb-0">
                    <i
                      class="ri-folder-image-line bg-primary bg-opacity-10 p-2 rounded-1 text-primary"
                    ></i>
                    <span class="d-block text-body fs-14">
                      Drag and drop an image or
                      <span class="text-primary text-decoration-underline">
                        Browse
                      </span>
                    </span>
                  </label>
                  <input id="file-upload" type="file" />
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-12">
            <div class="d-flex flex-wrap gap-3">
              <button
                class="btn btn-danger py-2 px-4 fw-medium fs-16 text-white"
              >
                Cancel
              </button>
              <button class="btn btn-primary py-2 px-4 fw-medium fs-16">
                <i class="ri-add-line text-white fw-medium"></i> Create Event
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TextEditor from "@/components/Common/TextEditor.vue";

export default defineComponent({
  name: "CreateAnEvent",
  components: {
    TextEditor,
  },
});
</script>

<style lang="scss" scoped>
.text-editor {
  min-height: 140px;
}
.ql-toolbar.ql-snow + .ql-container.ql-snow {
  border-top: 0px;
  height: 140px !important;
}
</style>
