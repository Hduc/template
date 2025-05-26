<template>
  <v-card
    class="recent-clients-card trezo-card border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0">Recent Clients</h5>

      <v-menu>
        <template v-slot:activator="{ props }">
          <button
            type="button"
            v-bind="props"
            class="position-relative dot-btn p-0 bg-transparent border-none"
          >
            <i class="ri-more-2-fill"></i>
          </button>
        </template>

        <v-list class="menu-content">
          <button type="button" class="bg-transparent border-none">
            This Day
          </button>
          <button type="button" class="bg-transparent border-none">
            This Week
          </button>
          <button type="button" class="bg-transparent border-none">
            This Month
          </button>
          <button type="button" class="bg-transparent border-none">
            This Year
          </button>
        </v-list>
      </v-menu>
    </div>

    <div class="trezo-card-content">
      <ul class="m-0 p-0 list-unstyled">
        <li
          class="d-flex align-items-center position-relative"
          v-for="client in clients"
          :key="client.id"
        >
          <div class="image position-relative">
            <v-img :src="client.avatar" alt="user" class="rounded-circle" />
            <span
              :class="[
                'active-status',
                client.status === 'online' ? 'online' : 'offline',
              ]"
            ></span>
          </div>
          <div class="content">
            <span class="d-block fw-semibold text-black"> Johhna Loren </span>
            <span class="d-block"> Doctor </span>
          </div>
          <RouterLink to="/social/profile" class="link-btn lh-1">
            <i class="ri-arrow-right-line"></i>
          </RouterLink>
        </li>
      </ul>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import image1 from "@/assets/images/user-177.png";
import image2 from "@/assets/images/user-157.png";
import image3 from "@/assets/images/user-158.png";
import image4 from "@/assets/images/user-159.png";
import image5 from "@/assets/images/user-160.png";
import image6 from "@/assets/images/user-154.png";

interface Client {
  id: number;
  name: string;
  profession: string;
  avatar: string;
  status: "online" | "offline";
}

export default defineComponent({
  name: "RecentClients",
  setup() {
    const clients: Client[] = [
      {
        id: 1,
        name: "Johhna Loren",
        profession: "Doctor",
        avatar: image1,
        status: "online",
      },
      {
        id: 2,
        name: "Zinia Watson",
        profession: "Lawyer",
        avatar: image2,
        status: "online",
      },
      {
        id: 3,
        name: "Angela Carter",
        profession: "Businesswoman",
        avatar: image3,
        status: "online",
      },
      {
        id: 4,
        name: "Skyler White",
        profession: "Enterpreuner",
        avatar: image4,
        status: "offline",
      },
      {
        id: 5,
        name: "Jane Ronan",
        profession: "Editor",
        avatar: image5,
        status: "online",
      },
      {
        id: 6,
        name: "Viktor James",
        profession: "Editor",
        avatar: image6,
        status: "offline",
      },
    ];

    return {
      clients,
    };
  },
});
</script>

<style scoped lang="scss">
.recent-clients-card {
  .trezo-card-content {
    ul {
      li {
        border-bottom: 1px solid var(--borderColor);
        gap: 12px;
        padding: {
          top: 10px;
          bottom: 10px;
        }
        .image {
          padding: {
            right: 2px;
            bottom: 2px;
          }
          img {
            width: 35px;
          }
          .active-status {
            right: 0;
            bottom: 0;
            width: 12px;
            height: 12px;
            border-radius: 50%;
            position: absolute;
            background: var(--successColor);
            border: 1px solid var(--whiteColor);

            &.offline {
              background: #8695aa;
            }
          }
        }
        .content {
          span {
            &:nth-child(2) {
              font-size: 12px;
              margin-top: 2px;
            }
          }
        }
        .link-btn {
          top: 50%;
          right: 0;
          font-size: 18px;
          position: absolute;
          color: var(--bodyColor);
          transform: translateY(-50%);

          &:hover {
            color: var(--primaryColor);
          }
        }
        &:first-child {
          border-top: 1px solid var(--borderColor);
        }
      }
    }
  }
}
</style>
