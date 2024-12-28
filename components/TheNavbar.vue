<template>
  <div class="fixed w-full z-10">
    <div class="backdrop-blur-2xl">
      <!-- DESKTOP -->
      <div class="py-6 flex justify-between my-container border-b-[1px] border-opacity-20 xl:hidden">
        <div @click="modalService.openNavbar" id="breadcrumbs" class="cursor-pointer">
          <div class="bg-soft-gray w-12 h-12 rounded-full flex items-center justify-center">
            <div class="flex flex-col gap-[5px]">
              <div class="bg-black h-[2px] w-[10px] rounded-full"></div>
              <div class="bg-black h-[2px] w-[20px] rounded-full"></div>
              <div class="bg-black h-[2px] w-[10px] rounded-full ml-[10px]"></div>
            </div>
          </div>
        </div>
        <div id="auth_action" class="flex gap-[10px]">
          <BtnSecondary @clicked="openSearchModal">
            <template #btn-secondary>
              <div class="flex justify-between gap-4 font-tt-medium opacity-50">
                <div class="flex items-center gap-2">
                  <search-icon/>
                  <div>Qidiring...</div>
                </div>
                <div>Ctrl + K</div>
              </div>
            </template>
          </BtnSecondary>
          <BtnPrimary v-if="!authToken" @clicked="gotoLogin">
            <template #btn-primary>
              Kirish
            </template>
          </BtnPrimary>
          <BtnSecondary v-if="authToken" @clicked="toggleProfileModal">
            <template #btn-secondary>
              <div class="flex items-center gap-2.5 font-tt-regular">
                <user-icon/>
                <div>{{ me?.name }}</div>
              </div>
            </template>
          </BtnSecondary>
        </div>
      </div>
      <div class="absolute top-0 pt-6 left-1/2 -translate-x-1/2 xl:hidden">
        <the-logo width="70px"/>
      </div>

      <!-- MOBILE -->
      <div class="py-5 hidden justify-between items-center my-container border-b-[1px] border-opacity-20 xl:flex">
        <div>
          <the-logo width="70px"/>
        </div>
        <div @click="modalService.openNavbar" class="cursor-pointer">
          <div class="bg-soft-gray w-12 h-12 rounded-full flex items-center justify-center">
            <div class="flex flex-col gap-[5px]">
              <div class="bg-black h-[2px] w-[10px] rounded-full"></div>
              <div class="bg-black h-[2px] w-[20px] rounded-full"></div>
              <div class="bg-black h-[2px] w-[10px] rounded-full ml-[10px]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <navbar-float-menu/>
      <profile-modal :me="me" v-if="isProfileOpened"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import TheLogo from "@/components/ui/TheLogo.vue";
import BtnPrimary from "@/components/ui/BtnPrimary.vue";
import BtnSecondary from "@/components/ui/BtnSecondary.vue";
import NavbarFloatMenu from "./main/NavbarFloatMenu.vue";
import ProfileModal from "./modals/ProfileModal.vue";
import { useIsProfileOpened } from "@/composables/modals.composable";
import { ModalService } from "~/core/services/modal.service";

const isProfileOpened = useIsProfileOpened();
const router = useRouter();
const modalService = new ModalService();
const authToken = ref<string | null>();
const { $getSessionItem } = useNuxtApp();
const me = ref<any>();

onBeforeMount(() => {
  authToken.value = $getSessionItem('authToken');

  if (authToken.value) {
    me.value = JSON.parse($getSessionItem('me') ?? '{}');
  }
});

const openSearchModal = () => {
  modalService.openSearchModal();
}

const gotoLogin = () => {
  router.push('/login')
}

const toggleProfileModal = () => {
  modalService.toggleProfileModal();
}

</script>
