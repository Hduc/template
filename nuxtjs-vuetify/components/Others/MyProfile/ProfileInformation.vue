<template>
  <v-card
    class="mp-profile-information-card trezo-card mb-25 border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0">Profile Information</h5>
    </div>
    <div class="profile-information-content">
      <ul class="info-list pr-0 pl-0 mb-0 mt-0 list-unstyled">
        <li class="text-black fw-medium">
          <span class="text-body fw-normal">User ID:</span> 7001
        </li>
        <li class="text-black fw-medium">
          <span class="text-body fw-normal">Full Name:</span> Olivia John
        </li>
        <li class="text-black fw-medium">
          <span class="text-body fw-normal">Email:</span> olivia&#64;trezo.com
        </li>
        <li class="text-black fw-medium">
          <span class="text-body fw-normal">Role:</span> Administrator
        </li>
        <li class="text-black fw-medium">
          <span class="text-body fw-normal">Location:</span> New York, USA
        </li>
        <li class="text-black fw-medium">
          <span class="text-body fw-normal">Join Date:</span> 10 May 2022
        </li>
      </ul>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "ProfileInformation",
};
</script>

<style lang="scss" scoped>
.mp-profile-information-card {
  .profile-information-content {
    .info-list {
      li {
        margin-bottom: 14px;

        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
}
</style>
