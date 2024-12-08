<template>
  <div id="university_pagination" class="flex justify-center mt-12 sm:mt-7">
    <div class="flex gap-2 flex-wrap items-center sm:gap-0">
      <div class="sm:hidden">
        <BtnPrimary>
          <template #btn-primary>
            Oldingisi
          </template>
        </BtnPrimary>
      </div>
      <div class="hidden sm:block">
        <button class="bg-primary-blue py-1.5 px-4 rounded-full text-white hover:bg-opacity-70 transition duration-300">
          ←
        </button>
      </div>
      <div class="flex gap-0">
        <div class="cursor-pointer w-12 h-12 flex justify-center items-center rounded-full bg-white hover:bg-soft-blue hover:text-white transition duration-300">
          1
        </div>
        <div class="cursor-pointer w-12 h-12 flex justify-center items-center text-white rounded-full bg-soft-blue">
          2
        </div>
        <div class="cursor-pointer w-12 h-12 flex justify-center items-center rounded-full bg-white hover:bg-soft-blue hover:text-white transition duration-300">
          3
        </div>
        <div class="w-12 h-12 flex justify-center items-center rounded-full bg-white">
          ...
        </div>
        <div class="cursor-pointer w-12 h-12 flex justify-center items-center rounded-full bg-white hover:bg-soft-blue hover:text-white transition duration-300">
          12
        </div>
      </div>
      <div class="sm:hidden">
        <BtnPrimary>
          <template #btn-primary>
            Keyingisi
          </template>
        </BtnPrimary>
      </div>
      <div class="hidden sm:block">
        <button class="bg-primary-blue py-1.5 px-4 rounded-full text-white hover:bg-opacity-70 transition duration-300">
          →
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BtnPrimary from '../ui/BtnPrimary.vue';

</script>