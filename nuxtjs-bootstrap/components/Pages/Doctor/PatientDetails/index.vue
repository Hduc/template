<template>
  <div class="row">
    <div class="col-lg-4">
      <div
        class="personal-info-card trezo-card card mb-4 border-radius d-block bg-white border-0 shadow-none"
      >
        <div class="trezo-card-content">
          <div class="patient-info d-flex align-items-center">
            <img
              src="@/assets/images/patient.jpg"
              alt="patient-image"
              class="rounded-circle"
            />
            <div>
              <h4>Walter White</h4>
              <span class="d-block">
                Patient ID: <span class="text-black">#P-3214</span>
              </span>
            </div>
          </div>
          <h3>Personal Information</h3>
          <ul class="info-list p-0 mb-0 list-unstyled">
            <li>Occupation: <span class="text-black">Teacher</span></li>
            <li>Age: <span class="text-black">65 Years</span></li>
            <li>
              Admitted On: <span class="text-black">21 October, 2025</span>
            </li>
            <li>Bed No: <span class="text-black">L2 - 205</span></li>
          </ul>
        </div>
      </div>
      <div
        class="personal-info-card trezo-card card mb-4 border-radius d-block bg-white border-0 shadow-none"
      >
        <div class="trezo-card-content info d-flex align-items-center">
          <img src="@/assets/images/icons/email.svg" alt="email" />
          <div>
            <span class="d-block"> Email </span>
            <h5 class="mb-0 fw-semibold">walter32&#64;gmail.com</h5>
          </div>
        </div>
      </div>
      <div
        class="personal-info-card trezo-card card mb-4 border-radius d-block bg-white border-0 shadow-none"
      >
        <div class="trezo-card-content info d-flex align-items-center">
          <img src="@/assets/images/icons/call9.svg" alt="call" />
          <div>
            <span class="d-block"> Phone No </span>
            <h5 class="mb-0 fw-semibold">+1 444 266 5599</h5>
          </div>
        </div>
      </div>
      <div
        class="personal-info-card trezo-card card mb-4 border-radius d-block bg-white border-0 shadow-none"
      >
        <div class="trezo-card-content info d-flex align-items-center">
          <img src="@/assets/images/icons/map.svg" alt="map" />
          <div>
            <span class="d-block"> Address </span>
            <h5 class="mb-0 fw-semibold">S. Arrowhead Court Branford9</h5>
          </div>
        </div>
      </div>
    </div>

    <div class="col-lg-8">
      <div
        class="patient-details-card trezo-card card mb-4 border-radius d-block bg-white border-0 shadow-none"
      >
        <div class="trezo-card-content">
          <h3>Disease History</h3>
          <p>
            Molestie tincidunt ut consequat a urna tortor. Vitae velit ac nisl
            velit mauris placerat nisi placerat. Pellentesque viverra lorem
            malesuada nunc tristique sapien. Imperdiet sit hendrerit tincidunt
            bibendum donec adipiscing.
          </p>
          <h3>Key Symptoms</h3>
          <ul class="p-0 mb-0 list-unstyled">
            <li class="position-relative">
              Molestie tincidunt ut consequat a urna tortor.
            </li>
            <li class="position-relative">
              Vitae velit ac nisl velit mauris placerat nisi placerat.
              Pellentesque viverra lorem malesuada nunc tristique sapien.
              Imperdiet sit hendrerit tincidunt bibendum donec adipiscing.
            </li>
            <li class="position-relative">
              Ad minim veniam, quis nostrud exercitation ullamco laboris nis
            </li>
            <li class="position-relative">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum accusantium doloremque
              laudantium.
            </li>
            <li class="position-relative">
              Ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
              sed quia consequuntur magni dolores eos qui ratione voluptate.
            </li>
          </ul>
        </div>
      </div>
      <div
        class="patient-details-card trezo-card card mb-4 border-radius d-block bg-white border-0 shadow-none"
      >
        <div class="trezo-card-content">
          <h3>Note For Patient</h3>
          <p>
            Molestie tincidunt ut consequat a urna tortor. Vitae velit ac nisl
            velit mauris placerat nisi placerat. Pellentesque viverra lorem
            malesuada nunc tristique sapien. Imperdiet sit hendrerit tincidunt
            bibendum donec adipiscing.
          </p>
          <h3>Advice:</h3>
          <ul class="p-0 mb-0 list-unstyled">
            <li class="position-relative">
              Molestie tincidunt ut consequat a urna tortor.
            </li>
            <li class="position-relative">
              Vitae velit ac nisl velit mauris placerat nisi placerat.
              Pellentesque viverra lorem malesuada nunc tristique sapien.
              Imperdiet sit hendrerit tincidunt bibendum donec adipiscing.
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PatientDetails",
});
</script>

<style lang="scss" scoped>
.personal-info-card {
  .trezo-card-content {
    .patient-info {
      gap: 20px;
      margin-bottom: 25px;

      img {
        width: 100px;
      }
      h4 {
        font-size: 20px;
        margin-bottom: 7px;
      }
    }
    h3 {
      font-size: 18px;
      margin-bottom: 15px;
    }
    .info-list {
      li {
        margin-bottom: 12px;

        &:last-child {
          margin-bottom: 0;
        }
      }
    }
    &.info {
      gap: 15px;

      h5 {
        font-size: 16px;
        margin-top: 5px;
      }
    }
  }
}
.patient-details-card {
  .trezo-card-content {
    h3 {
      font-size: 18px;
      margin-bottom: 15px;

      &:not(:first-child) {
        margin-top: 25px;
      }
    }
    ul {
      margin-top: 20px;

      li {
        margin-bottom: 15px;
        padding-left: 20px;

        &::before {
          left: 0;
          top: 5px;
          width: 8px;
          height: 8px;
          content: "";
          border-radius: 50%;
          position: absolute;
          background: var(--primaryColor);
        }
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .personal-info-card {
    .trezo-card-content {
      .patient-info {
        margin-bottom: 20px;

        img {
          width: 80px;
        }
        h4 {
          font-size: 18px;
        }
      }
      h3 {
        font-size: 16px;
        margin-bottom: 15px;
      }
      &.info {
        h5 {
          font-size: 15px;
        }
      }
    }
  }
  .patient-details-card {
    .trezo-card-content {
      h3 {
        font-size: 16px;

        &:not(:first-child) {
          margin-top: 20px;
        }
      }
    }
  }
}
</style>
