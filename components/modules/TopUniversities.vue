<template>
  <div>
    <div class="flex flex-col gap-12">
      <div class="flex justify-between items-end">
        <div class="title">
          Top universitetlar
        </div>
        <a href="/universities/" class="hover:underline">
          Barchasini ko'rish
        </a>
      </div>

      <div class="flex justify-start gap-5">
        <university-list :universities="[1, 2, 3, 4]"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>
