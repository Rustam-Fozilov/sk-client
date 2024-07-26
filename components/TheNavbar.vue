<template>
  <div class="fixed w-full z-10">
    <div class="backdrop-blur-2xl">
      <div class="py-6 flex justify-between my-container border-b-[1px] border-opacity-20">
        <div @click="openNavbar" id="breadcrumbs" class="cursor-pointer">
          <div class="bg-soft-gray w-12 h-12 rounded-full flex items-center justify-center">
            <div class="flex flex-col gap-[5px]">
              <div class="bg-black h-[2px] w-[10px] rounded-full"></div>
              <div class="bg-black h-[2px] w-[20px] rounded-full"></div>
              <div class="bg-black h-[2px] w-[10px] rounded-full ml-[10px]"></div>
            </div>
          </div>
        </div>
        <div id="auth_action" class="flex gap-[10px]">
          <BtnSecondary>
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
          <BtnPrimary v-if="false" @clicked="gotoLogin">
            <template #btn-primary>
              Kirish
            </template>
          </BtnPrimary>
          <BtnSecondary @clicked="toggleProfileModal">
            <template #btn-secondary>
              <div class="flex items-center gap-2.5 font-tt-regular">
                <user-icon/>
                <div>Rustam</div>
              </div>
            </template>
          </BtnSecondary>
        </div>
      </div>
      <div class="absolute top-0 pt-6 left-1/2 -translate-x-1/2">
        <the-logo width="80px"/>
      </div>
    </div>
    <div>
      <navbar-float-menu/>
      <profile-modal v-if="isProfileOpened"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import TheLogo from "@/components/ui/TheLogo.vue";
import BtnPrimary from "@/components/ui/BtnPrimary.vue";
import BtnSecondary from "@/components/ui/BtnSecondary.vue";
import { useIsNavOpened } from "@/composables/navbar.composable";
import { useIsProfileOpened } from "@/composables/modals.composable";

const isNavOpened = useIsNavOpened();
const isProfileOpened = useIsProfileOpened();
const router = useRouter();

const openNavbar = () => {
  isNavOpened.value = true;
}

const gotoLogin = () => {
  router.push('/login')
}

const toggleProfileModal = () => {
  isProfileOpened.value = !isProfileOpened.value;
}

</script>
