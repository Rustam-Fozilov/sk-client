<template>
  <div>
    <div class="my-container">
      <div class="title text-center lg:mid-title">
        Jamiyatimizga qo'shil
      </div>
      <div @click="gotoCommunity" class="mt-7">
        <div class="w-full bg-soft-blue rounded-full p-8 sm:p-6 cursor-pointer text-white title lg:mid-title sm:text-lg flex sm:flex-nowrap sm:text-nowrap items-center justify-center gap-5 sm:gap-3 hover:bg-opacity-90 transition duration-300">
          <div class="sm:w-6">
            <tg-icon width="100%"/>
          </div>
          Surish Kerak Community
        </div>
      </div>
    </div>

    <div class="mt-24 lg:mt-12 w-full px-12 py-16 lg:px-7 lg:py-10 text-md md:text-sm bg-soft-blue font-tt-medium text-white">
      <div class="flex justify-between">
        <div>
          <the-logo color="white" width="80px"/>
        </div>
        <div class="flex gap-5">
          <a href="">FB</a>
          <a href="">INSTA</a>
          <a href="https://t.me/skdistrict" target="_blank">TG</a>
        </div>
      </div>

      <div class="h-[1px] my-7 bg-white"></div>

      <div class="flex justify-between mb-16 sm:flex-col">
        <div>
          hello@surish-kerak.uz
        </div>
        <div class="flex gap-5 tracking-tight sm:flex-col sm:gap-3">
          <RouterLink to="/universities">Universitetlar</RouterLink>
          <RouterLink to="/profile/saved">Sevimlilar</RouterLink>
          <RouterLink to="/blog">Blog</RouterLink>
          <RouterLink to="/contact">Kontaktlar</RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TgIcon from './ui/TgIcon.vue';
import TheLogo from './ui/TheLogo.vue';

const gotoCommunity = () => {
  window.open('https://t.me/skdistrict', '_blank');
}

</script>
