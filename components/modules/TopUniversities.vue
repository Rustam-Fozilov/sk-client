<template>
  <div>
    <div class="flex flex-col gap-12 sm:gap-7">
      <div class="flex justify-between items-end sm:flex-col sm:items-start sm:gap-2">
        <div class="title sm:mid-title">
          Top universitetlar
        </div>
        <NuxtLink to="/universities/" class="hover:underline">
          Barchasini ko'rish
        </NuxtLink>
      </div>

      <div>
        <university-carousel-list/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import UniversityCarouselList from '../main/UniversityCarouselList.vue';

</script>
