<template>
  <div class="m-auto m-1230">
    <form style="max-width: 550px">
      <div
        class="card bg-primary bg-opacity-10 border-0 rounded-0 rounded-top-3 position-relative"
      >
        <div class="card-body p-4 pb-5 my-2">
          <div class="mw-350 text-center">
            <h3 class="text-primary fw-semibold fs-20 mb-2">
              Welcome to Trezo Dashboard !
            </h3>
            <p class="text-primary fs-15">
              You have done 68% 😎 more sales today. Check your new badge in
              your profile.
            </p>
          </div>
        </div>
      </div>
      <div class="card bg-white border-0 rounded-bottom-3 mb-4">
        <div class="card-body p-4">
          <div class="text-center">
            <img
              src="~/assets/images/user-53.jpg"
              class="wh-55 border border-2 border-color-white"
              style="box-shadow: 0px 4px 15px 0px rgba(82, 150, 212, 0.08)"
              alt="user"
            />
            <span class="d-block fs-16 fw-semibold text-dark mt-1 mb-4">
              Andrew Burns
            </span>
          </div>
          <div class="form-group mb-4">
            <label class="label text-secondary">Password</label>
            <div class="form-group">
              <div class="password-wrapper position-relative">
                <input
                  type="password"
                  id="password"
                  class="form-control h-58 text-dark"
                  value="@password#"
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            class="btn btn-primary fs-16 fw-medium text-dark heading-fornt py-2 px-4 text-white w-100"
          >
            Unlock
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "LockScreen",
});
</script>
