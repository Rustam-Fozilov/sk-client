<template>
  <div>
    <the-navbar/>

    <div class="pt-24">
      <slot/>
    </div>

    <search-modal/>
  </div>
</template>

<script setup lang="ts">
import TheNavbar from "@/components/TheNavbar.vue";
import SearchModal from "@/components/modals/SearchModal.vue";

</script>

<style>

</style>
