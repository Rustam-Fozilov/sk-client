<template>
  <div v-if="isNavOpened">
    <div class="absolute text-white top-0 bg-black w-screen h-screen">
      <div class="p-12 flex flex-col justify-between h-full">
        <div>
          <div class="flex items-center justify-between">
            <the-logo color="white" width="100px"/>
            <XIcon @click="closeNavbar" class="cursor-pointer"/>
          </div>

          <div class="mt-24 title flex flex-col gap-10">
            <RouterLink class="duration-300 underline-hover" @click="isNavOpened = false" to="/universities">Universitetlar</RouterLink>
            <RouterLink class="duration-300 underline-hover" @click="isNavOpened = false" to="/profile/saved">Sevimlilar</RouterLink>
            <RouterLink class="duration-300 underline-hover" @click="isNavOpened = false" to="/blog">Blog</RouterLink>
            <RouterLink class="duration-300 underline-hover" @click="isNavOpened = false" to="/contact">Contact</RouterLink>
          </div>
        </div>

        <div id="menu-footer" class="flex flex-col gap-7">
          <div class="flex justify-between sub-title">
            <div class="flex gap-7">
              <div class="opacity-50">Tezkor linklar:</div>
<!--              <RouterLink to="/">Savol yo'llash</RouterLink>-->
              <RouterLink to="/">Qidiruv</RouterLink>
              <RouterLink @click="isNavOpened = false" to="/login">Kirish</RouterLink>
            </div>
            <a href="/" class="flex items-center gap-3">
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

const isNavOpened = useIsNavOpened();

const closeNavbar = () => {
  isNavOpened.value = false;
}

</script>

<style scoped>

</style>
