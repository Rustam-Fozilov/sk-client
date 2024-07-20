<template>
  <div>
    <div class="flex flex-col gap-12">
      <div class="flex justify-between items-end">
        <div class="title">
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

</script>
