<template>
  <div v-if="isNavOpened">
    <div class="absolute text-white top-0 bg-black w-screen h-screen">
      <div class="p-12 flex flex-col justify-between h-full">
        <div>
          <div class="flex items-center justify-between">
            <the-logo color="white" :width="logoWidth"/>
            <XIcon @click="closeNavbar" class="cursor-pointer" :width="xWidth"/>
          </div>

          <div class="mt-24 title flex flex-col gap-10 md:gap-6 sm:mt-16">
            <RouterLink class="duration-300 underline-hover md:mid-title" @click="isNavOpened = false" to="/universities">Universitetlar</RouterLink>
            <RouterLink class="duration-300 underline-hover md:mid-title" @click="isNavOpened = false" to="/profile/saved">Saqlanganlar</RouterLink>
            <RouterLink class="duration-300 underline-hover md:mid-title" @click="isNavOpened = false" to="/blog">Blog</RouterLink>
            <RouterLink class="duration-300 underline-hover md:mid-title" @click="isNavOpened = false" to="/contact">Kontaktlar</RouterLink>
          </div>
        </div>

        <div id="menu-footer" class="flex flex-col gap-7 md:gap-3">
          <div class="flex justify-between sub-title md:flex-col">
            <div class="flex gap-7 md:flex-col md:gap-3">
              <div class="opacity-50">Tezkor linklar:</div>
              <div @click="openSearchModal" class="cursor-pointer">Qidiruv</div>
              <RouterLink @click="isNavOpened = false" to="/login">Kirish</RouterLink>
            </div>
            <a href="/" class="flex items-center gap-3 md:mt-3">
              <div>SK Community</div>
              <arrow-white-icon width="20px"/>
            </a>
          </div>
          <div class="h-px bg-white w-full">
          </div>
          <div class="flex justify-between font-tt-medium">
            <div>
              hello@surish-kerak.uz
            </div>
            <div>
              FB INSTA TG
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useIsNavOpened } from "~/composables/navbar.composable";
import XIcon from "../ui/XIcon.vue";

const isSearchModalOpened = useIsSearchModalOpened();
const isNavOpened = useIsNavOpened();
const logoWidth = ref<string>('100px');
const xWidth = ref<string>('auto');

onMounted(() => {
  if (window.innerWidth < 768) {
    logoWidth.value = '70px';
    xWidth.value = '20px';
  }

  window.addEventListener('resize', () => {
    if (window.innerWidth < 768) {
      logoWidth.value = '70px';
      xWidth.value = '20px';
    }
  })
});

const closeNavbar = () => {
  isNavOpened.value = false;
}

const openSearchModal = () => {
  isNavOpened.value = false;
  isSearchModalOpened.value = true;
}

</script>

<style scoped>

</style>
