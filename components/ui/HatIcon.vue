<template>
    <div>
      <img :width="width" :height="height" src="../../assets/images/svg/hat.svg" alt="Hat icon" class="max-w-none">
    </div>
  </template>
  
  <script setup lang="ts">
  
  defineProps({
    width: {
      required: false,
      default: 'auto'
    },
    height: {
      required: false,
      default: 'auto'
    },
  })
  
  </script>