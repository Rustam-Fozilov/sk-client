<template>
  <div>
    <the-navbar/>

    <div class="pt-24">
      <slot/>
    </div>
  </div>
</template>

<script setup lang="ts">
import TheNavbar from "@/components/TheNavbar.vue";

</script>

<style>

</style>
