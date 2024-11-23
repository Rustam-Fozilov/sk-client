<template>
  <div id="university_pagination" class="flex justify-center mt-12">
    <div class="flex gap-2">
      <div>
        <BtnPrimary>
          <template #btn-primary>
            Oldingisi
          </template>
        </BtnPrimary>
      </div>
      <div class="flex gap-2">
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
      <div>
        <BtnPrimary>
          <template #btn-primary>
            Keyingisi
          </template>
        </BtnPrimary>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BtnPrimary from '../ui/BtnPrimary.vue';

</script>