<template>
  <div class="card bg-primary border-0 rounded-3 welcome-box mb-4">
    <div class="card-body p-4">
      <div class="row align-items-center">
        <div class="col-lg-8 col-md-8 col-sm-8">
          <div class="border-bottom">
            <h3 class="text-white fw-semibold mb-1">
              Good Morning, <span class="text-danger-div">Olivia!</span>
            </h3>
            <p class="text-light">
              Here's what's happening with your store today.
            </p>
          </div>

          <div class="d-flex align-items-center flex-wrap gap-4 gap-xxl-5">
            <div class="d-flex align-items-center welcome-status-item">
              <div class="flex-shrink-0">
                <i class="material-symbols-outlined">shopping_bag</i>
              </div>
              <div class="flex-grow-1 ms-3">
                <h5 class="text-white fw-semibold mb-0">86 New orders</h5>
                <p class="text-light">Awaiting processing</p>
              </div>
            </div>

            <div class="d-flex align-items-center welcome-status-item">
              <div class="flex-shrink-0">
                <i class="material-symbols-outlined icon-bg"> chat_error </i>
              </div>
              <div class="flex-grow-1 ms-3">
                <h5 class="text-white fw-semibold mb-0">35 Products</h5>
                <p class="text-light">Out of stock</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-4">
          <div class="welcome-img text-center text-sm-end mt-4 mt-sm-0">
            <img src="@/assets/images/welcome.png" alt="welcome" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WelcomeDashboard",
};
</script>
